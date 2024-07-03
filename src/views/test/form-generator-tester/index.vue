<!--
 * @Author: liaojin liaojin@eastmoney.com
 * @Date: 2023-11-17 16:17:51
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-06-27 15:53:38
 * @FilePath: /cfh-web/src/views/test/form-generator-tester/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <PageContainer>
    <a-radio-group v-model:value="editType">
      <a-radio-button value="add">新增</a-radio-button>
      <a-radio-button value="edit">编辑</a-radio-button>
      <a-radio-button value="detail">详情</a-radio-button>
    </a-radio-group>
    <a-card>
      <FormGenerator v-model="formData" :configList="formList" ref="formRef">
        <template #footer>
          <div class="row end">
            <a-button class="btn" type="primary" @click="editSubmit(1)">提交</a-button>
            <a-button class="btn cancel">取消</a-button>
          </div>
        </template>
      </FormGenerator>
    </a-card>
  </PageContainer>
</template>

<script setup>
import { onMounted, ref, toRaw, watch } from 'vue';
import { formConfig } from './data.js';
import testData from './json';

const editType = ref('edit');

const formData = ref({});
const formRef = ref(null);
const formList = ref([]);

/** 初始化表单配置项 */
async function initFormList() {
  try {
    const config = formConfig(formRef.value?.getFormRef(), editType.value);
    await Promise.all(
      config.reduce((res, item) => {
        const { propsHandler } = item;

        if (!propsHandler) return res;

        Object.keys(propsHandler).forEach((key) => {
          const request = async () => {
            item.props[key] = await propsHandler[key]?.();
            return item;
          };
          res.push(request());
        });

        return res;
      }, [])
    );
    formList.value = config;
  } catch (e) {
    console.error(e);
  }
}

function initFormData(cardData = {}) {
  const newQuestion = {
    answer: '', // 答案
    id: '', // 题目id
    knowledgeDec: '', // 题目
    optionA: '', // 选项A
    optionB: '', // 选项B
    type: 0 // 理财知识类型（0：系统，1：自定义）
  };

  const formData = formList.value?.reduce((res, item) => {
    const { model, defaultValue, valueTransfer } = item;
    const value = valueTransfer?.(cardData, editType.value) ?? cardData[model];
    res[model] = value ?? defaultValue ?? undefined;
    return res;
  }, {});

  const lcknowLedgeResModelList = cardData?.lcknowLedgeResModelList?.map((item) => {
    if (item.type !== 0 || !['template', 'edit'].includes(editType.value)) return item;
    // 引用模版、草稿编辑 遇到系统默认答题 需要清空答题设置
    return {
      type: 0,
      id: '',
      knowledgeDec: '',
      answer: '',
      optionA: '',
      optionB: ''
    };
  });

  return {
    ...formData,
    relativeTimeRange: 30,
    lcKnowlegeList: lcknowLedgeResModelList ?? [{ ...newQuestion }, { ...newQuestion }] // 答题列表
  };
}

/** 升级券新增/编辑 */
function editSubmit() {
  formRef.value.validate();
  console.log('iii-提交参数', toRaw(formData.value));
}

async function refreshPage() {
  const detail = editType.value === 'add' ? {} : testData;
  await initFormList(5);
  formData.value = initFormData(detail);
}

watch(() => editType.value, refreshPage);

onMounted(refreshPage);
</script>

<style lang="less" scoped>
.btn {
  margin-left: 16px;
}
</style>
