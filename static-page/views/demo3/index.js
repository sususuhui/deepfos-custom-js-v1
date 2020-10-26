// color:['#004ea1','#004fb6','#498ace','#88b9e1','#a9cee8'],

const table1_data = [
  { 实体: 'A公司', '资产总计(万元)': ' 19,802.00 ', 排名: 1, 上期: 2, 排名变化: 'icon-arrow-up5' },
  { 实体: 'B公司', '资产总计(万元)': ' 18,902.00 ', 排名: 2, 上期: 1, 排名变化: 'icon-arrow-down5' },
  { 实体: 'C公司', '资产总计(万元)': ' 17,892.00 ', 排名: 3, 上期: 3, 排名变化: ' ' },
  { 实体: 'D公司', '资产总计(万元)': ' 17,722.00 ', 排名: 4, 上期: 5, 排名变化: 'icon-arrow-up5' },
  { 实体: 'E公司', '资产总计(万元)': ' 16,890.00 ', 排名: 5, 上期: 4, 排名变化: 'icon-arrow-down5' },
  { 实体: 'F公司', '资产总计(万元)': ' 15,000.00 ', 排名: 6, 上期: 6, 排名变化: ' ' },
  { 实体: 'G公司', '资产总计(万元)': ' 14,000.00 ', 排名: 7, 上期: 7, 排名变化: ' ' },
  { 实体: 'H公司', '资产总计(万元)': ' 8,000.00 ', 排名: 8, 上期: 8, 排名变化: ' ' },
  { 实体: 'I公司', '资产总计(万元)': ' 7,800.00 ', 排名: 9, 上期: 9, 排名变化: ' ' },
  { 实体: 'J公司', '资产总计(万元)': ' 7,702.00 ', 排名: 10, 上期: 10, 排名变化: ' ' },
  { 实体: 'K公司', '资产总计(万元)': ' 7,200.00 ', 排名: 11, 上期: 11, 排名变化: ' ' },
  { 实体: 'L公司', '资产总计(万元)': ' 6,900.00 ', 排名: 12, 上期: 12, 排名变化: ' ' },
  { 实体: 'M公司', '资产总计(万元)': ' 6,870.00 ', 排名: 13, 上期: 13, 排名变化: ' ' },
  { 实体: 'N公司', '资产总计(万元)': ' 6,540.00 ', 排名: 14, 上期: 14, 排名变化: ' ' },
  { 实体: 'O公司', '资产总计(万元)': ' 6,210.00 ', 排名: 15, 上期: 15, 排名变化: ' ' },
  { 实体: 'P公司', '资产总计(万元)': ' 5,892.00 ', 排名: 16, 上期: 16, 排名变化: ' ' },
  { 实体: 'K公司', '资产总计(万元)': ' 5,643.00 ', 排名: 17, 上期: 17, 排名变化: ' ' },
];

const table2_data = [
  { 实体: 'A公司', '净利润(万元)': ' 3,870.00 ', 排名: 1, 上期: 2, 排名变化: 'icon-arrow-up5' },
  { 实体: 'B公司', '净利润(万元)': ' 2,700.00 ', 排名: 2, 上期: 1, 排名变化: 'icon-arrow-down5' },
  { 实体: 'C公司', '净利润(万元)': ' 2,690.00 ', 排名: 3, 上期: 3, 排名变化: ' ' },
  { 实体: 'D公司', '净利润(万元)': ' 2,560.00 ', 排名: 4, 上期: 5, 排名变化: 'icon-arrow-up5' },
  { 实体: 'E公司', '净利润(万元)': ' 2,340.00 ', 排名: 5, 上期: 4, 排名变化: 'icon-arrow-down5' },
  { 实体: 'F公司', '净利润(万元)': ' 2,278.00 ', 排名: 6, 上期: 6, 排名变化: ' ' },
  { 实体: 'G公司', '净利润(万元)': ' 2,190.00 ', 排名: 7, 上期: 7, 排名变化: ' ' },
  { 实体: 'H公司', '净利润(万元)': ' 1,890.00 ', 排名: 8, 上期: 8, 排名变化: ' ' },
  { 实体: 'I公司', '净利润(万元)': ' 1,500.00 ', 排名: 9, 上期: 9, 排名变化: ' ' },
  { 实体: 'J公司', '净利润(万元)': ' 1,450.00 ', 排名: 10, 上期: 11, 排名变化: 'icon-arrow-up5' },
  { 实体: 'K公司', '净利润(万元)': ' 1,430.00 ', 排名: 11, 上期: 10, 排名变化: 'icon-arrow-down5' },
  { 实体: 'L公司', '净利润(万元)': ' 1,388.00 ', 排名: 12, 上期: 12, 排名变化: ' ' },
  { 实体: 'M公司', '净利润(万元)': ' 1,234.00 ', 排名: 13, 上期: 13, 排名变化: ' ' },
  { 实体: 'N公司', '净利润(万元)': ' 1,200.00 ', 排名: 14, 上期: 14, 排名变化: ' ' },
  { 实体: 'O公司', '净利润(万元)': ' 1,189.00 ', 排名: 15, 上期: 15, 排名变化: ' ' },
  { 实体: 'P公司', '净利润(万元)': ' 1,100.00 ', 排名: 16, 上期: 16, 排名变化: ' ' },
  { 实体: 'K公司', '净利润(万元)': ' 900.00 ', 排名: 17, 上期: 17, 排名变化: ' ' },
];

const table3_data = [
  { 实体: 'A公司', '净现金流量(万元)': ' 2,870.00 ', 排名: 1, 上期: 2, 排名变化: 'icon-arrow-up5' },
  { 实体: 'B公司', '净现金流量(万元)': ' 1,700.00 ', 排名: 2, 上期: 1, 排名变化: 'icon-arrow-down5' },
  { 实体: 'C公司', '净现金流量(万元)': ' 1,690.00 ', 排名: 3, 上期: 3, 排名变化: ' ' },
  { 实体: 'D公司', '净现金流量(万元)': ' 1,560.00 ', 排名: 4, 上期: 5, 排名变化: 'icon-arrow-up5' },
  { 实体: 'E公司', '净现金流量(万元)': ' 1,340.00 ', 排名: 5, 上期: 4, 排名变化: 'icon-arrow-down5' },
  { 实体: 'F公司', '净现金流量(万元)': ' 1,278.00 ', 排名: 6, 上期: 6, 排名变化: ' ' },
  { 实体: 'G公司', '净现金流量(万元)': ' 1,190.00 ', 排名: 7, 上期: 7, 排名变化: ' ' },
  { 实体: 'H公司', '净现金流量(万元)': ' 890.00 ', 排名: 8, 上期: 8, 排名变化: ' ' },
  { 实体: 'I公司', '净现金流量(万元)': ' 700.00 ', 排名: 9, 上期: 9, 排名变化: ' ' },
  { 实体: 'J公司', '净现金流量(万元)': ' 450.00 ', 排名: 10, 上期: 10, 排名变化: ' ' },
  { 实体: 'K公司', '净现金流量(万元)': ' 430.00 ', 排名: 11, 上期: 11, 排名变化: ' ' },
  { 实体: 'L公司', '净现金流量(万元)': ' 388.00 ', 排名: 12, 上期: 12, 排名变化: ' ' },
  { 实体: 'M公司', '净现金流量(万元)': ' 334.00 ', 排名: 13, 上期: 13, 排名变化: ' ' },
  { 实体: 'N公司', '净现金流量(万元)': ' 200.00 ', 排名: 14, 上期: 16, 排名变化: 'icon-arrow-up5' },
  { 实体: 'O公司', '净现金流量(万元)': ' 189.00 ', 排名: 15, 上期: 15, 排名变化: ' ' },
  { 实体: 'P公司', '净现金流量(万元)': ' 10.00 ', 排名: 16, 上期: 14, 排名变化: 'icon-arrow-down5' },
  { 实体: 'K公司', '净现金流量(万元)': ' (100.00)', 排名: 17, 上期: 17, 排名变化: ' ' },
];

const initEchart = (id, option) => {
  const chart = echarts.init(document.getElementById(id), 'westeros');
  chart.clear();
  chart.setOption(option);
  $(window).on('resize', function () {
    chart.resize();
  });
};

const r1c1 = (id) => {
  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['利润', '净现流', '收入'],
      y: 'top',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '5%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '利润',
        type: 'line',
        stack: '1',
        data: [360, 330, 377, 324, 403, 390, 406, 450, 465, 480, 527, 561],
        itemStyle: {
          normal: {
            // color: '#004ea1',
            lineStyle: {
              width: 3, //设置线条粗细
            },
          },
        },
      },
      {
        name: '净现流',
        type: 'line',
        stack: '2',
        data: [260, 230, 287, 224, 303, 290, 306, 350, 365, 380, 427, 461],
        itemStyle: {
          normal: {
            // color: '#498ace',
            lineStyle: {
              width: 3, //设置线条粗细
            },
          },
        },
      },
      {
        name: '收入',
        type: 'line',
        stack: '3',
        data: [1440, 1320, 1583.4, 1296, 1652.3, 1560, 1624, 1890, 1860, 2160, 2108, 2244],
        itemStyle: {
          normal: {
            // color: '#a9cee8',
            lineStyle: {
              width: 3, //设置线条粗细
            },
          },
        },
      },
    ],
  };

  initEchart(id, option);
};

const r1c2 = (id) => {
  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['资产', '公司数量'],
      y: 'top',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '5%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    yAxis: [
      {
        type: 'value',
      },
      {
        type: 'value',
        min: 0,
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '资产',
        type: 'bar',
        barWidth: '50%',
        stack: '1',
        yAxisIndex: 0,
        data: [12000, 11000, 10400, 12000, 13000, 11700, 15400, 15000, 16500, 17920, 18700, 18700],
        itemStyle: {
          color: '#93b7e3',
        },
      },
      {
        name: '公司数量',
        type: 'line',
        stack: '2',
        yAxisIndex: 1,
        data: [12, 11, 13, 12, 13, 13, 14, 15, 15, 16, 17, 17],
        itemStyle: {
          color: '#edafda',
        },
      },
    ],
  };

  initEchart(id, option);
};

const r1c3 = (id) => {
  let option = {
    title: [
      {
        text: '收入构成',
        left: '20%',
      },
      {
        text: '成本构成',
        right: '20%',
      },
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
      {
        name: '半径模式',
        type: 'pie',
        radius: [20, 110],
        center: ['25%', '50%'],
        roseType: 'radius',
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [
          { value: 0.3014, name: '产品销售收入' },
          { value: 0.285, name: '工程结算收入' },
          { value: 0.1877, name: '商品销售收入' },
          { value: 0.2147, name: '营业收入' },
          { value: 0.113, name: '房地产经营收入' },
        ],
      },
      {
        name: '面积模式',
        type: 'pie',
        radius: [30, 110],
        center: ['75%', '50%'],
        roseType: 'area',
        data: [
          { value: 0.4908, name: '制造费用' },
          { value: 0.2654, name: '直接人工' },
          { value: 0.244, name: '直接材料' },
        ],
      },
    ],
  };

  initEchart(id, option);
};

const r1c4 = (id) => {
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      data: ['权益', '负债'],
      y: 'top',
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 62624, name: '权益', itemStyle: { color: '#cbb0e3' } },
          { value: 109696, name: '负债', itemStyle: { color: '#516b91' } },
        ],
      },
    ],
  };

  initEchart(id, option);
};

const r2c1 = (id) => {
  let html = `
  <tr>
    <td>实体</td>
    <td>资产总计(万元)</td>
    <td>排名</td>
    <td>上期</td>
    <td>排名变化</td>
  </tr>`;

  table1_data.forEach((val) => {
    let iconColor = val[`排名变化`] === 'icon-arrow-up5' ? 'text-green' : val[`排名变化`] === 'icon-arrow-down5' ? 'text-danger' : '';

    html += `
    <tr>
      <td>${val[`实体`]}</td>
      <td>${val[`资产总计(万元)`]}</td>
      <td>${val[`排名`]}</td>
      <td>${val[`上期`]}</td>
      <td style="text-align: center;"><i class="${val[`排名变化`]} mr-2 ${iconColor}"></i></td>
    </tr>
    `;
  });

  $(`#${id}`).html(html);
};

const r2c2 = (id) => {
  let html = `
  <tr>
    <td>实体</td>
    <td>净利润(万元)</td>
    <td>排名</td>
    <td>上期</td>
    <td>排名变化</td>
  </tr>`;

  table2_data.forEach((val) => {
    let iconColor = val[`排名变化`] === 'icon-arrow-up5' ? 'text-green' : val[`排名变化`] === 'icon-arrow-down5' ? 'text-danger' : '';

    html += `
    <tr>
      <td>${val[`实体`]}</td>
      <td>${val[`净利润(万元)`]}</td>
      <td>${val[`排名`]}</td>
      <td>${val[`上期`]}</td>
      <td style="text-align: center;"><i class="${val[`排名变化`]} mr-2 ${iconColor}"></i></td>
    </tr>
    `;
  });

  $(`#${id}`).html(html);
};

const r2c3 = (id) => {
  let html = `
  <tr>
    <td>实体</td>
    <td>净现金流量(万元)</td>
    <td>排名</td>
    <td>上期</td>
    <td>排名变化</td>
  </tr>`;

  table3_data.forEach((val) => {
    let iconColor = val[`排名变化`] === 'icon-arrow-up5' ? 'text-green' : val[`排名变化`] === 'icon-arrow-down5' ? 'text-danger' : '';

    html += `
    <tr>
      <td>${val[`实体`]}</td>
      <td>${val[`净现金流量(万元)`]}</td>
      <td>${val[`排名`]}</td>
      <td>${val[`上期`]}</td>
      <td style="text-align: center;"><i class="${val[`排名变化`]} mr-2 ${iconColor}"></i></td>
    </tr>
    `;
  });

  $(`#${id}`).html(html);
};

const DashBoard = function () {
  r1c1('r1c1');
  r1c2('r1c3');
  r1c3('r1c2');
  r1c4('r1c4');

  r2c1('r2c1');
  r2c2('r2c2');
  r2c3('r2c3');
};

// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function () {
  DashBoard();
});
