function r1c1() {
  let cardName = "r1c1";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let option = {
    title: {
      text: "当前余额账龄占比",

      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["30天以内", "31-60天", "61-90天", "90天以上"],
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 335, name: "31-60天" },
          { value: 234, name: "61-90天" },
          { value: 135, name: "90天以上" },
          { value: 1548, name: "30天以内" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
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
}

// function dealSheetData() {

//   // tableDataDraw('#r1c1',{}),
//   console.log(1)
// }

function r1c2() {
  let cardName = "r1c2";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      data: ["30天以内", "31-60天", "61-90天", "90天以上", "销售量"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "30天以内",
        type: "bar",
        stack: "总量",
        label: {
          show: false,
          position: "insideRight",
        },
        data: [320, 302, 301, 334, 390, 330, 320],
      },
      {
        name: "31-60天",
        type: "bar",
        stack: "总量",
        label: {
          show: false,
          position: "insideRight",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "61-90天",
        type: "bar",
        stack: "总量",
        label: {
          show: false,
          position: "insideRight",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "90天以上",
        type: "bar",
        stack: "总量",
        label: {
          show: false,
          position: "insideRight",
        },
        data: [150, 212, 201, 154, 190, 330, 410],
      },
      {
        name: "销售量",
        type: "line",
        stack: "销售量",
        label: {
          show: true,
          position: "insideRight",
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r3c1() {
  let cardName = "r3c1";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let data = {
    legend: ["逾期金额", "加权逾期天数"],
    xAxis: ["上海欧姆龙", "绿地长沙", "海航投资", "昆山三星", "爱尔医院", "国信证券", "上海保利", "国投太平洋", "苏宁文化", "中路上海"],
    bar: [440641, 434368, 415645, 406116, 380257, 375901, 357014, 327600, 173670, 125550],
    line: [40, 28, 53, 24, 30, 24, 54, 23, 32, 53],
  };

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: 30,
      top: 10,
      containLabel: true,
    },
    legend: {
      x: "center",
      y: "bottom",
      data: data.legend,
    },
    xAxis: [
      {
        type: "category",
        data: data.xAxis,
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          interval: 0,
          rotate: 40,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "逾期金额",
        // min: 0,
        // max: 250,
        // interval: 50,
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "加权逾期天数",
        // min: 0,
        // max: 25,
        // interval: 5,
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "逾期金额",
        type: "bar",
        data: data.bar,
      },

      {
        name: "加权逾期天数",
        type: "line",
        yAxisIndex: 1,
        data: data.line,
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}
function r3c2() {
  let cardName = "r3c2";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let data = {
    legend: ["逾期金额", "加权逾期率"],
    xAxis: ["天津滨海新区", "浙江杭州", "海南三亚", "浙江杭州", "浙江绍兴", "云南昆明", "上海人民广场", "广东番禺", "福建福州", "四川成都"],
    bar: [1116444, 1015282, 795635, 631855, 604955, 563349, 538976, 391177, 306994, 304469],
    line: [41, 32, 49, 59, 46, 56, 25, 43, 30, 60],
  };

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: 30,
      top: 10,
      containLabel: true,
    },
    legend: {
      x: "center",
      y: "bottom",
      data: data.legend,
    },
    xAxis: [
      {
        type: "category",
        data: data.xAxis,
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          interval: 0,
          rotate: 40,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "逾期金额",
        // min: 0,
        // max: 250,
        // interval: 50,
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "加权逾期率",
        // min: 0,
        // max: 25,
        // interval: 5,
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "逾期金额",
        type: "bar",
        data: data.bar,
      },

      {
        name: "加权逾期率",
        type: "line",
        yAxisIndex: 1,
        data: data.line,
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r4() {
  let cardName = "r4";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  var dataAll = [
    { name: "上海周浦", value: [256768, 4699704] },
    { name: "上海虹桥", value: [215592, 5356509] },
    { name: "上海五角场", value: [735812, 8427814] },
    { name: "上海浦江镇", value: [440814, 1485689] },
    { name: "上海新天地", value: [668390, 4692971] },
    { name: "上海人民广场", value: [533977, 3540950] },
    { name: "浙江绍兴", value: [407290, 5752466] },
    { name: "浙江余姚", value: [184427, 3302237] },
    { name: "浙江杭州", value: [205808, 8657815] },
    { name: "江苏苏州", value: [784872, 2947179] },
    { name: "江苏南京", value: [117893, 3934580] },
    { name: "江苏镇江", value: [782223, 5073167] },
    { name: "北京三里屯", value: [551859, 4950834] },
    { name: "天津滨海新区", value: [54260, 327702] },
    { name: "河南驻马店", value: [755910, 6641820] },
    { name: "广东番禺", value: [644976, 8504480] },
    { name: "海南三亚", value: [589606, 3163635] },
    { name: "福建福州", value: [294474, 6550867] },
    { name: "四川成都", value: [102600, 3809242] },
    { name: "云南昆明", value: [210082, 516679] },
    { name: "青海西宁", value: [177151, 1361626] },
  ];

  var markLineOpt = {
    animation: false,
    lineStyle: {
      type: "solid",
    },
    data: [
      [
        {
          coord: [0, 0],
          symbol: "none",
        },
        {
          coord: [900000, 10000000],
          symbol: "none",
        },
      ],
    ],
  };

  let option = {
    xAxis: [
      {
        gridIndex: 0,
        min: 0,
        interval: 100000,
        max: 900000,
        name: "逾期金额",
        nameLocation: "end",
        nameTextStyle: {
          fontSize: 14,
        },
      },
    ],
    yAxis: [
      {
        gridIndex: 0,
        min: 0,
        interval: 1000000,
        max: 10000000,
        name: "本年累计销售额",
        nameLocation: "end",
        nameTextStyle: {
          fontSize: 14,
        },
      },
    ],
    tooltip: {
      formatter: function (params) {
        return params.name;
      },
    },
    series: [
      {
        name: "门店销售-逾期",
        type: "scatter",
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: dataAll,
        markLine: markLineOpt,
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r5() {
  let cardName = "r5";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let data = [
    ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
    [15000, 33000, 38000, 50000, 75000, 77000, 80000, 84000],
    [2000, 5000, 25000, 43000, 51000, 66000, 73500, 81500],
  ];

  let option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      x: "center",
      y: "bottom",
      data: ["累计开票金额", "累计收款金额"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: 50,
      top: 10,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: data[0],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "累计开票金额",
        type: "line",

        data: data[1],
      },
      {
        name: "累计收款金额",
        type: "line",

        data: data[2],
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r6() {
  let cardName = "r6";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let data = [
    ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    [2000, 3000, 20000, 18000, 8000, 15000, 7500, 8000, 5000, 5000, 5000, 12000],
    [2000, 3000, 20000, 18000, 8000, 15000, 7500, 5000, 5000, 5000, 5000, 12000],
    [2000, 3000, 20000, 18000, 8000, 15000, 8000, 5000, 5000, 5000, 5000, 12000],
    [2000, 3000, 20000, 18000, 8000, 18000, 8000, 5000, 5000, 5000, 5000, 12000],
    [2000, 3000, 20000, 18000, 6000, 10000, 6000, 5000, 5000, 5000, 5000, 12000],
    [2000, 3000, 20000, 20000, 6000, 10000, 6000, 5000, 5000, 5000, 5000, 12000],
    [2000, 3000, 18000, 20000, 6000, 10000, 6000, 5000, 5000, 5000, 5000, 12000],
    [2000, 2000, 19000, 20000, 6000, 10000, 6000, 5000, 5000, 5000, 5000, 12000],
    [0, 5000, 10000, 8000, 6000, 10000, 6000, 5000, 5000, 5000, 5000, 12000],
  ];
  let legendData = ["2020.9版本", "2020.8版本", "2020.7版本", "2020.6版本", "2020.5版本", "2020.4版本", "2020.3版本", "2020.2版本", "2020.1版本"];
  let seriesData = [];
  data.forEach((val, i) => {
    if (i > 0) {
      seriesData.push({
        name: legendData[i - 1],
        type: "line",

        data: val,
      });
    }
  });

  let option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      x: "center",
      y: "bottom",
      data: legendData,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: 50,
      top: 10,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      // boundaryGap: false,
      data: data[0],
    },
    yAxis: {
      type: "value",
    },
    series: seriesData,
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

let Cus_echarts = {};
let Cus_theme = "westeros";
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
