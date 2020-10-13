var Cus_theme = 'westeros';
var Cus_echarts = {};

function ROI() {
  let cardName = 'ROI';
  let cardName_mini = 'ROI_mini';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');
  cfs.card.body.getDom(cardName).css('padding', '0');

  // echart div高度
  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  $(echartDom).css('background-color', '#26a69a');

  // 增加容器dom
  let Wrapper = `
  <div style="height:50%;padding:1rem;color:white">
  <div class="d-flex">
  <div>
    <span class="font-size-sm opacity-75 mr-2">2020 实际</span>
    <span style="font-size: 1.3rem">10,424,890</span>
  </div>
  <span class="badge bg-teal-800 badge-pill align-self-center ml-auto">18.11%</span>
</div>
<div class="d-flex">
  <div>
    <span class="font-size-sm opacity-75 mr-2">2021 预算</span>
    <span style="font-size: 1.3rem">12,312,843</span>
  </div>
  <span class="align-self-center ml-auto" style="font-size: 1.3rem">ROI</span>
</div>
  </div>
    <div id="${cardName_mini}" style="width:100%;position: absolute;bottom: 0;height: 50%"></div>
  `;

  echartDom.html(Wrapper);

  let miniEchartDom = cfs.card.body.getDom(cardName).find(`#${cardName_mini}`);

  let option = {
    grid: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
    },
    xAxis: {
      show: false,
      splitLine: { show: false },
      type: 'category',
      data: [1, 2, 3, 4, 5, 6, 7],
    },
    yAxis: {
      show: false,
      splitLine: { show: false },
      type: 'value',
      max: function (value) {
        return value.max + 0.5;
      },
    },
    series: [
      {
        name: '直接访问',
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.5)',
          },
        },
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };

  if (!Cus_echarts[cardName_mini]) {
    Cus_echarts[cardName_mini] = cfs.echarts.init(miniEchartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName_mini], option);
  }
}

function ROE() {
  let cardName = 'ROE';
  let cardName_mini = 'ROE_mini';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');
  cfs.card.body.getDom(cardName).css('padding', '0');

  // echart div高度
  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  $(echartDom).css('background-color', '#ec407a');

  // 增加容器dom
  let Wrapper = `
    <div style="height:50%;padding:1rem;color:white">
    <div class="d-flex">
    <div>
      <span class="font-size-sm opacity-75 mr-2">2020 实际</span>
      <span style="font-size: 1.3rem">45,279</span>
    </div>
    <span class="badge bg-teal-800 badge-pill align-self-center ml-auto">+5.59%</span>
  </div>
  <div class="d-flex">
    <div>
      <span class="font-size-sm opacity-75 mr-2">2021 预算</span>
      <span style="font-size: 1.3rem">45,279</span>
    </div>
    <span class="align-self-center ml-auto" style="font-size: 1.3rem">ROE</span>
  </div>
    </div>
    <div id="${cardName_mini}" style="width:100%;position: absolute;bottom: 0;height: 50%"></div>
  `;

  echartDom.html(Wrapper);

  let miniEchartDom = cfs.card.body.getDom(cardName).find(`#${cardName_mini}`);

  let option = {
    grid: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
    },
    xAxis: {
      show: false,
      splitLine: { show: false },
      type: 'category',
      data: [1, 2, 3, 4, 5, 6, 7],
    },
    yAxis: {
      show: false,
      splitLine: { show: false },
      type: 'value',
      max: function (value) {
        return value.max + 0.5;
      },
    },
    series: [
      {
        name: '直接访问',
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.5)',
          },
        },
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };

  if (!Cus_echarts[cardName_mini]) {
    Cus_echarts[cardName_mini] = cfs.echarts.init(miniEchartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName_mini], option);
  }
}

function IRR() {
  let cardName = 'IRR';
  let cardName_mini = 'IRR_mini';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');
  cfs.card.body.getDom(cardName).css('padding', '0');

  // echart div高度
  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  $(echartDom).css('background-color', '#29b6f6');

  // 增加容器dom
  let Wrapper = `
  <div style="height:50%;padding:1rem;color:white">
  <div class="d-flex">
  <div>
    <span class="font-size-sm opacity-75 mr-2">2020 实际</span>
    <span style="font-size: 1.3rem">313</span>
  </div>
  <span class="badge bg-teal-800 badge-pill align-self-center ml-auto">11.02%</span>
</div>
<div class="d-flex">
  <div>
    <span class="font-size-sm opacity-75 mr-2">2021 预算</span>
    <span style="font-size: 1.3rem">347.50</span>
  </div>
  <span class="align-self-center ml-auto" style="font-size: 1.3rem">IRR</span>
</div>
  </div>
    <div id="${cardName_mini}" style="width:100%;position: absolute;bottom: 0;height: 50%"></div>
  `;

  echartDom.html(Wrapper);

  let miniEchartDom = cfs.card.body.getDom(cardName).find(`#${cardName_mini}`);

  let option = {
    grid: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
    },
    xAxis: {
      show: false,
      splitLine: { show: false },
      type: 'category',
      data: [1, 2, 3, 4, 5, 6, 7],
    },
    yAxis: {
      show: false,
      splitLine: { show: false },
      type: 'value',
      max: function (value) {
        return value.max + 0.5;
      },
    },
    series: [
      {
        name: '直接访问',
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.5)',
          },
        },
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };

  if (!Cus_echarts[cardName_mini]) {
    Cus_echarts[cardName_mini] = cfs.echarts.init(miniEchartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName_mini], option);
  }
}

function Chart_R3() {
  let cardName = 'Chart_R3';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['新增入市', '累计入市', '新增入住', '累计入住'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      data: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '新增入市',
        type: 'bar',
        stack: '总量',
        barWidth : 50,//柱图宽度
        data: [41, 39, 5, 23, 4, 22, 24, 20, 22, 19, 30],
      },
      {
        name: '累计入市',
        type: 'line',
        stack: '总量',
        data: [41, 80, 85, 108, 112, 134, 158, 178, 200, 219, 249],
      },
      {
        name: '新增入住',
        type: 'bar',
        stack: '总量',
        barWidth : 50,//柱图宽度
        data: [17, 17, 40, 20, 10, 14, 18, 18, 14, 10, 11],
      },
      {
        name: '累计入住',
        type: 'line',
        stack: '总量',
        data: [17, 34, 74, 94, 104, 118, 136, 154, 168, 178, 189],
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
  var cardName = 'Chart_R1C1';
  var echartDom = cfs.card.body.getDom(cardName).find('.echart');
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find('.freshBS').find('i').css('margin', 10);
  var pieData = [
    { name: '渠道1：银行借款', value: 60150000 },
    { name: '渠道2：股东借款', value: 30500000 },
    { name: '渠道3：内部拆借', value: 128755000 },
  ];
  var nameArr = ['渠道1：银行借款', '渠道2：股东借款', '渠道3：内部拆借'];
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function (data) {
        return data.name + ' : ' + format(data.value) + ' (' + data.percent + '%)';
      },
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: nameArr,
    },
    series: [
      {
        name: '',
        type: 'pie',
        center: ['54%', '60%'],
        radius: '55%',
        data: pieData.reverse(),
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
          normal: {
            label: {
              formatter: function (params) {
                return params.percent + '%';
              },
            },
            labelLine: {
              show: true,
            },
          },
        },
      },
    ],
  };

  // 手机端
  if (getRequest().isView == 'mobile') {
    // 高度调整
    cfs.echarts.mobileHeight(cardName, 350);

    // 图表配置修改
    option = {
      legend: {
        orient: 'vertical',
        left: 'left',
        data: nameArr,
      },
      series: [
        {
          name: '',
          type: 'pie',
          center: ['50%', '65%'],
          radius: '55%',
          data: pieData.reverse(),
          itemStyle: {
            normal: {
              label: {
                formatter: function (params) {
                  return params.percent + '%';
                },
              },
              labelLine: {
                show: true,
              },
            },
          },
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

function Chart_R1C2_Main() {
  var cardName = 'Chart_R1C2';
  var echartDom = cfs.card.body.getDom(cardName).find('.echart');
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find('.freshBS').find('i').css('margin', 10);
  var renderData = [
    { name: '已投金额', value: 219405000 },
    { name: '剩余可投金额', value: 228903238.529853 },
  ];
  var nameArr = ['已投金额', '剩余可投金额'];
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function (data) {
        return data.name + ' : ' + format(Math.round(data.value)) + ' (' + data.percent + '%)';
      },
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: nameArr,
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: true,
            position: 'outside',
            formatter: function (params) {
              return params.name + '(' + params.percent + '%)';
            },
          },
          emphasis: {
            show: true,
          },
        },
        labelLine: {
          normal: {
            show: true,
            length: 20,
            length2: 20,
            lineStyle: {
              color: '#333',
            },
          },
        },
        data: renderData,
      },
    ],
  };

  // 手机端
  if (getRequest().isView == 'mobile') {
    // 高度调整
    cfs.echarts.mobileHeight(cardName, 280);

    // 图表配置修改
    option = {
      legend: {
        orient: 'vertical',
        x: 'left',
        data: nameArr,
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['35%', '55%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              position: 'outside',
              formatter: function (params) {
                return params.percent + '%';
              },
            },
            emphasis: {
              show: true,
            },
          },
          labelLine: {
            normal: {
              show: true,
              length: 20,
              length2: 20,
              lineStyle: {
                color: '#333',
              },
            },
          },
          data: renderData,
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

function Chart_R2C1_Main() {
  var cardName = 'Chart_R2C1';
  var echartDom = cfs.card.body.getDom(cardName).find('.echart');
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find('.freshBS').find('i').css('margin', 10);

  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      // data: ['华北', '华东', '华中', '华南'],
      data: ['主营业务成本', '管理费用', '销售费用', '委托管理费', '其他费用', '净利润'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: function (value) {
          var res = value;
          return res + '%';
        },
      },
    },
    yAxis: {
      inverse: false,
      type: 'category',
      data: ['华北', '华东', '华中', '华南'],
    },
    series: [
      {
        name: '主营业务成本',
        type: 'bar',
        barWidth : 45,//柱图宽度
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight',
          formatter: function (name) {
            return name['data'] + '%';
          },
        },
        data: [36, 30, 45, 42],
      },
      {
        name: '管理费用',
        type: 'bar',
        barWidth : 45,//柱图宽度
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight',
          formatter: function (name) {
            return name['data'] + '%';
          },
        },
        data: [16, 16, 17, 18],
      },
      {
        name: '销售费用',
        type: 'bar',
        barWidth : 45,//柱图宽度
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight',
          formatter: function (name) {
            return name['data'] + '%';
          },
        },
        data: [16, 17, 17, 16],
      },
      {
        name: '委托管理费',
        type: 'bar',
        barWidth : 45,//柱图宽度
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight',
          formatter: function (name) {
            return name['data'] + '%';
          },
        },
        data: [8, 6, 5, 7],
      },
      {
        name: '其他费用',
        type: 'bar',
        barWidth : 45,//柱图宽度
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight',
          formatter: function (name) {
            return name['data'] + '%';
          },
        },
        data: [4, 2, 3, 2],
      },
      {
        name: '净利润',
        type: 'bar',
        barWidth : 45,//柱图宽度
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight',
          formatter: function (name) {
            return name['data'] + '%';
          },
        },
        data: [20, 29, 13, 15],
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
  var cardName = 'Chart_R2C2';
  var echartDom = cfs.card.body.getDom(cardName).find('.echart');
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find('.freshBS').find('i').css('margin', 10);

  let option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '收入', '成本', '净利润'],
        ['华北', 703.0, 414.77, 288.23],
        ['华东', 705.0, 408.9, 296.1],
        ['华中', 580.0, 319.0, 261.0],
        ['华南', 332.0, 205.84, 126.16],
      ],
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function Chart_R3C1_Main() {
  var cardName = 'Chart_R3C1';
  var headDom = cfs.card.head.getDom(cardName);
  let buttonInfo = {
    id: 'ProjectSelect1',
    text: '项目',
    list: [
      { key: 'A', value: '项目A' },
      { key: 'B', value: '项目B' },
      { key: 'C', value: '项目C' },
      { key: 'D', value: '项目D' },
      { key: 'E', value: '项目E' },
      { key: 'F', value: '项目F' },
    ],
  };
  if ($('#' + buttonInfo.id).length == 0) {
    headDom.find('.freshBS').find('i').css('margin', 10);
    cfs.card.head.addSelectButton(headDom, buttonInfo);
    $('#' + buttonInfo.id).change(function () {
      Chart_R3C1_Main();
    });
  }
  var bodyDom = cfs.card.body.getDom(cardName).find('.echart');
  let data = {
    series: [
      { name: '项目总额占比', data: [{ name: 'StaffAdjInvest', value: 0.0382541309 }] },
      { name: '项目可投占比', data: [{ name: 'StaffAdjInvest', value: 0.5885250913 }] },
    ],
  };
  let pr1 = data.series[0].data[0].value;
  pr1 = numPro(pr1); //小数位数处理
  let pr2 = data.series[1].data[0].value;
  pr2 = numPro(pr2); //小数位数处理
  let radiusDial1 = '85%';
  let radiusDial2 = '65%';
  var option = {
    tooltip: {
      formatter: '{a} <br/>{c}%',
    },
    series: [
      {
        name: data.series[1].name,
        type: 'gauge',
        z: 3,
        min: 0,
        max: 100,
        splitNumber: 5,
        center: ['64%', '50%'],
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
            color: 'auto',
          },
        },
        splitLine: {
          // 分隔线
          length: 20,
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto',
          },
        },
        axisLabel: {
          backgroundColor: 'auto',
          borderRadius: 2,
          color: '#eee',
          padding: 3,
          textShadowBlur: 2,
          textShadowOffsetX: 1,
          textShadowOffsetY: 1,
          textShadowColor: '#222',
          formatter: function (e) {
            return e + '%';
          },
        },
        title: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          // fontWeight: 'bolder',
          // fontSize: 20,
          // fontStyle: 'italic',
          offsetCenter: [0, '95%'],
        },
        detail: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          formatter: function (value) {
            value = (value + '').split('.');
            value.length < 2 && value.push('00');
            return ('00' + value[0]).slice(-2) + '.' + (value[1] + '00').slice(0, 2) + '%';
          },
          // fontWeight: 'bolder',
          // borderRadius: 3,
          // backgroundColor: '#444',
          // borderColor: '#aaa',
          // shadowBlur: 5,
          // shadowColor: '#333',
          // shadowOffsetX: 0,
          // shadowOffsetY: 3,
          // borderWidth: 2,
          // textBorderColor: '#000',
          // textBorderWidth: 2,
          // textShadowBlur: 2,
          // textShadowColor: '#fff',
          // textShadowOffsetX: 0,
          // textShadowOffsetY: 0,
          // fontFamily: 'Arial',
          // width: 100,
          // color: '#eee',
          // rich: {}
          fontSize: 18,
        },
        // data: [{value: ProgressData1[index],name:'项目可投占比'}]
        data: [{ value: pr2, name: data.series[1].name }],
      },
      {
        name: data.series[0].name,
        type: 'gauge',
        center: ['30%', '55%'],
        radius: radiusDial2,
        min: 0,
        max: 6.5,
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
            return e.toFixed(1) + '%';
          },
        },
        axisTick: {
          // 坐标轴小标记
          length: 12,
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: 'auto',
          },
        },
        splitLine: {
          // 分隔线
          length: 20,
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto',
          },
        },
        pointer: {
          width: 5,
        },
        title: {
          offsetCenter: [0, '100%'],
        },
        detail: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          // fontWeight: 'bolder',
          formatter: function (value) {
            // value = (value + '').split('.');
            // value.length < 2 && (value.push('00'));
            return value.toFixed(2) + '%';
          },
          fontSize: 16,
        },
        // data: [{value: ProgressData2[index],name:'项目总额占比'}]
        data: [{ value: pr1, name: data.series[0].name }],
      },
    ],
  };

  // 手机端
  if (getRequest().isView == 'mobile') {
    // 高度调整
    cfs.echarts.mobileHeight(cardName, 340);
    // 图表配置修改
    option = {
      tooltip: {
        formatter: '{a} <br/>{c}%',
      },
      series: [
        {
          name: data.series[1].name,
          type: 'gauge',
          z: 3,
          min: 0,
          max: 100,
          splitNumber: 5,
          center: ['70%', '50%'],
          radius: '68%',
          axisLine: {
            // 坐标轴线
            lineStyle: {
              // 属性lineStyle控制线条样式
              width: 10,
            },
          },
          axisTick: {
            // 坐标轴小标记
            length: 10,
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: 'auto',
            },
          },
          splitLine: {
            // 分隔线
            length: 10,
            lineStyle: {
              // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto',
            },
          },
          axisLabel: {
            backgroundColor: 'auto',
            borderRadius: 2,
            color: '#eee',
            padding: 3,
            textShadowBlur: 2,
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
            textShadowColor: '#222',
            formatter: function (e) {
              return e + '%';
            },
          },
          title: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            // fontWeight: 'bolder',
            // fontSize: 20,
            // fontStyle: 'italic',
            offsetCenter: [0, '95%'],
          },
          detail: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            formatter: function (value) {
              value = (value + '').split('.');
              value.length < 2 && value.push('00');
              return ('00' + value[0]).slice(-2) + '.' + (value[1] + '00').slice(0, 2) + '%';
            },
            fontSize: 8,
          },
          // data: [{value: ProgressData1[index],name:'项目可投占比'}]
          data: [{ value: pr2, name: data.series[1].name }],
        },
        {
          name: data.series[0].name,
          type: 'gauge',
          center: ['25%', '55%'],
          radius: '59%',
          min: 0,
          max: 6.5,
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
              return e.toFixed(1) + '%';
            },
          },
          axisTick: {
            // 坐标轴小标记
            length: 12,
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: 'auto',
            },
          },
          splitLine: {
            // 分隔线
            length: 20,
            lineStyle: {
              // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'auto',
            },
          },
          pointer: {
            width: 5,
          },
          title: {
            offsetCenter: [0, '100%'],
          },
          detail: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            // fontWeight: 'bolder',
            formatter: function (value) {
              // value = (value + '').split('.');
              // value.length < 2 && (value.push('00'));
              return value.toFixed(2) + '%';
            },
            fontSize: 8,
          },
          // data: [{value: ProgressData2[index],name:'项目总额占比'}]
          data: [{ value: pr1, name: data.series[0].name }],
        },
      ],
    };
  }

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(bodyDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
function Chart_R3C2_Main() {
  var cardName = 'Chart_R3C2';
  var echartDom = cfs.card.body.getDom(cardName).find('.echart');
  var headDom = cfs.card.head.getDom(cardName);
  let buttonInfo = {
    id: 'ProjectSelect2',
    text: '项目',
    list: [
      { key: 'A', value: '项目A' },
      { key: 'B', value: '项目B' },
      { key: 'C', value: '项目C' },
      { key: 'D', value: '项目D' },
      { key: 'E', value: '项目E' },
      { key: 'F', value: '项目F' },
    ],
  };
  if ($('#' + buttonInfo.id).length == 0) {
    headDom.find('.freshBS').find('i').css('margin', 10);
    //cfs.card.head.addSelectButton(headDom, buttonInfo);
    $('#' + buttonInfo.id).change(function () {
      Chart_R3C2_Main();
    });
  }
  var data = {
    series: [
      {
        name: '项目资金占用情况',
        data: [
          {
            name: '项目资金占用情况',
            value: [
              { description_1: '项目A', StaffAdjInvest: 211000 },
              { description_1: '项目B', StaffAdjInvest: 61000 },
              { description_1: '项目C', StaffAdjInvest: 77000 },
              { description_1: '项目D', StaffAdjInvest: 21000 },
              { description_1: '项目E', StaffAdjInvest: 25000 },
              { description_1: '项目F', StaffAdjInvest: 55000 },
              { description_1: '未分配', StaffAdjInvest: 155000 },
            ],
          },
        ],
      },
    ],
  };
  let resData = data.series[0].data[0].value;
  let pieData = [];
  resData.forEach(function (v) {
    var m = {};
    m['name'] = v.description_1 || '';
    m['value'] = v.StaffAdjInvest || '';
    pieData.push(m);
  });
  let nameArr = [];
  pieData.forEach(function (v) {
    nameArr.push(v.name);
  });
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function (data) {
        return data.seriesName + '<br/>' + data.name + ' : ' + format(Math.round(data.value)) + ' (' + data.percent + '%)';
      },
      textStyle: {
        fontSize: 12,
      },
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      itemWidth: 10,
      itemHeight: 10,
      data: nameArr,
      textStyle: {
        fontSize: '70%',
      },
    },
    grid: {
      left: '10%',
      right: '4%',
      bottom: '1%',
      containLabel: true,
    },
    series: [
      {
        name: data.series[0].name,
        type: 'pie',
        center: ['50%', '45%'],
        radius: '70%',
        data: pieData.reverse(),
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
          normal: {
            label: {
              formatter: function (params) {
                return params.name + '(' + params.percent + '%)';
              },
              textStyle: {
                fontSize: '70%',
              },
              normal: {
                // show: false,
                // position: 'insideRight',
              },
            },
            lableLine: {
              show: false,
            },
          },
        },
      },
    ],
  };
  // 手机端
  if (getRequest().isView == 'mobile') {
    var option = {
      tooltip: {
        trigger: 'item',
        formatter: function (data) {
          return data.seriesName + '<br/>' + data.name + ' : ' + format(Math.round(data.value)) + ' (' + data.percent + '%)';
        },
        textStyle: {
          fontSize: 12,
        },
      },
      legend: {
        orient: 'horizontal',
        left: 'left',
        itemWidth: 10,
        itemHeight: 10,
        data: nameArr,
        textStyle: {
          fontSize: '70%',
        },
      },
      grid: {
        left: '10%',
        right: '4%',
        bottom: '1%',
        containLabel: true,
      },
      series: [
        {
          name: data.series[0].name,
          type: 'pie',
          center: ['50%', '58%'],
          radius: '65%',
          data: pieData.reverse(),
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
            normal: {
              label: {
                formatter: function (params) {
                  return params.name + '(' + params.percent + '%)';
                },
                textStyle: {
                  fontSize: '70%',
                },
                normal: {
                  // show: false,
                  // position: 'insideRight',
                },
              },
              lableLine: {
                show: false,
              },
            },
          },
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

function Chart_R4_Main() {
  var cardName = 'Chart_R4';
  var echartDom = cfs.card.body.getDom(cardName).find('.echart');
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find('.freshBS').find('i').css('margin', 10);
  var data = {
    axis: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031'],
    series: [
      {
        name: '前十项目投资',
        data: [
          {
            name: '资金缺口',
            value: [
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
            ],
          },
        ],
      },
    ],
  };
  var xDataHead = data.axis;
  var yDataValue1 = data.series[0].data[0];
  var yValue1 = yDataValue1.value;
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow',
      },
      formatter: function (params) {
        var html = '';
        if (params.length > 0) {
          for (var int = 0; int < params.length; int++) {
            html += params[int].axisValue + '<br>' + params[int].marker + params[int].seriesName + '：' + format((params[int].data / 1000).toFixed(2)) + '<br>';
          }
        }
        return html;
      },
    },
    grid: {
      left: '2%',
      right: '2%',
      bottom: '13%',
      top: '5',
      containLabel: true,
    },
    dataZoom: [
      {
        // startValue: xDataHead[0]
        filterMode: 'filter',
        startValue: 0,
        endValue: Number(xDataHead.length / 1),
      },
      {
        type: 'slider',
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: getLanguage('money2') + '：千元',
        boundaryGap: [0, 0.01],
        axisLabel: {
          formatter: function (val) {
            return format(val / 1000);
          },
          interval: 0,
          rotate: 40,
        },
      },
      // {
      //   type: 'value',
      //   min: 0,
      //   max: 8.22,
      //   // interval: 25,
      //   axisLabel: {
      //     formatter: '{value} %',
      //   },
      // },
    ],
    xAxis: {
      type: 'category',
      data: xDataHead,
      axisLabel: {
        // formatter:(val)=>{
        //     return val/1000
        // },
        interval: 0,
        rotate: 40,
      },
    },
    series: [
      {
        name: yDataValue1.name,
        type: 'bar',
        stack: '总量',
        // barWidth:25, //柱状图宽度
        barMaxWidth: 30,
        label: {
          normal: {
            show: false,
            position: 'insideRight',
          },
        },
        data: yValue1,
        itemStyle: {
          normal: {
            color: '#569ADA',
          },
        },
      },
    ],
  };

  // 手机端
  if (getRequest().isView == 'mobile') {
    // 高度调整
    cfs.echarts.mobileHeight(cardName, 400);

    // 图表配置修改
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow',
        },
        formatter: function (params) {
          var html = '';
          if (params.length > 0) {
            for (var int = 0; int < params.length; int++) {
              html += params[int].axisValue + '<br>' + params[int].marker + params[int].seriesName + '：' + format((params[int].data / 1000).toFixed(2)) + '<br>';
            }
          }
          return html;
        },
      },
      grid: {
        left: '1%',
        right: '0',
        top: '1%',
        bottom: '14%',
        containLabel: true,
      },
      dataZoom: [
        {
          // startValue: xDataHead[0]
          filterMode: 'filter',
          startValue: 0,
          endValue: Number(xDataHead.length / 1),
        },
        {
          type: 'slider',
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: getLanguage('money2') + '：千元',
          boundaryGap: [0, 0.01],
          axisLabel: {
            formatter: function (val) {
              return format(val / 1000);
            },
            interval: 0,
            rotate: 40,
          },
        },
        {
          type: 'value',
          min: 0,
          max: 8.22,
          // interval: 25,
          axisLabel: {
            formatter: '{value} %',
          },
        },
      ],
      xAxis: {
        type: 'category',
        data: xDataHead,
        axisLabel: {
          // formatter:(val)=>{
          //     return val/1000
          // },
          interval: 0,
          rotate: 40,
        },
      },
      series: [
        {
          name: yDataValue1.name,
          type: 'bar',
          stack: '总量',
          // barWidth:25, //柱状图宽度
          barMaxWidth: 30,
          label: {
            normal: {
              show: false,
              position: 'insideRight',
            },
          },
          data: yValue1,
          itemStyle: {
            normal: {
              color: '#569ADA',
            },
          },
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
// 自定义一个处理小数的函数
function numPro(num) {
  var n = floatNum.accMul(num, 100); //小数乘以100
  n = n.toFixed(2); //取两位小数
  return n;
}
//Functions.js
(function addCusStyle() {
  //添加loading动画css
  var style = document.createElement('style');
  style.type = 'text/css';
  var css1 =
    ".customLoader {border: .2em solid transparent;border-top-color: currentcolor;border-radius: 50%;-webkit-animation: 1s customLoader linear infinite;animation: 1s customLoader linear infinite;position: relative;display: inline-block;width: 1em;height: 1em;color: inherit;vertical-align: middle;pointer-events: none;}.customLoader:before {content: '';display: block;width: inherit;height: inherit;position: absolute;top: -.2em;left: -.2em;border: .2em solid currentcolor;border-radius: 50%;opacity: .5;}@-webkit-keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}";
  try {
    style.appendChild(document.createTextNode(css1));
  } catch (ex) {
    style.styleSheet.cssText = css1; //针对IE
  }
  var head = document.getElementsByTagName('head')[0];
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

function Chart_R5C1_Main() {
  var cardName = 'Chart_R5C1';
  var echartDom = cfs.card.body.getDom(cardName).find('.echart');
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find('.freshBS').find('i').css('margin', 10);
  var data = {
    axis: ['项目B', '项目D', '项目A', '项目C', '项目F', '项目E'],
    series: [{ name: '前十项目投资', data: [{ name: '项目金额', value: [932560.232382, 735000, 331923.574457, 312515.029877, 186905.806274, 76683.558963] }] }],
  };
  var yData = data.series[0].data;
  var yDataHead = data.axis;
  var yDataHead = yDataHead.reverse();
  var yDataValue1 = yData[0].value;
  var yDataValue1 = yDataValue1.reverse();
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow',
      },
      formatter: function (params) {
        var html = '';
        if (params.length > 0) {
          for (var int = 0; int < params.length; int++) {
            html += params[int].axisValue + '<br>' + params[int].marker + params[int].seriesName + '：' + format((params[int].data / 1000).toFixed(2)) + '<br>';
          }
        }
        return html;
      },
},
    grid: {
      left: '1%',
      right: 75,
      top: '5%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      name: getLanguage('money2') + '：千元',
      // boundaryGap: [0, 0.01],
      axisLabel: {
        formatter: function (val) {
          return format(val / 1000);
        },
        interval: 0,
        rotate: 40,
      },
    },
    yAxis: {
      type: 'category',
      data: yDataHead,
      // interval:0,
      axisLabel: {
        interval: 0,
        rotate: 20,
      },
    },
    series: [
      {
        name: yData[0].name,
        type: 'bar',
        stack: '总量',
        barWidth: 25,
        label: {
          normal: {
            show: false,
            position: 'insideRight',
          },
        },
        data: yDataValue1,
        itemStyle: {
          normal: {
            color: '#569ADA',
          },
        },
      },
    ],
  };

  // 手机端
  if (getRequest().isView == 'mobile') {
    // 高度调整
    cfs.echarts.mobileHeight(cardName, 340);

    // 图表配置修改
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow',
        },
        formatter: function (params) {
          var html = '';
          if (params.length > 0) {
            for (var int = 0; int < params.length; int++) {
              html += params[int].axisValue + '<br>' + params[int].marker + params[int].seriesName + '：' + format((params[int].data / 1000).toFixed(2)) + '<br>';
            }
          }
          return html;
        },
      },
      grid: {
        left: '1%',
        right: '1%',
        bottom: '1%',
        top: '1%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        name: getLanguage('money2') + '：千元',
        // boundaryGap: [0, 0.01],
        axisLabel: {
          formatter: function (val) {
            return format(val / 1000);
          },
          interval: 0,
          rotate: 40,
        },

},
      yAxis: {
        type: 'category',
        data: yDataHead,
        // interval:0,
        axisLabel: {
          interval: 0,
          rotate: 20,
        },
      },
      series: [
        {
          name: yData[0].name,
          type: 'bar',
          stack: '总量',
          barWidth: 15,
          label: {
            normal: {
              show: false,
              position: 'insideRight',
            },
          },
          data: yDataValue1,
          itemStyle: {
            normal: {
              color: '#569ADA',
            },
          },
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

function Chart_R5C2_Main() {
  var cardName = 'Chart_R5C2';
  var echartDom = cfs.card.body.getDom(cardName).find('.echart');
  var headDom = cfs.card.head.getDom(cardName);
  headDom.find('.freshBS').find('i').css('margin', 10);
  var data = {
    series: [
      {
        name: 'ROI排名',
        data: [
          { description_1: '项目A', StaffAdjInvest: 0.211 },
          { description_1: '项目C', StaffAdjInvest: 0.077 },
          { description_1: '项目B', StaffAdjInvest: 0.061 },
          { description_1: '项目F', StaffAdjInvest: 0.055 },
          { description_1: '项目E', StaffAdjInvest: 0.025 },
          { description_1: '项目D', StaffAdjInvest: 0.021 },
        ],
},
    ],
  };
  let yData = data.series[0];
  let yDataValue = [];
  yData.data.forEach(function (v) {
    yDataValue.push(numPro(v['StaffAdjInvest']));
  });
  let xDataHead = [];
  yData.data.forEach(function (v) {
    xDataHead.push(v['description_1']);
  });
  option = {
    tooltip: {
      trigger: 'axis',
      formatter: function (name) {
        return name[0].data + '%';
      },
    },
    xAxis: {
      type: 'category',
      data: xDataHead,
      // triggerEvent: true,
      axisLabel: {
        interval: 0,
        rotate: 40,
      },
    },
    grid: {
      left: '1%',
      right: '2%',
      bottom: '1%',
      top: '5%',
      containLabel: true,
    },
yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function (value) {
          var res = value;
          return res + '%';
        },
      },
    },
    series: [
      {
        data: yDataValue,
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: function (name) {
              return name['data'] + '%';
            },
          },
        },
      },
    ],
  };

  // 手机端
  if (getRequest().isView == 'mobile') {
    // 高度调整
    cfs.echarts.mobileHeight(cardName, 340);

    // 图表配置修改
    option = {
      tooltip: {
trigger: 'axis',
        formatter: function (name) {
          return name[0].data + '%';
        },
      },
      xAxis: {
        type: 'category',
        data: xDataHead,
        // triggerEvent: true,
        axisLabel: {
          interval: 0,
          rotate: 40,
        },
      },
      grid: {
        left: '1%',
        right: '1%',
        top: '5%',
        bottom: '1%',
        containLabel: true,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: function (value) {
            var res = value;
            return res + '%';
          },
        },
      },
      series: [
        {
          data: yDataValue,
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: function (name) {
                return name['data'] + '%';
              },
            },
          },
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
        var contentType = 'application/' + (json ? 'json' : 'x-www-form-urlencoded');
        var resObj = {};
        var err = '';
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
        var url = Api.SeeplnCube + 'cube/queryCubeData';
        paramObj = $.extend(
          {
            cube_name: cubeName,
            script: script,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, true);
      },
      //通用保存方法
      save: function (sheetDatas) {
        var url = Api.SeeplnCube + 'spreadsheet/save';
        paramObj = $.extend(
          {
            sheetDatas: sheetDatas,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, true);
      },
    },
    foundation: {
      //根据user权限获取维度，最多2层
      getAccessDimensionMemberLevel: function (dimName, exp = '', name = '#root', id = '1', searchValue = '') {
        let url = Api.seepln + 'dimension/getAccessDimensionMemberLevel';
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
        return cfs.request.common.sendRequest(url, 'POST', paramObj, false);
      },
      //根据表达式查询，不分权限
      selectDimensionMemberByNameFunction: function (dimensionMemberNames) {
        let url = Api.seepln + 'dimension/selectDimensionMemberByNameFunction';
        paramObj = $.extend(
          {
            dimensionMemberNames: dimensionMemberNames,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, false);
      },
      //执行自定义sql语句
      runComm: function (comm) {
        var url = Api.seepln + 'sqlparser/run/post';
        paramObj = $.extend(
          {
            sql: comm,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, false, true);
      },
    },
    python: {
      //同步调用python
      web: function (pyName, params) {
        var url = Api.python + 'start/web';
        paramObj = $.extend(
          {
            pyName: pyName,
            params: params,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, true, true);
      },
    },
  },
  card: {
    //dashboard单个卡片方法 bootstrap4图标：http://easyview.seepln.com/Limitless_2.0.1/Bootstrap%204/Template/layout_1/LTR/material/full/icons_icomoon.html
    head: {
      //获取卡片表头jquery dom
      getDom: function (cardName) {
        return $('#' + cardName);
      },
      //删除卡片表右边所有元素
      removeButton: function (dom) {
        dom.find('.header-elements').html('');
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
        let sHtml = '';
        buttonInfo.list.forEach(function (v) {
          sHtml += "<option value='" + v.key + "'>" + v.value + '</option>';
        });
        carHead.find('.header-elements').prepend(btn);
        $('#' + buttonInfo.id).html(sHtml);
        $('.select').select2({ minimumResultsForSearch: -1 });
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
          list[i] = '<a index = "' + i + '" class="dropdown-item" href="#">' + list[i] + '</a>';
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
            '</span></a>' +
            '<div class="dropdown-menu" style="min-width:100px">' +
            list.join('') +
            '</div></div>'
        );
        carHead.find('.header-elements').append(btn);
        if (buttonInfo.id.indexOf('_disable') == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + '_disable';
          var btn_disable = this.addDropdownButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.find('.dropdown-menu').remove();
          btn_disable.hover(function () {
            this.style.cursor = 'not-allowed';
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
            '</span></a>'
        );
        carHead.find('.header-elements').append(btn);
        if (buttonInfo.id.indexOf('_disable') == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + '_disable';
          var btn_disable = this.addButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.hover(function () {
            this.style.cursor = 'not-allowed';
          });
        }
        return btn;
      },
      //点击后调用防止反复执行
      disableButton: function (btn) {
        btn.hide();
        $('#' + btn.attr('id') + '_disable').show();
      },
      //恢复按钮可用
      enableButton: function (btn) {
        $('#' + btn.attr('id') + '_disable').hide();
        btn.show();
      },
    },
    body: {
      //获取卡片内容jquery dom
      getDom: function (cardName) {
        return $('#' + cardName).find('.card-body');
      },
      //添加文件上传卡片
      addFileTag: function (cardName, text) {
        var dom = $(
          '<div status="-1" filename="' +
            text +
            '" style="margin: 1.25rem; padding: 10px;display: inherit; background-color:#f7f7f7;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;">' +
            '<span style="margin-right: 15px;">' +
            text +
            '</span>' +
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
      window.addEventListener('resize', function () {
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
      let cardDom = $('#' + cardName).parent();
      $(cardDom).height(height);
      let echartDom = $('#' + cardName)
        .find('.card-body')
        .find('.echart');
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
        text: '',
        type: 'info',
        showCancelButton: true,
        confirmButtonText: getLanguage('sure'),
        cancelButtonText: getLanguage('cancel'),
      }).then(function (result) {
        if (result.value) {
          thenEvent();
        }
      });
    },
    //excel的5位纯数字日期格式转yyyy-mm-dd
    valueToDate: function (value) {
      var n = Number(value.split('.')[0]);
      var date = new Date('1900-1-1');
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
      var titleStr = titleArr.join('\t,');
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          var cell = dataJson[i][titleArr[j]] || '';
          if (cell.toString().indexOf(',') > -1) cell = '"' + cell + '"';
          rowArr.push(cell);
        }
        dataArr.push(rowArr.join('\t,'));
      }
      var dataStr = titleStr + '\n' + dataArr.join('\n');
      var blob = new Blob([dataStr], { type: 'text/plain;charset=utf-8' });
      //解决中文乱码问题
      blob = new Blob([String.fromCharCode(0xfeff), blob], { type: blob.type });
      this.download(blob, fileName + '.csv');
    },
    toXls: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      var titleObj = dataJson[0];
      titleArr = titleArr || Object.keys(titleObj);
      var titleStr = '<tr><td>' + titleArr.join('</td><td>') + '</td></tr>';
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          rowArr.push('<td>' + (dataJson[i][titleArr[j]] || '') + '</td>');
        }
        dataArr.push('<tr>' + rowArr.join('') + '</tr>');
      }
      var dataStr = '<table>' + titleStr + dataArr.join('') + '</table>';
      var uri = 'data:application/vnd.ms-excel;base64,';
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
        type: 'application/vnd.ms-excel',
      });
      this.download(blob, fileName + '.xls');
    },
    toXlsx: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      //
      var sheet = XLSX.utils.json_to_sheet(dataJson);
      var blob = this.sheet2blob(sheet, fileName.substr(0, 30));
      this.download(blob, fileName + '.xlsx');
    },
    sheet2blob: function (sheet, sheetName) {
      sheetName = sheetName || 'sheet1';
      var workbook = {
        SheetNames: [sheetName],
        Sheets: {},
      };
      workbook.Sheets[sheetName] = sheet;
      // 生成excel的配置项
      var wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary',
      };
      var wbout = XLSX.write(workbook, wopts);
      var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
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
      var btn = document.createElement('a');
      btn.href = URL.createObjectURL(blob);
      btn.download = fileFullName;
      btn.style = 'display: none;';
      document.body.appendChild(btn);
      btn.click();
      document.body.removeChild(btn);
    },
  },
};
