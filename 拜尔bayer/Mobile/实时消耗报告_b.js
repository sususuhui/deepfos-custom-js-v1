// 渲染 EChart 的通用方法
function initEchart(id, option) {
  id = "chart-" + id + "";
  $("#" + id)
    .parent()
    .addClass("pt-0 pl-0 pr-0 pb-0");
  // const _height = $("#" + id).height() + 40;
  const _height = $("#" + id)
    .parent()
    .height();
  $("#" + id).height(_height);
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on("resize", function () {
    // debugger;
    chart.resize();
  });
}

//ready
$(document).ready(function () {
  $(".navbar-nav")
    .children()
    .first()
    .click(function () {
      $(window).resize();
    });
});

function Chart_R1C1(data, params) {
  // $(".navbar-nav")
  //   .children()
  //   .first()
  //   .click(function () {
  //     debugger;
  //     $(window).resize();
  //   });

  console.log("Chart_R1C1" );
  let componentId = params.componentId;
  let pythonData_R1C1 = JSON.parse(data);
  let dataxAxis = pythonData_R1C1.xAxis;
  let datayAxis = pythonData_R1C1.yAxis;
  let dataRate = pythonData_R1C1.Rate;
  let dataTotal = pythonData_R1C1.Total;
  let dataConsumption = pythonData_R1C1.Consumption;
  let legend = ["达成率", "指标", "消耗"];
  //legend = ["aaa", "指标", "sss"];

  let option = {
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true },
      },
    },
    grid: {
      top: "12%",
      left: "7%",
      right: "7%",
      bottom: "14%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      formatter: function (data) {
        let headerText = "<strong>" + data[0].axisValue + "</strong>";
        let bodyText = "";
        bodyText +=
          "<br>" +
          data[0].marker +
          data[0].seriesName +
          ": " +
          data[0].value +
          "%";
        bodyText +=
          "<br>" +
          data[1].marker +
          data[1].seriesName +
          ": " +
          format(data[1].value) +
          " (" +
          pythonData_R1C1.Unit.unit +
          ")";
        bodyText +=
          "<br>" +
          data[2].marker +
          data[2].seriesName +
          ": " +
          format(data[2].value) +
          " (" +
          pythonData_R1C1.Unit.unit +
          ")";
        return headerText + bodyText;
      },
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        axisLabel: {
          interval: 0,
        },
        axisLine: {
          show: true,
        },
        axisTick: {
          show: false,
        },
        data: dataxAxis,
      },
      {
        type: "category",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        data: dataxAxis,
      },
    ],
    yAxis: [
      {
        type: "value",
        name: datayAxis[0],
        axisLabel: {
          formatter: "{value}%",
        },
        splitLine: {
          show: false,
        },
      },
      {
        type: "value",
        name: datayAxis[1] + pythonData_R1C1.Unit.unit,
        splitLine: {
          show: false,
        },
      },
    ],
    dataZoom: getDataZoom(dataxAxis.length),
    series: [
      {
        name: legend[0],
        type: "line",
        barWidth: "30%",
        xAxisIndex: 0,
        itemStyle: {
          normal: {
            color: "#0090df",
            barBorderColor: "#0090df",
            barBorderWidth: 1.5,
          },
        },
        data: dataRate,
      },
      {
        name: legend[1],
        type: "bar",
        barWidth: "30%",
        xAxisIndex: 0,
        itemStyle: {
          normal: {
            color: "#65b511",
            barBorderColor: "#65b511",
            barBorderWidth: 1.5,
          },
        },
        data: pythonData_R1C1.Target,
        yAxisIndex: 1,
      },
      {
        type: "bar",
        name: legend[2],
        barWidth: "30%",
        xAxisIndex: 0,
        label: {
          show: false,
        },
        itemStyle: {
          normal: {
            color: "#0090df",
            barBorderColor: "#0090df",
            barBorderWidth: 1.5,
          },
        },
        data: dataConsumption,
        yAxisIndex: 1,
      },
    ],
  };
  initEchart(componentId, option);
}

function getDataZoom(num) {
  let dataZoom = [
    {
      type: "slider",
      show: true,
      xAxisIndex: [0, 1],
      start: 0,
      end: 100,
    },
    {
      type: "inside",
      xAxisIndex: [0, 1],
      start: 0,
      end: 100,
    },
  ];

  if (num <= 7) {
    return dataZoom;
  } else {
    dataZoom[0].end = (7 / num) * 100;
    dataZoom[1].end = (7 / num) * 100;
    return dataZoom;
  }
}

function Chart_R1C2(data, params) {
  console.log("function Chart_R1C2");
  debugger;
  let componentId = params.componentId;
  let pythonData = JSON.parse(data);
  console.log(pythonData);
  debugger;
  let dataTargetRate = pythonData.TargetRate;
  let dataTargetTitle = pythonData.TargetTitle;
  let dataTargetColor = pythonData.TargetColor;
  let dataTargetName = pythonData.TargetName;
  let dataForecastRate = pythonData.ForecastRate;
  let dataForecastTitle = pythonData.ForecastTitle;
  let dataForecastColor = pythonData.ForecastColor;
  let dataForecastName = pythonData.ForecastName;
  if(dataTargetName.length > 16 && dataTargetName.length <= 32) {
        dataTargetName = dataTargetName.substring(0,16) + '\n' + dataTargetName.substring(16);
        dataForecastName = dataForecastName.substring(0,16) + '\n' + dataForecastName.substring(16);
    }
    if(dataTargetName.length > 32) {
        dataTargetName = dataTargetName.substring(0,16) + '\n' + dataTargetName.substring(16,32) + '\n' + dataTargetName.substring(32);
        dataForecastName = dataForecastName.substring(0,16) + '\n' + dataForecastName.substring(16,32) + '\n' + dataForecastName.substring(32);
    }
  let option = {
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "Gauge_Target",
        center: ["25%", "60%"],
        type: "gauge",
        z: 2,
        min: 0,
        max: 100,
        startAngle: 210,
        endAngle: -30,
        splitNumber: 4,
        radius: "60%",
        axisLine: {
          lineStyle: {
            color: [
              [0.5, "#d30f4c"],
              [0.8, "#0090df"],
              [1, "#65b511"],
            ],
            width: 20,
          },
        },
        axisTick: {
          show: false,
          length: 15,
          splitNumber: 5,
          lineStyle: {
            color: "auto",
          },
        },
        splitLine: {
          show: false,
          length: 20,
          lineStyle: {
            color: "auto",
          },
        },
        axisLabel: {
          show: false,
          formatter: "{value}%",
        },
        pointer: {
          length: "55%",
          width: 8,
        },
        title: {
          fontWeight: "bolder",
          offsetCenter: [0, "-140%"],
          fontSize: 18,
          // fontStyle: 'italic',
          color: dataTargetColor,
        },
        detail: {
          fontSize: 15,
          fontWeight: "bolder",
          fontStyle: "italic",
          offsetCenter: [0, "70%"],
          formatter: dataTargetTitle,
        },
        data: [{ value: dataTargetRate * 100, name: dataTargetName }],
      },
      {
        name: "Gauge_Forecast",
        center: ["75%", "60%"],
        type: "gauge",
        z: 3,
        min: 0,
        max: 100,
        startAngle: 210,
        endAngle: -30,
        splitNumber: 4,
        radius: "60%",
        axisLine: {
          lineStyle: {
            color: [
              [0.5, "#d30f4c"],
              [0.8, "#0090df"],
              [1, "#65b511"],
            ],
            width: 20,
          },
        },
        axisTick: {
          show: false,
          length: 15,
          lineStyle: {
            color: "auto",
          },
        },
        splitLine: {
          show: false,
          length: 20,
          lineStyle: {
            color: "auto",
          },
        },
        axisLabel: {
          show: false,
          formatter: "{value}%",
        },
        pointer: {
          length: "55%",
          width: 8,
        },
        title: {
          fontWeight: "bolder",
          offsetCenter: ["0%", "-140%"],
          fontSize: 18,
          // fontStyle: 'italic',
          color: dataForecastColor,
        },
        detail: {
          fontSize: 15,
          fontWeight: "bolder",
          fontStyle: "italic",
          offsetCenter: [0, "70%"],
          formatter: dataForecastTitle,
        },
        data: [{ value: dataForecastRate * 100, name: dataForecastName }],
      },
    ],
  };
  initEchart(componentId, option);
}

function Chart_R1C3(data, params) {
  console.log("function Chart_R1C3");
  var pyData = JSON.parse(data);
  $("#chart-" + params.componentId + "")
    .parent()
    .addClass("pt-0 pl-0 pr-0 pb-0");
  var tableDom = getR1C3Table(pyData.Data, pyData.Column);
  renderR3Table(tableDom, params.componentId, "R1C3");
  //增加下载按钮
  if (
    $("#chart-" + params.componentId + "")
      .parents(".componentCard")
      .find(".downLoadTable").length === 0
  ) {
    $("#chart-" + params.componentId + "")
      .parents(".componentCard")
      .find(".sheetPovPart")
      .before(
        '<a class="breadcrumb-elements-item cursor-pointer mr-2 ml-2 pt-0 pb-0 downLoadTable" onclick="downloadPyTable(\'' +
          params.componentId +
          "','R1C3')\"><i class=\"icon-download4 icon text-default mr-2\"></i><span class='iconSpan loadDes pt-0 pb-0 '>下载</span></a>"
      );
  }
  initDataTable("#TableR1C3", $(".sheetTable").height(), 1);

  // 字体加粗
  pyData.Data.forEach(function (rowItem, i) {
    if (rowItem[0] <= 2) {
      $("tr.r1c3" + i).css("font-weight", "bold");
    }
  });
}
function getR1C3Table(data, Columns) {
  var tHeadHtml = "";
  var tBodyHtml = "";
  var exportTbody = "";
  Columns.forEach(function (th, i) {
    tHeadHtml +=
      '<th style="background-color: rgba(0,0,0,.02);">' + th + "</th>";
  });
  data.forEach(function (rowItem, x) {
    tBodyHtml += '<tr class="r1c3' + x + '">';
    exportTbody += "<tr>";
    rowItem.forEach(function (tdVal, i) {
      var cellVal = tdVal;
      if (i === rowItem.length - 1) {
        //后两列百分比格式
        var colorStyle = gertColorByValue(cellVal);
        cellVal = floatNum.accMul(cellVal, 100).toFixed(1) + "%";
        tBodyHtml +=
          '<td><span class="badge badge-mark mr-1" style="background-color:' +
          colorStyle +
          ";border-color:" +
          colorStyle +
          '"></span>' +
          cellVal +
          "</td>";
      } else if (i > 1 && i < rowItem.length - 1) {
        cellVal = format(cellVal.toFixed(0));
        tBodyHtml += "<td>" + cellVal + "</td>";
      } else if (i == 1) {
        // 缩进层级显示
        var space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
          productsTitleSpace = [];
        for (var i = 0; i < rowItem[0]; i++) {
          productsTitleSpace.push(space);
          var ptsStr = productsTitleSpace.join("");
        }
        tBodyHtml +=
          '<td style=" text-align:left; ' +
          '">' +
          "&nbsp;&nbsp;&nbsp;" +
          ptsStr +
          cellVal +
          "</td>";
      }
      if (i > 0) {
        exportTbody += "<td>" + tdVal + "</td>";
      }
    });
    tBodyHtml += "</tr>";
    exportTbody += "</tr>";
  });
  return {
    tBodyHtml: tBodyHtml,
    tHeadHtml: tHeadHtml,
    exportTbody: exportTbody,
  };
}

function Chart_R2C1(data, params) {
    debugger;
   console.log("Chart_R2C1");
       console.log(data);
    console.log(params);
   let componentId = params.componentId;
   let pythonData = JSON.parse(data);
   let dataxAxis = pythonData.DayList;
   let dataTarget = pythonData.TargetData;
   let dataForecast = pythonData.ForecastData;
   let dataActual = pythonData.ActualData;
   let unit = pythonData.Unit.unit;
   let divisor = pythonData.Unit.divisor;
   let fix = pythonData.Unit.fix;
   let legend =pythonData.legend;
   console.log(legend);
   debugger;
  let option = {
    // title: {
    //  top: '0%',
    //  text: '当月县级消耗'
    // },
    tooltip: {
      trigger: "axis",
      formatter: function (data) {
        let headerText =
          "<strong>" + data[0].axisValue + " 消耗 (" + unit + ")</strong>";
        let bodyText = "";
        data.forEach(function (item) {
          bodyText +=
            "<br>" +
            item.marker +
            item.seriesName +
            ": " +
            format((item.data / divisor).toFixed(fix));
        });
        return headerText + bodyText;
      },
    },
    legend: {
      top: "3%",
      right: 25,
      data: legend,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      interval: 0,
      boundaryGap: false,
      data: dataxAxis,
      axisLabel: {
        rotate: 45,
      },
    },
    yAxis: [
      {
        type: "value",
        name: unit,
        axisLabel: {
          formatter: function (value, index) {
            return format((value / divisor).toFixed(0));
          },
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "日消指标参考",
        type: "line",
        color: "#a6a6a6",
        data: pythonData.TargetRef,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#bababa",
            },
            {
              offset: 1,
              color: "#fff",
            },
          ]),
        },
      },
      {
        name: legend[0],
        type: "line",
        color: "#65b511",
        data: dataTarget,
      },
      {
        name: legend[1],
        type: "line",
        color: "#00617f",
        data: dataForecast,
      },
      {
        name: legend[2],
        type: "line",
        color: "#0090df",
        data: dataActual,
      },
    ],
  };
  initEchart(componentId, option);
}

function Chart_R2C2(data, params) {
  console.log("function Chart_R2C2");
      console.log(data);
    console.log(params);
  let componentId = params.componentId;
  let pythonData = JSON.parse(data);
  let dataxAxis = pythonData.DayList;
  let dataDaily = pythonData.ActualDaily;
  let unit = pythonData.Unit.unit;
  let divisor = pythonData.Unit.divisor;
  let fix = pythonData.Unit.fix;
  let option = {
    // title: {
    //  top: '0%',
    //  text: '当月县级消耗日分布'
    // },
    tooltip: {
      trigger: "axis",
      formatter: function (data) {
        let headerText =
          "<strong>" + data[0].axisValue + "消耗 (" + unit + ")</strong>";
        let bodyText = "";
        data.forEach(function (item) {
          bodyText +=
            "<br>" +
            item.marker +
            "当日消耗: " +
            format((item.data / divisor).toFixed(fix));
        });
        return headerText + bodyText;
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: dataxAxis,
      axisLabel: {
        rotate: 45,
      },
    },
    yAxis: {
      type: "value",
      name: unit,
      axisLabel: {
        formatter: function (value, index) {
          return format((value / divisor).toFixed(0));
        },
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        type: "bar",
        color: "#0090df",
        data: dataDaily,
      },
    ],
  };
  initEchart(componentId, option);
}

function Chart_R3C1(data, params) {
      debugger;
  console.log("Chart_R2C1");
  console.log(data);
  console.log(params);
  
  var pyData = JSON.parse(data);
  $("#chart-" + params.componentId + "")
    .parent()
    .addClass("pt-0 pl-0 pr-0 pb-0");
  var tableDom = getR3C1Table(pyData.DataR3C1, pyData.Header);
  renderR3Table(tableDom, params.componentId, "R3C1");
  //增加下载按钮
  if (
    $("#chart-" + params.componentId + "")
      .parents(".componentCard")
      .find(".downLoadTable").length === 0
  ) {
    $("#chart-" + params.componentId + "")
      .parents(".componentCard")
      .find(".sheetPovPart")
      .before(
        '<a class="breadcrumb-elements-item cursor-pointer mr-2 ml-2 pt-0 pb-0 downLoadTable" onclick="downloadPyTable(\'' +
          params.componentId +
          "','R3C1')\"><i class=\"icon-download4 icon text-default mr-2\"></i><span class='iconSpan loadDes pt-0 pb-0 '>下载</span></a>"
      );
  }
  initDataTable("#TableR3C1", $(".sheetTable").height(), 1);
}
function getR3C1Table(data, Columns) {
  var tHeadHtml = "";
  var tBodyHtml = "";
  var exportTbody = "";
  Columns.forEach(function (th, i) {
    tHeadHtml +=
      '<th style="background-color: rgba(0,0,0,.02);">' + th + "</th>";
  });
  data.forEach(function (rowItem) {
    tBodyHtml += "<tr>";
    exportTbody += "<tr>";
    rowItem.forEach(function (tdVal, i) {
      var cellVal = tdVal;
      if (i === rowItem.length - 1 || i === rowItem.length - 2) {
        //后两列百分比格式
        var colorStyle = gertColorByValue(cellVal);
        cellVal = floatNum.accMul(cellVal, 100).toFixed(1) + "%";
        tBodyHtml +=
          '<td><span class="badge badge-mark mr-1" style="background-color:' +
          colorStyle +
          ";border-color:" +
          colorStyle +
          '"></span>' +
          cellVal +
          "</td>";
      } else if (i !== 0) {
        cellVal = format(cellVal.toFixed(0));
        tBodyHtml += "<td>" + cellVal + "</td>";
      } else {
        tBodyHtml += "<td>" + cellVal + "</td>";
      }
      exportTbody += "<td>" + tdVal + "</td>";
    });
    tBodyHtml += "</tr>";
    exportTbody += "</tr>";
  });
  return {
    tBodyHtml: tBodyHtml,
    tHeadHtml: tHeadHtml,
    exportTbody: exportTbody,
  };
}

var r3c2_status = 1;
function Chart_R3C2(data, params) {
      debugger;
  console.log("Chart_R2C1");
  console.log(data);
  console.log(params);
  
  r3c2_status = null;

  var pyData = JSON.parse(data);
  // console.log(pyData, 'pyData');
  console.log("Chart_R3C2");
  $("#chart-" + params.componentId + "")
    .parent()
    .addClass("pt-0 pl-0 pr-0 pb-0");
  var tableDom = getR3C2Table(pyData.Data, pyData.Column);
  renderR3Table(tableDom, params.componentId, "R3C2");
  //增加下载按钮
  if (
    $("#chart-" + params.componentId + "")
      .parents(".componentCard")
      .find(".downLoadTable").length === 0
  ) {
    $("#chart-" + params.componentId + "")
      .parents(".componentCard")
      .find(".sheetPovPart")
      .before(
        '<a class="breadcrumb-elements-item cursor-pointer mr-2 ml-2 pt-0 pb-0 downLoadTable" onclick="downloadPyTable(\'' +
          params.componentId +
          "','R3C2')\"><i class=\"icon-download4 icon text-default mr-2\"></i><span class='iconSpan loadDes pt-0 pb-0 '>下载</span></a>"
      );
  }
  // initDataTable("#TableR3C2", $(".sheetTable").height(), 4);
  initDataTable(
    "#TableR3C2",
    $("#chart-" + params.componentId + "").height(),
    4
  );
  foldTable();
  r3c2_status = 1;

  // 字体加粗
  $("#TableR3C2").find("td.r3c2_treeView").parent().css("font-weight", "bold");

  $(window).resize();
}

// 折叠表格
function foldTable() {
  // 添加树形icon
  $("td.r3c2_treeView").prepend(
    '<i class="icon-arrow-down5 cursor-pointer r3c2_treeView_icon"></i>'
  );
  // 添加树形icon折叠点击事件
  $("i.r3c2_treeView_icon.icon-arrow-down5").click(function () {
    // 树形展开与否
    var currentFoldTableDom = $(this).parent().parent();
    currentIndex = $(this).parent().index();
    if ($(this).attr("class").indexOf("icon-arrow-down5") != -1) {
      $(this).attr(
        "class",
        "icon-arrow-right5 cursor-pointer r3c2_treeView_icon"
      );
      nextFoldTable(currentFoldTableDom, currentIndex);
    } else {
      $(this).attr(
        "class",
        "icon-arrow-down5 cursor-pointer r3c2_treeView_icon"
      );
      nextUnFoldTable(currentFoldTableDom, currentIndex);
      testChildrenFold();
    }
  });

  // 初始折叠
  $("td.r3c2_provincial.r3c2_treeView").children("i").trigger("click");
}

// 检测子行折叠状态
function testChildrenFold() {
  $("tr.r3c2_tr").each(function () {
    var style2 = $(this).attr("style2");
    style1 = $(this).attr("style1");
    style0 = $(this).attr("style0");

    if (style0 == "display:none") {
      $(this).hide();
    } else if (style1 == "display:none") {
      $(this).hide();
    } else if (style2 == "display:none") {
      $(this).hide();
    }
  });
}

// 折叠行
function nextFoldTable(dom, index) {
  if (
    dom
      .next()
      .children()
      .eq(index + 1)
      .text().length != 0
  ) {
    dom.next().hide();
    dom.next().attr("style" + index, "display:none");
    nextFoldTable(dom.next(), index);
  }
  if (!_.isNull(r3c2_status)) {
    $(window).resize();
  }

  return;
}
// 展开行
function nextUnFoldTable(dom, index) {
  if (
    dom
      .next()
      .children()
      .eq(index + 1)
      .text().length != 0
  ) {
    dom.next().show();
    dom.next().removeAttr("style" + index);
    nextUnFoldTable(dom.next(), index);
  }
  if (!_.isNull(r3c2_status)) {
    $(window).resize();
  }
  return;
}

function getR3C2Table(data, Columns) {
  var tHeadHtml = "";
  var tBodyHtml = "";
  var exportTbody = "";
  Columns.forEach(function (th, i) {
    tHeadHtml +=
      '<th style="background-color: rgba(0,0,0,.02);">' + th + "</th>";
  });
  data.forEach(function (rowItem, x) {
    tBodyHtml += '<tr class="r3c2_tr">';
    exportTbody += "<tr>";
    rowItem.forEach(function (tdVal, i) {
      var cellVal = tdVal;
      if (i > 3) {
        cellVal = format(cellVal.toFixed(0));
      }
      // 单元格加class
      if (i == 0 && cellVal.indexOf("合计") != -1) {
        tBodyHtml +=
          '<td class="r3c2_treeView r3c2_type" style=" text-align:left; ' +
          '">' +
          cellVal +
          "</td>";
      } else if (i == 1 && cellVal.indexOf("合计") != -1) {
        tBodyHtml +=
          '<td class="r3c2_treeView r3c2_regional" style=" text-align:left; ' +
          '">' +
          cellVal +
          "</td>";
      } else if (i == 2 && cellVal.indexOf("合计") != -1) {
        tBodyHtml +=
          '<td class="r3c2_treeView r3c2_provincial" style=" text-align:left; ' +
          '">' +
          cellVal +
          "</td>";
      } else if (i < 3 && cellVal.indexOf("合计") == -1) {
        tBodyHtml +=
          '<td style=" text-align:left;padding-left: 24px; ' +
          '">' +
          cellVal +
          "</td>";
      } else {
        tBodyHtml += "<td>" + cellVal + "</td>";
      }

      exportTbody += "<td>" + tdVal + "</td>";
    });
    tBodyHtml += "</tr>";
    exportTbody += "</tr>";
  });
  return {
    tBodyHtml: tBodyHtml,
    tHeadHtml: tHeadHtml,
    exportTbody: exportTbody,
  };
}
// 公用渲染table
function renderR3Table(tableDom, id, k) {
  var tableSHtml =
    '<div class="h-100 sheetTable">\n  <table class="table table-bordered text-nowrap table-xs text-center" style="width:100%!important" id="Table' +
    k +
    '">\n <thead>\n <tr>' +
    tableDom.tHeadHtml +
    "</tr>\n  </thead>\n  <tbody>\n " +
    tableDom.tBodyHtml +
    '\n </tbody>\n  </table>\n  <table class="table table-bordered text-nowrap table-xs disPNone" id="exportTable' +
    k +
    '">\n <thead>\n <tr>' +
    tableDom.tHeadHtml +
    "</tr>\n  </thead>\n  <tbody>\n " +
    tableDom.exportTbody +
    "\n </tbody>\n  </table>\n</div>";
  $("#chart-" + id + "").html(tableSHtml);
}
/**
 * 初始化table固定表头
 */
function initDataTable(tableName, scrollYHeight, leftColumns) {
  $(tableName).DataTable({
    destroy: true,
    bFilter: false,
    bLengthChange: false,
    paging: false,
    // autoWidth: false,
    order: [],
    bSort: false,
    info: false,
    scrollY: scrollYHeight,
    scrollCollapse: true,
    scrollX: true,
    autoWidth: true,
    // fixedColumns: { leftColumns: leftColumns },
    language: {
      sEmptyTable: getLanguage("noData"),
    },
  });
}
//下载table
function downloadPyTable(id, table_type) {
  var tableName = $("#chart-" + id + "")
    .parents(".pythonCard")
    .find(".card-title")
    .text();
  $("#exportTable" + table_type).tableExport({
    type: "xlsx",
    escape: "false",
    fileName: tableName,
  });
}
// 根据值的范围获取颜色
function gertColorByValue(val) {
  if (val >= 1.1) {
    return "#65b511";
  } else if (val >= 1) {
    return "#ffcc00";
  } else if (val < 1) {
    return "#d30f4c";
  }
}

$(function () {
  // 加载下载excel插件
  $("body").append('<script src="../js/plugins/xlsx.full.min.js"></script>');
  //设置样式
  var styleHtml =
    "<style>" +
    ".sheetTable td,.sheetTable th{" +
    "padding:0.1rem 0.5rem}" +
    "</style>";
  $("head").append(styleHtml);
});
