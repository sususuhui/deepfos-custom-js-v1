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
    <span style="font-size: 1.3rem">10,424,890</span>
  </div>
  <span class="badge bg-teal-800 badge-pill align-self-center ml-auto">18.11%</span>
</div>
<div class="d-flex">
  <div>
    <span class="font-size-sm opacity-75 mr-2">2021 预算</span>
    <span style="font-size: 1.3rem">12,312,843</span>
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
      <span style="font-size: 1.3rem">45,279</span>
    </div>
    <span class="badge bg-teal-800 badge-pill align-self-center ml-auto">+5.59%</span>
  </div>
  <div class="d-flex">
    <div>
      <span class="font-size-sm opacity-75 mr-2">2021 预算</span>
      <span style="font-size: 1.3rem">47,810</span>
    </div>
    <span class="align-self-center ml-auto" style="font-size: 1.3rem">费用</span>
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
        symbol: "none",
        sampling: "average",
        itemStyle: {
          color: "rgba(255,255,255,0.5)",
        },
        areaStyle: {
          color: "rgba(255,255,255,0.5)",
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
    <span style="font-size: 1.3rem">521,344</span>
  </div>
  <span class="badge bg-teal-800 badge-pill align-self-center ml-auto">11.02%</span>
</div>
<div class="d-flex">
  <div>
    <span class="font-size-sm opacity-75 mr-2">2021 预算</span>
    <span style="font-size: 1.3rem">615,642</span>
  </div>
  <span class="align-self-center ml-auto" style="font-size: 1.3rem">利润</span>
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

function r3c1(data, params) {
  var componentId = params.componentId;
  var html = `<table class="table table-hover datatable-highlight dataTable no-footer table-striped" >
                <tr>
                  <th style="padding:0 0 0 1.2rem;width:8rem;"></th>
                  <th>当前滚动预算版本</th>
                  <th>上月滚动预算版本</th>
                  <th></th>
                </tr>
                <tr>
                    <th style="padding:0 0 0 1.2rem;width:8rem;"></th>
                    <th>滚动预算2</th>
                    <th>滚动预算1</th>
                    <th>年初预算</th>
                </tr>
                <tr>
                    <td style="padding:0 0 0 1.2rem;">收入（万元）</td>
                    <td>
                        <span style="display: inline-block;width: 40%;height: 10px;background: #548235;"></span>
                        <span style="float: right;">1232</span>
                    </td>
                    <td>
                        <span style="display: inline-block;width: 20%;height: 10px;background: #385723;"></span>
                        <span style="float: right;">1245</span>
                    </td>
                    <td>
                        <span style="display: inline-block;width: 45%;height: 10px;background: #e2f0d9;"></span>
                        <span style="float: right;">1231</span>
                    </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0 1.2rem;">毛利（万元）</td>
                  <td>
                      <span style="display: inline-block;width: 30%;height: 10px;background: #70ad47;"></span>
                      <span style="float: right;">542</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 20%;height: 10px;background: #70ad47;"></span>
                      <span style="float: right;">548</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 15%;height: 10px;background: #385723;"></span>
                      <span style="float: right;">542</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0 1.2rem;">毛利率%</td>
                  <td>
                      <span style="display: inline-block;width: 10%;height: 10px;background: #70ad47;"></span>
                      <span style="float: right;">44%</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 10%;height: 10px;background: #70ad47;"></span>
                      <span style="float: right;">44%</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 10%;height: 10px;background: #70ad47;"></span>
                      <span style="float: right;">44%</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0 1.2rem;">费用（万元）</td>
                  <td>
                      <span style="display: inline-block;width: 60%;height: 10px;background: #c55a11;"></span>
                      <span style="float: right;">478</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 60%;height: 10px;background: #de5a00;"></span>
                      <span style="float: right;">478</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 55%;height: 10px;background: #c55a11;"></span>
                      <span style="float: right;">478</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0 1.2rem;">费用率%</td>
                  <td>
                      <span style="display: inline-block;width: 40%;height: 10px;background: #ffc000;"></span>
                      <span style="float: right;">39%</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 45%;height: 10px;background: #c55a11;"></span>
                      <span style="float: right;">38%</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 40%;height: 10px;background: #ffc000;"></span>
                      <span style="float: right;">39%</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0 1.2rem;">利润（万元）</td>
                  <td>
                      <span style="display: inline-block;width: 70%;height: 10px;background: #c55a11;"></span>
                      <span style="float: right;">64</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 65%;height: 10px;background: #ffe699;"></span>
                      <span style="float: right;">70</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 40%;height: 10px;background: #ffc000;"></span>
                      <span style="float: right;">64</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0 1.2rem;">利润率%</td>
                  <td>
                      <span style="display: inline-block;width: 60%;height: 10px;background: #c55a11;"></span>
                      <span style="float: right;">5%</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 65%;height: 10px;background: #ffe699;"></span>
                      <span style="float: right;">6%</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 50%;height: 10px;background: #ffc000;"></span>
                      <span style="float: right;">5%</span>
                  </td>
                </tr>
              </table>`;
  $('#chart-' + componentId).html(html);
}

function r3c2() {
  let cardName = 'r3c2';
  let headDom = cfs.card.head.getDom(cardName);
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let radiusDial1 = '80%';
  let radiusDial2 = '65%';
  let windowWidth = $(window).width();
  if (windowWidth < 1400) {
    radiusDial1 = '68%';
    radiusDial2 = '53%';
  }
  let searchVal = '主营业务收入';
  let qVal = 'Q1';
  let ProgressData1 = {
    Q1: {
      销售数量: 21.98,
      利润总额: 36.34,
      主营业务收入: 21.22,
      主营业务成本: 22.11,
      管销费用: 13.81,
    },
    Q2: {
      销售数量: 51.98,
      利润总额: 66.34,
      主营业务收入: 51.22,
      主营业务成本: 52.11,
      管销费用: 43.81,
    },
    Q3: {
      销售数量: 81.98,
      利润总额: 86.34,
      主营业务收入: 81.22,
      主营业务成本: 82.11,
      管销费用: 73.81,
    },
    Q4: {
      销售数量: 96.98,
      利润总额: 98.34,
      主营业务收入: 96.22,
      主营业务成本: 97.11,
      管销费用: 88.81,
    },
  };
  var ProgressData2 = {
    Q1: {
      销售数量: 23.49,
      利润总额: 44.96,
      主营业务收入: 21.1,
      主营业务成本: 24.3,
      管销费用: 13.5,
    },
    Q2: {
      销售数量: 53.49,
      利润总额: 74.96,
      主营业务收入: 51.1,
      主营业务成本: 54.3,
      管销费用: 43.5,
    },
    Q3: {
      销售数量: 83.49,
      利润总额: 84.96,
      主营业务收入: 81.1,
      主营业务成本: 84.3,
      管销费用: 73.5,
    },
    Q4: {
      销售数量: 98.49,
      利润总额: 99.96,
      主营业务收入: 96.1,
      主营业务成本: 99.3,
      管销费用: 88.5,
    },
  };

  let option = {
    tooltip: {
      formatter: '{a} <br/>{c}%',
    },
    series: [
      {
        name: '2021实际进度',
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
        data: [{ value: ProgressData2[qVal][searchVal], name: '2021实际进度' }],
      },
      {
        name: '2021预算进度',
        type: 'gauge',
        center: ['30%', '55%'],
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
        data: [{ value: ProgressData1[qVal][searchVal], name: '2021预算进度' }],
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

  let pieData = [
    { name: '配送收入', value: 2565.286371 },
    { name: '加盟费', value: 1886.833762 },
    { name: '事业部', value: 1886.833762 },
    { name: '区域大客户', value: 852.500416 },
  ];
  let nameArr = ['配送收入', '加盟费', '事业部', '区域大客户'];
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: function (data) {
        return data.seriesName + '<br/>' + data.name + ' : ' + format(data.value) + ' (' + data.percent + '%)';
      },
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: nameArr,
    },
    series: [
      {
        name: '投资金额占比',
        type: 'pie',
        center: ['54%', '50%'],
        // radius : '70%',
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
            },
            lableLine: {
              show: false,
            },
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

function r4c2() {
  let cardName = 'r4c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let yDataHead = ['国际事业部', '百果商业', '无人零售', '百果心享', '金融事业部', '百果品牌直营店', '大客户事业部', '果多美', '供应链设备收入'];
  yDataHead = yDataHead.reverse();
  let yDataValue1 = [593500, 479600, 457720, 1000000, 584540, 490000, 501090, 493000, 367980];
  yDataValue1 = yDataValue1.reverse();
  let yDataValue2 = [290680, 258930, 310900, 0, 383820, 0, 360000, 303090, 0];
  yDataValue2 = yDataValue2.reverse();
  let yDataValue3 = [327600, 379000, 270900, 0, 0, 450000, 0, 0, 379600];
  yDataValue3 = yDataValue3.reverse();
  let option = {
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
            html += params[int].axisValue + '<br>' + params[int].marker + params[int].seriesName + '：' + format((params[int].data / 1000).toFixed(4)) + '<br>';
          }
        }
        return html;
      },
    },
    // legend: {
    //   data: ['ERDOS', 'BLUE', '1980'],
    //   x: 'center',
    //   y: 'bottom',
    //   orient: 'horizontal',
    // },
    grid: {
      left: '2%',
      right: 75,
      bottom: '10%',
      top: '10',
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
        name: 'ERDOS',
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
      // {
      //   name: 'BLUE',
      //   type: 'bar',
      //   stack: '总量',
      //   barWidth: 15,
      //   label: {
      //     normal: {
      //       show: false,
      //       position: 'insideRight',
      //     },
      //   },
      //   data: yDataValue2,
      //   itemStyle: {
      //     normal: {
      //       color: '#F37825',
      //     },
      //   },
      // },
      // {
      //   name: '1980',
      //   type: 'bar',
      //   stack: '总量',
      //   barWidth: 15,
      //   label: {
      //     normal: {
      //       show: false,
      //       position: 'insideRight',
      //     },
      //   },
      //   data: yDataValue3,
      //   itemStyle: {
      //     normal: {
      //       color: '#516B91',
      //     },
      //   },
      // },
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

  let renderData = [
    { name: '已计划', value: 4358.542203 },
    { name: '已核销', value: 5206.607964 },
    { name: '结余费用', value: 10815.62552 },
  ];
  let nameArr = ['已计划', '已核销', '结余费用'];
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: function (data) {
        return data.seriesName + '<br/>' + data.name + ' : ' + format(data.value) + ' (' + data.percent + '%)';
      },
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: nameArr,
    },
    series: [
      {
        name: '项目已投情况',
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

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r5c2() {
  let cardName = 'r5c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let xDataHead = [202101, 202102, 202103, 202104, 202105, 202106, 202107, 202108, 202109, 202110, 202111, 202112];
  let chartData = [
    [1219, 1269, 1319, 1249, 1179, 1229, 1279, 1209, 1229, 1279, 1329, 1379],
    [482.8702346, 432.8702346, 482.8702346, 412.8702346, 342.8702346, 392.8702346, 442.8702346, 372.8702346, 392.8702346, 442.8702346, 492.8702346, 542.8702346],
    [644.134911, 694.134911, 744.134911, 674.134911, 604.134911, 654.134911, 704.134911, 634.134911, 654.134911, 704.134911, 754.134911, 804.134911],
    [897, 947, 997, 927, 857, 907, 957, 887, 907, 957, 1007, 1057],
    [264.2289747, 184.2289747, 204.2289747, 184.2289747, 184.2289747, 184.2289747, 384.2289747, 244.2289747, 284.2289747, 384.2289747, 184.2289747, 204.2289747],
  ];
  let aMoney = [21.0, 25.0, 18.0, 19.0, 31.0, 33.0, 28.0, 31.0, 19.0, 24, 23, 18];
  let lenged = ['租赁费', '商场费用', '广告宣传', '薪酬福利', '其他'];
  let seriesArr = [];
  let colors = ['rgb(86,154,218)', 'rgb(165,165,165)', 'rgb(235,125,49)', 'rgb(81,107,145)', 'rgb(255,192,0)', '#75d874', '#e0bc78', '#dc77dc', '#72b362'];

  lenged.forEach(function (v, i) {
    seriesArr.push({
      name: v,
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
      data: chartData[i],
      itemStyle: {
        normal: {
          color: colors[i],
        },
      },
    });
  });

  seriesArr.push({
    name: '费率',
    type: 'line',
    yAxisIndex: 1,
    color: '#ED7D31',
    data: aMoney,
    smooth: false,
  });

  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow',
      },
      formatter: function (params) {
        let html = '';
        if (params.length > 0) {
          for (var int = 0; int < params.length; int++) {
            html += params[int].axisValue + '<br>' + params[int].marker + params[int].seriesName + '：' + format(params[int].data.toFixed(4)) + '<br>';
          }
        }
        return html;
      },
    },
    legend: {
      data: ['租赁费', '商场费用', '广告宣传', '薪酬福利', '其他', '费率'],
      x: 'center',
      y: 'top',
      orient: 'horizontal',
    },
    grid: {
      left: '2%',
      right: 75,
      bottom: '10%',
      containLabel: true,
    },
    // dataZoom: [
    // 	{
    // 		// startValue: xDataHead[0]
    // 		filterMode: 'filter',
    // 		startValue: 0,
    // 		endValue: Number(xDataHead.length / 3),
    // 	},
    // 	{
    // 		type: 'slider',
    // 	},
    // ],
    yAxis: [
      {
        type: 'value',
        name: getLanguage('money2') + '：千元',
        boundaryGap: [0, 0.01],
        axisLabel: {
          formatter: function (val) {
            return format(val);
          },
          interval: 0,
          rotate: 40,
        },
      },
      {
        type: 'value',
        min: 0,
        // max: 8.22,
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
    series: seriesArr,
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
