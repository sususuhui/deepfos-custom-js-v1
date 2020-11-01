function r1c1() {
  let cardName = 'r1c1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  // headDom.find('.card-header').css('display', 'none');

  // cfs.echarts.correctHeight(cardName);

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
    // legend: {
    //   orient: 'horizontal',
    //   y: 30,
    //   data: ['增加', '减少', '汇总'],
    // },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      splitLine: {
        show: false,
      },
      data: ['项目预算', '人力成本', '采购成本', '费用', '实际发生额'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '汇总',
        type: 'bar',
        barWidth: 50,
        stack: '总量',
        label: {
          show: true,
          position: 'top',
        },
        data: [650000, '-', '-', '-', 380000],
      },
      {
        name: '辅助',
        type: 'bar',
        barWidth: 50,
        stack: '总量',
        itemStyle: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)',
        },
        emphasis: {
          itemStyle: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)',
          },
        },
        // data: [0, 97776906, 102352413, 103816575, 103242635, 0]
        data: ['-', 550000, 400000, 380000, '-'],
      },
      // {
      //   name: '增加',
      //   type: 'bar',
      //   stack: '总量',
      //   label: {
      //     show: true,
      //     position: 'top',
      //   },
      //   data: ['-', '-', '-', '-', '-'],
      // },
      {
        name: '减少',
        type: 'bar',
        barWidth: 50,
        stack: '总量',
        data: ['-', 100000, 150000, 20000, '-'],
        label: {
          show: true,
          position: 'bottom',
          formatter: function (params) {
            return '-' + params.value;
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

function r1c2() {
  let cardName = 'r1c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let yDataHead = ['差旅费', '业务招待费', '杂项', '通信费'];
  yDataHead = yDataHead.reverse();
  let yDataValue1 = [15600, 2000, 1200, 560];
  yDataValue1 = yDataValue1.reverse();
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow',
      },
    },
    grid: {
      left: '2%',
      right: 75,
      bottom: '10%',
      top: '10',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      name: getLanguage('money2') + '：千元',
      // boundaryGap: [0, 0.01],
      axisLabel: {
        formatter: function (val) {
          return format(val / 1000);
        },
        interval: 0,
        rotate: 40,
      },
    },
    yAxis: {
      type: 'category',
      data: yDataHead,
      // interval:0,
      axisLabel: {
        interval: 0,
        rotate: 20,
      },
    },
    series: [
      {
        type: 'bar',
        stack: '总量',
        barWidth: 35,
        label: {
          normal: {
            show: false,
            position: 'insideRight',
          },
        },
        data: yDataValue1,
        itemStyle: {
          normal: {
            color: '#569ADA',
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

function r2() {
  let cardName = 'r2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    legend: {
      data: ['预算支出', '实际支出', '预算总量', '实际总量'],
      bottom: 'bottom',
    },
    grid: {
      left: '4%',
      right: '4%',
      bottom: '10%',
      top: '6%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Jan-20', 'Feb-20', 'Mar-20', 'Apr-20', 'May-20', 'Jun-20', 'Jul-20', 'Aug-20', 'Sep-20', 'Oct-20', 'Nov-20', 'Dec-20'],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        // name: '水量',
        min: 0,
        // max: 250,
        interval: 20000,
        axisLabel: {
          formatter: '{value}',
        },
      },
      {
        type: 'value',
        // name: '温度',
        min: 0,
        // max: 25,
        interval: 100000,
        axisLabel: {
          formatter: '{value}',
        },
      },
    ],

    series: [
      {
        name: '预算支出',
        type: 'bar',
        barGap: '-92%',
        barMaxWidth: 60,
        data: [8399, 20391, 28966, 90407, 58060, 9519, 50790, 48181, 40710, 38718, 97960, 2156],
        itemStyle: {
          normal: {
            color: 'rgba(129,175,239,0.3)', //柱子颜色
            // borderColor: "#000000", //边框颜色
            // borderWidth: 2,
          },
        },
      },
      {
        name: '实际支出',
        type: 'bar',
        barMaxWidth: 50,
        data: [6099, 9384, 38966, 91000, 50000, '-', '-', '-', '-', '-', '-', '-'],
      },
      {
        name: '预算总量',
        type: 'line',
        yAxisIndex: 1,
        data: [8399, 28790, 57756, 148163, 206223, 215742, 266532, 314713, 355423, 394141, 492101, 494257],
      },
      {
        name: '实际总量',
        type: 'line',
        yAxisIndex: 1,
        data: [6099, 15483, 54449, 145449, 195449, '-', '-', '-', '-', '-', '-', '-'],
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r3() {
  let cardName = 'r3';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  let data = [
    ['-', 2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020, '2020/12'],
    ['-', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'YearEnd'],
    ['-', 'Actual', 'Actual', 'Actual', 'Actual', 'Actual', 'Plan', 'Plan', 'Plan', 'Plan', 'Plan', 'Plan', 'Plan', 'Forecast'],
    ['资产合计', ' 98,750.00 ', 195, -93, ' -5,860.00 ', ' -9,848.00 ', ' -9,026.00 ', ' -14,420.00 ', ' -14,218.00 ', ' -17,123.00 ', ' -17,525.00 ', ' -21,754.00 ', ' -12,345.00 ', ' -12,345.00 '],
    [
      '货币资金',
      ' -   ',
      ' -97,305.00 ',
      ' -96,343.00 ',
      ' -100,860.00 ',
      ' -103,598.00 ',
      ' -101,526.00 ',
      ' -105,670.00 ',
      ' -104,218.00 ',
      ' -105,873.00 ',
      ' -105,025.00 ',
      ' -108,004.00 ',
      ' -97,345.00 ',
      ' -97,345.00 ',
    ],
    ['预付账款', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   '],
    ['待摊费用', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   '],
    ['无形资产', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   '],
    [
      '固定资产',
      ' 100,000.00 ',
      ' 100,000.00 ',
      ' 100,000.00 ',
      ' 100,000.00 ',
      ' 100,000.00 ',
      ' 100,000.00 ',
      ' 100,000.00 ',
      ' 100,000.00 ',
      ' 100,000.00 ',
      ' 100,000.00 ',
      ' 100,000.00 ',
      ' 100,000.00 ',
      ' 100,000.00 ',
    ],
    [
      '累计折旧',
      ' -1,250.00 ',
      ' -2,500.00 ',
      ' -3,750.00 ',
      ' -5,000.00 ',
      ' -6,250.00 ',
      ' -7,500.00 ',
      ' -8,750.00 ',
      ' -10,000.00 ',
      ' -11,250.00 ',
      ' -12,500.00 ',
      ' -13,750.00 ',
      ' -15,000.00 ',
      ' -15,000.00 ',
    ],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    [
      '负债合计',
      ' -107,312.00 ',
      ' -12,706.00 ',
      ' -18,284.00 ',
      ' -21,450.00 ',
      ' -23,790.00 ',
      ' -29,538.00 ',
      ' -31,425.00 ',
      ' -35,575.00 ',
      ' -41,664.00 ',
      ' -46,036.00 ',
      ' -49,948.00 ',
      ' -329,444.00 ',
      ' -329,444.00 ',
    ],
    ['应付账款', ' -100,000.00 ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   '],
    [
      '其他应付款',
      ' -2,634.00 ',
      ' -12,711.00 ',
      ' -18,227.00 ',
      ' -21,467.00 ',
      ' -23,794.00 ',
      ' -29,555.00 ',
      ' -31,390.00 ',
      ' -35,548.00 ',
      ' -41,611.00 ',
      ' -45,952.00 ',
      ' -49,873.00 ',
      ' -88,835.00 ',
      ' -88,835.00 ',
    ],
    ['预提费用', ' -4,644.00 ', 44, -9, 54, 43, 52, -3, 10, -16, -43, -37, ' -240,570.00 ', ' -240,570.00 '],
    ['应交税费', -34, -39, -48, -37, -39, -35, -32, -37, -37, -41, -38, -39, -39],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    [
      '权益合计',
      ' 8,562.00 ',
      ' 12,511.00 ',
      ' 18,377.00 ',
      ' 27,310.00 ',
      ' 33,638.00 ',
      ' 38,564.00 ',
      ' 45,845.00 ',
      ' 49,793.00 ',
      ' 58,787.00 ',
      ' 63,561.00 ',
      ' 71,702.00 ',
      ' 341,789.00 ',
      ' 341,789.00 ',
    ],
    [
      '未分配利润',
      ' 8,562.00 ',
      ' 12,511.00 ',
      ' 18,377.00 ',
      ' 27,310.00 ',
      ' 33,638.00 ',
      ' 38,564.00 ',
      ' 45,845.00 ',
      ' 49,793.00 ',
      ' 58,787.00 ',
      ' 63,561.00 ',
      ' 71,702.00 ',
      ' 341,789.00 ',
      ' 341,789.00 ',
    ],
  ];

  let tableHtml = renderTable(data);

  $(echartDom).html(tableHtml);
}

function r4() {
  let cardName = 'r4';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  let data = [
    ['-', 2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020, 2020, '2020.1~12'],
    ['-', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'YearTotal'],
    ['-', 'Actual', 'Actual', 'Actual', 'Actual', 'Actual', 'Plan', 'Plan', 'Plan', 'Plan', 'Plan', 'Plan', 'Plan', 'Forecast'],
    [
      '总费用',
      ' -8,562.00 ',
      ' -3,949.00 ',
      ' -5,866.00 ',
      ' -8,933.00 ',
      ' -6,328.00 ',
      ' -4,926.00 ',
      ' -7,281.00 ',
      ' -3,948.00 ',
      ' -8,994.00 ',
      ' -4,774.00 ',
      ' -8,141.00 ',
      ' -270,087.00 ',
      ' -341,789.00 ',
    ],
    [
      '销售费用',
      ' -3,731.00 ',
      ' -2,705.00 ',
      ' -3,014.00 ',
      ' -3,989.00 ',
      ' -2,609.00 ',
      ' -3,753.00 ',
      ' -4,676.00 ',
      ' -2,269.00 ',
      ' -4,450.00 ',
      ' -3,383.00 ',
      ' -5,145.00 ',
      ' -126,654.00 ',
      ' -166,378.00 ',
    ],
    [
      '管理费用',
      ' -4,831.00 ',
      ' -1,244.00 ',
      ' -2,852.00 ',
      ' -4,944.00 ',
      ' -3,719.00 ',
      ' -1,173.00 ',
      ' -2,605.00 ',
      ' -1,679.00 ',
      ' -4,544.00 ',
      ' -1,391.00 ',
      ' -2,996.00 ',
      ' -143,433.00 ',
      ' -175,411.00 ',
    ],
    ['财务费用', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   '],
    [
      '净利润',
      ' -8,562.00 ',
      ' -3,949.00 ',
      ' -5,866.00 ',
      ' -8,933.00 ',
      ' -6,328.00 ',
      ' -4,926.00 ',
      ' -7,281.00 ',
      ' -3,948.00 ',
      ' -8,994.00 ',
      ' -4,774.00 ',
      ' -8,141.00 ',
      ' -270,087.00 ',
      ' -341,789.00 ',
    ],
  ];

  let tableHtml = renderTable(data);

  $(echartDom).html(tableHtml);
}

const renderTable = (data) => {
  let theadHtmlStart = `<thead>`;
  let theadHtmlEnd = `</thead>`;
  let tbodyHtmlStart = `<tbody>`;
  let tbodyHtmlEnd = `</tbody>`;
  data.forEach((val, i) => {
    if (i <= 2) {
      let trHtmlStart = `<tr>`;
      let trHtmlEnd = `</tr>`;
      val.forEach((cVal, j) => {
        if (cVal === '-') {
          trHtmlStart += `<th></th>`;
        } else {
          trHtmlStart += `<th class="text-center">${cVal}</th>`;
        }
      });
      trHtmlStart += trHtmlEnd;
      theadHtmlStart += trHtmlStart;
    } else {
      let trHtmlStart = `<tr>`;
      let trHtmlEnd = `</tr>`;

      // val.forEach((cVal, j) => {
      //   if (cVal === '-') {
      //     trHtmlStart += `<td></td>`;
      //   } else {
      //     if (['资产合计', '负债合计', '权益合计', '总费用', '净利润'].includes(cVal)) {
      //       trHtmlStart += `<td class="pl-2" style="font-weight: 900;">${cVal}</td>`;
      //     } else if (j === 0) {
      //       trHtmlStart += `<td>${cVal}</td>`;
      //     } else {
      //       trHtmlStart += `<td class="text-right">${cVal}</td>`;
      //     }
      //   }
      // });

      if (['资产合计', '负债合计', '权益合计', '总费用', '净利润'].includes(val[0])) {
        val.forEach((cVal, j) => {
          if (cVal === '-') {
            trHtmlStart += `<td></td>`;
          } else {
            if (['资产合计', '负债合计', '权益合计', '总费用', '净利润'].includes(cVal)) {
              trHtmlStart += `<td class="pl-2" style="font-weight: 900;">${cVal}</td>`;
            } else if (j === 0) {
              trHtmlStart += `<td style="font-weight: 900;">${cVal}</td>`;
            } else {
              trHtmlStart += `<td class="text-right" style="font-weight: 900;">${cVal}</td>`;
            }
          }
        });
      } else {
        val.forEach((cVal, j) => {
          if (cVal === '-') {
            trHtmlStart += `<td></td>`;
          } else {
            if (['资产合计', '负债合计', '权益合计', '总费用', '净利润'].includes(cVal)) {
              trHtmlStart += `<td class="pl-2" style="font-weight: 900;">${cVal}</td>`;
            } else if (j === 0) {
              trHtmlStart += `<td>${cVal}</td>`;
            } else {
              trHtmlStart += `<td class="text-right">${cVal}</td>`;
            }
          }
        });
      }

      trHtmlStart += trHtmlEnd;
      tbodyHtmlStart += trHtmlStart;
    }
  });
  theadHtmlStart += theadHtmlEnd;
  tbodyHtmlStart += tbodyHtmlEnd;

  let tableHtml = `<table class="table table-xs table-bordered">${theadHtmlStart}${tbodyHtmlStart}</table>`;

  return tableHtml;
};

var Cus_theme = 'westeros';
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
        var contentType = 'application/' + (json ? 'json' : 'x-www-form-urlencoded');
        var resObj = {};
        var err = '';
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
        var url = Api.SeeplnCube + 'cube/queryCubeData';
        paramObj = $.extend(
          {
            cube_name: cubeName,
            script: script,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, true);
      },
      //通用保存方法
      save: function (sheetDatas) {
        var url = Api.SeeplnCube + 'spreadsheet/save';
        paramObj = $.extend(
          {
            sheetDatas: sheetDatas,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, true);
      },
    },
    foundation: {
      //根据user权限获取维度，最多2层
      getAccessDimensionMemberLevel: function (dimName, exp = '', name = '#root', id = '1', searchValue = '') {
        let url = Api.seepln + 'dimension/getAccessDimensionMemberLevel';
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
        return cfs.request.common.sendRequest(url, 'POST', paramObj, false);
      },
      //根据表达式查询，不分权限
      selectDimensionMemberByNameFunction: function (dimensionMemberNames) {
        let url = Api.seepln + 'dimension/selectDimensionMemberByNameFunction';
        paramObj = $.extend(
          {
            dimensionMemberNames: dimensionMemberNames,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, false);
      },
      //执行自定义sql语句
      runComm: function (comm) {
        var url = Api.seepln + 'sqlparser/run/post';
        paramObj = $.extend(
          {
            sql: comm,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, false, true);
      },
    },
    python: {
      //同步调用python
      web: function (pyName, params) {
        var url = Api.python + 'start/web';
        paramObj = $.extend(
          {
            pyName: pyName,
            params: params,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, true, true);
      },
    },
  },
  card: {
    //dashboard单个卡片方法 bootstrap4图标：http://easyview.seepln.com/Limitless_2.0.1/Bootstrap%204/Template/layout_1/LTR/material/full/icons_icomoon.html
    head: {
      //获取卡片表头jquery dom
      getDom: function (cardName) {
        return $('#' + cardName);
      },
      //删除卡片表右边所有元素
      removeButton: function (dom) {
        dom.find('.header-elements').html('');
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
        let sHtml = '';
        buttonInfo.list.forEach(function (v) {
          sHtml += "<option value='" + v.key + "'>" + v.value + '</option>';
        });
        carHead.find('.header-elements').prepend(btn);
        $('#' + buttonInfo.id).html(sHtml);
        $('.select').select2({ minimumResultsForSearch: -1 });
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
          list[i] = '<a index = "' + i + '" class="dropdown-item" href="#">' + list[i] + '</a>';
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
            '</span></a>' +
            '<div class="dropdown-menu" style="min-width:100px">' +
            list.join('') +
            '</div></div>'
        );
        carHead.find('.header-elements').append(btn);
        if (buttonInfo.id.indexOf('_disable') == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + '_disable';
          var btn_disable = this.addDropdownButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.find('.dropdown-menu').remove();
          btn_disable.hover(function () {
            this.style.cursor = 'not-allowed';
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
            '</span></a>'
        );
        carHead.find('.header-elements').append(btn);
        if (buttonInfo.id.indexOf('_disable') == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + '_disable';
          var btn_disable = this.addButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.hover(function () {
            this.style.cursor = 'not-allowed';
          });
        }
        return btn;
      },
      //点击后调用防止反复执行
      disableButton: function (btn) {
        btn.hide();
        $('#' + btn.attr('id') + '_disable').show();
      },
      //恢复按钮可用
      enableButton: function (btn) {
        $('#' + btn.attr('id') + '_disable').hide();
        btn.show();
      },
    },
    body: {
      //获取卡片内容jquery dom
      getDom: function (cardName) {
        return $('#' + cardName).find('.card-body');
      },
      //添加文件上传卡片
      addFileTag: function (cardName, text) {
        var dom = $(
          '<div status="-1" filename="' +
            text +
            '" style="margin: 1.25rem; padding: 10px;display: inherit; background-color:#f7f7f7;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;">' +
            '<span style="margin-right: 15px;">' +
            text +
            '</span>' +
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
      window.addEventListener('resize', function () {
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
      let echartDom = $('#' + cardName)
        .find('.card-body')
        .find('.echart');
      let cardBodyDom = $('#' + cardName).find('.card-body');

      let _height = $(cardBodyDom).height();
      $(echartDom).height(_height);
    },
    mobileHeight: function (cardName, height) {
      let cardDom = $('#' + cardName).parent();
      $(cardDom).height(height);
      let echartDom = $('#' + cardName)
        .find('.card-body')
        .find('.echart');
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
        text: '',
        type: 'info',
        showCancelButton: true,
        confirmButtonText: getLanguage('sure'),
        cancelButtonText: getLanguage('cancel'),
      }).then(function (result) {
        if (result.value) {
          thenEvent();
        }
      });
    },
    //excel的5位纯数字日期格式转yyyy-mm-dd
    valueToDate: function (value) {
      var n = Number(value.split('.')[0]);
      var date = new Date('1900-1-1');
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
      var titleStr = titleArr.join('\t,');
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          var cell = dataJson[i][titleArr[j]] || '';
          if (cell.toString().indexOf(',') > -1) cell = '"' + cell + '"';
          rowArr.push(cell);
        }
        dataArr.push(rowArr.join('\t,'));
      }
      var dataStr = titleStr + '\n' + dataArr.join('\n');
      var blob = new Blob([dataStr], { type: 'text/plain;charset=utf-8' });
      //解决中文乱码问题
      blob = new Blob([String.fromCharCode(0xfeff), blob], { type: blob.type });
      this.download(blob, fileName + '.csv');
    },
    toXls: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      var titleObj = dataJson[0];
      titleArr = titleArr || Object.keys(titleObj);
      var titleStr = '<tr><td>' + titleArr.join('</td><td>') + '</td></tr>';
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          rowArr.push('<td>' + (dataJson[i][titleArr[j]] || '') + '</td>');
        }
        dataArr.push('<tr>' + rowArr.join('') + '</tr>');
      }
      var dataStr = '<table>' + titleStr + dataArr.join('') + '</table>';
      var uri = 'data:application/vnd.ms-excel;base64,';
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
        type: 'application/vnd.ms-excel',
      });
      this.download(blob, fileName + '.xls');
    },
    toXlsx: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      //
      var sheet = XLSX.utils.json_to_sheet(dataJson);
      var blob = this.sheet2blob(sheet, fileName.substr(0, 30));
      this.download(blob, fileName + '.xlsx');
    },
    sheet2blob: function (sheet, sheetName) {
      sheetName = sheetName || 'sheet1';
      var workbook = {
        SheetNames: [sheetName],
        Sheets: {},
      };
      workbook.Sheets[sheetName] = sheet;
      // 生成excel的配置项
      var wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary',
      };
      var wbout = XLSX.write(workbook, wopts);
      var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
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
      var btn = document.createElement('a');
      btn.href = URL.createObjectURL(blob);
      btn.download = fileFullName;
      btn.style = 'display: none;';
      document.body.appendChild(btn);
      btn.click();
      document.body.removeChild(btn);
    },
  },
};
