import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue'
import router from './router'
import "./assets/init.css"

import elementIcon from "./plugins/icons";


const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)

app.use(elementIcon)

app.use(router)

app.mount('#app')
 