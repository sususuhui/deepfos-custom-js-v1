$(() => {
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

  let table1_dom = $(`[data-name='table1']`);
  let table2_dom = $(`[data-name='table2']`);
  let chart1_dom = $(`[data-name='chart1']`);
  let map_dom = $(`[data-name='map']`);

  $(".dashBoardContent").html("");

  let html = `
    <div class="row">
      <div style="width:60%">
        <div style="margin-bottom: 1.25rem;">
          <div class="row" id="new_positioning_signs" style="padding-bottom: 2px;"></div>
        </div>
        <div class="row mb-3" id="new_positioning_table1">${table1_dom.prop("outerHTML")}</div>
        <div class="row">
          <div style="width:50%" id="new_positioning_table2">${table2_dom.prop("outerHTML")}</div>
          <div style="width:50%" id="new_positioning_chart1">${chart1_dom.prop("outerHTML")}</div>
        </div>
      </div>
      <div style="width:40%" id="new_positioning_map">${map_dom.prop("outerHTML")}</div>
    </div>
    `;

  $(".dashBoardContent").html(html);

  $("#showDashBoard")
    .find(".freshBS")
    .click(() => {
      renderPage();
    });

  renderPage();

  $(window).on("resize", function () {
    // 调整 datatable 大小
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
    mapChart.resize();
  });
});

const renderPage = () => {
  renderSignDefaultDom();

  renderSign();
  renderTable1();
  renderTable2();
  renderChart1();

  LoadBaiduMapScript();
  renderMap();
};

const renderSignDefaultDom = () => {
  $("#new_positioning_signs").html("");
  let html = `
    <div class="col-3">
      <div class="card">
        <div class="card-body pb-1" style="background-color:#D06687;color:#f0f0f0;cursor: pointer;" onclick="toPage(1)">
          <div class="d-flex align-items-center justify-content-left mb-2">
            <a href="#" class="btn bg-transparent rounded-round border-2 btn-icon mr-3" style="border-color: #f0f0f0">
              <i class="icon-map4" style="color:#f0f0f0"></i>
            </a>
            <div>
              <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">门店数量</div>
              <div class="font-weight-semibold showVal" style="font-size: large">NaN</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-3">
      <div class="card">
        <div class="card-body pb-1" style="background-color:#59C4E6;color:#f0f0f0;cursor: pointer;" onclick="toPage(2)">
          <div class="d-flex align-items-center justify-content-left mb-2">
            <a href="#" class="btn bg-transparent rounded-round border-2 btn-icon mr-3" style="border-color: #f0f0f0">
              <i class="icon-office" style="color:#f0f0f0"></i>
            </a>
            <div>
              <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">已有门店数</div>
              <div class="font-weight-semibold showVal" style="font-size: large">NaN</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-3">
      <div class="card">
        <div class="card-body pb-1" style="background-color:#ADB9CA;color:#f0f0f0;cursor: pointer;" onclick="toPage(3)">
          <div class="d-flex align-items-center justify-content-left mb-2">
            <a href="#" class="btn bg-transparent rounded-round border-2 btn-icon mr-3" style="border-color: #f0f0f0">
              <i class="icon-stats-growth2" style="color:#f0f0f0"></i>
            </a>
            <div>
              <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">未开店数</div>
              <div class="font-weight-semibold showVal" style="font-size: large">NaN</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="col-3">
    <div class="card">
      <div class="card-body pb-1" style="background-color:#59C4E6;color:#f0f0f0;cursor: pointer;" onclick="toPage(4)">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent rounded-round border-2 btn-icon mr-3" style="border-color: #f0f0f0">
            <i class="icon-spinner3" style="color:#f0f0f0"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">开店中</div>
            <div class="font-weight-semibold showVal" style="font-size: large">NaN</div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="col-3">
  <div class="card" style="margin-bottom: unset;">
    <div class="card-body pb-1" style="background-color:#59C4E6;color:#f0f0f0;cursor: pointer;" onclick="toPage(5)">
      <div class="d-flex align-items-center justify-content-left mb-2">
        <a href="#" class="btn bg-transparent rounded-round border-2 btn-icon mr-3" style="border-color: #f0f0f0">
          <i class="icon-hammer-wrench" style="color:#f0f0f0"></i>
        </a>
        <div>
          <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">已装修门店数</div>
          <div class="font-weight-semibold showVal" style="font-size: large">NaN</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="col-3">
  <div class="card" style="margin-bottom: unset;">
    <div class="card-body pb-1" style="background-color:#59C4E6;color:#f0f0f0;cursor: pointer;" onclick="toPage(6)">
      <div class="d-flex align-items-center justify-content-left mb-2">
        <a href="#" class="btn bg-transparent rounded-round border-2 btn-icon mr-3" style="border-color: #f0f0f0">
          <i class="icon-stats-decline2" style="color:#f0f0f0"></i>
        </a>
        <div>
          <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">已关店数量</div>
          <div class="font-weight-semibold showVal" style="font-size: large">NaN</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="col-3">
  <div class="card" style="margin-bottom: unset;">
    <div class="card-body pb-1" style="background-color:#ADB9CA;color:#f0f0f0;cursor: pointer;" onclick="toPage(7)">
      <div class="d-flex align-items-center justify-content-left mb-2">
        <a href="#" class="btn bg-transparent rounded-round border-2 btn-icon mr-3" style="border-color: #f0f0f0">
          <i class="icon-file-text2" style="color:#f0f0f0"></i>
        </a>
        <div>
          <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">预计装修店次数</div>
          <div class="font-weight-semibold showVal" style="font-size: large">NaN</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="col-3">
<div class="card" style="margin-bottom: unset;">
  <div class="card-body pb-1" style="background-color:#ADB9CA;color:#f0f0f0;cursor: pointer;" onclick="toPage(8)">
    <div class="d-flex align-items-center justify-content-left mb-2">
      <a href="#" class="btn bg-transparent rounded-round border-2 btn-icon mr-3" style="border-color: #f0f0f0">
        <i class="icon-file-text2" style="color:#f0f0f0"></i>
      </a>
      <div>
        <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">预计闭店数</div>
        <div class="font-weight-semibold showVal" style="font-size: large">NaN</div>
      </div>
    </div>
  </div>
</div>
</div>
  `;
  $("#new_positioning_signs").html(html);
};

const renderSign = async () => {
  $("#new_positioning_signs").block({
    message: '<i class="icon-spinner4 spinner"></i>',
    overlayCSS: {
      backgroundColor: "#fff",
      opacity: 0.8,
      cursor: "wait",
    },
    css: {
      border: 0,
      padding: 0,
      backgroundColor: "transparent",
    },
  });

  let childProjectCode = showDashBoard.globalCurrentPovObj;
  let pyData = await getData("synthesis_analysis_part1", childProjectCode);

  if (_.isEmpty(pyData.result)) {
    $("#new_positioning_signs").unblock();
    return;
  }

  let data = JSON.parse(pyData.result);
  $("#new_positioning_signs").find(".card").find(".showVal")[0].innerHTML = data[0];
  $("#new_positioning_signs").find(".card").find(".showVal")[1].innerHTML = data[1];
  $("#new_positioning_signs").find(".card").find(".showVal")[2].innerHTML = data[2];
  $("#new_positioning_signs").find(".card").find(".showVal")[3].innerHTML = data[3];
  $("#new_positioning_signs").find(".card").find(".showVal")[4].innerHTML = data[4];
  $("#new_positioning_signs").find(".card").find(".showVal")[5].innerHTML = data[5];
  $("#new_positioning_signs").find(".card").find(".showVal")[6].innerHTML = data[6];
  $("#new_positioning_signs").find(".card").find(".showVal")[7].innerHTML = data[7];

  $("#new_positioning_signs").unblock();
};

const renderTable1 = async () => {
  let cardName = "table1";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);
  echartDom.height(130);
  // cfs.echarts.correctHeight(cardName);
  echartDom.block({
    message: '<i class="icon-spinner4 spinner"></i>',
    overlayCSS: {
      backgroundColor: "#fff",
      opacity: 0.8,
      cursor: "wait",
    },
    css: {
      border: 0,
      padding: 0,
      backgroundColor: "transparent",
    },
  });

  let childProjectCode = showDashBoard.globalCurrentPovObj;
  let pyData = await getData("synthesis_analysis_part2", childProjectCode);
  let data = JSON.parse(pyData.result);

  let header_html = `<tr>`;
  data[0].forEach((val) => {
    header_html += `<th>${val}</th>`;
  });
  header_html += `</tr>`;

  let body_html = ``;
  data.forEach((val, i) => {
    if (i > 0) {
      let body_html_tr = `<tr>`;
      val.forEach((cVal) => {
        if (cVal === "可比门店数") {
          body_html_tr += `<td><a href="javascript:;" onclick="toPage(0,'table1')">${cVal}</a></td>`;
        } else {
          body_html_tr += `<td>${cVal}</td>`;
        }
      });
      body_html_tr += `</tr>`;
      body_html += body_html_tr;
    }
  });

  let html = `
  <table id="table1_DataTable" class="table datatable-basic">
    <thead>
      ${header_html}
    </thead>
    <tbody>
      ${body_html}
    </tbody>
  </table>
  `;
  echartDom.html(html);

  $("#table1_DataTable").DataTable({
    destroy: true,
    bFilter: false, //是否启动过滤、搜索功能
    bLengthChange: true, //开启一页显示多少条数据的下拉菜单，允许用户从下拉框(10、25、50和100)，注意需要分页(bPaginate：true)。
    paging: false,
    stripeClasses: ["odd"],
    processing: false, //隐藏加载提示,自行处理
    serverSide: false, //开启后台分页
    bAutoWidth: false, //是否自适应宽度
    bPaginate: false, //是否显示（应用）分页器
    bSort: false, //是否启动各个字段的排序功能
    info: false,
    sScrollX: "100%",
    language: {
      // "sEmptyTable":"暂无数据"
    },
  });

  echartDom.unblock();
};

const renderTable2 = async () => {
  let cardName = "table2";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);
  echartDom.height(280);
  // cfs.echarts.correctHeight(cardName);
  echartDom.block({
    message: '<i class="icon-spinner4 spinner"></i>',
    overlayCSS: {
      backgroundColor: "#fff",
      opacity: 0.8,
      cursor: "wait",
    },
    css: {
      border: 0,
      padding: 0,
      backgroundColor: "transparent",
    },
  });

  let childProjectCode = showDashBoard.globalCurrentPovObj;
  let pyData = await getData("synthesis_analysis_part4", childProjectCode);
  let data = JSON.parse(pyData.result);

  let header_html = `<tr>`;
  data[0].forEach((val) => {
    header_html += `<th>${val}</th>`;
  });
  header_html += `</tr>`;

  let body_html = ``;
  data.forEach((val, i) => {
    if (i > 0) {
      let body_html_tr = `<tr>`;
      val.forEach((cVal, j) => {
        if (j === 0) {
          body_html_tr += `<td>${cVal}</td>`;
        } else {
          body_html_tr += `<td>${numFormat(cVal)}</td>`;
        }
      });
      body_html_tr += `</tr>`;
      body_html += body_html_tr;
    }
  });

  let html = `
  <table id="table2_DataTable" class="table datatable-basic">
    <thead>
      ${header_html}
    </thead>
    <tbody>
      ${body_html}
    </tbody>
  </table>
  `;
  echartDom.html(html);

  $("#table2_DataTable").DataTable({
    destroy: true,
    bFilter: false, //是否启动过滤、搜索功能
    bLengthChange: true, //开启一页显示多少条数据的下拉菜单，允许用户从下拉框(10、25、50和100)，注意需要分页(bPaginate：true)。
    paging: false,
    stripeClasses: ["odd"],
    processing: false, //隐藏加载提示,自行处理
    serverSide: false, //开启后台分页
    bAutoWidth: false, //是否自适应宽度
    bPaginate: false, //是否显示（应用）分页器
    bSort: false, //是否启动各个字段的排序功能
    info: false,
    sScrollX: "100%",
    language: {
      // "sEmptyTable":"暂无数据"
    },
  });

  echartDom.unblock();
};

const renderChart1 = async () => {
  let cardName = "chart1";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);
  // headDom.find('.card-header').css('display', 'none');
  echartDom.height(300);
  // cfs.echarts.correctHeight(cardName);
  echartDom.block({
    message: '<i class="icon-spinner4 spinner"></i>',
    overlayCSS: {
      backgroundColor: "#fff",
      opacity: 0.8,
      cursor: "wait",
    },
    css: {
      border: 0,
      padding: 0,
      backgroundColor: "transparent",
    },
  });

  let childProjectCode = showDashBoard.globalCurrentPovObj;
  let pyData = await getData("synthesis_analysis_part3", childProjectCode);
  let data = JSON.parse(pyData.result);

  const arrToFixed = (arr) => {
    return arr.map((val, i) => {
      if (val === "-") {
        return val;
      } else {
        let intVal = parseInt(val);
        return (intVal / 1000000).toFixed(2);
      }
    });
  };

  let option = {
    // title: {
    //   text: '阶梯瀑布图',
    //   left: 'center',
    // },
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     // 坐标轴指示器，坐标轴触发有效
    //     type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    //   },
    //   formatter: function (params) {
    //     var tar;
    //     if (params[1].value !== '-') {
    //       tar = params[1];
    //     } else {
    //       tar = params[0];
    //     }
    //     return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
    //   },
    // },

    legend: {
      orient: "horizontal",
      // y: 30,
      data: ["增加", "减少", "汇总"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: 50,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      splitLine: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        formatter: function (value, index) {
          if (index % 2 != 0) {
            return "\n\n" + value;
          } else {
            return value;
          }
        },
      },
      data: data.dimensions,
    },
    yAxis: {
      type: "value",
      name: "M",
    },
    series: [
      {
        name: "汇总",
        type: "bar",
        barWidth: 50,
        stack: "总量",
        label: {
          show: true,
          position: "top",
        },
        // data: data.summary,
        data: arrToFixed(data.summary),
      },
      {
        name: "辅助",
        type: "bar",
        barWidth: 50,
        stack: "总量",
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
        // data: data.support,
        data: arrToFixed(data.support),
      },
      {
        name: "增加",
        type: "bar",
        stack: "总量",
        label: {
          show: true,
          position: "top",
        },
        data: data.add,
        data: arrToFixed(data.add),
      },
      {
        name: "减少",
        type: "bar",
        barWidth: 50,
        stack: "总量",
        data: data.reduce,
        data: arrToFixed(data.reduce),
        label: {
          show: true,
          position: "bottom",
          formatter: function (params) {
            return "-" + params.value;
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

  Cus_echarts[cardName].off("click");
  Cus_echarts[cardName].on("click", (params) => {
    let sign = params.seriesIndex;
    toPage(sign, "chart1");
  });

  echartDom.unblock();
};

let mapChart;
const renderMap = () => {
  let cardName = "map";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  let buttonInfo = {
    id: "MapBackButton",
    text: "后退",
  };
  cfs.card.head.addButton(headDom, buttonInfo);
  $("#MapBackButton").click(function () {
    // mapBack();
    console.log(1);
  });

  cfs.card.body.getDom(cardName).css("padding", "8px");
  cfs.echarts.correctHeight(cardName);

  // 添加地图布局
  let mapHtml = `
  <div class="echartWrap" style="height:100%">
    <div id="mainMapView" style="height:100%"></div>
  </div>
  `;

  echartDom.html(mapHtml);

  mapLevelRenderer();
};

/**
 * 地图渲染器
 * @param {*} level
 * @param {*} MapCode
 */
const mapLevelRenderer = async (level, MapCode) => {
  mapChart = echarts.init(document.getElementById("mainMapView"));
  $("#mainMapView").css("height", "100%");

  let chinaGeoJson = await getGeoJson("100000_full.json");

  // let chinaJson, data;
  // if (level === "Area") {
  //   chinaJson = mergeArea(chinaGeoJson, MapCode);
  //   data = await getData({ Region: `${MapCode}` });
  // } else if (level === "Province" || level === "City") {
  //   chinaJson = await getGeoJson(`${MapCode}_full.json`);
  //   data = await getData({ Region: `${MapCode}` });
  // } else {
  //   chinaJson = mergeProvinces(chinaGeoJson);
  //   data = await getData();
  // }

  // let resultData = JSON.parse(data.result);

  let chinaJson;
  chinaJson = mergeProvinces(chinaGeoJson);
  initMapEcharts(chinaJson, MapCode || "全国");
  console.log(chinaGeoJson);
};

const initMapEcharts = (geoJson, name, data, StoreMap) => {
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
          // min: minValue,
          // max: maxValue,
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
        data: [],
        // data: mapData,
      },
    ],
  };
  mapChart.setOption(option, true);
  // 解绑click事件
  mapChart.off("click");
  //给地图添加监听事件
  mapChart.on("click", async (params) => {
    let MapData = params.data.MapData;

    // if (MapData.level === "District") {
    //   mapOperationArray.push({ level: MapData.level, MapCode: MapData.MapCode });
    //   bmapRenderer(MapData.MapCode, StoreMap);
    // } else {
    //   mapOperationArray.push({ level: MapData.level, MapCode: MapData.MapCode });
    //   mapLevelRenderer(MapData.level, MapData.MapCode);
    // }
  });
};

const toPage = (sign, area) => {
  let urls;
  let childProjectCode = showDashBoard.globalCurrentPovObj;
  console.log(childProjectCode);

  if (_.isUndefined(area)) {
    if (sign === 1) {
      urls = `../dashboard/showDashBoardLayer.html?appid=75&isLayer=true&param1=BIDE903AQV5M0O&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=BID&elementId=BIDE903AQV5M0O&folderId=121&elementTitle=Plan_store&pageName=Plan_store&Custom_params=${encodeURIComponent(
        JSON.stringify(childProjectCode)
      )}`;
    }
    if (sign === 2) {
      urls = `../dashboard/showDashBoardLayer.html?appid=75&isLayer=true&param1=BIDE900UUAH5E1&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=BID&elementId=BIDE900UUAH5E1&folderId=116&elementTitle=Actual_store&pageName=Actual_store&Custom_params=${encodeURIComponent(
        JSON.stringify(childProjectCode)
      )}`;
      // urls = `../dashboard/showDashBoardLayer.html?appid=75&isLayer=true&param1=BIDE900UUAH5E1&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=BID&elementId=BIDE900UUAH5E1&folderId=116&elementTitle=Actual_store&pageName=Actual_store&query_map='{Year: 2021,Scenario: AOP,version: Working,Entity: CT01,}'`;
    }
    if (sign === 3) {
      urls = `../dashboard/showDashBoardLayer.html?appid=75&isLayer=true&param1=BIDE8S4K0ALIJ3&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=BID&elementId=BIDE8S4K0ALIJ3&folderId=102&elementTitle=newstoreplan&pageName=newstoreplan&Custom_params=${encodeURIComponent(
        JSON.stringify(childProjectCode)
      )}`;
    }
    if (sign === 4) {
      urls = `../dashboard/showDashBoardLayer.html?appid=75&isLayer=true&param1=BIDE8SC6T8PGK2&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=BID&elementId=BIDE8SC6T8PGK2&folderId=107&elementTitle=SD_PipelineTrack&pageName=SD_PipelineTrack`;
    }
    if (sign === 5) {
      urls = `../formlistPage/viewformlistPage.html?appid=75&isLayer=true&param1=LSTE9SVCP1OM9C&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=LST&elementId=LSTE9SVCP1OM9C&folderId=1172&elementTitle=reno_app&pageName=reno_app`;
    }
    if (sign === 6) {
      urls = `../formlistPage/viewformlistPage.html?appid=75&isLayer=true&param1=LSTE9TRM0O9HR6&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=LST&elementId=LSTE9TRM0O9HR6&folderId=1623&elementTitle=closureapp&pageName=closureapp`;
    }
    if (sign === 7) {
      urls = `../dataSheet/dataSheet.html?appid=75&isLayer=true&param1=GRDE96B8FM39GD&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%2C%7B%22name%22%3A%22%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20%u95E8%u5E97%u53D8%u66F4%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%22%2C%22foldId%22%3A%22108%22%2C%22elementId%22%3A%22DIRE8SC8P8TUEH%22%7D%5D&elementType=GRD&elementId=GRDE96B8FM39GD&folderId=139&elementTitle=Alteration_Store_List&pageName=Alteration_Store_List`;
    }
    if (sign === 8) {
      let flag = 2;
      urls = `../dataSheet/dataSheet.html?appid=75&isLayer=true&param1=GRDE96B8FM39GD&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%2C%7B%22name%22%3A%22%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%20%20%u95E8%u5E97%u53D8%u66F4%5Cn%20%20%20%20%20%20%5Cn%20%20%20%20%22%2C%22foldId%22%3A%22108%22%2C%22elementId%22%3A%22DIRE8SC8P8TUEH%22%7D%5D&elementType=GRD&elementId=GRDE96B8FM39GD&folderId=139&elementTitle=Alteration_Store_List&pageName=Alteration_Store_List&Custom_params=${flag}`;
    }
  }

  if (area === "chart1") {
    if (sign === 0) {
      urls = `../dataSheet/dataSheet.html?appid=75&isLayer=true&param1=GRDE91P1D6GKOS&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=GRD&elementId=GRDE91P1D6GKOS&folderId=122&elementTitle=PnL_analysis&pageName=PnL_analysis`;
    }
    if (sign === 1) {
      urls = `../dataSheet/dataSheet.html?appid=75&isLayer=true&param1=GRDE9BS85AMQ40&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=GRD&elementId=GRDE9BS85AMQ40&folderId=182&elementTitle=store_sales_forecast&pageName=store_sales_forecast`;
    }
    if (sign === 2) {
      urls = `../dataSheet/dataSheet.html?appid=75&isLayer=true&param1=GRDE9CK7CUU8L6&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=GRD&elementId=GRDE9CK7CUU8L6&folderId=184&elementTitle=store_PnL&pageName=store_PnL`;
    }
    if (sign === 3) {
      urls = `../dataSheet/dataSheet.html?appid=75&isLayer=true&param1=GRDE9M20GN21NF&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=GRD&elementId=GRDE9M20GN21NF&folderId=196&elementTitle=sales_loss_forecast&pageName=sales_loss_forecast`;
    }
    if (sign === 4) {
      urls = `../dataSheet/dataSheet.html?appid=75&isLayer=true&param1=GRDEA8T0ONACAT&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=GRD&elementId=GRDEA8T0ONACAT&folderId=8784254&elementTitle=PnL_forecast&pageName=PnL_forecast`;
    }
  }

  if (area === "table1") {
    if (sign === 0) {
      let flag = 1;
      urls = `../dataSheet/dataSheet.html?appid=75&isLayer=true&param1=GRDE9B4MQH9NF1&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=GRD&elementId=GRDE9B4MQH9NF1&folderId=181&elementTitle=CompStore&pageName=CompStore&Custom_params=${flag}`;
    }
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
 *
 * 请求数据
 * @param {*} params
 * @returns
 */
const getData = (pyName, params) => {
  return CommonRequest({
    url: `${Api.python}start/web`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      pyName,
      params,
      ...userinfoParams2,
    }),
  });
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
