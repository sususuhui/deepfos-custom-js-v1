function initEchart(id, option) {
  const chart = echarts.init(document.getElementById("chart-" + id));
  chart.clear();
  chart.setOption(option);
}

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
    if (i == 0) {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != "undefined" ? floatNum.accMul(cellVal.d.toFixed(2), 1) : "-");
      });
      series.push(itemArr);
    } else {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != "undefined" ? cellVal.d.toFixed(2) : "-");
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

function R1C1(data, params) {
  var componentId = params.componentId;
  var chartData = dealSheetData3(data);
  var option = {
    legend: {},
    tooltip: {
      trigger: "axis",
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      type: "category",
      // name: '月份',
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    },
    yAxis: {
      type: "value",
      min: 0.6,
      max: 1.6,
    },
    series: [
      {
        name: "季节性波动",
        data: chartData.series[0],
        type: "line",
        smooth: false,
      },
    ],
  };
  initEchart(componentId, option);
}

function R1C2(data, params) {
  var componentId = params.componentId;
  var chartData = dealSheetData3(data);
  var option = {
    legend: {},
    tooltip: {
      trigger: "axis",
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      type: "category",
      // name: '月份',
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    },
    yAxis: {
      type: "value",
      min: 0.6,
      max: 1.6,
    },
    series: [
      {
        name: "成长性分析",
        data: chartData.series[0],
        type: "line",
        smooth: false,
      },
    ],
  };
  initEchart(componentId, option);
}