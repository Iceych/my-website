import dayjs from 'dayjs';
import { h } from 'vue';
import Question from './Question.vue';
import StrategyConfig from './StrategyConfig.vue';
import Tooltip from './Tooltip.vue';
import ValidityType from './ValidityType.vue';
import VipCheckLine from './VipCheckLine.vue';

// 使用门槛，下限符号值，例，使用门槛≥1000
const minCompareSymbolMap = {
  1: '≤',
  4: '＜',
  3: '='
};
const maxCompareSymbolMap = {
  2: '≤',
  5: '＜',
  3: '='
};

// 审核后台配置门槛时的符号映射(用于费比、抵扣金额符号映射)
const compareSymbolMap = {
  1: '≥',
  2: '≤',
  3: '=',
  4: '＞',
  5: '＜'
};
const deductTypeMap = {
  1: '抵扣金额',
  2: '抵扣费比'
};

/** 档位选项格式化 */
function formatGearLevelOptions(data = []) {
  try {
    const levelMap = new Map();
    data?.forEach((item) => {
      const {
        gearLevel,
        deductType,
        deductTypeComparator,
        deductTypeNumber,
        maxAmount,
        maxComparator,
        minAmount,
        minComparator
      } = item;
      if (!levelMap.has(gearLevel)) levelMap.set(gearLevel, []);
      levelMap.get(gearLevel).push({
        label: `${minAmount}${minCompareSymbolMap[minComparator]}使用门槛${
          maxCompareSymbolMap[maxComparator]
        }${maxAmount}且${deductTypeMap[deductType]}${
          compareSymbolMap[deductTypeComparator]
        }${deductTypeNumber}${deductType === 2 ? '‰' : ''}`,
        value: gearLevel
      });
    });
    return [...levelMap.entries()]
      .map(([key, value]) => {
        const prefix = `${$numberConfig[key]}档：`;
        if (value.length <= 1) return { label: `${prefix}${value[0].label}`, value: key };
        return {
          label: prefix + value.map((ele) => `【${ele.label}】`).join('或'),
          value: key
        };
      })
      .sort((a, b) => a.value - b.value);
  } catch (e) {
    console.error(e);
    return [];
  }
}

// 抵扣券表单编辑F
export const formConfig = (formRef, editType) => [
  {
    label: '',
    model: 'ifVipActivity',
    defaultValue: false,
    compType: VipCheckLine,
    props: { disabled: false }
  },
  {
    label: '档位',
    model: 'cardGearLevel',
    compType: 'a-select',
    valueTransfer: (data) => {
      const { cardGear, cardGearLevel } = data;
      if (!cardGearLevel) return;
      // 编辑
      if (['edit', 'template'].includes(editType)) return;
      const options = formatGearLevelOptions(cardGear);
      const { label } = options.find((item) => item.value === cardGearLevel) || {};
      return label || data.cardGearLevel || '';
    },
    props: {
      allowClear: true,
      placeholder: '请选择',
      disabled() {
        return ['detail', 'append'].includes(editType);
      },
      rules: [{ required: true }]
    },
    propsHandler: {
      options: async () => {
        try {
          const res = await $couponApi.getGearInfo();
          return formatGearLevelOptions(res);
        } catch (e) {
          console.error(e);
          return [];
        }
      }
    }
  },
  {
    label: '',
    model: 'policyConfiguration',
    compType: StrategyConfig,
    valueTransfer: (data) => {
      const { policyConfiguration, userGroupId } = data;
      if (!policyConfiguration)
        return {
          userGroupId: undefined,
          policyConfiguration: {
            '000': {
              key: '000',
              type: '000',
              minSG: null,
              faceValue: '',
              specialFaceValue: ''
            }
          }
        };
      return {
        userGroupId,
        policyConfiguration:
          policyConfiguration?.reduce((res, item) => {
            res[item.type] = { ...item, key: item.type };
            return res;
          }, {}) || {}
      };
    },
    props: {
      disabled() {
        return ['detail', 'append'].includes(editType);
      }
    }
  },
  {
    label: '投放数目',
    model: 'num',
    compType: 'a-input-number',
    valueTransfer: (data) => {
      if (editType === 'append') return '';
      return data.total;
    },
    props: {
      style: { width: '100%' },
      placeholder: '请输入',
      min: 1,
      disabled() {
        return ['detail'].includes(editType);
      },
      rules: [
        { required: true },
        {
          validator: () => {
            formRef.validateFields('repeatTotal');
            return Promise.resolve();
          }
        }
      ]
    }
  },
  {
    label: '可重复领取数量',
    compType: 'a-input-number',
    model: 'repeatTotal',
    defaultValue: 2,
    props: {
      style: { width: '100%' },
      placeholder: '请输入',
      max: 5,
      min: 1,
      disabled(formData) {
        return formData.ifVipActivity || ['detail', 'append'].includes(editType);
      },
      rules: (formData) => [
        { required: true },
        {
          validator: () => {
            const { num, repeatTotal } = formData;
            if (+repeatTotal > +num) {
              return Promise.reject(new Error('可重复领取数量不能大于投放数目'));
            }
            return Promise.resolve();
          }
        }
      ]
    }
  },
  {
    label: '领取时间',
    compType: 'a-range-picker',
    model: 'timeRange',
    valueTransfer: (data) => {
      const { provideStartTimeStr, provideEndTimeStr } = data;
      if (!provideEndTimeStr) return [];
      return [dayjs(provideStartTimeStr), dayjs(provideEndTimeStr)];
    },
    props: {
      showTime: {
        hideDisabledOptions: true,
        defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('23:59:59', 'HH:mm:ss')]
      },
      disabled() {
        return ['detail', 'append'].includes(editType);
      },
      rules: [{ required: true }]
    }
  },
  {
    label: '卡券用途',
    compType: 'a-select',
    tips: '注：指您配置的卡券将会在什么场景展示，请遵循专券专用原则选择卡券用途。',
    model: 'purpose',
    defaultValue: 1,
    valueTransfer: (data) => {
      return data.cardUse;
    },
    formItemProps: {
      tooltip: h(Tooltip)
    },
    props: {
      style: { width: '100%' },
      placeholder: '请选择',
      options: [
        {
          label: '仅专题使用',
          value: 1
        },
        {
          label: '仅小程序使用',
          value: 2
        },
        {
          label: '仅活动使用',
          value: 3
        },
        {
          label: '仅直播间使用',
          value: 4
        },
        {
          label: '仅IM群聊使用',
          value: 5
        },
        {
          label: '仅发奖后台使用',
          value: 7
        }
      ],
      rules: [{ required: true }]
    }
  },
  {
    label: '',
    compType: 'a-select',
    model: 'weex',
    show(formData) {
      return +formData.purpose === 2;
    },
    formItemProps: {
      wrapperCol: { offset: 2 }
    },
    props: {
      style: { width: '100%' },
      placeholder: '请选择',
      options: [
        { label: '产品测试专用', value: '4239b25f27474de8b5ed0a83bab28338' },
        { label: '小程序测试4', value: '4622507f83f64213a9baf63d48215f50F' }
      ],
      rules: [{ required: true, message: '该项为必填项' }]
    }
  },
  {
    label: '有效期类型：',
    compType: ValidityType,
    tips: (formData) => {
      if (formData?.expirationDateType?.expirationDate === 0)
        return '注：指用户领取卡券后的卡券有效截止日期，晚于该日期使用卡券则卡券无效，非卡券可领取时间的截止日期';
      return '注：指用户领取卡券后开始统计的卡券有效天数，晚于有效天数使用卡券则卡券无效';
    },
    defaultValue: { expirationDate: 1 },
    model: 'expirationDateType',
    valueTransfer: (data) => {
      return {
        expirationDate: data.validTimeType,
        absoluteTimeRange: dayjs(data.absoluteEndTime),
        relativeTimeRange: data.expireDay
      };
    },
    props: {
      disabled(formData) {
        return formData.ifVipActivity || ['detail', 'append'].includes(editType);
      }
    }
  },
  {
    label: '卡券领取方式：',
    compType: 'a-radio-group',
    model: 'pickWay',
    defaultValue: 0,
    valueTransfer: (data) => {
      return data.receiveType;
    },
    props: {
      options: [{ label: '理财知识', value: 0 }],
      disabled() {
        return ['detail', 'append'].includes(editType);
      }
    }
  },
  {
    label: '备注：',
    compType: 'a-input',
    model: 'note',
    props: {
      placeholder: '请输入',
      disabled() {
        return ['detail', 'append'].includes(editType);
      }
    }
  },
  // 答题设置
  {
    label: '',
    compType: Question,
    model: 'lcKnowlegeList',
    props: {
      disabled: false,
      placeholder: '请输入',
      editType
    }
  }
];
