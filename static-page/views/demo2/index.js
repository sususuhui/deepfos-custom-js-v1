function initEchart(id, option) {
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on('resize', function () {
    chart.resize();
  });
}

function r1c1(id) {
  let option = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: '{a} <br/>{b}: {c}%',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '13%',
      top: '5%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '2019年4月',
          '2019年5月',
          '2019年6月',
          '2019年7月',
          '2019年8月',
          '2019年9月',
          '2019年10月',
          '2019年11月',
          '2019年12月',
          '2020年1月',
          '2020年2月',
          '2020年3月',
          '2020年4月',
          '2020年5月',
          '2020年6月',
          '2020年7月',
          '2020年8月',
          '2020年9月',
        ],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: {
          formatter: '{value} %',
        },
      },
    ],
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        start: 0,
        end: 100,
      },
    ],
    series: [
      {
        name: '完成百分比',
        type: 'bar',
        barWidth: '50%',
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%',
          color: '#212121',
        },
        data: [74, 86, 43, 73, 32, 31, 69, 31, 26, 24, 34, 24, 35, 20, 66, 39, 17, 37],
      },
    ],
    color: ['#29B6F6'],
  };

  initEchart(id, option);
}

function r1c2(id) {
  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '13%',
      top: '5%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,
      data: [
        '2019年4月',
        '2019年5月',
        '2019年6月',
        '2019年7月',
        '2019年8月',
        '2019年9月',
        '2019年10月',
        '2019年11月',
        '2019年12月',
        '2020年1月',
        '2020年2月',
        '2020年3月',
        '2020年4月',
        '2020年5月',
        '2020年6月',
        '2020年7月',
        '2020年8月',
        '2020年9月',
      ],
    },
    yAxis: {
      type: 'value',
    },
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        start: 0,
        end: 100,
      },
    ],
    series: [
      {
        name: '公司数量',
        type: 'line',
        stack: '1',
        data: [19, 21, 23, 26, 31, 32, 32, 36, 38, 42, 47, 49, 52, 56, 59, 59, 60, 62],
      },
      {
        name: '按计划完成数量',
        type: 'line',
        stack: '2',
        data: [14, 18, 19, 19, 22, 23, 24, 24, 26, 28, 32, 33, 33, 33, 49, 50, 51, 52],
      },
      {
        name: '整体通过数',
        type: 'line',
        stack: '3',
        data: [17, 21, 21, 19, 27, 26, 30, 31, 29, 28, 39, 36, 44, 36, 54, 51, 60, 57],
      },
    ],
  };

  initEchart(id, option);
}

function r1c3(id) {
  let option = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      // formatter: '{a} <br/>{b}: {c}%',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '13%',
      top: '5%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '2019年4月',
          '2019年5月',
          '2019年6月',
          '2019年7月',
          '2019年8月',
          '2019年9月',
          '2019年10月',
          '2019年11月',
          '2019年12月',
          '2020年1月',
          '2020年2月',
          '2020年3月',
          '2020年4月',
          '2020年5月',
          '2020年6月',
          '2020年7月',
          '2020年8月',
          '2020年9月',
        ],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        axisLabel: {
          formatter: '{value}',
        },
      },
    ],
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        start: 0,
        end: 100,
      },
    ],
    series: [
      {
        name: '数据量',
        type: 'bar',
        barWidth: '50%',
        label: {
          show: false,
          position: 'top',
          formatter: '{c}',
          color: '#212121',
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' },
            ]),
          },
        },
        data: [181160, 215285, 161190, 262362, 117078, 110790, 338601, 122061, 108199, 459800, 239950, 145279, 467741, 612378, 668123, 524402, 254824, 508427],
      },
    ],
    color: ['#29B6F6'],
  };

  initEchart(id, option);
}

var DashBoard = function () {
  r1c1('r1c1');
  r1c2('r1c2');
  r1c3('r1c3');
};

// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function () {
  DashBoard();
});
