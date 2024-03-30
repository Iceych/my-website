<!--
 * @Author: chengchunlin 
 * @Date: 2024-01-08 15:39:57
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-08 10:08:38
 * @FilePath: /cfh-web/src/components/ProTable/components/SearchBox.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 :disabled-date="(e) => disabledDate(e, item.model)"
          @calendarChange="(e) => onCalendarChange(e, item.model)"
-->
<template>
  <div class="search-box">
    <a-form ref="formRef" :model="formData" layout="inline">
      <a-form-item
        v-for="(item, index) in list"
        :label="item.label"
        :name="item.model"
        :key="index"
      >
        <component
          :is="componentsMap[item.type]"
          v-model:value="formData[item.model]"
          allowClear
          v-bind="item.props"
          @change="(e) => change(e, item)"
          class="form-item"
        ></component>
      </a-form-item>
      <a-form-item :wrapperCol="{ span: 24 }" class="btn-box">
        <a-button type="primary" @click="searchHandle">查询</a-button>
        <!-- <a-button type="primary" @click="resetHandle">重置</a-button> -->
        <slot name="toolButton" :searchParam="formData" />
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = defineProps(['modelValue', 'list']);
const emit = defineEmits(['update:modelValue', 'search', 'reset']);
const formData = useVModel(props, 'modelValue', emit);

type compType = 'input' | 'select' | 'date' | 'range' | 'time' | 'time-range';
const componentsMap: Record<compType, string> = {
  input: 'a-input',
  select: 'a-select',
  date: 'a-date-picker',
  range: 'a-range-picker',
  time: 'a-time-picker',
  'time-range': 'a-time-range-picker'
};

const change = (e, item) => {
  if (item._model) {
    item._model.forEach((key, index) => {
      formData.value[key] = e?.[index] || '';
    });
  }
};

// const disabledDate = (current, key) => {
//   if (!formData.value[key] || formData.value[key].length === 0) {
//     return false;
//   }
//   const tooLate = formData.value[key][0] && current.diff(formData.value[key][0], 'days') > 7;
//   const tooEarly = formData.value[key][1] && formData.value[key][1].diff(current, 'days') > 7;
//   return tooEarly || tooLate;
// };

// const onCalendarChange = (val, key) => {
//   formData.value[key] = val;
// };

const searchHandle = () => {
  emit('search');
};

const resetHandle = () => {
  emit('reset');
};
</script>

<style lang="less" scoped>
.search-box {
  margin-bottom: 24px;
  :deep(.form-item) {
    width: 276px;
    .ant-form-item-control-input,
    .ant-select-selector {
      width: 276px;
    }
  }
  :deep(.btn-box) {
    flex: 1;
    .ant-form-item-control-input-content {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      > * {
        margin-left: 8px;
      }
    }
  }
}
</style>
