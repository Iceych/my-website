<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-06-26 17:56:31
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-06-28 09:11:07
 * @FilePath: /cfh-web/src/views/test/form-generator-tester/ValidityType.vue
 * @Description: write something
 * 
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
-->
<template>
  <FormGenerator
    v-model="indateFormData"
    :configList="configList"
    :rules="rules"
    ref="formRef"
    layout="inline"
    class="form"
  />
</template>

<script setup>
import { ref, computed } from 'vue';
import dayjs from 'dayjs';
import { useVModel } from '@vueuse/core';
import InputNumber from '@/components/InputNumber/index.vue';

const props = defineProps({
  value: { type: Object, default: () => ({}) }
});
const emit = defineEmits(['update:value', 'change']);
const indateFormData = useVModel(props, 'value', emit);

const formRef = ref(null);

const configList = [
  {
    label: '',
    model: 'expirationDate',
    compType: 'a-radio-group',
    defaultValue: 1,
    props: {
      options: [
        { label: '绝对有效期', value: 0 },
        { label: '相对有效期', value: 1 }
      ]
    }
  },
  {
    label: '',
    model: 'absoluteTimeRange',
    compType: 'a-date-picker',
    props: {
      showTime: {
        hideDisabledOptions: true,
        defaultValue: dayjs('23:59:59', 'HH:mm:ss')
      }
    },
    show(formData) {
      return formData.expirationDate === 0;
    }
  },
  {
    label: '',
    model: 'relativeTimeRange',
    compType: InputNumber,
    props: {
      min: 1,
      placeholder: '领取后n天内有效',
      style: {
        width: '178px'
      }
    },
    show(formData) {
      return formData.expirationDate === 1;
    }
  }
];

// form校验规则
const rules = computed(() => ({
  expirationDate: [
    {
      required: true,
      message: '该项为必填项'
    }
  ],
  absoluteTimeRange: [
    {
      required: indateFormData.value.expirationDate === 0,
      message: '该项为必填项'
    }
  ],
  relativeTimeRange: [
    {
      required: indateFormData.value.expirationDate === 1,
      message: '该项为必填项'
    }
  ]
}));

/** 表单规则校验 */
const validate = () => {
  return formRef.value?.validate();
};

defineExpose({ validate });
</script>

<style lang="less" scoped>
.form {
  :deep(.ant-form-item) {
    margin-bottom: 0;
  }
}
</style>
