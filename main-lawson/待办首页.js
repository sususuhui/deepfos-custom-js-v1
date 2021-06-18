// 动态加载 js
const loadScript = (url, callback) => {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};
$.getScript("/js/global_assets/js/plugins/ui/moment/moment.min.js"); //加载js文件
$.getScript("/js/global_assets/js/plugins/pickers/daterangepicker.js"); //加载js文件
$.getScript("/js/plugins/layer/layer.js"); //加载js文件
$.getScript("/js/plugins/westeros.js"); //加载js文件
loadScript("/js/global_assets/js/plugins/notifications/pnotify.min.js", () => {
  show_stack_bottom_right("info");
});
var pieChart;
var column_xAxis;
var column_yAxis;
// 定制化显示合同金额排名，设置y轴为contract_no
const CustomContractNoCompanyList = ["taikang"];
var contract_id = []; //合同总金额排名的合同号
var contract_id2 = []; //即将到期合同的合同号
var contractStatus = [];
var chart2_contarctNo = [];
var listContractNo = [];
var sort = "1"; //合同金额排名的顺序,倒序1，正序0
var echarts1;
var echarts2;
var echarts3;
var stack_bottom_right = { dir1: "left", dir2: "up", firstpos1: 20, firstpos2: 20 };
var stack_bottom_right_rtl = { dir1: "right", dir2: "up", firstpos1: 20, firstpos2: 20 };
// Bottom right
function show_stack_bottom_right(type) {
  var opts = {
    title: "请查看近期代办事项",
    text: "",
    addclass: "stack-bottom-right",
    stack: $("html").attr("dir") == "rtl" ? stack_bottom_right_rtl : stack_bottom_right,
  };
  new PNotify(opts);
}
function L1(data, params) {
  var componentId = params.componentId;
  // $("#chart-" + componentId).css("position","relative");
  var html = `
      <p style="text-align:center;" class="mb-0">
          <span>当前合同数：</span>
          <span class="contractNum"></span>
      </p>
      <div style="width: 100%;height:150px;margin:0 auto" id="echarts1"></div>
      <div class="row" style="text-align:center;">
          <div class="col-lg-4 num1P" style="padding:0;">
              <div><span style="display:inline-block;width: 12px;height: 12px;background:#516b91;border-radius: 3px;margin-right: 3px;"></span>承租合同</div>
              <div class="num1"></div>
          </div>
          <div class="col-lg-4 num2P" style="padding:0;">
              <div><span style="display:inline-block;width: 12px;height: 12px;background:#59c4e6;border-radius: 3px;margin-right: 3px;"></span>转租合同</div>
              <div class="num2"></div>
          </div>
          <div class="col-lg-4 num3P" style="padding:0;">
              <div><span style="display:inline-block;width: 12px;height: 12px;background:#edafda;border-radius: 3px;margin-right: 3px;"></span>出租合同</div>
              <div class="num3"></div>
          </div>
      </div>
  `;
  $("#chart-" + componentId).html(html);

  // 当前合同数
  var curSQL = `SELECT
      COUNT(0) AS totalCount
      FROM
      app1_contract_info`;
  var resCurSQL = cfs.request.foundation.runComm(curSQL);
  $(".contractNum").text(resCurSQL.res[0].totalCount);
  // 承租合同数
  var leaseContractSQL = `SELECT
          COUNT(0) AS totalCount
      FROM
          app1_contract_info
      WHERE
          contract_type = 1`;
  var resLeaseContract = cfs.request.foundation.runComm(leaseContractSQL);
  if (resLeaseContract.res[0].totalCount !== 0) {
    $(".num1").text(resLeaseContract.res[0].totalCount);
  } else {
    $(".num1P").hide();
  }
  // 转租合同数
  var SubleaseContractSQL = `SELECT
          COUNT(0) AS totalCount
      FROM
          app1_contract_info
      WHERE
          contract_type = 2`;
  var resSubleaseContract = cfs.request.foundation.runComm(SubleaseContractSQL);
  if (resSubleaseContract.res[0].totalCount !== 0) {
    $(".num2").text(resSubleaseContract.res[0].totalCount);
  } else {
    $(".num2P").hide();
  }
  // 出租合同数
  var leaseContractSQL2 = `SELECT
          COUNT(0) AS totalCount
      FROM
          app1_contract_info
      WHERE
          contract_type = 3`;
  var resLeaseContract2 = cfs.request.foundation.runComm(leaseContractSQL2);
  if (resLeaseContract2.res[0].totalCount !== 0) {
    $(".num3").text(resLeaseContract2.res[0].totalCount);
  } else {
    $(".num3P").hide();
  }
  let option = {
    // legend: {
    //     itemWidth: 12,
    //     itemHeight:12,
    //     orient: 'horizontal',
    //     left: 'center',
    //     top: 0
    // },
    tooltip: {
      trigger: "item",
      formatter: function (param) {
        return param.name + ":" + param.percent + "%";
      },
    },
    width: "100%",
    height: 150,
    grid: {
      top: "10px",
      bottom: "30%",
    },
    series: [
      {
        // top: "20%",
        name: "",
        type: "pie",
        radius: ["60%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
          fontSize: "14",
          fontWeight: "bold",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "14",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: Math.round((resLeaseContract.res[0].totalCount / resCurSQL.res[0].totalCount) * 100), name: "承租合同" },
          { value: Math.round((resSubleaseContract.res[0].totalCount / resCurSQL.res[0].totalCount) * 100), name: "转租合同" },
          { value: Math.round((resLeaseContract2.res[0].totalCount / resCurSQL.res[0].totalCount) * 100), name: "出租合同" },
        ],
      },
    ],
  };
  echarts1 = echarts.init(document.getElementById("echarts1"), "westeros");
  echarts1.setOption(option);
}
function L2(data, params) {
  var componentId = params.componentId;
  // $("#chart-" + componentId).css("position","relative");
  var html = `
      <p style="text-align:center;" class="mb-0">待审核合同</p>
      <div style="width: 100%;height:150px;margin:0 auto" id="echarts2"></div>
      <div class="row" style="text-align:center;">
          <div class="col-lg-6">
              <div><span style="display:inline-block;width: 12px;height: 12px;background:#edafda;border-radius: 3px;margin-right: 3px;"></span>合同数量</div>
              <div class="num4">2336</div>
          </div>
          <div class="col-lg-6" onclick="a1ClickContractList(1);" style="cursor: pointer;">
              <div><span style="display:inline-block;width: 12px;height: 12px;background:#59c4e6;border-radius: 3px;margin-right: 3px;"></span>待审核数量</div>
              <div class="num5">2336</div>
          </div>
      </div>
  `;
  $("#chart-" + componentId).html(html);
  // 当前合同数
  var curSQL = `SELECT
          COUNT(0) AS totalCount
      FROM
          app1_contract_info`;
  var resCurSQL = cfs.request.foundation.runComm(curSQL);
  $(".num4").text(resCurSQL.res[0].totalCount);
  // 待审核合同数量
  var SQL2 = `
          SELECT
          COUNT(0) AS totalCount
          FROM
          (SELECT
          info.contract_no,
          info.contract_name,
          info.company_code,
          info.contract_status,
          info.contract_process,
          info.lessor_entity,
          info.contract_date,
          info.progress_status
          FROM
          app1_contract_info info,
          app1_contract_object_info ob,
          app1_process_operation po
          WHERE
          info.sys_contract_id = ob.sys_contract_id
          AND po.pc_id = 1
          AND po.is_final = 1
          AND info.contract_process = 2) a`;
  var resSQL2 = cfs.request.foundation.runComm(SQL2);
  $(".num5").text(resSQL2.res[0].totalCount);
  let option = {
    width: "100%",
    height: 150,
    // legend: {
    //     itemWidth: 12,
    //     itemHeight:12,
    //     orient: 'horizontal',
    //     left: 'center',
    //     top: 0
    // },
    grid: {
      top: "10px",
      bottom: "30%",
    },
    tooltip: {
      trigger: "item",
      formatter: function (param) {
        if (param.name == "待审核数量") {
          return param.name + ":" + param.percent + "%";
        }
      },
    },
    color: ["#edafda", "#59c4e6"],
    series: [
      {
        // top: "20%",
        name: "",
        type: "pie",
        radius: ["60%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "14",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 100 - (resSQL2.res[0].totalCount / resCurSQL.res[0].totalCount) * 100, name: "合同总量" },
          { value: (resSQL2.res[0].totalCount / resCurSQL.res[0].totalCount) * 100, name: "待审核数量" },
        ],
      },
    ],
  };
  echarts2 = echarts.init(document.getElementById("echarts2"), "westeros");
  echarts2.setOption(option);
}
function L3(data, params) {
  var componentId = params.componentId;
  // $("#chart-" + componentId).css("position","relative");
  var html = `
      <p style="text-align:center;" class="mb-0">一年内到期合同数</p>
      <div style="width: 100%;height:150px;margin:0 auto" id="echarts3"></div>
      <div class="row" style="text-align:center;">
          <div class="col-lg-5">
              <div><span style="display:inline-block;width: 12px;height: 12px;background:#93b7e3;border-radius: 3px;margin-right: 3px;"></span>合同数量</div>
              <div class="num4">2336</div>
          </div>
          <div class="col-lg-7" onclick="a1ClickContractList(2);" style="cursor: pointer;">
              <div><span style="display:inline-block;width: 12px;height: 12px;background:#a5e7f0;border-radius: 3px;margin-right: 3px;"></span>一年内到期合同数</div>
              <div class="num7">2336</div>
          </div>
      </div>
  `;
  $("#chart-" + componentId).html(html);
  // 当前合同数
  var curSQL = `SELECT
          COUNT(0) AS totalCount
      FROM
          app1_contract_info`;
  var resCurSQL = cfs.request.foundation.runComm(curSQL);
  $(".num4").text(resCurSQL.res[0].totalCount);
  // 一年内到期合同
  var SQL2 = `
          SELECT
          COUNT(0) AS totalCount
      FROM
          (
                  SELECT
                          contract_no,
                          date1,
                          s
                  FROM
                          (
                                  SELECT
                                          info.contract_no,
                                          info.contract_name,
                                          info.company_code,
                                          info.contract_status,
                                          info.contract_process,
                                          b.date1,
                                          info.lessor_entity,
                                          info.contract_date,
                                          info.progress_status,
                                          TIMESTAMPDIFF(
                                                  YEAR,
                                                  now(),
                                                  DATE_ADD(b.date1, INTERVAL 1 DAY)
                                          ) s
                                  FROM
                                          app1_contract_info info,
                                          -- app1_contract_object_info ob,
                                          app1_process_operation po,
                                          (
                                                  SELECT
                                                          ifnull(
                                                                  ob.terminal_date,
                                                                  ob.lease_end_date
                                                          ) AS date1,
                                                          ob.sys_contract_id,
                                                          ob.sys_object_id,
                                                          ob.is_open_max
                                                  FROM
                                                          app1_contract_object_info ob
                                          ) b
                                  WHERE
                                          info.sys_contract_id = b.sys_contract_id
                                  GROUP BY
                                          contract_no
                                  ORDER BY
                                          date1
                          ) J
                  WHERE
                          s < 1
          ) a`;
  var resSQL2 = cfs.request.foundation.runComm(SQL2);
  let GetSqldata = resSQL2.res[0].totalCount;
  $(".num7").text(GetSqldata);
  let option = {
    width: "100%",
    height: 150,
    grid: {
      top: "10px",
      bottom: "30%",
    },
    tooltip: {
      trigger: "item",
      formatter: function (param) {
        if (param.name == "一年内到期合同") {
          return param.name + ":" + param.percent + "%";
        }
      },
    },
    color: ["#a5e7f0", "#93b7e3"],
    series: [
      {
        // top: "20%",
        name: "",
        type: "pie",
        radius: ["60%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "12",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: (GetSqldata / resCurSQL.res[0].totalCount) * 100, name: "一年内到期合同" },
          { value: 100 - (GetSqldata / resCurSQL.res[0].totalCount) * 100, name: "合同总量" },
        ],
      },
    ],
  };
  echarts3 = echarts.init(document.getElementById("echarts3"), "westeros");
  echarts3.setOption(option);
}
// 点击待审核数量
function a1ClickContractList(type) {
  if (type == 1) {
    var sql1 = `SELECT
              contract_no FROM
              (SELECT
              info.contract_no,
              info.contract_name,
              info.company_code,
              info.contract_status,
              info.contract_process,
              info.lessor_entity,
              info.contract_date,
              info.progress_status
              FROM
              app1_contract_info info,
              app1_contract_object_info ob,
              app1_process_operation po
              WHERE
              info.sys_contract_id = ob.sys_contract_id
              AND po.pc_id = 1
              AND po.is_final = 1
              AND info.contract_process = 2) a`;
    var resSQL1 = cfs.request.foundation.runComm(sql1);
    if (resSQL1.res.code == undefined) {
      var newArray = [];
      $.each(resSQL1.res, function (k, v) {
        newArray.push(v.contract_no);
      });
      var chart2_contarctNo = newArray;
      var code = escape(chart2_contarctNo.join());
      if (code == "") {
        window.location.href = "../contract1/contract.html";
      } else {
        window.location.href = "../contract1/contract.html?contract_no=" + code;
      }
    } else {
      $.jGrowl("", {
        header: resSQL1.res.Message,
        theme: "alert-styled-left bg-danger",
      });
    }
  } else {
    var sql2 = `SELECT
      contract_no
FROM
      (
              SELECT
                      info.contract_no,
                      info.contract_name,
                      info.company_code,
                      info.contract_status,
                      info.contract_process,
                      b.date1,
                      info.lessor_entity,
                      info.contract_date,
                      info.progress_status,
                      TIMESTAMPDIFF(
                              YEAR,
                              now(),
                              DATE_ADD(b.date1, INTERVAL 1 DAY)
                      ) s
              FROM
                      app1_contract_info info,
                      -- app1_contract_object_info ob,
                      app1_process_operation po,
                      (
                              SELECT
                                      ifnull(
                                              ob.terminal_date,
                                              ob.lease_end_date
                                      ) AS date1,
                                      ob.sys_contract_id,
                                      ob.sys_object_id,
                                      ob.is_open_max
                              FROM
                                      app1_contract_object_info ob
                      ) b
              WHERE
                      info.sys_contract_id = b.sys_contract_id
              GROUP BY
                      contract_no
              ORDER BY
                      date1
      ) J
WHERE
      s < 1`;
    var resSQL2 = cfs.request.foundation.runComm(sql2);
    if (resSQL2.res.code == undefined) {
      var newArray = [];
      $.each(resSQL2.res, function (k, v) {
        newArray.push(v.contract_no);
      });
      var chart2_contarctNo = newArray;
      var code = escape(chart2_contarctNo.join());
      if (code == "") {
        window.location.href = "../contract1/contract.html";
      } else {
        window.location.href = "../contract1/contract.html?contract_no=" + code;
      }
    } else {
      $.jGrowl("", {
        header: resSQL2.res.Message,
        theme: "alert-styled-left bg-danger",
      });
    }
  }
  localStorage.setItem("codeShow", "3");
}
window.onresize = function () {
  echarts1.resize();
  echarts2.resize();
  echarts3.resize();
  pieChart.resize();
  column_xAxis.resize();
  column_yAxis.resize();
};
// ------------------------tools-------------------------
// 字符串装日期
function getDate(strDate) {
  var date = eval(
    "new Date(" +
      strDate
        .replace(/\d+(?=-[^-]+$)/, function (a) {
          return parseInt(a, 10) - 1;
        })
        .match(/\d+/g) +
      ")"
  );
  console.log(date);
  return date;
}
// 时间戳转日期并格式化为字符串
function time(time = +date_time) {
  var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
  return date.toJSON().substr(0, 7).replace("T", " ");
}
// 获取下个月日期字符串
function get_next_month(date_base) {
  var date_next = "";
  var date_obj = getDate(date_base);
  date_next = date_obj.setMonth(date_obj.getMonth() + 1);
  date_next = time(date_next);
  return date_next;
}
// -------------------合同期限统计图--------------------
// 合同期限统计
function r1c1(data, params) {
  var componentId = params.componentId;
  var html = `<div class="chart dataheight" id="pie_basic" style="height: 400px;"></div>`;
  $("#chart-" + componentId).html(html);
  pieChart = echarts.init(document.getElementById("pie_basic"), "westeros"); //westeros是文件中注册的主题名字
  pieChart.clear();
  $.ajax({
    type: "post",
    url: Api.Contract + "firstPage/contractDateCensus",
    async: true,
    data: $.extend(
      {
        language: sign,
      },
      userinfoParamsApp
    ),
    success: function (result) {
      if (result.resultCode == 0) {
        var arr = [];
        var label = { show: false };
        var selected = {};
        var obj = result.resultObj;
        for (var i in obj) {
          var obj2 = {};
          obj2["value"] = obj[i];
          if (i === "contractDateCensusThree") {
            obj2["name"] = getLanguage("maturity4Year");
          } else if (i === "contractDateCensusFour") {
            obj2["name"] = getLanguage("maturity5Year");
          } else if (i === "contractDateCensus") {
            obj2["name"] = getLanguage("maturity1Year");
          } else if (i === "contractDateCensusTwo") {
            obj2["name"] = getLanguage("maturity3Year");
          } else if (i === "contractDateCensusOne") {
            obj2["name"] = getLanguage("maturity2Year");
          }
          arr.push(obj2);
        }
        for (i in arr) {
          if (arr[i].value == 0) {
            // arr[i].label=label;
            selected[arr[i].name] = false;
          }
        }
        option = {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "left",
            data: [getLanguage("maturity1Year"), getLanguage("maturity2Year"), getLanguage("maturity3Year"), getLanguage("maturity4Year"), getLanguage("maturity5Year")],
            selected: selected,
          },
          series: [
            {
              name: "合同统计",
              type: "pie",
              center: ["54%", "50%"],
              data: arr,
              // data:[
              //     {value:0, name:'1年内到期'},
              //     {value:0, name:'1-2年到期'},
              //     {value:0, name:'2-3年到期'},
              //     {value:5, name:'3-5年到期'},
              //     {value:4, name:'5年以上到期'}
              // ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };
        pieChart.setOption(option);
        pieChart.on("click", pieClick);
        _modalActionHidden("#card1");
      }
    },
  });
}
// 点击合同期限统计
function pieClick(param) {
  var currentDate = new Date();
  var date = new Date();
  var lease_start_date = "";
  var lease_end_date = "";
  if (param.name == "1年内到期") {
    date.setFullYear(date.getFullYear() + 1);
    lease_start_date = currentDate;
    lease_end_date = date;
  } else if (param.name == "2-3年到期") {
    date.setFullYear(date.getFullYear() + 3);
    lease_start_date = currentDate.setFullYear(currentDate.getFullYear() + 2);
    lease_end_date = date;
  } else if (param.name == "1-2年到期") {
    date.setFullYear(date.getFullYear() + 2);
    lease_start_date = currentDate.setFullYear(currentDate.getFullYear() + 1);
    lease_end_date = date;
  } else if (param.name == "3-5年到期") {
    date.setFullYear(date.getFullYear() + 5);
    lease_start_date = currentDate.setFullYear(currentDate.getFullYear() + 3);
    lease_end_date = date;
  } else if (param.name == "5年以上到期") {
    date.setFullYear(date.getFullYear() + 5);
    lease_start_date = date;
    lease_end_date = "";
  }
  console.log(FormatDate(lease_start_date));
  console.log(FormatDate(lease_end_date));
  let queryParam = {
    lease_end_date_s: FormatDate(lease_start_date),
    lease_end_date_e: FormatDate(lease_end_date),
    is_open_max: "1",
  };
  layer.open({
    type: 2,
    title: false,
    area: ["100%", "100%"],
    move: false,
    resize: false,
    scrollbar: false,
    closeBtn: 0,
    content: `../contract1/contractLayer.html?query_map=${escape(JSON.stringify(queryParam))}`,
  });
}
// -------------------合同金额排名图--------------------
// 合同金额排名
function r1c2(data, params) {
  var componentId = params.componentId;
  var radioHtml = `<div class="form-check form-check-inline">
                      <label class="form-check-label">
                          <input type="radio" class="form-check-input-styled radioClass" name="radio-inline-left" data-fouc id="positive">
                          <span class="positiveText">正序</span>
                      </label>
                  </div>

                  <div class="form-check form-check-inline">
                      <label class="form-check-label">
                          <input type="radio" class="form-check-input-styled radioClass" name="radio-inline-left" data-fouc id="reverse">
                          <span class="reverseText">倒序</span>
                      </label>
                  </div>`;
  if ($(".reverseText").length > 0) {
  } else {
    $(".dashBoardContent .dataSheet:nth-child(2) div:nth-child(2) .card-header .sheetPovPart").before(radioHtml);
  }

  $(".form-check-input-styled").uniform();
  $("#reverse").prop("checked", true);
  // 初始化开关
  $(".radioClass").click(function () {
    if (document.getElementById("positive").checked) {
      sort = 0;
      barsChart();
    }
    if (document.getElementById("reverse").checked) {
      sort = 1;
      barsChart();
    }
  });
  var html = `
  <div class="chart dataheight" id="column_xAxis" onclick="mousedown()" style="height: 400px;"></div>`;
  $("#chart-" + componentId).html(html);
  column_xAxis = echarts.init(document.getElementById("column_xAxis"), "westeros");
  var data_base = {
    pythonName: "DashboardContractAmount",
    runType: "1",
    parameter: JSON.stringify({ 1: 1 }),
  };
  $.ajax({
    type: "post",
    // url: Api.Contract + 'firstPage/contractMoneyRanking',
    url: origin + "/python-web/doPythonWeb",
    async: true,
    dataType: "json",
    data: JSON.stringify(data_base),
    headers: $.extend({}, userinfoParams3, { language: "1", "content-type": "application/json" }),
    success: function (result) {
      if (result.resultCode === 0) {
        var data = result.resultObj.contractDateCensus;
        var Xdata = [];
        var YName = [];
        const dataName = CustomContractNoCompanyList.includes(BasicHeaders["tenant-code"]) ? "contract_no" : "contract_name";
        var seriesData = [];
        if (data == null) {
          _modalActionHidden("#card2");
          return;
        }
        for (var i = 0; i < data.length; i++) {
          if (data[i].lease_total_rental_with_vat !== undefined) {
            Xdata.push(data[i].lease_total_rental_with_vat);
          }
          if (data[i].contract_name !== undefined) {
            YName.push(data[i][dataName]);
            contract_id.push(data[i].sys_contract_id);
            contractStatus.push(data[i].contract_status);
            chart2_contarctNo.push(data[i].contract_no);
          }
        }
        seriesData.push({
          id: contract_id.reverse(),
          data: Xdata.reverse(),
          type: "bar",
        });
        option = {
          color: ["#29b6f6"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
            formatter: function (params) {
              var html = "";
              if (params.length > 0) {
                Xindex = params[0].dataIndex;
                id = params[0].seriesId;
                status = params[0].axisValue;
                for (var int = 0; int < params.length; int++) {
                  html +=
                    // params[int].axisValue.split('-')[1] + '-' + params[int].axisValue.split('-')[2]
                    params[int].axisValue.split("|")[0] +
                    "<br>" +
                    params[int].axisValue.split("|")[1] +
                    "<br>" +
                    "<br>" +
                    '<span class="badge badge-mark border-blue mr-1"></span>' +
                    format(params[int].data) +
                    "<br>";
                }
              }
              return html;
            },
          },
          legend: {
            data: ["2011年", "2012年"],
          },
          grid: {
            left: "3%",
            top: "0",
            right: "15%",
            bottom: "20",
            containLabel: true,
          },
          xAxis: {
            type: "value",
            name: getLanguage("money2") + "：" + getLanguage("yuan"),
            boundaryGap: [0, 0.01],
            axisLabel: {
              interval: 0,
              rotate: 40,
            },
          },
          yAxis: {
            name: getLanguage("contractName2"),
            type: "category",
            data: YName.reverse(),
            axisLabel: {
              interval: 0,
              formatter: function (params) {
                return params.split("|")[0];
                // var newParamsName = ""; // 最终拼接成的字符串
                // var paramsNameNumber = params.length; // 实际标签的个数
                // var provideNumber = 15; // 每行能显示的字的个数
                // var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                // /**
                //  * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                //  */
                // // 条件等同于rowNumber>1
                // if (paramsNameNumber > provideNumber) {
                //     /** 循环每一行,p表示行 */
                //     for (var p = 0; p < rowNumber; p++) {
                //         var tempStr = ""; // 表示每一次截取的字符串
                //         var start = p * provideNumber; // 开始截取的位置
                //         var end = start + provideNumber; // 结束截取的位置
                //         // 此处特殊处理最后一行的索引值
                //         if (p === rowNumber - 1) {
                //             // 最后一次不换行
                //             tempStr = params.substring(start, paramsNameNumber);
                //         } else {
                //             // 每一次拼接字符串并换行
                //             tempStr = params.substring(start, end) + "\n";
                //         }
                //         newParamsName += tempStr; // 最终拼成的字符串
                //     }
                //
                // } else {
                //     // 将旧标签的值赋给新标签
                //     newParamsName = params;
                // }
                // //将最终的字符串返回
                // return newParamsName
              },
            },
          },
          series: seriesData,
        };
        column_xAxis.setOption(option);
        _modalActionHidden("#card2");
      }
    },
  });
  $(".dashBoardContent .dataSheet:nth-child(1) div:nth-child(2) .card-header .card-title").css("cursor", "pointer");
  $(".dashBoardContent .dataSheet:nth-child(1) div:nth-child(2) .card-header .card-title").click(function () {
    let code = {
      contract_no: chart2_contarctNo.join(),
    };
    layer.open({
      type: 2,
      title: false,
      area: ["100%", "100%"],
      move: false,
      resize: false,
      scrollbar: false,
      closeBtn: 0,
      content: `../contract1/contractLayer.html?query_map=${escape(JSON.stringify(code))}`,
    });
  });
}
// 合同金额排名
function barsChart() {
  column_xAxis.clear();
  var data_base = {
    pythonName: "DashboardContractAmount",
    runType: "1",
    parameter: JSON.stringify({ 1: 1 }),
  };
  $.ajax({
    type: "post",
    // url: Api.Contract + 'firstPage/contractMoneyRanking',
    url: origin + "/python-web/doPythonWeb",
    async: true,
    dataType: "json",
    data: JSON.stringify(data_base),
    headers: $.extend({}, userinfoParams3, { language: "1", "content-type": "application/json" }),
    success: function (result) {
      if (result.resultCode === 0) {
        var data = result.resultObj.contractDateCensus;
        var Xdata = [];
        var YName = [];
        const dataName = CustomContractNoCompanyList.includes(BasicHeaders["tenant-code"]) ? "contract_no" : "contract_name";
        var seriesData = [];
        if (data == null) {
          _modalActionHidden("#card2");
          return;
        }
        for (var i = 0; i < data.length; i++) {
          if (data[i].lease_total_rental_with_vat !== undefined) {
            Xdata.push(data[i].lease_total_rental_with_vat);
          }
          if (data[i].contract_name !== undefined) {
            YName.push(data[i][dataName]);
            contract_id.push(data[i].sys_contract_id);
            contractStatus.push(data[i].contract_status);
            chart2_contarctNo.push(data[i].contract_no);
          }
        }
        seriesData.push({
          id: contract_id.reverse(),
          data: Xdata.reverse(),
          type: "bar",
        });
        option = {
          color: ["#29b6f6"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
            formatter: function (params) {
              var html = "";
              if (params.length > 0) {
                Xindex = params[0].dataIndex;
                id = params[0].seriesId;
                status = params[0].axisValue;
                for (var int = 0; int < params.length; int++) {
                  html +=
                    params[int].axisValue.split("|")[0] +
                    "<br>" +
                    params[int].axisValue.split("|")[1] +
                    "<br>" +
                    "<br>" +
                    '<span class="badge badge-mark border-blue mr-1"></span>' +
                    format(params[int].data) +
                    "<br>";
                }
              }
              return html;
            },
          },
          legend: {
            data: ["2011年", "2012年"],
          },
          grid: {
            left: "3%",
            top: "0",
            right: "15%",
            bottom: "20",
            containLabel: true,
          },
          xAxis: {
            type: "value",
            name: getLanguage("money2") + "：" + getLanguage("yuan"),
            boundaryGap: [0, 0.01],
            axisLabel: {
              interval: 0,
              rotate: 40,
            },
          },
          yAxis: {
            name: getLanguage("contractName2"),
            type: "category",
            data: YName.reverse(),
            axisLabel: {
              interval: 0,
              formatter: function (params) {
                return params.split("|")[0];
                // var newParamsName = ""; // 最终拼接成的字符串
                // var paramsNameNumber = params.length; // 实际标签的个数
                // var provideNumber = 15; // 每行能显示的字的个数
                // var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                // /**
                //  * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                //  */
                // // 条件等同于rowNumber>1
                // if (paramsNameNumber > provideNumber) {
                //     /** 循环每一行,p表示行 */
                //     for (var p = 0; p < rowNumber; p++) {
                //         var tempStr = ""; // 表示每一次截取的字符串
                //         var start = p * provideNumber; // 开始截取的位置
                //         var end = start + provideNumber; // 结束截取的位置
                //         // 此处特殊处理最后一行的索引值
                //         if (p === rowNumber - 1) {
                //             // 最后一次不换行
                //             tempStr = params.substring(start, paramsNameNumber);
                //         } else {
                //             // 每一次拼接字符串并换行
                //             tempStr = params.substring(start, end) + "\n";
                //         }
                //         newParamsName += tempStr; // 最终拼成的字符串
                //     }
                //
                // } else {
                //     // 将旧标签的值赋给新标签
                //     newParamsName = params;
                // }
                // //将最终的字符串返回
                // return newParamsName
              },
            },
          },
          series: seriesData,
        };
        column_xAxis.setOption(option);
        _modalActionHidden("#card2");
      }
    },
  });
}
// 点击合同金额排名
function mousedown() {
  var getId = contract_id;
  var id = ""; //合同id
  var status = ""; //合同状态
  $.each(getId, function (k, v) {
    if (Xindex === k) {
      id = getId[Xindex]; //获取对应的id
      getDetail(id, contractStatus[k]); //弹出合同详情页,getStatus[k]对应的状态
    }
  });
}
// -------------------现金流汇总图表--------------------
// 现金流汇总
function r2c1(data, params) {
  var componentId = params.componentId;
  var dateHtml = `<a class="text-default daterange-ranges font-weight-semibold cursor-pointer dropdown-toggle mr-2">
                      <i class="icon-calendar mr-2"></i>
                      <span></span>
                  </a>`;
  if ($(".text-default.daterange-ranges.font-weight-semibold.cursor-pointer.dropdown-toggle.mr-2").length > 0) {
  } else {
    $($(".dashBoardContent .dataSheet:nth-child(2) div:nth-child(1) .card-header .sheetPovPart")[0]).before(dateHtml);
  }

  var html = `<div class="chart columnYAxis" id="column_yAxis" style="height: 400px;"></div>`;
  $("#chart-" + componentId).html(html);
  column_yAxis = echarts.init(document.getElementById("column_yAxis"), "westeros");
  _componentDaterange();
  barEchart2(); //三年内现金流
  $($(".dashBoardContent .dataSheet:nth-child(2) div:nth-child(1) .card-header .card-title")[0]).css("cursor", "pointer");
  $($(".dashBoardContent .dataSheet:nth-child(2) div:nth-child(1) .card-header .card-title")[0]).click(function () {
    layer.open({
      type: 2,
      title: false,
      area: ["100%", "100%"],
      move: false,
      resize: false,
      scrollbar: false,
      closeBtn: 0,
      content: `../formlistPage/viewformlistPage.html?param1=6&appid=1&elementType=LST`,
    });
    // window.location.href = '../contract1/contract.html?contract_status=2';
  });
} // 现金流汇总
function barEchart2() {
  getDateArry();
  $.ajax({
    type: "post",
    url: Api.Contract + "firstPage/contractCashflowSize",
    async: true,
    data: $.extend(
      {
        startDate: startDate,
        startEnd: startEnd,
        language: sign,
      },
      userinfoParamsApp
    ),
    success: function (result) {
      if (result.resultCode === 0) {
        var data = result.resultObj.resultList;
        var arr = [];
        for (var i in data) {
          arr.push(data[i]);
        }
        var option = {
          color: ["#ffa726"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          grid: {
            left: "3%",
            right: "15%",
            containLabel: true,
          },
          xAxis: {
            name: getLanguage("period") + "：" + getLanguage("year"),
            type: "category",
            data: dateArr,
          },
          dataZoom: [
            {
              type: "inside",
            },
            {
              type: "slider",
            },
          ],
          yAxis: {
            name: getLanguage("cashFlowTiele") + "：" + getLanguage("yuan"),
            type: "value",
          },
          series: [
            {
              data: arr,
              type: "bar",
            },
          ],
        };
        column_yAxis.setOption(option);
        column_yAxis.on("click", barClick);
        _modalActionHidden("#card4");
      }
    },
  });
}
// 点击现金流汇总柱状图
function barClick(param) {
  console.log(param);
  // console.log(param.name);
  // console.log(get_next_month(param.name+'-01'));
  let queryParam = {
    cf_date_: param.name,
    cf_date: get_next_month(param.name + "-01"),
    cf_status: "2,3,4,7",
  };
  layer.open({
    type: 2,
    title: false,
    area: ["100%", "100%"],
    move: false,
    resize: false,
    scrollbar: false,
    closeBtn: 0,
    content: `../formlistPage/viewformlistPage.html?param1=6&appid=1&elementType=LST&query_map=${escape(JSON.stringify(queryParam))}`,
  });
}
// -------------------即将到期合同图--------------------
// 即将到期合同
function r2c2(data, params) {
  var componentId = params.componentId;
  var dateHtml = `<div class="list-icons">
                      <select class="form-control select" id="Company" data-fouc onchange="dateChange();">
                          <option value="Jan" class="Jan">一个月到期</option>
                          <option value="Mar" class="Mar">三个月到期</option>
                          <option value="HalfYear" class="HalfYear">半年到期</option>
                          <option value="year" class="year">一年到期</option>
                      </select>
                      <a class="list-icons-item"></a>
                  </div>`;
  if ($(".form-control.select.select2-hidden-accessible").length > 0) {
  } else {
    $($(".dashBoardContent .dataSheet:nth-child(2) div:nth-child(1) .card-header .sheetPovPart")[1]).before(dateHtml);
  }
  var html = `<table class="table text-nowrap  mt-015">
                      <thead>
                          <tr>
                              <th class="w-100">合同编号</th>
                              <th class="">公司信息</th>
                              <th class="">到期日期</th>
                          </tr>
                      </thead>
                      <tbody id="expiryContractBody">

                      </tbody>
                  </table>`;
  $("#chart-" + componentId).html(html);
  $("#chart-" + componentId)
    .parent()
    .css("padding", "0");
  $("#chart-" + componentId).css({
    overflow: "auto",
  });
  $(".select").select2({
    minimumResultsForSearch: Infinity,
  });
  expiryContract();
  $(".echart").eq(3).attr("style", "overflow-x: auto; overflow-y: auto;height: 416px;");
  $($(".dashBoardContent .dataSheet:nth-child(2) div:nth-child(1) .card-header .card-title")[1]).css("cursor", "pointer");
  $($(".dashBoardContent .dataSheet:nth-child(2) div:nth-child(1) .card-header .card-title")[1]).click(function () {
    let code = {
      contract_no: listContractNo.join(),
    };
    layer.open({
      type: 2,
      title: false,
      area: ["100%", "100%"],
      move: false,
      resize: false,
      scrollbar: false,
      closeBtn: 0,
      content: `../contract1/contractLayer.html?query_map=${escape(JSON.stringify(code))}`,
    });
  });
}
// 点击即将到期合同列表
function trClick(id, status) {
  getDetail(id, status); //弹出合同详情页,getStatus[k]对应的状态
}
// 获取日期区间值
function getDateArry() {
  var d1 = startDate;
  var d2 = startEnd;
  var dateArry = new Array();
  var s1 = d1.split("-");
  var s2 = d2.split("-");
  var mCount = 0;
  if (parseInt(s1[0]) < parseInt(s2[0])) {
    mCount = (parseInt(s2[0]) - parseInt(s1[0])) * 12 + parseInt(s2[1]) - parseInt(s1[1]) + 1;
  } else {
    mCount = parseInt(s2[1]) - parseInt(s1[1]) + 1;
  }
  if (mCount > 0) {
    var startM = parseInt(s1[1]);
    var startY = parseInt(s1[0]);
    for (var i = 0; i < mCount; i++) {
      if (startM < 12) {
        dateArry[i] = startY + "-" + (startM > 9 ? startM : "0" + startM);
        startM += 1;
      } else {
        dateArry[i] = startY + "-" + (startM > 9 ? startM : "0" + startM);
        startM = 1;
        startY += 1;
      }
    }
  }
  dateArr = dateArry;
}
// 三年内现金流的日期选择
var _componentDaterange = function () {
  var monthSection = ""; //日期区间
  // 默认显示的一年
  $(".daterange-ranges span").html(moment().format("YYYY-MM-DD") + " &nbsp; - &nbsp; " + moment().add(12, "month").format("YYYY-MM-DD"));
  startDate = moment().format("YYYY-MM-DD") + " 00:00:00";
  startEnd = moment().add(12, "month").format("YYYY-MM-DD") + " 00:00:00";
  monthSection = 12;
  $(".daterange-ranges")
    .daterangepicker(
      {
        showDropdowns: true,
        startDate: startDate,
        endDate: startEnd,
        minDate: "2012-01-01",
        maxDate: "2080-12-31",
        linkedCalendars: false, //启用时，显示的两个日历将始终为两个连续的月份（如：1月和2月），并且当单击日历上方的左侧或右侧箭头时，两个日历都将变化。 禁用时，两个日历可以单独变化并显示任何月/年。
        // dateLimit: { days: 60 },
        ranges: {
          "3个月内": [moment(), moment().add(3, "month")],
          "6个月内": [moment(), moment().add(6, "month")],
          "1年内": [moment(), moment().add(12, "month")],
          "2年内": [moment(), moment().add(24, "month")],
          "3年内": [moment(), moment().add(36, "month")],
        },
        locale: {
          format: "YYYY-MM-DD",
          customRangeLabel: getLanguage("custom"),
          daysOfWeek: [
            getLanguage("SundayMin"),
            getLanguage("MondayMin"),
            getLanguage("TuesdayMin"),
            getLanguage("WednesdayMin"),
            getLanguage("ThursdayMin"),
            getLanguage("FridayMin"),
            getLanguage("SaturdayMin"),
          ],
          monthNames: [
            getLanguage("January"),
            getLanguage("February"),
            getLanguage("March"),
            getLanguage("April"),
            getLanguage("May"),
            getLanguage("June"),
            getLanguage("July"),
            getLanguage("August"),
            getLanguage("September"),
            getLanguage("October"),
            getLanguage("November"),
            getLanguage("December"),
          ],
        },
        opens: "left",
        applyClass: "btn-sm bg-slate-600",
        cancelClass: "btn-sm btn-light",
      },
      function (start, end) {
        column_yAxis.clear();
        $(".daterange-ranges span").html(start.format("YYYY-MM-DD") + " &nbsp; - &nbsp; " + end.format("YYYY-MM-DD"));
        startDate = start.format("YYYY-MM-DD") + " 00:00:00";
        startEnd = end.format("YYYY-MM-DD") + " 00:00:00";
        barEchart2();
        return startDate, startEnd;
      }
    )
    .on("showCalendar.daterangepicker", function () {
      $(".monthselect").select2({
        width: 91.83,
        minimumResultsForSearch: Infinity,
      });
      $(".yearselect").select2({
        width: 65.59,
        minimumResultsForSearch: Infinity,
      });
      // change事件
      $(".monthselect").on("change", function () {
        setTimeout(function () {
          $(".monthselect").select2({
            width: 91.83,
            minimumResultsForSearch: Infinity,
          });
          $(".yearselect").select2({
            width: 65.58,
            minimumResultsForSearch: Infinity,
          });
          // $('.calendars .select2-selection--single').css("margin-left","10px !important;");
        });
      });
    })
    .on("hide.daterangepicker", function () {
      $(".select2-container--default.select2-container--open").remove(); //清除下拉框
    });
  $(".daterange-ranges").data("daterangepicker").setStartDate(startDate);
  $(".daterange-ranges").data("daterangepicker").setEndDate(startEnd);
};
// 即将到期合同
function expiryContract() {
  var myDate = new Date(); //当前日期
  var startDate = myDate.Format("yyyy-MM-dd");
  var newDate = ""; //选择之后的结束日期
  var value;
  value = $("#Company").val();
  if (value === "Jan") {
    newDate = DateAdd("mounth", 1, myDate).Format("yyyy-MM-dd");
    $("#select2-Company-container").html(getLanguage("ExpiredOneMonth"));
  } else if (value === "Mar") {
    newDate = DateAdd("mounth", 3, myDate).Format("yyyy-MM-dd");
    $("#select2-Company-container").html(getLanguage("ThreeMonthsDue"));
  } else if (value === "HalfYear") {
    newDate = DateAdd("mounth", 6, myDate).Format("yyyy-MM-dd");
    $("#select2-Company-container").html(getLanguage("HalfAyear"));
  } else {
    newDate = DateAdd("mounth", 12, myDate).Format("yyyy-MM-dd");
    $("#select2-Company-container").html(getLanguage("yearExpiration"));
  }
  $("#Company").val(value);
  $("#expiryContractBody").html("");
  $.ajax({
    type: "post",
    url: Api.Contract + "firstPage/contractExpireList",
    async: true,
    data: $.extend(
      {
        startDate: startDate,
        startEnd: newDate,
        language: sign,
      },
      userinfoParamsApp
    ),
    success: function (result) {
      if (result.resultCode === 0) {
        var data = result.resultObj.contractExpireList;
        if (data == null) {
          _modalActionHidden("#card3");
          return;
        }
        var html = "";
        for (var i = 0; i < data.length; i++) {
          var date = "";
          if (data[i].sub_status === "7") {
            date = data[i].terminal_date;
          } else {
            date = data[i].lease_end_date;
          }
          listContractNo.push(data[i].contract_no);
          html =
            "<tr onclick='trClick(\"" +
            data[i].sys_contract_id +
            '","' +
            data[i].contract_status +
            "\")' style='cursor: pointer;'>" +
            "<td>" +
            "<div class='d-flex align-items-center'>" +
            "<div class='mr-2'>" +
            "<i class='badge badge-mark border-danger mr-1'></i>" +
            "</div>" +
            "<div>" +
            "<a href='#' class='text-default font-weight-semibold letter-icon-title'>" +
            (data[i].contract_no || "") +
            "</a>" +
            "<div class='text-muted font-size-sm'>" +
            data[i].object_name +
            "</div>" +
            "</div>" +
            "</div>" +
            "<td>" +
            "<div>" +
            "<a href='#' class='text-default font-weight-semibold letter-icon-title'>" +
            (data[i].company_code || "") +
            "</a>" +
            "<div class='text-muted font-size-sm'>" +
            data[i].description_1 +
            "</div>" +
            "</td>" +
            "<td>" +
            "<span class='text-muted font-size-sm'>" +
            date +
            "</span>" +
            "</td>" +
            "</tr>";
          $("#expiryContractBody").append(html);
        }
        _modalActionHidden("#card3");
      }
    },
  });
}
// 即将到期合同日期选择
function dateChange() {
  expiry_flag = 1;
  var value = $("#Company").val();
  expiryContract();
}
// 清除select下拉框
function hideSelectAndInitSelect() {
  setTimeout(function () {
    $(".monthselect").select2({
      width: 91.83,
      minimumResultsForSearch: Infinity,
    });
    $(".yearselect").select2({
      width: 65.58,
      minimumResultsForSearch: Infinity,
    });
    $(".select2-container--default.select2-container--open").remove(); //清除下拉框
  });
}
//查看合同详情页面
var getDetail = function (params, status) {
  var url;
  if (typeof params === "string") {
    url = "../contract1/contractDetail.html?form_key=" + params + "&template_id=1&contractStatus=" + status;
    // url = './contractDetail.html?form_key=' + params + '&template_id=1&contractStatus=' + status;
  }
  layer.open({
    type: 2,
    title: false,
    area: ["100%", "100%"],
    move: false,
    resize: false,
    scrollbar: false,
    closeBtn: 0,
    content: url,
  });
};
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
        return cfs.request.common.sendRequest(url, "POST", paramObj, false, true);
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
      queryonevariableinfo: function (name) {
        var url = Api.seepln + "variablemanagement/queryonevariableinfo";
        paramObj = $.extend(
          {
            isStatus: "1",
            name: name,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "GET", paramObj, false, true);
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
            '" class="dropdown breadcrumb-elements-item mr-1 cursor-pointer">' +
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
          '<a class="breadcrumb-elements-item mr-1 cursor-pointer" id="' +
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
        cfs.common.unScroll();
      },
      //恢复按钮可用
      enableButton: function (btn) {
        $("#" + btn.attr("id") + "_disable").hide();
        btn.show();
        cfs.common.removeUnScroll();
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
    /**禁用滚动条**/
    unScroll: function () {
      var top = $(document).scrollTop();
      $(document).on("scroll.unable", function (e) {
        $(document).scrollTop(top);
      });
    },
    /**启用滚动条**/
    removeUnScroll: function () {
      $(document).unbind("scroll.unable");
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
    toXlsx: function (fileName, dataJson = null, titleArr = null, spreadOperate = null, contentDomStr = ".dashBoardContent") {
      if (dataJson) {
        if (dataJson.length == 0 && titleArr == null) return;
        //组标题
        var titleObj = dataJson[0];
        titleArr = titleArr || Object.keys(titleObj);
        var dataArr = [];
        for (var i = 0; i < dataJson.length; i++) {
          var rowArr = [];
          for (var j = 0; j < titleArr.length; j++) {
            var cell = dataJson[i][titleArr[j]];
            rowArr.push(cell);
          }
          dataArr.push(rowArr);
        }
      }
      console.log(dataArr);
      var divName = `exportXlsxTmp`;
      var div = $(`<div id="${divName}" style='display:none;'></div>`);
      $(contentDomStr).append(div);
      var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 1 });
      var sheet = spread.getSheet(0);
      sheet.suspendPaint();
      if (dataJson) {
        sheet.setArray(0, 0, [titleArr]);
        sheet.setArray(1, 0, dataArr);
      }
      // 设置百分比
      $.each(dataArr, function (k, v) {
        spread.getActiveSheet().setFormatter(k + 1, dataArr[0].length - 1, "0%");
      });
      if (spreadOperate && spreadOperate instanceof Function) {
        spreadOperate(spread);
      }
      sheet.resumePaint();
      var excelIo = new GC.Spread.Excel.IO();
      var json = spread.toJSON();
      excelIo.save(
        json,
        function (blob) {
          saveAs(blob, fileName + ".xlsx");
        },
        function (e) {
          // process error
          console.log(e);
        }
      );
      div.remove();
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
