import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import router from './router'
import '@dsl/theme-default/styles/main.css'
import '@dsl/math'


createApp(App).use(router).mount('#app')
