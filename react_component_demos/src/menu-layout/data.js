export const menu = [
  {
    classifyId: '1',
    classifyName: '素菜',
    classifySort: '1',
    commodityNum: '10'
  },
  {
    classifyId: '2',
    classifyName: '荤菜',
    classifySort: '2',
    commodityNum: '10'
  },
  {
    classifyId: '3',
    classifyName: '家常菜',
    classifySort: '3',
    commodityNum: '10'
  },
  {
    classifyId: '4',
    classifyName: '川菜',
    classifySort: '3',
    commodityNum: '10'
  },
  {
    classifyId: '5',
    classifyName: '湘菜',
    classifySort: '3',
    commodityNum: '10'
  }
];

const originList = [
  {
    tpSpuName: '酸辣土豆丝',
    tpSpuId: '2320286667',
    spuName: 'mt-规格-子菜',
    spuId: '1437772696',
    categoryName: '素菜',
    specs: [
      {
        tpSkuId: '2634398346',
        tpSkuName: '大份',
        price: 11,
        stock: 1000,
        isMatch: 2
      },
      {
        tpSkuId: '2634398345',
        tpSkuName: '小份',
        price: 11,
        stock: 1000,
        isMatch: 2
      }
    ]
  },
  {
    tpSpuName: '回锅肉',
    tpSpuId: '2320286667',
    spuName: 'mt-规格-子菜',
    spuId: '1437772697',
    categoryName: '荤菜',
    specs: [
      {
        tpSkuId: '263439834611',
        tpSkuName: '大份',
        price: 11,
        stock: 1000,
        isMatch: 2
      },
      {
        tpSkuId: '263439834522',
        tpSkuName: '小份',
        price: 11,
        stock: 1000,
        isMatch: 2
      }
    ]
  },
  {
    tpSpuName: '鱼香入丝',
    tpSpuId: '23202866---67',
    spuName: 'mt-规格-子菜',
    spuId: '143777269---7',
    categoryName: '荤菜',
    specs: [
      {
        tpSkuId: '2634398---34611',
        tpSkuName: '大份',
        price: 11,
        stock: 1000,
        isMatch: 2
      },
      {
        tpSkuId: '2634---39834522',
        tpSkuName: '小份',
        price: 11,
        stock: 1000,
        isMatch: 2
      }
    ]
  },
  {
    tpSpuName: '半白肉',
    tpSpuId: '232028666711',
    spuName: 'mt-规格-子菜',
    spuId: '143777269799',
    categoryName: '荤菜',
    specs: [
      {
        tpSkuId: '26343983462111',
        tpSkuName: '大份',
        price: 11,
        stock: 1000,
        isMatch: 2
      },
      {
        tpSkuId: '26343983422522',
        tpSkuName: '小份',
        price: 11,
        stock: 1000,
        isMatch: 2
      }
    ]
  },
  {
    tpSpuName: '豆腐',
    tpSpuId: '2320286667',
    spuName: 'mt-规格-子菜',
    spuId: '1437772695',
    categoryName: '家常菜',
    specs: []
  },
  {
    tpSpuName: '剁椒鱼头',
    tpSpuId: '232028666700',
    spuName: 'mt-规格-子菜',
    spuId: '143777-269799',
    categoryName: '湘菜',
    specs: [
      {
        tpSkuId: '263439834621-11',
        tpSkuName: '大份',
        price: 11,
        stock: 1000,
        isMatch: 2
      },
      {
        tpSkuId: '263439834225-22',
        tpSkuName: '小份',
        price: 11,
        stock: 1000,
        isMatch: 2
      }
    ]
  },
  {
    tpSpuName: '椒麻鸡',
    tpSpuId: '232028--666700',
    spuName: 'mt-规格-子菜',
    spuId: '143777-26-9799',
    categoryName: '川菜',
    specs: [
      {
        tpSkuId: '263-439834621-11',
        tpSkuName: '大份',
        price: 11,
        stock: 1000,
        isMatch: 2
      },
      {
        tpSkuId: '26343983-4225-22',
        tpSkuName: '小份',
        price: 11,
        stock: 1000,
        isMatch: 2
      }
    ]
  },
];

export const listObj = {};
menu.forEach(m => (listObj[m.classifyName] = { num: m.commodityNum, data: [] }));
// export const list =
originList.forEach(m => {
  // const obj = {};
  // obj['classifyName'] = m['classifyName'];
  // obj['num'] = m['commodityNum'];
  // obj.data = [];

  // originList.forEach((l) => {
  //   if (obj.classifyName === l.categoryName) {
  //     obj.data.push(l);
  //   }
  // });
  // return obj;
  listObj[m.categoryName].data.push(m);
});

console.log(listObj);
