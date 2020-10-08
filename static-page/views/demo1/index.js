function initEchart(id, option) {
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on("resize", function () {
    chart.resize();
  });
}

function r1c1(id) {
  let option = {
    legend: {
      y: "bottom",
    },
    tooltip: {},
    dataset: {
      source: [
        ["product", "一季度", "二季度", "三季度", "四季度"],
        ["2017", 100, 110, 90, 120],
        ["2018", -40, 100, 120, 130],
        ["2019", 100, 110, 123, 140],
        ["2020", 120, 121, 125, 100],
      ],
    },
    xAxis: { type: "category" },
    yAxis: {
      splitLine: { show: false },
    },
    series: [
      { type: "bar" },
      { type: "bar" },
      { type: "bar" },
      { type: "bar" },
    ],
  };

  initEchart(id, option);
}

function r1c2(id) {
  initEchart(id, option);
}

function r1c2_1(id) {
  let data = [
    { value: 130.8, name: "货币基金" },
    { value: 27, name: "应收账款" },
    { value: 8.1, name: "预付款项" },
    { value: 11.4, name: "其他应收款" },
    { value: 28.1, name: "存货" },
    { value: 15.1, name: "可供出售金融资产" },
    { value: 87.7, name: "长期股权投资" },
    { value: 50.1, name: "固定资产" },
    { value: 29.8, name: "在建工程" },
    { value: 14.1, name: "无形资产" },
  ];

  let option = {
    legend: {
      y: "bottom",
    },
    tooltip: {},
    series: [
      {
        type: "pie",
        radius: 70,
        data: data,
        center: ["50%", "30%"],
      },
    ],
  };

  initEchart(id, option);
}
function r1c2_2(id) {
  let data = [
    { value: 43.2, name: "短期借款" },
    { value: 31.6, name: "应付账款" },
    { value: 28.9, name: "预收款项" },
    { value: 2.7, name: "应交税费" },
    { value: 1.5, name: "应付职工薪酬" },
    { value: 2.1, name: "一年内到期的非流动负债和其他流动负债" },
    { value: 10.1, name: "长期借款" },
  ];

  let option = {
    legend: {
      y: "bottom",
    },
    tooltip: {},
    series: [
      {
        type: "pie",
        radius: 110,
        center: ["50%", "40%"],
        data: data,
      },
    ],
  };

  initEchart(id, option);
}

function r2c1(id) {
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    legend: {
      data: ["现金净流量", "收入净流量比率"],
      y: "bottom",
    },
    xAxis: [
      {
        type: "category",
        data: ["2017", "2018", "2019", "2020"],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "现金净流量",
        min: 2200,
        max: 2550,
        interval: 50,
        axisLabel: {
          formatter: "{value} ",
        },
        splitLine: { show: false },
      },
      {
        type: "value",
        name: "收入净流量比率",
        min: 27,
        max: 32,
        axisLabel: {
          formatter: "{value} %",
        },
      },
    ],
    series: [
      {
        name: "现金净流量",
        type: "bar",
        barWidth: "40%",
        data: [2437, 2328, 2492, 2486],
      },

      {
        name: "收入净流量比率",
        type: "line",
        yAxisIndex: 1,
        data: [30, 28, 29, 31],
      },
    ],
  };

  initEchart(id, option);
}
function r2c2(id) {
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    legend: {
      data: ["实际收入", "目标收入", "达成率"],
      y: "bottom",
    },
    xAxis: [
      {
        type: "category",
        data: ["上市业务", "传统媒体非上市业务"],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "收入金额",
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "达成率",
        min: 92,
        max: 108,
        axisLabel: {
          formatter: "{value} %",
        },
      },
    ],
    series: [
      {
        name: "实际收入",
        type: "bar",
        barWidth: "25%",
        data: [201, 71],
        barGap: "0%",
      },
      {
        name: "目标收入",
        type: "bar",
        barWidth: "25%",
        data: [190, 73],
      },
      {
        name: "达成率",
        type: "line",
        yAxisIndex: 1,
        data: [106, 98],
      },
    ],
  };

  initEchart(id, option);
}
function r3(id) {
  let data = {
    name: "净资产收益率 2.40%",
    children: [
      {
        name: "总资产收益率 0.74%",
        children: [
          {
            name: "销售净利率 0.05%",
            children: [
              {
                name: "净利润 8416",
                children: [
                  {
                    name: "主营业务收入 139193",
                  },
                  {
                    name: "全部成本 1307769290",
                    children: [
                      {
                        name: "营业成本 11592",
                      },
                      {
                        name: "期间费用 0",
                      },
                      {
                        name: "利息费用 13090",
                      },
                      {
                        name: "其他支出 0",
                      },
                      {
                        name: "所得税 2805",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "资产周转率 12.24%",
            children: [
              {
                name: "主营业务收入 139193",
              },
              {
                name: "资产总额 1145532",
                children: [
                  {
                    name: "流动资产 253272",
                    children: [
                      {
                        name: "货币资金 95836",
                      },
                      {
                        name: "应收账款 43216",
                      },
                      {
                        name: "预付账款 43216",
                      },
                      {
                        name: "其他应收款 397",
                      },
                      {
                        name: "存货 31372",
                      },
                    ],
                  },
                  {
                    name: "非流动资产 253272",
                    children: [
                      {
                        name: "固定资产净额 84077",
                      },
                      {
                        name: "在建工程 2672",
                      },
                      {
                        name: "工程物资 103",
                      },
                      {
                        name: "无形资产 37826",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  let option = {
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    series: [
      {
        type: "tree",
        id: 0,
        name: "tree1",
        data: [data],

        // top: '10%',
        // left: '8%',
        // bottom: '22%',
        // right: '20%',

        symbolSize: 1,

        tooltip: {
          show: false,
        },

        edgeShape: "polyline",
        edgeForkPosition: "63%",
        initialTreeDepth: 10,

        label: {
          backgroundColor: "#fff",
          position: "right",
          verticalAlign: "middle",
          align: "right",
        },

        leaves: {
          label: {
            position: "right",
            verticalAlign: "middle",
            align: "left",
          },
        },

        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750,
      },
    ],
  };

  initEchart(id, option);
}

var DashBoard = function () {
  r1c1("r1c1");
  // r1c2("r1c2");
  r1c2_1("r1c2_1");
  r1c2_2("r1c2_2");
  r2c1("r2c1");
  r2c2("r2c2");
  r3("r3");
};

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  DashBoard();
});
