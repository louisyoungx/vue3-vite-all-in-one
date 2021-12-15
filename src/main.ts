import { createApp } from 'vue'
import App from './App.vue'
// eslint-disable-next-line import/extensions,import/no-unresolved
import router from './router/index'
// eslint-disable-next-line import/extensions,import/no-unresolved
import store from './store/index'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
