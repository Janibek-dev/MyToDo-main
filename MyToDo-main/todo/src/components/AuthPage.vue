<template>
  <div class="auth-container animate__animated animate__fadeIn">
    <div class="auth-card">
      <div class="auth-header">
        <i class="bi bi-person-circle fs-1 mb-3"></i>
        <h2>{{ isLoginMode ? 'Вход' : 'Регистрация' }}</h2>
      </div>

      <form @submit.prevent="handleSubmit" class="auth-form">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            placeholder="name@example.com"
            required
          />
          <label for="email">Email</label>
        </div>

        <div class="form-floating mb-4">
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            placeholder="Пароль"
            required
          />
          <label for="password">Пароль</label>
        </div>

        <button type="submit" class="btn btn-primary w-100 py-2 mb-3">
          <i class="bi" :class="isLoginMode ? 'bi-box-arrow-in-right' : 'bi-person-plus'"></i>
          {{ isLoginMode ? 'Войти' : 'Зарегистрироваться' }}
        </button>

        <div class="text-center">
          <button @click="toggleMode" class="btn btn-link" type="button">
            {{ isLoginMode ? 'Создать аккаунт' : 'Уже есть аккаунт?' }}
          </button>
        </div>
      </form>

      <transition name="fade">
        <div v-if="error" class="alert alert-danger mt-3">
          <i class="bi bi-exclamation-triangle-fill me-2"></i>
          {{ error }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'

export default {
  name: 'AuthPage',
  props: {
    darkMode: Boolean
  },
  data() {
    return {
      email: '',
      password: '',
      isLoginMode: true,
      error: ''
    }
  },
  methods: {
    toggleMode() {
      this.isLoginMode = !this.isLoginMode
      this.error = ''
    },
    async handleSubmit() {
      const auth = getAuth()
      try {
        if (this.isLoginMode) {
          await signInWithEmailAndPassword(auth, this.email, this.password)
        } else {
          await createUserWithEmailAndPassword(auth, this.email, this.password)
        }
        this.error = ''
      } catch (err) {
        this.error = this.isLoginMode
          ? 'Неверный email или пароль'
          : 'Ошибка регистрации. Пароль должен содержать минимум 6 символов.'
        console.error(err)
      }
    }
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 4rem);
}

.auth-card {
  background-color: var(--card-bg, #fff);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  transition: all 0.3s ease;
  border: 1px solid var(--border, #dee2e6);
}

.dark-mode .auth-card {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary, #0d6efd);
}

.auth-header h2 {
  font-weight: 600;
}

.auth-form {
  display: flex;
  flex-direction: column;
}

.form-floating > label {
  color: var(--text-light, #6c757d);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>