$(document).ready(function () {
  // 增加跳转按钮，dashboard整个页面行为
  $('#dataHead .dataSheetCon').append('<div id="gotonext" style="position:absolute;right:20px;top:5px;" class="pr-2 d-flex searchSeleteStyle">编辑单价</div>');
  $('#gotonext').click(function () {
    let selectValue = $('#globalPovPart').find('select').children().attr('value');

    if ($('.isLayerDashBoard').length !== 0) {
      location.href = '../dashboard/showDashBoardLayer.html?&param1=BIDE5P53QUKJ5U';
    } else {
      location.href = '../dashboard/showDashBoardLeft.html?&param1=BIDE5P53QUKJ5U';
    }
  });
});

function aaa(id) {
  var dom = $('[data-id="' + id + '"]').find('.elementIframe')[0].contentWindow;
  dom.$('.dataSheetCon').css('width', 'auto');
  if (dom.$('#dataHead .mcdPythonButton').length === 0) {
    dom
      .$('#dataHead .dataSheetCon')
      .before(
        '<a  class="breadcrumb-elements-item cursor-pointer mr-2 ml-2 mcdPythonButton" onclick="parent.mcdcapexRefreshAll(\'' +
          id +
          '\')"><i class="icon-floppy-disk icon text-default mr-2"></i>保存</a>'
      ); // 保存按钮
  }
  dom.$('.freshBS').hide();
  dom.$('#statusBar').hide();
}
//计算按钮事件
function mcdcapexRefreshAll(id) {
  var dom = $('[data-id="' + id + '"]').find('.elementIframe')[0].contentWindow;
  dom.$('.mcdPythonButton').attr('isclick', '1'); //点击标识
  dom.dataSheet.popConfimType = 1;
  //  dom.dataSheet.saveStatus = true
  //  window.location.href = '../dashboard/showDashBoardLayer.html?param1=12323'
  dom.dataSheet.setAllPresetParameters(true);
}

//第一幅图
function initEchart(id, option) {
  debugger;
  const chart = echarts.init(document.getElementById('chart-' + id));
  chart.clear();
  chart.setOption(option);
  var dom = $('[data-id="' + id + '"]');
  dom.find('.card-title').addClass('font-weight-bold');
}

function dealSheetData1(data) {
  var xAxis = [];
  var series = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      xAxis.push(v.sdd[0].n);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    if (i == 0 || i == 1) {
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
  console.log(series);

  return {
    series,
    xAxis,
  };
}

function renderBarEchart1(data, params) {
  debugger;

  var componentId = params.componentId;

  var chartData = dealSheetData3(data);

  console.log(chartData);

  var option = {
    animation: true,
    center: ['50%', '53%'],
    // height: 'auto'
    legend: {
      top: 'bottom',
      data: ['历史连带率', '预测连带率'],
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // axisPointer: {
      //     value: '6月',
      //     snap: true,
      //     lineStyle: {
      //         color: '#004E52',
      //         opacity: 0.5,
      //         width: 2
      //     },
      //     label: {
      //         show: true,
      //         formatter:  '{value}',
      //         backgroundColor: '#004E52'
      //     },
      //     handle: {
      //         show: true,
      //         color: '#004E52'
      //     }
      // },
      // axisTick: {
      //         alignWithLabel: true
      //     },
      axisLabel: { show: true },
    },
    yAxis: {
      type: 'value',
      // axisTick: {
      //     inside: true
      // },
      // splitLine: {
      //     show: false
      // },
      axisLabel: {
        inside: true,
        formatter: '{value}',
      },
      z: 10,
    },
    grid: {
      bottom: 70,
      left: 15,
      right: 15,
      height: 170,
    },
    // dataZoom: [{
    //     type: 'inside',
    //     throttle: 50
    // }],
    series: [
      {
        name: '历史连带率',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        sampling: 'average',
        itemStyle: {
          color: '#77acdc',
        },
        // stack: 'a',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#77acdc',
            },
            {
              offset: 1,
              color: '#bdd7ee',
            },
          ]),
        },
        data: chartData.series[0],
      },
      {
        name: '预测连带率',
        type: 'line',
        smooth: true,
        //stack: 'a',
        symbol: 'circle',
        symbolSize: 5,
        sampling: 'average',
        itemStyle: {
          color: '#9dc3e6',
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#9dc3e6',
            },
            {
              offset: 1,
              color: '#ffffff',
            },
          ]),
        },
        data: chartData.series[1],
      },
    ],
  };
  initEchart(componentId, option);
}

//第二幅图
function dealSheetData3(data) {
  var xAxis = [];
  var series = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      xAxis.push(v.sdd[0].n);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    if (i == 0 || i == 1) {
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
  console.log(series);

  return {
    series,
    xAxis,
  };
}

function renderBarEchart3(data, params) {
  var componentId = params.componentId;

  var chartData = dealSheetData3(data);
  console.log(chartData);

  var option = {
    // title: {
    //     text: '世界人口总量',
    //     subtext: '数据来自网络'
    // },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'shadow'
    //     }
    // },
    center: ['50%', '53%'],
    legend: {
      top: 'bottom',
      data: ['2020年'],
    },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '20%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      data: ['市场活动1', '市场活动2', '市场活动3'],
    },
    series: [
      {
        name: '2020年',
        type: 'bar',
        color: '#77acdc',
        barCategoryGap: '80%',
        data: [18203, 23489, 29034],
      },
    ],
  };
  initEchart(componentId, option);
}

//波士顿矩阵-upt
function dealSheetData6(data) {
  var xAxis = [];
  var series = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      xAxis.push(v.sdd[0].n);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8) {
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
  console.log(series);

  return {
    series,
    xAxis,
  };
}

function renderBarEchart6(data, params) {
  var componentId = params.componentId;

  var chartData = dealSheetData6(data);

  var option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 10,
        data: [
          [chartData.series[0][2], chartData.series[0][3]],
          [chartData.series[1][2]],
          [chartData.series[1][3]],
          [chartData.series[2][2], chartData.series[2][3]],
          [chartData.series[3][2], chartData.series[3][3]],
          [chartData.series[4][2], chartData.series[4][3]],
          [chartData.series[5][2], chartData.series[5][3]],
          [chartData.series[6][2], chartData.series[6][3]],
          [chartData.series[7][2], chartData.series[7][3]],
          [chartData.series[8][2], chartData.series[8][3]],
        ],
        type: 'scatter',
      },
    ],
  };
  initEchart(componentId, option);
}

//波士顿矩阵-upt
function dealSheetData5(data) {
  var xAxis = [];
  var series = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      xAxis.push(v.sdd[0].n);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5) {
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
  console.log(series);

  return {
    series,
    xAxis,
  };
}

function renderBarEchart5(data, params) {
  var componentId = params.componentId;

  var chartData = dealSheetData5(data);

  var data = [
    [
      [chartData.series[0][0], chartData.series[0][1], '咖啡', '连带率视角'],
      [chartData.series[1][0]],
      [chartData.series[1][1], '食品', '连带率视角'],
      [chartData.series[2][0], chartData.series[2][1], '冰激凌', '连带率视角'],
      [chartData.series[3][0], chartData.series[3][1], '月饼', '连带率视角'],
      [chartData.series[4][0], chartData.series[4][1], '粽子', '连带率视角'],
      [chartData.series[5][0], chartData.series[5][1], '水饺', '连带率视角'],
    ],
  ];
  var option = {
    color: '#9dc3e6',
    xAxis: {
      name: '增长率',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    yAxis: {
      name: '贡献率',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
      scale: true,
    },
    series: [
      {
        name: '1990',
        data: data[0],
        color: '#9dc3e6',
        type: 'scatter',
        // symbolSize: function (data) {
        //     return Math.sqrt(data[2]) / 5e2;
        // },
        emphasis: {
          label: {
            show: true,
            formatter: function (param) {
              return param.data[2];
            },
            position: 'top',
          },
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(120, 36, 50, 0.5)',
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: '#77acdc',
            },
            {
              offset: 1,
              color: '#bdd7ee',
            },
          ]),
        },
      },
    ],
  };
  initEchart(componentId, option);
}

function dealSheetData2(data) {
  var xAxis = [];
  var series = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      xAxis.push(v.sdd[0].n);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10 || i == 11) {
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
  console.log(series);

  return {
    series,
    xAxis,
  };
}

function renderBarEchart2(data, params) {
  var componentId = params.componentId;

  var chartData = dealSheetData2(data);
  debugger;
  var option = {
    color: ['#77acdc', '#9dc3e6', '#bfbfbf', '#ddebf7', '#b3b2b2', '#bed1ee'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['咖啡', '食品', '食品', '冰激凌', '月饼', '粽子', '水饺'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '20px',
      top: '20px',
      containLabel: true,
    },
    series: [
      {
        name: '数据明细',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        center: ['50%', '53%'],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: chartData.series[0][0], name: '咖啡', selected: true },
          { value: chartData.series[1][0], name: '食品' },
          { value: chartData.series[2][0], name: '冰激凌' },
          { value: chartData.series[3][0], name: '月饼' },
          { value: chartData.series[4][0], name: '粽子' },
          { value: chartData.series[5][0], name: '水饺' },
        ],
      },
      {
        name: '数据明细',
        type: 'pie',
        radius: ['40%', '55%'],
        center: ['50%', '53%'],
        label: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#eee',
          borderColor: '#aaa',
          borderWidth: 0.5,
          borderRadius: 2,
          fontSize: 8,
          // shadowBlur:3,
          // shadowOffsetX: 2,
          // shadowOffsetY: 2,
          // shadowColor: '#999',
          // padding: [0, 7],
          rich: {
            a: {
              color: '#999',
              lineHeight: 11,
              align: 'center',
              fontSize: 8,
            },
            // abg: {
            //     backgroundColor: '#333',
            //     width: '100%',
            //     align: 'right',
            //     height: 22,
            //     borderRadius: [4, 4, 0, 0]
            // },
            hr: {
              borderColor: '#aaa',
              width: '100%',
              borderWidth: 0.25,
              height: 0,
              fontSize: 8,
            },
            b: {
              fontSize: 8,
              lineHeight: 10,
            },
            per: {
              color: '#eee',
              backgroundColor: '#334455',
              padding: [1, 2],
              borderRadius: 1,
              fontSize: 8,
            },
          },
        },
        data: [
          { value: chartData.series[6][0], name: '咖啡' },
          { value: chartData.series[7][0], name: '食品' },
          { value: chartData.series[8][0], name: '冰激凌' },
          { value: chartData.series[9][0], name: '月饼' },
          { value: chartData.series[10][0], name: '粽子' },
          { value: chartData.series[11][0], name: '水饺' },
        ],
      },
    ],
  };
  initEchart(componentId, option);
}

function aaa(id) {
  var dom = $('[data-id="' + id + '"]').find('.elementIframe')[0].contentWindow;
  dom.$('.dataSheetCon').css('width', 'auto');
  if (dom.$('#dataHead .mcdPythonButton').length === 0) {
    dom
      .$('#dataHead .dataSheetCon')
      .before(
        '<a  class="breadcrumb-elements-item cursor-pointer mr-2 ml-2 mcdPythonButton" onclick="parent.mcdcapexRefreshAll(\'' +
          id +
          '\')"><i class="icon-floppy-disk icon text-default mr-2"></i>保存</a>'
      ); // 保存按钮
  }
  dom.$('.freshBS').hide();
  dom.$('#statusBar').hide();
}
//计算按钮事件
function mcdcapexRefreshAll(id) {
  var dom = $('[data-id="' + id + '"]').find('.elementIframe')[0].contentWindow;
  dom.$('.mcdPythonButton').attr('isclick', '1'); //点击标识
  dom.dataSheet.popConfimType = 1;
  //  dom.dataSheet.saveStatus = true
  //  window.location.href = '../dashboard/showDashBoardLayer.html?param1=12323'
  dom.dataSheet.setAllPresetParameters(true);
}

//第一幅图
function initEchart(id, option) {
  debugger;
  const chart = echarts.init(document.getElementById('chart-' + id));
  chart.clear();
  chart.setOption(option);
  var dom = $('[data-id="' + id + '"]');
  dom.find('.card-title').addClass('font-weight-bold');
}

function dealSheetData33(data) {
  var xAxis = [];
  var series = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      xAxis.push(v.sdd[0].n);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6) {
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
  console.log(series);

  return {
    series,
    xAxis,
  };
}

function renderBarEchart33(data, params) {
  var componentId = params.componentId;

  var chartData = dealSheetData3(data);
  console.log(chartData);

  var option = {
    // title: {
    //     text: '折线图堆叠'
    // },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['咖啡', '食品', '食品', '冰激凌', '月饼', '粽子', '水饺'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1年', '2年', '3年', '4年', '5年', '6年', '7年', '8年', '9年', '10年', '11年', '12年', '13年以上'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '咖啡',
        type: 'line',
        // stack: '总量',
        data: chartData.series[0],
      },
      {
        name: '食品',
        type: 'line',
        // stack: '总量',
        data: chartData.series[1],
      },
      {
        name: '冰激凌',
        type: 'line',
        // stack: '总量',
        data: chartData.series[2],
      },
      {
        name: '月饼',
        type: 'line',
        // stack: '总量',
        data: chartData.series[3],
      },
      {
        name: '粽子',
        type: 'line',
        // stack: '总量',
        data: chartData.series[4],
      },
      {
        name: '水饺',
        type: 'line',
        // stack: '总量',
        data: chartData.series[5],
      },
    ],
  };
  initEchart(componentId, option);
}
