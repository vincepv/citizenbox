import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// state management
import { createPinia } from 'pinia'

// load bootstrap for the whole project
import 'bootstrap/dist/css/bootstrap.css'



const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')

