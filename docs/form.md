# form

## 示例

<script setup>
  import { ref } from 'vue'
  const myRef = ref()
  const model = ref({})
  const columns = ref([
    {
      name: '字段1',
      key: 'key1',
      component: 'el-input'
    },
    {
      name: '字段2',
      key: 'key2',
      component: 'el-input',
      span: 2,
      attrs: {
        placeholder: '输入1显示隐藏字段'
      }
    },
    {
      name: '字段3',
      key: 'key3',
      component: 'el-input',
      itemAttrs: {
        rules: [{ required: true, message: '字段3不能为空' }]
      }
    },
    {
      name: '字段4',
      key: 'key4',
      component: 'el-input'
    },
    {
      name: '字段5',
      key: 'key5',
      component: 'el-input',
      span: 3,
      attrs: {
        placeholder: '输入触发change和input事件，并将值打印在控制台',
        onChange (v) {
          console.log('change 字段5：', v)
        },
        onInput (v) {
          console.log('input 字段5：', v)
        }
      }
    },
    {
      name: '隐藏字段6',
      key: 'key6',
      component: 'el-switch',
      hide (form) {
        return form.value.key2 === '1'
      }
    }
  ])

  function submit1 () {
    myRef.value.validate()
  }

  function reset1 () {
    myRef.value.resetFields()
  }

  const model2 = ref({})
  const columns2 = ref(
    new Array(10).fill(1).map((v, index) => ({
      name: '字段' + index,
      key: 'key' + index,
      component: 'el-input'
    }))
  )
  const colgap = ref(20)
  const rowgap = ref(20)
  const spans = ref(4)
</script>

### 基础示例

<m-form ref="myRef" v-model="model" :columns="columns"/>
<el-button type="primary" @click="submit1">提交</el-button>
<el-button @click="reset1">重置</el-button>

::: details 代码

```vue
<script setup>
import { ref } from 'vue'
const myRef = ref()
const model = ref({})
const columns = ref([
  {
    name: '字段1',
    key: 'key1',
    component: 'el-input'
  },
  {
    name: '字段2',
    key: 'key2',
    component: 'el-input',
    span: 2,
    attrs: {
      placeholder: '输入1显示隐藏字段'
    }
  },
  {
    name: '字段3',
    key: 'key3',
    component: 'el-input',
    itemAttrs: {
      rules: [{ required: true, message: '字段3不能为空' }]
    }
  },
  {
    name: '字段4',
    key: 'key4',
    component: 'el-input'
  },
  {
    name: '字段5',
    key: 'key5',
    component: 'el-input',
    span: 3,
    attrs: {
      placeholder: '输入触发change和input事件，并将值打印在控制台',
      onChange(v) {
        console.log('change 字段5：', v)
      },
      onInput(v) {
        console.log('input 字段5：', v)
      }
    }
  },
  {
    name: '隐藏字段6',
    key: 'key6',
    component: 'el-switch',
    hide(form) {
      return form.value.key2 === '1'
    }
  }
])

function submit1() {
  myRef.value.validate()
}

function reset1() {
  myRef.value.resetFields()
}
</script>
<template>
  <m-form v-model="model" :columns="columns" />
</template>
```

:::

### 列、间距

<div style="margin: 10px 0">
  <span>spans <el-input-number v-model="spans" /></span>
  <span>colgap <el-input-number v-model="colgap" /></span>
  <span>rowgap <el-input-number v-model="rowgap" /></span>
</div>
<m-form v-model="model2" :columns="columns2" :spans="spans" :colgap="colgap" :rowgap="rowgap" />

::: details 代码

```vue
<script setup>
const model2 = ref({})
const columns2 = ref(
  new Array(10).fill(1).map((v, index) => ({
    name: '字段' + index,
    key: 'key' + index,
    component: 'el-input'
  }))
)
const colgap = ref(20)
const rowgap = ref(20)
const spans = ref(4)
</script>
<template>
  <div style="margin: 10px 0">
    <span>spans <el-input-number v-model="spans" /></span>
    <span>colgap <el-input-number v-model="colgap" /></span>
    <span>rowgap <el-input-number v-model="rowgap" /></span>
  </div>
  <m-form
    v-model="model2"
    :columns="columns2"
    :spans="spans"
    :colgap="colgap"
    :rowgap="rowgap"
  />
</template>
```

:::

## 属性

|    名称    |           说明           |      类型      | 默认值 |
| :--------: | :----------------------: | :------------: | :----: |
|  columns   | 由表单字段组成的一个数组 | Array\<Field\> |   []   |
|   spans    |     表单分隔成多少列     |     Number     |   4    |
|    span    |    每个字段占据多少列    |     Number     |   1    |
|   colgap   |          列间距          |     Number     |   0    |
|   rowgap   |          行间距          |     Number     |   20   |
| labelWidth |       字段标签宽度       |     String     |  80px  |
|  lastDiv   | 表单最后高度为 0 的 div  |    Boolean     |  true  |

## 事件

|         名称         | 说明 | 类型 |
| :------------------: | :--: | :--: |
| 同 element-plus 一致 |  -   |  -   |

## 方法

| 名称 | 说明 | 类型 |
| :--: | :--: | :--: |
|  无  |  -   |  -   |

## 插槽

|  名称   |        说明        |
| :-----: | :----------------: |
| prepend | 表单最前面插入内容 |
| append  | 表单最后面插入内容 |
