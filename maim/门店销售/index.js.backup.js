var Cus_theme = "westeros";
var Cus_echarts = {};
function Cus_Layout() {
  cfs.card.head.getDom("C2R2").append($(`<div class="customLoader" style="margin-bottom: 2px;">`)); //地图loading
  var contentDom = $("div.dashBoardContent");
  var row = '<div class="row">';
  var col3 = '<div class="col-md-3">';
  var col6 = '<div class="col-md-6">';
  var r = contentDom.prepend($(row)).find("div").first();
  r.css("height", "55rem");
  var c1 = r.append($(col3)).find("div").first();
  var c2 = r.append($(col6)).find("div").eq(1);
  var c3 = r.append($(col3)).find("div").eq(2);
  var c1r1 = c1.append($(row)).find("div").first();
  c1r1.css("height", "14%").css("padding", "5px");
  var c1r2 = c1.append($(row)).find("div").eq(1);
  c1r2.css("height", "22%").css("padding", "5px");
  var c1r3 = c1.append($(row)).find("div").eq(2);
  c1r3.css("height", "34%").css("padding", "5px");
  var c1r4 = c1.append($(row)).find("div").eq(3);
  c1r4.css("height", "30%").css("padding", "5px");
  var c2r1 = c2.append($(row)).find("div").first();
  c2r1.css("height", "18%").css("padding", "5px");
  var c2r2 = c2.append($(row)).find("div").eq(1);
  c2r2.css("height", "62%").css("padding", "5px");
  var c2r3 = c2.append($(row)).find("div").eq(2);
  c2r3.css("height", "20%").css("padding", "5px");
  var c2r1c1 = c2r1.append($(col3)).find("div").first().css("padding", "0");
  var c2r1c2 = c2r1.append($(col6)).find("div").eq(1).css("padding", "0").css("padding-left", "8px").css("padding-right", "8px");
  var c2r1c3 = c2r1.append($(col3)).find("div").eq(2).css("padding", "0");
  var c2r3c1 = c2r3.append($(col6)).find("div").first().css("padding", "0").css("padding-right", "4px");
  var c2r3c2 = c2r3.append($(col6)).find("div").eq(1).css("padding", "0").css("padding-left", "4px");
  var c3r1 = c3.append($(row)).find("div").eq(0);
  c3r1.css("height", "33%").css("padding", "5px");
  var c3r2 = c3.append($(row)).find("div").eq(1);
  c3r2.css("height", "33%").css("padding", "5px");
  var c3r3 = c3.append($(row)).find("div").eq(2);
  c3r3.css("height", "34%").css("padding", "5px");
  c1r1.append($("[data-name='C1R1']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  c1r2.append($("[data-name='C1R2']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  c1r3.append($("[data-name='C1R3']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  c1r4.append($("[data-name='C1R4']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  c2r2.append($("[data-name='C2R2']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  c2r1c1.append($("[data-name='C2R1C1']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  c2r1c2.append($("[data-name='C2R1C2']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  c2r1c3.append($("[data-name='C2R1C3']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  c2r3c1.append($("[data-name='C2R3C1']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  c2r3c2.append($("[data-name='C2R3C2']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  c3r1.append($("[data-name='C3R1']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  c3r2.append($("[data-name='C3R2']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  c3r3.append($("[data-name='C3R3']").css("width", "100%").removeClass("pl-2").removeClass("pr-2"));
  contentDom.find(".dataSheet").remove();
}
$(document).ready(function () {
  Cus_Layout();
});
function Cus_initCard(cardName, border = true, removeHead = false, textCenter = true, useEchart = false) {
  var cardDom = $(`[data-name='${cardName}']`);
  //cardDom.addClass("border border-primary");
  if (border) cardDom.css("border", "3px solid #64b5f6").css("border-radius", "5px");
  var cardBody = cfs.card.body.getDom(cardName);
  if (!useEchart) {
    cardBody.html("");
    cardBody.css("padding", "10px");
    cardBody.css("overflow", "auto");
  }
  var headDom = cardDom.find(".card-header");
  headDom.find("h6").css("padding", "5px");
  headDom.find(".freshBS").hide();
  if (removeHead) {
    headDom.remove();
  } else if (textCenter) {
    headDom.find("h6").addClass("ml-3").addClass("text-center").css("width", "100%");
    headDom.removeClass("bg-white");
    headDom.addClass("bg-primary-300");
  }
  return cardBody;
}
//C1
function C1R1_Main() {
  var cardName = "C1R1";
  var cardBody = Cus_initCard(cardName, true, true);
  var data = [
    { f1: "门店数量:", f2: "80家" },
    { f1: "新店数量:", f2: "25家" },
  ];
  var tableDom = cfs.card.body.createTable(cardName, data, false, "table-xs table-hover text-left");
  tableDom.css("padding", "0px");
}
function C1R2_Main() {
  var cardName = "C1R2";
  var cardBody = Cus_initCard(cardName, true, false, true);
  var data = [
    { 科目: "销售额", 东区: "1000", 西区: "1500", 南区: "1350", 北区: "1560" },
    { 科目: "交易量", 东区: "500", 西区: "550", 南区: "610", 北区: "545" },
  ];
  var tableDom = cfs.card.body.createTable(cardName, data, true, "table-xs table-hover text-left");
  tableDom.css("padding", "0px");
}
function C1R3_Main() {
  var cardName = "C1R3";
  var cardBody = Cus_initCard(cardName, true, false, true, true);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var option = {
    legend: {
      data: ["销售额", "交易量"],
      bottom: "1%",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "20%",
      top: "5%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["东", "西", "南", "北"],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "销售额",
        min: 0,
        max: 2000,
        interval: 500,
        splitLine: { show: false },
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "交易量",
        min: 0,
        max: 650,
        interval: 130,
        splitLine: { show: false },
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "销售额",
        type: "bar",
        barCategoryGap: "70%",
        color: "#73abf5",
        barWidth: "10",
        data: [1000, 1500, 1350, 1560],
      },
      {
        name: "交易量",
        type: "line",
        color: "#87D4FF",
        yAxisIndex: 1,
        data: [500, 550, 610, 545],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
function C1R4_Main() {
  var cardName = "C1R4";
  var cardBody = Cus_initCard(cardName, true, false, false, true);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var option = {
    // color: ['#ADD8E6'],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      bottom: 10,
      left: "center",
    },
    grid: {
      top: "5%",
      left: "15%",
    },
    xAxis: [
      {
        type: "category",
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        max: 1.4,
        min: 0,
        splitNumber: 5,
        axisLabel: {
          formatter: function (n) {
            return n * 100 + "%";
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "日均交易量基准值",
        type: "bar",
        barWidth: "10",
        itemStyle: {
          normal: {
            //柱形图圆角，顺时针左上，右上，右下，左下）
            barBorderRadius: [12, 12, 12, 12],
            //设置柱状图颜色渐变
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#f75d5d",
              },
              {
                offset: 1,
                color: "#f0caca",
              },
            ]),
          },
        },
        data: [1.21, 1.1, 1.04, 0.88, 0.86, 0.85, 0.79, 0.97, 0.91, 1, 1.19, 1.2],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
//C2
function C2R1C1_Main() {
  var cardName = "C2R1C1";
  var cardBody = Cus_initCard(cardName, false, true, false);
  cardBody.css("padding", "0");
  var data = [
    { 订单渠道: "线上", 订单数: "2000" },
    { 订单渠道: "线下", 订单数: "3500" },
    { 订单渠道: "总计", 订单数: "5500" },
  ];
  var tableDom = cfs.card.body.createTable(cardName, data, true, "table-xs table-hover text-left", "bg-primary-300", "width: 100%");
  tableDom.css("padding", "0px");
}
function C2R1C2_Main() {
  var cardName = "C2R1C2";
  var cardBody = Cus_initCard(cardName, false, true, false);
  var h0 = $(`<h5 style="margin:2px" class="card-title text-center"><span class="font-weight-black">模拟公司</span></h5>`);
  var h1 = $(`<h6 class="card-title text-center"><span class="font-weight-light">销售总额</span></h6>`);
  var h2 = $(`<h1 class="card-title text-center"><span class="text-primary-300 font-weight-black">54,100,000.00</span></h1>`);
  cardBody.append(h0).append(h1).append(h2);
}
function C2R1C3_Main() {
  var cardName = "C2R1C3";
  var cardBody = Cus_initCard(cardName, false, true, false);
  cardBody.css("padding", "0");
  var data = [
    { 销售品类: "饮料", 销售额: "4000" },
    { 销售品类: "食品", 销售额: "1000" },
    { 销售品类: "其他", 销售额: "410" },
  ];
  var tableDom = cfs.card.body.createTable(cardName, data, true, "table-xs table-hover text-left", "bg-primary-300", "width: 100%");
  tableDom.css("padding", "0px");
}
//地图
function C2R2_Main() {
  var cardName = "C2R2";
  var cardBody = Cus_initCard(cardName, false, false, false);
  cardBody.css("padding", "1px");
  var div = $("<div id='allmap' style='height:100%;margin:0px;padding:0px'></div>");
  cardBody.append(div);
  addBaiDuMap(function () {
    var map = new BMap.Map("allmap"); // 创建Map实例
    map.setMapStyle({
      styleJson: [
        {
          featureType: "poi",
          elementType: "all",
          stylers: {
            color: "#ffffff",
            visibility: "off",
          },
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: {
            color: "#ffffff",
            visibility: "off",
          },
        },
      ],
    });
    map.centerAndZoom("郑州", 5); // 初始化地图,设置中心点坐标和地图级别
    //map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    //map.disableScrollWheelZoom();//禁止鼠标滚轮缩放
    map.disableDoubleClickZoom(true); //禁止双击缩放
    map.addControl(new BMap.NavigationControl()); //添加默认缩放平移控件
    map.addControl(new BMap.OverviewMapControl()); //添加默认缩略地图控件
    function addMarker(point, cityName) {
      // 创建图标对象
      var myIcon = new BMap.Icon("http://easyview.seepln.com/assets/mapMarkers2.png", new BMap.Size(20, 33), {
        anchor: new BMap.Size(10, 33), // 设置图片偏移。
        imageOffset: new BMap.Size(0, 0), // 设置图片偏移
      });
      // 创建标注对象并添加到地图
      var marker = new BMap.Marker(point, { icon: myIcon });
      marker.addEventListener("click", function () {
        showStoreDetail(cityName);
      });
      map.addOverlay(marker);
      cfs.card.head.getDom(cardName).find(".customLoader").hide(); //隐藏loading
      function showStoreDetail(city) {
        let comm = `SELECT storename 门店名称, sales 销售额, adt 日均交易量 
                    FROM app${Userinfo.app}_fullstorelist
                    where city = '${city}'`;
        let res = cfs.request.foundation.runComm(comm);
        if (res.err) {
          ForSwal("读取数据失败:" + res.err.Message);
        } else {
          $("#Cus_StoreTable_" + city).remove();
          var event = event || window.event;
          let height = "250px";
          let div = $(`<div id="Cus_StoreTable_${city}" style="position: absolute; z-index: 1000; height: 200px; height: ${height}; left: ${event.pageX + 40}px; top: ${event.pageY}px">
                        <div class="card" data-name="R2C2_add1" style="height: ${height}">
                          <div class="card-header header-elements-inline" style="padding-top: 0px; padding-bottom: 0px">
                            <h6 class="card-title">${city}&nbsp;（门店数: ${res.res.length}）</h6>
                            <div class="header-elements">
                              <div class="list-icons"><a class="list-icons-item" data-action="remove"></a></div>
                            </div>
                          </div>
                          <div class="card-body" style="overflow:auto"></div>
                        </div>
                      </div>`);
          
          let table = cfs.card.body.createTable(null, res.res, true, "table table-xs table-hover");
          $("div.dashBoardContent")
            .append(div)
            .find("#Cus_StoreTable_" + city)
            .find("div.card-body")
            .append(table);
          Cus_initCard("R2C2_add1", true, false, true, false);
          $("#Cus_StoreTable_" + city)
            .find("[data-action='remove']")
            .click(function () {
              $("#Cus_StoreTable_" + city).remove();
            });
          cfs.common.drap(div.get(0));
        }
      }
    }
    debugger;
    // 随机向地图添加标注
    let comm = `SELECT s1.CityCN city, count(s1.CityCN) qty, s2.Longitude x, s2.Latitude y FROM app16_storelist_actual s1 
              LEFT JOIN app${Userinfo.app}_storelist_actual s2 on s1.StoreNameEN = s2.StoreNameEN
              group by city`;
    var res = cfs.request.foundation.runComm(comm);
    if (res.err) {
      ForSwal("读取数据失败:" + res.err.Message);
    } else {
      for (let i = 0; i < res.res.length; i++) {
        addMarker(new BMap.Point(res.res[i].x, res.res[i].y), res.res[i].city);
      }
    }
  });
}
function C2R3C1_Main() {
  var cardName = "C2R3C1";
  var cardBody = Cus_initCard(cardName, true, false, false, true);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var option = {
    // legend: [{data: ['历史期日均交易量', '预测期日均交易量'],
    //     // top: '90%'
    //     }],
    grid: {
      top: 10,
      bottom: 20,
      right: 10,
    },
    // title: [{
    //     text: '日均交易量',
    //     top: '50%',
    //     }],
    // tooltip: {
    //     trigger: 'axis',
    //     showContent: false
    //     },
    xAxis: { type: "category", data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
    yAxis: {
      min: 0,
      max: 500,
      interval: 250,
    },
    series: [
      {
        type: "line",
        smooth: true,
        data: [300, 310, 293, 330, 341, 321, 451, 231, 278, 341, 321, 300],
        color: "#7dc3fe",
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#7dc3fe",
            },
            {
              offset: 1,
              color: "#9de0ff",
            },
          ]),
        },
      },
      {
        type: "line",
        smooth: true,
        data: [278, 289, 290, 411, 341, 330, 368, 389, 341, 321, 330, 321],
        color: "#7BA4E8",
        // areaStyle: {
        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //         offset: 0,
        //         color: '#77acdc'
        //     }, {
        //         offset: 1,
        //         color: '#ffffff'
        //     }])
        // }
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
function C2R3C2_Main() {
  var cardName = "C2R3C2";
  var cardBody = Cus_initCard(cardName, true, false, false, true);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var option = {
    legend: {
      data: ["历史期", "预测期"],
      // textStyle: { //图例文字的样式
      //                 fontSize: 4,
      //             },
      x: "right",
      itemWidth: 10,
      itemHeight: 10,
    },
    grid: {
      top: 10,
      bottom: 20,
      right: 10,
    },
    // title: [{
    //     text: '日均交易量',
    //     top: '50%',
    //     }],
    // tooltip: {
    //     trigger: 'axis',
    //     showContent: false
    //     },
    xAxis: {
      type: "category",
      data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    yAxis: {
      min: 0,
      max: 500,
      interval: 250,
    },
    series: [
      { type: "line", smooth: true, data: [300, 310, 293, 330, 341, 321, 451, 231, 278, 341, 321, 300], color: "#7BA4E8" },
      { type: "line", smooth: true, data: [278, 289, 290, 411, 341, 330, 368, 389, 341, 321, 330, 321], color: "#7AD0FF" },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
//C3
function C3R1_Main() {
  var cardName = "C3R1";
  var cardBody = Cus_initCard(cardName, true, false, true, true);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var option = {
    legend: {
      data: ["门店数量", "营业天数"],
      bottom: "1%",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "20%",
      top: "5%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["东", "南", "西", "北"],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "门店数量",
        min: 0,
        max: 25,
        interval: 5,
        splitLine: { show: false },
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "营业天数",
        min: 4000,
        max: 6500,
        interval: 500,
        splitLine: { show: false },
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "门店数量",
        type: "bar",
        barCategoryGap: "70%",
        color: "#73abf5",
        barWidth: "10",
        data: [25, 23, 27, 26],
      },
      {
        name: "营业天数",
        type: "line",
        color: "#87D4FF",
        yAxisIndex: 1,
        data: [5600, 5500, 6100, 5450],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
function C3R2_Main() {
  var cardName = "C3R2";
  var cardBody = Cus_initCard(cardName, true, false, false, true);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var option = {
    legend: [
      {
        data: ["咖啡", "食品", "冰激凌", "月饼", "粽子", "水饺"],
        top: "100%",
      },
    ],
    tooltip: {
      trigger: "axis",
      showContent: false,
    },
    grid: { top: 50 },
    series: [
      {
        type: "pie",
        id: "pie",
        color: ["#929fff", "#9de0ff", "#af87fe", "#7dc3fe", "#ffa897", "#f47a75"],
        radius: ["35%", "55%"],
        // center: ['50%', '25%'],
        emphasis: {
          label: {
            show: true,
            fontSize: "30",
            fontWeight: "bold",
          },
        },
        // label: {
        //     show: false,
        //     position: 'center'
        // },
        data: [
          { value: 20, name: "咖啡" },
          { value: 12, name: "食品" },
          { value: 8, name: "冰激凌" },
          { value: 5, name: "月饼" },
          { value: 5, name: "粽子" },
          { value: 4, name: "水饺" },
        ],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
function C3R3_Main() {
  var cardName = "C3R3";
  var cardBody = Cus_initCard(cardName, true, false, false, true);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  var option = {
    color: ["#95A2FF", "#7BA4E8", "#87D4FF"],
    series: [
      {
        type: "funnel",
        left: "10%",
        top: "10%",
        bottom: "10%",
        width: "80%",
        minSize: "0%",
        maxSize: "100%",
        sort: "descending",
        gap: 2,
        max: 10000,
        label: {
          show: true,
          position: "inside",
        },
        data: [
          { value: 7500, name: "流量" },
          { value: 5000, name: "订单量" },
          { value: 2500, name: "成交量" },
        ],
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

//Functions.js
(function addCusStyle() {
  //添加loading动画css
  var style = document.createElement("style");
  style.type = "text/css";
  var css1 =
    ".customLoader {border: .2em solid transparent;border-top-color: currentcolor;border-radius: 50%;-webkit-animation: 1s customLoader linear infinite;animation: 1s customLoader linear infinite;position: relative;display: inline-block;width: 1em;height: 1em;color: inherit;vertical-align: middle;pointer-events: none;}.customLoader:before {content: '';display: block;width: inherit;height: inherit;position: absolute;top: -.2em;left: -.2em;border: .2em solid currentcolor;border-radius: 50%;opacity: .5;}@-webkit-keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}";
  try {
    style.appendChild(document.createTextNode(css1));
  } catch (ex) {
    style.styleSheet.cssText = css1; //针对IE
  }
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
})();
(function addChinaMap() {
  var script = document.createElement("script");
  script.src = "../js/StbDemo/map/js/china.js";
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(script);
})();
function addBaiDuMap(mapInit) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://api.map.baidu.com/api?v=2.0&ak=OdpMlEqrR4Rj3sT9atp8jbmZebI0UhhQ&callback=mapinit";
  window["mapinit"] = function () {
    mapInit();
  };
  document.head.appendChild(script);
  //隐藏logo
  var style = document.createElement("style");
  style.type = "text/css";
  var css1 = ".anchorBL{display:none;}";
  try {
    style.appendChild(document.createTextNode(css1));
  } catch (ex) {
    style.styleSheet.cssText = css1; //针对IE
  }
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
}
/* dashboard页面为iframe的情况（页面选了列表）
function Chart_R2(id) {//需要在数据库配置function
  var dom = $('[data-id="' + id + '"]').find(".elementIframe")[0].contentWindow;
  initializeCustomLoader(dom);
}
function initializeCustomLoader(dom) {
  if (dom.$("#customLoaderStyle").length == 0) {
    var css1 =
      ".customLoader {border: .2em solid transparent;border-top-color: currentcolor;border-radius: 50%;-webkit-animation: 1s customLoader linear infinite;animation: 1s customLoader linear infinite;position: relative;display: inline-block;width: 1em;height: 1em;color: inherit;vertical-align: middle;pointer-events: none;}.customLoader:before {content: '';display: block;width: inherit;height: inherit;position: absolute;top: -.2em;left: -.2em;border: .2em solid currentcolor;border-radius: 50%;opacity: .5;}@-webkit-keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}";
    dom
      .$('<style id="customLoaderStyle"></style>')
      .text(css1)
      .appendTo(dom.$("head"));
  }
}*/
//div resize
(function ($, h, c) {
  var a = $([]),
    e = ($.resize = $.extend($.resize, {})),
    i,
    k = "setTimeout",
    j = "resize",
    d = j + "-special-event",
    b = "delay",
    f = "throttleWindow";
  e[b] = 250;
  e[f] = true;
  $.event.special[j] = {
    setup: function () {
      if (!e[f] && this[k]) {
        return false;
      }
      var l = $(this);
      a = a.add(l);
      $.data(this, d, {
        w: l.width(),
        h: l.height(),
      });
      if (a.length === 1) {
        g();
      }
    },
    teardown: function () {
      if (!e[f] && this[k]) {
        return false;
      }
      var l = $(this);
      a = a.not(l);
      l.removeData(d);
      if (!a.length) {
        clearTimeout(i);
      }
    },
    add: function (l) {
      if (!e[f] && this[k]) {
        return false;
      }
      var n;
      function m(s, o, p) {
        var q = $(this),
          r = $.data(this, d);
        r.w = o !== c ? o : q.width();
        r.h = p !== c ? p : q.height();
        n.apply(this, arguments);
      }
      if ($.isFunction(l)) {
        n = l;
        return m;
      } else {
        n = l.handler;
        l.handler = m;
      }
    },
  };
  function g() {
    i = h[k](function () {
      a.each(function () {
        var n = $(this),
          m = n.width(),
          l = n.height(),
          o = $.data(this, d);
        if (m !== o.w || l !== o.h) {
          n.trigger(j, [(o.w = m), (o.h = l)]);
        }
      });
      g();
    }, e[b]);
  }
})(jQuery, this);
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
        return $("#" + cardName).find(".card-header");
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
      createTable: function (cardName, data, withHead = true, cls = "table", headCls = "", tableStyle = "") {
        let headArr = [];
        let rowArr = [];
        for (let i = 0; i < data.length; i++) {
          if (withHead && i === 0) {
            let tArr = [];
            for (let key in data[i]) {
              tArr.push("<th>" + key + "</th>");
            }
            headArr.push(`<tr class='${headCls}'>` + tArr.join("") + "<tr>");
          }
          let cellArr = [];
          for (let key in data[i]) {
            if (cellArr.length == 0) {
              cellArr.push("<td style='font-weight: bold'>" + data[i][key] + "</td>");
            } else {
              cellArr.push("<td>" + data[i][key] + "</td>");
            }
          }
          rowArr.push("<tr>" + cellArr.join("") + "<tr>");
        }
        let headHtml = withHead ? "<thead>" + headArr.join("") + "</thead>" : "";
        let dom = $(`<div class="table-responsive" style="">
                        <table id="table_${cardName}" class="${cls}" style="${tableStyle}">
                          ${headHtml}
                          <tbody class="">
													${rowArr.join("")}
													</tbody>
												</table>
											</div>`);
        if (cardName) this.getDom(cardName).append(dom);
        return dom;
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
      dom.resize(function () {
        ec.resize();
      });
      /*window.addEventListener('resize', function () {
				ec.resize();
			});*/
      this.refresh(ec, option);
      return ec;
    },
    refresh: function (ec, option) {
      ec.clear();
      ec.setOption(option);
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
    drap: function (obj) {
      //拖拽移动
      obj.addEventListener("mousedown", start);

      function start(event) {
        // 鼠标左键
        if (event.button == 0) {
          // getComputedStyle(obj)['margin-left'] return XXpx需要转成整型
          // 如果有obj有margin值而不加这个数组拖拽会出现位置偏移
          offsetX = event.pageX - obj.offsetLeft + parseInt(getComputedStyle(obj)["margin-left"]);
          offsetY = event.pageY - obj.offsetTop + parseInt(getComputedStyle(obj)["margin-top"]);
          // 绑定事件，同样unbind解绑定，此效果的实现最后必须要解绑定，否则鼠标松开后拖拽效果依然存在
          //movemove事件必须绑定到$(document)上，鼠标移动是在整个屏幕上的
          document.addEventListener("mousemove", move);
          //此处的$(document)可以改为obj
          document.addEventListener("mouseup", stop);
        }
        return false; //阻止默认事件或冒泡
      }

      function move(event) {
        obj.style.left = event.pageX - offsetX + "px";
        obj.style.top = event.pageY - offsetY + "px";
        return false; //阻止默认事件或冒泡
      }

      function stop(envet) {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", stop);
      }
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
