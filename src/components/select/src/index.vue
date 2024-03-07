<script setup>
import { computed, ref } from 'vue'
import useRemote from './useRemote'

const props = defineProps({
  readonly: Boolean,
  options: {
    type: Array,
    default: () => {
      return []
    }
  },
  mapKey: {
    type: Object,
    default: () => {
      return {
        label: 'label',
        value: 'value',
        show: [] // [字段名或(item)=>vnode]
      }
    }
  },
  dataSource: {
    type: Function,
    default: null
  },
  remote: Boolean,
  filterable: Boolean,
  initLoad: Boolean
})
const model = defineModel()
const loading = ref(false)
const asyncOptions = ref([])
const { remoteProps } = useRemote(props, asyncOptions, loading)
const showOptions = computed(() => {
  if (props.dataSource instanceof Function) {
    return asyncOptions.value
  } else {
    return props.options
  }
})
</script>
<template>
  <span v-if="readonly" class="mari-select--readonly">{{ model }}</span>
  <el-select
    v-else
    v-model="model"
    class="mari-select"
    :loading="loading"
    :filterable="remote || filterable"
    :remote-show-suffix="true"
    v-bind="{ ...$attrs, ...remoteProps }"
  >
    <slot>
      <el-option
        v-for="item in showOptions"
        :key="item[mapKey.value]"
        :label="item[mapKey.label]"
        :value="item[mapKey.value]"
      >
        <slot name="item" :item="item">
          <div
            v-if="mapKey.show instanceof Array && mapKey.show.length > 0"
            class="flex-between"
          >
            <template v-for="showKey in mapKey.show" :key="showKey">
              <component
                v-if="typeof showKey === 'function'"
                :is="() => showKey(item)"
              />
              <span v-else>{{ item[showKey] }}</span>
            </template>
          </div>
          <template v-else>{{ item[mapKey.label] }}</template>
        </slot>
      </el-option>
    </slot>
  </el-select>
</template>
<style lang="scss">
.mari-select {
}
.mari-select--readonly {
}
</style>
