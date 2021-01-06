// 引入bmap
let dhtmlxgantt_Script = document.createElement("script");
dhtmlxgantt_Script.setAttribute("type", "text/javascript");
dhtmlxgantt_Script.setAttribute("src", "https://cdn.jsdelivr.net/npm/dhtmlx-gantt@7.0.11/codebase/dhtmlxgantt.min.js");
document.head.appendChild(dhtmlxgantt_Script);

let dhtmlxgantt_Link = document.createElement("link");
dhtmlxgantt_Link.setAttribute("rel", "stylesheet");
dhtmlxgantt_Link.setAttribute("href", "https://cdn.jsdelivr.net/npm/dhtmlx-gantt@7.0.11/codebase/dhtmlxgantt.css");
dhtmlxgantt_Link.setAttribute("type", "text/css");
document.head.appendChild(dhtmlxgantt_Link);

function echart_Main1() {
  var cardName = "echart1";
  cfs.card.cusInit(cardName, false, false, false, true, false);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  option = {
    title: {
      text: "存货业态构成分析",
      subtext: "",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "right",
      data: ["业态名称1 28.30%  15", "业态名称2 20.75%  11", "业态名称3 20.75%  11", "业态名称4 16.98%  9", "车位 13.21%  7"],
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 15, name: "业态名称1 28.30%  15" },
          { value: 11, name: "业态名称2 20.75%  11" },
          { value: 11, name: "业态名称3 20.75%  11" },
          { value: 9, name: "业态名称4 16.98%  9" },
          { value: 7, name: "车位 13.21%  7" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function echart_Main2() {
  var cardName = "echart2";
  cfs.card.cusInit(cardName, false, false, false, true, false);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  option = {
    grid: {
      top: "5%",
    },
    title: {
      text: "存货货龄分析",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      bottom: "bottom",
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "50%",
        label: {
          formatter: "{c}%",
        },
        data: [
          { value: 25, name: "6个月以内 25" },
          { value: 15, name: "6-18个月 15" },
          { value: 13, name: "18个月以上 13" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0.5)",
          },
        },
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function echart_Main3() {
  var cardName = "echart3";
  cfs.card.cusInit(cardName, false, false, false, true, false);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  option = {
    grid: {
      top: "5%",
    },
    title: {
      text: "期房现房分析",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      bottom: "bottom",
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "50%",
        label: {
          formatter: "{c}%",
        },
        data: [
          { value: 33, name: "期房 33" },
          { value: 20, name: "现房 20" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0.5)",
          },
        },
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function echart_Main4() {
  var cardName = "echart4";
  cfs.card.cusInit(cardName, false, false, false, true, false);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ["货龄", "存货合计", "6个月以内", "6-18个月", "18个月以上"],
        ["业态名称1", 25, 14, 13, 2],
        ["业态名称2", 15, 10, 5, 10],
        ["业态名称3", 14, 10, 3, 10],
        ["业态名称4", 10, 10, 10, 10],
        ["车位", 10, 10, 10, 10],
      ],
    },
    xAxis: { type: "category" },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
function echart_Main5() {
  var cardName = "echart5";
  cfs.card.cusInit(cardName, false, false, false, true, false);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ["货龄", "存货合计", "期房", "现房"],
        ["6个月以内", 25, 14, 13],
        ["6-18个月", 15, 10, 5],
        ["18个月以上", 14, 10, 3],
      ],
    },
    xAxis: { type: "category" },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function echart_Main6() {
  var cardName = "echart6";
  cfs.card.cusInit(cardName, false, false, false, true, false);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  option = {
    grid: {
      top: "5%",
    },
    title: {
      text: "期房现房分析",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      bottom: "bottom",
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "50%",
        label: {
          formatter: "{c}%",
        },
        data: [
          { value: 13, name: "6个月以内 13" },
          { value: 10, name: "6-18个月 10" },
          { value: 10, name: "18个月以上 10" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0.5)",
          },
        },
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function echart_Main7() {
  var cardName = "echart7";
  cfs.card.cusInit(cardName, false, false, false, true, false);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");
  option = {
    grid: {
      top: "5%",
    },
    title: {
      text: "期房现房分析",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      bottom: "bottom",
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "50%",
        label: {
          formatter: "{c}%",
        },
        data: [
          { value: 12, name: "6个月以内 12" },
          { value: 5, name: "6-18个月 5" },
          { value: 10, name: "18个月以上 10" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0.5)",
          },
        },
      },
    ],
  };
  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

const echart_Main8 = () => {
  var cardName = "echart8";
  cfs.card.cusInit(cardName, false, false, false, true, false);
  var echartDom = cfs.card.body.getDom(cardName).find(".echart");

  let headDom = cfs.card.head.getDom(cardName);

  let buttonInfo = {
    id: "r2c2_select1",
    text: "城市",
    list: [
      { key: "A", value: "西安" },
    ],
  };
  cfs.card.head.addSelectButton(headDom, buttonInfo);

  headDom.find(".freshBS").css({display: "none"})


  let html = `<div id="gantt_here" style='width:100%; height:100%;'></div>`;
  $(echartDom).html(html);

  let gantt = $("#gantt_here").dhx_gantt();
  gantt.config.date_format = "%Y-%m-%d %H:%i";

  gantt.config.scales = [
    { unit: "year", step: 1, format: "%Y" },
    { unit: "month", step: 1, format: "%F" },
  ];
  gantt.config.start_date = new Date(2020, 0);
  gantt.config.end_date = new Date(2024, 0);
  gantt.config.duration_unit = "month";
  gantt.config.duration_step = 1;

  gantt.config.readonly = true;
  gantt.config.columns = [
    {
      name: "text",
      label: "项目",
      width: 248,
    },
  ];

  gantt.init("gantt_here");
  gantt.parse({
    data: [
      { id: 1, text: "西安依云曲江依云曲江一期", start_date: "01-02-2020", duration: "18" },
      { id: 2, text: "西安依云曲江依云曲江二期", start_date: "01-04-2020", duration: "8" },
      { id: 3, text: "西安常宁府西安常宁府", start_date: "01-08-2020", duration: "8" },
      { id: 4, text: "西安雍景湾西安雍景湾", start_date: "01-09-2020", duration: "6" },
      { id: 5, text: "西安臻观府西安臻观府", start_date: "01-02-2021", duration: "7" },
      { id: 6, text: "西安港务区城市主场一期DK1", start_date: "01-06-2021", duration: "7" },
      { id: 7, text: "西安港务区商业一期北地块", start_date: "01-02-2022", duration: "8" },
      { id: 8, text: "西安港务区商业一期南地块", start_date: "01-05-2022", duration: "5" },
      { id: 9, text: "西安港务区港务区住宅二期", start_date: "01-04-2022", duration: "4" },
      { id: 9, text: "西安港务区港务区住宅三期/四期", start_date: "01-02-2023", duration: "4" },
    ],
  });
};

// function echart_Main8() {
//   var cardName = "echart8";
//   cfs.card.cusInit(cardName, false, false, false, true, false);
//   var echartDom = cfs.card.body.getDom(cardName).find(".echart");
//   option = {
//     grid: {
//       top: "5%",
//     },
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         type: "cross",
//         crossStyle: {
//           color: "#999",
//         },
//       },
//     },
//     legend: {
//       data: ["营业收入", "EBITDA", "净利润"],
//       show: true,
//       bottom: "1%",
//     },
//     xAxis: [
//       {
//         type: "category",
//         data: ["2015", "2016", "2017", "2018", "2019"],
//         axisPointer: {
//           type: "shadow",
//         },
//       },
//     ],
//     yAxis: [
//       {
//         type: "value",
//         min: -20000,
//         max: 40000,
//         interval: 10000,
//         axisLabel: {
//           formatter: "{value}",
//         },
//       },
//     ],
//     series: [
//       {
//         name: "营业收入",
//         type: "line",
//         smooth: false,
//         label: { show: "true" },
//         data: [155, 4556, 11215, 23257, 37244],
//       },
//       {
//         name: "EBITDA",
//         type: "line",
//         smooth: false,
//         label: { show: "true" },
//         data: [-919, -4287, -7760, -6924, 20],
//       },
//       {
//         name: "净利润",
//         type: "line",
//         smooth: false,
//         label: { show: "true", position: "bottom" },
//         data: [-1775, -6841, -13764, -15210, -10561],
//       },
//     ],
//   };
//   if (!Cus_echarts[cardName]) {
//     Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
//   } else {
//     cfs.echarts.refresh(Cus_echarts[cardName], option);
//   }
// }

// function echart_Main9() {
//   var cardName = "echart9";
//   cfs.card.cusInit(cardName, false, false, false, true, false);
//   var echartDom = cfs.card.body.getDom(cardName).find(".echart");
//   option = {
//     grid: {
//       top: "5%",
//     },
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         type: "cross",
//         crossStyle: {
//           color: "#999",
//         },
//       },
//     },
//     legend: {
//       data: ["资产原值", "评估值"],
//       show: true,
//       bottom: "1%",
//     },
//     xAxis: [
//       {
//         type: "category",
//         data: ["燕园", "申园", "粤园", "蜀园", "吴园", "国际大厦", "金融大厦", "保险大厦"],
//         axisPointer: {
//           type: "shadow",
//         },
//       },
//     ],
//     yAxis: [
//       {
//         type: "value",
//         min: 0,
//         max: 45,
//         interval: 5,
//         axisLabel: {
//           formatter: "{value}",
//         },
//       },
//     ],
//     series: [
//       {
//         name: "资产原值",
//         type: "line",
//         smooth: false,
//         label: { show: "true" },
//         data: [23.6, 15.2, 4.8, 2.9, 3.4, 21.7, 28.2, 40.7],
//       },
//       {
//         name: "评估值",
//         type: "line",
//         smooth: false,
//         label: { show: "true", position: "bottom" },
//         data: [19.97, 12.3, 2.6, 2.2, 3.1, 8.7, 14.8, 38.6],
//       },
//     ],
//   };
//   if (!Cus_echarts[cardName]) {
//     Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
//   } else {
//     cfs.echarts.refresh(Cus_echarts[cardName], option);
//   }
// }

// function echart_Main10() {
//   var cardName = "echart10";
//   cfs.card.cusInit(cardName, false, false, false, true, false);
//   var echartDom = cfs.card.body.getDom(cardName).find(".echart");
//   option = {
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         type: "cross",
//         crossStyle: {
//           color: "#999",
//         },
//       },
//     },
//     legend: {
//       data: ["历史投资成本", "2019年末估值", "减值金额"],
//       show: true,
//       bottom: "1%",
//     },
//     xAxis: [
//       {
//         type: "category",
//         data: ["拜博", "和美", "徐矿", "仙林"],
//         axisPointer: {
//           type: "shadow",
//         },
//       },
//     ],
//     yAxis: [
//       {
//         type: "value",
//         min: 0,
//         max: 25,
//         interval: 5,
//         axisLabel: {
//           formatter: "{value}",
//         },
//       },
//     ],
//     series: [
//       {
//         name: "历史投资成本",
//         type: "bar",
//         label: { show: "true", position: "top" },
//         data: [20.62, 11.57, 4.62, 12],
//       },
//       {
//         name: "2019年末估值",
//         type: "bar",
//         label: { show: "true", position: "top" },
//         data: [12.55, 0.38, 4.3, 10.51],
//       },
//       {
//         name: "减值金额",
//         type: "line",
//         smooth: false,
//         label: {
//           formatter: "{c}",
//         },
//         data: [8.07, 11.19, 0.32, 1.49],
//       },
//     ],
//   };
//   if (!Cus_echarts[cardName]) {
//     Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
//   } else {
//     cfs.echarts.refresh(Cus_echarts[cardName], option);
//   }
// }

//extrajs全局方法
var Cus_echarts = {};
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
            if (res.code && res.code == 500) {
              resObj.err = res;
            } else {
              if (returnAll) {
                resObj.res = res;
              } else {
                if (res.resultCode === 0) {
                  resObj.res = res.resultObj;
                }
              }
            }
          },
          error: function (XMLHttpRequest) {
            resObj.err = {};
            resObj.err.Message = XMLHttpRequest.responseJSON ? XMLHttpRequest.responseJSON.Message.substr(0, 200) : XMLHttpRequest.statusText.substr(0, 200);
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
        var url = Api.seepln + "sqlparser/run/post2";
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
      createSimpleTag1: function (cardName, data, iconCls) {
        let dom = $(`<div class="media">
                      <div class="mr-3 align-self-center">
                        <i class="${iconCls}"></i>
                      </div>
                      <div class="media-body text-left align-self-center">
                        <h3 class="font-weight-black mb-0">${data}</h3>
                      </div>
                    </div>`);
        if (cardName) this.getDom(cardName).append(dom);
        return dom;
      },
    },
    //自定义初始化卡片
    cusInit: function (cardName, border = true, removeHead = false, textCenter = true, useEchart = false, hideRef = true) {
      var cardDom = $(`[data-name='${cardName}']`);
      //cardDom.addClass("border border-primary");
      if (border) {
        if (cardDom.find("#" + cardName).length > 0) {
          cardDom
            .find("#" + cardName)
            .css("border", "3px solid #64b5f6")
            .css("border-radius", "5px");
        } else {
          cardDom.css("border", "3px solid #64b5f6").css("border-radius", "5px");
        }
      }
      var cardBody = cfs.card.body.getDom(cardName);
      if (!useEchart) {
        cardBody.html("");
        cardBody.css("padding", "10px");
        cardBody.css("overflow", "auto");
      }
      var headDom = cardDom.find(".card-header");
      headDom.css("height", "3rem");
      //headDom.find("h6").css("padding", "5px");
      let ref = headDom.find(".freshBS");
      ref.find("i").css("margin", 10);
      if (hideRef) ref.hide();
      if (removeHead) {
        headDom.remove();
      } else if (textCenter) {
        headDom.find("h6").addClass("ml-3").addClass("text-center").css("width", "100%");
        headDom.removeClass("bg-white");
        headDom.addClass("bg-primary-300");
      }
      return cardBody;
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
    theme: "westeros",
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
      var titleStr = titleArr.join(",");
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          var cell = dataJson[i][titleArr[j]] || "";
          cell = cell.toString();
          cell = cell.replace('"', '""');
          if (cell.indexOf(",") > -1) {
            cell = '"' + cell + '"';
          }
          rowArr.push(cell);
        }
        dataArr.push(rowArr.join(","));
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
