// 引入样式
let style = document.createElement('style');
style.innerHTML = `
.BMap_cpyCtrl {
  display:none;
}
.anchorBL{
  display:none;
}
.clickTh {
  position: relative;
}
.clickTh2 {
  position: relative;
}
.plickTh {
  position: relative;
}
.plickTh2 {
  position: relative;
}
.sortDesc::after {
  content: '\\e9c2';
  font-family: icomoon;
  position: absolute;
  top: 50%;
  right: 1.25rem;
  font-size: 0.75rem;
  display: inline-block;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  margin-top: -9px;
  opacity: 0.5;
}
.sortAsc::before {
  content: '\\e9c1';
  font-family: icomoon;
  position: absolute;
  top: 50%;
  right: 1.25rem;
  font-size: 0.75rem;
  display: inline-block;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  margin-top: 0px;
  opacity: 0.5;
}
.top th:first-child {
  width: 50%;
}
.d_top {
  background: #ddd;
}
.d_none {
  display: none;
}
`;
document.head.appendChild(style);
// 引入bmap
let bmap_Script = document.createElement('script');
bmap_Script.setAttribute('type', 'text/javascript');
bmap_Script.setAttribute('src', '../js/common/bmap.min.js');
document.head.appendChild(bmap_Script);
// 加载百度地图
(function () {
  //console.log("初始化百度地图脚本...");
  const AK = 'NiGaA3XdWH2IqZB0ohynxvB9yh492DY2';
  const BMap_URL = 'https://api.map.baidu.com/api?v=3.0&ak=' + AK + '&s=1&callback=onBMapCallback';
  return new Promise((resolve, reject) => {
    // 如果已加载直接返回
    if (typeof BMap !== 'undefined') {
      resolve(BMap);
      return true;
    }
    // 百度地图异步加载回调处理
    window.onBMapCallback = function () {
      console.log('百度地图脚本初始化成功...');
      resolve(BMap);
    };
    // 插入script脚本
    let scriptNode = document.createElement('script');
    scriptNode.setAttribute('type', 'text/javascript');
    scriptNode.setAttribute('src', BMap_URL);
    document.body.appendChild(scriptNode);
  });
})();

let myChart,
  sortFlag = true,
  sortFlag2 = true,
  piplineFlag = true,
  piplineFlag2 = true,
  data2 = [
    { Progress: '100%', va: 1, 2020: 0 },
    { Progress: '95%-100%', va: 137, 2020: 33 },
    { Progress: '90%-95%', va: 68, 2020: 42 },
    { Progress: '80%-90%', va: 168, 2020: 78 },
    { Progress: '70%-80%', va: 301, 2020: 129 },
    { Progress: '60%-70%', va: 356, 2020: 154 },
    { Progress: '50%-60%', va: 238, 2020: 198 },
    { Progress: '40%-50%', va: 46, 2020: 296 },
    { Progress: '30%-40%', va: 59, 2020: 304 },
    { Progress: '20-30%', va: 23, 2020: 266 },
    { Progress: '10%-20%', va: 33, 2020: 331 },
    { Progress: 'Total', va: 1430, 2020: 1831 },
  ];

let chart, //echart对象
  itemStyle = {
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
  },
  dataArray = [],
  option = {
    tooltip: {},

    grid: {
      left: '30%',
      containLabel: true,
    },
    visualMap: {
      min: 0,
      max: 550,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
    },
    series: [
      {
        name: 'NLA',
        type: 'map',
        map: 'china',
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
        data: [],
      },
    ],
  },
  operationArray = ['china'];

$(() => {
  renderTable();
  renderMap();

  $('.top th:first-child').click(function () {
    $(this).removeClass('d_top');
    $('.top th:last-child').addClass('d_top');

    $('.store').addClass('d_none');
    $('.pipeline').removeClass('d_none');
  });
  $('.top th:last-child').click(function () {
    $(this).removeClass('d_top');
    $('.top th:first-child').addClass('d_top');

    $('.store').removeClass('d_none');
    $('.pipeline').addClass('d_none');
  });
});

const renderTable = () => {
  let cardName = 'Table1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  cfs.card.body.getDom(cardName).css('padding', '0');
  cfs.echarts.correctHeight(cardName);

  let table = `
  <div class="table-responsive table-scrollable" style="max-height: none; overflow: inherit">
    <table class="table table-bordered">
      <thead class="top">
        <tr>
          <th>Pipeline</th>
          <th class="d_top">Project</th>
        </tr>
      </thead>
    </table>
  </div>

  <div class="table-responsive table-scrollable d_none store">
    <table class="table table-bordered t1">
      <thead>
        <tr>
          <th>地区</th>
          <th class="clickTh sortDesc sortAsc" style="cursor: pointer" onclick="sortTable()">2019</th>
          <th class="clickTh2 sortDesc sortAsc" style="cursor: pointer" onclick="sortTable2()">2020</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>

  <div class="table-responsive table-scrollable pipeline">
    <table class="table table-bordered t2">
      <thead>
        <tr>
          <th>Progress</th>
          <th class="sortDesc sortAsc plickTh" onclick="sortPiple()">2019</th>
          <th class="sortDesc sortAsc plickTh2" onclick="sortPiple2()">2020</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
    `;
  $(echartDom).html(table);

  let _height = $(echartDom).height() - 50;
  $('.store').css('max-height', `${_height}px`);
  $('.pipeline').css('max-height', `${_height}px`);

  pipTable();
  getData({}, function (resultData) {
    initMap(resultData);
  });
};
const renderMap = () => {
  let cardName = 'Map';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  let buttonInfo = {
    id: 'MapBackButton',
    text: '后退',
  };
  cfs.card.head.addButton(headDom, buttonInfo);
  $('#MapBackButton').click(function () {
    mapBack();
  });

  cfs.card.body.getDom(cardName).css('padding', '0');
  cfs.echarts.correctHeight(cardName);

  let map = `<div id="salesOverview" style="height:100%"></div>`;

  $(echartDom).html(map);
};

const pipTable = () => {
  let newStr = '';
  data2.forEach((v) => {
    newStr += '<tr>';
    newStr += `<td>${v.Progress}</td><td>${v.va}</td><td>${v['2020']}</td>`;
    newStr += '</tr>';
  });
  $('.t2 tbody').html(newStr);
};

/**
 * 请求数据
 * @param {object} paramObj 请求参数
 * @param {object} callback 回调函数
 * @param {boolean} cityFlag 是否是到2019级别
 *
 */
const getData = (paramObj, callback, storeFlag) => {
  console.log(storeFlag, 'storeFlag');
  $.ajax({
    url: '/starbucksdemo/shopaddress/findShopAddressInfo',
    type: 'post',
    data: $.extend(
      {
        token: getTokenAnduserId.token,
        tenant_code: getUserInfo.tenant_code,
        user_id: getTokenAnduserId.user_id,
        app_id: userinfoParamsApp.app_id,
      },
      paramObj
    ),
    success: function (res) {
      var resultData = [];
      var tableStr = '';
      res.resultObj.forEach(function (v, i) {
        var newObj = {};
        for (var attr in v) {
          newObj[attr] = v[attr];
        }
        newObj['value'] = parseInt(v.nla / 10000);
        newObj['name'] = v.address || v.city || v.province;
        resultData.push(newObj);
        tableStr += '<tr>';
        tableStr += '<td>' + (storeFlag ? v.park_code + '-' + newObj.name : newObj.name) + '</td><td>' + format(newObj.value) + '</td><td>' + format(newObj.value) + '</td>';
        tableStr += '</tr>';
      });
      console.log(resultData, 'resultData');
      dataArray = resultData;
      $('.t1 tbody').html(tableStr);
      callback && callback(resultData);
    },
  });
};

//初始化echarts地图
const initMap = (data) => {
  chart = echarts.init(document.getElementById('salesOverview'));

  option.series[0].data = data;
  chart.setOption(option);

  chart.on('click', function (param) {
    chartClick(param);
  });
};
const loadScriptMap = (name, province_code, id) => {
  var HEAD = document.getElementsByTagName('head')[0] || document.documentElement;
  var scriptObj = document.createElement('script');
  scriptObj.setAttribute('type', 'text/javascript');
  scriptObj.setAttribute('src', `../js/StbDemo/map/js/province/${province_code}.js`);
  scriptObj.setAttribute('name', name);

  scriptObj.onload = function () {
    getData(
      {
        province_id: id,
      },
      function (resultData) {
        option.series[0].data = resultData;
        option.series[0].map = name;
        chart.setOption(option, true);
      }
    );
  };
  HEAD.appendChild(scriptObj);
};

/**
 * echarts地图点击事件
 */
const chartClick = (param) => {
  console.log('mmmm');
  if (param.data && param.data.city) {
    //如果点到是区级别则调用百度地图
    _modalActionShow('.pipeline');
    recoveryState();
    operationArray.push(param.data.city); //向存储操作顺序数组里添加当前点击进入的区或者市
    getData(
      {
        province_id: param.data.province_id,
        city_id: param.data.city_id,
      },
      function (resultData) {
        var newPointArray = [];
        resultData.forEach(function (v) {
          newPointArray.push({
            name: v.park_code + '-' + v.address,
            value: [v.longitude, v.latitude, v.nla],
          });
        });
        var myGeo = new BMap.Geocoder(); //把当前点击的区或者市作地址解析
        myGeo.getPoint(
          param.data.city,
          function (point) {
            console.log(param.data.city, point, 'point');
            let a = newPointArray.slice(1);
            console.log('a: ', a);
            let b = newPointArray.slice(0, 1);
            console.log('b: ', b);
            if (point) {
              chart.setOption(
                {
                  // 加载 bmap 组件
                  bmap: {
                    // 百度地图中心经纬度
                    center: [point.lng, point.lat],
                    // 百度地图缩放
                    zoom: 12,
                    // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
                    roam: true,
                    // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
                    mapStyle: {},
                  },
                  series: [
                    {
                      type: 'scatter',
                      // 使用百度地图坐标系
                      name: 'city',
                      coordinateSystem: 'bmap',
                      // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
                      data: a,
                      symbolSize: function (val) {
                        // if (val[2] > 100000) {

                        // 	return val[2] / 10000
                        // } else {
                        // 	return val[2] / 2000
                        // }
                        return 15;
                      },
                      label: {
                        normal: {
                          formatter: function (data) {
                            return data.name + ':' + format(parseInt(data.value[2] / 10000));
                          },
                          position: 'right',
                          show: true,
                        },
                        emphasis: {
                          show: false,
                        },
                      },
                      itemStyle: {
                        normal: {
                          color: 'red',
                        },
                      },
                    },
                    {
                      type: 'scatter',
                      // 使用百度地图坐标系
                      name: 'city2',
                      coordinateSystem: 'bmap',
                      // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
                      data: b,
                      symbol: 'roundRect',
                      symbolSize: function (val) {
                        // if (val[2] > 100000) {

                        // 	return val[2] / 10000
                        // } else {
                        // 	return val[2] / 2000
                        // }
                        return 15;
                      },
                      label: {
                        normal: {
                          formatter: function (data) {
                            return data.name + ':' + format(parseInt(data.value[2] / 10000));
                          },
                          position: 'right',
                          show: true,
                        },
                        emphasis: {
                          show: false,
                        },
                      },
                      itemStyle: {
                        normal: {
                          color: 'green',
                        },
                      },
                    },
                  ],
                },
                true
              );

              let bmap = chart.getModel().getComponent('bmap').getBMap();

              bmap.setMapStyleV2({
                styleId: 'be9e79ac5f78998b25fcb5ca44bcc6f7',
              });
            } else {
              alert('您选择地址没有解析到结果!');
            }
          },
          param.data.city
        );
      },
      true
    );
  } else if (param.data && param.data.province) {
    //否则调用的是echarts矢量图
    _modalActionShow('.pipeline');
    console.log('nnnnn');
    recoveryState();
    dataArray.forEach(function (v) {
      if (v.name == param.data.name) {
        operationArray.push(v); //向存储操作顺序数组里添加当前点击进入的省
        loadScriptMap(v.name, v.province_code, v.province_id);
      }
    });
  }
  setTimeout(() => {
    _modalActionHidden('.pipeline');
  }, 500);
};

/**
 * 地图后退
 */
const mapBack = () => {
  _modalActionShow('.pipeline');
  console.log(operationArray, 'operationArray');
  if (operationArray.length != 1) {
    if (operationArray.length == 3) {
      //如果长度是3，则后退退到省
      recoveryState();
      var obj = operationArray[1];
      getData(
        {
          province_id: obj.province_id,
        },
        function (resultData) {
          chart.dispose();
          chart = echarts.init(document.getElementById('salesOverview'));
          option.series[0].data = resultData;
          option.series[0].map = obj.name;
          chart.setOption(option, true);
          chart.on('click', function (param) {
            chartClick(param);
          });

          chart.setOption(option, true);
        }
      );

      operationArray.pop();
    } else if (operationArray.length == 2) {
      //如果长度是2, 则后退到中国地图
      // chart.dispose();
      recoveryState();
      getData({}, function (resultData) {
        option.series[0].data = resultData;
        option.series[0].map = 'china';
        chart.setOption(option, true);
      });

      operationArray.pop();
    }
  }

  setTimeout(() => {
    _modalActionHidden('.pipeline');
  }, 500);
};

/**
 * 恢复排序的状态图标以及状态
 */
const recoveryState = () => {
  sortFlag = true;
  sortFlag2 = true;
  $('.clickTh').addClass('sortAsc sortDesc');
  $('.clickTh2').addClass('sortAsc sortDesc');
};

/**
 * table排序
 */
const sortTable = () => {
  sortFlag2 = true;
  $('.clickTh2').addClass('sortAsc sortDesc');
  var newStr = '';
  if (sortFlag) {
    //如果是降序
    sortFlag = false;
    $('.clickTh').removeClass('sortAsc');
    $('.clickTh').addClass('sortDesc');
    dataArray.sort(function (a, b) {
      return b.value - a.value;
    });
  } else {
    //否则如果是升序
    sortFlag = true;
    $('.clickTh').removeClass('sortDesc');
    $('.clickTh').addClass('sortAsc');
    dataArray.sort(function (a, b) {
      return a.value - b.value;
    });
  }

  dataArray.forEach(function (v) {
    //如果存在park_code即2019级别则地区名称带上code
    var areaName = v.park_code ? v.park_code + '-' + (v.address || v.city || v.province) : v.address || v.city || v.province;
    newStr += '<tr>';
    newStr += '<td>' + areaName + '</td><td>' + format(v.value) + '</td><td>' + format(v.value) + '</td>';
    newStr += '</tr>';
  });
  $('.t1 tbody').html(newStr);
};
const sortTable2 = () => {
  sortFlag = true;
  $('.clickTh').addClass('sortAsc sortDesc');
  var newStr = '';
  if (sortFlag2) {
    //如果是降序
    sortFlag2 = false;
    $('.clickTh2').removeClass('sortAsc');
    $('.clickTh2').addClass('sortDesc');
    dataArray.sort(function (a, b) {
      return b.value - a.value;
    });
  } else {
    //否则如果是升序
    sortFlag2 = true;
    $('.clickTh2').removeClass('sortDesc');
    $('.clickTh2').addClass('sortAsc');
    dataArray.sort(function (a, b) {
      return a.value - b.value;
    });
  }

  dataArray.forEach(function (v) {
    //如果存在park_code即2019级别则地区名称带上code
    var areaName = v.park_code ? v.park_code + '-' + (v.address || v.city || v.province) : v.address || v.city || v.province;
    newStr += '<tr>';
    newStr += '<td>' + areaName + '</td><td>' + format(v.value) + '</td><td>' + format(v.value) + '</td>';
    newStr += '</tr>';
  });
  $('.t1 tbody').html(newStr);
};
const sortPiple = () => {
  piplineFlag2 = true;
  $('.plickTh2').addClass('sortAsc sortDesc');
  var newStr = '';
  if (piplineFlag) {
    //如果是降序
    piplineFlag = false;
    $('.plickTh').removeClass('sortAsc');
    $('.plickTh').addClass('sortDesc');
    data2.sort(function (a, b) {
      return b.va - a.va;
    });
  } else {
    //否则如果是升序
    piplineFlag = true;
    $('.plickTh').removeClass('sortDesc');
    $('.plickTh').addClass('sortAsc');
    data2.sort(function (a, b) {
      return a.va - b.va;
    });
  }

  pipTable(); //重新渲染
};
const sortPiple2 = () => {
  piplineFlag = true;
  $('.plickTh').addClass('sortAsc sortDesc');
  var newStr = '';
  if (piplineFlag2) {
    //如果是降序
    piplineFlag2 = false;
    $('.plickTh2').removeClass('sortAsc');
    $('.plickTh2').addClass('sortDesc');
    data2.sort(function (a, b) {
      return b['2020'] - a['2020'];
    });
  } else {
    //否则如果是升序
    piplineFlag2 = true;
    $('.plickTh2').removeClass('sortDesc');
    $('.plickTh2').addClass('sortAsc');
    data2.sort(function (a, b) {
      return a['2020'] - b['2020'];
    });
  }

  pipTable();
};

var Cus_theme = 'westeros';
var Cus_echarts = {};

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
