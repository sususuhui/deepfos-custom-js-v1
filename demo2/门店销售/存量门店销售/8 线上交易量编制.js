$(function () {
  let a = $('[data-name=Online_ADT_Forecast]').prop('outerHTML');

  let e = $('[data-name=Online_seasonality]').prop('outerHTML');
  let f = $('[data-name=Online_Market]').prop('outerHTML');
  let g = $('[data-name=Online_ADTComp]').prop('outerHTML');

  let html = `
  <div class="row dataSheet" style="height:830px;">
    <div class="col-6">
      ${a}
    </div>
    <div class="col-6">
      ${e}
      ${f}
      ${g}
    </div>
  </div>`;
  $('.dashBoardContent').html(html);

  // 左边电子表格
  $('[data-name=Online_ADT_Forecast]').css({'width':'100%', 'height':'830px', 'margin-bottom':'0'});


  // 右边图表
  $('[data-name=Online_seasonality]').css({'width':'100%', 'height':'32%', 'margin-bottom':'0'});
  $('[data-name=Online_Market]').css({'width':'100%', 'height':'34%', 'margin-bottom':'0'});
  $('[data-name=Online_ADTComp]').css({'width':'100%', 'height':'34%', 'margin-bottom':'0'});

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
  dom.dataSheet.saveStatus = true;
  dom.dataSheet.setAllPresetParameters(true);
}

//季节波动图
//初始化图
function initEchart(id, option) {
  const chart = echarts.init(document.getElementById('chart-' + id));
  chart.clear();
  chart.setOption(option);
  var dom = $('[data-id="' + id + '"]');
  dom.find('.card-title').addClass('font-weight-bold');
}

//处理电子表格给的数据
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
    if (i == 4 || i == 5) {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? floatNum.accMul(cellVal.d.toFixed(4), 100) : '-');
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

function renderBarEchart(data, params) {
  var componentId = params.componentId;

  var chartData = dealSheetData(data);
  debugger;
  var data = [];
  data = chartData.series[4];
  var option = {
    // color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var html = '';
        if (params.length > 0) {
          html += params[0].axisValue + '<br>';
          for (var int = 0; int < params.length; int++) {
            html += params[int].marker + params[int].seriesName + '：' + format(params[int].data) + '%<br>';
          }
        }
        return html;
      },
    },
    legend: {
      data: ['历史期季节性影响', '预测期季节性影响'],
      orient: 'vertical',
      left: 'center',
      bottom: 'bottom',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '40px',
      top: '10px',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
        },
        data: chartData.xAxis,
      },
    ],
    yAxis: [
      {
        type: 'value',
        min: 60,
        max: 140,
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: '{value} %',
        },
      },
    ],
    series: [
      {
        name: '历史期季节性影响',
        type: 'line',
        smooth: true,
        stack: '0',
        color: '#bdd7ee',
        data: chartData.series[4],
      },
      {
        name: '预测期季节性影响',
        type: 'line',
        smooth: true,
        stack: '1',
        color: '#77acdc',
        data: chartData.series[5],
      },
    ],
  };
  initEchart(componentId, option);
}

//市场活动
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
    if (i == 2 || i == 3 || i == 4) {
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
  console.log('33333333');
  var newArray = [];
  chartData.series.slice(-3).forEach((arr) => {
    newArray.push(arr.slice(-1)[0]);
  });
  var option = {
    color: '#E9967A',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['市场活动影响'],
      bottom: 10,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '20%',
      top: '8%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      axisTick: {
        show: false,
      },
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      data: ['市场活动1', '市场活动2', '市场活动3'],
    },
    series: [
      {
        name: '市场活动影响',
        type: 'bar',
        itemStyle: {
          color: '#bdd7ee',
        },
        barWidth: '30%',
        // data: [0.07, 0.08,0.09]
        data: newArray,
      },
    ],
  };
  initEchart(componentId, option);
}

//客流量影响
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
    if (i == 0) {
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

  var option = {
    color: ['#c4ccd3'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      bottom: 10,
      left: 'center',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '20%',
      top: '8%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '日均交易量基准值',
        type: 'bar',
        itemStyle: {
          color: '#bdd7ee',
        },
        barWidth: '10%',
        data: chartData.series[0],
      },
    ],
  };
  initEchart(componentId, option);
}

//第四幅图
function dealSheetData4(data) {
  var xAxis = [];
  var series = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      xAxis.push(v.sdd[0].n);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    if (i == 1 || i == 2) {
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

function renderBarEchart4(data, params) {
  var componentId = params.componentId;

  var chartData = dealSheetData4(data);
  console.log('aaaaaaaaaaa');
  console.log(chartData);

  var option = {
    animation: false,
    legend: {
      bottom: 10,
      data: ['历史日均交易量', '预测日均交易量'],
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
      splitLine: {
        show: false,
      },
      axisLabel: {
        inside: true,
        formatter: '{value}',
      },
      z: 10,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '20%',
      top: '8%',
      containLabel: true,
    },
    // dataZoom: [{
    //     type: 'inside',
    //     throttle: 50
    // }],
    series: [
      {
        name: '历史日均交易量',
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
        data: chartData.series[1],
      },
      {
        name: '预测日均交易量',
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
        data: chartData.series[2],
      },
    ],
  };
  initEchart(componentId, option);
}
