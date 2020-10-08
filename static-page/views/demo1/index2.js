function initEchart(id, option) {
  debugger;
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on("resize", function () {
    chart.resize();
  });
}

function r1c1(id) {
  let option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      right: 10,
      data: ["传统媒体广告经营", "电视购物", "新媒体", "东方明珠", "其他"],
    },
    series: [
      {
        name: "收入结构分析",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "30",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 27, name: "传统媒体广告经营" },
          { value: 32, name: "电视购物" },
          { value: 15, name: "新媒体" },
          { value: 18, name: "东方明珠" },
          { value: 8, name: "其他" },
        ],
      },
    ],
  };

  initEchart(id, option);
}

function r1c2(id) {
  let option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      // orient: "vertical",
      y: "bottom",
      data: [
        "东方卫视中心",
        "第一财经（合并）",
        "炫动本部及其他",
        "小荧星",
        "东方广播中心",
        "炫动",
        "小荧星",
        "五星体育",
        "真实传媒",
        "电视新闻中心",
        "每周报社",
      ],
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "40%"],
        data: [
          { value: 35.4521, name: "东方卫视中心" },
          { value: 5.9, name: "第一财经（合并）" },
          { value: 6.8591, name: "炫动本部及其他" },
          { value: 2.1889, name: "小荧星" },
          { value: 1.267, name: "东方广播中心" },
          { value: 2.2713, name: "炫动" },
          { value: 3.7328, name: "五星体育" },
          { value: 7.581, name: "真实传媒" },
          { value: 1.8739, name: "电视新闻中心" },
          { value: 0.355, name: "每周报社" },
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
  initEchart(id, option);
}
function r2c1(id) {
  var radiusDial1 = "80%";
  var radiusDial2 = "65%";
  var windowWidth = $(window).width();
  if (windowWidth < 1400) {
    radiusDial1 = "68%";
    radiusDial2 = "53%";
  }

  let option = {
    tooltip: {
      formatter: "{a} <br/>{c}%",
    },
    series: [
      {
        name: "收入目标达成率",
        type: "gauge",
        z: 3,
        min: 0,
        max: 100,
        splitNumber: 5,
        center: ["64%", "50%"],
        radius: radiusDial1,
        axisLine: {
          // 坐标轴线
          lineStyle: {
            // 属性lineStyle控制线条样式
            width: 10,
          },
        },
        axisTick: {
          // 坐标轴小标记
          length: 15,
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: "auto",
          },
        },
        splitLine: {
          // 分隔线
          length: 20,
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            color: "auto",
          },
        },
        axisLabel: {
          backgroundColor: "auto",
          borderRadius: 2,
          color: "#eee",
          padding: 3,
          textShadowBlur: 2,
          textShadowOffsetX: 1,
          textShadowOffsetY: 1,
          textShadowColor: "#222",
          formatter: function (e) {
            return e + "%";
          },
        },
        title: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          offsetCenter: [0, "95%"],
        },
        detail: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          formatter: function (value) {
            value = (value + "").split(".");
            value.length < 2 && value.push("00");
            return (
              ("00" + value[0]).slice(-2) +
              "." +
              (value[1] + "00").slice(0, 2) +
              "%"
            );
          },
          fontSize: 18,
        },
        data: [{ value: 58.85, name: "收入目标达成率" }],
      },
      {
        name: "利润目标达成率",
        type: "gauge",
        center: ["30%", "55%"],
        radius: radiusDial2,
        min: 0,
        max: 100,
        endAngle: 45,
        splitNumber: 4,
        axisLine: {
          // 坐标轴线
          lineStyle: {
            // 属性lineStyle控制线条样式
            width: 8,
          },
        },
        axisLabel: {
          formatter: function (e) {
            return e.toFixed(1) + "%";
          },
        },
        axisTick: {
          // 坐标轴小标记
          length: 12,
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: "auto",
          },
        },
        splitLine: {
          // 分隔线
          length: 20,
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            color: "auto",
          },
        },
        pointer: {
          width: 5,
        },
        title: {
          offsetCenter: [0, "100%"],
        },
        detail: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          // fontWeight: 'bolder',
          formatter: function (value) {
            return value.toFixed(2) + "%";
          },
          fontSize: 16,
        },
        data: [{ value: 3.83, name: "利润目标达成率" }],
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
        type: "shadow",
      },
    },
    legend: {
      data: ["达成率排名"],
      y: "bottom",
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: [
        "其他单位",
        "传统媒体",
        "电视购物",
        "新媒体",
        "东方明珠",
        "精文置业",
      ],
    },
    series: [
      {
        name: "达成率排名",
        type: "bar",
        data: [0.38, 0.6, 0.71, 0.83, 0.97, 0.99],
      },
    ],
  };

  initEchart(id, option);
}
function r3(id) {
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      data: [
        "制作费",
        "职工薪酬",
        "广告宣传",
        "电信费用",
        "其他",
        "费用收入比例",
      ],
      y: "bottom",
    },
    xAxis: [
      {
        type: "category",
        data: [
          "201901",
          "201902",
          "201903",
          "201904",
          "201905",
          "201906",
          "201907",
          "201908",
          "201909",
          "2019010",
          "2019011",
          "2019012",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "金额",
        min: 0,
        max: 7000,
        interval: 1000,
      },
      {
        type: "value",
        name: "比例",
        min: 0,
        max: 60,
        interval: 10,
        axisLabel: {
          formatter: "{value} %",
        },
      },
    ],
    series: [
      {
        name: "制作费",
        type: "bar",
        barWidth: "40%",
        stack: "广告",
        data: [111, 114, 108, 112, 102, 120, 92, 112, 92, 114, 105, 116],
      },
      {
        name: "职工薪酬",
        type: "bar",
        stack: "广告",
        data: [
          2566,
          2591,
          2687,
          2870,
          2404,
          2049,
          2372,
          2498,
          2813,
          2871,
          2947,
          2647,
        ],
      },
      {
        name: "广告宣传",
        type: "bar",
        stack: "广告",
        data: [
          1155,
          1519,
          1384,
          1279,
          1041,
          1749,
          1116,
          1141,
          1718,
          1560,
          1329,
          1541,
        ],
      },
      {
        name: "电信费用",
        type: "bar",
        stack: "广告",
        data: [
          1120,
          1036,
          973,
          1024,
          1008,
          1199,
          1098,
          1144,
          944,
          1084,
          1200,
          1182,
        ],
      },
      {
        name: "其他",
        type: "bar",
        stack: "广告",
        data: [269, 258, 256, 233, 271, 282, 233, 203, 229, 231, 277, 252],
      },
      {
        name: "费用收入比例",
        type: "line",
        yAxisIndex: 1,
        data: [28, 32, 29, 54, 25, 34, 39, 46, 32, 52, 45, 30],
      },
    ],
  };
  initEchart(id, option);
}

var DashBoard = function () {
  r1c1("r1c1");
  r1c2("r1c2");
  r2c1("r2c1");
  r2c2("r2c2");
  r3("r3");
};

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  DashBoard();
});
