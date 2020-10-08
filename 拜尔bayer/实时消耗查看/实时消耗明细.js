// 渲染 EChart 的通用方法
function initEchart(id, option) {
  id = "chart-" + id + "";
  $("#" + id)
    .parent()
    .addClass("pt-0 pl-0 pr-0 pb-0");
  const _height = $("#" + id).height() + 40;
  $("#" + id).height(_height);
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on("resize", function () {
    chart.resize();
  });
}

// 公用渲染table
function renderR3Table(tableDom, id, k) {
  var tableSHtml =
    '<div class="h-100 sheetTable">\n  <table class="table table-bordered text-nowrap table-xs text-center" style="width:100%!important" id="Table' +
    k +
    '">\n	<thead>\n	<tr>' +
    tableDom.tHeadHtml +
    "</tr>\n	</thead>\n	<tbody>\n	" +
    tableDom.tBodyHtml +
    '\n	</tbody>\n  </table>\n  <table class="table table-bordered text-nowrap table-xs disPNone" id="exportTable' +
    k +
    '">\n	<thead>\n	<tr>' +
    tableDom.tHeadHtml +
    "</tr>\n	</thead>\n	<tbody>\n	" +
    tableDom.exportTbody +
    "\n	</tbody>\n  </table>\n</div>";
  $("#chart-" + id + "").html(tableSHtml);
}
/*
 * 初始化table固定表头
 */
function initDataTable(tableName, scrollYHeight, leftColumns) {
  $(tableName).DataTable({
    destroy: true,
    bFilter: false,
    bLengthChange: false,
    paging: false,
    // autoWidth: false,
    order: [],
    bSort: false,
    info: false,
    scrollY: scrollYHeight,
    scrollCollapse: true,
    scrollX: true,
    autowidth: true,
    fixedColumns: { leftColumns: leftColumns },
    language: {
      sEmptyTable: getLanguage("noData"),
    },
  });
}
//下载table
function downloadPyTable(id, table_type) {
  var tableName = $("#chart-" + id + "")
    .parents(".pythonCard")
    .find(".card-title")
    .text();
  $("#exportTable" + table_type).tableExport({
    type: "xlsx",
    escape: "false",
    fileName: tableName,
  });
}
// 根据值的范围获取颜色
function gertColorByValue(val) {
  if (val >= 1.1) {
    return "#65b511";
  } else if (val >= 1) {
    return "#ffcc00";
  } else if (val < 1) {
    return "#d30f4c";
  }
}

$(function () {
  // 加载下载excel插件
  $("body").append('<script src="../js/plugins/xlsx.full.min.js"></script>');
  //设置样式
  var styleHtml =
    "<style>" +
    ".sheetTable td,.sheetTable th{" +
    "padding:0.1rem 0.2rem}" +
    "</style>";
  $("head").append(styleHtml);
});

function Chart_R1C1(data, params) {
  console.log("function Chart_R1C1");
  var pyData = JSON.parse(data);
  $("#chart-" + params.componentId + "")
    .parent()
    .addClass("pt-0 pl-0 pr-0 pb-0");
  let formHeader = [];
  pyData.Column.columns.forEach(function (item) {
    formHeader.push(item.name);
  });
  var tableDom = getR1C1Table(pyData.Data, formHeader);
  renderR3Table(tableDom, params.componentId, "R1C1");
  //增加下载按钮
  if (
    $("#chart-" + params.componentId + "")
      .parents(".componentCard")
      .find(".downLoadTable").length === 0
  ) {
    $("#chart-" + params.componentId + "")
      .parents(".componentCard")
      .find(".sheetPovPart")
      .before(
        '<a class="breadcrumb-elements-item cursor-pointer mr-2 ml-2 pt-0 pb-0 downLoadTable" onclick="downloadPyTable(\'' +
          params.componentId +
          "','R1C1')\"><i class=\"icon-download4 icon text-default mr-2\"></i><span class='iconSpan loadDes pt-0 pb-0 '>下载</span></a>"
      );
  }
  initDataTable("#TableR1C1", $(".sheetTable").height(), 1);
  // 字体加粗
  pyData.Data.forEach(function (rowItem, i) {
    if (rowItem[0] <= 2) {
      $("tr.r1c1" + i).css("font-weight", "bold");
    }
  });
  $("#chart-" + params.componentId)
    .find("tbody")
    .eq(1)
    .find("td")
    .addClass("cursor-pointer");
  $("#chart-" + params.componentId)
    .find("tbody")
    .eq(1)
    .find("td")
    .click(function () {
      console.log(this);
      console.log(pyData);

      let tdIndex = $(this).attr("data-dt-row");

      let xData = pyData.Column.columns
        .filter(function (columns, i) {
          if (i > 1) {
            return columns;
          }
        })
        .map(function (columns) {
          return columns.name;
        });

      pyData.Data.forEach(function (rowItem, i) {
        if (i == parseInt(tdIndex)) {
          // rowItem;
          // r1c2_Id;

          let data = rowItem.filter((val, index) => {
            if (index > 2) {
              return val;
            }
          });

          option = {
            toolbox: {
              show: true,
              feature: {
                saveAsImage: { show: true },
              },
            },
            grid: [
              {
                bottom: "10%",
                containLabel: true,
              },
            ],
            yAxis: {
              type: "value",
              name: pyData.Unit.unit,
              splitLine: { show: false },
            },
            xAxis: {
              type: "category",
              interval: 0,
              data: xData,
              axisLabel: {
                //坐标轴刻度标签的相关设置。
                formatter: function (params) {
                  var newParamsName = "";
                  var paramsNameNumber = params.length;
                  var provideNumber = 7;
                  var pattern = new RegExp("[\u4E00-\u9FA5]+");
                  if (pattern.test(params)) {
                    provideNumber = 5;
                  }
                  var rowNumber = Math.ceil(paramsNameNumber / provideNumber);

                  if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                      var tempStr = "";
                      var start = p * provideNumber;
                      var end = start + provideNumber;
                      if (p == rowNumber - 1) {
                        tempStr = params.substring(start, paramsNameNumber);
                      } else {
                        tempStr = params.substring(start, end) + "\n";
                      }
                      newParamsName += tempStr;
                    }
                  } else {
                    newParamsName = params;
                  }
                  return newParamsName;
                },
              },
            },
            series: [
              {
                // name: "战略大单品",
                type: "bar",
                barWidth: "60%",
                color: "#65b511",
                label: {
                  show: true,
                  position: "top",
                  color: "black",
                  formatter: function (data) {
                    return format(data.data.toFixed(0));
                  },
                },
                data: data,
              },
            ],
          };
          initEchart(r1c2_Id, option);
        }
        return;
      });
    });
}

function getR1C1Table(data, Columns) {
  var tHeadHtml = "";
  var tBodyHtml = "";
  var exportTbody = "";
  Columns.forEach(function (th, i) {
    tHeadHtml +=
      '<th style="background-color: rgba(0,0,0,.02);">' + th + "</th>";
  });
  data.forEach(function (rowItem, x) {
    tBodyHtml += '<tr class="r1c1' + x + '">';
    exportTbody += "<tr>";
    rowItem.forEach(function (tdVal, i) {
      var cellVal = tdVal;
      // if (i > 0) {
      //   //后两列百分比格式
      //   // var colorStyle = gertColorByValue(cellVal);
      //   tBodyHtml += "<td>" + format(cellVal) + "</td>";
      // }
      // // else if (i !== 0) {
      // // 	cellVal = format(cellVal.toFixed(1));
      // // 	tBodyHtml += "<td>" + cellVal + "</td>";
      // // }
      // else {
      //   tBodyHtml += "<td>" + cellVal + "</td>";
      // }
      if (i === rowItem.length - 1) {
        tBodyHtml += "<td>" + format(cellVal) + "</td>";
      } else if (i > 1 && i < rowItem.length - 1) {
        cellVal = format(cellVal.toFixed(0));
        tBodyHtml += "<td>" + cellVal + "</td>";
      } else if (i == 1) {
        // 缩进层级显示
        var space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
          productsTitleSpace = [];
        for (var i = 0; i < rowItem[0]; i++) {
          productsTitleSpace.push(space);
          var ptsStr = productsTitleSpace.join("");
        }
        tBodyHtml +=
          '<td style=" text-align:left; ' +
          '">' +
          "&nbsp;&nbsp;&nbsp;" +
          ptsStr +
          cellVal +
          "</td>";
      }
      exportTbody += "<td>" + tdVal + "</td>";
    });
    tBodyHtml += "</tr>";
    exportTbody += "</tr>";
  });
  return {
    tBodyHtml: tBodyHtml,
    tHeadHtml: tHeadHtml,
    exportTbody: exportTbody,
  };
}

var r1c2_Id = "";
function Chart_R1C2(data, params) {
  console.log("function Chart_R1C2");
  let componentId = params.componentId;
  r1c2_Id = componentId;
  let pythonData = JSON.parse(data);
  option = {
    tooltip: {
      trigger: "item",
      formatter: function (data) {
        pieValue = data.value / pythonData.Pie.Unit.divisor;
        pieText =
          data.name +
          ":<br>" +
          "本月累计消耗: " +
          format(pieValue.toFixed(pythonData.Pie.Unit.fix)) +
          " " +
          pythonData.Pie.Unit.unit +
          "(" +
          data.percent.toFixed(2) +
          "%)";
        if (data.dataIndex == pythonData.Pie.Legend.length - 1) {
          return pieText;
        } else {
          return "Top " + (data.dataIndex + 1) + " - " + pieText;
        }
      },
      // formatter: '{b}<br>本月累计 : {c} <br> 占比: {d}%'
    },
    legend: [
      {
        x: "15%",
        width: "50%",
        bottom: "3%",
        data: pythonData.Bar.Legend,
      },
      {
        left: "66%",
        width: "30%",
        bottom: "3%",
        data: pythonData.Pie.Legend,
      },
    ],
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true },
      },
    },
    grid: [
      {
        top: 50,
        width: "50%",
        bottom: "10%",
        left: 10,
        containLabel: true,
      },
    ],
    xAxis: {
      type: "value",
      name: pythonData.Bar.Unit.unit,
      splitLine: { show: false },
      axisLabel: {
        formatter: function (value, index) {
          return format((value / pythonData.Bar.Unit.divisor).toFixed(0));
        },
      },
    },
    yAxis: {
      type: "category",
      interval: 0,
      data: pythonData.Bar.xAxis,
    },
    series: [
      {
        name: "战略大单品",
        type: "bar",
        stack: "Total",
        barWidth: "60%",
        color: pythonData.Bar.Color[0],
        label: {
          show: false,
        },
        data: pythonData.Bar.Series.Prime,
        tooltip: {
          trigger: "item",
          // formatter: '{a}: {c}'
          formatter: function (data) {
            let seriesValue = data.data / pythonData.Bar.Unit.divisor;
            return (
              data.name +
              "<br>" +
              data.marker +
              data.seriesName +
              ": " +
              format(seriesValue.toFixed(pythonData.Bar.Unit.fix)) +
              " " +
              pythonData.Bar.Unit.unit
            );
          },
        },
      },
      {
        name: "战略新产品",
        type: "bar",
        stack: "Total",
        barWidth: "60%",
        color: pythonData.Bar.Color[1],
        label: {
          show: false,
        },
        data: pythonData.Bar.Series.Growth,
        tooltip: {
          trigger: "item",
          // formatter: '{a}: {c}'
          formatter: function (data) {
            let seriesValue = data.data / pythonData.Bar.Unit.divisor;
            return (
              data.name +
              "<br>" +
              data.marker +
              data.seriesName +
              ": " +
              format(seriesValue.toFixed(pythonData.Bar.Unit.fix)) +
              " " +
              pythonData.Bar.Unit.unit
            );
          },
        },
      },
      {
        name: "其他单品",
        type: "bar",
        stack: "Total",
        barWidth: "60%",
        color: pythonData.Bar.Color[2],
        label: {
          show: false,
        },
        data: pythonData.Bar.Series.Others,
        tooltip: {
          trigger: "item",
          // formatter: '{a}: {c}'
          formatter: function (data) {
            let seriesValue = data.data / pythonData.Bar.Unit.divisor;
            return (
              data.name +
              "<br>" +
              data.marker +
              data.seriesName +
              ": " +
              format(seriesValue.toFixed(pythonData.Bar.Unit.fix)) +
              " " +
              pythonData.Bar.Unit.unit
            );
          },
        },
      },
      {
        name: "前十大单品",
        type: "pie",
        radius: "40%",
        center: ["80%", "40%"],
        label: {
          show: true,
          formatter: "({d}%)",
        },
        color: [
          "#49C1AA",
          "#70A2D3",
          "#624963",
          "#2B6636",
          "#00617F",
          "#10384F",
          "#a6a6a6",
        ],
        data: pythonData.Pie.data,
      },
    ],
  };
  initEchart(componentId, option);
}

// 表格js获取表格iframe id
var Chart_R2_Id = "";

function Chart_R2(id) {
  Chart_R2_Id = id;
  // 刷新前恢复table
  var dom = $('[data-id="' + Chart_R2_Id + '"]').find(".elementIframe")[0]
    .contentWindow;
  // $("[title=实时消耗明细]").click(function () {
  //   resetColumn(dom);
  // });
  window.onbeforeunload = function (event) {
    resetColumn(dom);
  };
  //数据导出
  initializeCustomLoader(dom);
  Custom_data_export_Main(dom);
}

//ready
$(document).ready(function () {
  $(".navbar-nav")
    .children()
    .first()
    .click(function () {
      $(window).resize();
    });

  $("#showDashBoard")
    .find(".freshBS")
    .click(function () {
      var domSelected = $("#globalPovPart").children().eq(2).find("a").text();
      // ajax请求架构筛选的层级
      var settings = {
        url: Api.seepln + "dimension/selectDimensionMemberByNameFunction",
        method: "POST",
        timeout: 0,
        headers: {
          "user-id": Userinfo.user_id,
          app: Userinfo.app,
          token: Userinfo.token,
          "tenant-code": Userinfo.tenant_code,
          language: Userinfo.language,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
          app_id: Userinfo.app,
          token: Userinfo.token,
          user_id: Userinfo.user_id,
          tenant_code: Userinfo.tenant_code,
          language: Userinfo.language,
          dimensionMemberNames: "DailyStructure{IDescendant(TotalChannel,0)}",
          duplicate: "1",
          resultString: "name,description_1,description_2,level",
        },
      };
      $.ajax(settings).done(function (response) {
        response.resultList.forEach(function (data, i) {
          if (data.description_1 == domSelected) {
            var dom = $('[data-id="' + Chart_R2_Id + '"]').find(
              ".elementIframe"
            )[0].contentWindow;
            resetColumn(dom);
            if (data.level == 3) {
              unVisibleColumn(dom, [2, 3]);
            }
            if (data.level == 4) {
              unVisibleColumn(dom, [3, 4, 5, 9]);
            }
            if (data.level == 5) {
              unVisibleColumn(dom, [2, 3, 5, 6, 7, 9]);
            }
          }
        });
      });
    });
});

function resetColumn(dom) {
  [2, 3, 4, 5, 6, 7, 9].forEach(function (column) {
    dom.$("#contractList_table").DataTable().column(column).visible(true);
  });
}

function unVisibleColumn(dom, arr) {
  arr.forEach(function (column) {
    dom.$("#contractList_table").DataTable().column(column).visible(false);
  });
}

//导出文件
function Custom_data_export_Main(mainDom) {
  cus_conf.frameDom1 = mainDom;
  if (mainDom.$("#" + cus_conf.buttonInfo1_1.id).length == 0) {
    var cardHead = mainDom.$("div.header-elements").parent();
    var btnDom = cfs.card.head.addButton(
      cardHead,
      cus_conf.buttonInfo1_1,
      true
    );
    btnDom.css("padding-right", "35px");
    btnDom.bind("click", { cardId: "1", btnDom: btnDom }, ExportExcel);
  }
}
function ExportExcel(event) {
  Custom_startButtonLoading(event.data.btnDom);
  setTimeout(function () {
    var povObj = showDashBoard.globalOldPovObj;
    var table = cus_conf["table" + event.data.cardId];
    var tableName = table.Name;
    var povFieldArr = table.PovFields;
    var povArr = table.Pov;
    var work_type = Custom_getUrlParam("param1");
    var dynamicForm = cfs.request.DynamicForm;
    var titleObj = dynamicForm.contractField(work_type);
    if (titleObj.err) {
      ForSwal("读取数据失败:" + titleObj.err.Message);
    } else {
      var titleArr = [];
      for (let i = 0; i < titleObj.res.resultList[0].length; i++) {
        titleArr.push(titleObj.res.resultList[0][i].alias_name);
      }
      var titleArrDesc = titleObj.res.resultList[1];
      var query_map = {};
      for (let i = 0; i < povFieldArr.length; i++) {
        query_map[povFieldArr[i]] = povObj[povArr[i]];
      }
      var formObj = dynamicForm.formList(work_type, JSON.stringify(query_map));
      if (formObj.err) {
        ForSwal("读取数据失败:" + formObj.err.Message);
      } else {
        let dataJson = formObj.res.data;
        cfs.export.toCsv(
          event.data.btnDom.parent().parent().find("h6").text(),
          dataJson,
          titleArr,
          titleArrDesc
        );
      }
    }
    Custom_stopButtonLoading(event.data.btnDom);
  }, 100);
}
function Custom_getUrlParam(paramName) {
  var params = cus_conf.frameDom1.location.search || "";
  if (params.indexOf(paramName)) {
    return params.split(paramName + "=")[1].split("&")[0];
  } else {
    return "";
  }
}
function Custom_startButtonLoading(btnDom) {
  //显示按钮loading
  btnDom.find("i").hide();
  btnDom.find(".customLoader").show();
}
function Custom_stopButtonLoading(btnDom) {
  //关闭按钮loading
  btnDom.find(".customLoader").hide();
  btnDom.find("i").show();
}
var cus_conf = {
  //全局配置参数
  frameDom1: {},
  buttonInfo1_1: {
    id: "Export_Button",
    text: "导出文件",
    icon: "mi-file-upload",
  },
  table1: {
    Name: "app1_cssi_dash_daily_consumption_detail",
    Pov: ["Year", "Period", "Structure"],
    PovFields: ["Year", "Period", "TerritoryCode"],
    Fields: [
      "region",
      "gm",
      "entity",
      "property",
      "period",
      "area",
      "occarea",
      "facetotal",
      "efftotal",
    ],
    NotNull: [],
    FieldMap: [],
    DefaultId: false,
    datas: {},
  },
};
//Functions.js
function initializeCustomLoader(dom) {
  //添加loading动画
  if (dom.$("#customLoaderStyle").length == 0) {
    var css1 =
      ".customLoader {border: .2em solid transparent;border-top-color: currentcolor;border-radius: 50%;-webkit-animation: 1s customLoader linear infinite;animation: 1s customLoader linear infinite;position: relative;display: inline-block;width: 1em;height: 1em;color: inherit;vertical-align: middle;pointer-events: none;}.customLoader:before {content: '';display: block;width: inherit;height: inherit;position: absolute;top: -.2em;left: -.2em;border: .2em solid currentcolor;border-radius: 50%;opacity: .5;}@-webkit-keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}";
    dom
      .$('<style id="customLoaderStyle"></style>')
      .text(css1)
      .appendTo(dom.$("head"));
  }
}
var cfs = {
  //dashboard全局方法
  request: {
    //请求后端数据
    common: {
      //通用请求
      sendRequest: function (url, type, paramObj, json = false) {
        let data = json ? JSON.stringify(paramObj) : paramObj;
        let contentType =
          "application/" + (json ? "json" : "x-www-form-urlencoded");
        var resObj = {};
        var err = "";
        $.ajax({
          url: url,
          type: type,
          contentType: contentType,
          async: false,
          data: data,
          success: function (res) {
            resObj.res = res;
          },
          error: function (XMLHttpRequest) {
            resObj.err = {};
            resObj.err.Message =
              XMLHttpRequest.responseJSON.Message.substr(0, 200) ||
              XMLHttpRequest.statusText.substr(0, 200);
          },
        });
        return resObj;
      },
    },
    cube: {
      queryCubeData: function (cubeName, script) {
        let url = Api.SeeplnCube + "cube/queryCubeData";
        paramObj = $.extend(
          {
            cube_name: cubeName,
            script: script,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true);
      },
      save: function (sheetDatas) {
        let url = Api.SeeplnCube + "spreadsheet/save";
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
      runComm: function (comm) {
        let url = Api.seepln + "sqlparser/run/post";
        paramObj = $.extend(
          {
            sql: comm,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false);
      },
    },
    DynamicForm: {
      contractField: function (work_type) {
        let url = Api.DynamicForm + "contract/contractField";
        paramObj = $.extend(
          {
            work_type: work_type,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false);
      },
      formList: function (work_type, query_map, start = 0, length = 1000000) {
        let url = Api.DynamicForm + "formlist/formList";
        paramObj = $.extend(
          {
            work_type: work_type,
            query_map: query_map,
            start: start,
            length: length,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false);
      },
    },
    python: {
      web: function (pyName, params) {
        let url = Api.python + "start/web";
        paramObj = $.extend(
          {
            pyName: pyName,
            params: params,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true);
      },
    },
  },
  card: {
    //单个卡片方法
    head: {
      //卡片头
      getDom: function (cardName) {
        return $("#" + cardName);
      },
      removeButton: function (dom) {
        dom.find(".header-elements").html("");
      },
      addButton: function (cardHead, buttonInfo, prepend = false) {
        var buttonHtml = $(
          '<a class="breadcrumb-elements-item mr-2 cursor-pointer" id="' +
            buttonInfo.id +
            '"><div class="customLoader mr-2" style="margin-bottom: 2px; display: none;"></div><i class="' +
            buttonInfo.icon +
            ' icon text-default mr-2"></i><span class="iconSpan loadDes">' +
            buttonInfo.text +
            "</span></a>"
        );
        if (prepend) cardHead.find(".header-elements").prepend(buttonHtml);
        else cardHead.find(".header-elements").append(buttonHtml);
        return buttonHtml;
      },
      enableButton: function (btn, event, call) {
        btn.bind(
          "click",
          {
            cardId: event.data.cardId,
            cardBody: event.data.cardBody,
            fileObj: event.data.fileObj,
          },
          call
        );
        btn.hover(function () {
          this.style.cursor = "pointer";
        });
      },
      disableButton: function (btn) {
        btn.unbind("click");
        btn.hover(function () {
          this.style.cursor = "not-allowed";
        });
        btn.hover();
      },
    },
    body: {
      //卡片内容
      getDom: function (cardName) {
        return $("#" + cardName).find(".card-body");
      },
      addFileTag: function (cardName, text, prepend = false) {
        var dom = $(
          '<div status="-1" filename="' +
            text +
            '" style="margin: 1.25rem; padding: 10px;display: inherit; background-color:#f7f7f7;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;">' +
            '<span style="margin-right: 15px;">' +
            text +
            "</span>" +
            '<i class="icon-bin delete" onclick="cfs.card.body.deleteFileTag(this)" style="margin-right: 10px;cursor: pointer;"></i>' +
            '<div class="customLoader" style="display: none;"></div><span class="infotext" style="margin-left: 5px; margin-right: 5px; display: none;"></span>' +
            '<i data-trigger="hover" data-toggle="popover" data-placement="right" data-content="" class="infobtn icon-info22" style="margin-right: 10px;cursor: pointer; display: none;"></i>'
        );
        if (prepend) this.getDom(cardName).prepend(dom);
        else this.getDom(cardName).append(dom);
        return dom;
      },
      deleteFileTag: function (dom) {
        dom.parentElement.remove();
      },
    },
  },
  data: {
    //数据处理
    spreadjs: {
      createSheetData: function (
        dimList,
        dimMap,
        dataTables,
        startIndex = 1,
        maxLength = 10000
      ) {
        var sheetDataObj = { rowDatas: [] };
        if (dataTables == undefined || Object.keys(dataTables).length == 0)
          return sheetDataObj;
        //准备表头所在列和维度名的map
        var colMap = {};
        for (let i = 0; i < dataTables[0].length; i++) {
          let dimName =
            dimMap[dataTables[0][i].value] || dataTables[0][i].value;
          if (dimMap.indexOf(dimName) != -1) {
            colMap[i] = dimName;
          }
        }
        var rowDatasArr = [];
        for (let i = startIndex; i < startIndex + maxLength; i++) {
          if (dataTables[i]) {
            let arr = dataTables[i];
            var columnDimensionMemberMap = {};
            for (let c in colMap) {
              let val = arr[c].value;
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
  common: {
    //通用方法
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
    valueToDate: function (value) {
      let n = Number(value.split(".")[0]);
      var date = new Date("1900-1-1");
      date.setDate(date.getDate() + n - 2);
      return date.format();
    },
  },
  export: {
    toCsv: function (fileName, dataJson, titleArr = null, titleArrDesc = null) {
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
      var dataStr =
        (titleArrDesc == null ? titleStr : titleArrDesc.join("\t,")) +
        "\n" +
        dataArr.join("\n");
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
