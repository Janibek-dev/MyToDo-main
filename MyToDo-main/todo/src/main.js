import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'

// Импортируем auth и db из нашего файла конфигурации
import { auth, db } from './firebase'

const app = createApp(App)

// Делаем auth и db доступными во всех компонентах
app.config.globalProperties.$auth = auth
app.config.globalProperties.$db = db
app.directive('prevent-auto-submit', {
  mounted(el) {
    el.addEventListener('submit', e => {
      if (!e.isTrusted) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    });
  }
});

app.mount('#app')