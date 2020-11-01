let metaReferrer = document.createElement('meta');
metaReferrer.setAttribute('name', 'referrer');
metaReferrer.setAttribute('content', 'no-referrer');
document.head.appendChild(metaReferrer);

// 引入bmap
let bmap_Script = document.createElement('script');
bmap_Script.setAttribute('type', 'text/javascript');
bmap_Script.setAttribute('src', 'http://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=NiGaA3XdWH2IqZB0ohynxvB9yh492DY2');
document.head.appendChild(bmap_Script);

let bmap_Css = document.createElement('script');
bmap_Css.setAttribute('rel', 'stylesheet');
bmap_Css.setAttribute('type', 'text/css');
bmap_Css.setAttribute('src', 'http://api.map.baidu.com/res/webgl/10/bmap.css');
document.head.appendChild(bmap_Css);

let style = document.createElement('style');
style.innerHTML = `
.anchorBL {
  display: none;
  }
`;
document.head.appendChild(style);

var Cus_theme = 'westeros';
var Cus_echarts = {};
function renderMap() {
  let cardName = 'Map2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  let html = `
  <div class="row dataSheet" style="height:100%;">
    <div class="col-6 px-0" style="height: 100%;overflow-y: auto;">
      <div class="table-responsive">
        <table class="table" id="mapTable">
          <thead><tr></tr></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
    <div class="col-6 px-0" id="mapDrill">
    </div>
  </div>`;
  echartDom.html(html);

  mapTable();
  map();

  console.log('-----------renderMap-----------');
}

const map = (params) => {
  initChart();

  async function initChart() {
    let chart = echarts.init(document.getElementById('mapDrill'));
    let alladcode = await getGeoJson('all.json');
    let chinaGeoJson = await getGeoJson('100000_full.json');
    initEcharts(chinaGeoJson, '全国', chart, alladcode);
  }
};

//获取地图json数据
async function getGeoJson(jsonName) {
  const publicUrl = 'https://geo.datav.aliyun.com/areas_v2/bound/';

  let url = publicUrl + jsonName;
  let config = {
    method: 'GET',
    url: url,
  };
  let res = await axios(config);
  return res.data;
}

//echarts绘图
const initEcharts = (geoJson, name, chart, alladcode) => {
  echarts.registerMap(name, geoJson);
  let option = {
    series: [
      {
        type: 'map',
        map: name,
        itemStyle: {
          areaColor: '#88B9E1',
        },
      },
    ],
  };
  chart.setOption(option);
  // 解绑click事件
  chart.off('click');
  //给地图添加监听事件
  chart.on('click', (params) => {
    let clickRegionObj = alladcode.filter((areaJson) => areaJson.name === params.name)[0];

    let clickRegionCode = clickRegionObj.adcode;
    let clickRegionLevel = clickRegionObj.level;
    let clickRegionLng = clickRegionObj.lng;
    let clickRegionLat = clickRegionObj.lat;
    let clickRegionName = clickRegionObj.name;

    if (clickRegionLevel === 'city') {
      bdMap(clickRegionLng, clickRegionLat);
      let mapCode = { Region: clickRegionCode };
      mapTable(mapCode);
      return;
    }

    let municipality = ['上海市', '北京市'];
    if (municipality.includes(clickRegionName)) {
      bdMap(clickRegionLng, clickRegionLat);
      return;
    }

    let mapCode = { Region: clickRegionCode };
    mapTable(mapCode);

    getGeoJson(clickRegionCode + '_full.json')
      .then((regionGeoJson) => initEcharts(regionGeoJson, params.name, chart, alladcode))
      .catch((err) => {
        // getGeoJson('100000_full.json').then((chinaGeoJson) => initEcharts(chinaGeoJson, '全国', chart, alladcode));
        console.log('地图错误');
      });
  });
};

const bdMap = (lng, lat) => {
  var map = new BMapGL.Map('mapDrill'); // 创建Map实例
  map.centerAndZoom(new BMapGL.Point(lng, lat), 11); // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true);
};

const mapTable = async (params) => {
  const demoData = await getData(params);
  const areaData = JSON.parse(demoData.result);
  console.log(areaData);

  let theadHtml = ``;
  areaData.FormColumns.forEach((val) => {
    theadHtml += `<th>${val.Description}</th>`;
  });
  $('#mapTable thead tr').html(theadHtml);

  let tbodyHtml = ``;
  areaData.Form.forEach((FormVal) => {
    let formRowHtml = `<tr mapCode="${FormVal.MapCode}" style="cursor: pointer;">`;
    areaData.FormColumns.forEach((FormColumnsVal) => {
      formRowHtml += `<td>${FormVal[FormColumnsVal.Column]}</td>`;
    });
    formRowHtml += `</tr>`;
    tbodyHtml += formRowHtml;
  });
  $('#mapTable tbody').html(tbodyHtml);

  // table里的每行tr点击进入对应省份下面的市地图
  $('#mapTable tbody tr').each((i, v) => {
    const trObj = $(v);
    trObj.on('click', async () => {
      if (typeof trObj.attr('mapCode') == 'undefined') return;
      let mapCode = { Region: parseInt(trObj.attr('mapCode')) };
      mapTable(mapCode);

      if (areaData.Level == 'Province') {
        let alladcode = await getGeoJson('all.json');
        let clickRegionObj = alladcode.filter((areaJson) => areaJson.adcode === parseInt(trObj.attr('mapCode')))[0];
        let clickRegionLng = clickRegionObj.lng;
        let clickRegionLat = clickRegionObj.lat;
        bdMap(clickRegionLng, clickRegionLat);
      } else {
        let chart = echarts.init(document.getElementById('mapDrill'));
        let alladcode = await getGeoJson('all.json');
        getGeoJson(parseInt(trObj.attr('mapCode')) + '_full.json')
          .then((regionGeoJson) => initEcharts(regionGeoJson, mapCode, chart, alladcode))
          .catch((err) => {
            // getGeoJson('100000_full.json').then((chinaGeoJson) => initEcharts(chinaGeoJson, '全国', chart, alladcode));
            console.log('地图错误');
          });
      }
    });
  });
};

const getData = (params) => {
  return CommonRequest({
    url: `${Api.python}start/web`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      pyName: 'map_interface_store_data',
      params: params || { Region: 100000 },
      ...userinfoParams2,
    }),
  });
};

function initEchart(id, option) {
  const chart = echarts.init(document.getElementById('chart-' + id));
  chart.clear();
  chart.setOption(option);
  var dom = $('[data-id="' + id + '"]');
  dom.find('.card-title').addClass('font-weight-bold');
}

function dealSheetData(data) {
  var xAxis = [];
  var series = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      xAxis.push(v.sdd[0].n);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    var arr1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
    // i==0 || i==1 || i==2 || i==3 || i==4
    if (arr1.includes(i)) {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? floatNum.accMul(cellVal.d.toFixed(4), 1) : '-');
      });
      series.push(itemArr);
    } else {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? cellVal.d.toFixed(4) : '-');
      });
      series.push(itemArr);
    }
  });

  return {
    series,
    xAxis,
  };
}

function renderBarEchart1(data, params) {
  var componentId = params.componentId;

  var chartData = dealSheetData(data);

  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    // color:['#004ea1','#004fb6','#498ace','#88b9e1','#a9cee8'],
    color: ['#004ea1', '#a9cee8'],
    legend: {
      data: ['存量店', '新店'],
    },
    barCategoryGap: '50%',
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['2019', '2020', '2021'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '存量店',
        type: 'bar',
        stack: '广告',
        data: [152, 182, 220],
      },
      {
        name: '新店',
        type: 'bar',
        stack: '广告',
        data: [10, 20, 32],
      },
    ],
  };
  initEchart(componentId, option);
}

function renderBarEchart2(data, params) {
  var componentId = params.componentId;

  var chartData = dealSheetData(data);
  var xAxisData = [];
  var data1 = [];
  var data2 = [];
  for (var i = 0; i < 100; i++) {
    xAxisData.push('开业' + i + '个月');
    data1.push(Math.random() * 20);
    data2.push(Math.random() * 20);
  }

  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    color: ['#a9cee8', '#88b9e1', '#498ace', '#004fb6', '#004ea1'],
    // color:['#004ea1','#004fb6','#498ace','#88b9e1','#a9cee8'],
    legend: {
      data: ['0-1', '1-2', '2-3', '3-4', '4年以上'],
    },
    barCategoryGap: '50%',
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['2019', '2020', '2021'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '0-1',
        type: 'bar',
        stack: '0-1',
        data: [40, 30, 32],
      },
      {
        name: '1-2',
        type: 'bar',
        stack: '1-2',
        data: [30, 40, 30],
      },
      {
        name: '2-3',
        type: 'bar',
        stack: '2-3',
        data: [30, 30, 40],
      },
      {
        name: '3-4',
        type: 'bar',
        stack: '3-4',
        data: [28, 30, 30],
      },
      {
        name: '4年以上',
        type: 'bar',
        stack: '4年以上',
        data: [62, 90, 120],
      },
    ],
  };

  initEchart(componentId, option);
}

function renderBarEchart3(data, params) {
  var componentId = params.componentId;

  var chartData = dealSheetData(data);
  var xAxisData = [];
  var data1 = [];
  var data2 = [];
  for (var i = 0; i < 100; i++) {
    xAxisData.push('开业' + i + '个月');
    data1.push(Math.random() * 20);
    data2.push(Math.random() * 20);
  }

  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['营业期', '装修期', '闭店期', '计划期', '开办期'],
    },
    // color:['#a9cee8','#88b9e1','#498ace','#004fb6','#004ea1'],
    color: ['#004ea1', '#004fb6', '#498ace', '#88b9e1', '#a9cee8'],
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
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 232,
            name: '营业期',
          },
          {
            value: 5,
            name: '装修期',
          },
          {
            value: 15,
            name: '闭店期',
          },
          {
            value: 10,
            name: '计划期',
          },
          {
            value: 14,
            name: '开办期',
          },
        ],
      },
    ],
  };

  initEchart(componentId, option);
}

function renderBarEchart4(data, params) {
  var componentId = params.componentId;

  var chartData = dealSheetData(data);
  //     var xAxisData = [];
  //     var data1 = [];
  //     var data2 = [];
  //     for (var i = 0; i < 100; i++) {
  //     xAxisData.push('开业' + i + '个月');
  //     data1.push(Math.random() * 20);
  //     data2.push(Math.random() * 20);
  // }

  var option = {
    // color:['#a9cee8','#88b9e1','#498ace','#004fb6','#004ea1'],
    color: ['#004ea1', '#004fb6', '#498ace', '#88b9e1', '#a9cee8'],
    series: [
      {
        type: 'treemap',
        leafDepth: 1,
        data: [
          {
            name: '西区',
            value: 62,
            label: {
              fontSize: 16,
              color: '#fff',
              show: true,
              position: [5, 5],
              formatter: function (params) {
                var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                return arr.join('\n\n');
              },
              rich: {
                association: {
                  fontSize: 16,
                  color: '#fff',
                },
                peoNum: {
                  fontSize: 30,
                  color: '#fff',
                  fontFamily: 'liquidCrystal',
                },
              },
            },
            children: [
              {
                name: '四川',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 24,
              },
              {
                name: '甘肃',
                label: {
                  fontSize: 14,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 26,
              },
              {
                name: '云南',
                label: {
                  fontSize: 15,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 16,
              },
              {
                name: '贵州',
                label: {
                  fontSize: 19,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 16,
              },
            ],
          },
          {
            name: '东区',
            label: {
              fontSize: 16,
              color: '#fff',
              show: true,
              position: [5, 5],
              formatter: function (params) {
                var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                return arr.join('\n\n');
              },
              rich: {
                association: {
                  fontSize: 16,
                  color: '#fff',
                },
                peoNum: {
                  fontSize: 30,
                  color: '#fff',
                  fontFamily: 'liquidCrystal',
                },
              },
            },
            value: 100,
            children: [
              {
                name: '上海',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 83,
                children: [
                  {
                    name: '宝山',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 20,
                  },
                  {
                    name: '徐汇',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 20,
                  },
                  {
                    name: '静安',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 10,
                  },
                  {
                    name: '黄埔',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 24,
                  },
                  {
                    name: '浦东',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 9,
                  },
                ],
              },
              {
                name: '江苏',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 17,
              },
            ],
          },
          {
            name: '南区',
            label: {
              fontSize: 16,
              color: '#fff',
              show: true,
              position: [5, 5],
              formatter: function (params) {
                var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                return arr.join('\n\n');
              },
              rich: {
                association: {
                  fontSize: 16,
                  color: '#fff',
                },
                peoNum: {
                  fontSize: 30,
                  color: '#fff',
                  fontFamily: 'liquidCrystal',
                },
              },
            },
            value: 48,
            children: [
              {
                name: '广州',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 24,
              },
              {
                name: '湖南',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 12,
              },
              {
                name: '湖北',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 6,
              },
              {
                name: '广西',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 6,
              },
            ],
          },
          {
            name: '北区',
            label: {
              fontSize: 16,
              color: '#fff',
              show: true,
              position: [5, 5],
              formatter: function (params) {
                var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                return arr.join('\n\n');
              },
              rich: {
                association: {
                  fontSize: 16,
                  color: '#fff',
                },
                peoNum: {
                  fontSize: 30,
                  color: '#fff',
                  fontFamily: 'liquidCrystal',
                },
              },
            },
            value: 42,
            children: [
              {
                name: '北京',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 24,
                children: [
                  {
                    name: '东城',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 8,
                  },
                  {
                    name: '西城',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 8,
                  },
                  {
                    name: '石景山',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 4,
                  },
                  {
                    name: '朝阳',
                    label: {
                      fontSize: 16,
                      color: '#fff',
                      show: true,
                      position: [5, 5],
                      formatter: function (params) {
                        var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                        return arr.join('\n\n');
                      },
                      rich: {
                        association: {
                          fontSize: 16,
                          color: '#fff',
                        },
                        peoNum: {
                          fontSize: 30,
                          color: '#fff',
                          fontFamily: 'liquidCrystal',
                        },
                      },
                    },
                    value: 4,
                  },
                ],
              },
              {
                name: '湖北',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 7,
              },
              {
                name: '天津',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 5,
              },
              {
                name: '黑龙江',
                label: {
                  fontSize: 16,
                  color: '#fff',
                  show: true,
                  position: [5, 5],
                  formatter: function (params) {
                    var arr = ['{association|' + params.data.name + '}', '{peoNum|' + params.data.value + '}' + '家'];
                    return arr.join('\n\n');
                  },
                  rich: {
                    association: {
                      fontSize: 16,
                      color: '#fff',
                    },
                    peoNum: {
                      fontSize: 30,
                      color: '#fff',
                      fontFamily: 'liquidCrystal',
                    },
                  },
                },
                value: 6,
              },
            ],
          },
        ],
      },
    ],
  };

  initEchart(componentId, option);
}

$(function () {
  r1c1();
  r1c2();
});

function r1c1() {
  // let a = $('[data-name=StoreAge_number]').prop('outerHTML');
  let cardName = 'StoreCategory';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  // echart div高度
  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  // 增加容器dom
  let table = `
   <div class="table-responsive">
   <table class="table">
     <thead>
       <tr>
         <th scope="col">店龄</th>
         <th scope="col">2019</th>
         <th scope="col">2020</th>
         <th scope="col">2021</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td><1</td>
         <td>40</td>
         <td>30</td>
         <td>32</td>
       </tr>
       <tr>
         <td>1-2</td>
         <td>30</td>
         <td>40</td>
         <td>30</td>
       </tr>
       <tr>
         <td>2-3</td>
         <td>30</td>
         <td>30</td>
         <td>40</td>
       </tr>
       <tr>
         <td>3-4</td>
         <td>28</td>
         <td>30</td>
         <td>30</td>
       </tr>
       <tr>
         <td>4年以上</td>
         <td>62</td>
         <td>90</td>
         <td>120</td>
       </tr>
     </tbody>
   </table>
 </div>
   `;

  echartDom.html(table);
}

function r1c2() {
  // let a = $('[data-name=Scale_number]').prop('outerHTML');
  let cardName = 'Scale_Number';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  // echart div高度
  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  // 增加容器dom
  let table = `
     <div class="table-responsive">
     <table class="table">
       <thead>
         <tr>
           <th scope="col">规模</th>
           <th scope="col">类型</th>
           <th scope="col">2019</th>
           <th scope="col">2020</th>
           <th scope="col">2021</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td rowspan="3">主力店</td>
           <td>办公楼店</td>
           <td>20</td>
           <td>20</td>
           <td>30</td>
         </tr>
         <tr>
           <td>住宅店</td>
           <td>20</td>
           <td>30</td>
           <td>30</td>
         </tr>
         <tr>
           <td>商场店</td>
           <td>40</td>
           <td>40</td>
           <td>40</td>
         </tr>
         <tr>
           <td rowspan="3">中型店</td>
           <td>办公楼店</td>
           <td>22</td>
           <td>22</td>
           <td>32</td>
         </tr>
         <tr>
           <td>住宅店</td>
           <td>22</td>
           <td>22</td>
           <td>22</td>
         </tr>
         <tr>
           <td>商场店</td>
           <td>26</td>
           <td>30</td>
           <td>30</td>
         </tr>
         <tr>
           <td rowspan="3">小型店</td>
           <td>办公楼店</td>
           <td>17</td>
           <td>15</td>
           <td>27</td>
         </tr>
         <tr>
           <td>住宅店</td>
           <td>13</td>
           <td>11</td>
           <td>11</td>
         </tr>
         <tr>
           <td>商场店</td>
           <td>10</td>
           <td>30</td>
           <td>30</td>
         </tr>
       </tbody>
     </table>
   </div>
     `;

  echartDom.html(table);
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
