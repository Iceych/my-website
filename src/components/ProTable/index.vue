<!--
 * @Author: chengchunlin 
 * @Date: 2024-01-08 15:39:57
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-27 16:13:40
 * @FilePath: /back-template/src/components/ProTable/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="pro-table">
    <!-- 顶部插槽 -->
    <a-card v-if="isSingleSearch && search?.length">
      <search-box
        v-model="searchParam"
        :list="search"
        @search="getTableList"
        @reset="resetHandle"
        :style="{ marginBottom: 0 }"
      >
        <!-- 按钮插槽 -->
        <template #toolButton>
          <component :is="slot.toolButton" :searchParam="searchParam"></component>
        </template>
      </search-box>
    </a-card>

    <slot name="top" />

    <a-card>
      <slot name="searchTop" />
      <template v-if="!isSingleSearch">
        <search-box
          v-if="search?.length"
          v-model="searchParam"
          :list="search"
          @search="getTableList"
          @reset="resetHandle"
        >
          <!-- 按钮插槽 -->
          <template #toolButton>
            <component :is="slot.toolButton" :searchParam="searchParam"></component>
          </template>
        </search-box>
        <template v-else-if="slot.toolButton">
          <slot name="toolButton">
            <component :is="slot.toolButton" :searchParam="searchParam"></component>
          </slot>
        </template>
      </template>
      <!-- 表头插槽 -->
      <div v-if="slot.tableHeader" :style="{ marginBottom: '16px' }">
        <slot name="tableHeader" :searchParam="searchParam" />
      </div>
      <a-table
        ref="tableRef"
        class="common-page-table"
        v-bind="attrs"
        :columns="tableColumns"
        :dataSource="tableData"
        :loading="loading"
        :pagination="pagination"
        :scroll="{
          x: 'max-content',
          y: tableYScroll
        }"
        bordered
        @change="handleTableChange"
      >
        <template v-for="(_, name) in tableSlots" #[name]="scopedData">
          <slot :name="name" v-bind="scopedData" />
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, useSlots, onMounted, computed, useAttrs, h } from 'vue';
import type { TableColumnType } from 'ant-design-vue';
import { useResizeObserver } from '@vueuse/core';
import { debounce } from 'lodash';
import SearchBox from './components/SearchBox.vue';
import ActionBtn from './components/ActionBtn.vue';
import RankNum from './components/RankNum.vue';

import AutoTooltip from '@/components/AutoTooltip.vue';
import MultipleEllipsis from '@/components/MultipleEllipsis.vue';

import { useTable } from '@/hooks/useTable';
import { cloneDeep } from 'lodash';

export interface ProTableProps {
  /**
   * @param 参数参考table表格默认columns配置
   *
   * 如果是操作了dataIndex请固定设置为_action
   * @param lines 超出多少行显示省略，适用直接取接口单字段展示，多字段组合请自行使用customRender
   * @param dataIndex 如果是操作了dataIndex请固定设置为_action
   * @param btns 操作列按钮配置,数组，每一项为对象或返回对象的函数，label(string)-按钮文案，on(function)-点击时间，confirm(boolean)-是否二次确认
   *  confirmText(string)-二次确认文案,hidden(boolean)-是否隐藏
   * 例如：
   * btns: [
   *        {
              label: '编辑',
              on: (row) => {
                console.log(row);
              }
            },
            ({ record }) => {
              return {
                label: '追加',
                on: () => {}
              };
            },
   *      ]
   *
   */
  columns: TableColumnType[];
  /**
   * @param model v-model 的值,作为查询参数， 如果时间范围的则传数组，例如：['startTime', 'endTime']
   * @param type 渲染成什么组件，默认是input，全部可选：input，select，date，range，time，time-range，具体请参考searchBox组件介绍
   * @param default 初始值，默认是''，model为数字是，default则也未数组
   * @param props 组件的props属性
   * @param on 监听的事件
   */
  search?: any[];
  initParams?: any; // 初始化请求参数 ==> 非必传（默认为{}）
  request?: (params: any) => Promise<any>; // 请求表格数据的 api ==> 非必传
  processData?: (params: any) => any; // 是否自动执行请求 api ==> 非必传（默认为true）
  pagination?: boolean; // 是否需要分页组件 ==> 非必传（默认为true）
  isFrontEndPagination: boolean; //是否前端分页
  autoInit: boolean; //是否自动初始化
  scrollY: number; //表格Y轴滚动高端
  isSingleSearch: boolean; //是否单独的搜索区，与表格分离不共用card组件
}
const slot = useSlots();
const attrs = useAttrs();

const tableSlots = computed(() => {
  const res = {};
  for (let item in slot) {
    if (!['top', 'searchTop', 'toolButton', 'tableHeader'].includes(item)) {
      res[item] = slot[item];
    }
  }
  return res;
});

const tableYScroll = ref();
const tableRef = ref();
const props = withDefaults(defineProps<ProTableProps>(), {
  columns: () => [],
  search: () => [],
  initParams: {},
  action: () => [],
  request: async () => ({}),
  processData: (data: any) => ({ total: data?.totalRecord || 0, list: data?.data || [] }),
  pagination: true,
  isFrontEndPagination: false,
  autoInit: true,
  scrollY: 0,
  isSingleSearch: false
});

const { tableData, pageInfo, loading, searchParam, getTableList, handleTableChange } = useTable(
  props.request,
  props.initParams,
  props.pagination,
  props.processData,
  props.isFrontEndPagination
);

// 分页配置
const pagination = computed(() => {
  return props.pagination
    ? {
        total: pageInfo.value.total,
        current: pageInfo.value.pageIndex,
        pageSize: pageInfo.value.pageSize,
        pageSizeOptions: ['10', '20', '30', '50'],
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: (total) => `总共 ${total} 条`
      }
    : false;
});

// 表格columns
const tableColumns = computed(() => {
  const columns = cloneDeep(props.columns);
  columns.forEach((item: TableColumnType) => {
    if (item.dataIndex === '_rank') {
      item.customRender = (params) => {
        const { current, pageSize } = pagination.value;
        return h(RankNum, { num: pageSize * (current - 1) + params.index });
      };
    }
    // 是否配置了超过多少行显示省略
    if (item.lines) {
      item.customRender = ({ record }) => {
        return item.lines === 1
          ? h(AutoTooltip, {
              text: record[item.dataIndex],
              maxWidth: item.width + 'px' || item.maxWidth + 'px' || '220px'
            })
          : h(MultipleEllipsis, {
              text: record[item.dataIndex],
              lines: item.lines,
              style: {
                height: item.lines * 22 + 'px'
              }
            });
      };
    }
    if (item.dataIndex === '_action') {
      item.customRender = ({ record, index }) => {
        let btns: any = [];
        item.btns.forEach((item) => {
          if ($tools.isFunc(item)) {
            item = item({ record, index });
          }
          if (!item.hidden) {
            btns.push(item);
          }
        });
        return h(ActionBtn, {
          btns,
          record,
          index
        });
      };
    }
  });
  return columns;
});

// 初始化表格数据 && 拖拽排序
onMounted(() => {
  initSearch();
  // TODO后续遇到手动初始化的情况再优化
  if (props.autoInit) {
    // 避免重复请求接口
    // getTableList();
  }
  if (!props.scrollY) {
    calculateTableHeight();
  } else {
    tableYScroll.value = props.scrollY;
  }
});

const initSearch = () => {
  const config: Record<string, any> = {};
  const search = props.search;
  // 变量搜索配置，生成查询参数
  search.forEach((item) => {
    const model = item._model || item.model;
    const isArrayItem = $tools.isArr(model);
    item.default = !$tools.isEmpty(item.default) ? item.default : isArrayItem ? [] : '';
    item.on = item.on || {};
    item.type = item.type || 'input';
    // 是否是数组-日期范围、自定义搜索参数等
    if (isArrayItem) {
      model.forEach((key: string, index: number) => {
        config[key] = item.default[index] || item.default[key] || '';
      });
      const specialKey = $tools.getSpecialKey(model);
      config[specialKey] = item.default;
      item.model = specialKey;
      // 同时保存之前的model
      item._model = model;
    } else {
      config[model] = item.default;
    }
  });
  searchParam.value = config;
};
const resetHandle = () => {
  initSearch();
  // getTableList();
};
const calculateTableHeight = () => {
  const elMain = document.getElementsByClassName('content-wrap')[0];
  const elContainer = elMain.children[0];
  const padding = 80; //容器pading*2
  const resize = () => {
    tableYScroll.value =
      elMain.offsetHeight -
      elContainer.offsetHeight -
      elContainer.offsetTop +
      tableRef.value.$el.offsetHeight -
      padding;
  };
  useResizeObserver(elContainer, resize);
};

const _getTableList = debounce(getTableList, 300);
watch(
  () => searchParam,
  () => {
    pageInfo.value.pageIndex = 1;
  },
  { deep: true }
);
watch(
  () => [pageInfo.value.pageSize, pageInfo.value.pageIndex, searchParam],
  () => {
    _getTableList();
  },
  { deep: true }
);

defineExpose({
  getTableList
});
</script>

<style lang="less" scoped>
:deep(.common-page-table) {
  .ant-table-pagination {
    padding-top: 14px;
  }
  .ant-pagination-total-text {
    flex: 1;
    // transform: translateY(-20px);
    font-size: 14px;
    color: #999999;
    line-height: 32px;
  }
}
</style>
