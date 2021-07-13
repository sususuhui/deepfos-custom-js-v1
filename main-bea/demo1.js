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
`;
document.head.appendChild(style);

$(() => {
  let html = `
<div class="row dataSheet mb-3" style="height: 600px">
  <div data-name="MapBlock" style="width: 100%" class="pr-2 pl-2 componentCard height100">
    <div class="card spreadCard mb-0" id="MapBlock">
      <div class="card-header bg-white header-elements-inline">
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
  `;
  $(".dashBoardContent").html(html);

  $(".freshBS").on("click", () => {
    MapBlock();
    ChartBlock();
  });

  // 添加地图后退按钮
  const btn = `<button id="mapBack" type="button" class="btn btn-primary legitRipple btn-sm">back</button>`;
  $("[data-name=MapBlock]").find(".header-elements").append(btn);

  LoadBaiduMapScript();
  MapBlock();
  ChartBlock();
});

const MapBlock = async () => {
  let mapChart,
    mapOperationArray = [];

  const html = `
  <div class="row" style="width: 100%; height: 100%">
  <div class="col-lg-6" style="height: 100%">
    <div class="echartWrap" style="height: 100%">
      <div id="mainMapView" style="height: 100%"></div>
    </div>
  </div>

  <div class="col-lg-6" style="height: 100%">
    <div style="display: flex">
      <label class="d-block mr-2">Account</label>
      <div style="width: 200px">
        <select id="select2_pov_account">
          <option value="PL06">Net Profit</option>
          <option value="PL03">Pre-provision Profit</option>
          <option value="PL01">Total operating income</option>
          <option value="PL02">Operating Expense</option>
          <option value="A0201">Net Interest Income</option>
          <option value="A0204">Non Net Interest Income</option>
          <option value="A0106">Loan ending balance</option>
          <option value="A0108">Deposit ending balance</option>
        </select>
      </div>
      <div>
        <span style="cursor: pointer">
          <i class="icon-loop3 icon ml-2 mt-1" style="font-size: 13px"></i>
        </span>
      </div>
    </div>
    <div class="card tableHeight">
      <div class="customAreaWrap">
        <div class="customAreaHeaderBox">
          <table class="table customAreaHeader">
            <tbody>
              <tr>
                <td>Branch</td>
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
            <tbody>
            </tbody>
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

  $("#mapBack")
    .off("click")
    .on("click", () => {
      mapBack();
    });

  const getMapTableData = async (Entity = "Branch") => {
    let pov = showDashBoard.globalCurrentPovObj;
    let tableAccount = $("#select2_pov_account").val();

    let result = await getData(
      "BeaChina_map_branch_income_data",
      JSON.stringify({
        ...pov,
        Entity,
        Account: tableAccount,
      }),
      "1"
    );
    return result;
  };

  const renderTable = (TableData) => {
    let html = ``;
    TableData.forEach((val) => {
      html += `
      <tr>
        <td>${val.Branch}</td>
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

  const mapLevelRenderer = async (level, MapCode, MapData) => {
    mapChart = echarts.init(document.getElementById("mainMapView"));

    let chinaJson;
    if (level === "China") {
      let chinaGeoJson = await getGeoJson("100000_full.json");
      chinaJson = mergeProvinces(chinaGeoJson);
      initMapEcharts(chinaJson, MapCode, MapData);
    }
  };

  const initMapEcharts = (geoJson, MapCode, MapData) => {
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

    echarts.registerMap(MapCode, geoJson);
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
      series: [
        {
          type: "map",
          map: MapCode,
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
          roam: true,
          label: {
            normal: {
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
            },
            emphasis: {
              show: false,
            },
          },
          data: mapData,
        },
      ],
    };
    mapChart.setOption(option, true);

    $(window).on("resize", () => {
      mapChart.resize();
    });

    mapChart.off("click");
    mapChart.on("click", async (params) => {
      let { MapData } = params.data;

      if (MapData.level === "Area") {
        $("#select2_pov_account").val("PL06").select2();

        let areaMapCode = MapData.MapCode;
        const data = await getMapTableData(areaMapCode);

        renderTable(data.TableData);
        bmapRenderer(areaMapCode, data.MapData);
        mapOperationArray.push(areaMapCode);
      }
    });
  };

  const bmapRenderer = async (MapCode, data) => {
    const areaPoint = {
      HBQ: { lat: 39.125596, lng: 117.190182 },
      HDQ: { lat: 32.065922, lng: 118.799309 },
      HNQ: { lat: 22.549053, lng: 114.062499 },
      ZXQ: { lat: 30.580774, lng: 104.069372 },
    };

    const newMapData = data.map((val) => {
      return {
        name: val.Name,
        value: [parseInt(val.Lat), parseInt(val.Lng), { MapCode: val.MapCode }],
      };
    });

    initBmapEcharts(areaPoint[MapCode], newMapData);
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
      let areaMapCode = params.value[2].MapCode;
      const data = await getMapTableData(areaMapCode);
      mapOperationArray.push(areaMapCode);

      $("#select2_pov_account").val("PL06").select2();
      renderTable(data.TableData);
    });
    let bmap = mapChart.getModel().getComponent("bmap").getBMap();
    bmap.setMapStyleV2({
      styleId: "b3de43d148daeed903ac7f0fef3a1f8c",
    });
  };

  /**
   * 首层合并省份为四大区
   * @param {*} chinaJson
   */
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

  const mapBack = async () => {
    if (mapOperationArray.length >= 2) {
      mapChart.dispose();

      let Entity = mapOperationArray[mapOperationArray.length - 2];

      if (Entity === "Branch") {
        $("#select2_pov_account").val("PL06").select2();

        const data = await getMapTableData();
        const { MapData, TableData } = data;
        mapLevelRenderer("China", "Branch", MapData);
        renderTable(TableData);

        mapOperationArray.pop();
      } else {
        $("#select2_pov_account").val("PL06").select2();
        mapChart = echarts.init(document.getElementById("mainMapView"));

        const areaMapCode = Entity;
        const data = await getMapTableData(areaMapCode);

        renderTable(data.TableData);
        bmapRenderer(areaMapCode, data.MapData);

        mapOperationArray.pop();
      }
    }
  };

  const data = await getMapTableData();
  const { MapData, TableData } = data;
  mapLevelRenderer("China", "Branch", MapData);
  mapOperationArray.push("Branch");
  renderTable(TableData);
};

const ChartBlock = () => {
  const html = `
<ul
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
      style="background-color: #ff9800; font-weight: bold; font-size: 16px"
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
    <div class="row">
      <div class="col-lg-6" style="width: 100%; height: 500px" id="tab1chart1"></div>
      <div class="col-lg-6" style="width: 100%; height: 500px" id="tab1chart2">
        <div class="row" style="width: 100%; height: 50%" id="tab1chart2-1"></div>
        <div class="row" style="width: 100%; height: 50%" id="tab1chart2-2"></div>
      </div>
    </div>
  </div>
  <div class="tab-pane fade" id="tab2">
    <div class="row">
      <div class="col-lg-6" style="width: 100%; height: 500px" id="tab2chart1"></div>
      <div class="col-lg-3" style="width: 100%; height: 500px" id="tab2chart2"></div>
      <div class="col-lg-3" style="width: 100%; height: 500px" id="tab2chart3"></div>
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

    $(this).children().css("background-color", "#FF9800");
    $(this).siblings().children().css("background-color", "#999");
    renderEcharts(id);
  });

  let tab1chart1, tab1chart21, tab1chart22;
  let tab2chart1, tab2chart2, tab2chart3;
  let tab3chart1, tab3chart2, tab3chart3;
  const renderEcharts = (id) => {
    if (id == "#tab1") {
      let chartData1 = [
        [
          "product",
          "CB-Loan",
          "PB-Loan",
          "Other-Loan",
          "CB-Deposit",
          "PB-Deposit",
          "Other-Deposit",
        ],
        ["Last Year", 120, 132, 101, 134, 90, 230, 210],
        ["Last M", 120, 132, 101, 134, 90, 230, 210],
        ["Yesterday", 220, 182, 191, 234, 290, 330, 310],
        ["Today", 220, 182, 191, 234, 290, 330, 310],
        ["Budget", 220, 182, 191, 234, 290, 330, 310],
      ];

      let chartData2 = [
        ["product", "1", "2", "3", "4", "5"],
        ["a", 123, 123, 435, 657, 768],
        ["b", 543, 324, 123, 472, 213],
      ];

      let chartData3 = [
        ["product", "1", "2", "3", "4", "5"],
        ["a", 123, 123, 435, 657, 768],
      ];

      renderTab1chart1(chartData1);
      renderTab1chart21(chartData2);
      renderTab1chart22(chartData3);
    } else if (id == "#tab2") {
      setTimeout(function () {
        let chartData = [
          ["product", "2019销售", "存量店增长", "新开店增长", "关店损失", "2020销售"],
          ["汇总", 97776906, "-", "-", "-", 103242635],
          ["辅助", "-", 97776906, 102352413, 103242635, "-"],
          ["增加", "-", 4575507, 1464162, "-", "-"],
          ["减少", "-", "-", "-", 573940, "-"],
        ];

        renderTab2chart1(chartData);

        renderTab2chart2(chartData);

        renderTab2chart3(chartData);
      }, 300);
    } else {
      setTimeout(function () {
        let chartData = [
          ["面积模式", "a", "b", "c", "d"],
          ["xxx", "4", "5", "6", "7"],
        ];

        let chartData2 = [
          ["product", "1月", "2月", "3月", "4月", "5月", "6月"],
          ["Actual", 120, 132, 101, "-", "-", "-", "-"],
          ["Budget", 120, 178, 70, 134, 90, 230, 210],
        ];

        renderTab3chart1(chartData);
        renderTab3chart2(chartData);
        renderTab3chart3(chartData2);
      }, 300);
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
          // Use axis to trigger tooltip
          type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
        },
      },
      legend: {},
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      yAxis: {
        type: "value",
      },
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
          },
        },
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          stack: "total",
          label: {
            show: true,
          },
        },
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          stack: "total",
          label: {
            show: true,
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
  };
  const renderTab1chart21 = (chartData) => {
    tab1chart21 = echarts.init(document.getElementById("tab1chart2-1"));

    let option = {
      tooltip: {
        trigger: "axis",
      },
      dataset: {
        source: chartData,
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
        },
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
        },
      ],
    };

    tab1chart21.setOption(option);
  };
  const renderTab1chart22 = (chartData) => {
    tab1chart22 = echarts.init(document.getElementById("tab1chart2-2"));

    let option = {
      tooltip: {
        trigger: "axis",
      },
      dataset: {
        source: chartData,
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "line",
          smooth: true,
          seriesLayoutBy: "row",
        },
      ],
    };

    tab1chart22.setOption(option);
  };

  const renderTab2chart1 = (chartData) => {
    tab2chart1 = echarts.init(document.getElementById("tab2chart1"));

    let option = {
      dataset: {
        source: chartData,
      },
      title: {
        text: "阶梯瀑布图",
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
              };
            })
            .filter((val) => {
              return val.value !== "-";
            })[0];

          return params[0].name + "<br/>" + currentData.name + " : " + currentData.value;
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
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "bar",
          stack: "total",
          label: {
            show: true,
            position: "top",
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
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
          stack: "total",
          label: {
            show: true,
            position: "top",
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
          stack: "total",
          label: {
            show: true,
            position: "bottom",
          },
          seriesLayoutBy: "row",
        },
      ],
    };

    tab2chart1.setOption(option);
  };
  const renderTab2chart2 = (chartData) => {
    tab2chart2 = echarts.init(document.getElementById("tab2chart2"));

    let option = {
      dataset: {
        source: chartData,
      },
      title: {
        text: "阶梯瀑布图",
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
              };
            })
            .filter((val) => {
              return val.value !== "-";
            })[0];

          return params[0].name + "<br/>" + currentData.name + " : " + currentData.value;
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
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "bar",
          stack: "total",
          label: {
            show: true,
            position: "top",
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
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
          stack: "total",
          label: {
            show: true,
            position: "top",
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
          stack: "total",
          label: {
            show: true,
            position: "bottom",
          },
          seriesLayoutBy: "row",
        },
      ],
    };

    tab2chart2.setOption(option);
  };
  const renderTab2chart3 = (chartData) => {
    tab2chart3 = echarts.init(document.getElementById("tab2chart3"));

    let option = {
      dataset: {
        source: chartData,
      },
      title: {
        text: "阶梯瀑布图",
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
              };
            })
            .filter((val) => {
              return val.value !== "-";
            })[0];

          return params[0].name + "<br/>" + currentData.name + " : " + currentData.value;
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
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "bar",
          stack: "total",
          label: {
            show: true,
            position: "top",
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
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
          stack: "total",
          label: {
            show: true,
            position: "top",
          },
          seriesLayoutBy: "row",
        },
        {
          type: "bar",
          stack: "total",
          label: {
            show: true,
            position: "bottom",
          },
          seriesLayoutBy: "row",
        },
      ],
    };

    tab2chart3.setOption(option);
  };

  const renderTab3chart1 = (chartData) => {
    tab3chart1 = echarts.init(document.getElementById("tab3chart1"));

    let option = {
      tooltip: {},
      dataset: {
        source: chartData,
      },
      series: [
        {
          type: "pie",
          radius: [30, 70],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 8,
          },
          seriesLayoutBy: "row",
        },
      ],
    };

    tab3chart1.setOption(option);
  };
  const renderTab3chart2 = (chartData) => {
    tab3chart2 = echarts.init(document.getElementById("tab3chart2"));

    let option = {
      tooltip: {},
      dataset: {
        source: chartData,
      },
      series: [
        {
          type: "pie",
          radius: [30, 70],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 8,
          },
          seriesLayoutBy: "row",
        },
      ],
    };

    tab3chart2.setOption(option);
  };
  const renderTab3chart3 = (chartData) => {
    tab3chart3 = echarts.init(document.getElementById("tab3chart3"));

    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {},
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      yAxis: {
        type: "value",
      },
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
      ],
      dataset: {
        source: chartData,
      },
      series: [
        {
          xAxisIndex: 0,
          type: "bar",
          barWidth: "30%",
          seriesLayoutBy: "row",
        },

        {
          xAxisIndex: 1,
          type: "bar",
          barWidth: "40%",
          seriesLayoutBy: "row",
          itemStyle: {
            color: "rgba(155, 155, 155, 0.5)",
          },
        },
      ],
    };

    tab3chart3.setOption(option);
  };

  renderEcharts("#tab1");
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
