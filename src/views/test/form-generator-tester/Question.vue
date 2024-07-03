<!--
 * @Autor: 员嘉煊 (yuanjiaxuan@eastmoney.com)
 * @Date: 2024-01-24 15:09:20
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-06-27 15:35:30
 * @FilePath: /cfh-web/src/views/test/form-generator-tester/Question.vue
 * @Description: 答题设置
-->
<template>
  <div class="wrap">
    <h1 class="title">答题设置</h1>
    <template v-if="!isShowProduct">
      <div class="question" v-for="(group, i) in value" :key="i">
        <a-form-item :label="`题目${i + 1}`">
          <component
            class="input"
            :is="formTemplate.compType"
            v-model:value="group[formTemplate.type]"
            :options="formTemplate.options"
          ></component>
        </a-form-item>

        <!-- 题目表单 -->
        <template v-if="group[formTemplate.type] === 1">
          <a-form-item
            class="form-item"
            :label="item.text"
            v-for="(item, index) in formTemplate.list"
            :key="index"
            :name="['lcKnowlegeList', i, item.type]"
            :rules="item.rules"
          >
            <component
              class="input"
              :is="item.compType"
              v-model:value="group[item.type]"
              :options="item.options"
              :placeholder="item.placeholder"
              allowClear
            ></component>
          </a-form-item>
        </template>
      </div>
    </template>

    <div v-else class="question" v-for="(group, i) in value" :key="i">
      <!-- 题目表单 -->
      <a-form-item
        v-for="(item, index) in formTemplate.list"
        :label="item.text"
        :key="index"
        :name="['lcKnowlegeList', i, item.type]"
        :rules="item.rules"
      >
        <component
          class="input"
          :is="item.compType"
          v-model:value="group[item.type]"
          :options="item.options"
          :placeholder="item.placeholder"
          allowClear
          :disabled="true"
        />
      </a-form-item>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const props = defineProps(['value', 'editType']);

const isShowProduct = computed(() => {
  return ['detail', 'append'].includes(props.editType);
});
const formTemplate = ref({
  compType: 'a-radio-group',
  options: [
    { label: '系统默认', value: 0 },
    { label: '自定义题目', value: 1 }
  ],
  type: 'type',
  list: [
    {
      text: '题干',
      compType: 'a-textarea',
      value: '',
      type: 'knowledgeDec',
      placeholder: '不超过50个字',
      rules: initRules(50)
    },
    {
      text: '选项A',
      compType: 'a-input',
      value: '',
      type: 'optionA',
      placeholder: '不超过6个字',
      rules: initRules(6)
    },
    {
      text: '选项B',
      compType: 'a-input',
      value: '',
      type: 'optionB',
      placeholder: '不超过6个字',
      rules: initRules(6)
    },
    {
      text: '答案',
      compType: 'a-select',
      value: '',
      type: 'answer',
      options: [
        { label: '选项A', value: 'A' },
        { label: '选项B', value: 'B' }
      ],
      placeholder: '请选择'
    }
  ]
});

function initRules(max) {
  return [
    {
      required: true,
      trigger: null,
      type: 'string',
      max: max,
      message: `不超过${max}个字`,
      transform(value) {
        return $tools.cusTrim(value);
      }
    }
  ];
}
</script>

<style scoped>
.wrap {
  border-top: 1px solid #f0f0f0;
  padding-top: 16px;
}
.title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 22px;
  font-weight: 500;
}
.question {
  padding-left: 22px;
}
.question-line {
  display: flex;
  margin-top: 16px;
}
.text {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 22px;
  font-weight: 400;
  white-space: nowrap;
  min-width: 60px;
}
.input {
  flex: 1;
}
:deep(.ant-form-item-label) {
  min-width: 66px;
  text-align: left;
}
</style>
