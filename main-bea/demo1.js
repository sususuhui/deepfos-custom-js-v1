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
  cursor: pointer;
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

let mapChart,
  mapOperationArray = [];
const r1 = async () => {
  // 添加地图后退按钮
  const btn = `<button type="button" class="btn btn-primary legitRipple btn-sm">后退</button>`;
  $("[data-name=r1]").find(".header-elements").append(btn);

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
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

  `;

  $("[data-name=r1]").find(".echart").append(html);

  // 设置中间滚动table得最大高度
  $(".scrollTable").css({
    "max-height": `420px`,
    "min-height": `420px`,
  });

  mapLevelRenderer("China", 100000);

  $("#select2_pov_account").select2();

  let pov = showDashBoard.globalCurrentPovObj;
  let tableAccount = $("#select2_pov_account").val();

  let result = await getData(
    "BeaChina_map_branch_income_data",
    JSON.stringify({
      ...pov,
      Account: tableAccount,
    }),
    "1"
  );
  console.log("result: ", result);
};

const mapLevelRenderer = async (level, MapCode) => {
  mapChart = echarts.init(document.getElementById("mainMapView"));
  let chinaGeoJson = await getGeoJson("100000_full.json");
  let chinaJson;
  if (level === "China") {
    chinaJson = mergeProvinces(chinaGeoJson);
  }

  initMapEcharts(chinaJson, MapCode);
};

const initMapEcharts = (geoJson, name) => {
  // let mapData = data.map((v) => {
  //   return { value: v.StoreNum, name: v.name, MapData: v };
  // });
  // console.log(mapData);

  // let valueArr = [];
  // mapData.forEach((val) => {
  //   valueArr.push(val.value);
  // });
  // let minValue = Math.min(...valueArr);
  // let maxValue = Math.max(...valueArr);

  // minValue =
  //   Math.floor(minValue / Math.pow(10, minValue.toString().length - 1)) *
  //   Math.pow(10, minValue.toString().length - 1);
  // maxValue =
  //   Math.ceil(maxValue / Math.pow(10, maxValue.toString().length - 1)) *
  //   Math.pow(10, maxValue.toString().length - 1);

  echarts.registerMap(name, geoJson);
  let option = {
    tooltip: {},

    grid: {
      left: "30%",
      containLabel: true,
    },
    visualMap: {
      // min: minValue,
      // max: maxValue,
      min: 1,
      max: 9999999,
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
        data: [],
        // data: mapData,
      },
    ],
  };
  mapChart.setOption(option, true);
};

/**
 * 首层合并省份为四大区
 * @param {*} chinaJson
 */
const mergeProvinces = (chinaJson) => {
  let refactorFormat = {
    areaDivide: ["华北", "华东", "华南", "中西"],
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
        properties: { name: "中西", level: "area" },
        type: "Feature",
      },
    ],
    type: "FeatureCollection",
  };
  chinaJson.features.forEach((val, i) => {
    refactorFormat.areaDivide.forEach((_, j) => {
      if (
        refactorFormat.areaChildren[j].toString().indexOf(val.properties.name.slice(0, 2)) != -1 &&
        val.properties.name != "" &&
        val.properties.name.slice(0, 2) === "内蒙"
      ) {
        newChinaJson.features[j].geometry.coordinates = [
          ...newChinaJson.features[j].geometry.coordinates,
          [...val.geometry.coordinates],
        ];
      } else if (
        refactorFormat.areaChildren[j].toString().indexOf(val.properties.name.slice(0, 2)) != -1 &&
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

const r2 = () => {
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

  const componentId = $(".dashBoardContent .dataSheet:nth-child(2) div .card .echart").attr("id");
  $("#" + componentId).html(html);

  $(".tabulDom li").click(function () {
    const id = $(this).children().attr("href");
    console.log(id);
    $(this).children().css("background-color", "#FF9800");
    $(this).siblings().children().css("background-color", "#999");
    renderEcharts(id);
  });

  renderEcharts("#tab1");
};

let tab1chart1, tab1chart21, tab1chart22;
let tab2chart1, tab2chart2, tab2chart3;
let tab3chart1, tab3chart2, tab3chart3;
const renderEcharts = (id) => {
  if (id == "#tab1") {
    let chartData1 = [
      ["product", "CB-Loan", "PB-Loan", "Other-Loan", "CB-Deposit", "PB-Deposit", "Other-Deposit"],
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
