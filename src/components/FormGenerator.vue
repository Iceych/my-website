<!--
 * @Autor: 员嘉煊 (yuanjiaxuan@eastmoney.com)
 * @Date: 2024-04-28 13:50:52
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-07-03 17:46:03
 * @FilePath: /cfh-web/src/components/FormGenerator.vue
 * @Description: form生成器
-->
<template>
  <a-form class="form" ref="formRef" :model="formData" labelAlign="'right'">
    <a-form-item
      class="form-item"
      v-for="item in showConfigList"
      v-bind="item.formItemProps || {}"
      :name="item.model"
      :label="item.label"
      :key="item.type"
      :rules="handleConfig(item.props.rules)"
    >
      <component
        v-model:value="formData[item.model]"
        v-bind="item.props"
        :is="item.compType"
        :disabled="formItemDisabled(item)"
        ref="formItemRef"
      />
      <!-- 底部小字说明 -->
      <div v-if="item.tips">
        <VNode v-if="isVNode(handleConfig(item.tips))" :vnode="handleConfig(item.tips)" />
        <span v-else class="tips">{{ handleConfig(item.tips) }}</span>
      </div>
    </a-form-item>

    <a-form-item v-if="!!$slots.footer" :wrapperCol="{ span: 24 }">
      <slot name="footer" />
    </a-form-item>
  </a-form>
</template>

<script setup>
import { useVModel } from '@vueuse/core';
import { computed, isVNode, onMounted, ref } from 'vue';

const props = defineProps(['modelValue', 'configList']);
const emit = defineEmits(['update:modelValue']);
const formData = useVModel(props, 'modelValue', emit);

const formRef = ref(null);
const formItemRef = ref(null);

/** 根据show函数，过滤不显示的表单项 */
const showConfigList = computed(() => {
  return props.configList.filter((item) => {
    if (item.show === undefined) return true;
    if (typeof item.show === 'function') return item.show(formData.value);
    return item.show;
  });
});

/** 表单项是否不可编辑 */
function formItemDisabled(item) {
  const { disabled } = item.props || {};
  if (typeof disabled === 'function') return disabled?.(formData.value);
  return !!disabled;
}

/** 表单校验 */
function validate() {
  const formItemValide = formItemRef.value?.map((item) => item.validate?.());
  return Promise.all([formRef.value.validate(), ...formItemValide]);
}

/** 配置处理器，兼容object、function两种类型 */
function handleConfig(config, defaultValue) {
  if (!config) return defaultValue;
  if (typeof config === 'function') return config(formData.value);
  return config;
}

/** 获取formRef */
function getFormRef() {
  return formRef.value;
}

/** 初始化formData */
function initFormData() {
  const res = { ...formData.value };
  props.configList.forEach((config) => {
    if (!config?.hasOwnProperty?.('defaultValue')) return;
    const key = config.model;
    res[key] = res[key] || config.defaultValue;
  });
  formData.value = res;
}

onMounted(() => {
  initFormData();
});

defineExpose({ validate, getFormRef });
</script>

<style lang="less" scoped>
.form {
}
.form-item {
  margin: 0;
  margin-bottom: 18px;

  :deep(.ant-form-item-label) {
    min-width: 80px;
    text-align: left;
  }
}
.input {
  min-height: 32px;
}
.in-date {
  min-height: 32px;
  margin: 0;
}
.tips {
  font-size: 12px;
  color: rgba(153, 153, 153, 0.85);
  line-height: 20px;
  font-weight: 400;
}
.mp {
  margin-top: 10px;
}
</style>
