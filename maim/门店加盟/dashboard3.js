const cfs = new DevCustomFuncTools();
let Cus_echarts = {};

function map() {
  renderMap();
}

const renderMap = async () => {
  const cardName = "map";
  const echartDom = cfs.card.body.getDom(cardName).find(".echart");

  cfs.card.body.getDom(cardName).css({ padding: 0 });

  let data1 = [
    ["7天酒店-西安钟鼓楼店", 108.969, 34.285],
    ["非繁城品-深圳宝安机场店", 114.109, 22.544],
    ["麗枫-深圳世界之窗店", 114.115, 22.55],
    ["丽笙酒店-上海迪士尼乐园店", 121.483, 31.417],
    ["维也纳-上海中山公园店", 121.19, 31.029],
    ["康铂-南宁阳朔西街店", 107.45, 23.13],
    ["IU-广州珠江新城店", 113.265, 23.108],
    ["铂涛-北京国贸店", 116.341, 39.727],
    ["丽怡_娄底火车站店", 112.0017, 27.72978],
    ["郁锦香_温州火车站店", 121.1572, 27.83616],
    ["欧暇·地中海_新余火车站店", 114.94461, 27.80038],
    ["昆仑_南昌火车站店", 115.94422, 28.54538],
    ["希岸酒店_合肥火车站店", 117.30794, 31.79322],
    ["麗枫_九江火车站店", 116.00144, 29.7055],
    ["锦江之星_宜春火车站店", 114.42773, 27.79817],
    ["ZMAX系列_金华火车站店", 120.24191, 29.28946],
    ["IU_福州火车站店", 119.27345, 26.04769],
  ];

  let data2 = [
    ["锦江白玉兰-重庆解放碑店", 106.649, 28.821],
    ["昆仑-浙江杭州西湖店", 120.165, 30.319],
    ["凯里亚德酒店-深圳华强北店", 114.111, 22.546],
    ["丽亭-上海五角场万达店", 121.712, 31.007],
    ["派-山东八大关风景区店", 117, 36.65],
    ["ZMAX系列-湖南株洲体育馆店", 108.9, 24.9],
    ["7天酒店_上饶火车站店", 118.19133, 28.43631],
    ["凯里亚德酒店_丽水火车站店", 119.91284, 28.44594],
    ["丽亭_郴州火车站店", 113.01101, 25.78398],
    ["维也纳_张家界火车站店", 110.55042, 29.34589],
    ["康铂_绍兴火车站店", 120.49476, 30.08189],
    ["喆啡_厦门火车站店", 118.03394, 24.48405],
  ];

  let data3 = [
    ["希岸酒店-四川成都锦里店", 104.071, 30.67],
    ["丽芮-深圳宝安机场店", 114.113, 22.548],
    ["欧暇·地中海-深圳深圳野生动物园店", 114.117, 22.552],
    ["锦江之星-上海同济大学店", 121.445, 31.213],
    ["丽怡-上海锦江乐园店", 121.087, 31.115],
    ["郁锦香-南宁阳朔西街店", "108°51", 23.32],
    ["喆啡-湖南株洲体育馆店", 113.2, 30],
    ["卢浮酒店-广州沙湾古镇店", 113.738, 23.359],
    ["锦江都城-北京奥林匹克公园店", 116.443, 39.922],
    ["希尔顿欢朋-北京国贸店", 116.657, 39.91],
    ["非繁城品_滁州火车站店", 118.30553, 32.2948],
    ["丽芮_延安火车站店", 109.32897, 36.86373],
    ["丽笙酒店_武汉火车站店", 114.02919, 30.58203],
    ["派_安吉火车站店", 119.68219, 30.63824],
    ["卢浮酒店_泉州火车站店", 118.613, 24.88946],
    ["铂涛_三明火车站店", 117.64579, 26.27168],
  ];

  const transformData = (data) => {
    return data.map((val) => {
      return { name: val[0], value: [val[1], val[2]] };
    });
  };

  let option = {
    legend: {
      left: "10%",
      top: "3%",
      data: ["亏损门店", "预警门店", "正常门店"],
    },
    grid: {
      left: "30%",
      containLabel: true,
    },
    geo: {
      map: "china",
      roam: true,
      zoom: 1.23,
      label: {
        emphasis: {
          show: false,
        },
      },
      itemStyle: {
        emphasis: {
          areaColor: "",
        },
      },
    },
    series: [
      {
        name: "亏损门店",
        type: "scatter",
        coordinateSystem: "geo",
        data: transformData(data1),
        symbolSize: 8,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: false,
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          normal: {
            color: "#D95850",
          },
        },
      },
      {
        name: "预警门店",
        type: "scatter",
        coordinateSystem: "geo",
        data: transformData(data2),
        symbolSize: 8,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: false,
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          normal: {
            color: "#F2D643",
          },
        },
      },
      {
        name: "正常门店",
        type: "scatter",
        coordinateSystem: "geo",
        data: transformData(data3),
        symbolSize: 8,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: false,
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          normal: {
            color: "#7BD9A5",
          },
        },
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

// const opportunityPoints = async () => {
//   const cardName = "机会点分析";
//   const echartDom = cfs.card.body.getDom(cardName).find(".echart");
//   option = {
//     xAxis: {},
//     yAxis: {},
//     series: [
//       {
//         data: [
//           [1, 4],
//           [15, 9],
//         ],
//         type: "line",
//       },
//       {
//         symbolSize: 10,
//         data: [
//           [10.0, 8.04],
//           [8.07, 6.95],
//           [13.0, 7.58],
//           [9.05, 8.81],
//           [11.0, 8.33],
//           [14.0, 7.66],
//           [13.4, 6.81],
//           [10.0, 6.33],
//           [14.0, 8.96],
//           [12.5, 6.82],
//           [9.15, 7.2],
//           [11.5, 7.2],
//           [3.03, 4.23],
//           [12.2, 7.83],
//           [2.02, 4.47],
//           [1.05, 3.33],
//           [4.05, 4.96],
//           [6.03, 7.24],
//           [12.0, 6.26],
//           [12.0, 8.84],
//           [7.08, 5.82],
//           [5.02, 5.68],
//         ],
//         type: "scatter",
//       },
//     ],
//   };

//   if (!Cus_echarts[cardName]) {
//     Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
//   } else {
//     cfs.echarts.refresh(Cus_echarts[cardName], option);
//   }
// };

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

function opportunityPoints(data, params) {
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
