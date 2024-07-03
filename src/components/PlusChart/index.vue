<!--
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-03-11 13:58:15
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-06-26 16:37:54
 * @FilePath: /cfh-web/src/components/PlusChart/index.vue
 * @Description: 分类型认/申购数据
 * 
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved. 
-->
<template>
  <a-card
    :class="{ 'container-compact': isCompact, 'container-noBorder': noBorder }"
    class="container"
  >
    <!-- 带搜索 -->
    <template v-if="search?.length">
      <SubTitlePlus
        v-if="title"
        :text="title"
        :showLine="showSubTitleLine"
        :tips="tips"
        :subTitle="subTitle"
      />
      <div class="marginBottom16 row center between flex-wrap gap10">
        <search-box
          v-model="searchParam"
          :list="search"
          :showSearchBtn="showSearchBtn"
          @search="getData"
          @reset="resetHandle"
          @change="onChange"
          class="search-box"
        >
          <!-- 按钮插槽 -->
          <template v-if="slot.toolButton" #toolButton>
            <slot name="toolButton" :searchParam="searchParam" />
          </template>
        </search-box>
        <BtnLoading v-if="exportRequest" danger @click="exportHandle()" ref="btnRef"
          ><template #icon> <UploadOutlined /> </template> 导出</BtnLoading
        >
      </div>
    </template>

    <!-- 不带搜索 -->
    <SubTitlePlus
      v-else
      :text="title"
      :showLine="showSubTitleLine"
      :tips="tips"
      :subTitle="subTitle"
      class="row center"
    >
      <template #right>
        <slot name="toolButton" :searchParam="searchParam" />
        <BtnLoading v-if="exportRequest" danger @click="exportHandle()" ref="btnRef"
          ><template #icon> <UploadOutlined /> </template> 导出</BtnLoading
        >
      </template>
    </SubTitlePlus>
    <a-spin :spinning="loading">
      <slot />
    </a-spin>
  </a-card>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, useSlots, toRaw, computed } from 'vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import { delayLoading } from '@/utils/decorator';
import { initSearchParam } from './util';

import SubTitlePlus from './components/SubTitlePlus.vue';

const props = defineProps({
  showSubTitleLine: { type: Boolean, default: true }, // 是否显示title红线
  title: { type: String, default: '' },
  requestData: { type: Function, default: null },
  exportRequest: { type: Function, default: null },
  search: { type: Array, default: () => [] },
  tips: { type: [String, Array], default: '' },
  subTitle: { type: String, default: '' },
  showSearchBtn: { type: Boolean, default: true },
  noBorder: { type: Boolean, default: false }
});

const loading = ref(false);
const btnRef = ref();
const searchParam = ref({});
const slot = useSlots();

const isCompact = computed(() => !props.showSubTitleLine);

const showLoading = () => {
  loading.value = true;
};
const hideLoading = () => {
  loading.value = false;
};

const getParams = () => {
  const res = { ...toRaw(searchParam.value) };
  props.search.forEach((item) => {
    item?.modelTransform?.(res);
  });
  return res;
};

/** 请求数据 */
const getData = delayLoading(
  async () => {
    if (!props.requestData) return;
    await props.requestData?.(getParams());
  },
  { showLoading, hideLoading }
);

/** 导出 */
const exportHandle = delayLoading(
  async () => {
    await props.exportRequest?.(getParams());
  },
  { loadingRef: btnRef }
);

const resetHandle = () => {
  searchParam.value = initSearchParam(props.search);
};

function onChange() {
  getData();
}
watch(
  () => props.search,
  () => {
    searchParam.value = initSearchParam(props.search);
  },
  { immediate: true, deep: true }
);

onMounted(() => {
  getData();
});

defineExpose({ showLoading, hideLoading });
</script>

<style lang="less" scoped>
.container-compact {
  :deep(.ant-card-body) {
    padding: 16px;
  }
}

.container-noBorder {
  border: none;
  :deep(.ant-card-body) {
    padding: 0px;
  }
}

.container {
  .search-box {
    margin-bottom: 0;
  }
}

.subTitle {
  font-size: 12px;
  color: #656565;
  line-height: 20px;
  font-weight: 400;
  margin-left: 8px;
  align-self: flex-end;
}
</style>
