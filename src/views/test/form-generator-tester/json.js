/*
 * @Author: chengchunlin chengchunlin@eastmoney.com
 * @Date: 2024-06-27 15:48:05
 * @LastEditors: chengchunlin chengchunlin@eastmoney.com
 * @LastEditTime: 2024-06-27 15:48:22
 * @FilePath: /cfh-web/src/views/test/form-generator-tester/json.js
 * @Description: write something
 *
 * Copyright (c) 2024 by 天天基金/程春霖, All Rights Reserved.
 */
export default {
  id: '64f968099d6648f1bb87a3ea09a173fd',
  cfhId: '100000007',
  giftId: '399af1ea2364428fa599b87c2c725e9f',
  ifVipActivity: true,
  cardUse: 1,
  cardUseStr: '仅专题使用',
  cardGear: [
    {
      id: 'da82da4e9b9b41dbb87f9af7ad1a2692',
      gearLevel: 4,
      minAmount: 50,
      minComparator: 1,
      maxAmount: 2000,
      maxComparator: 2,
      deductType: 1,
      deductTypeNumber: 5,
      deductTypeComparator: 1
    },
    {
      id: 'fb12a9260cc74390b9e9c4e4bad2b0ab',
      gearLevel: 4,
      minAmount: 50000,
      minComparator: 1,
      maxAmount: 100000,
      maxComparator: 5,
      deductType: 2,
      deductTypeNumber: 0.76,
      deductTypeComparator: 1
    }
  ],
  cardGearLevel: 4,
  policyConfiguration: [
    {
      type: '000',
      minSG: 100,
      faceValue: 39,
      specialFaceValue: 40
    },
    {
      type: '001',
      minSG: 50000,
      faceValue: 42,
      specialFaceValue: 49
    },
    {
      type: '002',
      minSG: 50000,
      faceValue: 99,
      specialFaceValue: 101
    },
    {
      type: '003',
      minSG: 200,
      faceValue: 40,
      specialFaceValue: 41
    }
  ],
  userGroupId: 'TG_93b7f8d190de6379',
  total: 2,
  provideStartTime: '2024-06-25T16:00:00.000+00:00',
  provideStartTimeStr: '2024-06-26 00:00:00',
  provideEndTime: '2024-07-03T15:59:59.000+00:00',
  provideEndTimeStr: '2024-07-03 23:59:59',
  surplus: 2,
  conversion: '--',
  expireDay: 30,
  validTimeType: 1,
  absoluteEndTime: '2024-08-02T15:59:59.000+00:00',
  receiveType: 0,
  supportType: 2,
  note: null,
  lcknowLedgeResModelList: [
    {
      type: 0,
      id: '30DAD3D083C546EBB4CCB5D7EF3CBA71',
      knowledgeDec: '混合型基金规定投资股票、债券的比例均不得超过多少？',
      optionA: '75%',
      optionB: '80%',
      answer: 'B'
    },
    {
      type: 0,
      id: '31B47F384E2342F1BA370629849B232D',
      knowledgeDec: '以下哪一项不属于基金分红的方式？',
      optionA: '红利再投',
      optionB: '发放卡券',
      answer: 'B'
    }
  ]
};
