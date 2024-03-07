import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MariLib from '../../../src/components/index'
export default {
  extends: DefaultTheme,
  enhanceApp ({ app }) {
    // 注册自定义全局组件
    app.use(ElementPlus, { size: 'small' })
    app.use(MariLib)
  }
}
