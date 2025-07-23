<template>
  <div class="app-container" :class="{ 'dark-mode': darkMode }">
    <!-- Уведомление о состоянии соединения -->
    <transition name="fade">
      <div v-if="connectionError" class="connection-alert">
        <div class="alert alert-warning d-flex align-items-center mb-0">
          <i class="bi bi-wifi-off me-2"></i>
          <div>{{ connectionError }}</div>
          <button @click="loadTodos" class="btn btn-sm btn-outline-primary ms-auto">
            Повторить
          </button>
        </div>
      </div>
    </transition>

    <div class="todo-app">
      <!-- Заголовок и управление -->
      <div class="app-header">
        <h1 class="app-title">
          <i class="bi bi-check2-circle"></i>
          Мои задачи
        </h1>
        <div class="app-controls">
          <div class="stats">
            <span class="badge bg-primary">{{ activeTodosCount }} активных</span>
            <span class="badge bg-success">{{ completedTodosCount }} завершено</span>
          </div>
          <div class="actions">
            <button @click="toggleDarkMode" class="btn btn-sm btn-icon" :title="darkMode ? 'Светлая тема' : 'Тёмная тема'">
              <i class="bi" :class="darkMode ? 'bi-sun' : 'bi-moon'"></i>
            </button>
            <button @click="logout" class="btn btn-sm btn-icon btn-danger">
              <i class="bi bi-box-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Форма добавления -->
      <div class="add-task-card card">
        <div class="card-body">
          <div class="add-task-form">
            <input
              v-model="newTodoText"
              type="text"
              class="form-control task-input"
              placeholder="Новая задача..."
              @keyup.enter="addTodo"
            >
            <select class="form-select" v-model="newTodoCategory" style="max-width: 150px;">
            <option value="">Категория</option>
            <option v-for="category in categories" :key="category" :value="category">
               {{ category }}
            </option>
            </select>

            <input
              v-model="newTodoDeadline"
              type="date"
              class="form-control date-input"
            >
            <button @click="addTodo" class="btn btn-primary add-btn" :disabled="!newTodoText.trim()">
              <i class="bi bi-plus-lg"></i> Добавить
            </button>
          </div>
          <div v-if="addError" class="text-danger mt-2 small">
            <i class="bi bi-exclamation-triangle-fill me-1"></i>
            {{ addError }}
          </div>
        </div>
      </div>

      <!-- Фильтры -->
      <div class="filters">
        <div class="filter-group">
          <label>Статус:</label>
          <select v-model="filterStatus" class="form-select">
            <option value="all">Все</option>
            <option value="active">Активные</option>
            <option value="completed">Завершённые</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Категория:</label>
          <select class="form-select form-select-sm" v-model="filterCategory">
            <option value="">Все категории</option>
            <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
            </option>
          </select>
        </div>
      </div>

      <!-- Список задач -->
      <div class="tasks-container">
        <div v-if="loading" class="loading-state">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Загрузка...</span>
          </div>
          <p class="mt-2">Загрузка задач...</p>
        </div>

        <div v-else-if="filteredTodos.length > 0" class="tasks-list">
          <transition-group name="task-list" tag="div">
            <TodoItem
              v-for="todo in filteredTodos"
              :key="todo.id"
              :todo="todo"
              @update="updateTodo"
              @delete="deleteTodo"
            />
          </transition-group>
        </div>

        <div v-else class="empty-state">
          <i class="bi bi-inbox fs-1"></i>
          <p class="mt-2">Задачи не найдены</p>
          <button @click="resetFilters" class="btn btn-link">Сбросить фильтры</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref as dbRef, set, onValue, remove, off } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
import { db } from "../firebase";
import TodoItem from "./TodoItem.vue";

export default {
  components: { TodoItem },
  props: { darkMode: Boolean },
  data() {
    return {
      newTodoText: '',
      newTodoCategory: '',
      newTodoDeadline: '',
      categories: ['Работа', 'Учеба', 'Личное', 'Другое'],
      filterStatus: 'all',
      filterCategory: '',
      todos: [],
      loading: true,
      addError: null,
      connectionError: null,
      isOnline: navigator.onLine,
      retryCount: 0
    }
  },
  computed: {
    activeTodosCount() {
      return this.todos.filter(t => !t.completed).length;
    },
    completedTodosCount() {
      return this.todos.filter(t => t.completed).length;
    },
    filteredTodos() {
      return this.todos.filter(todo => {
        const statusMatch = 
          this.filterStatus === 'all' || 
          (this.filterStatus === 'active' && !todo.completed) || 
          (this.filterStatus === 'completed' && todo.completed);
        const categoryMatch = !this.filterCategory || todo.category === this.filterCategory;
        return statusMatch && categoryMatch;
      });
    }
  },
  mounted() {
    window.addEventListener('online', this.handleNetworkChange);
    window.addEventListener('offline', this.handleNetworkChange);
    this.loadTodos();
  },
  beforeUnmount() {
    window.removeEventListener('online', this.handleNetworkChange);
    window.removeEventListener('offline', this.handleNetworkChange);
    this.removeListeners();
  },
  methods: {
    handleNetworkChange() {
      this.isOnline = navigator.onLine;
      if (this.isOnline) {
        this.loadTodos();
      } else {
        this.connectionError = "Оффлайн режим. Проверьте подключение к интернету";
      }
    },
    removeListeners() {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const todosRef = dbRef(db, `users/${user.uid}/todos`);
        off(todosRef);
      }
    },
    async loadTodos() {
      if (!this.isOnline) {
        this.connectionError = "Оффлайн режим. Проверьте подключение к интернету";
        return;
      }

      try {
        this.loading = true;
        this.connectionError = null;
        
        const auth = getAuth();
        const user = auth.currentUser;
        
        if (!user) {
          throw new Error("Требуется авторизация");
        }

        this.removeListeners();

        const todosRef = dbRef(db, `users/${user.uid}/todos`);
        
        onValue(todosRef, (snapshot) => {
          this.connectionError = null;
          this.retryCount = 0;
          const data = snapshot.val();
          this.todos = data ? Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          })) : [];
          this.loading = false;
        }, (error) => {
          this.handleConnectionError(error);
        });

      } catch (error) {
        this.handleConnectionError(error);
      }
    },
    handleConnectionError(error) {
      console.error("Ошибка соединения:", error);
      this.loading = false;
      this.connectionError = this.getErrorMessage(error);
      
      if (this.retryCount < 3) {
        this.retryCount++;
        setTimeout(() => {
          this.loadTodos();
        }, 5000);
      }
    },
    getErrorMessage(error) {
      if (error.message.includes('PERMISSION_DENIED')) {
        return "Ошибка доступа. Проверьте авторизацию";
      } else if (error.message.includes('WebSocket')) {
        return "Проблема с подключением к серверу";
      } else {
        return error.message;
      }
    },
    async addTodo() {
      this.addError = null;
      
      if (!this.newTodoText.trim()) {
        this.addError = "Введите текст задачи";
        return;
      }

      try {
        const auth = getAuth();
        const user = auth.currentUser;
        
        if (!user) {
          throw new Error("Требуется авторизация");
        }

        const newTodoRef = dbRef(db, `users/${user.uid}/todos/${Date.now()}`);
        
        const todoData = {
          text: this.newTodoText.trim(),
          completed: false,
          createdAt: new Date().toISOString(),
          ...(this.newTodoCategory && { category: this.newTodoCategory }),
          ...(this.newTodoDeadline && { deadline: this.newTodoDeadline })
        };

        await set(newTodoRef, todoData);

        this.newTodoText = '';
        this.newTodoCategory = '';
        this.newTodoDeadline = '';
      } catch (error) {
        console.error("Ошибка добавления задачи:", error);
        this.addError = this.getErrorMessage(error);
      }
    },
    async updateTodo(updatedTodo) {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) throw new Error("Требуется авторизация");

        const todoRef = dbRef(db, `users/${user.uid}/todos/${updatedTodo.id}`);
        await set(todoRef, updatedTodo);
      } catch (error) {
        console.error("Ошибка обновления задачи:", error);
      }
    },
    async deleteTodo(todoId) {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) throw new Error("Требуется авторизация");

        const todoRef = dbRef(db, `users/${user.uid}/todos/${todoId}`);
        await remove(todoRef);
      } catch (error) {
        console.error("Ошибка удаления задачи:", error);
      }
    },
    resetFilters() {
      this.filterStatus = 'all';
      this.filterCategory = '';
    },
    async logout() {
      try {
        await signOut(getAuth());
      } catch (error) {
        console.error("Ошибка выхода:", error);
      }
    },
    toggleDarkMode() {
      this.$emit('toggle-dark-mode');
    }
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--bg-color, #f8f9fa);
  transition: background-color 0.3s;
}

.todo-app {
  max-width: 800px;
  margin: 0 auto;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.app-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-color, #212529);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.app-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stats {
  display: flex;
  gap: 0.5rem;
}

.add-task-card {
  margin-bottom: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color, #dee2e6);
}

.add-task-form {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 0.75rem;
}

@media (max-width: 768px) {
  .add-task-form {
    grid-template-columns: 1fr;
  }
}

.task-input {
  border-radius: 8px;
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 576px) {
  .filters {
    flex-direction: column;
  }
}

.filter-group {
  flex: 1;
}

.filter-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-muted, #6c757d);
}

.tasks-container {
  background-color: var(--card-bg, #fff);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color, #dee2e6);
}

.empty-state {
  text-align: center;
  padding: 3rem 0;
  color: var(--text-muted, #6c757d);
}

.empty-state i {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--text-muted, #6c757d);
}

.loading-state {
  text-align: center;
  padding: 2rem 0;
}

.connection-alert {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 600px;
  z-index: 1000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}

.task-list-move {
  transition: transform 0.3s ease;
}

/* Темная тема */
.dark-mode {
  --bg-color: #1a1a1a;
  --text-color: #f0f0f0;
  --card-bg: #2d2d2d;
  --text-muted: #a0a0a0;
  --border-color: #444;
}

.dark-mode .card {
  border-color: var(--border-color);
  background-color: var(--card-bg);
}

.dark-mode .form-control,
.dark-mode .form-select{
  background-color: #333;
  border-color: #444;
  color: #fff;
}

.dark-mode .form-control:focus,
.dark-mode .form-select:focus {
  background-color: #333;
  color: #fff;
  border-color: #6366f1;
  box-shadow: 0 0 0 0.25rem rgba(99, 102, 241, 0.25);
}

.dark-mode .btn-outline-secondary {
  border-color: #666;
  color: #ddd;
}

.dark-mode .btn-outline-secondary:hover {
  background-color: #666;
  color: #fff;
}

.dark-mode .empty-state,
.dark-mode .loading-state {
  color: white;
}
.dark-mode .task-input::placeholder {
  color: rgba(255, 255, 255, 0.7) !important;
}
.dark-mode .bi-sun {
  color: white !important;
}

</style>