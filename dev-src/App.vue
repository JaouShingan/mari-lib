<script setup>
import { ref } from 'vue'
import { Field } from 'mari-lib/entity'
const columns = ref([
  new Field({
    name: '测试a1',
    key: 'a1',
    component: 'el-input',
    attrs: {
      placeholder: '你好世界',
      maxlenght: 10
    }
  }),
  {
    name: '测试a',
    key: 'a',
    component: 'el-input',
    attrs: {
      placeholder: '你好世界',
      maxlenght: 10
    },
    change () {
      console.log('fileName: App line14: ', arguments)
    }
  },
  {
    name: '测试测试测试测试测试ggb',
    key: 'b',
    component: 'el-switch',
    span: 2
  },
  {
    name: '测试c',
    key: 'c',
    // component: 'el-date-picker',
    component: 'el-input',
    hide: form => {
      return !form.value.b
    },
    attrs: {
      onChange () {
        console.log('fileName: App line33: ', arguments)
      }
      // type: 'date',
      // format: 'YYYY-MM-DD'
    }
  },
  {
    name: '测试d',
    key: 'd',
    component: 'el-input-number'
  }
])
const form = ref({ a: 1 })
</script>

<template>
  <div>
    {{ form }}
    <!-- <m-form v-model="form" :columns="columns" :colgap="20" /> -->

    <m-search v-model="form" :columns="columns" searchBtnPosition="follow-right" @search="console.log"/>
  </div>
</template>

<style scoped></style>
