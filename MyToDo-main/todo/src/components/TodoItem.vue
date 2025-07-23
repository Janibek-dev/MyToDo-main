<template>
  <div class="task-item" :class="{ 'task-completed': todo.completed, 'task-expired': isExpired(todo.deadline) }">
    <div class="task-content">
      <input
        type="checkbox"
        class="form-check-input"
        :checked="todo.completed"
        @change="emitCompletionChange"
      />

      <span class="task-text">{{ todo.text }}</span>

      <span v-if="todo.category" class="badge bg-secondary">
        {{ todo.category }}
      </span>

      <span v-if="todo.deadline" class="task-deadline">
        <i class="bi bi-calendar me-1"></i>
        <span :class="{ 'text-danger': isExpired(todo.deadline) }">
          {{ formatDate(todo.deadline) }}
        </span>

        <span v-if="!todo.completed" class="ms-2 text-muted small">
          ⏰ Осталось: {{ daysLeft(todo.deadline) }} дн.
        </span>
      </span>
    </div>

    <div class="task-actions">
      <button
        @click="completeTodo"
        class="btn btn-sm btn-success complete-btn"
        title="Завершить задачу"
        :disabled="todo.completed"
      >
        <i class="bi bi-check-circle"></i>
      </button>
      <button
        @click="$emit('delete', todo.id)"
        class="btn btn-sm btn-danger"
        title="Удалить задачу"
      >
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString()
    },
    daysLeft(dateStr) {
      const now = new Date()
      const deadline = new Date(dateStr)
      const diff = deadline - now
      return Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0)
    },
    isExpired(dateStr) {
      if (!dateStr || this.todo.completed) return false
      return new Date(dateStr) < new Date()
    },
    completeTodo() {
      const updated = {
        ...this.todo,
        completed: true,
        completedAt: new Date().toISOString()
      }
      this.$emit('update', updated)
    },
    emitCompletionChange() {
      const updated = {
        ...this.todo,
        completed: !this.todo.completed
      }
      this.$emit('update', updated)
    }
  }
}
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-color, #e2e8f0);
  transition: all 0.3s ease;
}

.task-item:last-child {
  border-bottom: none;
}

.task-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
  flex-wrap: wrap;
}

.task-text {
  flex-grow: 1;
  font-weight: 500;
}

.task-completed .task-text {
  text-decoration: line-through;
  opacity: 0.6;
}

.task-deadline {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
}

.task-expired .task-deadline {
  color: #dc3545; /* Bootstrap danger */
}

.task-actions {
  display: flex;
  gap: 0.5rem;
}

.complete-btn {
  transition: all 0.2s ease;
}

.complete-btn:hover {
  transform: scale(1.1);
}
.task-text {
  color: inherit; /* Наследует цвет от родителя */
  transition: color 0.3s;
}

.dark-mode .task-text {
  color: #ffffff;
}

.dark-mode .task-completed .task-text {
  color: #cccccc;
}

</style>