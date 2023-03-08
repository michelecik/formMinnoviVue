import { createApp } from 'vue'
import App from './App.vue'
import api from './api'
import router from './router'
import { createPinia } from 'pinia'

import './assets/main.css'

const app = createApp(App)

app.provide('api', api)
app.use(router)
app.use(createPinia())

app.mount('#app')
