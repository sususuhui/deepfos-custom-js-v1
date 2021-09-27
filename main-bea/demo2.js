// // 引入 bmap
// let bmap_Script = document.createElement("script");
// bmap_Script.setAttribute("type", "text/javascript");
// bmap_Script.setAttribute("src", "../js/common/bmap.min.js");
// document.head.appendChild(bmap_Script);

// // 引入 百度地图离线api
// let mapInit_Script = document.createElement("script");
// mapInit_Script.setAttribute("type", "text/javascript");
// mapInit_Script.setAttribute("src", "../js/StbDemo/map/bmap-offline/map3.0_init.js");
// document.head.appendChild(mapInit_Script);

// let map_Script = document.createElement("script");
// map_Script.setAttribute("type", "text/javascript");
// map_Script.setAttribute("src", "../js/StbDemo/map/bmap-offline/map3.0.js");
// document.head.appendChild(map_Script);

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
  // cursor: pointer;
}
.customAreaHeader td{
  text-align: left;
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
#select2-select2_pov_account-container{
  font-size:14px;
}
.select2-selection--single{
  padding:0
}
`;
document.head.appendChild(style);

// 动态加载 js
const loadScript = (url) => {
  return new Promise(function (resolve) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
      //IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          resolve(script);
        }
      };
    } else {
      //Others
      script.onload = function () {
        resolve(script);
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  });
};

$(async () => {
  await loadScript("../js/StbDemo/map/bmap-offline/map3.0_init.js");
  await loadScript("../js/StbDemo/map/bmap-offline/map3.0.js");

  const html = `
<div class="row globalPovRow">
  <div class="col-lg-12">
    <div class="card">
      <div class="card-header header-elements-inline pt-0 pb-0" id="dataHead">
        <div class="dataSheetCon pl-3" style="display: inline-block; width: 100%">
          <div id="globalPovPart" style="display: flex; flex-wrap: wrap">
            <div class="pr-2 d-flex searchSeleteStyle">
              <span
                class="
                  badge badge-light badge-striped badge-striped-left
                  border-left-primary
                  seachText
                "
              >
                Entity
              </span>
              <select id="select2_pov_Entity"></select>
            </div>
            <div class="pr-2 d-flex searchSeleteStyle">
              <span
                class="
                  badge badge-light badge-striped badge-striped-left
                  border-left-primary
                  seachText
                "
              >
                Year
              </span>
              <select id="select2_pov_Year"></select>
            </div>
            <div class="pr-2 d-flex searchSeleteStyle">
              <span
                class="
                  badge badge-light badge-striped badge-striped-left
                  border-left-primary
                  seachText
                "
              >
                Period
              </span>
              <select id="select2_pov_Period"></select>
            </div>
            <div class="pr-2 d-flex searchSeleteStyle">
              <span
                class="
                  badge badge-light badge-striped badge-striped-left
                  border-left-primary
                  seachText
                "
              >
                View
              </span>
              <select id="select2_pov_View"></select>
            </div>
            <div class="pr-2 d-flex searchSeleteStyle">
              <span
                class="
                  badge badge-light badge-striped badge-striped-left
                  border-left-primary
                  seachText
                "
              >
                LOB
              </span>
              <select id="select2_pov_LOB"></select>
            </div>
            <div class="pr-2 d-flex searchSeleteStyle">
              <span class="freshBS" style="cursor: pointer">
                <i class="icon-loop3 icon mr-2" style="font-size: 13px; margin-top: 10px"></i>
                <span></span
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="dashBoardContent">
  <div class="row dataSheet mb-3" style="height: 600px">
    <div data-name="MapBlock" style="width: 100%" class="pr-2 pl-2 componentCard height100">
      <div class="card spreadCard mb-0" id="MapBlock">
        <div
          class="card-header bg-white header-elements-inline"
          style="
            justify-content: space-between;
            font-size: 22px;
            font-weight: bold;
            font-family: 'Microsoft Yahei';
          "
        >
          <div>Analysis Dashboard - Line of Business (HKAS Set)</div>
          <div class="header-elements">
            <div class="dataSheetCon sheetPovPart"></div>
          </div>
        </div>
        <div class="card-body">
          <div class="echart height100"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="row dataSheet mb-3" style="height: 600px">
    <div data-name="ChartBlock" style="width: 100%" class="pr-2 pl-2 componentCard height100">
      <div class="card spreadCard mb-0" id="ChartBlock">
        <div class="card-body">
          <div class="echart height100"></div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="dashBoardContent_notion">
  <div class="row dataSheet mb-3" style="height: 600px">
    <div data-name="NotionBlock" style="width: 100%" class="pr-2 pl-2 componentCard height100">
      <div class="card spreadCard mb-0" id="ChartBlock">
        <div class="card-body">
          <div class="echart height100">
            <div style="display: flex; flex-direction: column; align-items: center">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="300px"
                height="500px"
                viewBox="0 0 240 360"
                enable-background="new 0 0 240 360"
                xml:space="preserve"
              >
                <image
                  id="image0"
                  width="300"
                  height="500"
                  x="-25"
                  y="-100"
                  href="data:image/png;base64,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
"
                ></image>
              </svg>
              <div style="font-size: 26px;  text-align: center; margin-top:-100px">
                Data under preparation...
                <!-- <span style="font-size: 22px; font-weight: bold">preparation</span>...-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div
  id="extra-chart-modal"
  class="modal fade"
  tabindex="-1"
  aria-hidden="true"
  style="z-index: 9999"
>
  <div class="modal-dialog modal-lg" style="margin-top: 5%">
    <div class="modal-content">
      <div class="modal-header bg-teal-400">
        <h5 class="modal-title">Daily</h5>
        <button type="button" class="close legitRipple" data-dismiss="modal">×</button>
      </div>
      <div
        class="modal-body pl-0 pr-0 modal_scroll"
        style="height: 600px; width: 100%; overflow-y: auto; overflow-x: hidden; padding: 0"
      >
      <div
        style="height: 8%; width: 100%; padding: 1rem 1rem 0 1rem; display: flex; flex-wrap: wrap;font-size: 22px;font-weight: 600;"
      >
        <span> Loan & Deposit(Ending) </span>
        <span id="modal-daily-date" class="ml-1"> </span>
      </div>

        <div
          style="height: 8%; width: 100%; padding: 1rem 1rem 0 1rem; display: flex; flex-wrap: wrap"
          id="modalExtraChartHeader"
        >
          <div class="pr-4 d-flex searchSeleteStyle">
            <span
              class="
                badge badge-light badge-striped badge-striped-left
                border-left-primary
                seachText
              "
              style="margin-top: 0"
            >
              Entity
            </span>
            <span id="select2_pov_Entity_span"></span>
          </div>

          <div class="pr-2 d-flex searchSeleteStyle">
            <span
              class="
                badge badge-light badge-striped badge-striped-left
                border-left-primary
                seachText
              "
              style="margin-top: 0"
            >
              Date
            </span>
            <input
              type="date"
              id="modalExtraChartHeader_date"
              style="border: none; border-bottom: 1px solid #ddd"
              name="modalExtraChartHeader_date"
            />
          </div>

          <div class="pr-2 d-flex searchSeleteStyle">
            <span class="freshBS3" style="cursor: pointer">
              <i class="icon-loop3 icon mr-2" style="font-size: 13px; margin-top: 10px"></i>
              <span></span
            ></span>
          </div>
        </div>
        <div style="height: 84%; width: 100%; padding: 1rem" id="modalExtraChart">1</div>
      </div>
    </div>
  </div>
</div>

  `;
  $("#showDashBoard").html(html);

  const initData = await getInitData();

  const { Entity, Year, Period, View, LOB } = initData;

  const EntityData = Entity.data.map((val) => {
    return {
      id: Object.keys(val)[0],
      text: Object.values(val)[0],
    };
  });

  const YearData = Year.data.map((val) => {
    return {
      id: Object.keys(val)[0],
      text: Object.values(val)[0],
    };
  });

  const PeriodData = Period.data.map((val) => {
    return {
      id: Object.keys(val)[0],
      text: Object.values(val)[0],
    };
  });

  const ViewData = View.data.map((val) => {
    return {
      id: Object.keys(val)[0],
      text: Object.values(val)[0],
    };
  });

  const LOBData = LOB.data.map((val) => {
    return {
      id: Object.keys(val)[0],
      text: Object.values(val)[0],
    };
  });

  $("#select2_pov_Entity").select2({
    data: EntityData,
  });
  $("#select2_pov_Entity").val(Entity.default).select2();

  $("#select2_pov_Year").select2({
    data: YearData,
  });
  $("#select2_pov_Year").val(Year.default).select2();

  $("#select2_pov_Period").select2({
    data: PeriodData,
  });
  $("#select2_pov_Period").val(Period.default).select2();

  $("#select2_pov_View").select2({
    data: ViewData,
  });
  $("#select2_pov_View").val(View.default).select2();

  $("#select2_pov_LOB").select2({
    data: LOBData,
  });
  $("#select2_pov_LOB").val(LOB.default).select2();

  $(".freshBS").on("click", () => {
    MapBlock();
    ChartBlock();
  });

  // $("[data-name=MapBlock]").find(".card-header").css({ "justify-content": "space-between" });
  // 添加地图后退按钮
  const btn = `<button id="mapBack" type="button" class="btn btn-primary legitRipple btn-sm">MapBack</button>`;
  $("[data-name=MapBlock]").find(".header-elements").append(btn);

  // // 添加地图后退按钮
  // const btn2 = `<button id="chart-modal-btn" type="button" class="btn btn-primary legitRipple btn-sm ml-4">Daily</button>`;
  // $("[data-name=MapBlock]").find(".header-elements").append(btn2);

  $("#mapBack")
    .off("click")
    .on("click", () => {
      mapBack();
    });

  $("#chart-modal-btn")
    .off("click")
    .on("click", () => {
      extraChartModal();
    });

  // LoadBaiduMapScript();
  MapBlock();
  ChartBlock();
});

const MapBlock = async () => {
  let mapChart;

  const html = `
  <div class="row" style="width: 100%; height: 100%">
    <div class="col-lg-5" style="height: 100%">
      <div class="echartWrap" style="height: 100%">
        <div id="mainMapView" style="height: 100%"></div>
      </div>
    </div>

    <div class="col-lg-7" style="height: 100%">
      <div style="display: flex;margin-bottom: 8px;font-size: 16px;">
        <label class="d-block mr-2">Account</label>
        <div style="width: 200px">
          <select id="select2_pov_account">
            <option value="PL06">Net Profit</option>
            <option value="PL03">Pre-provision Profit</option>
            <option value="PL01">Total operating income</option>
            <option value="PL02">Operating Expense</option>
            <option value="A0201">Net Interest Income</option>
            <option value="A0204">Non Net Interest Income</option>
            <option value="A0106">Loan ending balance</option>F
            <option value="A0108">Deposit ending balance</option>
          </select>
        </div>
        <div>
          <span class="freshBS2" style="cursor: pointer">
            <i class="icon-loop3 icon ml-2 mt-1" style="font-size: 13px"></i>
          </span>
        </div>
      </div>
      <div class="card tableHeight" style="font-family: 'Microsoft Yahei';font-size: 1rem;">
        <div class="customAreaWrap">
          <div class="customAreaHeaderBox">
            <table class="table customAreaHeader">
              <tbody>
                <tr>
                  <td>Branch</td>
                  <td>Area</td>
                  <td>Ranking</td>
                  <td>Actual</td>
                  <td>Actual_LY</td>
                  <td>Budget</td>
                  <td>Diff</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="scrollTable">
            <table class="table customAreaContent">
              <thead>
                <tr></tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

    `;
  $("[data-name=MapBlock]").find(".echart").html(html);

  // 设置中间滚动table得最大高度
  $(".scrollTable").css({
    "max-height": `${$("#MapBlock").height() - 200}px`,
    "min-height": `${$("#MapBlock").height() - 200}px`,
  });
  $("#select2_pov_account").select2();

  $(".freshBS2")
    .off("click")
    .on("click", async () => {
      $("[data-name=MapBlock] .card-body .row")
        .children()
        .eq(1)
        .block({
          message: '<i class="icon-spinner4 spinner"></i>',
          overlayCSS: {
            backgroundColor: "#fff",
            opacity: 1,
            cursor: "wait",
          },
          css: {
            border: 0,
            padding: 0,
            backgroundColor: "transparent",
          },
        });

      const data = await getMapTableData();
      const { TableData } = data;
      renderTable(TableData);

      $("[data-name=MapBlock] .card-body .row").children().eq(1).unblock();
    });

  const getGeoJson = async () => {
    const url = "../js/StbDemo/map/json/geo_datav_100000_full.json";

    let config = {
      method: "GET",
      url: url,
    };
    let res = await axios(config);
    return res.data;
  };

  const mergeProvinces = (chinaJson) => {
    let refactorFormat = {
      areaDivide: ["华北区", "华东区", "华南区", "中西区"],
      areaChildren: [
        // 把各个大区的省份用二维数组分开
        ["北京", "天津", "河北", "山西", "内蒙古", "黑龙江", "吉林", "辽宁", "山东"],
        ["江苏", "安徽", "江西", "浙江", "福建", "上海", "台湾", "河南", "湖北"],
        ["广东", "广西", "海南", "香港", "澳门", "湖南"],
        ["陕西", "甘肃", "青海", "宁夏", "新疆", "重庆", "四川", "云南", "西藏", "贵州"],
      ],
    };

    let newChinaJson = {
      features: [
        {
          geometry: { type: "MultiPolygon", coordinates: [] },
          properties: { name: "华北区", level: "area" },
          type: "Feature",
        },
        {
          geometry: { type: "MultiPolygon", coordinates: [] },
          properties: { name: "华东区", level: "area" },
          type: "Feature",
        },
        {
          geometry: { type: "MultiPolygon", coordinates: [] },
          properties: { name: "华南区", level: "area" },
          type: "Feature",
        },
        {
          geometry: { type: "MultiPolygon", coordinates: [] },
          properties: { name: "中西区", level: "area" },
          type: "Feature",
        },
      ],
      type: "FeatureCollection",
    };
    chinaJson.features.forEach((val, i) => {
      refactorFormat.areaDivide.forEach((_, j) => {
        if (
          refactorFormat.areaChildren[j].toString().indexOf(val.properties.name.slice(0, 2)) !=
            -1 &&
          val.properties.name != "" &&
          val.properties.name.slice(0, 2) === "内蒙"
        ) {
          newChinaJson.features[j].geometry.coordinates = [
            ...newChinaJson.features[j].geometry.coordinates,
            [...val.geometry.coordinates],
          ];
        } else if (
          refactorFormat.areaChildren[j].toString().indexOf(val.properties.name.slice(0, 2)) !=
            -1 &&
          val.properties.name != ""
        ) {
          newChinaJson.features[j].geometry.coordinates = [
            ...newChinaJson.features[j].geometry.coordinates,
            ...val.geometry.coordinates,
          ];
        }
      });
    });

    return newChinaJson;
  };

  const renderTable = (TableData) => {
    let html = ``;
    TableData.forEach((val) => {
      html += `
      <tr>
        <td>${val.Branch}</td>
        <td>${val.Area}</td>
        <td>${val.Ranking}</td>
        <td>${val.Actual}</td>
        <td>${val.Actual_LY}</td>
        <td>${val.Budget}</td>
        <td>${val.Diff}</td>
      </tr>
      `;
    });
    $(".customAreaContent tbody").html(html);
  };

  const mapLevelRenderer = async (level, MapData) => {
    mapChart = echarts.init(document.getElementById("mainMapView"));

    let chinaJson;
    if (level === "China") {
      let chinaGeoJson = await getGeoJson();
      chinaJson = mergeProvinces(chinaGeoJson);
      initMapEcharts(chinaJson, MapData, []);
    }

    if (level === "BeaChina") {
      let chinaGeoJson = await getGeoJson();
      chinaJson = mergeProvinces(chinaGeoJson);

      const extraData = MapData.Branch.map((val) => {
        return {
          name: val.Name,
          value: [
            parseInt(val.Lng),
            parseInt(val.Lat),
            { MapCode: val.MapCode, Income: val.Income, Name: val.name },
          ],
        };
      });

      initMapEcharts(chinaJson, MapData.Area, extraData);
    }
  };

  const initMapEcharts = (geoJson, MapData, extraData) => {
    let mapData = MapData.map((v) => {
      return { value: v.Income, name: v.name, MapData: v };
    });

    let valueArr = [];
    mapData.forEach((val) => {
      valueArr.push(val.value);
    });
    let minValue = parseInt(Math.min(...valueArr));
    let maxValue = parseInt(Math.max(...valueArr));

    minValue =
      Math.floor(minValue / Math.pow(10, minValue.toString().length - 1)) *
      Math.pow(10, minValue.toString().length - 1);
    maxValue =
      Math.ceil(maxValue / Math.pow(10, maxValue.toString().length - 1)) *
      Math.pow(10, maxValue.toString().length - 1);

    echarts.registerMap("CustomMap", geoJson);
    let option = {
      tooltip: {},

      grid: {
        left: "30%",
        containLabel: true,
      },
      visualMap: {
        min: minValue,
        max: maxValue,
        left: "left",
        top: "bottom",
        text: ["高", "低"], // 文本，默认为数值文本
        calculable: true,
        inRange: {
          color: ["#F3E3A0", "#C34D53"],
        },
      },

      geo: {
        show: true,
        map: "CustomMap",
        zoom: 1.5,
        top: 120,
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
        roam: "move",
      },
      series: [
        {
          name: "China",
          type: "map",
          map: "CustomMap",
          zoom: 1.5,
          top: 120,
          geoIndex: 0,
          itemStyle: {
            borderColor: "rgba(0, 0, 0, 0.2)",
            emphasis: {
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          showLegendSymbol: false,
          roam: "move",
          label: {
            show: false,
            rotate: 40,
            formatter: "{b}：{value|{c}}",
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
              },
            },
            emphasis: {
              show: false,
            },
          },
          data: mapData,
        },
        {
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "pin",
          itemStyle: {
            color: "#59C3E5",
          },
          symbolSize: 32,
          tooltip: {
            formatter: function (params) {
              const { Name, Income } = params.data.value[2];

              return Name + " : " + Income.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          zlevel: 6,
          data: extraData,
        },
      ],
    };
    mapChart.setOption(option, true);

    $(window).on("resize", () => {
      mapChart.resize();
    });

    mapChart.off("click");
    mapChart.on("click", async (params) => {
      const { seriesType } = params;

      if (seriesType === "map") {
        const { MapData } = params.data;
        $("#select2_pov_account").val("PL06").select2();
        const areaMapCode = MapData.MapCode;
        $("#select2_pov_Entity").val(areaMapCode).select2();

        MapBlock();
        ChartBlock();
      }

      if (seriesType === "scatter") {
        $("#select2_pov_account").val("PL06").select2();

        let areaMapCode = params.value[2].MapCode;
        $("#select2_pov_Entity").val(areaMapCode).select2();

        MapBlock();
        ChartBlock();
      }
    });
  };

  const bmapRenderer = async (MapCode, data) => {
    let bmapPoint;

    const areaPoint = {
      HBQ: { lat: 39.125596, lng: 117.190182 },
      HDQ: { lat: 32.065922, lng: 118.799309 },
      HNQ: { lat: 22.549053, lng: 114.062499 },
      ZXQ: { lat: 30.580774, lng: 104.069372 },
    };

    if (typeof areaPoint[MapCode] === "undefined") {
      bmapPoint = { lat: data[0].Lat, lng: data[0].Lng };
    } else {
      bmapPoint = areaPoint[MapCode];
    }

    const newMapData = data.map((val) => {
      return {
        name: val.Name,
        value: [parseInt(val.Lng), parseInt(val.Lat), { MapCode: val.MapCode }],
      };
    });

    initBmapEcharts(bmapPoint, newMapData);
  };

  const initBmapEcharts = (point, data) => {
    const map = new BMap.Map("mainMapView");
    map.centerAndZoom(new BMap.Point(point.lng, point.lat), 6);
    map.disableScrollWheelZoom();
    map.disableDragging();
    map.disableDoubleClickZoom();
    map.disableKeyboard();
    // const myStyleJson = [
    //   {
    //     featureType: "water",
    //     elementType: "all",
    //     stylers: {
    //       color: "#d1d1d1",
    //     },
    //   },
    //   {
    //     featureType: "land",
    //     elementType: "all",
    //     stylers: {
    //       color: "#f3f3f3",
    //     },
    //   },
    //   {
    //     featureType: "railway",
    //     elementType: "all",
    //     stylers: {
    //       visibility: "off",
    //     },
    //   },
    //   {
    //     featureType: "highway",
    //     elementType: "all",
    //     stylers: {
    //       color: "#fdfdfd",
    //     },
    //   },
    //   {
    //     featureType: "highway",
    //     elementType: "labels",
    //     stylers: {
    //       visibility: "off",
    //     },
    //   },
    //   {
    //     featureType: "arterial",
    //     elementType: "geometry",
    //     stylers: {
    //       color: "#fefefe",
    //     },
    //   },
    //   {
    //     featureType: "arterial",
    //     elementType: "geometry.fill",
    //     stylers: {
    //       color: "#fefefe",
    //     },
    //   },
    //   {
    //     featureType: "poi",
    //     elementType: "all",
    //     stylers: {
    //       visibility: "off",
    //     },
    //   },
    //   {
    //     featureType: "green",
    //     elementType: "all",
    //     stylers: {
    //       visibility: "off",
    //     },
    //   },
    //   {
    //     featureType: "subway",
    //     elementType: "all",
    //     stylers: {
    //       visibility: "off",
    //     },
    //   },
    //   {
    //     featureType: "manmade",
    //     elementType: "all",
    //     stylers: {
    //       color: "#d1d1d1",
    //     },
    //   },
    //   {
    //     featureType: "local",
    //     elementType: "all",
    //     stylers: {
    //       color: "#d1d1d1",
    //     },
    //   },
    //   {
    //     featureType: "arterial",
    //     elementType: "labels",
    //     stylers: {
    //       visibility: "off",
    //     },
    //   },
    //   {
    //     featureType: "boundary",
    //     elementType: "all",
    //     stylers: {
    //       color: "#fefefe",
    //     },
    //   },
    //   {
    //     featureType: "building",
    //     elementType: "all",
    //     stylers: {
    //       color: "#d1d1d1",
    //     },
    //   },
    //   {
    //     featureType: "label",
    //     elementType: "labels.text.fill",
    //     stylers: {
    //       color: "#999999",
    //     },
    //   },
    // ];
    // map.setMapStyle({ styleJson: myStyleJson });
    data.forEach((val) => {
      let marker = new BMap.Marker(new BMap.Point(val.value[0], val.value[1]), val.value[2]);
      marker.addEventListener("click", function () {
        const { MapCode } = val.value[2];
        $("#select2_pov_account").val("PL06").select2();

        let areaMapCode = MapCode;
        $("#select2_pov_Entity").val(areaMapCode).select2();

        MapBlock();
        ChartBlock();
      });
      map.addOverlay(marker);
    });
  };

  const pov = {
    Entity: $("#select2_pov_Entity").val(),
    Year: $("#select2_pov_Year").val(),
    Period: $("#select2_pov_Period").val(),
    View: $("#select2_pov_View").val(),
    LOB: $("#select2_pov_LOB").val(),
  };

  $("[data-name=MapBlock] .card-body").block({
    message: '<i class="icon-spinner4 spinner"></i>',
    overlayCSS: {
      backgroundColor: "#fff",
      opacity: 1,
      cursor: "wait",
    },
    css: {
      border: 0,
      padding: 0,
      backgroundColor: "transparent",
    },
  });

  if (pov.Entity === "Branch" || pov.Entity === "T1" || pov.Entity === "T2") {
    $("#select2_pov_account").val("PL06").select2();
    const data = await getMapTableData();
    const { MapData, TableData } = data;
    mapLevelRenderer("China", MapData);
    renderTable(TableData);
  } else if (pov.Entity === "BeaChina") {
    $("#select2_pov_account").val("PL06").select2();
    const data = await getMapTableData();
    const { MapData, TableData } = data;
    mapLevelRenderer("BeaChina", MapData);
    renderTable(TableData);
  } else {
    $("#select2_pov_account").val("PL06").select2();
    mapChart = echarts.init(document.getElementById("mainMapView"));
    const areaMapCode = pov.Entity;
    const data = await getMapTableData(areaMapCode);
    renderTable(data.TableData);
    bmapRenderer(areaMapCode, data.MapData);
  }

  $("[data-name=MapBlock] .card-body").unblock();
};

const ChartBlock = () => {
  const currentLOB = $("#select2_pov_LOB").val();
  let activeTab = $("[data-name=ChartBlock] .tabulDom li .active").attr("href");
  if (currentLOB === "FMKD" && activeTab === "#tab1") activeTab = "#tab2";

  const html = `<ul
  class="
    nav nav-tabs nav-tabs-solid nav-justified
    tabulDom
    bg-teal-400
    border-x-0 border-bottom-0
    mt-0
    mb-0
  "
  style="background: none; border: none; box-shadow: none"
>
  <li class="nav-item" style="margin-right: 10px ${currentLOB === "FMKD" ? ";display:none" : ""}">
    <a
      href="#tab1"
      class="nav-link font-size-sm active"
      style="background-color: #999; font-weight: bold; font-size: 16px"
      data-toggle="tab"
      >Portfolio & Rate</a
    >
  </li>

  <li class="nav-item" style="margin-right: 10px">
    <a
      href="#tab2"
      class="nav-link font-size-sm"
      style="background-color: #999; font-weight: bold; font-size: 16px"
      data-toggle="tab"
      >PPOP Analysis</a
    >
  </li>

  <li class="nav-item" style="margin-right: 10px; font-size: bold">
    <a
      href="#tab3"
      class="nav-link font-size-sm"
      style="background-color: #999; font-weight: bold; font-size: 16px"
      data-toggle="tab"
      >Operating Expense</a
    >
  </li>
</ul>
<div class="tab-content mt-4">
  <div class="tab-pane active fade show" id="tab1">
    <div class="row" style="display: flex; justify-content: center">
      <div class="col-lg-6" style="width: 100%; height: 500px" id="tab1chart1"></div>
      <div class="col-lg-6" style="width: 100%; height: 500px" id="tab1chart2">
        <div class="row" style="width: 100%; height: 50%" id="tab1chart2-1"></div>
        <div class="row" style="width: 100%; height: 50%" id="tab1chart2-2"></div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="tab2">
    <div class="row">
      <div class="col-lg-4" style="width: 100%; height: 500px" id="tab2chart1"></div>
      <div class="col-lg-4" style="width: 100%; height: 500px" id="tab2chart2"></div>
      <div class="col-lg-4" style="width: 100%; height: 500px" id="tab2chart3"></div>
    </div>
  </div>
  <div class="tab-pane fade" id="tab3">
    <div class="row">
      <div class="col-lg-3 ${
        currentLOB === "FMKD" ? "col-lg-6" : ""
      }" style="width: 100%; height: 500px" id="tab3chart1"></div>
      <div class="col-lg-4" style="width: 100%; height: 500px ${
        currentLOB === "FMKD" ? ";display:none" : ""
      }" id="tab3chart2"></div>
      <div class="col-lg-5 ${
        currentLOB === "FMKD" ? "col-lg-6" : ""
      }" style="width: 100%; height: 500px" id="tab3chart3"></div>
    </div>
  </div>
</div>
`;

  $("[data-name=ChartBlock]").find(".echart").html(html);

  $(".tabulDom li").click(function () {
    const id = $(this).children().attr("href");

    $(this).children().css("background-color", "#ED1E30");
    $(this).siblings().children().css("background-color", "#999");
    renderEcharts(id);
  });

  let tab1chart1, tab1chart21, tab1chart22;
  let tab2chart1, tab2chart2, tab2chart3;
  let tab3chart1, tab3chart2, tab3chart3;
  const renderEcharts = async (id) => {
    if (id == "#tab1") {
      $("[data-name=ChartBlock] .card-body .tab-content").block({
        message: '<i class="icon-spinner4 spinner"></i>',
        overlayCSS: {
          backgroundColor: "#fff",
          opacity: 1,
          cursor: "wait",
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: "transparent",
        },
      });

      const { tab1chart1, tab1chart21, tab1chart22 } = await getChartData(
        "BeaChina_LOB_Portofolio_rate"
      );

      $("[data-name=ChartBlock] .card-body .tab-content").unblock();

      if (_.isEmpty(tab1chart21)) {
        $("#tab1chart2").hide();
      }

      renderTab1chart1(tab1chart1);
      renderTab1chart21(tab1chart21.data, tab1chart21.extradata);
      renderTab1chart22(tab1chart22.data, tab1chart22.extradata);
    } else if (id == "#tab2") {
      $("[data-name=ChartBlock] .card-body .tab-content").block({
        message: '<i class="icon-spinner4 spinner"></i>',
        overlayCSS: {
          backgroundColor: "#fff",
          opacity: 1,
          cursor: "wait",
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: "transparent",
        },
      });

      const { tab2chart1, tab2chart2, tab2chart3 } = await getChartData(
        "BeaChina_LOB_Ppop_Analysis"
      );

      $("[data-name=ChartBlock] .card-body .tab-content").unblock();

      renderTab2chart1(tab2chart1.data, tab2chart1.extradata);
      renderTab2chart2(tab2chart2.data, tab2chart2.extradata);
      renderTab2chart3(tab2chart3.data, tab2chart3.extradata);
    } else {
      $("[data-name=ChartBlock] .card-body .tab-content").block({
        message: '<i class="icon-spinner4 spinner"></i>',
        overlayCSS: {
          backgroundColor: "#fff",
          opacity: 1,
          cursor: "wait",
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: "transparent",
        },
      });

      // const { tab3chart1, tab3chart2, tab3chart3 } = await getChartData(
      //   "BeaChina_LOB_Operating_Expense"
      // );
      const { tab3chart1, tab3chart2, tab3chart3 } = {
        tab3chart1: [
          [
            "Account",
            "Staff cost",
            "Premise and equipment ",
            "IT Expense ",
            "Card expense",
            "Platform fee",
            "Others",
          ],
          ["data", "223297.50", "306150.80", "366403.60", "374807.30", "229759.40", "286563.70"],
        ],
        tab3chart2: {
          data: [
            ["index", "PB", "零售产品", "财富管理", "Platform financing", "Card"],
            ["2021_Budget", "-", "-", "-", "-", "-"],
            ["Actual", "-", "-", "-", "-", "-"],
          ],
          extraData: {
            Actual: {
              零售产品: 3340977.5,
              财富管理: 2004586.5,
              "Platform financing": 4677368.5,
              Card: 2672782,
              PB: 12695714.5,
            },
            "2021_Budget": {
              零售产品: 7500000,
              财富管理: 4500000,
              "Platform financing": 10500000,
              Card: 6000000,
              PB: 28500000,
            },
          },
        },
        tab3chart3: {
          data: [
            [
              "index",
              "Total",
              "Staff cost",
              "Premise and equipment ",
              "IT Expense ",
              "Card expense",
              "Platform fee",
              "Others",
            ],
            ["2021_Budget", 1, 1, 1, 1, 1, 1, 1],
            [
              "Actual",
              0.44546366666666665,
              0.5942,
              0.5656365000000001,
              0.4400196,
              0.46102879999999996,
              0.341521,
              0.3616993333333333,
            ],
          ],
          extraData: {
            Actual: {
              Total: 12695714.5,
              "Staff cost": 2257960,
              "Premise and equipment ": 2149418.7,
              "IT Expense ": 2090093.1,
              "Card expense": 2189886.8,
              "Platform fee": 1946669.7,
              Others: 2061686.2,
            },
            "2021_Budget": {
              Total: 28500000,
              "Staff cost": 3800000,
              "Premise and equipment ": 3800000,
              "IT Expense ": 4750000,
              "Card expense": 4750000,
              "Platform fee": 5700000,
              Others: 5700000,
            },
          },
        },
      };

      $("[data-name=ChartBlock] .card-body .tab-content").unblock();

      setTimeout(function () {
        renderTab3chart1(tab3chart1);
        // renderTab3chart2(tab3chart2);
        renderTab3chart2(tab3chart2.data, tab3chart2.extraData);
        renderTab3chart3(tab3chart3.data, tab3chart3.extraData);
      }, 1000);
    }

    $(window).on("resize", () => {
      tab1chart1.resize();
      tab1chart21.resize();
      tab1chart22.resize();

      tab2chart1.resize();
      tab2chart2.resize();
      tab2chart3.resize();

      tab3chart1.resize();
      tab3chart2.resize();
      tab3chart3.resize();
    });
  };

  const renderTab1chart1 = (chartData) => {
    tab1chart1 = echarts.init(document.getElementById("tab1chart1"));

    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: (params) => {
          let html = "";

          html += `${params[0].axisValueLabel} <br>`;
          html += `${params[0].dimensionNames[8]} : ${params[0].data[8].toLocaleString("zh", {
            maximumFractionDigits: 2,
          })} <br>`;
          html += `${params[0].dimensionNames[9]} : ${params[0].data[9].toLocaleString("zh", {
            maximumFractionDigits: 2,
          })}<br>`;

          params.forEach((val, i) => {
            let value = val.value[val.encode.y[0]];

            const { marker, seriesName, seriesType } = val;

            if (seriesType === "line") value = (value * 100).toFixed(2) + "%";
            if (seriesType === "bar")
              value = value.toLocaleString("zh", { maximumFractionDigits: 2 });

            html += `${marker} ${seriesName}: ${value} <br>`;
          });

          return html;
        },
      },
      title: {
        text: "Loan & Deposit(Ending)",
        left: "left",
      },
      legend: {
        y: "10%",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "25%",
        containLabel: true,
      },
      yAxis: [
        {
          type: "value",
        },
        {
          type: "value",
          axisLabel: {
            formatter: (value) => {
              return (value * 100).toFixed(2) + "%";
            },
          },
        },
      ],
      xAxis: [
        {
          type: "category",
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
        },
        {
          type: "category",
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
        },
        {
          type: "category",
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
        },
      ],
      dataset: {
        source: chartData,
      },
      series: [
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          stack: "total",
          itemStyle: {
            color: "#C7081F",
          },
        },
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          stack: "total",
          itemStyle: {
            color: "#FEC565",
          },
        },
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          stack: "total",
          itemStyle: {
            color: "#D9D9D9",
          },
        },
        {
          xAxisIndex: 1,
          barGap: "-200%",
          type: "bar",
          barWidth: "30%",
          stack: "total2",
          itemStyle: {
            color: "#7186A0",
          },
        },
        {
          xAxisIndex: 1,
          barGap: "-200%",
          type: "bar",
          barWidth: "30%",
          stack: "total2",
          itemStyle: {
            color: "#ED7419",
          },
        },
        {
          xAxisIndex: 1,
          barGap: "-200%",
          type: "bar",
          barWidth: "30%",
          stack: "total2",
          itemStyle: {
            color: "#D8B988",
          },
        },
        {
          type: "line",
          yAxisIndex: 1,
          xAxisIndex: 2,
          symbolSize: 8,
          itemStyle: {
            normal: {
              lineStyle: {
                width: 3,
              },
            },
          },
        },
        // {
        //   xAxisIndex: 1,
        //   barGap: "-200%",
        //   type: "bar",
        //   barWidth: "30%",
        //   stack: "total2",
        //   // itemStyle: {
        //   //   color: "#999",
        //   // },
        // },
        // {
        //   xAxisIndex: 1,
        //   barGap: "-200%",
        //   type: "bar",
        //   barWidth: "30%",
        //   stack: "total2",
        //   // itemStyle: {
        //   //   color: "#999",
        //   // },
        // },
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          data: [],
        },
        {
          xAxisIndex: 1,
          type: "bar",
          barWidth: "30%",
          data: [],
        },
      ],
    };

    tab1chart1.setOption(option);

    tab1chart1.off("click");
    tab1chart1.on("click", async (params) => {
      toPage(1);
    });
  };
  const renderTab1chart21 = (chartData, extraData) => {
    tab1chart21 = echarts.init(document.getElementById("tab1chart2-1"));

    let option = {
      tooltip: {
        trigger: "axis",
        formatter: (params) => {
          let html = "";

          params.forEach((val, i) => {
            let value = val.value[val.encode.y[0]];

            const { axisValueLabel, marker, seriesName, seriesType } = val;

            if (i === 0) html += `${axisValueLabel} <br>`;
            if (seriesType === "line") value = (value * 100).toFixed(2) + "%";

            html += `${marker} ${seriesName}: ${value} <br>`;
          });

          return html;
        },
      },
      title: {
        text: "NIM & NIS (Last 12 M)",
        left: "left",
      },
      dataset: {
        source: chartData,
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          formatter: (value) => {
            return (value * 100).toFixed(2) + "%";
          },
        },
      },
      graphic: [
        {
          type: "group",
          right: "10%",
          top: "3%",
          silent: true,
          children: [
            {
              type: "text",
              z: 100,
              left: "center",
              top: "middle",
              style: {
                fill: "#333",
                text: extraData,
                font: "14px Microsoft YaHei",
              },
            },
          ],
        },
      ],
      series: [
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          itemStyle: {
            color: "#FBBE67",
          },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          itemStyle: {
            color: "#EF3D44",
          },
        },
      ],
    };

    tab1chart21.setOption(option);

    tab1chart21.off("click");
    tab1chart21.on("click", async (params) => {
      const arr = _.split(params.name, "-");
      const clickYear = parseInt(arr[0]).toString();
      const clickPeriod = parseInt(arr[1]).toString();

      $("#select2_pov_Year").val(clickYear).select2();
      $("#select2_pov_Period").val(clickPeriod).select2();

      MapBlock();
      ChartBlock();
    });
  };
  const renderTab1chart22 = (chartData, extraData) => {
    tab1chart22 = echarts.init(document.getElementById("tab1chart2-2"));

    let option = {
      tooltip: {
        trigger: "axis",
        formatter: (params) => {
          let html = "";

          params.forEach((val, i) => {
            let value = val.value[val.encode.y[0]];

            const { axisValueLabel, marker, seriesName, seriesType } = val;

            if (i === 0) html += `${axisValueLabel} <br>`;
            if (seriesType === "line") value = (value * 100).toFixed(2) + "%";

            html += `${marker} ${seriesName}: ${value} <br>`;
          });

          return html;
        },
      },
      title: {
        text: "CIR (Last 12 M)",
        left: "left",
      },
      dataset: {
        source: chartData,
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          formatter: (value) => {
            return (value * 100).toFixed(2) + "%";
          },
        },
      },
      graphic: [
        {
          type: "group",
          right: "10%",
          top: "3%",
          silent: true,
          children: [
            {
              type: "text",
              z: 100,
              left: "center",
              top: "middle",
              style: {
                fill: "#333",
                text: extraData,
                font: "14px Microsoft YaHei",
              },
            },
          ],
        },
      ],
      series: [
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          itemStyle: {
            color: "#FBBE67",
          },
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
          itemStyle: {
            color: "#EF3D44",
          },
        },
      ],
    };

    tab1chart22.setOption(option);

    tab1chart22.off("click");
    tab1chart22.on("click", async (params) => {
      const arr = _.split(params.name, "-");
      const clickYear = parseInt(arr[0]).toString();
      const clickPeriod = parseInt(arr[1]).toString();

      $("#select2_pov_Year").val(clickYear).select2();
      $("#select2_pov_Period").val(clickPeriod).select2();

      MapBlock();
      ChartBlock();
    });
  };

  const renderTab2chart1 = (chartData, extraData) => {
    tab2chart1 = echarts.init(document.getElementById("tab2chart1"));

    let option = {
      dataset: {
        source: chartData,
      },
      title: {
        text: "PPOP Waterfall analysis",
        left: "left",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: function (params) {
          const currentData = params
            .filter((_val, i) => {
              return i !== 1;
            })
            .map((val) => {
              return {
                name: val.seriesName,
                value: val.value[val.encode.y[0]],
                dataIndex: val.dataIndex,
                data: val.data,
              };
            })
            .filter((val) => {
              return val.value !== "-";
            })[0];

          return `${params[0].name}<br/>${currentData.name}: ${currentData.value.toLocaleString(
            "zh",
            { maximumFractionDigits: 2 }
          )} ${chartData[0].length - 2 === currentData.dataIndex ? `(${extraData})` : ""}`;
        },
      },
      legend: {
        orient: "horizontal",
        y: 30,
        data: ["汇总", "增加", "减少"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: 70,
        containLabel: true,
      },
      xAxis: {
        type: "category",
        splitLine: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          rotate: 40,
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          type: "bar",
          barWidth: "50%",
          stack: "total",
          label: {
            show: true,
            position: "top",
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#813841",
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
          barWidth: "50%",
          stack: "total",
          itemStyle: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
          emphasis: {
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
          barWidth: "50%",
          stack: "total",
          label: {
            show: true,
            position: "top",
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#D1423B",
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
          barWidth: "50%",
          stack: "total",
          label: {
            show: true,
            position: "bottom",
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#999",
          },
          seriesLayoutBy: "row",
        },
      ],
    };

    tab2chart1.setOption(option);

    tab2chart1.off("click");
    tab2chart1.on("click", async (params) => {
      toPage(2);
    });
  };
  const renderTab2chart2 = (chartData, extraData) => {
    tab2chart2 = echarts.init(document.getElementById("tab2chart2"));

    let option = {
      dataset: {
        source: chartData,
      },
      title: {
        text: "NII Waterfall analysis",
        left: "left",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: function (params) {
          const currentData = params
            .filter((_val, i) => {
              return i !== 1;
            })
            .map((val) => {
              return {
                name: val.seriesName,
                value: val.value[val.encode.y[0]],
                dataIndex: val.dataIndex,
                data: val.data,
              };
            })
            .filter((val) => {
              return val.value !== "-";
            })[0];

          return `${params[0].name}<br/>${currentData.name}: ${currentData.value.toLocaleString(
            "zh",
            { maximumFractionDigits: 2 }
          )} ${chartData[0].length - 2 === currentData.dataIndex ? `(${extraData})` : ""}`;
        },
      },
      legend: {
        orient: "horizontal",
        y: 30,
        data: ["汇总", "增加", "减少"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: 70,
        containLabel: true,
      },
      xAxis: {
        type: "category",
        splitLine: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          rotate: 40,
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          type: "bar",
          barWidth: "50%",
          stack: "total",
          label: {
            show: true,
            position: "top",
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#FEC565",
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
          barWidth: "50%",
          stack: "total",
          itemStyle: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
          emphasis: {
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
          barWidth: "50%",
          stack: "total",
          label: {
            show: true,
            position: "top",
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#E6943E",
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
          barWidth: "50%",
          stack: "total",
          label: {
            show: true,
            position: "bottom",
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#999",
          },
          seriesLayoutBy: "row",
        },
      ],
    };

    tab2chart2.setOption(option);

    tab2chart2.off("click");
    tab2chart2.on("click", async (params) => {
      toPage(2);
    });
  };
  const renderTab2chart3 = (chartData, extraData) => {
    tab2chart3 = echarts.init(document.getElementById("tab2chart3"));

    let option = {
      dataset: {
        source: chartData,
      },
      title: {
        text: "NFI Waterfall analysis",
        left: "left",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: function (params) {
          const currentData = params
            .filter((_val, i) => {
              return i !== 1;
            })
            .map((val) => {
              return {
                name: val.seriesName,
                value: val.value[val.encode.y[0]],
                dataIndex: val.dataIndex,
                data: val.data,
              };
            })
            .filter((val) => {
              return val.value !== "-";
            })[0];

          return `${params[0].name}<br/>${currentData.name}: ${currentData.value.toLocaleString(
            "zh",
            { maximumFractionDigits: 2 }
          )} ${chartData[0].length - 2 === currentData.dataIndex ? `(${extraData})` : ""}`;
        },
      },
      legend: {
        orient: "horizontal",
        y: 30,
        data: ["汇总", "增加", "减少"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: 70,
        containLabel: true,
      },
      xAxis: {
        type: "category",
        splitLine: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          rotate: 40,
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          type: "bar",
          barWidth: "50%",
          stack: "total",
          label: {
            show: true,
            position: "top",
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#FEC565",
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
          barWidth: "50%",
          stack: "total",
          itemStyle: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
          emphasis: {
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
          barWidth: "50%",
          stack: "total",
          label: {
            show: true,
            position: "top",
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#E6943E",
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
          barWidth: "50%",
          stack: "total",
          label: {
            show: true,
            position: "bottom",
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#999",
          },
          seriesLayoutBy: "row",
        },
      ],
    };

    tab2chart3.setOption(option);

    tab2chart3.off("click");
    tab2chart3.on("click", async (params) => {
      toPage(2);
    });
  };

  const renderTab3chart1 = (chartData) => {
    tab3chart1 = echarts.init(document.getElementById("tab3chart1"));

    let option = {
      tooltip: {},
      dataset: {
        source: chartData,
      },
      title: {
        text: "OE by Item",
        left: "left",
      },
      legend: {
        orient: "horizontal",
        left: "left",
        top: "bottom",
      },
      // color: ["#C34D53", "#CD6B62", "#DC9C7C", "#E6BB8B", "#EED498", "#F2E19E"],
      color: ["#C7081F", "#FEC565", "#D8B988", "#E63F1F", "#D9D9D9", "#7186A0"],
      series: [
        {
          type: "pie",
          radius: ["20%", "80%"],
          // radius: [20, 160],
          center: ["50%", "50%"],
          // roseType: "radius",
          // itemStyle: {
          //   borderRadius: 5,
          // },
          label: {
            show: true,
            position: "inner",
          },
          emphasis: {
            label: {
              show: false,
            },
          },
          seriesLayoutBy: "row",
        },
      ],
    };

    tab3chart1.setOption(option);

    tab3chart1.off("click");
    tab3chart1.on("click", async (params) => {
      toPage(3);
    });
  };

  const renderTab3chart2 = (chartData, extraData) => {
    tab3chart2 = echarts.init(document.getElementById("tab3chart2"));

    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: (params) => {
          let html = "";

          params.forEach((val, i) => {
            let value = val.value[val.encode.x[0]];

            const { axisValueLabel, marker, seriesName, seriesType } = val;

            if (i === 0) html += `${axisValueLabel} <br>`;
            value = (value * 100).toFixed(2) + "%";

            let extraValue = extraData[seriesName][axisValueLabel].toLocaleString("zh", {
              maximumFractionDigits: 2,
            });

            html += `${marker} ${seriesName}: ${extraValue} ${
              value === "100.00%" ? "" : `(${value})`
            } <br>`;
          });

          return html;
        },
      },
      legend: {
        y: "10%",
      },
      title: {
        // text: "OE tracking",
        text: `OE tracking - by ${
          currentLOB === "CB" ? "region" : currentLOB === "PB" ? "seg" : ""
        }`,
        left: "left",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "20%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          formatter: (value) => {
            return (value * 100).toFixed(2) + "%";
          },
        },
      },
      yAxis: [
        {
          type: "category",
          boundaryGap: true,
          inverse: true,
          axisLabel: {
            interval: 0,
          },
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
        },
        {
          type: "category",
          inverse: true,
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
        },
      ],
      dataset: {
        source: chartData,
      },
      graphic: [
        {
          type: "group",
          right: "10%",
          top: "3%",
          silent: true,
          children: [
            {
              type: "text",
              z: 100,
              left: "center",
              top: "middle",
              style: {
                fill: "#333",
                text: "缺少数据时不显示图形",
                font: "14px Microsoft YaHei",
              },
            },
          ],
        },
      ],
      series: [
        {
          yAxisIndex: 0,
          type: "bar",
          barWidth: "50%",
          seriesLayoutBy: "row",
          itemStyle: {
            color: "rgba(155, 155, 155, 0.5)",
          },
        },
        {
          yAxisIndex: 1,
          type: "bar",
          barWidth: "30%",
          seriesLayoutBy: "row",
        },
      ],
    };

    tab3chart2.setOption(option);

    tab3chart2.off("click");
    tab3chart2.on("click", async (params) => {
      toPage(3);
    });
  };

  const renderTab3chart3 = (chartData, extraData) => {
    tab3chart3 = echarts.init(document.getElementById("tab3chart3"));

    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: (params) => {
          let html = "";

          params.forEach((val, i) => {
            let value = val.value[val.encode.x[0]];

            const { axisValueLabel, marker, seriesName, seriesType } = val;

            if (i === 0) html += `${axisValueLabel} <br>`;
            value = (value * 100).toFixed(2) + "%";

            let extraValue = extraData[seriesName][axisValueLabel].toLocaleString("zh", {
              maximumFractionDigits: 2,
            });

            html += `${marker} ${seriesName}: ${extraValue} ${
              value === "100.00%" ? "" : `(${value})`
            } <br>`;
          });

          return html;
        },
      },
      legend: {
        y: "10%",
      },
      title: {
        text: "OE tracking - by item",
        left: "left",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "20%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          formatter: (value) => {
            return (value * 100).toFixed(2) + "%";
          },
        },
      },
      yAxis: [
        {
          type: "category",
          boundaryGap: true,
          inverse: true,
          axisLabel: {
            interval: 0,
          },
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
        },
        {
          type: "category",
          inverse: true,
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
        },
      ],
      dataset: {
        source: chartData,
      },
      series: [
        {
          yAxisIndex: 0,
          type: "bar",
          barWidth: "50%",
          seriesLayoutBy: "row",
          itemStyle: {
            color: "rgba(155, 155, 155, 0.5)",
          },
        },
        {
          yAxisIndex: 1,
          type: "bar",
          barWidth: "30%",
          seriesLayoutBy: "row",
        },
      ],
    };

    tab3chart3.setOption(option);

    tab3chart3.off("click");
    tab3chart3.on("click", async (params) => {
      toPage(3);
    });
  };

  if (typeof activeTab !== "undefined") {
    $(`[data-name=ChartBlock] .tabulDom li [href='${activeTab}']`).tab("show");
    $(`[data-name=ChartBlock] .tabulDom li [href='${activeTab}']`).parent().trigger("click");
  } else {
    $(`[data-name=ChartBlock] .tabulDom li [href='#tab1']`).tab("show");
    $(`[data-name=ChartBlock] .tabulDom li [href='#tab1']`).parent().trigger("click");
  }
};

const getInitData = async () => {
  let result = await getData("BeaChina_LOB_init_data", JSON.stringify({}), "1");
  return result;
};

const mapBack = async () => {
  $("#select2_pov_account").val("PL06").select2();
  let areaMapCode = $("#select2_pov_Entity").val();

  let result = await getData("BeaChina_map_back", JSON.stringify({ Entity: areaMapCode }), "1");

  $("#select2_pov_Entity").val(result.Entity).select2();

  MapBlock();
  ChartBlock();
};

const getData = (pythonName, parameter, runType) => {
  return CommonRequest({
    url: `${Api.pythonWeb}doPythonWeb`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      pythonName,
      parameter,
      runType,
      ...userinfoParams2,
    }),
  });
};

/**
 * 加载百度地图 API
 */
const LoadBaiduMapScript = () => {
  //
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
      resolve(BMap);
    };
    // 插入script脚本
    let scriptNode = document.createElement("script");
    scriptNode.setAttribute("type", "text/javascript");
    scriptNode.setAttribute("src", BMap_URL);
    document.body.appendChild(scriptNode);
  });
};

const getChartData = async (py, extraParams) => {
  const displayOrNotStatus = await displayOrNot();
  if (displayOrNotStatus) return;

  const pov = {
    Entity: $("#select2_pov_Entity").val(),
    Year: $("#select2_pov_Year").val(),
    Period: $("#select2_pov_Period").val(),
    View: $("#select2_pov_View").val(),
    LOB: $("#select2_pov_LOB").val(),
  };

  const result = await getData(
    py,
    JSON.stringify({
      ...pov,
      // Entity: "BeaChina",
      ...extraParams,
    }),
    "1"
  );
  return result;
};

const getMapTableData = async () => {
  const displayOrNotStatus = await displayOrNot();
  if (displayOrNotStatus) return;

  const pov = {
    Entity: $("#select2_pov_Entity").val(),
    Year: $("#select2_pov_Year").val(),
    Period: $("#select2_pov_Period").val(),
    View: $("#select2_pov_View").val(),
    LOB: $("#select2_pov_LOB").val(),
  };
  const tableAccount = $("#select2_pov_account").val();

  const result = await getData(
    "BeaChina_map_branch_income_data",
    JSON.stringify({
      ...pov,
      Account: tableAccount,
    }),
    "1"
  );
  return result;
};

const extraChartModal = async () => {
  $("#extra-chart-modal").modal("show");

  $("#select2_pov_Entity_span").text($("#select2-select2_pov_Entity-container").text());

  const dateControl = document.getElementById("modalExtraChartHeader_date");
  const toDay = new Date().format("yyyy-MM-dd");
  dateControl.value = toDay;

  let modalExtraChart;

  setTimeout(() => {
    $("#modalExtraChart").block({
      message: '<i class="icon-spinner4 spinner"></i>',
      overlayCSS: {
        backgroundColor: "#fff",
        opacity: 1,
        cursor: "wait",
      },
      css: {
        border: 0,
        padding: 0,
        backgroundColor: "transparent",
      },
    });
  }, 300);

  const { tab1chart1: modalExtraChartData } = await getChartData("BeaChina_map_daily_portfolio", {
    Date: toDay,
  });

  $("#modalExtraChart").unblock();

  const day = new Date();
  day.setTime(day.getTime() - 24 * 60 * 60 * 1000);

  $("#modal-daily-date").text(
    `数据截止于${day.getFullYear()}年${day.getMonth() + 1}月${day.getDate()}日`
  );

  const renderModalExtraChart = (chartData) => {
    modalExtraChart = echarts.init(document.getElementById("modalExtraChart"));

    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: (params) => {
          let html = "";

          params.forEach((val, i) => {
            let value = val.value[val.encode.y[0]];

            const { axisValueLabel, marker, seriesName, seriesType } = val;

            if (i === 0) html += `${axisValueLabel} <br>`;
            if (seriesType === "line") value = (value * 100).toFixed(2) + "%";
            if (seriesType === "bar")
              value = value.toLocaleString("zh", { maximumFractionDigits: 2 });

            html += `${marker} ${seriesName}: ${value} <br>`;
          });

          return html;
        },
      },
      // title: {
      //   text: `Loan & Deposit(Ending) 数据截止于${day.getFullYear()}年${
      //     day.getMonth() + 1
      //   }月${day.getDate()}日`,
      //   left: "left",
      // },
      legend: {
        y: "1%",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "10%",
        containLabel: true,
      },
      yAxis: [
        {
          type: "value",
        },
        {
          type: "value",
          axisLabel: {
            formatter: (value) => {
              return (value * 100).toFixed(2) + "%";
            },
          },
        },
      ],
      xAxis: [
        {
          type: "category",
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
        },
        {
          type: "category",
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
        },
        {
          type: "category",
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
        },
      ],
      dataset: {
        source: chartData,
      },
      series: [
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          stack: "total",
          // label: {
          //   show: true,
          //   formatter: function (params) {
          //     const val = params.value[params.encode.y[0]];
          //     return val.toLocaleString("zh", { maximumFractionDigits: 2 });
          //   },
          // },
          itemStyle: {
            color: "#82032B",
          },
        },
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          stack: "total",
          // label: {
          //   show: true,
          //   formatter: function (params) {
          //     const val = params.value[params.encode.y[0]];
          //     return val.toLocaleString("zh", { maximumFractionDigits: 2 });
          //   },
          // },
          itemStyle: {
            color: "#ED1D30",
          },
        },
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          stack: "total",
          // label: {
          //   show: true,
          //   formatter: function (params) {
          //     const val = params.value[params.encode.y[0]];
          //     return val.toLocaleString("zh", { maximumFractionDigits: 2 });
          //   },
          // },
          itemStyle: {
            color: "#FFDF02",
          },
        },
        {
          xAxisIndex: 1,
          barGap: "-200%",
          type: "bar",
          barWidth: "30%",
          stack: "total2",
          // label: {
          //   show: true,
          //   formatter: function (params) {
          //     const val = params.value[params.encode.y[0]];
          //     return val.toLocaleString("zh", { maximumFractionDigits: 2 });
          //   },
          // },
          itemStyle: {
            color: "#F7901D",
          },
        },
        {
          xAxisIndex: 1,
          barGap: "-200%",
          type: "bar",
          barWidth: "30%",
          stack: "total2",
          // label: {
          //   show: true,
          //   formatter: function (params) {
          //     const val = params.value[params.encode.y[0]];
          //     return val.toLocaleString("zh", { maximumFractionDigits: 2 });
          //   },
          // },
          itemStyle: {
            color: "#FFCF9F",
          },
        },
        {
          xAxisIndex: 1,
          barGap: "-200%",
          type: "bar",
          barWidth: "30%",
          stack: "total2",
          // label: {
          //   show: true,
          //   formatter: function (params) {
          //     const val = params.value[params.encode.y[0]];
          //     return val.toLocaleString("zh", { maximumFractionDigits: 2 });
          //   },
          // },
          itemStyle: {
            color: "#999",
          },
        },
        {
          type: "line",
          yAxisIndex: 1,
          xAxisIndex: 2,
          symbolSize: 8,
          itemStyle: {
            normal: {
              lineStyle: {
                width: 3,
              },
            },
          },
        },
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          data: [],
        },
        {
          xAxisIndex: 1,
          type: "bar",
          barWidth: "30%",
          data: [],
        },
      ],
    };
    modalExtraChart.setOption(option);

    modalExtraChart.off("click");
    modalExtraChart.on("click", async () => {
      toPage(4);
    });
  };

  renderModalExtraChart(modalExtraChartData);

  $(".freshBS3")
    .off("click")
    .on("click", async () => {
      $("#modalExtraChart").block({
        message: '<i class="icon-spinner4 spinner"></i>',
        overlayCSS: {
          backgroundColor: "#fff",
          opacity: 1,
          cursor: "wait",
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: "transparent",
        },
      });

      const { tab1chart1: modalExtraChartData } = await getChartData(
        "BeaChina_map_daily_portfolio",
        {
          Date: dateControl.value,
        }
      );

      $("#modalExtraChart").unblock();

      renderModalExtraChart(modalExtraChartData);
    });
};

const displayOrNot = async () => {
  const getData = (pythonName, parameter, runType) => {
    return CommonRequest({
      url: `${Api.pythonWeb}doPythonWeb`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        pythonName,
        parameter,
        runType,
        ...userinfoParams2,
      }),
    });
  };

  const pov = {
    Entity: $("#select2_pov_Entity").val(),
    Year: $("#select2_pov_Year").val(),
    Period: $("#select2_pov_Period").val(),
    View: $("#select2_pov_View").val(),
  };

  const result = await getData(
    "BeaChina_display_or_not",
    JSON.stringify({
      ...pov,
    }),
    "1"
  );

  // if (result === true) {
  //   $(".dashBoardContent").css({ display: "none" });
  //   $(".dashBoardContent_notion").css({ display: "" });

  //   return true;
  // } else {
  //   $(".dashBoardContent").css({ display: "" });
  //   $(".dashBoardContent_notion").css({ display: "none" });

  //   return false;
  // }

  if (result === true) {
    $(".dashBoardContent").css({ display: "" });
    $(".dashBoardContent_notion").css({ display: "none" });

    return false;
  } else {
    $(".dashBoardContent").css({ display: "none" });
    $(".dashBoardContent_notion").css({ display: "" });

    return true;
  }
};

const toPage = (sign) => {
  let urls;

  if (sign === 1) {
    urls = `../dataSheet/dataSheet.html?appid=4&isLayer=true&param1=GRDEEN4J9PN4KV&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%2C%7B%22name%22%3A%22%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20Dashboard%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%22%2C%22foldId%22%3A%228784544%22%2C%22elementId%22%3A%22DIREDVIL4DIPL1%22%7D%5D&elementType=GRD&elementId=GRDEEN4J9PN4KV&folderId=8784615&elementTitle=d_data_portfolio_2&pageName=d_data_portfolio_2`;
  }
  if (sign === 2) {
    urls = `../dataSheet/dataSheet.html?appid=4&isLayer=true&param1=GRDEEONILS099J&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%2C%7B%22name%22%3A%22%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20Dashboard%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%22%2C%22foldId%22%3A%228784544%22%2C%22elementId%22%3A%22DIREDVIL4DIPL1%22%7D%5D&elementType=GRD&elementId=GRDEEONILS099J&folderId=8784623&elementTitle=d_data_PPOP_2&pageName=d_data_PPOP_2`;
  }
  if (sign === 3) {
    urls = `../dataSheet/dataSheet.html?appid=4&isLayer=true&param1=GRDEEONIRPR025&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%2C%7B%22name%22%3A%22%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20Dashboard%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%22%2C%22foldId%22%3A%228784544%22%2C%22elementId%22%3A%22DIREDVIL4DIPL1%22%7D%5D&elementType=GRD&elementId=GRDEEONIRPR025&folderId=8784624&elementTitle=d_data_Expense_2&pageName=d_data_Expense_2`;
  }
  if (sign === 4) {
    urls = `../dataSheet/dataSheet.html?appid=4&isLayer=true&param1=GRDEENU36PKSI2&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=GRD&elementId=GRDEENU36PKSI2&folderId=8784619&elementTitle=daily_portfolio&pageName=daily_portfolio`;
  }

  parent.layer.open({
    type: 2,
    title: false,
    area: ["100%", "100%"],
    move: false,
    resize: false,
    scrollbar: false,
    content: urls,
    closeBtn: 0,
  });
};
