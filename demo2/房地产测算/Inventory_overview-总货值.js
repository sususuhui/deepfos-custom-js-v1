const GetRandomNum = (Min, Max) => {
  var Range = Max - Min;
  var Rand = Math.random();
  return Min + Math.round(Rand * Range);
};

let totalData = {
  province: [
    { name: '上海', value: 36546 },
    { name: '北京', value: 24234 },
    { name: '广东', value: 17057 },
    { name: '江苏', value: 20057 },
    { name: '山东', value: 17057 },
    { name: '浙江', value: 25676 },
    { name: '安徽', value: 12348 },
    { name: '湖南', value: 15057 },
    { name: '四川', value: 28787 },
    { name: '陕西', value: 21132 },
  ],
  city: [
    {
      name: '苏州市',
      value: [120.62, 31.2994, 3747],
    },
    {
      name: '杭州市',
      value: [120.154, 30.2875, 4177],
    },
    {
      name: '成都市',
      value: [104.066, 30.6595, 14060],
    },
    {
      name: '南京市',
      value: [118.767, 32.0415, 3973],
    },
    {
      name: '西安市',
      value: [108.948, 34.2632, 4928],
    },
    {
      name: '深圳市',
      value: [114.086, 22.547, 5511],
    },
    {
      name: '合肥市',
      value: [117.283, 31.8612, 4757],
    },
    {
      name: '济南市',
      value: [117.001, 36.6758, 5239],
    },
  ],

  r1c2: {},

  r1c2_mini_1: [],

  r1c2_mini_2: [],

  r1c2_mini_3: [],

  r2: [],
};

const randomTotalData = () => {
  totalData.r1c2 = {
    total: GetRandomNum(3000, 9999),
    未开工: [
      GetRandomNum(100, 200),
      GetRandomNum(100, 200),
      GetRandomNum(0, 20),
    ],
    未达预售: [
      GetRandomNum(100, 200),
      GetRandomNum(100, 200),
      GetRandomNum(0, 20),
    ],
    未取证: [
      GetRandomNum(100, 200),
      GetRandomNum(100, 200),
      GetRandomNum(0, 20),
    ],
    取证未售: [
      GetRandomNum(100, 200),
      GetRandomNum(100, 200),
      GetRandomNum(0, 20),
    ],
    已售: [GetRandomNum(100, 200), GetRandomNum(100, 200), GetRandomNum(0, 20)],
    供货: [GetRandomNum(100, 200), GetRandomNum(60, 130)],
    签约: [GetRandomNum(100, 200), GetRandomNum(60, 130)],
    回款: [GetRandomNum(100, 200), GetRandomNum(60, 130)],
  };

  totalData.r1c2_mini_1 = [
    ['label', 'value'],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(80, 84)],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(85, 89)],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(90, 94)],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(95, 110)],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(110, 140)],
  ];
  totalData.r1c2_mini_2 = [
    ['label', 'value'],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(80, 84)],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(85, 89)],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(90, 94)],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(95, 110)],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(110, 140)],
  ];

  totalData.r1c2_mini_3 = [
    ['label', 'value'],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(80, 84)],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(85, 89)],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(90, 94)],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(95, 110)],
    ['项目' + GetRandomNum(1, 100), GetRandomNum(110, 140)],
  ];

  totalData.r2 = [
    ['product', '供货达成率', '签约达成率', '回款达成率'],
    ['1月', GetRandomNum(1, 120), GetRandomNum(1, 120), GetRandomNum(1, 120)],
    ['2月', GetRandomNum(1, 120), GetRandomNum(1, 120), GetRandomNum(1, 120)],
    ['3月', GetRandomNum(1, 120), GetRandomNum(1, 120), GetRandomNum(1, 120)],
    ['4月', GetRandomNum(1, 120), GetRandomNum(1, 120), GetRandomNum(1, 120)],
    ['5月', GetRandomNum(1, 120), GetRandomNum(1, 120), GetRandomNum(1, 120)],
    ['6月', GetRandomNum(1, 120), GetRandomNum(1, 120), GetRandomNum(1, 120)],
    ['7月', GetRandomNum(1, 120), GetRandomNum(1, 120), GetRandomNum(1, 120)],
    ['8月', GetRandomNum(1, 120), GetRandomNum(1, 120), GetRandomNum(1, 120)],
    ['9月', GetRandomNum(1, 120), GetRandomNum(1, 120), GetRandomNum(1, 120)],
    ['10月', GetRandomNum(1, 120), GetRandomNum(1, 120), GetRandomNum(1, 120)],
    ['11月', GetRandomNum(1, 120), GetRandomNum(1, 120), GetRandomNum(1, 120)],
    ['12月', GetRandomNum(1, 120), GetRandomNum(1, 120), GetRandomNum(1, 120)],
  ];

  // totalData.r2= [
  //   ['product', '供货达成率', '签约达成率', '回款达成率'],
  //   ['1月', '56.51', '113.91', '120.41'],
  //   ['2月', '86.08', '98.50', '92.51'],
  //   ['3月', '131.13', '74.67', '97.76'],
  //   ['4月', '123.11', '117.64', '82.43'],
  //   ['5月', '79.52', '126.68', '129.33'],
  //   ['6月', '105.16', '98.62', '77.86'],
  //   ['7月', '141.50', '85.74', '122.42'],
  //   ['8月', '123.23', '61.42', '145.02'],
  //   ['9月', '142.58', '112.12', '126.51'],
  //   ['10月', '106.55', '82.78', '60.11'],
  //   ['11月', '88.88', '52.99', '106.31'],
  //   ['12月', '64.50', '78.54', '132.63'],
  // ],
};

const r1c1 = () => {
  let cardName = 'r1c1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let itemStyle = {
    normal: {
      borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    emphasis: {
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowBlur: 20,
      borderWidth: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  let option = {
    tooltip: {},

    grid: {
      left: '30%',
      containLabel: true,
    },
    visualMap: {
      min: 0,
      max: 40000,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
      seriesIndex: 0,
    },
    geo: {
      map: 'china',
      show: true,
      roam: true,
      label: {
        emphasis: {
          show: false,
        },
      },
    },
    series: [
      {
        name: 'NLA',
        type: 'map',
        map: 'china',
        geoIndex: 0,
        itemStyle: itemStyle,
        showLegendSymbol: false,
        // zoom: 10,
        // center: [90.97, 36.71],
        roam: true,
        label: {
          normal: {
            show: false,
            rotate: 40,
            formatter: '{b}：{value|{c}}',
            // position: 'inside',
            backgroundColor: '#fff',
            padding: [3, 5],
            borderRadius: 3,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.5)',
            color: '#777',
            rich: {
              value: {
                color: '#019D2D',
                fontSize: 14,
                // fontWeight: 'bold'
                // textBorderWidth: 2,
                // textBorderColor: '#000'
              },
            },
          },
          emphasis: {
            show: false,
          },
        },
        data: totalData.province,
      },
      {
        name: '城市',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: totalData.city,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false,
          },
          emphasis: {
            show: true,
          },
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke',
        },
        hoverAnimation: true,
        itemStyle: {
          normal: {
            color: '#f4e925',
            shadowBlur: 10,
            shadowColor: '#333',
          },
        },
        zlevel: 1,
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }

  Cus_echarts[cardName].off('click');
  Cus_echarts[cardName].on('click', (params) => {
    if (!_.isUndefined(params.data)) {
      if (params.seriesIndex === 0) {
        console.log(params);
        r1c2();
        r2();
      }

      if (params.seriesIndex === 1) {
        console.log(params);
        r1c2();
        r2();
      }
    }
  });
};

const toBuInfo = () => {
  window.location.href =
    '../formlistPage/formlistPage.html?param1=LSTE9CJ4KS4NPS&appid=90';
};

/**
 * 千分符
 * @param {*} num
 * @returns
 */
const numFormat = (num) => {
  let RNum = Number(num);
  let c = RNum.toString().indexOf(".") !== -1 ? RNum.toLocaleString() : RNum.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  return c;
};

const r1c2 = () => {
  let cardName = 'r1c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  $('#' + cardName).css({
    'background-color': '#EEEDED',
    'box-shadow': 'unset',
  });
  cfs.card.body.getDom(cardName).css('padding', '0');
  headDom.find('.card-header').css('display', 'none');
  cfs.echarts.correctHeight(cardName);

  randomTotalData();

  let html = `
  <div class="row dataSheet pt-2 row_extra_1" style="height: 10%">
    <div class="col">
      <div class="text-center" style="height:100%">
          <span style="font-size: 18px;margin-right: 50px">总货值</span><span style="font-size: 28px;font-weight: 500;">${numFormat(totalData.r1c2.total)} 亿</span>
      </div>
    </div>
  </div>

  <div class="row dataSheet pb-2 row_extra_1" style="height: 30%">
    <div class="col">
      <div class="card text-center" style="height:100%;cursor: pointer;" onclick="toBuInfo()">
        <div class="card-body">
          <h4>未开工</h4>
          <div class="mb-1">货值 <span class="font-weight-semibold">${
            totalData.r1c2['未开工'][0]
          }</span></div>
          <div class="mb-1">项目数 <span class="font-weight-semibold">${
            totalData.r1c2['未开工'][1]
          }</span></div>
          <div class="mb-1">新增项目数据 <span class="font-weight-semibold">${
            totalData.r1c2['未开工'][2]
          }</span></div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-center" style="height:100%;cursor: pointer;" onclick="toBuInfo()">
        <div class="card-body">
          <h4>未达预售</h4>
          <div class="mb-1">货值 <span class="font-weight-semibold">${
            totalData.r1c2['未达预售'][0]
          }</span></div>
          <div class="mb-1">项目数 <span class="font-weight-semibold">${
            totalData.r1c2['未达预售'][1]
          }</span></div>
          <div class="mb-1">新增项目数据 <span class="font-weight-semibold">${
            totalData.r1c2['未达预售'][2]
          }</span></div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-center" style="height:100%;cursor: pointer;" onclick="toBuInfo()">
        <div class="card-body">
          <h4>未取证</h4>
          <div class="mb-1">货值 <span class="font-weight-semibold">${
            totalData.r1c2['未取证'][0]
          }</span></div>
          <div class="mb-1">项目数 <span class="font-weight-semibold">${
            totalData.r1c2['未取证'][1]
          }</span></div>
          <div class="mb-1">新增项目数据 <span class="font-weight-semibold">${
            totalData.r1c2['未取证'][2]
          }</span></div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-center" style="height:100%;cursor: pointer;" onclick="toBuInfo()">
        <div class="card-body">
          <h4>取证未售</h4>
          <div class="mb-1">货值 <span class="font-weight-semibold">${
            totalData.r1c2['取证未售'][0]
          }</span></div>
          <div class="mb-1">项目数 <span class="font-weight-semibold">${
            totalData.r1c2['取证未售'][1]
          }</span></div>
          <div class="mb-1">新增项目数据 <span class="font-weight-semibold">${
            totalData.r1c2['取证未售'][2]
          }</span></div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-center" style="height:100%;cursor: pointer;" onclick="toBuInfo()">
        <div class="card-body">
          <h4>已售</h4>
          <div class="mb-1">货值 <span class="font-weight-semibold">${
            totalData.r1c2['已售'][0]
          }</span></div>
          <div class="mb-1">项目数 <span class="font-weight-semibold">${
            totalData.r1c2['已售'][1]
          }</span></div>
          <div class="mb-1">新增项目数据 <span class="font-weight-semibold">${
            totalData.r1c2['已售'][2]
          }</span></div>
        </div>
      </div>
    </div>

  </div>



  <div class="row dataSheet pt-2 row_extra_1" style="height: 60%">
    <div class="col">
      <div class="card text-center" style="height:100%">
        <div style="padding: 20px;background-color:${
          totalData.r1c2['供货'][1] > 100
            ? '#a0d911'
            : totalData.r1c2['供货'][1] < 90
            ? '#fa541c'
            : '#ffec3d'
        };">
          <h4>供货</h4>
          <div class="mb-1">${totalData.r1c2['供货'][0]}</div>
          <div class="mb-1">达成率 <span class="font-weight-semibold">${
            totalData.r1c2['供货'][1]
          }%</span></div>
        </div>
        <div id="r1c2_mini_1" style="width:100%;position: absolute;bottom: 0;height: 60%"></div>
      </div>
    </div>

    <div class="col">
      <div class="card text-center" style="height:100%">
        <div style="padding: 20px;background-color:${
          totalData.r1c2['签约'][1] > 100
            ? '#a0d911'
            : totalData.r1c2['签约'][1] < 90
            ? '#fa541c'
            : '#ffec3d'
        };">
          <h4>签约</h4>
          <div class="mb-1">${totalData.r1c2['签约'][0]}</div>
          <div class="mb-1">达成率 <span class="font-weight-semibold">${
            totalData.r1c2['签约'][1]
          }%</span></div>
        </div>
        <div id="r1c2_mini_2" style="width:100%;position: absolute;bottom: 0;height: 60%"></div>
      </div>
    </div>

    <div class="col">
      <div class="card text-center" style="height:100%">
        <div style="padding: 20px;background-color:${
          totalData.r1c2['回款'][1] > 100
            ? '#a0d911'
            : totalData.r1c2['回款'][1] < 90
            ? '#fa541c'
            : '#ffec3d'
        };">
          <h4>回款</h4>
          <div class="mb-1">${totalData.r1c2['回款'][0]}</div>
          <div class="mb-1">达成率 <span class="font-weight-semibold">${
            totalData.r1c2['回款'][1]
          }%</span></div>
        </div>
        <div id="r1c2_mini_3" style="width:100%;position: absolute;bottom: 0;height: 60%"></div>
      </div>
    </div>

  </div>
  `;
  echartDom.html(html);

  r1c2_mini_1();
  r1c2_mini_2();
  r1c2_mini_3();
};

const r1c2_mini_1 = () => {
  let cardName_mini = 'r1c2_mini_1';
  let miniEchartDom = $('#r1c2_mini_1');

  let option = {
    dataset: {
      source: totalData.r1c2_mini_1,
    },
    title: {
      text: '供货达成率 top5',
      left: 'center',
    },
    grid: {
      top: 35,
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%',
      },
    },
    yAxis: { type: 'category' },
    series: [
      {
        type: 'bar',
        encode: {
          x: 'value',
          y: 'label',
        },
      },
    ],
  };

  Cus_echarts[cardName_mini] = cfs.echarts.init(
    miniEchartDom,
    Cus_theme,
    option
  );
};

const r1c2_mini_2 = () => {
  let cardName_mini = 'r1c2_mini_2';
  let miniEchartDom = $('#r1c2_mini_2');

  let option = {
    dataset: {
      source: totalData.r1c2_mini_2,
    },
    title: {
      text: '签约达成率 top5',
      left: 'center',
    },
    grid: {
      top: 35,
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%',
      },
    },
    yAxis: { type: 'category' },
    series: [
      {
        type: 'bar',
        encode: {
          x: 'value',
          y: 'label',
        },
      },
    ],
  };

  Cus_echarts[cardName_mini] = cfs.echarts.init(
    miniEchartDom,
    Cus_theme,
    option
  );
};

const r1c2_mini_3 = () => {
  let cardName_mini = 'r1c2_mini_3';
  let miniEchartDom = $('#r1c2_mini_3');

  let option = {
    dataset: {
      source: totalData.r1c2_mini_3,
    },
    title: {
      text: '回款达成率 top5',
      left: 'center',
    },
    grid: {
      top: 35,
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%',
      },
    },
    yAxis: { type: 'category' },
    series: [
      {
        type: 'bar',
        encode: {
          x: 'value',
          y: 'label',
        },
      },
    ],
  };

  Cus_echarts[cardName_mini] = cfs.echarts.init(
    miniEchartDom,
    Cus_theme,
    option
  );
};

const r2 = () => {
  randomTotalData();

  let cardName = 'r2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let option = {
    tooltip: {
      trigger: 'axis',
      formatter: function (data) {
        let res = '';
        data[0].dimensionNames.forEach((value, key) => {
          if (key > 0) {
            res += `${value}：${data[0].data[key]}%<br/>`;
          }
        });
        return res;
      },
    },
    dataset: {
      source: totalData.r2,
    },
    legend: {
      y: 'bottom',
    },
    grid: {
      top: '3%',
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%',
      },
    },
    series: [
      {
        type: 'line',
      },
      {
        type: 'line',
      },
      {
        type: 'line',
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

let Cus_echarts = {};
let Cus_theme = 'westeros';
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
      sendRequest: function (
        url,
        type,
        paramObj,
        json = false,
        returnAll = false
      ) {
        var data = json ? JSON.stringify(paramObj) : paramObj;
        var contentType =
          'application/' + (json ? 'json' : 'x-www-form-urlencoded');
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
            resObj.err.Message =
              XMLHttpRequest.responseJSON.Message.substr(0, 200) ||
              XMLHttpRequest.statusText.substr(0, 200);
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
      getAccessDimensionMemberLevel: function (
        dimName,
        exp = '',
        name = '#root',
        id = '1',
        searchValue = ''
      ) {
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
        return cfs.request.common.sendRequest(
          url,
          'POST',
          paramObj,
          false,
          true
        );
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
        return cfs.request.common.sendRequest(
          url,
          'POST',
          paramObj,
          true,
          true
        );
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
          list[i] =
            '<a index = "' +
            i +
            '" class="dropdown-item" href="#">' +
            list[i] +
            '</a>';
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
      createSheetData: function (
        dimList,
        dimMap,
        dataTables,
        startIndex = 1,
        maxLength = 10000
      ) {
        var sheetDataObj = { rowDatas: [] };
        if (dataTables == undefined || Object.keys(dataTables).length == 0)
          return sheetDataObj;
        //准备表头所在列和维度名的map
        var colMap = {};
        for (var i = 0; i < dataTables[0].length; i++) {
          var dimName =
            dimMap[dataTables[0][i].value] || dataTables[0][i].value;
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
            rowDatasArr.push({
              columnDimensionMemberMap: columnDimensionMemberMap,
            });
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
