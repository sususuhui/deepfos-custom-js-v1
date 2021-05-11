const { areaInfo, getAreaInfoByCode, areaDom, dataSource, eCharts, React, ReactDOM, antd, lodash } = params;

// const formatData = JSON.parse(dataSource);

const chartArea = document.createElement("div");
chartArea.setAttribute("id", "r1c1");
chartArea.setAttribute("style", "width: 100%; height:90%");
areaDom.append(chartArea);

const myChart = eCharts.init(document.getElementById("r1c1"));

function OptionObj() {
  const option = {
    title: {
      text: "报表提交进度",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "bottom",
    },
    series: [
      {
        type: "pie",
        radius: "50%",
        data: [
          { value: 6, name: "已提交数量" },
          { value: 16, name: "需提交数量" },
        ],
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
  return option;
}

return {
  run() {
    myChart.setOption(OptionObj());
  },
  resize() {
    myChart.resize();
  },
};

////////////////////////////////////////////////////////////////

const { areaInfo, getAreaInfoByCode, areaDom, dataSource, eCharts, React, ReactDOM, antd, lodash } = params;

// const formatData = JSON.parse(dataSource);

const chartArea = document.createElement("div");
chartArea.setAttribute("id", "r1c2");
chartArea.setAttribute("style", "width: 100%; height:90%");
areaDom.append(chartArea);

const myChart = eCharts.init(document.getElementById("r1c2"));

function OptionObj() {
  const option = {
    title: {
      text: "校验进度",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "bottom",
    },
    series: [
      {
        type: "pie",
        radius: "50%",
        data: [
          { value: 5, name: "校验已通过" },
          { value: 8, name: "校验未通过" },
        ],
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
  return option;
}

function getUrlParams() {
  let arrayTemp = window.location.href.split("?");
  let obj = new Object();
  //如果不带参数，则不执行下面的代码
  if (arrayTemp.length > 1) {
    let params = arrayTemp[1].split("&");
    for (let i = 0; i < params.length; i++) {
      let parm = params[i].split("=");
      //将key和value定义给obj
      obj[parm[0]] = parm[1];
    }
  }
  return obj;
}

return {
  run() {
    myChart.setOption(OptionObj());

    myChart.on("click", function (params) {
      let paramObj = getUrlParams();
      window.open(`form-list-view?id=LSTECGHDINBF4U&sign=${paramObj.sign}`);
    });
  },
  resize() {
    myChart.resize();
  },
};

////////////////////////////////////////////////////////////////

const { areaInfo, getAreaInfoByCode, areaDom, dataSource, eCharts, React, ReactDOM, antd, lodash } = params;

// const formatData = JSON.parse(dataSource);

const chartArea = document.createElement("div");
chartArea.setAttribute("id", "r2c1");
chartArea.setAttribute("style", "width: 100%; height:90%");
areaDom.append(chartArea);

const myChart = eCharts.init(document.getElementById("r2c1"));

function OptionObj() {
  const option = {
    title: {
      text: "利润波动分析",
      left: "center",
    },
    legend: {
      top: "bottom",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    tooltip: {},
    dataset: {
      source: [
        ["product", "营业收入", "营业利润", "净利润"],
        ["一季度", 478632, 199925, 100485],
        ["二季度", 281163, 111650, 64944],
        ["三季度", 315795, 103345, 46101],
        ["四季度", 510489, 214995, 99099],
      ],
    },
    xAxis: { type: "category" },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} M",
      },
    },
    series: [{ type: "line" }, { type: "line" }, { type: "line" }],
  };
  return option;
}

return {
  run() {
    myChart.setOption(OptionObj());
  },
  resize() {
    myChart.resize();
  },
};

////////////////////////////////////////////////////////////////

const { areaInfo, getAreaInfoByCode, areaDom, dataSource, eCharts, React, ReactDOM, antd, lodash } = params;

// const formatData = JSON.parse(dataSource);

const chartArea = document.createElement("div");
chartArea.setAttribute("id", "r2c2");
chartArea.setAttribute("style", "width: 100%; height:100%");
areaDom.append(chartArea);

const myChart = eCharts.init(document.getElementById("r2c2"));

const data = [
  {
    name: "销售费用",
    children: [
      {
        name: "薪酬",
        value: 22,
      },
      {
        name: "招待费",
        children: [
          {
            name: "北区",
            value: 12,
          },
          {
            name: "南区",
            value: 18,
          },
        ],
      },
      {
        name: "差旅费",
        children: [
          {
            name: "技术部",
            value: 87,
          },
          {
            name: "业务部",
            value: 88,
          },
          {
            name: "职能部",
            value: 17,
          },
        ],
      },
      {
        name: "会展费",
        value: 14,
      },
    ],
  },
  {
    name: "管理费用",
    children: [
      {
        name: "薪酬",
        value: 60,
      },
      {
        name: "办公费",
        children: [
          {
            name: "技术部",
            value: 16,
          },
          {
            name: "业务部",
            value: 24,
          },
          {
            name: "职能部",
            value: 89,
          },
        ],
      },
      {
        name: "折旧摊销",
        children: [
          {
            name: "固定资产",
            value: 16,
          },
          {
            name: "无形资产",
            value: 19,
          },
        ],
      },
    ],
  },
  {
    name: "财务费用",
    children: [
      {
        name: "利息支出",
        children: [
          {
            name: "A银行",
            value: 56,
          },
          {
            name: "B银行",
            value: 23,
          },
        ],
      },
      {
        name: "手续费",
        value: 21,
      },
    ],
  },
];

function OptionObj() {
  const option = {
    title: {
      text: "费用分析",
      left: "center",
    },
    tooltip: {},
    series: {
      type: "sunburst",
      data: data,
      radius: [60, "90%"],
      itemStyle: {
        borderRadius: 8,
        borderWidth: 2,
      },
      label: {
        show: false,
      },
    },
  };
  return option;
}

return {
  run() {
    myChart.setOption(OptionObj());
  },
  resize() {
    myChart.resize();
  },
};

////////////////////////////////////////////////////////////////

const { areaInfo, getAreaInfoByCode, areaDom, dataSource, eCharts, React, ReactDOM, antd, lodash } = params;

// const formatData = JSON.parse(dataSource);

const chartArea = document.createElement("div");
chartArea.setAttribute("id", "r2c3");
chartArea.setAttribute("style", "width: 100%; height:90%");
areaDom.append(chartArea);

const myChart = eCharts.init(document.getElementById("r2c3"));

function OptionObj() {
  const option = {
    title: {
      text: "预实对比分析",
      left: "center",
    },
    legend: {
      top: "bottom",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    tooltip: {},
    dataset: {
      source: [
        ["product", "预算", "实际"],
        ["收入", 4.3, 4.9],
        ["成本", 3.5, 3.4],
        ["营业利润", 0.8, 1.5],
      ],
    },
    xAxis: { type: "category" },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} M",
      },
    },
    series: [{ type: "bar" }, { type: "bar" }],
  };
  return option;
}

return {
  run() {
    myChart.setOption(OptionObj());
  },
  resize() {
    myChart.resize();
  },
};

////////////////////////////////////////////////////////////////

const { areaInfo, getAreaInfoByCode, areaDom, dataSource, eCharts, React, ReactDOM, antd, lodash } = params;

// const formatData = JSON.parse(dataSource);

const chartArea = document.createElement("div");
chartArea.setAttribute("id", "r1c3");
chartArea.setAttribute("style", "width: 100%; height:100%");
areaDom.append(chartArea);

// 引入样式
let style = document.createElement("style");
style.innerHTML = `
  #r1c3 .ant-picker-calendar-date-content{
    height: 18px
  }
  `;
document.head.appendChild(style);

const handleInit = () => {
  ReactDOM.render(renderChart(), document.getElementById("r1c3"));
};

const renderChart = () => {
  const { Calendar } = antd;

  const listData = [
    { month: 5, date: 3, content: "上报主表" },
    { month: 5, date: 8, content: "阿米巴报表" },
    { month: 5, date: 13, content: "财务分析" },
    { month: 5, date: 24, content: "季度预算" },
    { month: 5, date: 27, content: "下月预对账" },
    { month: 5, date: 31, content: "结帐" },
  ];

  const dateCellRender = (value) => {
    let data = listData.filter((val) => {
      return val.month === value.month() + 1 && val.date === value.date();
    });

    if (data.length > 0) {
      return <div>{data[0].content}</div>;
    }
  };

  const onSelect = (date) => {
    if (date.format("YYYY-MM-DD") === "2021-05-01") {
      window.open(`http://47.103.113.21:8819/data-integration/`);
    }
  };

  return <Calendar dateCellRender={dateCellRender} onSelect={onSelect} />;
};

return {
  run() {
    handleInit();
  },
};

////////////////////////////////////////////////////////////////

const linkTo = () => {
  const configureBtnWrap = document.querySelector(".title___1YQDE");

  let linkTo = document.createElement("button");
  linkTo.setAttribute("class", "ant-btn ant-btn-sm");
  linkTo.setAttribute("type", "button");
  linkTo.innerHTML = "<span>跳转</span>";
  configureBtnWrap.append(linkTo);
};

return {
  run() {
    linkTo();
  },
};
