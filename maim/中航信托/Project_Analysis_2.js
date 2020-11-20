$(() => {
  r1();
});

const r1 = () => {
  console.log(111);
  let cardName = 'r1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  // echart div高度
  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  let data = [
    {
      value: [15, 25, 100],
      name: '数据1',
    },
    {
      value: [25, 15, 100],
      name: '数据2',
    },
    {
      value: [45, 35, 100],
      name: '数据3',
    },
    {
      value: [85, 15, 100],
      name: '数据4',
    },
    {
      value: [35, 75, 100],
      name: '数据5',
    },
    {
      value: [35, 75, 150],
      name: '数据6',
    },
    {
      value: [75, 75, 100],
      name: '数据7',
    },
  ];
  let option = {
    color: ['rgba(51, 103, 214, .5)'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // type: 'cross'
      },
      backgroundColor: 'rgba(245, 245, 245, 0.8)',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      formatter: function (params) {
        let result = params.map((item) => {
          return item.name;
        });
        return result.join('<br/>');
      },
      textStyle: {
        color: '#000',
      },
    },
    grid: {
      left: 26,
      right: 4,
      top: 4,
      bottom: 26,
      containLabel: false,
    },
    visualMap: [
      {
        show: false,
        left: 'right',
        top: '10%',
        dimension: 2,
        itemWidth: 30,
        itemHeight: 120,
        calculable: true,
        precision: 0.1,
        text: ['圆形大小'],
        padding: [30, 0, 0, 30],
        textGap: 20,
        textStyle: {
          color: '#000',
        },
        inRange: {
          symbolSize: [10, 70],
        },
        outOfRange: {
          symbolSize: [10, 70],
          color: ['rgba(255, 255, 255, .2)'],
        },
        controller: {
          inRange: {
            color: ['rgba(51, 103, 214, .5)'],
          },
          outOfRange: {
            color: ['#e1e1e1'],
          },
        },
      },
    ],
    xAxis: {
      type: 'value',
      name: '财务杠杆',
      nameLocation: 'center',
      scale: true,
      splitNumber: 12,
      nameGap: 8,
      min: 0,
      max: 100,
      axisLabel: {
        fontSize: 14,
        formatter: function (value) {
          if (value === 10) {
            return '低';
          } else if (value === 90) {
            return '高';
          }
        },
      },
      nameTextStyle: {
        fontSize: 14,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#999',
        },
      },
    },
    yAxis: {
      type: 'value',
      name: '资产质量',
      scale: true,
      min: 0,
      max: 100,
      splitNumber: 10,
      nameGap: 8,
      nameLocation: 'center',
      axisLabel: {
        fontSize: 14,
        formatter: function (value) {
          if (value === 10) {
            return '低';
          } else if (value === 90) {
            return '高';
          }
        },
      },
      nameTextStyle: {
        fontSize: 14,
      },
      axisTick: {
        show: true,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e1e1e1',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#999',
        },
      },
    },
    series: {
      type: 'scatter',
      label: {
        show: true,
        formatter: '{b}',
      },
      itemStyle: {},
      markLine: {
        animation: false,
        lineStyle: {
          color: '#000',
          type: 'solid',
          width: 1,
        },
        label: {
          show: false,
          position: 'start',
          formatter: '{b}',
          fontSize: 11,
          color: '#666',
        },
        symbol: ['none', 'none'],
        silent: true,
        data: [
          {
            xAxis: 50,
          },
          {
            yAxis: 50,
          },
        ],
      },
      markArea: {
        silent: true,
        label: {
          align: 'center',
          position: ['50%', '43%'],
          fontSize: 30,
          fontWeight: '700',
          color: 'rgba(0, 0, 0, 0.2)',
        },
        itemStyle: {
          color: 'transparent',
        },
        data: [
          [
            {
              name: '高杠杆高质量',
              yAxis: 50,
              xAxis: 0,
            },
            {
              yAxis: 100,
              xAxis: 50,
            },
          ],
          [
            {
              name: '低杠杆高质量',
              yAxis: 50,
              xAxis: 50,
            },
            {
              yAxis: 100,
              xAxis: 100,
            },
          ],
          [
            {
              name: '高杠杆低质量',
              yAxis: 0,
              xAxis: 0,
            },
            {
              yAxis: 50,
              xAxis: 50,
            },
          ],
          [
            {
              name: '低杠杆低质量',
              yAxis: 0,
              xAxis: 50,
            },
            {
              yAxis: 50,
              xAxis: 100,
            },
          ],
        ],
      },
      data: data,
    },
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};
// 方块图
function initEchart(id, option) {
  const chart = echarts.init(document.getElementById('chart-' + id));
  chart.clear();
  chart.setOption(option);
  var dom = $('[data-id="' + id + '"]');
  dom.find('.card-title').addClass('font-weight-bold');
}

function dealSheetData(data) {
  var xAxis = [];
  var series = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      xAxis.push(v.sdd[0].n);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    var arr1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    // i==0 || i==1 || i==2 || i==3 || i==4
    debugger;
    if (arr1.includes(i)) {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? floatNum.accMul(cellVal.d.toFixed(4), 1) : '-');
      });
      series.push(itemArr);
    } else {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? cellVal.d.toFixed(4) : '-');
      });
      series.push(itemArr);
    }
  });

  return {
    series,
    xAxis,
  };
}
function renderBarEchart4(data, params) {
  var componentId = params.componentId;

  var chartData = dealSheetData(data);
  //     var xAxisData = [];
  //     var data1 = [];
  //     var data2 = [];
  //     for (var i = 0; i < 100; i++) {
  //     xAxisData.push('开业' + i + '个月');
  //     data1.push(Math.random() * 20);
  //     data2.push(Math.random() * 20);
  // }

  var option = {
    // color:['#a9cee8','#88b9e1','#498ace','#004fb6','#004ea1'],
    // color: ['#004ea1', '#004fb6', '#498ace', '#88b9e1', '#a9cee8'],
    color: ['#cbb0e3', '#516b91', '#59c4e6', '#edafda', '#93b7e3', '#a5e7f0'],
    series: [
      {
        type: 'treemap',
        leafDepth: 1,
        data: [
          {
            name: '西区',
            value: 62,
            label: {
              fontSize: 16,
              color: '#fff',
              show: true,
              position: [5, 5],
              formatter: function (params) {
                var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                return arr.join('\n\n');
              },
              rich: {
                association: {
                  fontSize: 16,
                  color: '#fff',
                },
                peoNum: {
                  fontSize: 30,
                  color: '#fff',
                  fontFamily: 'liquidCrystal',
                },
              },
            },
            children: [
              {
                name: '四川',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 24,
              },
              {
                name: '甘肃',
                label: {
                  fontSize: 14,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 26,
              },
              {
                name: '云南',
                label: {
                  fontSize: 15,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 16,
              },
              {
                name: '贵州',
                label: {
                  fontSize: 19,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 16,
              },
            ],
          },
          {
            name: '东区',
            label: {
              fontSize: 16,
              color: '#fff',
              show: true,
              position: [5, 5],
              formatter: function (params) {
                var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                return arr.join('\n\n');
              },
              rich: {
                association: {
                  fontSize: 16,
                  color: '#fff',
                },
                peoNum: {
                  fontSize: 30,
                  color: '#fff',
                  fontFamily: 'liquidCrystal',
                },
              },
            },
            value: 100,
            children: [
              {
                name: '上海',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 83,
                children: [
                  {
                    name: '宝山',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 20,
                  },
                  {
                    name: '徐汇',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 20,
                  },
                  {
                    name: '静安',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 10,
                  },
                  {
                    name: '黄埔',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 24,
                  },
                  {
                    name: '浦东',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 9,
                  },
                ],
              },
              {
                name: '江苏',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 17,
              },
            ],
          },
          {
            name: '南区',
            label: {
              fontSize: 16,
              color: '#fff',
              show: true,
              position: [5, 5],
              formatter: function (params) {
                var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                return arr.join('\n\n');
              },
              rich: {
                association: {
                  fontSize: 16,
                  color: '#fff',
                },
                peoNum: {
                  fontSize: 30,
                  color: '#fff',
                  fontFamily: 'liquidCrystal',
                },
              },
            },
            value: 48,
            children: [
              {
                name: '广州',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 24,
              },
              {
                name: '湖南',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 12,
              },
              {
                name: '湖北',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 6,
              },
              {
                name: '广西',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 6,
              },
            ],
          },
          {
            name: '北区',
            label: {
              fontSize: 16,
              color: '#fff',
              show: true,
              position: [5, 5],
              formatter: function (params) {
                var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                return arr.join('\n\n');
              },
              rich: {
                association: {
                  fontSize: 16,
                  color: '#fff',
                },
                peoNum: {
                  fontSize: 30,
                  color: '#fff',
                  fontFamily: 'liquidCrystal',
                },
              },
            },
            value: 42,
            children: [
              {
                name: '北京',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 24,
                children: [
                  {
                    name: '东城',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 8,
                  },
                  {
                    name: '西城',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 8,
                  },
                  {
                    name: '石景山',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 4,
                  },
                  {
                    name: '朝阳',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 4,
                  },
                ],
              },
              {
                name: '湖北',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 7,
              },
              {
                name: '天津',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 5,
              },
              {
                name: '黑龙江',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 6,
              },
            ],
          },
        ],
      },
    ],
  };

  initEchart(componentId, option);
}



function Chart_X1C1_Main() {
  var cardName = '目标城市房地产投资额占比';

//   if (getRequest().isView !== 'mobile') {
//     $('#' + cardName)
//       .parent()
//       .css('width', '75%');
//   }

  var echartDom = cfs.card.body.getDom(cardName).find('.echart');
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find('.freshBS').find('i').css('margin', 10);
  var option = {
 "color": [
         "#516b91",
         "#59c4e6",
         "#edafda",
         "#93b7e3",
         "#a5e7f0",
         "#cbb0e3"
     ],

    legend: {
        data:['GDP同比增速', '房地产投资同比增速']
    },

    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
        }
    ],
    yAxis: [

        {
            type: 'value',
            min:0,
            axisLabel: {  
                            show: true,  
                            interval: 'auto',  
                            formatter: '{value} %'  
                            },  
            scale: true
        }
    ],
    series: [
        {
            name: 'GDP同比增速',
            type: 'line',
            
            data: [34.4,30.1,26.7,20.3,20.5,19.8,15.1,10.5,12.4,16,14,15]
        },
        {
            name: '房地产投资同比增速',
            type: 'line',
             itemStyle: {  
                normal: {  
                    label: {  
                        show: true,  
                        position: 'top',  
                        formatter: '{c}%'  
                    }  
                }  
            },  

            data: [33, 28,16, 20,16, 11, 17,17, 10, 10,16, 16]
        }
    ]
};
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}


//extrajs全局方法
var Cus_theme = 'westeros';
var Cus_echarts = {};
var cfs = {
  //请求后端数据
  request: {
    /*通用同步请求
			code为200返回结果在.res内，否则结果在.err内（部分业务错误也会强制返回500或999）
			type: POST/GET/PUT/DELETE
			json: TRUE为application/json FALSE为application/x-www-form-urlencoded
			returnAll：TRUE返回所有结果, FALSE返回.resultObj（有时候结果在resultList里）
		*/
    common: {
      sendRequest: function (url, type, paramObj, json = false, returnAll = false) {
        var data = json ? JSON.stringify(paramObj) : paramObj;
        var contentType = 'application/' + (json ? 'json' : 'x-www-form-urlencoded');
        var resObj = {};
        var err = '';
        $.ajax({
          url: url,
          type: type,
          contentType: contentType,
          async: false,
          data: data,
          success: function (res) {
            if (returnAll) {
              resObj.res = res;
            } else {
              if (res.resultCode === 0) {
                resObj.res = res.resultObj;
              }
            }
          },
          error: function (XMLHttpRequest) {
            resObj.err = {};
            resObj.err.Message = XMLHttpRequest.responseJSON.Message.substr(0, 200) || XMLHttpRequest.statusText.substr(0, 200);
          },
        });
        return resObj;
      },
    },
    cube: {
      //script: Year{2020}->Period{6}->Version{Working}...
      queryCubeData: function (cubeName, script) {
        var url = Api.SeeplnCube + 'cube/queryCubeData';
        paramObj = $.extend(
          {
            cube_name: cubeName,
            script: script,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, true);
      },
      //通用保存方法
      save: function (sheetDatas) {
        var url = Api.SeeplnCube + 'spreadsheet/save';
        paramObj = $.extend(
          {
            sheetDatas: sheetDatas,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, true);
      },
    },
    foundation: {
      //根据user权限获取维度，最多2层
      getAccessDimensionMemberLevel: function (dimName, exp = '', name = '#root', id = '1', searchValue = '') {
        let url = Api.seepln + 'dimension/getAccessDimensionMemberLevel';
        paramObj = $.extend(
          {
            dimensionName: dimName,
            name: name,
            dimensionExpression: exp,
            id: id,
            searchValue: searchValue,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, false);
      },
      //根据表达式查询，不分权限
      selectDimensionMemberByNameFunction: function (dimensionMemberNames) {
        let url = Api.seepln + 'dimension/selectDimensionMemberByNameFunction';
        paramObj = $.extend(
          {
            dimensionMemberNames: dimensionMemberNames,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, false);
      },
      //执行自定义sql语句
      runComm: function (comm) {
        var url = Api.seepln + 'sqlparser/run/post';
        paramObj = $.extend(
          {
            sql: comm,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, false, true);
      },
    },
    python: {
      //同步调用python
      web: function (pyName, params) {
        var url = Api.python + 'start/web';
        paramObj = $.extend(
          {
            pyName: pyName,
            params: params,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, true, true);
      },
    },
  },
  card: {
    //dashboard单个卡片方法 bootstrap4图标：http://easyview.seepln.com/Limitless_2.0.1/Bootstrap%204/Template/layout_1/LTR/material/full/icons_icomoon.html
    head: {
      //获取卡片表头jquery dom
      getDom: function (cardName) {
        return $('#' + cardName);
      },
      //删除卡片表右边所有元素
      removeButton: function (dom) {
        dom.find('.header-elements').html('');
      },
      addSelectButton: function (carHead, buttonInfo) {
        var btn = $(`<div class="list-icons ${buttonInfo.id}">
						<label for="" style="width: 60px;margin: 0;margin-bottom:-4px">${buttonInfo.text}</label>
						<select
							class="form-control select selectXm"
							id="${buttonInfo.id}"
							data-fouc
						>
						</select>
					</div>`);
        let sHtml = '';
        buttonInfo.list.forEach(function (v) {
          sHtml += "<option value='" + v.key + "'>" + v.value + '</option>';
        });
        carHead.find('.header-elements').prepend(btn);
        $('#' + buttonInfo.id).html(sHtml);
        $('.select').select2({ minimumResultsForSearch: -1 });
        return btn;
      },
      /*添加下拉按钮
				buttonInfo: {
					id: "UploadButton",
					text: "上传数据",
					icon: "mi-file-upload",
					list: ["增量上传", "全量上传"]
				},
			*/
      addDropdownButton: function (carHead, buttonInfo) {
        var list = buttonInfo.list;
        for (var i = 0; i < list.length; i++) {
          list[i] = '<a index = "' + i + '" class="dropdown-item" href="#">' + list[i] + '</a>';
        }
        var btn = $(
          '<div id="' +
            buttonInfo.id +
            '" class="dropdown breadcrumb-elements-item mr-2 cursor-pointer">' +
            '<a class="dropdown-toggle" data-toggle="dropdown"><i class="' +
            buttonInfo.icon +
            ' icon text-default mr-1"></i>' +
            '<span class="iconSpan loadDes">' +
            buttonInfo.text +
            '</span></a>' +
            '<div class="dropdown-menu" style="min-width:100px">' +
            list.join('') +
            '</div></div>'
        );
        carHead.find('.header-elements').append(btn);
        if (buttonInfo.id.indexOf('_disable') == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + '_disable';
          var btn_disable = this.addDropdownButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.find('.dropdown-menu').remove();
          btn_disable.hover(function () {
            this.style.cursor = 'not-allowed';
          });
        }
        return btn;
      },
      /*添加普通按钮
				buttonInfo: {
					id: "UploadButton",
					text: "上传数据",
					icon: "mi-file-upload",
				},
			*/
      addButton: function (carHead, buttonInfo) {
        var btn = $(
          '<a class="breadcrumb-elements-item mr-2 cursor-pointer" id="' +
            buttonInfo.id +
            '"><div class="customLoader mr-1" style="margin-bottom: 2px; display: none;"></div><i class="' +
            buttonInfo.icon +
            ' icon text-default mr-1"></i><span class="iconSpan loadDes">' +
            buttonInfo.text +
            '</span></a>'
        );
        carHead.find('.header-elements').append(btn);
        if (buttonInfo.id.indexOf('_disable') == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + '_disable';
          var btn_disable = this.addButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.hover(function () {
            this.style.cursor = 'not-allowed';
          });
        }
        return btn;
      },
      //点击后调用防止反复执行
      disableButton: function (btn) {
        btn.hide();
        $('#' + btn.attr('id') + '_disable').show();
      },
      //恢复按钮可用
      enableButton: function (btn) {
        $('#' + btn.attr('id') + '_disable').hide();
        btn.show();
      },
    },
    body: {
      //获取卡片内容jquery dom
      getDom: function (cardName) {
        return $('#' + cardName).find('.card-body');
      },
      //添加文件上传卡片
      addFileTag: function (cardName, text) {
        var dom = $(
          '<div status="-1" filename="' +
            text +
            '" style="margin: 1.25rem; padding: 10px;display: inherit; background-color:#f7f7f7;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;">' +
            '<span style="margin-right: 15px;">' +
            text +
            '</span>' +
            '<i class="icon-bin delete" onclick="cfs.card.body.deleteFileTag(this)" style="margin-right: 10px;cursor: pointer;"></i>' +
            '<div class="customLoader" style="margin-bottom: 2px;display: none;"></div><span class="infotext" style="margin-left: 5px; margin-right: 5px; display: none;"></span>' +
            '<i data-trigger="hover" data-toggle="popover" data-placement="right" data-content="" class="infobtn icon-info22" style="margin-right: 10px;cursor: pointer; display: none;"></i>'
        );
        this.getDom(cardName).append(dom);
        return dom;
      },
      //删除文件上传卡片
      deleteFileTag: function (dom) {
        dom.parentElement.remove();
      },
    },
  },
  data: {
    //数据处理
    spreadjs: {
      //从excel二维表生成cube.save方法的sheetData（静态表格式）
      createSheetData: function (dimList, dimMap, dataTables, startIndex = 1, maxLength = 10000) {
        var sheetDataObj = { rowDatas: [] };
        if (dataTables == undefined || Object.keys(dataTables).length == 0) return sheetDataObj;
        //准备表头所在列和维度名的map
        var colMap = {};
        for (var i = 0; i < dataTables[0].length; i++) {
          var dimName = dimMap[dataTables[0][i].value] || dataTables[0][i].value;
          if (dimMap.indexOf(dimName) != -1) {
            colMap[i] = dimName;
          }
        }
        var rowDatasArr = [];
        for (var i = startIndex; i < startIndex + maxLength; i++) {
          if (dataTables[i]) {
            var arr = dataTables[i];
            var columnDimensionMemberMap = {};
            for (var c in colMap) {
              var val = arr[c].value;
              columnDimensionMemberMap[colMap[c]] = val;
            }
            rowDatasArr.push({ columnDimensionMemberMap: columnDimensionMemberMap });
          }
        }
        sheetDataObj.rowDatas = rowDatasArr;
        return sheetDataObj;
      },
    },
  },
  //echarts
  echarts: {
    init: function (dom, theme, option) {
      var ec = echarts.init(dom.get(0), theme);
      window.addEventListener('resize', function () {
        ec.resize();
      });
      this.refresh(ec, option);
      return ec;
    },
    refresh: function (ec, option) {
      ec.clear();
      ec.setOption(option);
    },
    correctHeight: function (cardName) {
      let echartDom = $('#' + cardName)
        .find('.card-body')
        .find('.echart');
      let cardBodyDom = $('#' + cardName).find('.card-body');

      let _height = $(cardBodyDom).height();
      $(echartDom).height(_height);
    },
    mobileHeight: function (cardName, height) {
      let cardDom = $('#' + cardName).parent();
      $(cardDom).height(height);
      let echartDom = $('#' + cardName)
        .find('.card-body')
        .find('.echart');
      let _height = $(echartDom).parent().height();
      $(echartDom).height(_height);
    },
  },
  //通用方法
  common: {
    //ajax要用的user属性
    userParams: {
      app: Userinfo.app,
      app_id: Userinfo.app,
      token: Userinfo.token,
      user_id: Userinfo.user_id,
      creater: Userinfo.user_id,
      tenant_code: Userinfo.tenant_code,
      tenantCode: Userinfo.tenant_code,
      language: Userinfo.language,
      description: Userinfo.language,
    },
    //是否对话框，按是后执行thenEvent
    dialogBox: function (text, thenEvent) {
      swal({
        title: text,
        text: '',
        type: 'info',
        showCancelButton: true,
        confirmButtonText: getLanguage('sure'),
        cancelButtonText: getLanguage('cancel'),
      }).then(function (result) {
        if (result.value) {
          thenEvent();
        }
      });
    },
    //excel的5位纯数字日期格式转yyyy-mm-dd
    valueToDate: function (value) {
      var n = Number(value.split('.')[0]);
      var date = new Date('1900-1-1');
      date.setDate(date.getDate() + n - 2);
      return date.format();
    },
  },
  //导出文件
  export: {
    /* 导出文件到指定格式 数据大用csv
			fileName：文件名不带格式
			dataJson：原始数据 eg. [{Entity: "E001", Year:"2020", Period:"9"},{Entity: "E001", Year:"2020", Period:"10"}]
			titleArr：导出的列名: eg. [Entity, Year]
		*/
    toCsv: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      var titleObj = dataJson[0];
      titleArr = titleArr || Object.keys(titleObj);
      var titleStr = titleArr.join('\t,');
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          var cell = dataJson[i][titleArr[j]] || '';
          if (cell.toString().indexOf(',') > -1) cell = '"' + cell + '"';
          rowArr.push(cell);
        }
        dataArr.push(rowArr.join('\t,'));
      }
      var dataStr = titleStr + '\n' + dataArr.join('\n');
      var blob = new Blob([dataStr], { type: 'text/plain;charset=utf-8' });
      //解决中文乱码问题
      blob = new Blob([String.fromCharCode(0xfeff), blob], { type: blob.type });
      this.download(blob, fileName + '.csv');
    },
    toXls: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      var titleObj = dataJson[0];
      titleArr = titleArr || Object.keys(titleObj);
      var titleStr = '<tr><td>' + titleArr.join('</td><td>') + '</td></tr>';
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          rowArr.push('<td>' + (dataJson[i][titleArr[j]] || '') + '</td>');
        }
        dataArr.push('<tr>' + rowArr.join('') + '</tr>');
      }
      var dataStr = '<table>' + titleStr + dataArr.join('') + '</table>';
      var uri = 'data:application/vnd.ms-excel;base64,';
      var excelHtml = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
                xmlns:x="urn:schemas-microsoft-com:office:excel" 
                xmlns="http://www.w3.org/TR/REC-html40">
                <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
                <x:Name>${fileName}</x:Name>
                <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
                </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
                </head><body>${dataStr}</body></html>`;
      //下载模板
      function base64(s) {
        return window.btoa(unescape(encodeURIComponent(s)));
      }
      var blob = new Blob([excelHtml], {
        type: 'application/vnd.ms-excel',
      });
      this.download(blob, fileName + '.xls');
    },
    toXlsx: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      //
      var sheet = XLSX.utils.json_to_sheet(dataJson);
      var blob = this.sheet2blob(sheet, fileName.substr(0, 30));
      this.download(blob, fileName + '.xlsx');
    },
    sheet2blob: function (sheet, sheetName) {
      sheetName = sheetName || 'sheet1';
      var workbook = {
        SheetNames: [sheetName],
        Sheets: {},
      };
      workbook.Sheets[sheetName] = sheet;
      // 生成excel的配置项
      var wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary',
      };
      var wbout = XLSX.write(workbook, wopts);
      var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
      // 字符串转ArrayBuffer
      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
      }
      return blob;
    },
    download: function (blob, fileFullName) {
      var btn = document.createElement('a');
      btn.href = URL.createObjectURL(blob);
      btn.download = fileFullName;
      btn.style = 'display: none;';
      document.body.appendChild(btn);
      btn.click();
      document.body.removeChild(btn);
    },
  },
};
