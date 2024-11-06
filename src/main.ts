import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { routerConvert } from './router'

import './style.css'
import App from './App.vue'

createApp(App).use(routerConvert).use(createPinia()).mount("#app");
