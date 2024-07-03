<!--
 * @Autor: 员嘉煊 (yuanjiaxuan@eastmoney.com)
 * @Date: 2024-04-28 16:48:27
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-05-29 11:01:21
 * @FilePath: /cfh-web/src/views/config/other/upgradeCoupon/components/StrategyConfig.vue
 * @Description: 卡券策略配置
-->
<template>
  <a-form class="strategy-form" ref="formRef" :model="editableData" :disabled="disabled">
    <div class="column">
      <label>卡券策略配置：</label>
      <a-table
        class="table"
        :columns="columns"
        :pagination="false"
        :data-source="dataSource"
        bordered
      >
        <!-- 表格header -->
        <template #headerCell="{ column, title }">
          <template v-if="column.dataIndex === 'specialFaceValue'">
            {{ title }}
            <a-select
              ref="select"
              v-model:value="userGroup"
              :options="userGroupOptions"
              size="small"
              placeholder="请选择用户组"
            ></a-select>
          </template>
        </template>

        <!-- 表格body -->
        <template #bodyCell="{ column, record }">
          <template v-if="column.formConfig">
            <a-form-item
              :name="[record.key, column.dataIndex]"
              :rules="preRules(column.formConfig, record)"
              class="form-item"
            >
              <component
                v-if="editableData[record.key] && column.formConfig"
                v-model:value="editableData[record.key][column.dataIndex]"
                v-bind="preVBind(column.formConfig, record)"
                :is="column.formConfig?.type"
              />
            </a-form-item>
          </template>
          <template v-if="column.dataIndex === 'operation'">
            <div class="editable-row-operations">
              <span v-if="editableData[record.key] && dataSource.length > 1">
                <a-popconfirm title="确认删除?" @confirm="doDelete(record.key)">
                  <a class="btn-delete">删除</a>
                </a-popconfirm>
              </span>
            </div>
          </template>
        </template>

        <template v-if="canAdd && !disabled" #summary>
          <a-table-summary fixed>
            <a-table-summary-row>
              <a-table-summary-cell :index="0" :col-span="4"></a-table-summary-cell>
              <a-table-summary-cell :index="3">
                <PlusOutlined class="icon" @click="handleAdd"
              /></a-table-summary-cell>
            </a-table-summary-row>
          </a-table-summary>
        </template>
      </a-table>
    </div>
  </a-form>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';
// import { cloneDeep } from 'lodash';

const props = defineProps({
  disabled: { type: Boolean, default: false },
  value: {
    type: Object,
    default() {
      return {
        userGroupId: '',
        policyConfiguration: {}
      };
    }
  }
});
const emit = defineEmits(['update:value']);

const allFundTypeOptions = $handles.transferOptions($dataConfig.fundTypeConfig);

/** 默认值，用于添加一条数据 */
const defaultFormData = {
  type: '000',
  minSG: null,
  faceValue: '',
  specialFaceValue: ''
};

const userGroupOptions = ref([]);
const formRef = ref(null);

// 指定用户组
const userGroup = computed({
  get: () => props.value.userGroupId,
  set: (val) => {
    emit('update:value', {
      userGroupId: val,
      policyConfiguration: editableData.value
    });
  }
});

// 策略配置表
const editableData = computed({
  get: () => props.value.policyConfiguration,
  set: (val) => {
    emit('update:value', {
      userGroupId: userGroup.value,
      policyConfiguration: val
    });
  }
});

/** 是否可新增策略 */
const canAdd = computed(() => {
  return dataSource.value.map((ele) => ele.type).length < allFundTypeOptions.length;
});

const dataSource = computed(() => {
  return Object.values(editableData.value || {});
});

const columns = computed(() => [
  {
    title: '适用产品类型',
    width: 160,
    dataIndex: 'type',
    customRender({ text }) {
      return $dataConfig.fundTypeConfig[text] ?? '--';
    },
    formConfig: {
      type: 'a-select',
      props: {
        placeholder: '请选择'
      },
      propsHandler: {
        options: (record) => {
          const { type } = record;
          const selectedTypes = dataSource.value.map((ele) => ele.type);
          return (
            allFundTypeOptions.map((item) => {
              return {
                ...item,
                disabled: item.value !== type && selectedTypes.includes(item.value)
              };
            }) || []
          );
        }
      },
      rules: [{ required: true, message: '请输入' }]
    }
  },
  {
    title: '使用门槛',
    width: 160,
    dataIndex: 'minSG',
    formConfig: {
      type: 'a-select',
      props: {
        placeholder: '请选择',
        options: [
          10, 50, 100, 200, 300, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 300000,
          400000, 500000
        ].map((value) => {
          return {
            label: `满${value}元可用`,
            value
          };
        })
      },
      rules: [{ required: true, message: '请输入' }]
    }
  },
  {
    title: '面值',
    width: 160,
    dataIndex: 'faceValue',
    formConfig: {
      type: 'a-input',
      props: {
        placeholder: '请输入',
        maxlength: 12,
        min: 1,
        type: 'number'
      },
      rules: [
        { required: true, message: '请输入' },
        {
          validator: async () => {
            dataSource.value.forEach((item) => {
              formRef.value.validateFields([[item.type, 'specialFaceValue']]);
            });
            return Promise.resolve();
          }
        }
      ]
    }
  },
  {
    title: '指定用户组特殊面值',
    width: 200,
    dataIndex: 'specialFaceValue',
    formConfig: {
      type: 'a-input',
      props: {
        placeholder: '需大于面值',
        maxlength: 12,
        min: 1,
        type: 'number',
        disabled: !userGroup?.value || props.disabled
      },
      rules: (record) => [
        { required: false, message: '请输入' },
        {
          validator: async (_rule, value) => {
            if (!value && value !== 0) {
              return Promise.resolve();
            }
            if (+value <= +record.faceValue) return Promise.reject('特殊面值需大于面值');
            return Promise.resolve();
          }
        }
      ]
    }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    width: 60
  }
]);

/** 新增一条卡券策略 */
const handleAdd = () => {
  const allTypes = allFundTypeOptions.map((item) => item.value);
  const selectedTypes = dataSource.value.map((ele) => ele.type);
  const remainTypes = allTypes.filter((item) => !selectedTypes.includes(item));
  const type = remainTypes[0];
  const key = Date.now();
  editableData.value[key] = { ...defaultFormData, key, type };
};

/** 删除一条卡券策略 */
const doDelete = (key) => {
  delete editableData.value[key];
};

/** 获取用户组 */
const getUserGroup = async () => {
  try {
    const res = await $couponApi.getGroupList({
      pageIndex: 1,
      pageSize: 1000
    });
    const data = res.data || [];
    userGroupOptions.value =
      data.map((item) => {
        return {
          ...item,
          label: item.name,
          value: item.id
        };
      }) || [];
  } catch (e) {
    console.error(e);
  }
};

/** props处理器，用于v-bind */
const preVBind = (config, record) => {
  const { props, propsHandler = {} } = config || {};
  const defaultRes = props || {};
  return Object.keys(propsHandler)?.reduce((res, key) => {
    const handler = propsHandler[key];
    res[key] = handler(record);
    return res;
  }, defaultRes);
};

/** rules处理器 */
const preRules = (config, record) => {
  const { rules = [] } = config;
  if (typeof rules === 'function') return rules(record);
  return rules;
};

const validate = () => {
  return formRef.value?.validate();
};

onMounted(() => {
  getUserGroup();
});

defineExpose({ validate });
</script>

<style lang="less" scoped>
.strategy-form {
  margin: 0;
  display: block;
  padding: 0;
  .column {
    width: 100%;
  }
  label {
    align-self: flex-start;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 22px;
    font-weight: 400;
    white-space: nowrap;
    margin-bottom: 8px;
    &::before {
      display: inline-block;
      margin-inline-end: 4px;
      color: #ff4d4f;
      font-size: 14px;
      font-family: SimSun, sans-serif;
      line-height: 1;
      content: '*';
    }
  }
  .form-item {
    margin-bottom: 0px;
  }
  .table {
    width: 100%;
  }
}
:deep(.table) {
  width: 100%;
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

.btn-delete {
  color: #ff4d4f;
}

.icon {
  font-size: 16px;
  color: #fa5914;
  cursor: pointer;
}
</style>
