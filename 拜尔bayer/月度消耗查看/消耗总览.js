/**spread2 = spread对象
 */
function func_open() {
  printlog("func_open");
  $("#statusBar").remove();
  $(".spreadBox>div:nth-child(1)").remove();
  var sheet = spread.getActiveSheet();
  set_layout(sheet);
  set_charts(sheet);
}

function func_refresh() {
  printlog("func_refresh");
  var sheet = spread.getActiveSheet();
  $("#left_chart").remove();
  $("#right_chart").remove();
  $("#chart_area").remove();
  // $(".spreadBox>div:nth-child(1)").remove();
  set_layout(sheet);
  set_charts(sheet);
}

function set_layout(sht) {
  var sheet = sht;
  // 以下进行布局修改
  // 获取spreadBox元素，并设置ID
  var objSpreadBox = document.getElementsByClassName("spreadBox")[0];
  objSpreadBox.id = "idSpreadBox";
  // 获取spreadBox的高和宽
  spreadBoxHeight = $("#idSpreadBox").height();
  spreadBoxWidth = $("#idSpreadBox").width();
  // 设置表格部分高度，因为表格只有15行，行高20，因此设置该值
  // 设置列宽，以及控制滚动条是否可见
  margin = 10;
  head = 125;
  month = 55;
  quarter = 65;
  fullyear = 70;
  if (
    spreadBoxWidth >
    margin * 2 + head + month * 12 + quarter * 4 + fullyear
  ) {
    spread.options.showHorizontalScrollbar = false;
    $("#ssq").height(320);
    hChart = spreadBoxHeight - 30 - 320;
    gap =
      (spreadBoxWidth - 10) /
      (margin * 2 + head + month * 12 + quarter * 4 + fullyear - 10);
    for (let i = 2; i <= 19; i++) {
      if (i == 2) {
        sheet.setColumnWidth(i, head * gap);
      } else if (i <= 14) {
        sheet.setColumnWidth(i, month * gap);
      } else if (i == 15) {
        sheet.setColumnWidth(i, fullyear * gap);
      } else {
        sheet.setColumnWidth(i, quarter * gap);
      }
    }
  } else if (
    spreadBoxWidth -
      (margin * 2 + head + month * 12 + quarter * 4 + fullyear) <=
    11
  ) {
    spread.options.showHorizontalScrollbar = false;
    $("#ssq").height(320);
    hChart = spreadBoxHeight - 30 - 320;
    for (let i = 2; i <= 19; i++) {
      if (i == 2) {
        sheet.setColumnWidth(i, head);
      } else if (i <= 14) {
        sheet.setColumnWidth(i, month);
      } else if (i == 15) {
        sheet.setColumnWidth(i, fullyear);
      } else {
        sheet.setColumnWidth(i, quarter);
      }
    }
  } else {
    spread.options.showHorizontalScrollbar = true;
    $("#ssq").height(340);
    hChart = spreadBoxHeight - 30 - 340;
    for (let i = 2; i <= 19; i++) {
      if (i == 2) {
        sheet.setColumnWidth(i, head);
      } else if (i <= 14) {
        sheet.setColumnWidth(i, month);
      } else if (i == 15) {
        sheet.setColumnWidth(i, fullyear);
      } else {
        sheet.setColumnWidth(i, quarter);
      }
    }
  }
  // 新增一个div用于放echart
  $("#ssq").after("<div id='chart_area' class='row'></div>");
  $("#chart_area").height(hChart);
  $("#chart_area").css("margin-left", "0px");
  $("#chart_area").css("margin-right", "0px");
  $("#chart_area").append("<div id='left_chart' class='col-lg-7'></div>");
  $("#left_chart").css("padding-left", "0px");
  $("#left_chart").css("padding-right", "0px");
  $("#left_chart").height(hChart);
  $("#left_chart").after("<div id='right_chart' class='col-lg-5'></div>");
  $("#right_chart").height(hChart);
  $("#right_chart").css("padding-left", "0px");
  $("#right_chart").css("padding-right", "0px");
  spread.refresh();
  spread.options.tabStripVisible = false;
  // 设置纵滚动条不可见
  spread.options.showVerticalScrollbar = false;
  // 设置横滚动条不可见
  // spread.options.showHorizontalScrollbar = false;
  // 设置左侧1-N不可见
  sheet.setColumnVisible(0, false, GC.Spread.Sheets.SheetArea.rowHeader);
  // 设置顶部A-Z不可见
  sheet.setRowVisible(0, false, GC.Spread.Sheets.SheetArea.colHeader);

  let period_selected = parseInt($(".dataSheetCon>div:eq(0) select[dc='Period']").val()) + 2;
  sheet
    .getRange(3, period_selected, 14, 1)
    .borderRight(
      new GC.Spread.Sheets.LineBorder(
        "#2F77B7",
        GC.Spread.Sheets.LineStyle.dashDot
      )
    );
}

function set_charts(sht) {
  var sheet = sht;
  // 获取POV
  listPOV = [];
  POVHTMLCollection = document.getElementsByClassName(
    "multiselect-selected-text"
  );
  for (let i = 0; i < POVHTMLCollection.length; i++) {
    listPOV.push(POVHTMLCollection[i].innerText);
  }
  accountList = ["消耗金额", "消耗量"];
  account = listPOV.filter((v) => accountList.includes(v));
  if (account.length) {
    account = account[0];
  } else {
    account = "消耗";
  }

  // 准备echart数据
  // 左图
  monthlyDataPeriodic = sheet.getArray(4, 3, 4, 12);
  for (let i = 0; i < 12; i++) {
    monthlyDataPeriodic[1][i] =
      monthlyDataPeriodic[1][i] + monthlyDataPeriodic[2][i];
  }
  monthlyDataPeriodic = [
    monthlyDataPeriodic[0],
    monthlyDataPeriodic[1],
    monthlyDataPeriodic[3],
  ];
  monthlyScenarioBar = sheet.getArray(4, 2, 4, 1).reduce(function (a, b) {
    return a.concat(b);
  });
  monthlyScenarioBar.splice(2, 1);
  monthlyDataYTD = sheet.getArray(9, 3, 4, 12);
  for (let i = 0; i < 12; i++) {
    if (monthlyDataYTD[2][i] !== null) {
      monthlyDataYTD[1][i] = monthlyDataYTD[2][i];
    }
  }
  monthlyDataYTD = [monthlyDataYTD[0], monthlyDataYTD[1], monthlyDataYTD[3]];
  monthlyScenarioLine = sheet.getArray(9, 2, 4, 1).reduce(function (a, b) {
    return a.concat(b);
  });
  monthlyScenarioLine.splice(2, 1);
  dataLegend = monthlyScenarioBar.concat(monthlyScenarioLine);
  // 右图
  quarterDataPeriodic = sheet.getArray(4, 15, 4, 5);
  for (let i = 0; i < 5; i++) {
    quarterDataPeriodic[1][i] =
      quarterDataPeriodic[1][i] + quarterDataPeriodic[2][i];
  }
  quarterDataPeriodic = [
    quarterDataPeriodic[0],
    quarterDataPeriodic[1],
    quarterDataPeriodic[3],
  ];

  // 渲染图
  // 左图
  option1 = {
    color: ["#a6a6a6", "#a6a6a6", "#0090df", "#0090df", "#65b511", "#65b511"],
    tooltip: {
      trigger: "axis",
      formatter: function (data) {
        let headerText = "<strong>" + data[0].axisValue + "消耗 (K)</strong>";
        let bodyText = "";
        data.forEach(function (item) {
          bodyText +=
            "<br>" +
            item.marker +
            item.seriesName +
            ": " +
            format((item.data / 1000).toFixed(2));
        });
        return headerText + bodyText;
      },
    },
    legend: {
      bottom: "0%",
      data: dataLegend,
    },
    grid: {
      top: "15%",
      left: "1%",
      right: "1%",
      bottom: "8%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      // boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
    },
    yAxis: [
      {
        type: "value",
        splitLine: { show: false },
        nameLocation: "end",
        splitNumber: 5,
        axisLabel: {
          formatter: function (data) {
            return format(data / 1000);
          },
        },
        name: "月度" + account + "(K)",
      },
      {
        type: "value",
        splitLine: { show: false },
        nameLocation: "end",
        splitNumber: 5,
        axisLabel: {
          formatter: function (data) {
            return format(data / 1000);
          },
        },
        name: "累计" + account + "(K)",
      },
    ],
    series: [
      {
        name: monthlyScenarioBar[0],
        type: "bar",
        barGap: "0%",
        data: monthlyDataPeriodic[0],
      },
      {
        name: monthlyScenarioLine[0],
        type: "line",
        yAxisIndex: 1,
        data: monthlyDataYTD[0],
      },
      {
        name: monthlyScenarioBar[1],
        type: "bar",
        data: monthlyDataPeriodic[1],
      },
      {
        name: monthlyScenarioLine[1],
        type: "line",
        yAxisIndex: 1,
        data: monthlyDataYTD[1],
      },
      {
        name: monthlyScenarioBar[2],
        type: "bar",
        data: monthlyDataPeriodic[2],
      },
      {
        name: monthlyScenarioLine[2],
        type: "line",
        yAxisIndex: 1,
        data: monthlyDataYTD[2],
      },
    ],
  };

  option2 = {
    color: ["#A6A6A6", "#0090df", "#65b511"],
    tooltip: {
      trigger: "axis",
      formatter: function (data) {
        let headerText = "<strong>" + data[0].axisValue + "消耗 (K)</strong>";
        let bodyText = "";
        data.forEach(function (item) {
          bodyText +=
            "<br>" +
            item.marker +
            item.seriesName +
            ": " +
            format((item.data / 1000).toFixed(2));
        });
        return headerText + bodyText;
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    legend: {
      bottom: "0%",
      data: monthlyScenarioBar,
    },
    grid: {
      top: "15%",
      left: "1%",
      right: "1%",
      bottom: "8%",
      containLabel: true,
    },
    // calculable : true,
    xAxis: {
      type: "category",
      data: ["全年合计", "Q1", "Q2", "Q3", "Q4"],
    },
    yAxis: {
      type: "value",
      splitLine: { show: false },
      nameLocation: "end",
      splitNumber: 5,
      axisLabel: {
        formatter: function (data) {
          return format(data / 1000);
        },
      },
      name: account + "(K)",
    },
    series: [
      {
        name: monthlyScenarioBar[0],
        type: "bar",
        barGap: "5%",
        data: quarterDataPeriodic[0],
      },
      {
        name: monthlyScenarioBar[1],
        type: "bar",
        data: quarterDataPeriodic[1],
      },
      {
        name: monthlyScenarioBar[2],
        type: "bar",
        data: quarterDataPeriodic[2],
      },
    ],
  };
  initEchart("left_chart", option1);
  initEchart("right_chart", option2);
}

// 渲染 EChart 的通用方法
function initEchart(id, option) {
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on("resize", function () {
    chart.resize();
  });
}

function printlog(str) {
  var myDate = new Date();
  console.log(
    myDate.getHours() +
      ": " +
      myDate.getMinutes() +
      ": " +
      myDate.getSeconds() +
      ": " +
      myDate.getMilliseconds() +
      " >>>>> " +
      str
  );
}
