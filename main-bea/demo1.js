// 引入 bmap
let bmap_Script = document.createElement("script");
bmap_Script.setAttribute("type", "text/javascript");
bmap_Script.setAttribute("src", "../js/common/bmap.min.js");
document.head.appendChild(bmap_Script);

// 引入 百度地图离线api
let mapInit_Script = document.createElement("script");
mapInit_Script.setAttribute("type", "text/javascript");
mapInit_Script.setAttribute("src", "../js/StbDemo/map/bmap-offline/map3.0_init.js");
document.head.appendChild(mapInit_Script);

let map_Script = document.createElement("script");
map_Script.setAttribute("type", "text/javascript");
map_Script.setAttribute("src", "../js/StbDemo/map/bmap-offline/map3.0.js");
document.head.appendChild(map_Script);

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

$(async () => {
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
          <div>Analysis Dashboard (HKAS Set)</div>
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
            <select id="select2_pov_Entity2"></select>
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
            <input type="date" id="modalExtraChartHeader_date" style="
            border: none;
            border-bottom: 1px solid #ddd;
        " name="modalExtraChartHeader_date" />
          </div>

          <div class="pr-2 d-flex searchSeleteStyle">
            <span class="freshBS3" style="cursor: pointer">
              <i class="icon-loop3 icon mr-2" style="font-size: 13px; margin-top: 10px"></i>
              <span></span
            ></span>
          </div>
        </div>
        <div style="height: 92%; width: 100%; padding: 1rem" id="modalExtraChart">1</div>
      </div>
    </div>
  </div>
</div>
  `;
  $("#showDashBoard").html(html);

  const initData = await getInitData();

  const { Entity, Year, Period, View } = initData;

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

  $("#select2_pov_Entity2").select2({
    data: EntityData,
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

  $(".freshBS").on("click", () => {
    MapBlock();
    ChartBlock();
  });

  // $("[data-name=MapBlock]").find(".card-header").css({ "justify-content": "space-between" });
  // 添加地图后退按钮
  const btn = `<button id="mapBack" type="button" class="btn btn-primary legitRipple btn-sm">MapBack</button>`;
  $("[data-name=MapBlock]").find(".header-elements").append(btn);

  // 添加地图后退按钮
  const btn2 = `<button id="chart-modal-btn" type="button" class="btn btn-primary legitRipple btn-sm ml-4">Daily</button>`;
  $("[data-name=MapBlock]").find(".header-elements").append(btn2);

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
                  <td>Actual_LY</td>
                  <td>Budget</td>
                  <td>Actual</td>
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

  const getMapTableData = async () => {
    const pov = {
      Entity: $("#select2_pov_Entity").val(),
      Year: $("#select2_pov_Year").val(),
      Period: $("#select2_pov_Period").val(),
      View: $("#select2_pov_View").val(),
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
        <td>${val.Actual_LY}</td>
        <td>${val.Budget}</td>
        <td>${val.Actual}</td>
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
    let minValue = Math.min(...valueArr);
    let maxValue = Math.max(...valueArr);

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
    let option = {
      // 加载 bmap 组件
      bmap: {
        // 百度地图中心经纬度
        center: [point.lng, point.lat],
        // 百度地图缩放
        zoom: 6,
        // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
        roam: "move",
        // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
        mapStyle: {
          styleJson: [
            {
              featureType: "water",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "land",
              elementType: "all",
              stylers: {
                color: "#f3f3f3",
              },
            },
            {
              featureType: "railway",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "highway",
              elementType: "all",
              stylers: {
                color: "#fdfdfd",
              },
            },
            {
              featureType: "highway",
              elementType: "labels",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "arterial",
              elementType: "geometry",
              stylers: {
                color: "#fefefe",
              },
            },
            {
              featureType: "arterial",
              elementType: "geometry.fill",
              stylers: {
                color: "#fefefe",
              },
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "green",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "subway",
              elementType: "all",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "manmade",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "local",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "arterial",
              elementType: "labels",
              stylers: {
                visibility: "off",
              },
            },
            {
              featureType: "boundary",
              elementType: "all",
              stylers: {
                color: "#fefefe",
              },
            },
            {
              featureType: "building",
              elementType: "all",
              stylers: {
                color: "#d1d1d1",
              },
            },
            {
              featureType: "label",
              elementType: "labels.text.fill",
              stylers: {
                color: "#999999",
              },
            },
          ],
        },
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
          name: "支行",
          coordinateSystem: "bmap",
          // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
          data: data,
          symbolSize: function (val) {
            return 14;
          },
          label: {
            normal: {
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
    mapChart.on("click", async (params) => {
      $("#select2_pov_account").val("PL06").select2();

      let areaMapCode = params.value[2].MapCode;
      $("#select2_pov_Entity").val(areaMapCode).select2();

      MapBlock();
      ChartBlock();
    });
  };

  const pov = {
    Entity: $("#select2_pov_Entity").val(),
    Year: $("#select2_pov_Year").val(),
    Period: $("#select2_pov_Period").val(),
    View: $("#select2_pov_View").val(),
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
  const activeTab = $("[data-name=ChartBlock] .tabulDom li .active").attr("href");

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
  <li class="nav-item" style="margin-right: 10px">
    <a
      href="#tab1"
      class="nav-link font-size-sm active"
      style="background-color: #999; font-weight: bold; font-size: 16px"
      data-toggle="tab"
      >Portofolio & Rate</a
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
      <div class="col-lg-3" style="width: 100%; height: 500px" id="tab3chart1"></div>
      <div class="col-lg-3" style="width: 100%; height: 500px" id="tab3chart2"></div>
      <div class="col-lg-6" style="width: 100%; height: 500px" id="tab3chart3"></div>
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
        "BeaChina_map_Portofolio_rate"
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
        "BeaChina_map_Ppop_Analysis"
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

      const { tab3chart1, tab3chart2, tab3chart3 } = await getChartData(
        "BeaChina_map_Operating_Expense"
      );

      $("[data-name=ChartBlock] .card-body .tab-content").unblock();

      renderTab3chart1(tab3chart1);
      renderTab3chart2(tab3chart2);
      renderTab3chart3(tab3chart3.data, tab3chart3.extradata);
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
          label: {
            show: true,
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#82032B",
          },
        },
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          stack: "total",
          label: {
            show: true,
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#ED1D30",
          },
        },
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          stack: "total",
          label: {
            show: true,
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
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
          label: {
            show: true,
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
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
          label: {
            show: true,
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
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
          label: {
            show: true,
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#E5E5E5",
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
          )} ${currentData.data.length - 1 === currentData.dataIndex ? `(${extraData})` : ""}`;
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
            color: "#E6E6E6",
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
          )} ${currentData.data.length - 1 === currentData.dataIndex ? `(${extraData})` : ""}`;
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
            color: "#E6943E",
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
            color: "#F4D2A5",
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
            color: "#E6E6E6",
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
          )} ${currentData.data.length - 1 === currentData.dataIndex ? `(${extraData})` : ""}`;
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
            color: "#F9DF4F",
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
            color: "#FBE9B7",
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
            color: "#E6E6E6",
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
      // legend: {
      //   orient: "vertical",
      //   left: "left",
      //   top: "bottom",
      // },
      // color: ["#C34D53", "#CD6B62", "#DC9C7C", "#E6BB8B", "#EED498", "#F2E19E"],
      color: ["#FFDF02", "#E5E5E5", "#FFCF9F", "#82032B", "#ED1D30", "#F7901D"],
      series: [
        {
          type: "pie",
          radius: "85%",
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
  const renderTab3chart2 = (chartData) => {
    tab3chart2 = echarts.init(document.getElementById("tab3chart2"));

    let option = {
      tooltip: {
        formatter: (params) => {
          const { marker, name, value } = params;

          return `${marker} ${name}: ${value.toLocaleString("zh", {
            maximumFractionDigits: 2,
          })} `;
        },
      },
      title: {
        text: "OE by Segment",
        left: "left",
      },
      // color: [
      //   "#e4696d",
      //   "#ec9c9c",
      //   "#f4c8c8",
      //   "#ec8d94",
      //   "#f2b1b2",
      //   "#e4767c",
      //   "#ec8d94",
      //   "#f9e2e3",
      // ],
      color: ["#C34D53", "#CD6B62", "#DC9C7C", "#E6BB8B", "#EED498", "#F2E19E"],
      // visualMap: {
      //   type: "continuous",
      //   min: 12000,
      //   max: 200000,
      //   inRange: {
      //     color: ["#F2E19E", "#EED498", "#E6BB8B", "#DC9C7C", "#CD6B62", "#C34D53"],
      //   },
      // },
      series: {
        type: "sunburst",
        data: chartData,
        radius: [0, "85%"],
        label: {
          rotate: "radial",
        },
      },
    };

    tab3chart2.setOption(option);
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
        text: "OE tracking",
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
          barWidth: "40%",
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
  let result = await getData("BeaChina_init_data", JSON.stringify({}), "1");
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
  const pov = {
    Entity: $("#select2_pov_Entity").val(),
    Year: $("#select2_pov_Year").val(),
    Period: $("#select2_pov_Period").val(),
    View: $("#select2_pov_View").val(),
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

const extraChartModal = async () => {
  $("#extra-chart-modal").modal("show");

  $("#select2_pov_Entity2").val($("#select2_pov_Entity").val()).select2();

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
      title: {
        text: `Loan & Deposit(Ending) 数据截止于${day.getFullYear()}年${
          day.getMonth() + 1
        }月${day.getDate()}日`,
        left: "left",
      },
      legend: {
        y: "10%",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "20%",
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
          label: {
            show: true,
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#82032B",
          },
        },
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          stack: "total",
          label: {
            show: true,
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#ED1D30",
          },
        },
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          stack: "total",
          label: {
            show: true,
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
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
          label: {
            show: true,
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
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
          label: {
            show: true,
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
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
          label: {
            show: true,
            formatter: function (params) {
              const val = params.value[params.encode.y[0]];
              return val.toLocaleString("zh", { maximumFractionDigits: 2 });
            },
          },
          itemStyle: {
            color: "#E5E5E5",
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
          Entity: $("#select2_pov_Entity2").val(),
        }
      );

      $("#modalExtraChart").unblock();

      renderModalExtraChart(modalExtraChartData);
    });
};

const toPage = (sign) => {
  let urls;

  if (sign === 1) {
    urls = `../dataSheet/dataSheet.html?appid=4&isLayer=true&param1=GRDEE2HQI2L1F3&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%2C%7B%22name%22%3A%22%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20Dashboard%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%22%2C%22foldId%22%3A%228784544%22%2C%22elementId%22%3A%22DIREDVIL4DIPL1%22%7D%5D&elementType=GRD&elementId=GRDEE2HQI2L1F3&folderId=8784549&elementTitle=d_data_portfolio&pageName=d_data_portfolio`;
  }
  if (sign === 2) {
    urls = `../dataSheet/dataSheet.html?appid=4&isLayer=true&param1=GRDEE2IDQU3B8R&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%2C%7B%22name%22%3A%22%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20Dashboard%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%22%2C%22foldId%22%3A%228784544%22%2C%22elementId%22%3A%22DIREDVIL4DIPL1%22%7D%5D&elementType=GRD&elementId=GRDEE2IDQU3B8R&folderId=8784550&elementTitle=d_data_PPOP&pageName=d_data_PPOP`;
  }
  if (sign === 3) {
    urls = `../dataSheet/dataSheet.html?appid=4&isLayer=true&param1=GRDEE2IM8NUVE2&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%2C%7B%22name%22%3A%22%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20Dashboard%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%22%2C%22foldId%22%3A%228784544%22%2C%22elementId%22%3A%22DIREDVIL4DIPL1%22%7D%5D&elementType=GRD&elementId=GRDEE2IM8NUVE2&folderId=8784551&elementTitle=d_data_Expense&pageName=d_data_Expense`;
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
