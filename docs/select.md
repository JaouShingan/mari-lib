# select

## 示例

<script setup>
import { ref, h } from 'vue'
const model1 = ref()
const options1 = ref([
  { label: 'label1', value: '1' },
  { label: 'label2', value: '2' },
  { label: 'label3', value: '3' }
])

const model2 = ref([])

const model3 = ref()

const mapKey = {
  label: 'name',
  value: 'data',
  show: ['name', 'prop3', (item) => h('span', `vnode-${item.prop4}`)]
}

const options3 = ref(new Array(20).fill(1).map((item, index) => {
  return { name: `name${index + 1}`, data: `d-${index}`, prop3: `prop3-${index+1}`, prop4: `prop4-${index}` }
}))
</script>

### 基础示例

<m-select v-model="model1" :options="options1" />

:::details 代码

```vue
<script setup>
import { ref, h } from 'vue'
const model1 = ref()
const options1 = ref([
  { label: 'label1', value: '1' },
  { label: 'label2', value: '2' },
  { label: 'label3', value: '3' }
])
</script>
<template>
  <m-select v-model="model1" :options="options1" />
</template>
```

:::

### 多选

<m-select v-model="model2" multiple :options="options1" />
:::details 代码

```vue
<script setup>
import { ref } from 'vue'
const model2 = ref()
const options1 = ref([
  { label: 'label1', value: '1' },
  { label: 'label2', value: '2' },
  { label: 'label3', value: '3' }
])
</script>
<template>
  <m-select v-model="model2" multiple :options="options1" />
</template>
```

:::

### mapKey

<m-select v-model="model3" :options="options3" :map-key="mapKey" />
:::details 代码

```vue
<script setup>
import { ref, h } from 'vue'
const model3 = ref()
const mapKey = {
  label: 'name',
  value: 'data',
  show: ['name', 'prop3', item => h('span', `vnode-${item.prop4}`)]
}

const options3 = ref(
  new Array(20).fill(1).map((item, index) => {
    return {
      name: `name${index + 1}`,
      data: `d-${index}`,
      prop3: `prop3-${index + 1}`,
      prop4: `prop4-${index}`
    }
  })
)
</script>
<template>
  <m-select v-model="model3" :options="options3" :map-key="mapKey" />
</template>
```

:::

## 属性

|             名称             |                                            说明                                             |           类型            |                     默认值                      |
| :--------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------: | :---------------------------------------------: |
|           readonly           |                                            只读                                             |          Boolean          |                      false                      |
|           options            |                                          选项数组                                           |           Array           |                       []                        |
|            mapKey            | 字段映射，show 数组里的值可以是字段名字符串，也可以是`(item) => vnode`方法，item 为当前选项 |          Object           | { label: \'label\', value: \'value\', show: []} |
|          dataSource          |                                        异步获取选项                                         | (queryString) =\> Promise |                      false                      |
|            remote            |                                        异步加载选项                                         |          Boolean          |                      false                      |
|          filterable          |                                         是否可筛选                                          |          Boolean          |                      false                      |
|           initLoad           |                    异通过 dataSource 获取数据时，初识时是否加载一次数据                     |          Boolean          |                      false                      |
| 其他属性与 element-plus 一致 |                                                                                             |                           |                                                 |

## 事件

| 名称 | 说明 | 类型 |
| :--: | :--: | :--: |
|      |      |      |

## 方法

| 名称 | 说明 | 类型 |
| :--: | :--: | :--: |
|      |      |      |

## 插槽

| 名称 |                    说明                    |
| :--: | :----------------------------------------: |
| item | 每一个选项的插槽，选项以`item`为名传入插槽 |
