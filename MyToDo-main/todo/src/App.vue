<template>
  <div class="app" :class="{ 'dark-mode': darkMode }">
    <transition name="fade" mode="out-in">
      <TodoList 
        v-if="user" 
        @toggle-dark-mode="toggleDarkMode"
        :dark-mode="darkMode"
        key="todo-list"
      />
      <AuthPage 
        v-else 
        :dark-mode="darkMode"
        key="auth"
      />
    </transition>
  </div>
</template>

<script>
import AuthPage from './components/AuthPage.vue'
import TodoList from './components/TodoList.vue'
import { onAuthStateChanged } from 'firebase/auth'

export default {
  name: 'App',
  components: {
    AuthPage,
    TodoList
  },
  data() {
    return {
      user: null,
      darkMode: false
    }
  },
  mounted() {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) {
      this.darkMode = savedMode === 'true'
    } else {
      this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    onAuthStateChanged(this.$auth, (user) => {
      this.user = user
    })
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', this.darkMode)
    }
  }
}
</script>

<style>
:root {
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --text: #1e293b;
  --text-light: #64748b;
  --bg: #f8fafc;
  --card-bg: #ffffff;
  --border: #e2e8f0;
  --success: #10b981;
  --danger: #ef4444;
  --warning: #f59e0b;
}

.dark-mode {
  --primary: #818cf8;
  --primary-hover: #6366f1;
  --text: #e2e8f0;
  --text-light: #94a3b8;
  --bg: #0f172a;
  --card-bg: #1e293b;
  --border: #334155;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  background-color: var(--bg);
  color: var(--text);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.app {
  min-height: 100vh;
  transition: background-color 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
body.dark-mode {
  color: #ffffff !important;
  -bg-color: #1a1a1a;
}

/* Или если вы используете класс на другом элементе */
.app-container.dark-mode {
  color: #ffffff;
}
</style>