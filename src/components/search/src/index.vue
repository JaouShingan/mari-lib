<script setup>
import { computed, h, ref } from 'vue'
import MariForm from 'mari-lib/components/form'
const EnumPosition = Object.freeze({
  follow: 'follow',
  followRight: 'follow-right',
  row: 'row'
})
const props = defineProps({
  columns: {
    type: Array,
    default () {
      return []
    }
  },
  spans: { type: Number, default: 4 },
  colgap: { type: Number, default: 20 },
  rowgap: { type: Number, default: 10 },
  searchBtnPosition: {
    type: String,
    default: 'row',
    validator (value) {
      return ['follow', 'follow-right', 'row'].includes(value)
    }
  },
  // 默认折叠状态
  defaultFold: Boolean
})

const emits = defineEmits(['search', 'reset'])

const formRef = ref()
const queryData = defineModel()
// 是否折叠
const isFold = ref(props.defaultFold || false)

const handledColumns = computed(() => {
  let availableSpan = 0
  const resultCols = []
  if (props.searchBtnPosition === EnumPosition.row) {
    availableSpan = props.spans
  } else {
    availableSpan = props.spans - 1
  }
  if (isFold.value) {
    for (const col of props.columns) {
      if (availableSpan === 0) {
        break
      }
      if (!col.span) {
        if (availableSpan-- >= 0) {
          resultCols.push(col)
        }
      } else {
        if ((availableSpan -= col.span) >= 0) {
          resultCols.push(col)
        } else {
          break
        }
      }
    }
  } else {
    resultCols.push(...props.columns)
  }
  return resultCols
})

const onReset = function () {
  formRef.value.resetFields()
  queryData.value = {}
  emits('reset', queryData.value)
}
</script>
<template>
  <div class="mari-search">
    <mari-form
      ref="formRef"
      v-model="queryData"
      :columns="handledColumns"
      :rowgap="rowgap"
      :colgap="colgap"
      :last-div="false"
    >
      <template #append>
        <div
          class="mari-search-btns"
          :class="`mari-search-btns__${searchBtnPosition}`"
        >
          <el-button type="primary" @click="emits('search', queryData)"
            >搜索</el-button
          >
          <el-button @click="onReset">重置</el-button>
          <el-button @click="() => (isFold = !isFold)">{{
            isFold ? '展开' : '收起'
          }}</el-button>
        </div>
      </template>
    </mari-form>
  </div>
</template>
<style lang="scss">
.mari-search {
  .mari-search-btns {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    &.mari-search-btns__row {
      width: 100%;
    }
    &.mari-search-btns__follow {
      justify-content: flex-start;
    }
    .el-button {
      vertical-align: baseline;
    }
  }
}
</style>
