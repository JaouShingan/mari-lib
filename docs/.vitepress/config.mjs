import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import menu from './menu.json'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Mari lib',
  description: 'vue element-plus',
  vite: {
    resolve: {
      alias: {
        'mari-lib': resolve(process.cwd(), 'src')
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件', link: menu[0].link }
    ],

    sidebar: [
      {
        text: '组件',
        items: menu
      }
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    outline: {
      level: [2, 3]
    }
  }
})
