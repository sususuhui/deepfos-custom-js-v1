function Chart_X1C1_Main() {
  var cardName = "Y公司总负债与开发投资额";

  //   if (getRequest().isView !== 'mobile') {
  //     $('#' + cardName)
  //       .parent()
  //       .css('width', '75%');
  //   }

  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var option = {
    color: ["#516b91", "#59c4e6", "#edafda", "#93b7e3", "#a5e7f0", "#cbb0e3"],

    legend: {
      data: ["总负债同比增速", "开发投资同比增速"],
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        axisLabel: {
          show: true,
          interval: "auto",
          formatter: "{value} %",
        },
        scale: true,
      },
    ],
    series: [
      {
        name: "总负债同比增速",
        type: "line",

        data: [34.4, 30.1, 26.7, 20.3, 20.5, 19.8, 15.1, 10.5, 12.4, 16, 14, 15],
      },
      {
        name: "开发投资同比增速",
        type: "line",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              formatter: "{c}%",
            },
          },
        },

        data: [33, 28, 16, 20, 16, 11, 17, 17, 10, 10, 16, 16],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
function Chart_X1C2_Main() {
  var cardName = "Y公司房地产开发投资同比增速";

  //   if (getRequest().isView !== 'mobile') {
  //     $('#' + cardName)
  //       .parent()
  //       .css('width', '75%');
  //   }

  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var option = {
    color: ["#516b91", "#59c4e6", "#edafda", "#93b7e3", "#a5e7f0", "#cbb0e3"],

    legend: {
      data: ["同比增速", "开发投资额"],
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
      },
    ],
    yAxis: [
      {
        type: "value",
        scale: true,
        name: "（万亿元）",
      },
      {
        type: "value",
        axisLabel: {
          show: true,
          interval: "auto",
          formatter: "{value} %",
        },
        scale: true,
      },
    ],
    series: [
      {
        name: "开发投资额",
        type: "bar",

        data: [4.4, 6.1, 6.7, 8.3, 8.5, 9.8, 10.1, 11.5, 12.4, 13, 14, 18],
      },
      {
        name: "同比增速",
        type: "line",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              formatter: "{c}%",
            },
          },
        },
        yAxisIndex: 1,
        data: [33, 28, 16, 20, 10, 1, 7, 7, 10, 10, 6, 6],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function Chart_X1C3_Main() {
  var cardName = "Y公司同城销售市占率";

  //   if (getRequest().isView !== 'mobile') {
  //     $('#' + cardName)
  //       .parent()
  //       .css('width', '75%');
  //   }

  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var option = {
    color: ["#516b91", "#59c4e6", "#edafda", "#93b7e3", "#a5e7f0", "#cbb0e3"],

    legend: {
      data: ["Top10总计", "本公司"],
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: ["2016A", "2017A", "2018A", "2019A", "2020E", "2021E"],
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        name: "(%)",
        axisLabel: {
          show: true,
          interval: "auto",
          formatter: "{value} %",
        },
        scale: true,
      },
    ],
    series: [
      {
        name: "Top10总计",
        type: "line",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              formatter: "{c}%",
            },
          },
        },
        data: [45, 55, 67, 73, 75, 77],
      },
      {
        name: "本公司",
        type: "line",
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: "top",
              formatter: "{c}%",
            },
          },
        },

        data: [19, 24, 27, 28, 30, 32],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function Chart_X2C1_Main() {
  var cardName = "RE1";

  //   if (getRequest().isView !== 'mobile') {
  //     $('#' + cardName)
  //       .parent()
  //       .css('width', '75%');
  //   }

  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var option = {
    color: ["#516b91", "#59c4e6", "#edafda", "#93b7e3", "#a5e7f0", "#cbb0e3"],
    // legend: {
    //     data: ['净资产收益率'],
    //     left:10

    // },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      inverse: true,
      data: ["世荣兆业", "蓝光发展", "中南建发", "绿地控股", "金科股份", "华夏幸福", "鲁商发展", "津滨发展", "苏宁环球", "Y公司"],
    },
    series: [
      {
        name: "净资产收益率",
        type: "bar",
        label: {
          normal: {
            show: true,
            // position: 'top',
            formatter: "{c}%",
          },
        },
        itemStyle: {
          //通常情况下：
          normal: {
            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
            color: function (params) {
              var colorList = ["#516b91", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91", "#edafda"];
              return colorList[params.dataIndex];
            },
          },
        },
        data: [18.49, 15.93, 15.78, 15.36, 15.35, 15.23, 14.1, 13.87, 13.84, 10.13],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
function Chart_X2C2_Main() {
  var cardName = "RE2";

  //   if (getRequest().isView !== 'mobile') {
  //     $('#' + cardName)
  //       .parent()
  //       .css('width', '75%');
  //   }

  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var option = {
    color: ["#516b91", "#59c4e6", "#edafda", "#93b7e3", "#a5e7f0", "#cbb0e3"],
    // legend: {
    //     data: ['净利润'],
    //     left:10

    // },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      inverse: true,
      data: ["Y公司", "保利地产", "绿地控股", "华夏幸福", "华侨城A", "金地集团", "新城控股", "金科控股", "荣盛发展", "中南建设"],
    },
    series: [
      {
        name: "净利润",
        type: "bar",
        barGap: "20%",
        label: {
          normal: {
            show: true,
            // position: 'top',
            formatter: "{c}亿元",
          },
        },
        itemStyle: {
          //通常情况下：
          normal: {
            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
            color: function (params) {
              var colorList = ["#edafda", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91"];
              return colorList[params.dataIndex];
            },
          },
        },
        data: [198.6, 132.0, 120.4, 72.8, 52.84, 49.92, 47.36, 44.37, 44.05, 36.85],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function Chart_X2C3_Main() {
  var cardName = "RE3";

  //   if (getRequest().isView !== 'mobile') {
  //     $('#' + cardName)
  //       .parent()
  //       .css('width', '75%');
  //   }

  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var option = {
    color: ["#516b91", "#59c4e6", "#edafda", "#93b7e3", "#a5e7f0", "#cbb0e3"],
    // legend: {
    //     data: ['营业收入'],
    //     left: 10

    // },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      inverse: true,
      data: ["绿地控股", "Y公司", "保利地产", "新城控股", "华夏幸福", "招商蛇口", "金科控股", "中南建设", "荣盛发展", "金地集团"],
    },
    series: [
      {
        name: "营业收入",
        type: "bar",
        barGap: "20%",
        label: {
          normal: {
            show: true,
            // position: 'top',
            formatter: "{c}亿元",
          },
        },
        itemStyle: {
          //通常情况下：
          normal: {
            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
            color: function (params) {
              var colorList = ["#516b91", "#edafda", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91", "#516b91"];
              return colorList[params.dataIndex];
            },
          },
        },
        data: [3211, 2415, 1175, 700.9, 567.3, 501.2, 477.3, 458.6, 436.6, 404.4],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function Chart_R1C1_Main() {
  var cardName = "Chart_R1C1";

  // if (getRequest().isView !== 'mobile') {
  //   $('#' + cardName)
  //     .parent()
  //     .css('width', '20%');
  // }

  var cardBody = cfs.card.body.getDom(cardName);
  cardBody.html("");
  cardBody.css("padding", "10px");
  cardBody.css("overflow", "auto");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  let titleDom = $("#globalPovPart");
  titleDom.find(".freshBS").unbind();
  titleDom.find(".freshBS").click(function () {
    Chart_R1C1_Main();
    Chart_R1C2_Main();
    Chart_R1C3_Main();
    Chart_R2C1_Main();
    Chart_R2C2_Main();
    Chart_R2C3_Main();
    Chart_R3C1_Main();
    Chart_R3C2_Main();
    Chart_R4_Main();
  });
  let dimDom = titleDom.find("select[aname='Project']").parent();
  let data = [
    { name: "项目名称", value: dimDom.find("a").text() },
    { name: "起始年", value: 2012 },
    { name: "规划户数", value: " 2,578.00 " },
    { name: "规划建筑面积（地上）", value: " 178,353.98 " },
    { name: "预计项目总投资", value: " 246,803.65 " },
    { name: "初始总投", value: " 146,593.00 " },
    { name: "项目IRR（vs项目投入）", value: "11.8%" },
    { name: "股本IRR（vs股东投入）", value: "-" },
  ];
  var tableDom = cfs.card.body.createTable(cardName, data);
}

function Chart_R1C2_Main() {
  var cardName = "Chart_R1C2";

  // if (getRequest().isView !== 'mobile') {
  //   $('#' + cardName)
  //     .parent()
  //     .css('width', '40%');
  // }

  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var option = {
    color: ["#516b91", "#edafda", "#59c4e6", "#93b7e3", "#a5e7f0", "#cbb0e3"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var tar;
        if (params[1].value !== "-") {
          tar = params[1];
        } else {
          tar = params[0];
        }
        return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
      },
    },
    legend: {
      orient: "horizontal",
      y: 30,
      top: 5,
      data: ["增加", "减少", "汇总"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: 30,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      splitLine: {
        show: false,
      },
      data: ["项目收入", "土地成本", "开发成本", "开发费用", "税金", "项目损益"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "汇总",
        type: "bar",
        stack: "总量",
        label: {
          show: true,
          position: "top",
        },
        data: [97776906, "-", "-", "-", "-", 90589357],
        itemStyle: {
          color: "#0F953A",
        },
      },
      {
        name: "辅助",
        type: "bar",
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
        // data: [0, 97776906, 102352413, 103816575, 103242635, 0]
        data: ["-", 93201399, 91737237, 91163297, 90589357, "-"],
      },
      {
        name: "减少",
        type: "bar",
        stack: "总量",
        label: {
          show: true,
          position: "bottom",
        },
        data: ["-", 4575507, 1464162, 573940, 573940, "-"],
        itemStyle: {
          color: "#82BC01",
        },
      },
    ],
  };

  // 手机端
  if (getRequest().isView == "mobile") {
    // 高度调整
    // cfs.echarts.mobileHeight(cardName, 400);

    option = {
      grid: {
        top: "5%",
        bottom: 90,
        left: 55,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        data: ["本年项目总投资", "历年累计项目总投资", "保险资金投入", "历年保险资金投入"],
        y: "bottom",
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          data: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032],
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "金额",
          position: "left",
        },
      ],
      series: [
        {
          name: "本年项目总投资",
          type: "bar",
          data: [73571.52852, 34091.29162, 20405.53268, 73194.08615, 9690.602694, 10114.6134, 6049.508245, 1264.102635, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "历年累计项目总投资",
          type: "line",
          areaStyle: {},
          data: [
            73571.52852,
            107662.8201,
            128068.3528,
            201262.439,
            210953.0417,
            221067.6551,
            227117.1633,
            228381.266,
            228381.266,
            228381.266,
            228381.266,
            228381.266,
            228381.266,
            228381.266,
            228381.266,
            228381.266,
            228381.266,
            228381.266,
            228381.266,
            228381.266,
            228381.266,
          ],
        },
        {
          name: "保险资金投入",
          type: "bar",
          data: [146593, 275, 0, 63200, 0, 0, 0, 70000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "历年保险资金投入",
          type: "line",
          areaStyle: {},
          data: [
            146593,
            146868,
            146868,
            210068,
            210068,
            210068,
            210068,
            280068,
            280068,
            280068,
            280068,
            280068,
            280068,
            280068,
            280068,
            280068,
            280068,
            280068,
            280068,
            280068,
            280068,
          ],
        },
      ],
    };
  }

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function Chart_R1C3_Main() {
  var cardName = "Chart_R1C3";

  if (getRequest().isView !== "mobile") {
    $("#" + cardName)
      .parent()
      .css("width", "40%");
  }

  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var option = {
    grid: {
      top: "5%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      label: {
        formatter: function (n) {
          return n * 100 + "%";
        },
      },
    },
    legend: {
      data: ["ROE", "ROI", "ROA"],
      y: "bottom",
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        data: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "比例",
        position: "left",
        axisLabel: {
          formatter: function (n) {
            return n * 100 + "%";
          },
        },
      },
    ],
    series: [
      {
        name: "ROE",
        type: "line",
        data: [
          0,
          -0.003114499,
          -0.049006964,
          -0.025586179,
          -0.049678153,
          -0.007198682,
          0.029228429,
          0.023836127,
          0.025896193,
          0.023832142,
          0.024027801,
          0.029998456,
          0.086576315,
          0.089529987,
          0.092528763,
          0.09557393,
          0.097835684,
          0.100126051,
          0.10244654,
          0.104799902,
          0.107190451,
        ],
      },
      {
        name: "ROI",
        type: "line",
        data: [
          0,
          -0.003104829,
          -0.046572432,
          -0.024081379,
          -0.044543589,
          -0.006408518,
          0.026803595,
          0.022898713,
          0.019027884,
          0.017829965,
          0.01802085,
          0.022498842,
          0.064932237,
          0.067147491,
          0.069396572,
          0.079990412,
          0.081686728,
          0.083404503,
          0.085144869,
          0.086909891,
          0.088702802,
        ],
      },
      {
        name: "ROA",
        type: "line",
        data: [
          0,
          -0.002737275,
          -0.034255017,
          -0.019443919,
          -0.026881233,
          -0.002769206,
          0.00902118,
          0.010541009,
          0.009009943,
          0.008286017,
          0.008274673,
          0.010079064,
          0.028342273,
          0.028525454,
          0.028658904,
          0.032288973,
          0.032183574,
          0.032025197,
          0.031813896,
          0.031550428,
          0.031236262,
        ],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function Chart_R2C1_Main() {
  var cardName = "Chart_R2C1";
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var option = {
    legend: {
      data: ["城市平均", "本公司"],
    },
    color: ["#516b91", "#59c4e6", "#edafda", "#93b7e3", "#a5e7f0", "#cbb0e3"],
    tooltip: {
      trigger: "axis",
      showContent: false,
    },
    dataset: {
      source: [
        ["product", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        ["城市平均", 15.6, 19.4, 23.1, 22.3, 26.8, 25.7, 19.3, 15.8, 14.7, 16.8, 16.7],
        ["本公司", 11.5, 15.1, 15.7, 14.1, 17.4, 14.1, 9.1, 8.4, 7.1, 8.4, 8.1],
      ],
    },
    xAxis: { type: "category" },
    yAxis: { gridIndex: 0 },
    // grid: {top: '55%'},
    series: [
      {
        type: "line",
        smooth: true,
        seriesLayoutBy: "row",
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
      },
      {
        type: "line",
        smooth: true,
        seriesLayoutBy: "row",
        label: {
          normal: {
            show: true,
            position: "top",
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
}
function Chart_R2C2_Main() {
  var cardName = "Chart_R2C2";
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    color: ["#edafda", "#93b7e3", "#516b91", "#59c4e6", "#a5e7f0", "#cbb0e3"],
    legend: {
      data: ["城市总规模", "Y公司"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          show: true,
          interval: "auto",
          formatter: "{value} %",
        },
        show: true,
      },
    ],
    series: [
      {
        name: "Y公司",
        type: "bar",
        stack: "广告",
        barGap: 20,
        data: [12, 13, 12, 13, 12, 13, 13, 12, 13, 13, 12, 13],
      },
      {
        name: "城市总规模",
        type: "bar",
        stack: "广告",
        barGap: 20,
        data: [18, 22, 18, 22, 22, 18, 20, 20, 18, 22, 20, 18],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
function Chart_R2C3_Main() {
  var cardName = "Chart_R2C3";
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var option = {
    legend: {
      data: ["商品房销售额同比增速", "平均首套住房抵押贷款利率"],
    },
    color: ["#516b91", "#59c4e6", "#edafda", "#93b7e3", "#a5e7f0", "#cbb0e3"],
    tooltip: {
      trigger: "axis",
      showContent: false,
    },
    dataset: {
      source: [
        ["product", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        ["商品房销售额同比增速", 15.6, 19.4, 23.1, 22.3, 26.8, 25.7, 19.3, 15.8, 14.7, 16.8, 16.7],
        ["平均首套住房抵押贷款利率", 4.5, 4.1, 5.7, 4.1, 5.4, 4.1, 5.1, 4.4, 4.1, 4.4, 4.1],
      ],
    },
    xAxis: {
      type: "category",
    },
    yAxis: [
      {
        name: "商品房销售额同比增速",
        axisLabel: {
          show: true,
          interval: "auto",
          formatter: "{value} %",
        },
        type: "value",
      },
      {
        name: "平均首套住房抵押贷款利率",
        axisLabel: {
          show: true,
          interval: "auto",
          formatter: "{value} %",
        },
        type: "value",
      },
    ],
    series: [
      {
        type: "line",
        smooth: true,
        seriesLayoutBy: "row",

        //  label: {
        //      normal: {
        //          show: true,
        //          position: 'top'
        //      }
        //  },
      },
      {
        type: "line",
        smooth: true,
        seriesLayoutBy: "row",
        yAxisIndex: 1,
        //  label: {
        //      normal: {
        //          show: true,
        //          position: 'top'
        //      }
        //  },
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
function Chart_R3C1_Main() {
  var cardName = "Chart_R3C1";

  // if (getRequest().isView !== 'mobile') {
  //   $('#' + cardName)
  //     .parent()
  //     .css('width', '75%');
  // }

  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var option = {
    grid: {
      top: "5%",
      left: 50,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    legend: {
      data: ["项目估值", "股东估值"],
      y: "bottom",
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        data: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "金额",
        position: "left",
      },
    ],
    series: [
      {
        name: "项目估值",
        type: "bar",
        data: [
          -73571.52852,
          -32651.48761,
          -21470.81932,
          -73990.9422,
          -10137.69737,
          65.32593453,
          13411.00164,
          9412.553118,
          10617.08938,
          10057.92481,
          10147.02642,
          12272.53525,
          32082.80186,
          33116.83812,
          34166.66445,
          32905.37676,
          33697.18301,
          34499.00605,
          35311.37449,
          36135.25103,
          36972.14635,
        ],
      },
      {
        name: "股东估值",
        type: "bar",
        data: [
          146593,
          275,
          0,
          63200,
          0,
          0,
          0,
          70000,
          0,
          0,
          4355.407333,
          6301.205583,
          18185.44162,
          18805.86337,
          19435.75917,
          22402.75466,
          22877.8384,
          23358.93223,
          23846.35329,
          24340.67922,
          24842.81641,
        ],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function Chart_R3C2_Main() {
  var cardName = "Chart_R3C2";

  if (getRequest().isView !== "mobile") {
    $("#" + cardName)
      .parent()
      .css("width", "25%");
  }

  var cardBody = cfs.card.body.getDom(cardName);
  cardBody.html("");
  cardBody.css("padding", "10px");
  cardBody.css("overflow", "auto");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  var data = [
    { name: " 股本占比 ", value: "44%" },
    { name: " 债券占比 ", value: "56%" },
    { name: " 股权成本 ", value: "10%" },
    { name: " 债权成本 ", value: "7%" },
    { name: " 收益率 ", value: "5%" },
    { name: " 贴现率 ", value: "8%" },
    { name: " 终值增长率 ", value: "3%" },
    { name: " 项目估值现金流合计 ", value: " 1,109,891.46 " },
    { name: " 股东估值现金流合计 ", value: " 1,087,351.28 " },
  ];
  var tableDom = cfs.card.body.createTable(cardName, data);
}
function Chart_R4_Main() {
  var cardName = "Chart_R4";
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find(".freshBS").find("i").css("margin", 10);
  option = {
    grid: {
      top: "5%",
      left: 50,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    legend: {
      data: ["筹资前", "筹资后"],
      y: "bottom",
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        data: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "金额",
        position: "left",
      },
    ],
    series: [
      {
        name: "筹资前",
        type: "bar",
        data: [
          -73571.52852,
          -107170.9181,
          -131529.0941,
          -175644.5034,
          -134685.7839,
          -27180.07177,
          -3943.249328,
          10916.226,
          25559.78098,
          39264.18629,
          53425.83807,
          68535.1759,
          88221.34127,
          108830.9771,
          130424.5293,
          150731.4411,
          172075.3671,
          194508.2462,
          218084.9799,
          242865.079,
          268914.3349,
        ],
      },
      {
        name: "筹资后",
        type: "bar",
        data: [
          -73571.52852,
          -33599.38962,
          -24358.176,
          -44115.40927,
          40958.71948,
          107505.7122,
          23236.82245,
          14859.47533,
          14643.55498,
          13704.40531,
          14161.65178,
          15109.33783,
          19686.16537,
          20609.6358,
          21593.55226,
          20306.91175,
          21343.92607,
          22432.87908,
          23576.73368,
          24780.09905,
          26049.25591,
        ],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
// 自定义一个处理小数的函数
function numPro(num) {
  var n = floatNum.accMul(num, 100); //小数乘以100
  n = n.toFixed(2); //取两位小数
  return n;
}
//Functions.js
(function addCusStyle() {
  //添加loading动画css
  var style = document.createElement("style");
  style.type = "text/css";
  var css1 =
    ".customLoader {border: .2em solid transparent;border-top-color: currentcolor;border-radius: 50%;-webkit-animation: 1s customLoader linear infinite;animation: 1s customLoader linear infinite;position: relative;display: inline-block;width: 1em;height: 1em;color: inherit;vertical-align: middle;pointer-events: none;}.customLoader:before {content: '';display: block;width: inherit;height: inherit;position: absolute;top: -.2em;left: -.2em;border: .2em solid currentcolor;border-radius: 50%;opacity: .5;}@-webkit-keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}";
  try {
    style.appendChild(document.createTextNode(css1));
  } catch (ex) {
    style.styleSheet.cssText = css1; //针对IE
  }
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
})();
/* dashboard页面为iframe的情况（页面选了列表）
function Chart_R2(id) {//需要在数据库配置function
  var dom = $('[data-id="' + id + '"]').find(".elementIframe")[0].contentWindow;
  initializeCustomLoader(dom);
}
function initializeCustomLoader(dom) {
  if (dom.$("#customLoaderStyle").length == 0) {
    var css1 =
      ".customLoader {border: .2em solid transparent;border-top-color: currentcolor;border-radius: 50%;-webkit-animation: 1s customLoader linear infinite;animation: 1s customLoader linear infinite;position: relative;display: inline-block;width: 1em;height: 1em;color: inherit;vertical-align: middle;pointer-events: none;}.customLoader:before {content: '';display: block;width: inherit;height: inherit;position: absolute;top: -.2em;left: -.2em;border: .2em solid currentcolor;border-radius: 50%;opacity: .5;}@-webkit-keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}";
    dom
      .$('<style id="customLoaderStyle"></style>')
      .text(css1)
      .appendTo(dom.$("head"));
  }
}*/

var Cus_theme = "westeros";
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
      createTable: function (cardName, data) {
        let rowArr = [];
        for (let i = 0; i < data.length; i++) {
          let cellArr = [];
          for (let key in data[i]) {
            cellArr.push("<td>" + data[i][key] + "</td>");
          }
          rowArr.push("<tr>" + cellArr.join("") + "<tr>");
        }
        let dom = $(`<div class="table-responsive" style="">
												<table id="table_${cardName}" class="table-xs table-hover text-left">
													<tbody class="">
													${rowArr.join("")}
													</tbody>
												</table>
											</div>`);
        this.getDom(cardName).append(dom);
        return dom;
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
