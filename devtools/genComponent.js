import { resolve } from 'path'
import { outputFileSync } from 'fs-extra/esm'
import inquirer from 'inquirer'
import menuJson from '../docs/.vitepress/menu.json' assert { type: 'json' }

// writeFileSync
// resolve
const question = '请输入组件名'
inquirer.prompt([{ type: 'input', name: question }]).then(answers => {
  const componentName = answers[question]
  const componentDirPath = resolve(
    process.cwd(),
    `src/components/${componentName}`
  )
  // 生成组件index.js文件
  outputFileSync(
    `${componentDirPath}/index.js`,
    `import ${componentName} from './src/index.vue'\nexport default ${componentName}`
  )
  // 生成组件src/index.vue文件
  outputFileSync(
    `${componentDirPath}/src/index.vue`,
    `<script setup>\n</script>\n<template>\n\t<div class="mari-${componentName}"></div>\n</template>\n<style lang="scss">\n.mari-${componentName} {}\n</style>`
  )
  // 加入components.json文件
  // todo
  // 生成docs文件
  outputFileSync(
    resolve(process.cwd(), `docs/${componentName}.md`),
    `# ${componentName}

## 示例

<script setup>
</script>

### 基础示例

<m-${componentName} />

## 属性

| 名称 | 说明 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
|  |  |  |  |

## 事件

| 名称 | 说明 | 类型 |
| :-: | :-: | :-: |
|  |  |  |

## 方法

| 名称 | 说明 | 类型 |
| :-: | :-: | :-: |
|  |  |  |

## 插槽

| 名称 | 说明 |
| :-: | :-: |
|  |  |`
  )

  // 加入docs menu.json
  menuJson.push({ text: componentName, link: `/${componentName}` })
  outputFileSync(
    resolve(process.cwd(), 'docs/.vitepress/menu.json'),
    JSON.stringify(menuJson)
  )
})
