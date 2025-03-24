import { createApp } from 'vue'
import './assets/style/globalStyle.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'remixicon/fonts/remixicon.css';
import router from './router'
import store from './store'
import App from './App.vue'

const app = createApp(App)

// use elementplus and icons
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)

app.use(store)

app.mount('#app')
