import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import X from 'mari-lib/components'

const app = createApp(App)
app.use(ElementPlus, {
  size: 'small'
})
app.use(X)
app.mount('#app')
