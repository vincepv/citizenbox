import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales/i18n'

// load bootstrap for the whole project
import 'bootstrap/dist/css/bootstrap.css'



createApp(App)
  .use(i18n)
  .use(router)
  .mount('#app')

