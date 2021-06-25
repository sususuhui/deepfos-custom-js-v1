// 大地付款计划推送
// BY hang.yin
$("#contractList_table").on("init.dt", async function () {
  const cfs = new DevCustomFuncTools();

  const screening = getValue("#picker_container_contract");

  let extraComm = await getFormListSql(screening);
  const extraCommFrom = extraComm.indexOf("from");
  const extraComZ = extraComm.slice(extraCommFrom + 4, extraComm.length);

  let comm = `
  SELECT
    sum(
      IFNULL(cf.cf_amount, 0) - IFNULL(deduct.total_amount, 0)
    ) kpi1,
    sum(IFNULL(pay.actual_amount,0)) kpi2
  FROM
    ${extraComZ}
  `;

  let data_a = 0,
    data_b = 0,
    data_c = 0;
  let res = cfs.request.foundation.runComm(comm);
  if (res.err) {
    ForSwal("读取数据失败：" + res.err.Message);
  } else {
    const data = res.res;
    if (!_.isNull(data[0])) {
      data_a = numFormat(data[0].kpi1);
      data_b = numFormat(data[0].kpi2);
      data_c = numFormat(data[0].kpi1 - data[0].kpi2);
    }
  }

  let html = `
  <div style="display: flex; float: left; margin: 0.625rem 0 0 0">
    <div class="mr-3">本期应付：${data_a} 元</div>
    <div class="mr-3">本期已付：${data_b} 元</div>
    <div>本期应付未付：${data_c} 元</div>
  </div>
  `;

  $(".datatable-header").append(html);
});

const getFormListSql = (params) => {
  return CommonRequest({
    url: `${ApiFn.getOrigin()}/DynamicForm/formlist/formListSql`,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    data: $.param({
      work_type: 6,
      query_map: JSON.stringify(params),
    }),
  });
};

/**
 * 千分符
 * @param {*} num
 * @returns
 */
const numFormat = (num) => {
  let RNum = Number(num);
  let c =
    RNum.toString().indexOf(".") !== -1
      ? RNum.toLocaleString()
      : RNum.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  return c;
};

function PostCashflow(obj, param, basicParam) {
  if (typeof param === "undefined") {
    //单行
    console.log("大地付款计划推送 单行");
    var rowData = JSON.parse($(obj).parents("tr").attr("row-data"));
    var cf_id = rowData["cf_id"];
    // var cf_id = $(this).parents('tr').attr("row-data")['cf_id'];
    var cf_list = [cf_id];

    ForSwal("开始付款计划推送作业", true);

    $.ajax({
      // url: Api.Journal + 'export',
      url: window.document.location.origin + "/dadi_lease/cashFlow/push",
      type: "POST",
      dataType: "JSON",
      data: JSON.stringify(cf_list),
      headers: $.extend({}, userinfoParams3, { "Content-Type": "application/json" }),
      success: function success(res) {
        console.log(res);

        if (res.success == false) {
          ForSwal(res.tipMsg, false);
        } else ForSwal("推送付款计划接口执行成功", true);
      },
      error: function error(res) {
        console.log(res);
        ForSwal(res.tipMsg, false);
      },
    });
  } else {
    // 1：选中行   2：查询条件
    if (basicParam.type === 1) {
      console.log("大地付款计划推送 选中行");
      var cf_list = getlistIdArr("#contractList_table_wrapper .DTFC_LeftBodyLiner", "cf_id");
      if (cf_list.length > 0) {
        ForSwal("开始付款计划推送作业", true);
        $.ajax({
          // url: Api.Journal + 'export',
          url: window.document.location.origin + "/dadi_lease/cashFlow/push",
          type: "POST",
          dataType: "JSON",
          data: JSON.stringify(cf_list),
          headers: $.extend({}, userinfoParams3, { "Content-Type": "application/json" }),
          success: function success(res) {
            console.log(res);

            if (res.success == false) {
              ForSwal(res.tipMsg, false);
            } else ForSwal("推送付款计划接口执行成功", true);
          },
          error: function error(res) {
            console.log(res);
            ForSwal(res.tipMsg, false);
            // notify({error_tip: "read_journal_api执行失败", type: 'error'});
          },
        });
      }
    } else {
      console.log("大地付款计划推送 查询条件");

      if (basicParam && basicParam.type === 2) {
        new FilterModal({
          queryFormText: queryFormText,
          sureCallBack: function (params) {
            SearchThenPost(JSON.stringify(params));
          },
        });
      }
    }
  }
}

function SearchThenPost(params) {
  console.log("post_api");
  var cf_id_list = [];
  var forms = {
    type: 1,
    work_type: getRequest().param1,
    query_map: JSON.stringify(getValue("form.filterForm")), //筛选窗口选取条件
    //query_map: params,
    order_param: [],
    draw: "1",
    matchParam: "",
    start: 0,
    length: 100000, //返回数据条数上限
  };

  //调用系统查询接口获取cf_id
  $.ajax({
    url: window.document.location.origin + "/DynamicForm/formlist/formList",
    type: "POST",
    async: false,
    dataType: "JSON",
    data: $.extend({}, forms, userinfoParams3),
    headers: $.extend({}, userinfoParams3),
    success: function (res) {
      for (var i = 0; i < res.data.length; ++i) {
        cf_id_list.push(res.data[i].cf_id);
      }
    },
    error: function (res) {
      ForSwal(res, false);
      return;
    },
  });

  ForSwal("开始付款计划推送作业", true);

  //调用推送接口
  $.ajax({
    // url: Api.Journal + 'export',
    url: window.document.location.origin + "/dadi_lease/cashFlow/push",
    type: "POST",
    dataType: "JSON",
    data: JSON.stringify(cf_id_list),
    headers: $.extend({}, userinfoParams3, { "Content-Type": "application/json" }),
    success: function success(res) {
      console.log(res);

      if (res.success == false) {
        ForSwal(res.tipMsg, false);
      } else ForSwal("推送付款计划接口执行成功", true);
    },
    error: function error(res) {
      console.log(res);

      ForSwal(res.tipMsg, false);
    },
  });
}

// 大地付款计划撤销
// BY hang.yin
function RejectCashflow(obj, param, basicParam) {
  if (typeof param === "undefined") {
    //单行
    console.log("大地付款计划撤销 单行");
    var rowData = JSON.parse($(obj).parents("tr").attr("row-data"));
    var cf_id = rowData["cf_id"];
    // var cf_id = $(this).parents('tr').attr("row-data")['cf_id'];
    var cf_list = [cf_id];

    ForSwal("开始付款计划撤销作业", true);

    $.ajax({
      // url: Api.Journal + 'export',
      url: window.document.location.origin + "/dadi_lease/cashFlow/revoke",
      type: "POST",
      dataType: "JSON",
      data: JSON.stringify(cf_list),
      headers: $.extend({}, userinfoParams3, { "Content-Type": "application/json" }),
      success: function success(res) {
        console.log(res);

        if (res.code != "0") {
          ForSwal(res.msg, false);
        } else ForSwal("撤销付款计划接口执行成功", true);
      },
      error: function error(res) {
        console.log(res);
        ForSwal(res.msg, false);
      },
    });
  } else {
    // 1：选中行   2：查询条件
    if (basicParam.type === 1) {
      console.log("大地付款计划撤销 选中行");
      var cf_list = getlistIdArr("#contractList_table_wrapper .DTFC_LeftBodyLiner", "cf_id");
      if (cf_list.length > 0) {
        ForSwal("开始付款计划撤销作业", true);
        $.ajax({
          // url: Api.Journal + 'export',
          url: window.document.location.origin + "/dadi_lease/cashFlow/revoke",
          type: "POST",
          dataType: "JSON",
          data: JSON.stringify(cf_list),
          headers: $.extend({}, userinfoParams3, { "Content-Type": "application/json" }),
          success: function success(res) {
            console.log(res);

            if (res.code != "0") {
              ForSwal(res.msg, false);
            } else ForSwal("撤销付款计划接口执行成功", true);
          },
          error: function error(res) {
            console.log(res);
            ForSwal(res.msg, false);
            // notify({error_tip: "read_journal_api执行失败", type: 'error'});
          },
        });
      }
    } else {
      console.log("大地付款计划撤销 查询条件");

      if (basicParam && basicParam.type === 2) {
        new FilterModal({
          queryFormText: queryFormText,
          sureCallBack: function (params) {
            SearchThenReject(JSON.stringify(params));
          },
        });
      }
    }
  }
}

function SearchThenReject(params) {
  console.log("post_api");
  var cf_id_list = [];
  var forms = {
    type: 1,
    work_type: getRequest().param1,
    query_map: JSON.stringify(getValue("form.filterForm")), //筛选窗口选取条件
    //query_map: params,
    order_param: [],
    draw: "1",
    matchParam: "",
    start: 0,
    length: 100000, //返回数据条数上限
  };

  //调用系统查询接口获取cf_id
  $.ajax({
    url: window.document.location.origin + "/DynamicForm/formlist/formList",
    type: "POST",
    async: false,
    dataType: "JSON",
    data: $.extend({}, forms, userinfoParams3),
    headers: $.extend({}, userinfoParams3),
    success: function (res) {
      for (var i = 0; i < res.data.length; ++i) {
        cf_id_list.push(res.data[i].cf_id);
      }
    },
    error: function (res) {
      ForSwal(res, false);
      return;
    },
  });

  ForSwal("开始付款计划撤销作业", true);

  //调用撤销接口
  $.ajax({
    // url: Api.Journal + 'export',
    url: window.document.location.origin + "/dadi_lease/cashFlow/revoke",
    type: "POST",
    dataType: "JSON",
    data: JSON.stringify(cf_id_list),
    headers: $.extend({}, userinfoParams3, { "Content-Type": "application/json" }),
    success: function success(res) {
      console.log(res);

      if (res.code != "0") {
        ForSwal(res.msg, false);
      } else ForSwal("撤销付款计划接口执行成功", true);
    },
    error: function error(res) {
      console.log(res);

      ForSwal(res.msg, false);
    },
  });
}
