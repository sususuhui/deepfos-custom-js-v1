// 引入样式
let style = document.createElement("style");
style.innerHTML = `
.customAreaWrap table{
  table-layout:fixed;
}
.customAreaWrap .scrollTable{
  overflow-y: auto;
}
.customAreaHeaderBox{
  border-top:1px solid #ddd;
}
.customAreaHeaderBox{
  min-height:45px;
  height:45px;
}
.customAreaContent tr{
  cursor: pointer;
}
.customAreaHeader td{
  text-align: center;
}
.customAreaWrap td.text_right{
  text-align: right;
}
.tableHeight{
  width:100%;
  overflow-x: auto;
}
.tableHeight .customAreaWrap{
  min-width:100%;
}
.BMap_cpyCtrl {
  display:none;
}
.anchorBL{
  display:none;
}
`;
document.head.appendChild(style);

// 引入bmap
let bmap_Script = document.createElement("script");
bmap_Script.setAttribute("type", "text/javascript");
bmap_Script.setAttribute("src", "../js/common/bmap.min.js");
document.head.appendChild(bmap_Script);

// 解除限制（datav）
let metaReferrer = document.createElement("meta");
metaReferrer.setAttribute("name", "referrer");
metaReferrer.setAttribute("content", "no-referrer");
document.head.appendChild(metaReferrer);

/**
 * 加载百度地图 API
 */
const LoadBaiduMapScript = () => {
  //console.log("初始化百度地图脚本...");
  const AK = "NiGaA3XdWH2IqZB0ohynxvB9yh492DY2";
  const BMap_URL = "https://api.map.baidu.com/api?v=3.0&ak=" + AK + "&s=1&callback=onBMapCallback";
  return new Promise((resolve, reject) => {
    // 如果已加载直接返回
    if (typeof BMap !== "undefined") {
      resolve(BMap);
      return true;
    }
    // 百度地图异步加载回调处理
    window.onBMapCallback = function () {
      console.log("百度地图脚本初始化成功...");
      resolve(BMap);
    };
    // 插入script脚本
    let scriptNode = document.createElement("script");
    scriptNode.setAttribute("type", "text/javascript");
    scriptNode.setAttribute("src", BMap_URL);
    document.body.appendChild(scriptNode);
  });
};

let mapChart,
  extraMapView_1_chart,
  extraMapView_2_chart,
  mapOperationArray = ["china"];

window.onresize = function () {
  mapChart.resize();
};
// 市场颜色
let MdColor = {
  MD01: "#F08080",
  MD02: "#F0F8FF",
  MD03: "#1E90FF",
  MD04: "#C0C0C0",
  MD05: "#AFEEEE",
};
let MdDescription = {
  MD01: "核心市场",
  MD02: "潜力市场",
  MD03: "忠实市场",
  MD04: "边缘市场",
  MD05: "空白区县",
};

$(() => {
  LoadBaiduMapScript();
  renderMap();
  renderTable();
});

const renderTable = async () => {
  let cardName = "Table";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");

  cfs.card.body.getDom(cardName).css("padding", "0");
  cfs.echarts.correctHeight(cardName);

  let table = `
  <div class="table-responsive table-scrollable d_none store" style="max-height:100%">
    <table class="table table-bordered" id="mapTable">
      <thead><tr></tr></thead>
      <tbody></tbody>
    </table>
  </div>
    `;
  $(echartDom).html(table);

  mapTable();
};

const mapTable = async (MapCode) => {
  let data;
  if (_.isUndefined(MapCode)) {
    data = await getData();
  } else {
    data = await getData({ Region: `${MapCode}` });
  }

  let resultData = JSON.parse(data.result);

  console.log(resultData);

  let theadHtml = ``;
  resultData.FormColumns.forEach((val) => {
    theadHtml += `<th>${val.Description}</th>`;
  });
  $("#mapTable thead tr").html(theadHtml);

  let tbodyHtml = ``;
  resultData.Form.forEach((FormVal) => {
    let formRowHtml = `<tr MapCode="${FormVal.MapCode}" level="${FormVal.level}" style="cursor: pointer;">`;
    resultData.FormColumns.forEach((FormColumnsVal) => {
      if (FormColumnsVal.Column === "Md") {
        formRowHtml += `<td style="background-color:${MdColor[FormVal[FormColumnsVal.Column]]};">${MdDescription[FormVal[FormColumnsVal.Column]]}</td>`;
      } else if (FormColumnsVal.Column === "Sales") {
        formRowHtml += `<td>${numFormat(FormVal[FormColumnsVal.Column])}</td>`;
      } else {
        formRowHtml += `<td>${FormVal[FormColumnsVal.Column]}</td>`;
      }
    });
    formRowHtml += `</tr>`;
    tbodyHtml += formRowHtml;
  });
  $("#mapTable tbody").html(tbodyHtml);

  // table里的每行tr点击进入对应省份下面的市地图
  $("#mapTable tbody tr").each((i, v) => {
    const trObj = $(v);
    trObj.on("click", async () => {
      if (typeof trObj.attr("MapCode") == "undefined") return;
      let MapCode = trObj.attr("MapCode");
      let level = trObj.attr("level");
      if (level === "District") {
        bmapRenderer(MapCode, resultData.StoreMap);
      } else {
        mapTable(MapCode);
        mapLevelRenderer(level, MapCode);
      }
    });
  });
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

const renderMap = async () => {
  let cardName = "Map";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  let buttonInfo = {
    id: "MapBackButton",
    text: "后退",
  };
  cfs.card.head.addButton(headDom, buttonInfo);
  $("#MapBackButton").click(function () {
    mapBack();
  });

  cfs.card.body.getDom(cardName).css("padding", "8px");
  cfs.echarts.correctHeight(cardName);

  // 添加地图布局
  let mapHtml = `
  <div class="echartWrap" style="height:100%">
    <div id="mainMapView" style="height:100%"></div>
    <div class="row">
      <div class="col-lg-6">
        <div id="extraMapView_1">
        </div>
      </div>
      <div class="col-lg-6">
        <div id="extraMapView_2">
        </div>
      </div>
    </div>
  </div>
  `;

  $(echartDom).html(mapHtml);

  mapLevelRenderer();
};

/**
 * 地图渲染器
 * @param {*} level
 * @param {*} MapCode
 */
const mapLevelRenderer = async (level, MapCode) => {
  mapChart = echarts.init(document.getElementById("mainMapView"));
  $("#extraMapView_1").css("height", "0px");
  $("#extraMapView_2").css("height", "0px");
  $("#mainMapView").css("height", "100%");
  mapChart.resize();

  if (!_.isUndefined(extraMapView_1_chart)) {
    extraMapView_1_chart.dispose();
    extraMapView_2_chart.dispose();
  }

  let chinaGeoJson = await getGeoJson("100000_full.json");

  let chinaJson, data;
  if (level === "Area") {
    chinaJson = mergeArea(chinaGeoJson, MapCode);
    data = await getData({ Region: `${MapCode}` });
  } else if (level === "Province" || level === "City") {
    chinaJson = await getGeoJson(`${MapCode}_full.json`);
    data = await getData({ Region: `${MapCode}` });
  } else {
    chinaJson = mergeProvinces(chinaGeoJson);
    data = await getData();
  }

  let resultData = JSON.parse(data.result);

  if (!_.isUndefined(resultData.StoreMap)) {
    $("#extraMapView_1").css("height", "300px");
    $("#extraMapView_2").css("height", "300px");
    $("#mainMapView").css("height", $("#mainMapView").height() - 300 + "px");
    mapChart.resize();
    extraMapView_1(resultData.Form);
    extraMapView_2(resultData.Form);
  }

  initMapEcharts(chinaJson, MapCode || "全国", resultData.Form, resultData.StoreMap);
};

/**
 * 渲染地图 Echarts
 * @param {*} geoJson
 * @param {*} name
 * @param {*} chart
 * @param {*} data
 * @param {*} StoreMap
 */
const initMapEcharts = (geoJson, name, data, StoreMap) => {
  let mapData = data.map((v) => {
    return { value: v.Sales, name: v.District || v.City || v.Province || v.Area, MapData: v };
  });
  console.log(mapData);

  // 区县颜色分级设置
  if (!_.isUndefined(StoreMap)) {
    mapData = mapData.map((val) => {
      return {
        ...val,
        itemStyle: {
          normal: {
            areaColor: MdColor[val.MapData.Md],
          },
        },
      };
    });
  }

  let valueArr = [];
  mapData.forEach((val) => {
    valueArr.push(val.value);
  });
  let minValue = Math.min(...valueArr);
  let maxValue = Math.max(...valueArr);

  minValue = Math.floor(minValue / Math.pow(10, minValue.toString().length - 1)) * Math.pow(10, minValue.toString().length - 1);
  maxValue = Math.ceil(maxValue / Math.pow(10, maxValue.toString().length - 1)) * Math.pow(10, maxValue.toString().length - 1);

  echarts.registerMap(name, geoJson);
  let option = {
    tooltip: {},

    grid: {
      left: "30%",
      containLabel: true,
    },
    visualMap: !_.isUndefined(StoreMap)
      ? null
      : {
          min: minValue,
          max: maxValue,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
          inRange: {
            color: ["#edf3f6", "#04a1f6"],
          },
        },
    series: [
      {
        type: "map",
        map: name,
        itemStyle: {
          normal: {
            borderColor: "rgba(0, 0, 0, 0.2)",
          },
          emphasis: {
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        showLegendSymbol: false,
        // zoom: 10,
        // center: [90.97, 36.71],
        roam: true,
        label: {
          normal: {
            show: false,
            rotate: 40,
            formatter: "{b}：{value|{c}}",
            // position: 'inside',
            backgroundColor: "#fff",
            padding: [3, 5],
            borderRadius: 3,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
            color: "#777",
            rich: {
              value: {
                color: "#019D2D",
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
        // data: [],
        data: mapData,
      },
    ],
  };
  mapChart.setOption(option, true);
  // 解绑click事件
  mapChart.off("click");
  //给地图添加监听事件
  mapChart.on("click", async (params) => {
    let MapData = params.data.MapData;

    if (MapData.level === "District") {
      mapOperationArray.push({ level: MapData.level, MapCode: MapData.MapCode });
      bmapRenderer(MapData.MapCode, StoreMap);
    } else {
      mapOperationArray.push({ level: MapData.level, MapCode: MapData.MapCode });
      mapLevelRenderer(MapData.level, MapData.MapCode);
      mapTable(MapData.MapCode);
    }
  });
};

const extraMapView_1 = (data) => {
  extraMapView_1_chart = echarts.init(document.getElementById("extraMapView_1"));

  let MD01 = 0,
    MD02 = 0,
    MD03 = 0,
    MD04 = 0,
    MD05 = 0;
  data.forEach((val) => {
    if (val.Md === "MD01") MD01 += parseInt(val.Sales);
    if (val.Md === "MD02") MD02 += parseInt(val.Sales);
    if (val.Md === "MD03") MD03 += parseInt(val.Sales);
    if (val.Md === "MD04") MD04 += parseInt(val.Sales);
    if (val.Md === "MD05") MD05 += parseInt(val.Sales);
  });

  let pieData = [
    { value: MD01, name: MdDescription["MD01"] },
    { value: MD02, name: MdDescription["MD02"] },
    { value: MD03, name: MdDescription["MD03"] },
    { value: MD04, name: MdDescription["MD04"] },
    { value: MD05, name: MdDescription["MD05"] },
  ];

  let option = {
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c} ({d}%)",
    },
    legend: {
      // orient: 'vertical',
      // top: 'middle',
      bottom: 10,
      left: "center",
      data: pieData,
    },
    color: ["#F08080", "#F0F8FF", "#1E90FF", "#C0C0C0", "#AFEEEE"],
    series: [
      {
        type: "pie",
        radius: "65%",
        center: ["50%", "50%"],
        selectedMode: "single",
        // data: Chart1Data,
        data: pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  extraMapView_1_chart.setOption(option, true);
};

const extraMapView_2 = (data) => {
  extraMapView_2_chart = echarts.init(document.getElementById("extraMapView_2"));

  let xAxisData = data.map((val) => {
    return val.name;
  });
  let salesData = data.map((val) => {
    return val.Sales;
  });

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: 70,
    },
    xAxis: {
      type: "category",
      data: xAxisData,
      axisLabel: {
        interval: 0,
        rotate: 60,
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: salesData,
        type: "bar",
        itemStyle: {
          normal: {
            color: function (params) {
              return MdColor[data[params.dataIndex].Md];
            },
          },
        },
      },
    ],
  };

  extraMapView_2_chart.setOption(option, true);
};

const bmapRenderer = async (MapCode, StoreMap) => {
  $("#extraMapView_1").css("height", "0px");
  $("#extraMapView_2").css("height", "0px");
  $("#mainMapView").css("height", "100%");
  mapChart.resize();

  extraMapView_1_chart.dispose();
  extraMapView_2_chart.dispose();

  let allAdCode = await getGeoJson("all.json");
  let mapInfo = allAdCode.filter((val) => {
    return val.adcode === parseInt(MapCode);
  });
  let point = { lng: mapInfo[0].lng, lat: mapInfo[0].lat };

  let newStoreMap = StoreMap.map((val) => {
    return {
      name: val.Name,
      value: [val.Lng, val.Lat, 111],
    };
  });
  initBmapEcharts(point, newStoreMap);
};

/**
 * 渲染 bmap
 * @param {*} chart
 * @param {*} point
 * @param {*} data
 */
const initBmapEcharts = (point, data) => {
  let option = {
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
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        return params.name;
      },
    },
    series: [
      {
        type: "scatter",
        // 使用百度地图坐标系
        name: "店铺",
        coordinateSystem: "bmap",
        // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
        data: data,
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
            // formatter: function (data) {
            //   return data.name + ':' + format(parseInt(data.value[2] / 10000));
            // },
            position: "right",
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            color: "red",
          },
        },
      },
    ],
  };
  mapChart.setOption(option, true);
  mapChart.off("click");
  mapChart.on("click", function (params) {
    showStoreDetail(params.data);
  });
  let bmap = mapChart.getModel().getComponent("bmap").getBMap();
  bmap.setMapStyleV2({
    styleId: "be9e79ac5f78998b25fcb5ca44bcc6f7",
  });
};

const showStoreDetail = (store) => {
  $("#Cus_StoreTable").remove();

  let height = "150px";
  let div = $(`<div id="Cus_StoreTable" style="position: absolute; z-index: 1000; height: ${height}; bottom:0;width:100%">
                  <div class="card" style="height: ${height};background-color:rgba(255,255,255,0.7)">
                    <div class="card-header header-elements-inline" style="padding-top: 5px; padding-bottom: 0px">
                    <h6 class="card-title"></h6>
                      <div class="header-elements">
                        <div class="list-icons"><a class="list-icons-item" data-action="remove"></a></div>
                      </div>
                    </div>
                    <div class="card-body"></div>
                  </div>
                </div>`);

  let table = `
      <table class="table table-xs table-hover" style="">
        <tr>
          <th scope="col" style="width: 100px;padding: .5rem .5rem;">门店名称</th>
        </tr>
        <tbody>
          <tr>
            <td style="padding: .5rem .5rem;">${store.name}</td>
          </tr>
        </tbody>
      </table>
    `;

  $("#mainMapView").css("position", "relative");

  $("#mainMapView").append(div).find("#Cus_StoreTable").find("div.card-body").append(table);

  $("#Cus_StoreTable")
    .find("[data-action='remove']")
    .click(function () {
      $("#Cus_StoreTable").remove();
    });
};

/**
 *
 * 请求数据 ， 默认：请求全国
 * @param {*} params
 * @returns
 */
const getData = (params) => {
  return CommonRequest({
    url: `${Api.python}start/web`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      pyName: "map_interface_real_data",
      params: params || { Region: "100000" },
      ...userinfoParams2,
    }),
  });
};

/**
 * datav geo 接口
 * @param {*} jsonName
 */
const getGeoJson = async (jsonName) => {
  const publicUrl = "https://geo.datav.aliyun.com/areas_v2/bound/";

  let url = publicUrl + jsonName;
  let config = {
    method: "GET",
    url: url,
  };
  let res = await axios(config);
  return res.data;
};

/**
 * 首层合并省份为四大区
 * @param {*} chinaJson
 */
const mergeProvinces = (chinaJson) => {
  let refactorFormat = {
    areaDivide: ["华北", "华东", "华南", "华西"],
    // areaDivide: ['华北'],
    areaChildren: [
      // 把各个大区的省份用二维数组分开
      ["北京", "天津", "河北", "山西", "内蒙古", "黑龙江", "吉林", "辽宁"],
      ["山东", "江苏", "安徽", "江西", "浙江", "福建", "上海", "台湾", "河南", "湖北"],
      ["广东", "广西", "海南", "香港", "澳门", "湖南"],
      ["陕西", "甘肃", "青海", "宁夏", "新疆", "重庆", "四川", "云南", "西藏", "贵州"],
    ],
  };

  let newChinaJson = {
    features: [
      {
        geometry: { type: "MultiPolygon", coordinates: [] },
        properties: { name: "华北", level: "area" },
        type: "Feature",
      },
      {
        geometry: { type: "MultiPolygon", coordinates: [] },
        properties: { name: "华东", level: "area" },
        type: "Feature",
      },
      {
        geometry: { type: "MultiPolygon", coordinates: [] },
        properties: { name: "华南", level: "area" },
        type: "Feature",
      },
      {
        geometry: { type: "MultiPolygon", coordinates: [] },
        properties: { name: "华西", level: "area" },
        type: "Feature",
      },
    ],
    type: "FeatureCollection",
  };
  chinaJson.features.forEach((val, i) => {
    refactorFormat.areaDivide.forEach((_, j) => {
      if (refactorFormat.areaChildren[j].toString().indexOf(val.properties.name.slice(0, 2)) != -1 && val.properties.name != "" && val.properties.name.slice(0, 2) === "内蒙") {
        newChinaJson.features[j].geometry.coordinates = [...newChinaJson.features[j].geometry.coordinates, [...val.geometry.coordinates]];
      } else if (refactorFormat.areaChildren[j].toString().indexOf(val.properties.name.slice(0, 2)) != -1 && val.properties.name != "") {
        newChinaJson.features[j].geometry.coordinates = [...newChinaJson.features[j].geometry.coordinates, ...val.geometry.coordinates];
      }
    });
  });

  return newChinaJson;
};

/**
 * 大区分块（第二层级）
 * @param {*} chinaJson
 * @param {*} area
 */
const mergeArea = (chinaJson, area) => {
  let refactorFormat = {
    areaDivideCode: ["T01", "T02", "T03", "T04"],
    // areaDivide: ['华北', '华东', '华南', '华西'],
    areaChildren: [
      // 把各个大区的省份用二维数组分开
      ["北京", "天津", "河北", "山西", "内蒙古", "黑龙江", "吉林", "辽宁"],
      ["山东", "江苏", "安徽", "江西", "浙江", "福建", "上海", "台湾", "河南", "湖北"],
      ["广东", "广西", "海南", "香港", "澳门", "湖南"],
      ["陕西", "甘肃", "青海", "宁夏", "新疆", "重庆", "四川", "云南", "西藏", "贵州"],
    ],
  };

  let newChinaJson = {
    features: [],
    type: "FeatureCollection",
  };

  chinaJson.features.forEach((val, i) => {
    let areaIndex = refactorFormat.areaDivideCode.indexOf(area);
    if (areaIndex != -1) {
      if (refactorFormat.areaChildren[areaIndex].toString().indexOf(val.properties.name.slice(0, 2)) != -1 && val.properties.name != "") {
        newChinaJson.features.push(val);
      }
    }
  });

  return newChinaJson;
};

/**
 * 地图后退
 */
const mapBack = () => {
  _modalActionShow("#Map");
  _modalActionShow("#Table");

  mapChart.dispose();
  if (mapOperationArray.length > 2) {
    let { level, MapCode } = mapOperationArray[mapOperationArray.length - 2];
    mapTable(MapCode);
    mapLevelRenderer(level, MapCode);
    mapOperationArray.pop();
  } else if ((mapOperationArray.length = 2)) {
    mapTable();
    mapLevelRenderer();
    mapOperationArray.pop();
  } else {
    mapTable();
    mapLevelRenderer();
  }

  setTimeout(() => {
    _modalActionHidden("#Map");
    _modalActionHidden("#Table");
  }, 500);
};

var Cus_theme = "westeros";
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
        var contentType = "application/" + (json ? "json" : "x-www-form-urlencoded");
        var resObj = {};
        var err = "";
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
        var url = Api.SeeplnCube + "cube/queryCubeData";
        paramObj = $.extend(
          {
            cube_name: cubeName,
            script: script,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true);
      },
      //通用保存方法
      save: function (sheetDatas) {
        var url = Api.SeeplnCube + "spreadsheet/save";
        paramObj = $.extend(
          {
            sheetDatas: sheetDatas,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true);
      },
    },
    foundation: {
      //根据user权限获取维度，最多2层
      getAccessDimensionMemberLevel: function (dimName, exp = "", name = "#root", id = "1", searchValue = "") {
        let url = Api.seepln + "dimension/getAccessDimensionMemberLevel";
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
        return cfs.request.common.sendRequest(url, "POST", paramObj, false);
      },
      //根据表达式查询，不分权限
      selectDimensionMemberByNameFunction: function (dimensionMemberNames) {
        let url = Api.seepln + "dimension/selectDimensionMemberByNameFunction";
        paramObj = $.extend(
          {
            dimensionMemberNames: dimensionMemberNames,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false);
      },
      //执行自定义sql语句
      runComm: function (comm) {
        var url = Api.seepln + "sqlparser/run/post";
        paramObj = $.extend(
          {
            sql: comm,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false, true);
      },
    },
    python: {
      //同步调用python
      web: function (pyName, params) {
        var url = Api.python + "start/web";
        paramObj = $.extend(
          {
            pyName: pyName,
            params: params,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true, true);
      },
    },
  },
  card: {
    //dashboard单个卡片方法 bootstrap4图标：http://easyview.seepln.com/Limitless_2.0.1/Bootstrap%204/Template/layout_1/LTR/material/full/icons_icomoon.html
    head: {
      //获取卡片表头jquery dom
      getDom: function (cardName) {
        return $("#" + cardName);
      },
      //删除卡片表右边所有元素
      removeButton: function (dom) {
        dom.find(".header-elements").html("");
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
        let sHtml = "";
        buttonInfo.list.forEach(function (v) {
          sHtml += "<option value='" + v.key + "'>" + v.value + "</option>";
        });
        carHead.find(".header-elements").prepend(btn);
        $("#" + buttonInfo.id).html(sHtml);
        $(".select").select2({ minimumResultsForSearch: -1 });
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
          list[i] = '<a index = "' + i + '" class="dropdown-item" href="#">' + list[i] + "</a>";
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
            "</span></a>" +
            '<div class="dropdown-menu" style="min-width:100px">' +
            list.join("") +
            "</div></div>"
        );
        carHead.find(".header-elements").append(btn);
        if (buttonInfo.id.indexOf("_disable") == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + "_disable";
          var btn_disable = this.addDropdownButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.find(".dropdown-menu").remove();
          btn_disable.hover(function () {
            this.style.cursor = "not-allowed";
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
            "</span></a>"
        );
        carHead.find(".header-elements").append(btn);
        if (buttonInfo.id.indexOf("_disable") == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + "_disable";
          var btn_disable = this.addButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.hover(function () {
            this.style.cursor = "not-allowed";
          });
        }
        return btn;
      },
      //点击后调用防止反复执行
      disableButton: function (btn) {
        btn.hide();
        $("#" + btn.attr("id") + "_disable").show();
      },
      //恢复按钮可用
      enableButton: function (btn) {
        $("#" + btn.attr("id") + "_disable").hide();
        btn.show();
      },
    },
    body: {
      //获取卡片内容jquery dom
      getDom: function (cardName) {
        return $("#" + cardName).find(".card-body");
      },
      //添加文件上传卡片
      addFileTag: function (cardName, text) {
        var dom = $(
          '<div status="-1" filename="' +
            text +
            '" style="margin: 1.25rem; padding: 10px;display: inherit; background-color:#f7f7f7;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;">' +
            '<span style="margin-right: 15px;">' +
            text +
            "</span>" +
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
      window.addEventListener("resize", function () {
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
      let echartDom = $("#" + cardName)
        .find(".card-body")
        .find(".echart");
      let cardBodyDom = $("#" + cardName).find(".card-body");

      let _height = $(cardBodyDom).height();
      $(echartDom).height(_height);
    },
    mobileHeight: function (cardName, height) {
      let cardDom = $("#" + cardName).parent();
      $(cardDom).height(height);
      let echartDom = $("#" + cardName)
        .find(".card-body")
        .find(".echart");
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
        text: "",
        type: "info",
        showCancelButton: true,
        confirmButtonText: getLanguage("sure"),
        cancelButtonText: getLanguage("cancel"),
      }).then(function (result) {
        if (result.value) {
          thenEvent();
        }
      });
    },
    //excel的5位纯数字日期格式转yyyy-mm-dd
    valueToDate: function (value) {
      var n = Number(value.split(".")[0]);
      var date = new Date("1900-1-1");
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
      var titleStr = titleArr.join("\t,");
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          var cell = dataJson[i][titleArr[j]] || "";
          if (cell.toString().indexOf(",") > -1) cell = '"' + cell + '"';
          rowArr.push(cell);
        }
        dataArr.push(rowArr.join("\t,"));
      }
      var dataStr = titleStr + "\n" + dataArr.join("\n");
      var blob = new Blob([dataStr], { type: "text/plain;charset=utf-8" });
      //解决中文乱码问题
      blob = new Blob([String.fromCharCode(0xfeff), blob], { type: blob.type });
      this.download(blob, fileName + ".csv");
    },
    toXls: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      var titleObj = dataJson[0];
      titleArr = titleArr || Object.keys(titleObj);
      var titleStr = "<tr><td>" + titleArr.join("</td><td>") + "</td></tr>";
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          rowArr.push("<td>" + (dataJson[i][titleArr[j]] || "") + "</td>");
        }
        dataArr.push("<tr>" + rowArr.join("") + "</tr>");
      }
      var dataStr = "<table>" + titleStr + dataArr.join("") + "</table>";
      var uri = "data:application/vnd.ms-excel;base64,";
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
        type: "application/vnd.ms-excel",
      });
      this.download(blob, fileName + ".xls");
    },
    toXlsx: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      //
      var sheet = XLSX.utils.json_to_sheet(dataJson);
      var blob = this.sheet2blob(sheet, fileName.substr(0, 30));
      this.download(blob, fileName + ".xlsx");
    },
    sheet2blob: function (sheet, sheetName) {
      sheetName = sheetName || "sheet1";
      var workbook = {
        SheetNames: [sheetName],
        Sheets: {},
      };
      workbook.Sheets[sheetName] = sheet;
      // 生成excel的配置项
      var wopts = {
        bookType: "xlsx", // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: "binary",
      };
      var wbout = XLSX.write(workbook, wopts);
      var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
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
      var btn = document.createElement("a");
      btn.href = URL.createObjectURL(blob);
      btn.download = fileFullName;
      btn.style = "display: none;";
      document.body.appendChild(btn);
      btn.click();
      document.body.removeChild(btn);
    },
  },
};
