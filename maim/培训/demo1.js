/**
 * 渲染 EChart 的通用方法(有padding)
 * 保留边距
 * @param {*} id
 * @param {*} option
 */
function initEchart_padding(id, option) {
  id = 'chart-' + id + '';
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on('resize', function () {
    chart.resize();
  });
}

function r1(data, params) {
  let componentId = params.componentId;
  // let r1_data = JSON.parse(data);

  let data_Existing = [66, 60, 59, 61, 63, 56, 59, 51, 55, 58, 66, 66];
  let data_Future = ['', '', '', '', '', '', 17, 12, 22, 23, 19, 17];
  let data_occ = [98, 97, 95, 91, 87, 88, 94, 92, 97, 98, 99, 99];
  let data_other = ['', '', '', '', 81, 81, 82, 83, '', '', '', ''];

  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      // formatter: function (params) {
      //   var html = "";
      //   if (params.length > 0) {
      //     html += params[0].axisValue + "<br>";
      //     html += params[0].marker + params[0].seriesName + "：" + format(params[0].data) + "<br>";
      //     html += params[1].marker + params[1].seriesName + "：" + format(params[1].data) + "<br>";
      //     html += params[2].marker + params[2].seriesName + "：" + format(params[2].data) + "%" + "<br>";
      //     html += params[3].marker + params[3].seriesName + "：" + format(params[3].data) + "<br>";
      //   }
      //   return html;
      // },
    },
    legend: {
      data: ['Revenue_Existing', 'Revenue_New', 'Avg. Occ%', `Revenue_Yr${getCurrentYear(true)} Budget`],
      orient: 'vertical',
      left: 'center',
      bottom: 'bottom',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '40px',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          `${getCurrentYear(true) - 1}Q1`,
          `${getCurrentYear(true) - 1}Q2`,
          `${getCurrentYear(true) - 1}Q3`,
          `${getCurrentYear(true) - 1}Q4`,
          `${getCurrentYear(true)}Q1`,
          `${getCurrentYear(true)}Q2`,
          `${getCurrentYear(true)}Q3`,
          `${getCurrentYear(true)}Q4`,
          `${getCurrentYear(true) + 1}Q1`,
          `${getCurrentYear(true) + 1}Q2`,
          `${getCurrentYear(true) + 1}Q3`,
          `${getCurrentYear(true) + 1}Q4`,
        ],
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'mRMB',
      },
      {
        type: 'value',
        splitLine: { show: false },
        name: 'Avg. Occ%',
        max: 100,
        min: 20,
        axisLabel: {
          show: true,
          interval: 'auto',
          formatter: '{value}%',
        },
      },
    ],
    series: [
      {
        name: 'Revenue_Existing',
        type: 'bar',
        stack: 'bar',
        barMaxWidth: 30,
        color: '#00953a',
        data: data_Existing,
      },
      {
        name: 'Revenue_New',
        type: 'bar',
        stack: 'bar',
        barMaxWidth: 30,
        color: '#82bc00',
        data: data_Future,
      },
      {
        name: 'Avg. Occ%',
        type: 'line',
        yAxisIndex: 1,
        color: '#ffc000',
        data: data_occ,
        symbolSize: 8,
        label: {
          show: true,
          color: '#000000',
          position: ['-100%', '-150%'],
          formatter: function (params) {
            return params.value.toFixed(0) + '%';
          },
        },
      },
      {
        name: `Revenue_Yr${getCurrentYear(true)} Budget`,
        type: 'bar',
        barGap: '-132%',
        barMaxWidth: 50,
        // yAxisIndex: 1,
        color: '#ED7D31',
        data: data_other,
        itemStyle: {
          normal: {
            color: 'rgba(129,175,239,0.3)', //柱子颜色
            // borderColor: "#000000", //边框颜色
            // borderWidth: 2,
          },
        },
      },
    ],
  };

  initEchart_padding(componentId, option);
}

/**
 * 当前年份
 * @param {boolean} [simple=false]
 * @returns 2020 / 20
 */
function getCurrentYear(simple = false) {
  let date = new Date();
  if (simple) {
    let vYear = date.getYear() < 2000 ? date.getYear() + 1900 : date.getYear();
    return Number(vYear.toString().substr(2, 2));
  } else {
    return date.getFullYear();
  }
}
