const dealSheetDataPie = (data) => {
  // 转换数据格式
  var yAxis = [];
  var series = [];
  var valObj = {};
  var legend = [];
  var datas = [];
  data.sheetList[0].rowList.forEach(function (item) {
    item.m.forEach(function (v) {
      yAxis.push(v.sdd[0].d);
    });
  });

  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];

    rowVal.forEach(function (cellVal) {
      itemArr.push(typeof cellVal.d != "undefined" ? floatNum.accMul(cellVal.d.toFixed(2), 1) : "-");
    });
    series.push(itemArr[0]);
  });

  for (var i = 0; i < series.length; i++) {
    datas.push({ value: series[i], name: yAxis[i] });
    legend.push(yAxis[i]);
  }
  valObj.data = datas;
  valObj.legend = legend;
  return valObj;
};
const dealSheetData = (data) => {
  // 转换数据格式
  var xAxis = [];
  var yAxis = [];
  var series = [];
  var valObj = {};
  var legend = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      let xVal = "";
      v.sdd.forEach(function (s) {
        xVal += s.d;
      });
      xAxis.push(xVal);
    });
  });
  valObj.xAxis = xAxis;

  data.sheetList[0].rowList.forEach(function (item) {
    item.m.forEach(function (v) {
      yAxis.push(v.sdd[0].d);
    });
  });

  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    rowVal.forEach(function (cellVal) {
      itemArr.push(typeof cellVal.d != "undefined" ? floatNum.accMul(cellVal.d.toFixed(2), 1) : "-");
    });
    series.push(itemArr);
  });

  for (var i = 0; i < series.length; i++) {
    valObj[yAxis[i]] = series[i];
    legend.push(yAxis[i]);
  }
  valObj.legend = legend;
  return valObj;
};
const dealSheetData_r1c2 = (data) => {
  // 转换数据格式
  var xAxis = [];
  var yAxis = [];
  var series = [];
  var valObj = {};
  var legend = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      let xVal = "";
      v.sdd.forEach(function (s) {
        xVal += s.d;
      });
      xAxis.push(xVal);
    });
  });
  valObj.xAxis = xAxis;

  data.sheetList[0].rowList.forEach(function (item) {
    item.m.forEach(function (v) {
      yAxis.push(v.sdd[1].d);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    rowVal.forEach(function (cellVal) {
      itemArr.push(typeof cellVal.d != "undefined" ? floatNum.accMul(cellVal.d.toFixed(2), 1) : "-");
    });
    series.push(itemArr);
  });

  for (var i = 0; i < series.length; i++) {
    valObj[yAxis[i]] = series[i];
    legend.push(yAxis[i]);
  }
  valObj.legend = legend;
  return valObj;
};

$(() => {
  r1();
});

function r1() {
  let dashboardDom = $(".dashBoardContent");
  let html = `
  <div class="row dataSheet mb-2 row_extra_1" style="height: 90px">
  <div class="col-4">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-orange-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">门店数量</div>
            <div class="font-weight-semibold" style="font-size: large">30</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-4">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-orange-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">经营品牌数量</div>
            <div class="font-weight-semibold" style="font-size: large">7</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-4">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-orange-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">门店渠道数量</div>
            <div class="font-weight-semibold" style="font-size: large">2</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
  `;
  dashboardDom.prepend(html);
}

const r1c1 = (data, params) => {
  let newData = dealSheetDataPie(data);

  let cardName = "r1c1";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let option = {
    title: {
      text: "销售额占比（品牌）",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "right",
    },
    series: [
      {
        name: "销售额",
        type: "pie",
        radius: "50%",
        data: newData.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

const r1c2 = (data, params) => {
  let newData = dealSheetData_r1c2(data);

  let cardName = "r1c2";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let seriesData = [];
  newData.legend.forEach((val) => [
    seriesData.push({
      name: val,
      type: "bar",
      data: newData[val],
    }),
  ]);

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      x: "center",
      y: "bottom",
      data: newData.legend,
    },
    grid: {
      top: "3%",
      left: "3%",
      right: "4%",
      bottom: 50,
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: newData.xAxis,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: seriesData,
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

const r2c1 = (data, params) => {
  let newData = dealSheetData(data);

  let cardName = "r2c1";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let allData = _.cloneDeep(newData[newData.legend[0]]);

  let totalArr = allData.map((val, i) => {
    if (i === 0) return val;
    else if (i === allData.length - 1) return val;
    else return "-";
  });

  let subArr = allData.map((val, i) => {
    if (i === 0) return "-";
    else if (i === allData.length - 1) return "-";
    else return (allData[i - 1] - allData[i]).toFixed(2);
  });

  let hideArr = allData.map((val, i) => {
    if (i === 0) return "-";
    else if (i === allData.length - 1) return "-";
    else return allData[i];
  });

  let option = {
    // tooltip: {
    //   trigger: "axis",
    //   axisPointer: {
    //     type: "shadow",
    //   },
    //   formatter: function (params) {
    //     var tar;
    //     if (params[1].value !== "-") {
    //       tar = params[1];
    //     } else {
    //       tar = params[0];
    //     }
    //     return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
    //   },
    // },
    legend: {
      orient: "horizontal",
      // data: ["减少", "汇总"],
      data: [],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      splitLine: {
        show: false,
      },
      // data: newData.xAxis,
      data: ["销售额", " 产品成本", "店铺营业成本", "净利润"],
    },
    yAxis: {
      type: "value",
      // min: 80000000,
    },
    series: [
      {
        name: "汇总",
        type: "bar",
        barWidth: 60,
        stack: "总量",
        label: {
          show: true,
          position: "top",
          formatter: function (a) {
            return parseInt(a.value).toLocaleString();
          },
        },
        data: totalArr,
      },
      {
        name: "辅助",
        type: "bar",
        barWidth: 60,
        stack: "总量",
        itemStyle: {
          barBorderColor: "rgba(0,0,0,0)",
          color: "rgba(0,0,0,0)",
        },
        emphasis: {
          itemStyle: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
        },
        data: hideArr,
      },
      {
        name: "减少",
        type: "bar",
        barWidth: 60,
        stack: "总量",
        label: {
          show: true,
          position: "bottom",
          formatter: function (a) {
            return parseInt(a.value).toLocaleString();
          },
        },
        data: subArr,
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

const r2c2 = (data, params) => {
  let newData = dealSheetData(data);

  let cardName = "r2c2";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let allData = _.cloneDeep(newData[newData.legend[0]]);

  let totalArr = allData.map((val, i) => {
    if (i === 0) return val;
    else if (i === allData.length - 1) return val;
    else return "-";
  });

  let subArr = allData.map((val, i) => {
    if (i === 0) return "-";
    else if (i === allData.length - 1) return "-";
    else return (allData[i - 1] - allData[i]).toFixed(2);
  });

  let hideArr = allData.map((val, i) => {
    if (i === 0) return "-";
    else if (i === allData.length - 1) return "-";
    else return allData[i];
  });

  let option = {
    // tooltip: {
    //   trigger: "axis",
    //   axisPointer: {
    //     type: "shadow",
    //   },
    //   formatter: function (params) {
    //     var tar;
    //     if (params[1].value !== "-") {
    //       tar = params[1];
    //     } else {
    //       tar = params[0];
    //     }
    //     return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
    //   },
    // },
    legend: {
      orient: "horizontal",
      // data: ["减少", "汇总"],
      data: [],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      splitLine: {
        show: false,
      },
      // data: newData.xAxis,
      data: ["销售额", " 产品成本", "店铺营业成本", "净利润"],
    },
    yAxis: {
      type: "value",
      // min: 80000000,
    },
    series: [
      {
        name: "汇总",
        barWidth: 60,
        type: "bar",
        stack: "总量",
        label: {
          show: true,
          position: "top",
          formatter: function (a) {
            return parseInt(a.value).toLocaleString();
          },
        },
        data: totalArr,
      },
      {
        name: "辅助",
        type: "bar",
        barWidth: 60,
        stack: "总量",
        itemStyle: {
          barBorderColor: "rgba(0,0,0,0)",
          color: "rgba(0,0,0,0)",
        },
        emphasis: {
          itemStyle: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
        },
        data: hideArr,
      },
      {
        name: "减少",
        type: "bar",
        barWidth: 60,
        stack: "总量",
        label: {
          show: true,
          position: "bottom",
          formatter: function (a) {
            return parseInt(a.value).toLocaleString();
          },
        },
        data: subArr,
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

// const r2c1 = (data, params) => {
//   let newData = dealSheetData(data);

//   let cardName = "r2c1";
//   let echartDom = cfs.card.body.getDom(cardName).find(".echart");
//   let headDom = cfs.card.head.getDom(cardName);

//   cfs.echarts.correctHeight(cardName);

//   let seriesData = [];
//   newData.legend.forEach((val) => [
//     seriesData.push(
//       {
//         name: val,
//         type: "bar",
//         barWidth: 60,
//         data: newData[val],
//       },
//       {
//         name: val + `-line`,
//         type: "line",
//         data: newData[val],
//       }
//     ),
//   ]);

//   let option = {
//     legend: {
//       data: [],
//     },
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         type: "shadow",
//       },
//       formatter: function (params) {
//         return params[0].name + "<br/>" + params[0].seriesName + " : " + params[0].value;
//       },
//     },
//     grid: {
//       left: "3%",
//       right: "4%",
//       bottom: "3%",
//       top: 30,
//       containLabel: true,
//     },
//     xAxis: [
//       {
//         type: "category",
//         data: newData.xAxis,
//         axisPointer: {
//           type: "shadow",
//         },
//       },
//     ],
//     yAxis: {
//       type: "value",
//     },
//     series: seriesData,
//   };

//   if (!Cus_echarts[cardName]) {
//     Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
//   } else {
//     cfs.echarts.refresh(Cus_echarts[cardName], option);
//   }
// };

// const r2c2 = (data, params) => {
//   let newData = dealSheetData(data);

//   let cardName = "r2c2";
//   let echartDom = cfs.card.body.getDom(cardName).find(".echart");
//   let headDom = cfs.card.head.getDom(cardName);

//   cfs.echarts.correctHeight(cardName);

//   let seriesData = [];
//   newData.legend.forEach((val) => [
//     seriesData.push(
//       {
//         name: val,
//         type: "bar",
//         barWidth: 60,
//         data: newData[val],
//       },
//       {
//         name: val + `-line`,
//         type: "line",
//         data: newData[val],
//       }
//     ),
//   ]);

//   let option = {
//     legend: {
//       data: [],
//     },
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         type: "shadow",
//       },
//       formatter: function (params) {
//         return params[0].name + "<br/>" + params[0].seriesName + " : " + params[0].value;
//       },
//     },
//     grid: {
//       left: "3%",
//       right: "4%",
//       bottom: "3%",
//       top: 30,
//       containLabel: true,
//     },
//     xAxis: [
//       {
//         type: "category",
//         data: newData.xAxis,
//         axisPointer: {
//           type: "shadow",
//         },
//       },
//     ],
//     yAxis: {
//       type: "value",
//     },
//     series: seriesData,
//   };

//   if (!Cus_echarts[cardName]) {
//     Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
//   } else {
//     cfs.echarts.refresh(Cus_echarts[cardName], option);
//   }
// };

const r3 = (data, params) => {
  let cardName = "r3";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let newData = {
    legend: ["毛利率", "店铺营业毛利率", "税前利润率"],
    xAxis: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    毛利率: ["40.6", "40.6", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    店铺营业毛利率: ["17.9", "17.9", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    税前利润率: ["13.3", "13.4", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  let areaStyleColor = [
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#F2D643",
      },
      {
        offset: 1,
        color: "#ffe",
      },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#FFB248",
      },
      {
        offset: 1,
        color: "#ffe",
      },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#EB8046",
      },
      {
        offset: 1,
        color: "#ffe",
      },
    ]),
  ];

  let seriesData = [];
  newData.legend.forEach((val, i) => [
    seriesData.push({
      name: val,
      type: "line",
      // stack: "总量",
      areaStyle: {
        color: areaStyleColor[i],
      },
      emphasis: {
        focus: "series",
      },
      data: newData[val],
    }),
  ]);

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      x: "center",
      y: "bottom",
      data: newData.legend,
    },

    grid: {
      top: "3%",
      left: "3%",
      right: "4%",
      bottom: 50,
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: newData.xAxis,
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    ],
    series: seriesData,
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

var Cus_theme = "essos";
var Cus_echarts = {};
//extrajs全局方法
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
        var contentType = "application/" + (json ? "json" : "x-www-form-urlencoded");
        var resObj = {};
        var err = "";
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
        var url = Api.SeeplnCube + "cube/queryCubeData";
        paramObj = $.extend(
          {
            cube_name: cubeName,
            script: script,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true);
      },
      //通用保存方法
      save: function (sheetDatas) {
        var url = Api.SeeplnCube + "spreadsheet/save";
        paramObj = $.extend(
          {
            sheetDatas: sheetDatas,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true);
      },
    },
    foundation: {
      //根据user权限获取维度，最多2层
      getAccessDimensionMemberLevel: function (dimName, exp = "", name = "#root", id = "1", searchValue = "") {
        let url = Api.seepln + "dimension/getAccessDimensionMemberLevel";
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
        return cfs.request.common.sendRequest(url, "POST", paramObj, false);
      },
      //根据表达式查询，不分权限
      selectDimensionMemberByNameFunction: function (dimensionMemberNames) {
        let url = Api.seepln + "dimension/selectDimensionMemberByNameFunction";
        paramObj = $.extend(
          {
            dimensionMemberNames: dimensionMemberNames,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false);
      },
      //执行自定义sql语句
      runComm: function (comm) {
        var url = Api.seepln + "sqlparser/run/post";
        paramObj = $.extend(
          {
            sql: comm,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false, true);
      },
    },
    python: {
      //同步调用python
      web: function (pyName, params) {
        var url = Api.python + "start/web";
        paramObj = $.extend(
          {
            pyName: pyName,
            params: params,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true, true);
      },
    },
  },
  card: {
    //dashboard单个卡片方法 bootstrap4图标：http://easyview.seepln.com/Limitless_2.0.1/Bootstrap%204/Template/layout_1/LTR/material/full/icons_icomoon.html
    head: {
      //获取卡片表头jquery dom
      getDom: function (cardName) {
        return $("#" + cardName);
      },
      //删除卡片表右边所有元素
      removeButton: function (dom) {
        dom.find(".header-elements").html("");
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
        let sHtml = "";
        buttonInfo.list.forEach(function (v) {
          sHtml += "<option value='" + v.key + "'>" + v.value + "</option>";
        });
        carHead.find(".header-elements").prepend(btn);
        $("#" + buttonInfo.id).html(sHtml);
        $(".select").select2({ minimumResultsForSearch: -1 });
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
          list[i] = '<a index = "' + i + '" class="dropdown-item" href="#">' + list[i] + "</a>";
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
            "</span></a>" +
            '<div class="dropdown-menu" style="min-width:100px">' +
            list.join("") +
            "</div></div>"
        );
        carHead.find(".header-elements").append(btn);
        if (buttonInfo.id.indexOf("_disable") == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + "_disable";
          var btn_disable = this.addDropdownButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.find(".dropdown-menu").remove();
          btn_disable.hover(function () {
            this.style.cursor = "not-allowed";
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
            "</span></a>"
        );
        carHead.find(".header-elements").append(btn);
        if (buttonInfo.id.indexOf("_disable") == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + "_disable";
          var btn_disable = this.addButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.hover(function () {
            this.style.cursor = "not-allowed";
          });
        }
        return btn;
      },
      //点击后调用防止反复执行
      disableButton: function (btn) {
        btn.hide();
        $("#" + btn.attr("id") + "_disable").show();
      },
      //恢复按钮可用
      enableButton: function (btn) {
        $("#" + btn.attr("id") + "_disable").hide();
        btn.show();
      },
    },
    body: {
      //获取卡片内容jquery dom
      getDom: function (cardName) {
        return $("#" + cardName).find(".card-body");
      },
      //添加文件上传卡片
      addFileTag: function (cardName, text) {
        var dom = $(
          '<div status="-1" filename="' +
            text +
            '" style="margin: 1.25rem; padding: 10px;display: inherit; background-color:#f7f7f7;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;">' +
            '<span style="margin-right: 15px;">' +
            text +
            "</span>" +
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
      window.addEventListener("resize", function () {
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
      let echartDom = $("#" + cardName)
        .find(".card-body")
        .find(".echart");
      let cardBodyDom = $("#" + cardName).find(".card-body");

      let _height = $(cardBodyDom).height();
      $(echartDom).height(_height);
    },
    mobileHeight: function (cardName, height) {
      let cardDom = $("#" + cardName).parent();
      $(cardDom).height(height);
      let echartDom = $("#" + cardName)
        .find(".card-body")
        .find(".echart");
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
        text: "",
        type: "info",
        showCancelButton: true,
        confirmButtonText: getLanguage("sure"),
        cancelButtonText: getLanguage("cancel"),
      }).then(function (result) {
        if (result.value) {
          thenEvent();
        }
      });
    },
    //excel的5位纯数字日期格式转yyyy-mm-dd
    valueToDate: function (value) {
      var n = Number(value.split(".")[0]);
      var date = new Date("1900-1-1");
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
      var titleStr = titleArr.join("\t,");
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          var cell = dataJson[i][titleArr[j]] || "";
          if (cell.toString().indexOf(",") > -1) cell = '"' + cell + '"';
          rowArr.push(cell);
        }
        dataArr.push(rowArr.join("\t,"));
      }
      var dataStr = titleStr + "\n" + dataArr.join("\n");
      var blob = new Blob([dataStr], { type: "text/plain;charset=utf-8" });
      //解决中文乱码问题
      blob = new Blob([String.fromCharCode(0xfeff), blob], { type: blob.type });
      this.download(blob, fileName + ".csv");
    },
    toXls: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      var titleObj = dataJson[0];
      titleArr = titleArr || Object.keys(titleObj);
      var titleStr = "<tr><td>" + titleArr.join("</td><td>") + "</td></tr>";
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          rowArr.push("<td>" + (dataJson[i][titleArr[j]] || "") + "</td>");
        }
        dataArr.push("<tr>" + rowArr.join("") + "</tr>");
      }
      var dataStr = "<table>" + titleStr + dataArr.join("") + "</table>";
      var uri = "data:application/vnd.ms-excel;base64,";
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
        type: "application/vnd.ms-excel",
      });
      this.download(blob, fileName + ".xls");
    },
    toXlsx: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      //
      var sheet = XLSX.utils.json_to_sheet(dataJson);
      var blob = this.sheet2blob(sheet, fileName.substr(0, 30));
      this.download(blob, fileName + ".xlsx");
    },
    sheet2blob: function (sheet, sheetName) {
      sheetName = sheetName || "sheet1";
      var workbook = {
        SheetNames: [sheetName],
        Sheets: {},
      };
      workbook.Sheets[sheetName] = sheet;
      // 生成excel的配置项
      var wopts = {
        bookType: "xlsx", // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: "binary",
      };
      var wbout = XLSX.write(workbook, wopts);
      var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
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
      var btn = document.createElement("a");
      btn.href = URL.createObjectURL(blob);
      btn.download = fileFullName;
      btn.style = "display: none;";
      document.body.appendChild(btn);
      btn.click();
      document.body.removeChild(btn);
    },
  },
};

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["exports", "echarts"], factory);
  } else if (typeof exports === "object" && typeof exports.nodeName !== "string") {
    // CommonJS
    factory(exports, require("echarts"));
  } else {
    // Browser globals
    factory({}, root.echarts);
  }
})(this, function (exports, echarts) {
  var log = function (msg) {
    if (typeof console !== "undefined") {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log("ECharts is not Loaded");
    return;
  }
  echarts.registerTheme("essos", {
    color: ["#eb8146", "#ffb248", "#f2d643", "#ebdba4"],
    backgroundColor: "rgba(0,0,0,0)",
    textStyle: {},
    title: {
      textStyle: {
        color: "#893448",
      },
      subtextStyle: {
        color: "#d95850",
      },
    },
    line: {
      itemStyle: {
        borderWidth: "2",
      },
      lineStyle: {
        width: "2",
      },
      symbolSize: "6",
      symbol: "emptyCircle",
      smooth: true,
    },
    radar: {
      itemStyle: {
        borderWidth: "2",
      },
      lineStyle: {
        width: "2",
      },
      symbolSize: "6",
      symbol: "emptyCircle",
      smooth: true,
    },
    bar: {
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: "#ccc",
      },
    },
    pie: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    scatter: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    boxplot: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    parallel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    sankey: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    funnel: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    gauge: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
    },
    candlestick: {
      itemStyle: {
        color: "#eb8146",
        color0: "transparent",
        borderColor: "#d95850",
        borderColor0: "#58c470",
        borderWidth: "2",
      },
    },
    graph: {
      itemStyle: {
        borderWidth: 0,
        borderColor: "#ccc",
      },
      lineStyle: {
        width: 1,
        color: "#aaa",
      },
      symbolSize: "6",
      symbol: "emptyCircle",
      smooth: true,
      color: ["#eb8146", "#ffb248", "#f2d643", "#ebdba4"],
      label: {
        color: "#ffffff",
      },
    },
    map: {
      itemStyle: {
        normal: {
          areaColor: "#f3f3f3",
          borderColor: "#999999",
          borderWidth: 0.5,
        },
        emphasis: {
          areaColor: "#ffb248",
          borderColor: "#eb8146",
          borderWidth: 1,
        },
      },
      label: {
        normal: {
          textStyle: {
            color: "#893448",
          },
        },
        emphasis: {
          textStyle: {
            color: "#893448",
          },
        },
      },
    },
    geo: {
      itemStyle: {
        normal: {
          areaColor: "#f3f3f3",
          borderColor: "#999999",
          borderWidth: 0.5,
        },
        emphasis: {
          areaColor: "#ffb248",
          borderColor: "#eb8146",
          borderWidth: 1,
        },
      },
      label: {
        normal: {
          textStyle: {
            color: "#893448",
          },
        },
        emphasis: {
          textStyle: {
            color: "#893448",
          },
        },
      },
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#aaaaaa",
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#333",
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#999999",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#e6e6e6"],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
        },
      },
    },
    valueAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#aaaaaa",
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#333",
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#999999",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#e6e6e6"],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
        },
      },
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#aaaaaa",
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#333",
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#999999",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#e6e6e6"],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
        },
      },
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#aaaaaa",
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: "#333",
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#999999",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#e6e6e6"],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ["rgba(250,250,250,0.05)", "rgba(200,200,200,0.02)"],
        },
      },
    },
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: "#999",
        },
        emphasis: {
          borderColor: "#666",
        },
      },
    },
    legend: {
      textStyle: {
        color: "#999999",
      },
    },
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: "#ccc",
          width: 1,
        },
        crossStyle: {
          color: "#ccc",
          width: 1,
        },
      },
    },
    timeline: {
      lineStyle: {
        color: "#893448",
        width: 1,
      },
      itemStyle: {
        normal: {
          color: "#893448",
          borderWidth: 1,
        },
        emphasis: {
          color: "#ffb248",
        },
      },
      controlStyle: {
        normal: {
          color: "#893448",
          borderColor: "#893448",
          borderWidth: 0.5,
        },
        emphasis: {
          color: "#893448",
          borderColor: "#893448",
          borderWidth: 0.5,
        },
      },
      checkpointStyle: {
        color: "#eb8146",
        borderColor: "rgba(255,178,72,0.41)",
      },
      label: {
        normal: {
          textStyle: {
            color: "#893448",
          },
        },
        emphasis: {
          textStyle: {
            color: "#893448",
          },
        },
      },
    },
    visualMap: {
      color: ["#893448", "#d95850", "#eb8146", "#ffb248", "#f2d643", "rgb(247,238,173)"],
    },
    dataZoom: {
      backgroundColor: "rgba(255,255,255,0)",
      dataBackgroundColor: "rgba(255,178,72,0.5)",
      fillerColor: "rgba(255,178,72,0.15)",
      handleColor: "#ffb248",
      handleSize: "100%",
      textStyle: {
        color: "#333",
      },
    },
    markPoint: {
      label: {
        color: "#ffffff",
      },
      emphasis: {
        label: {
          color: "#ffffff",
        },
      },
    },
  });
});
