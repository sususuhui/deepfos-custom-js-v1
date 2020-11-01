var Cus_theme = 'westeros';
var Cus_echarts = {};

function r1c1() {
  let cardName = 'r1c1';
  let cardName_mini = 'r1c1_mini';
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
    <span style="font-size: 1.3rem">220</span>
  </div>
  <span class="badge bg-teal-800 badge-pill align-self-center ml-auto">14.55%</span>
</div>
<div class="d-flex">
  <div>
    <span class="font-size-sm opacity-75 mr-2">2021 预算</span>
    <span style="font-size: 1.3rem">252</span>
  </div>
  <span class="align-self-center ml-auto" style="font-size: 1.3rem">门店数量</span>
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
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
        barWidth: 35, //柱图宽度
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.5)',
          },
        },
        data: [200, 300, 200, 334, 390, 330, 220, 300, 200, 334, 390, 300],
      },
    ],
  };

  if (!Cus_echarts[cardName_mini]) {
    Cus_echarts[cardName_mini] = cfs.echarts.init(miniEchartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName_mini], option);
  }
}

function r1c2() {
  let cardName = 'r1c2';
  let cardName_mini = 'r1c2_mini';
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
      <span style="font-size: 1.3rem">97,779,906</span>
    </div>
    <span class="badge bg-teal-800 badge-pill align-self-center ml-auto">+5.59%</span>
  </div>
  <div class="d-flex">
    <div>
      <span class="font-size-sm opacity-75 mr-2">2021 预算</span>
      <span style="font-size: 1.3rem">103,242,635</span>
    </div>
    <span class="align-self-center ml-auto" style="font-size: 1.3rem">销售收入</span>
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
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          color: 'rgba(255,255,255,0.5)',
        },
        areaStyle: {
          color: 'rgba(255,255,255,0.5)',
        },
        data: [200, 300, 200, 334, 390, 330, 220, 300, 200, 334, 390, 300],
      },
    ],
  };

  if (!Cus_echarts[cardName_mini]) {
    Cus_echarts[cardName_mini] = cfs.echarts.init(miniEchartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName_mini], option);
  }
}

function r1c3() {
  let cardName = 'r1c3';
  let cardName_mini = 'r1c3_mini';
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
    <span style="font-size: 1.3rem">3.18%</span>
  </div>
  <span class="badge bg-teal-800 badge-pill align-self-center ml-auto">11.02%</span>
</div>
<div class="d-flex">
  <div>
    <span class="font-size-sm opacity-75 mr-2">2021 预算</span>
    <span style="font-size: 1.3rem">5,59%</span>
  </div>
  <span class="align-self-center ml-auto" style="font-size: 1.3rem">销售增长</span>
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
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
        type: 'line',
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.5)',
          },
        },
        data: [200, 300, 200, 334, 390, 330, 220, 300, 200, 334, 390, 300],
      },
    ],
  };

  if (!Cus_echarts[cardName_mini]) {
    Cus_echarts[cardName_mini] = cfs.echarts.init(miniEchartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName_mini], option);
  }
}

function r2() {
  let cardName = 'r2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var html = '';
        if (params.length > 0) {
          html += params[0].marker + params[0].seriesName + '：' + format(params[0].data) + '%' + '<br>';
          html += params[1].marker + params[1].seriesName + '：' + format(params[1].data) + '%' + '<br>';
          html += params[2].marker + params[2].seriesName + '：' + format(params[2].data) + '%' + '<br>';
        }
        return html;
      },
    },
    legend: {
      data: ['执行数', '滚动预测数', '年初预算', '去年实际数'],
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
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      },
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLabel: {
          show: false,
        },
      },
    ],
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function (value) {
          var res = value;
          return res + '%';
        },
      },
      max: 30,
    },
    series: [
      {
        name: '执行数',
        type: 'bar',
        stack: '总量',
        xAxisIndex: 0,
        barWidth: 30, //柱图宽度
        data: [17, 21, 19, 23, 18, 20, '', '', '', '', '', '', ''],
      },
      {
        name: '滚动预测数',
        type: 'bar',
        stack: '总量',
        xAxisIndex: 0,
        barWidth: 30, //柱图宽度
        data: ['', '', '', '', '', '', 24, 26, 25, 25, 20, 21, 23],
      },
      {
        name: '年初预算',
        type: 'bar',
        barWidth: 40,
        // barGap: '110%',
        xAxisIndex: 1,
        itemStyle: {
          normal: {
            color: 'rgba(129,175,239,0.3)', //柱子颜色
            // borderColor: "#000000", //边框颜色
            // borderWidth: 2,
          },
        },
        data: [24, 26, 22, 23, 22, 21, 27, 23, 25, 29, 28, 26, 24],
      },
      {
        name: '去年实际数',
        type: 'bar',
        barWidth: 30,
        xAxisIndex: 0,
        data: [24, 26, 22, 23, 22, 21, 27, 23, 25, 29, 28, 26, 24],
      },

      {
        name: '去年实际数',
        type: 'bar',
        barWidth: 27,
        xAxisIndex: 1,
        data: ['', '', '', '', '', '', '', '', '', '', '', ''],
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r3c1() {
  let cardName = 'r3c1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');

  cfs.echarts.correctHeight(cardName);

  let option = {
    title: {
      text: '门店区域',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}%',
    },
    legend: {
      orient: 'horizontal',
      y: 'bottom',
      data: ['东区', '西区', '南区', '北区'],
    },
    series: [
      {
        name: '门店区域',
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
          { value: 34, name: '东区' },
          { value: 28, name: '西区' },
          { value: 21, name: '南区' },
          { value: 17, name: '北区' },
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

function r3c2() {
  let cardName = 'r3c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');

  cfs.echarts.correctHeight(cardName);

  let option = {
    title: {
      text: '渠道',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}%',
    },
    legend: {
      orient: 'horizontal',
      y: 'bottom',
      data: ['线下', '线上-自有', '线上-第三'],
    },
    series: [
      {
        name: '渠道',
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
          { value: 46, name: '线下' },
          { value: 28, name: '线上-自有' },
          { value: 27, name: '线上-第三' },
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

function r3c3() {
  let cardName = 'r3c3';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');

  cfs.echarts.correctHeight(cardName);

  let option = {
    title: {
      text: '销售品类',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}%',
    },
    legend: {
      orient: 'horizontal',
      y: 'bottom',
      data: ['咖啡', '食品', '冰淇淋', '会员'],
    },
    series: [
      {
        name: '销售品类',
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
          { value: 46, name: '咖啡' },
          { value: 25, name: '食品' },
          { value: 17, name: '冰淇淋' },
          { value: 12, name: '会员' },
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

function r3c4() {
  let cardName = 'r3c4';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');

  cfs.echarts.correctHeight(cardName);

  let option = {
    title: {
      text: '会员',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}%',
    },
    legend: {
      orient: 'horizontal',
      y: 'bottom',
      data: ['会员', '非会员'],
    },
    series: [
      {
        name: '会员',
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
          { value: 72, name: '会员' },
          { value: 28, name: '非会员' },
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

function r4c1() {
  let cardName = 'r4c1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');

  cfs.echarts.correctHeight(cardName);

  let data1 = [97776906, '-', '-', '-', 103242635];
  let data2 = ['-', 4575507, 1464162, '-', '-'];
  let data3 = ['-', '-', '-', 573940, '-'];
  let data4 = ['-', '-', '-', '-', '-'];
  let dataStart = 97776906;
  let data2Fast = null;

  let aaa = data4.map((val, i) => {
    if (i === 0 || i === 4) {
      return val;
    } else {
      if (data2[i] !== '-') {
        return (dataStart += data2[i]);
      } else if (data3[i] !== '-') {
        return (dataStart -= data3[i]);
      } else {
        return dataStart;
      }
    }
  });
  data2.forEach((val, i) => {
    if (val !== '-') {
      if (data2Fast == null) {
        data2Fast = val;
        aaa[i] -= data2Fast;
      } else {
        aaa[i] -= val;
      }
    }
  });

  let option = {
    title: {
      text: '门店店龄',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var tar;
        if (params[1].value !== '-') {
          tar = params[1];
        } else {
          tar = params[0];
        }
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      },
    },
    legend: {
      orient: 'horizontal',
      y: 30,
      data: ['增加', '减少', '汇总'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: 70,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      splitLine: {
        show: false,
      },
      data: ['2019销售', '存量店增长', '新开店增长', '关店损失', '2020销售'],
    },
    yAxis: {
      min: 80000000,
      type: 'value',
    },
    series: [
      {
        name: '汇总',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'top',
        },
        data: data1,
      },
      {
        name: '辅助',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)',
        },
        emphasis: {
          itemStyle: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)',
          },
        },
        data: aaa,
      },
      {
        name: '增加',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'top',
        },
        data: data2,
      },
      {
        name: '减少',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'bottom',
        },
        data: data3,
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r4c2() {
  let cardName = 'r4c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');

  cfs.echarts.correctHeight(cardName);

  let data1 = [97776906, '-', '-', '-', 103242635];
  let data2 = ['-', 2575507, 1575507, 1314716, '-'];
  let data3 = ['-', '-', '-', '-', '-'];
  let data4 = ['-', '-', '-', '-', '-'];
  let dataStart = 97776906;
  let data2Fast = null;

  let aaa = data4.map((val, i) => {
    if (i === 0 || i === 4) {
      return val;
    } else {
      if (data2[i] !== '-') {
        return (dataStart += data2[i]);
      } else if (data3[i] !== '-') {
        return (dataStart -= data3[i]);
      } else {
        return dataStart;
      }
    }
  });
  data2.forEach((val, i) => {
    if (val !== '-') {
      if (data2Fast == null) {
        data2Fast = val;
        aaa[i] -= data2Fast;
      } else {
        aaa[i] -= val;
      }
    }
  });

  let option = {
    title: {
      text: '销售渠道',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var tar;
        if (params[1].value !== '-') {
          tar = params[1];
        } else {
          tar = params[0];
        }
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      },
    },
    legend: {
      orient: 'horizontal',
      y: 30,
      data: ['增加', '减少', '汇总'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: 70,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      splitLine: {
        show: false,
      },
      data: ['2019销售', '线下', '线上-自有平台', '线上-第三方', '2020销售'],
    },
    yAxis: {
      type: 'value',
      min: 80000000,
    },
    series: [
      {
        name: '汇总',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'top',
        },
        data: data1,
      },
      {
        name: '辅助',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)',
        },
        emphasis: {
          itemStyle: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)',
          },
        },
        data: aaa,
      },
      {
        name: '增加',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'top',
        },
        data: data2,
      },
      {
        name: '减少',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'bottom',
        },
        data: data3,
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r4c3() {
  let cardName = 'r4c3';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');

  cfs.echarts.correctHeight(cardName);

  let data1 = [97776906, '-', '-', '-', '-', 103242635];
  let data2 = ['-', 3710998, 1575507, '-', 1706334, '-'];
  let data3 = ['-', '-', '-', 1527110, , '-'];
  let data4 = ['-', '-', '-', '-', '-', '-'];
  let dataStart = 97776906;
  let data2Fast = null;

  let aaa = data4.map((val, i) => {
    if (i === 0 || i === 5) {
      return val;
    } else {
      if (data2[i] !== '-') {
        return (dataStart += data2[i]);
      } else if (data3[i] !== '-') {
        return (dataStart -= data3[i]);
      } else {
        return dataStart;
      }
    }
  });
  data2.forEach((val, i) => {
    if (val !== '-') {
      if (data2Fast == null) {
        data2Fast = val;
        aaa[i] -= data2Fast;
      } else {
        aaa[i] -= val;
      }
    }
  });

  let option = {
    title: {
      text: '销售品类',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var tar;
        if (params[1].value !== '-') {
          tar = params[1];
        } else {
          tar = params[0];
        }
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      },
    },
    legend: {
      orient: 'horizontal',
      y: 30,
      data: ['增加', '减少', '汇总'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: 70,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      splitLine: {
        show: false,
      },
      data: ['2019销售', '咖啡', '食品', '冰淇淋', '其他', '2020销售'],
    },
    yAxis: {
      type: 'value',
      min: 80000000,
    },
    series: [
      {
        name: '汇总',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'top',
        },
        data: data1,
      },
      {
        name: '辅助',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)',
        },
        emphasis: {
          itemStyle: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)',
          },
        },
        data: aaa,
      },
      {
        name: '增加',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'top',
        },
        data: data2,
      },
      {
        name: '减少',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'bottom',
        },
        data: data3,
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r4c4() {
  let cardName = 'r4c4';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');

  cfs.echarts.correctHeight(cardName);

  let data1 = [97776906, '-', '-', '-', '-', 103242635];
  let data2 = ['-', 710998, 928761, 2328761, 1497209, '-'];
  let data3 = ['-', '-', '-', '-', '-', '-'];
  let data4 = ['-', '-', '-', '-', '-', '-'];
  let dataStart = 97776906;
  let data2Fast = null;

  let aaa = data4.map((val, i) => {
    if (i === 0 || i === 5) {
      return val;
    } else {
      if (data2[i] !== '-') {
        return (dataStart += data2[i]);
      } else if (data3[i] !== '-') {
        return (dataStart -= data3[i]);
      } else {
        return dataStart;
      }
    }
  });
  data2.forEach((val, i) => {
    if (val !== '-') {
      if (data2Fast == null) {
        data2Fast = val;
        aaa[i] -= data2Fast;
      } else {
        aaa[i] -= val;
      }
    }
  });
  console.log(aaa)

  let option = {
    title: {
      text: '促销活动',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var tar;
        if (params[1].value !== '-') {
          tar = params[1];
        } else {
          tar = params[0];
        }
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      },
    },
    legend: {
      orient: 'horizontal',
      y: 30,
      data: ['增加', '减少', '汇总'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: 70,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      splitLine: {
        show: false,
      },
      data: ['2019销售', 'Q1活动', 'Q2活动', 'Q3活动', 'Q4活动', '2020销售'],
    },
    yAxis: {
      type: 'value',
      min: 80000000,
    },
    series: [
      {
        name: '汇总',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'top',
        },
        data: data1,
      },
      {
        name: '辅助',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)',
        },
        emphasis: {
          itemStyle: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)',
          },
        },
        data: aaa,
      },
      {
        name: '增加',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'top',
        },
        data: data2,
      },
      {
        name: '减少',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'bottom',
        },
        data: data3,
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r5c1() {
  let cardName = 'r5c1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['东区', '西区', '南区', '北区'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '13%',
      top: '12%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
        name: '东区',
        type: 'line',
        stack: '1',
        data: [0.082, 0.0532, 0.0301, 0.0534, 0.049, 0.033, 0.052, 0.0301, 0.0534, 0.049, 0.082, 0.0532],
      },
      {
        name: '西区',
        type: 'line',
        stack: '2',
        data: [0.08, 0.0732, 0.0901, 0.0934, 0.129, 0.133, 0.132, 0.0934, 0.129, 0.133, 0.132, 0.132],
      },
      {
        name: '南区',
        type: 'line',
        stack: '3',
        data: [0.079, 0.0832, 0.0801, 0.0834, 0.129, 0.093, 0.092, 0.0801, 0.0834, 0.129, 0.093, 0.092],
      },
      {
        name: '北区',
        type: 'line',
        stack: '4',
        data: [0.049, 0.052, 0.072, 0.0532, 0.0301, 0.0434, 0.049, 0.033, 0.0501, 0.0634, 0.082, 0.0532],
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r5c2() {
  let cardName = 'r5c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['门店', '线上总计', '第三方'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '13%',
      top: '12%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
        name: '门店',
        type: 'line',
        stack: '1',
        data: [0.082, 0.0532, 0.0301, 0.0534, 0.049, 0.033, 0.052, 0.0301, 0.0534, 0.049, 0.082, 0.0532],
      },
      {
        name: '线上总计',
        type: 'line',
        stack: '2',
        data: [0.08, 0.0732, 0.0901, 0.0934, 0.129, 0.133, 0.132, 0.0934, 0.129, 0.133, 0.132, 0.132],
      },
      {
        name: '第三方',
        type: 'line',
        stack: '3',
        data: [0.079, 0.0832, 0.0801, 0.0834, 0.129, 0.093, 0.092, 0.0801, 0.0834, 0.129, 0.093, 0.092],
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r5c3() {
  let cardName = 'r5c3';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['咖啡', '食品', '冰淇淋', '其他'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '13%',
      top: '12%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
        name: '咖啡',
        type: 'line',
        stack: '1',
        data: [0.0501, 0.282, 0.0632, 0.049, 0.0701, 0.0534, 0.049, 0.082, 0.033, 0.052, 0.0534, 0.0232],
      },
      {
        name: '食品',
        type: 'line',
        stack: '2',
        data: [0.0934, 0.08, 0.133, 0.0732, 0.0901, 0.122, 0.133, 0.132, 0.0934, 0.129, 0.232, 0.432],
      },
      {
        name: '冰淇淋',
        type: 'line',
        stack: '3',
        data: [-0.039, -0.0232, 0.0001, 0.0134, -0.129, 0.053, 0.032, 0.0201, -0.0134, -0.229, -0.043, 0.002],
      },
      {
        name: '其他',
        type: 'line',
        stack: '4',
        data: [0.072, 0.049, 0.0501, 0.0532, 0.052, 0.082, 0.0432, 0.0601, 0.0484, 0.049, 0.033, 0.0634],
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r6c1() {
  let cardName = 'r6c1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');
  cfs.echarts.correctHeight(cardName);

  let yDataHead = ['门店1072', '门店1061', '门店1007', '门店1033', '门店1011'];
  yDataHead = yDataHead.reverse();
  let yDataValue1 = [970480.77, 951071.15, 922539.02, 811834.34, 746887.59];
  yDataValue1 = yDataValue1.reverse();
  let yDataValue2 = [514354.81, 504067.71, 488945.68, 430272.2, 395850.42];
  yDataValue2 = yDataValue2.reverse();
  let option = {
    title: {
      text: '门店排名',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow',
      },
    },
    legend: {
      data: ['实际数', '预测数'],
      x: 'center',
      y: 'bottom',
      orient: 'horizontal',
    },
    grid: {
      left: '2%',
      right: 75,
      bottom: '10%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      // name: getLanguage('money2') + '：千元',
      // boundaryGap: [0, 0.01],
      // axisLabel: {
      //   formatter: function (val) {
      //     return format(val / 1000);
      //   },
      //   interval: 0,
      //   rotate: 40,
      // },
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
        name: '实际数',
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        label: {
          normal: {
            show: false,
            position: 'insideRight',
          },
        },
        data: yDataValue1,
        itemStyle: {
          normal: {
            // color: '#569ADA',
          },
        },
      },
      {
        name: '预测数',
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        label: {
          normal: {
            show: false,
            position: 'insideRight',
          },
        },
        data: yDataValue1,
        itemStyle: {
          normal: {
            // color: '#569ADA',
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

function r6c2() {
  let cardName = 'r6c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');
  cfs.echarts.correctHeight(cardName);

  let yDataHead = ['东区-线下', '南区线上-第三方平台', '东区-线上-自有平台', '北区-线下', '西区-线上-第三方'];
  yDataHead = yDataHead.reverse();
  let yDataValue1 = [14557211.54, 14266067.3, 13838085.29, 12177515.05, 11203313.85];
  yDataValue1 = yDataValue1.reverse();
  let yDataValue2 = [7715322.11, 7561015.67, 7334185.2, 6454082.98, 5937756.34];
  yDataValue2 = yDataValue2.reverse();
  let option = {
    title: {
      text: '区域+渠道排名',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow',
      },
    },
    legend: {
      data: ['实际数', '预测数'],
      x: 'center',
      y: 'bottom',
      orient: 'horizontal',
    },
    grid: {
      left: '2%',
      right: 75,
      bottom: '10%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      // name: getLanguage('money2') + '：千元',
      // boundaryGap: [0, 0.01],
      // axisLabel: {
      //   formatter: function (val) {
      //     return format(val / 1000);
      //   },
      //   interval: 0,
      //   rotate: 40,
      // },
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
        name: '实际数',
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        label: {
          normal: {
            show: false,
            position: 'insideRight',
          },
        },
        data: yDataValue1,
        itemStyle: {
          normal: {
            // color: '#569ADA',
          },
        },
      },
      {
        name: '预测数',
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        label: {
          normal: {
            show: false,
            position: 'insideRight',
          },
        },
        data: yDataValue1,
        itemStyle: {
          normal: {
            // color: '#569ADA',
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
    correctHeight: function (cardName) {
      let echartDom = $('#' + cardName)
        .find('.card-body')
        .find('.echart');
      let cardBodyDom = $('#' + cardName).find('.card-body');

      let _height = $(cardBodyDom).height();
      $(echartDom).height(_height);
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
