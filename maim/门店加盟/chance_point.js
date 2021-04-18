function aaa(id) {
  var dom = $('[data-id="' + id + '"]').find(".elementIframe")[0].contentWindow;
  dom.$(".dataSheetCon").css("width", "auto");
  // if(dom.$("#dataHead .mcdPythonButton").length===0){
  //     dom.$("#dataHead .dataSheetCon").before("<a  class=\"breadcrumb-elements-item cursor-pointer mr-2 ml-2 mcdPythonButton\" onclick=\"parent.mcdcapexRefreshAll('"+id+"')\"><i class=\"icon-floppy-disk icon text-default mr-2\"></i>保存</a>");// 保存按钮
  // }
  dom.$(".freshBS").hide();
  dom.$("#statusBar").hide();
}
//计算按钮事件
function mcdcapexRefreshAll(id) {
  var dom = $('[data-id="' + id + '"]').find(".elementIframe")[0].contentWindow;
  dom.$(".mcdPythonButton").attr("isclick", "1"); //点击标识
  dom.dataSheet.popConfimType = 1;
  dom.dataSheet.saveStatus = true;
  dom.dataSheet.setAllPresetParameters(true);
}

function initEchart(id, option) {
  const chart = echarts.init(document.getElementById("chart-" + id));
  chart.clear();
  chart.setOption(option);
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
    var arr1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"];
    // debugger
    if (arr1.includes(i)) {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != "undefined" ? floatNum.accMul(cellVal.d.toFixed(4), 1) : "-");
      });
      series.push(itemArr);
    } else {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != "undefined" ? cellVal.d.toFixed(4) : "-");
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
  var arr2 = [];
  for (var i = 0; i < 22; i++) {
    arr2.push([chartData.series[i][1], chartData.series[i][2], 1041 + i]);
  }

  let reData2 = arr2.map(function (val) {
    return val.map(function (val) {
      return parseFloat(val);
    });
  });

  var arr3 = [];
  for (var i = 0; i < 22; i++) {
    arr3.push([chartData.series[i][1], chartData.series[i][2]]);
  }

  let reData = arr3.map(function (val) {
    return val.map(function (val) {
      return parseFloat(val);
    });
  });

  var myRegression = ecStat.regression("exponential", reData);

  myRegression.points.sort(function (a, b) {
    return a[0] - b[0];
  });

  var option = {
    // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
    //     offset: 0,
    //     color: '#f7f8fa'
    // }, {
    //     offset: 1,
    //     color: '#cdd0d5'
    // }]),
    tooltip: {
      formatter: function (params) {
        if (params.value.length > 1) {
          return "门店：" + params.value[2] + "<br />销售额：" + params.value[0] + " <br />现金流：" + params.value[1];
        } else {
          return params.name + " : " + params.value;
        }
      },
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: {
      type: "value",
      min: 4000000,
      max: 4600000,
      name: "现金流",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
      splitNumber: 6,
    },
    yAxis: {
      type: "value",
      min: 2500000,
      max: 4000000,
      name: "收入",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "scatter",
        type: "scatter",
        label: {
          // name:{''},
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            position: "left",
            formatter: function (param) {
              return "门店" + param.data[2];
            },
            color: "black",
            fontSize: 16,
          },
        },
        data: reData2,
      },
      {
        name: "line",
        type: "line",
        showSymbol: false,
        smooth: true,
        data: myRegression.points,
        markPoint: {
          itemStyle: {
            color: "transparent",
          },
          label: {
            show: true,
            position: "left",
            formatter: myRegression.expression,
            color: "#333",
            fontSize: 14,
          },
          data: [
            {
              coord: myRegression.points[myRegression.points.length - 1],
            },
          ],
        },
      },
    ],
  };

  initEchart(componentId, option);
}
