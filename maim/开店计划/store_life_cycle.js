function r1m1(data, params) {
  var componentId = params.componentId;
  var html = `<div class="card-header" style="padding:0;">
                  <h6 class="card-title" style="display:inline-block;"><i class="icon-table2 mr-2"></i><span class="contractInformation">门店编号</span></h6>
                  <div class="header-elements ml-3" style="display:inline-block;padding:0;" id="slectId">
                    <form action="#" class="d-inline-flex row" style="width:35rem;">
                      <div class="dropdown p-0 col-md-6">
                        <select class="disPNone user_2s" data-fouc="" name="eq_user_id" id="eq_user_id">
                          <option value="">-</option>
                        </select>
                        <span class="clearDimensionA" onclick="clearUser(this,'2')"></span>
                        <a href="#" style="padding-top:0.5rem;padding-bottom:0.5rem;"
                          class=" multiselect dimensionA btn btn-light dropdown-toggle user_2A"
                          onclick="searchList(this,2);">-</a>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="inputShow row contractField" id="assetInformationFiled" style="height: 80%;overflow: auto;margin-top:10px;"></div>`;
  $("#chart-" + componentId).html(html);
  getSelectData();
  var defaultValue = "1355";
  getListData();
  $(".dimensionA").attr("data-contractId", defaultValue);
  $(".dimensionA").text(defaultValue);
}
let sqlSelectData = []; //查询条件下拉框数据
function getSelectData() {
  //直接通过sql查询下拉框数据
  var res2 = cfs.request.foundation.getAccessDimensionMemberLevel("Entity", "Entity{Base(C_FRANCHISEES,0)}");
  if (res2.err) {
    ForSwal("读取数据失败:" + res2.err.Message); //通过右上角的红色卡片报错
  } else {
    // sqlSelectData = res2.res.resultList[0].children;
  }
  sqlSelectData = [
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "1153-绍兴市中山supper商场店",
      is_access: true,
      pId: 11768,
      id: 11769,
      value: "1153",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "1257-上海市绿城广场店",
      is_access: true,
      pId: 11768,
      id: 11770,
      value: "1257",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "1355-上海市老城宏润国际商场店",
      is_access: true,
      pId: 11768,
      id: 11771,
      value: "1355",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "15119-上海市中山大楼店",
      is_access: true,
      pId: 11768,
      id: 11772,
      value: "15119",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "18932-上海市振兴路五星金融商场店",
      is_access: true,
      pId: 11768,
      id: 11773,
      value: "18932",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "20614-上海市建设路绿城-X-大楼店",
      is_access: true,
      pId: 11768,
      id: 11774,
      value: "20614",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "22501-上海市体育路胜利大厦店",
      is_access: true,
      pId: 11768,
      id: 11775,
      value: "22501",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "23331-上海市振兴路蝴蝶大楼店",
      is_access: true,
      pId: 11768,
      id: 11776,
      value: "23331",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "47216-上海市中山新星大厦店",
      is_access: true,
      pId: 11768,
      id: 11777,
      value: "47216",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "48131-上海市老城胜利大楼店",
      is_access: true,
      pId: 11768,
      id: 11778,
      value: "48131",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "51621-上海市人民路中山商场店",
      is_access: true,
      pId: 11768,
      id: 11779,
      value: "51621",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "53575-上海市人民路宏润-X-中心店",
      is_access: true,
      pId: 11768,
      id: 11780,
      value: "53575",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "55842-上海市人民路东方新世界中心店",
      is_access: true,
      pId: 11768,
      id: 11781,
      value: "55842",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "56770-上海市人民路宏润国际中心店",
      is_access: true,
      pId: 11768,
      id: 11782,
      value: "56770",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "7198-上海市振兴路宏润supper商场店",
      is_access: true,
      pId: 11768,
      id: 11783,
      value: "7198",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "20116-南京市文化路蝴蝶新世界大楼店",
      is_access: true,
      pId: 11768,
      id: 11784,
      value: "20116",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "22622-南京市老城金地国际中心店",
      is_access: true,
      pId: 11768,
      id: 11785,
      value: "22622",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "23381-南京市新区华润中心店",
      is_access: true,
      pId: 11768,
      id: 11786,
      value: "23381",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "48381-南京市富都金融大楼店",
      is_access: true,
      pId: 11768,
      id: 11787,
      value: "48381",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "49703-南京市红星大楼店",
      is_access: true,
      pId: 11768,
      id: 11788,
      value: "49703",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "53482-南京市人民路五一金融中心店",
      is_access: true,
      pId: 11768,
      id: 11789,
      value: "53482",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "55531-南京市建设路宏润中心店",
      is_access: true,
      pId: 11768,
      id: 11790,
      value: "55531",
      selected: false,
    },
    {
      parent_name: "LE744",
      is_base: true,
      isParent: false,
      sharedmember: true,
      level: 3,
      name: "59859-南京市绿城Mall店",
      is_access: true,
      pId: 11768,
      id: 11791,
      value: "59859",
      selected: false,
    },
  ]; //查询条件下拉框数据
  console.log(sqlSelectData);
  // 下拉框数据
  $.each(sqlSelectData, function (k, v) {
    var selectYearHtml = "<option value=" + v.name + ">" + v.name + "</option>";
    $("#eq_user_id").append(selectYearHtml);
  });
}
// 字段信息
function getListData(id) {
  let fieldData = {
    门店名称: "北京市中山中心店",
    城市: "北京",
    运营架构: "北区",
    门店类型: "直营店",
    商圈信息: "北京万达",
    开店日期: "2018/5/1",
    法人信息: "法人726",
    门店店长: "何晓",
  };
  // 字段信息
  $("#assetInformationFiled").html("");
  $.each(fieldData, function (k, v) {
    var html =
      '<div class="form-group form-group-float col-md-3 input-group-sm mb-2">' +
      '<label class="mb-0 font-weight-bold">' +
      k +
      "</label>" +
      '<input type="text" class="form-control" style="padding: 0.25rem 0;" readonly value="' +
      v +
      '">' +
      "</div>";
    $("#assetInformationFiled").append(html);
  });
}
// 点击资产编号事件
function contractChange(id, that) {
  $(".treeDropdown").removeClass("treeShow"); //下拉框隐藏
  var this_value = $(that).text();
  $(that).css("color", "#fff").siblings().css("color", "#333");
  $(that).css("background-color", "#26a69a").siblings().css("background-color", "#fff");
  $(".dimensionA").text(this_value);
  $(".dimensionA").attr("data-contractId", id); //给下拉框赋值id
}
// 点击下拉框事件
function searchList(event, idNum) {
  $(".treeDropdown").removeClass("treeShow");
  var ztreeP = getzTreeXY(event, "tree" + idNum);
  if ($("#tree" + idNum).length > 0) {
    if (
      $("#tree" + idNum)
        .parent()
        .hasClass("treeShow")
    ) {
      return;
    }
    $("#tree" + idNum)
      .parent()
      .attr("style", ztreeP);
    $("#tree" + idNum)
      .parent()
      .addClass("treeShow");
    //禁止鼠标滚动
    // $(document).bind('mousewheel', function(event, delta) {return false;});
    return;
  }
  var container = $('<div class="treeDropdown userListDown treeShow" style="' + ztreeP + '"  />');
  var ztreeInput = $(
    '<div class="input-group">' +
      '<input class="form-control multiselect-search userSearchValue treeSearchValue" type="text" onkeydown="keyup_Search(\'#tree' +
      idNum +
      "',1,true," +
      idNum +
      ',this);" placeholder="Search" style="padding-left: 0.2rem;width:100%;">' +
      '<span class="input-group-append">' +
      "</span>" +
      '<i class="icon-cross2 cleartreeSearchValue" onclick="clearSearchValue(this,\'' +
      idNum +
      '\')" style="right:-0.5rem;"></i>' +
      "</div>"
  );
  var ztreeDom = $(
    '<div class="ztree userContain" id="tree' +
      idNum +
      '"><span class="select2-results"><ul class="select2-results__options scrollEvent"><li class="select2-results__option"><ul class="select2-results__options select2-results__options--nested"/>'
  );
  container.append(ztreeInput).append(ztreeDom);
  $("body").append(container);
  sendAjaxquestDashBoard("#tree" + idNum);
}
// 下拉框渲染
function sendAjaxquestDashBoard(modal) {
  var dropListN = "";
  var defaultValue = $("#eq_user_id option:nth-child(2)").val();
  sqlSelectData.forEach(function (value, i) {
    var style_name = "";
    if (value.value == defaultValue) {
      style_name = "color:#fff;background-color:#26a69a;";
    }
    dropListN +=
      '<li data-contractId="' +
      value.name +
      '"  class="select2-results__option form-check"  aria-selected="false" role="treeitem" style="' +
      style_name +
      '" onclick="contractChange(\'' +
      value.name +
      "',this);\">" +
      value.name +
      "</li>";
  });
  $(modal).find(".select2-results__options.select2-results__options--nested").append(dropListN);
  $(".form-check-input-styled").uniform();
}
function r1m2(data, params) {
  var componentId = params.componentId;
  var option = {
    title: {
      text: "",
      subtext: "",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["销售额", "收入", "应交税费", "合同负债", "现金流入"],
    },
    toolbox: {
      show: true,
      // feature: {
      //     dataView: {show: true, readOnly: false},
      //     magicType: {show: true, type: ['line', 'bar']},
      //     restore: {show: true},
      //     saveAsImage: {show: true}
      // }
    },
    dataZoom: [
      {
        show: true,
        start: 0,
        end: 100,
      },
      {
        type: "inside",
        start: 0,
        end: 100,
      },
    ],
    calculable: true,
    xAxis: [
      {
        type: "category",
        data: [
          "2018-5",
          "2018-6",
          "2018-7",
          "2018-8",
          "2018-9",
          "2018-10",
          "2018-11",
          "2018-12",
          "2019-1",
          "2019-2",
          "2019-3",
          "2019-4",
          "2019-5",
          "2019-6",
          "2019-7",
          "2019-8",
          "2019-9",
          "2019-10",
          "2019-11",
          "2019-12",
          "2020-1",
          "2020-2",
          "2020-3",
          "2020-4",
          "2020-5",
          "2020-6",
          "2020-7",
          "2020-8",
          "2020-9",
          "2020-10",
          "2020-11",
          "2020-12",
          "2021-1",
          "2021-2",
          "2021-3",
          "2021-4",
          "2021-5",
          "2021-6",
          "2021-7",
          "2021-8",
          "2021-9",
          "2021-10",
          "2021-11",
          "2021-12",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "销售额",
        type: "bar",
        data: [
          16948.53,
          35123.31,
          12269.77,
          27105.68,
          19682.22,
          23057.7,
          35123.34,
          15771.21,
          20720.28,
          21449.29,
          30784.68,
          30784.87,
          13303.17,
          33692.06,
          28555.84,
          13302.35,
          11174.65,
          12270.15,
          19682.48,
          10262.83,
          28392.57,
          19687.44,
          25283.46,
          30784.84,
          13302.62,
          37272.42,
          30827.58,
          20720.09,
          26390.03,
          29942.15,
          35122.99,
          39698.82,
          13308.32,
          30784.69,
          39698.94,
          16948.76,
          19682.21,
          30785.15,
          21449.03,
          21448.68,
          21392.56,
          11174.7,
          35120.07,
          27105.41,
        ],
      },
      {
        name: "收入",
        type: "bar",
        data: [
          17752,
          35256,
          14622,
          29212,
          17246,
          26783,
          29648,
          16997,
          19724,
          17496,
          29028,
          24747,
          14337,
          27072,
          27816,
          14179,
          13317,
          10009,
          17838,
          8250,
          30264,
          22344,
          25752,
          33159,
          13550,
          44577,
          28642,
          20799,
          23124,
          24059,
          34213,
          41894,
          11233,
          32244,
          41581,
          20198,
          18559,
          27901,
          17235,
          17234,
          17762,
          11792,
          37435,
          23751,
        ],
      },
      {
        name: "应交税费",
        type: "bar",
        data: [
          1744.96,
          1023.69,
          2249.78,
          1358.71,
          2249.77,
          1161.45,
          568.68,
          753.29,
          1214.09,
          1431.12,
          1187.23,
          1493.79,
          2247.14,
          1988.11,
          2100.89,
          580.94,
          1988.12,
          2100.86,
          1649.83,
          2249.78,
          1068.92,
          1114.11,
          889.71,
          1915.31,
          582.56,
          2151.63,
          1821.85,
          889.7,
          1023.69,
          1017.36,
          1489.01,
          1821.8,
          1821.84,
          1068.95,
          2229.11,
          2100.89,
          1431.14,
          1489.01,
          1649.83,
          1017.37,
          2229.11,
          568.66,
          1742.54,
          568.68,
        ],
      },
      {
        name: "合同负债",
        type: "bar",
        data: [
          367.39,
          171.15,
          376.13,
          210.33,
          376.13,
          245.36,
          95.07,
          135.55,
          235.04,
          237.72,
          222.05,
          295,
          391.73,
          281.2,
          336.38,
          122.74,
          352.56,
          348.98,
          277.1,
          365.05,
          186.34,
          160.55,
          166.4,
          358.23,
          104.83,
          357.41,
          262.53,
          169.39,
          171.94,
          210.92,
          288.26,
          385.13,
          359.78,
          221.61,
          448.75,
          353.58,
          206.23,
          238.81,
          233.36,
          169,
          356.92,
          106.36,
          322.44,
          106.02,
        ],
      },
      {
        name: "现金流入",
        type: "bar",
        data: [
          33083,
          21627,
          36505,
          26832,
          46642,
          17128,
          9120,
          13555,
          25170,
          21104,
          17507,
          25707,
          45058,
          28235,
          39168,
          9757,
          34657,
          44413,
          33856,
          47536,
          22586,
          18078,
          13120,
          30667,
          10155,
          31729,
          30263,
          16587,
          17845,
          16508,
          31457,
          27166,
          30458,
          22598,
          31658,
          40671,
          29670,
          28350,
          25540,
          14442,
          33875,
          11669,
          35757,
          10221,
        ],
      },
    ],
  };
  var myChart = echarts.init(document.getElementById("chart-" + componentId));
  myChart.setOption(option);
}
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
