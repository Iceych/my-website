/*
 * @Author: chengchunlin 
 * @Date: 2024-01-08 16:57:30
 * @LastEditors: chengchunlin 
 * @LastEditTime: 2024-03-27 16:08:35
 * @FilePath: /back-template/src/hooks/useTable.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { reactive, toRefs } from 'vue';

export const useTable = (
  api = () => ({}),
  initParams = {},
  pagination = true,
  processData = () => ({}),
  isFrontEndPagination = false
) => {
  const state = reactive({
    // 表格数据
    tableData: [],
    // 分页数据
    pageInfo: {
      // 当前页数
      pageIndex: 1,
      // 每页显示条数
      pageSize: 10,
      // 总条数
      total: 0
    },
    loading: false,
    // 查询参数(只包括查询)
    searchParam: {}, //接口查询参数
    allList: [] //前端分页全部数据
  });

  /**
   * 列表数据获取
   * @param {*} refresh 是否刷新接口-只针对前端分页
   */
  const getTableList = async (refresh = true) => {
    state.loading = true;
    try {
      state.searchParam = Object.assign(state.searchParam, initParams);
      const searchParam = {};
      // 过滤掉特殊key
      Object.keys(state.searchParam).forEach((key) => {
        if ($tools.isSpecialKey(key)) return;
        const value = state.searchParam[key];
        searchParam[key] = value === undefined ? null : value;
      });
      if (isFrontEndPagination) {
        await frontEndHandler(searchParam, refresh);
      } else {
        await backendHandle({
          ...searchParam,
          pageIndex: state.pageInfo.pageIndex,
          pageSize: state.pageInfo.pageSize
        });
      }
    } catch (error) {
      console.log('getTableList', error);
    }
    state.loading = false;
  };

  const frontEndHandler = async (searchParam, refresh) => {
    if (refresh || !state.allList.length) {
      let data = await api(searchParam);
      processData && (data = processData(data));
      state.allList = data?.list || [];
      state.tableData = data?.list || [];
      if (pagination) {
        state.pageInfo.total = data?.total || 0;
      }
    } else {
      state.tableData = state.allList.slice(
        (state.pageInfo.pageIndex - 1) * state.pageInfo.pageSize,
        state.pageInfo.pageIndex * state.pageInfo.pageSize
      );
    }
  };
  const backendHandle = async (searchParam) => {
    let data = await api(searchParam);
    processData && (data = processData(data));
    state.tableData = data?.list || [];
    if (pagination) {
      state.pageInfo.total = data?.total || 0;
      if (
        data.total > 0 &&
        state.pageInfo.pageIndex &&
        Math.ceil(data.total / state.pageInfo.pageSize) < state.pageInfo.pageIndex
      ) {
        state.pageInfo.pageIndex = state.pageInfo.pageIndex - 1;
        getTableList();
      }
    }
  };

  const handleTableChange = (pagination, filters, sorter) => {
    const { current, pageSize } = pagination;
    const { order, field } = sorter;
    state.pageInfo.pageIndex = current;
    state.pageInfo.pageSize = pageSize;
    // 排序
    if (state.searchParam.order !== order || state.searchParam.field !== field) {
      state.searchParam.order = order;
      state.searchParam.field = order ? field : undefined;
    }
  };

  const resetList = () => {
    state.pageInfo.pageIndex = 1;
  };

  return {
    ...toRefs(state),
    getTableList,
    resetList,
    handleTableChange
  };
};
