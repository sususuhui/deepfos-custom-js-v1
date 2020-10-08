function initEchart(id, option) {
  const chart = echarts.init(document.getElementById('chart-' + id));
  chart.clear();
  chart.setOption(option);
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
}
//按钮事件
function mcdcapexRefreshAll(id) {
  var dom = $('[data-id="' + id + '"]').find('.elementIframe')[0].contentWindow;
  dom.$('.mcdPythonButton').attr('isclick', '1'); //点击标识
  dom.dataSheet.popConfimType = 1;
  dom.dataSheet.saveStatus = true;
  dom.dataSheet.setAllPresetParameters(true);
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
    if (i == 3 || i == 9) {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? floatNum.accMul(cellVal.d.toFixed(0), 1) : '-');
      });
      series.push(itemArr);
    } else {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? cellVal.d.toFixed(0) : '-');
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
  var componentId = params.componentId;

  var chartData = dealSheetData1(data);
  // console.log(chartData);
  debugger;
  var option = {
    // color: {'#9dc3e6','#2e75b6','#1f4e79'},
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'cross',
    //         crossStyle: {
    //             color: '#999'
    //         }
    //     }
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },

    legend: {
      data: ['自由现金流 调整前', '自由现金流 调整后'],
    },
    xAxis: [
      {
        type: 'category',
        data: ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'],
        // axisPointer: {
        // type: 'shadow'
        // }
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '自由现金流',
        // min: 3000,
        // max: 9000,
        // interval: 1500,
        splitLine: { show: false },
        // axisLabel: {
        //     formatter: '{value}'
        // }
      },
    ],
    series: [
      // {
      //     name: 'ROI调整前',
      //     type: 'bar',
      //     color: '#6ba5d9',
      //     barCategoryGap:'70%',
      //     // itemStyle: {
      //     //             //柱形图圆角，鼠标移上去效果
      //     //             emphasis: {
      //     //                 barBorderRadius: [10, 10, 10, 10]
      //     //             },
      //     //             normal: {
      //     //                 //柱形图圆角，初始化效果
      //     //                 barBorderRadius:[10, 10, 10, 10]
      //     //             },
      //     // },
      //     data: chartData.series[4]
      // },
      // {
      //     name: 'ROI调整后',
      //     type: 'bar',
      //     color: '#9abad7',
      //     barCategoryGap:'70%',
      //     // itemStyle: {
      //     //             //柱形图圆角，鼠标移上去效果
      //     //             emphasis: {
      //     //                 barBorderRadius: [10, 10, 10, 10]
      //     //             },
      //     //             normal: {
      //     //                 //柱形图圆角，初始化效果
      //     //                 barBorderRadius:[10, 10, 10, 10]
      //     //             },
      //     // },
      //     data: chartData.series[10]
      // },
      {
        name: '自由现金流 调整前',
        type: 'line',
        color: '#ffc000',
        // yAxisIndex: 1,
        // barCategoryGap:'50%',
        data: chartData.series[3],
      },
      {
        name: '自由现金流 调整后',
        type: 'line',
        color: '#a6a6a6',
        barCategoryGap: '50%',
        // yAxisIndex: 1,
        data: chartData.series[9],
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
    if (i == 4 || i == 5 || i == 10 || i == 11) {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? floatNum.accMul(cellVal.d.toFixed(4), 1) : '-');
      });
      series.push(itemArr);
    } else {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? cellVal.d.toFixed(0) : '-');
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
    // color: {'#9dc3e6','#2e75b6','#1f4e79'},
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'cross',
    //         crossStyle: {
    //             color: '#999'
    //         }
    //     }
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },

      formatter: function (params) {
        return params[2].name + '<br />' + params[2].value * 100 + '%';
      },
    },

    legend: {
      data: ['ROI调整前', 'ROI调整后', '平均ROI调整前', '平均ROI调整后'],
    },
    xAxis: [
      {
        type: 'category',
        data: ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'ROI',
        // min: 3000,
        // max: 9000,
        // interval: 1500,
        splitLine: { show: false },
        axisLabel: {
          // formatter: '{value}'
          formatter: function (val) {
            return val * 100 + '%';
          },
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              debugger;
              return floatNum.accMul(params.value.toFixed(4), 100) + '%';
              // return (val) * 100 + '%';
            },
          },
        },
      },
    ],
    series: [
      {
        name: 'ROI调整前',
        type: 'bar',
        color: '#6ba5d9',
        barCategoryGap: '70%',
        // itemStyle: {
        //             //柱形图圆角，鼠标移上去效果
        //             emphasis: {
        //                 barBorderRadius: [10, 10, 10, 10]
        //             },
        //             normal: {
        //                 //柱形图圆角，初始化效果
        //                 barBorderRadius:[10, 10, 10, 10]
        //             },
        // },
        data: chartData.series[4],
      },
      {
        name: 'ROI调整后',
        type: 'bar',
        color: '#9abad7',
        barCategoryGap: '70%',
        // itemStyle: {
        //             //柱形图圆角，鼠标移上去效果
        //             emphasis: {
        //                 barBorderRadius: [10, 10, 10, 10]
        //             },
        //             normal: {
        //                 //柱形图圆角，初始化效果
        //                 barBorderRadius:[10, 10, 10, 10]
        //             },
        // },
        data: chartData.series[10],
      },
      {
        name: '平均ROI调整前',
        type: 'line',
        color: '#ffc000',
        // yAxisIndex: 1,
        // barCategoryGap:'50%',
        data: chartData.series[5],
      },
      {
        name: '平均ROI调整后',
        type: 'line',
        color: '#a6a6a6',
        barCategoryGap: '50%',
        // yAxisIndex: 1,
        data: chartData.series[11],
      },
    ],
  };

  if (getRequest().isView === 'mobile') {
    option = {
      grid: {
        top: 90,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },

        formatter: function (params) {
          return params[2].name + '<br />' + params[2].value * 100 + '%';
        },
      },

      legend: {
        data: ['ROI调整前', 'ROI调整后', '平均ROI调整前', '平均ROI调整后'],
      },
      xAxis: [
        {
          type: 'category',
          data: ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'],
          axisPointer: {
            type: 'shadow',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: 'ROI',
          splitLine: { show: false },
          axisLabel: {
            formatter: function (val) {
              return val * 100 + '%';
            },
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                debugger;
                return floatNum.accMul(params.value.toFixed(4), 100) + '%';
              },
            },
          },
        },
      ],
      series: [
        {
          name: 'ROI调整前',
          type: 'bar',
          color: '#6ba5d9',
          barCategoryGap: '70%',
          data: chartData.series[4],
        },
        {
          name: 'ROI调整后',
          type: 'bar',
          color: '#9abad7',
          barCategoryGap: '70%',
          data: chartData.series[10],
        },
        {
          name: '平均ROI调整前',
          type: 'line',
          color: '#ffc000',
          data: chartData.series[5],
        },
        {
          name: '平均ROI调整后',
          type: 'line',
          color: '#a6a6a6',
          barCategoryGap: '50%',

          data: chartData.series[11],
        },
      ],
    };
  }

  initEchart(componentId, option);
}
