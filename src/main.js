import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './router/index'
//import './assets/main.css'

createApp(App).use(router).mount('#app')
