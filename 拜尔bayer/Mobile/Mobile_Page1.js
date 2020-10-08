// 渲染 EChart 的通用方法
function initEchart(id, option) {
  id = 'chart-' + id + '';
  $('#' + id)
    .parent()
    .addClass('pt-0 pl-0 pr-0 pb-0');
  // const _height = $("#" + id).height() + 40;
  const _height = $('#' + id)
    .parent()
    .height();
  $('#' + id).height(_height);
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on('resize', function () {
    chart.resize();
  });
}

function r1c1(data, params) {
  console.log('Chart_R1C1');
  let componentId = params.componentId;
  let pythonData_R1C1 = JSON.parse(data);
  let dataxAxis = pythonData_R1C1.xAxis;
  let dataRate = pythonData_R1C1.Rate;
  let dataTotal = pythonData_R1C1.Total;
  let dataConsumption = pythonData_R1C1.Consumption;
  let legend = ['达成率', '指标', '消耗'];

  // 手机端
  if (getRequest().isView == 'mobile') {
    alert('mobile');
  }

  let option = {
    grid: {
      top: '12%',
      left: '7%',
      right: '7%',
      bottom: '14%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (data) {
        let headerText = '<strong>' + data[0].axisValue + '</strong>';
        let bodyText = '';
        bodyText += '<br>' + data[0].marker + data[0].seriesName + ': ' + data[0].value + '%';
        bodyText += '<br>' + data[1].marker + data[1].seriesName + ': ' + format(data[1].value) + ' (' + pythonData_R1C1.Unit.unit + ')';
        bodyText += '<br>' + data[2].marker + data[2].seriesName + ': ' + format(data[2].value) + ' (' + pythonData_R1C1.Unit.unit + ')';
        return headerText + bodyText;
      },
    },
    xAxis: [
      {
        type: 'category',
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
        type: 'category',
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
        type: 'value',
        name: '达成率',
        axisLabel: {
          formatter: '{value}%',
        },
        splitLine: {
          show: false,
        },
      },
      {
        type: 'value',
        name: '消耗金额 ' + pythonData_R1C1.Unit.unit,
        splitLine: {
          show: false,
        },
      },
    ],
    dataZoom: getDataZoom(dataxAxis.length),
    series: [
      {
        name: legend[0],
        type: 'line',
        barWidth: '30%',
        xAxisIndex: 0,
        itemStyle: {
          normal: {
            color: '#0090df',
            barBorderColor: '#0090df',
            barBorderWidth: 1.5,
          },
        },
        data: dataRate,
      },
      {
        name: legend[1],
        type: 'bar',
        barWidth: '30%',
        xAxisIndex: 0,
        itemStyle: {
          normal: {
            color: '#65b511',
            barBorderColor: '#65b511',
            barBorderWidth: 1.5,
          },
        },
        data: pythonData_R1C1.Target,
        yAxisIndex: 1,
      },
      {
        type: 'bar',
        name: legend[2],
        barWidth: '30%',
        xAxisIndex: 0,
        label: {
          show: false,
        },
        itemStyle: {
          normal: {
            color: '#0090df',
            barBorderColor: '#0090df',
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
      type: 'slider',
      show: true,
      xAxisIndex: [0, 1],
      start: 0,
      end: 100,
    },
    {
      type: 'inside',
      xAxisIndex: [0, 1],
      start: 0,
      end: 100,
    },
  ];

  if (num < 7) {
    return dataZoom;
  } else {
    dataZoom[0].end = (6 / num) * 100;
    dataZoom[1].end = (6 / num) * 100;
    return dataZoom;
  }
}
