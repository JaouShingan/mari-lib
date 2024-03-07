<script setup>
import { ElForm, ElFormItem } from 'element-plus'
import { computed, ref, watch } from 'vue'

const props = defineProps({
  columns: {
    type: Array,
    default: () => {
      return []
    }
  },
  spans: { type: Number, default: 4 },
  span: { type: Number, default: 1 },
  colgap: { type: Number, default: 0 },
  rowgap: { type: Number, default: 20 },
  labelWidth: { type: String, default: '80px' },
  lastDiv: {
    type: Boolean,
    default: true
  }
})

defineExpose({
  validate () {
    return formRef.value.validate(...arguments)
  },
  validateField () {
    return formRef.value.validateField(...arguments)
  },
  resetFields () {
    return formRef.value.resetFields(...arguments)
  },
  scrollToField () {
    return formRef.value.scrollToField(...arguments)
  },
  clearValidate () {
    return formRef.value.clearValidate(...arguments)
  }
})

const form = defineModel()

const formRef = ref()


const formStyle = computed(() => {
  return {
    'column-gap': `${props.colgap}px`,
    'row-gap': `${props.rowgap}px`
  }
})

const spanWidth = computed(() => {
  const allColgapWidth = (props.spans - 1) * props.colgap
  return `calc((100% - ${allColgapWidth}px) / ${props.spans})`
})
const itemVisible = ref({})

watch(
  form,
  () => {
    itemVisible.value = props.columns.reduce((prev, { key, hide }) => {
      if (hide instanceof Function) {
        prev[key] = hide(form)
      } else if (hide instanceof Boolean) {
        prev[key] = hide
      } else {
        prev[key] = true
      }
      return prev
    }, {})
  },
  {
    immediate: true,
    deep: true
  }
)

const columnsWrapper = computed(() => {
  return props.columns.map(({ span, ...other }) => {
    const itemStyle = {
      width: `calc(${spanWidth.value} * ${span || props.span || 1})`
    }
    return { ...other, itemStyle }
  })
})
</script>
<template>
  <el-form
    class="mari-form"
    ref="formRef"
    :model="form"
    inline
    :label-width="labelWidth"
    :style="formStyle"
  >
    <slot name="prepend"></slot>
    <template v-for="column in columnsWrapper" :key="column.key">
      <el-form-item
        v-if="itemVisible[column.key]"
        :key="column.key"
        :label="column.name"
        :prop="column.key"
        :style="column.itemStyle"
        v-bind="column.itemAttrs"
      >
        <component
          :is="column.component"
          v-model="form[column.key]"
          v-bind="column.attrs"
        ></component>
      </el-form-item>
    </template>
    <slot name="append"></slot>
    <div v-if="lastDiv" style="width: 100%"></div>
  </el-form>
</template>
<style lang="scss">
.mari-form {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > * {
    flex-grow: 0;
    flex-shrink: 0;
  }
  .el-form-item {
    margin-bottom: 0;
  }
  &.el-form--inline .el-form-item {
    margin-right: 0;
  }
  .el-form-item {
    .el-form-item__label {
      display: flex;
      align-items: center;
      line-height: 1.1;
    }
  }
}
</style>
