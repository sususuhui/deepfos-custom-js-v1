$(() => {
  r1();
  r2c1();
  r2c2();
});

const r1 = () => {
  let cardName = '现金流量预测表';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  let data = [
    [1, '现金流入', ' -   ', ' 150,000 ', ' -   ', ' -   ', ' -   ', ' 150,000 ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   '],
    [1.1, '销售收入', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   '],
    [1.2, '贷款本金', '-', ' 150,000 ', '-', '-', '-', ' 150,000 ', '-', '-', '-', '-', ' -   '],
    [2, '现金流出', ' 9,983 ', ' 15,365 ', ' 15,579 ', ' 15,630 ', ' 25,575 ', ' 72,150 ', ' 167,403 ', ' 20,055 ', ' -   ', ' 69,651 ', ' 257,110 '],
    [2.1, '土地费用', ' -   ', '-', '-', '-', '-', ' -   ', '-', '-', '-', '-', ' -   '],
    [2.2, '开发建设投资费用', ' 9,983 ', ' 9,983 ', ' 9,983 ', ' 9,983 ', ' 9,983 ', ' 39,932 ', ' 14,975 ', ' 19,966 ', ' -   ', ' -   ', ' 34,941 '],
    ['2.2.1', '前期工程费', ' 9,357 ', ' 9,357 ', ' 9,357 ', ' 9,357 ', ' 9,357 ', ' 37,428 ', ' 14,035 ', ' 18,714 ', ' -   ', ' -   ', ' 32,749 '],
    ['2.2.2', '基础设施配套费', 331, 331, 331, 331, 331, ' 1,325 ', 497, 663, ' -   ', ' -   ', ' 1,160 '],
    ['2.2.3', '建筑安装工程费', 295, 295, 295, 295, 295, ' 1,179 ', 442, 590, ' -   ', ' -   ', ' 1,032 '],
    ['2.2.4', '公共配套设施建设费', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   '],
    ['2.2.5', '开发间接费', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   '],
    [2.3, '期间费用', ' -   ', ' 5,382 ', ' 5,596 ', ' 5,647 ', ' 15,592 ', ' 32,217 ', ' 2,429 ', 89, ' -   ', ' 6,842 ', ' 9,360 '],
    ['2.3.1', '管理费用', ' -   ', ' 1,586 ', ' 1,671 ', ' 1,692 ', ' 5,670 ', ' 1,730 ', 971, 36, ' -   ', ' 2,737 ', ' 8,407 '],
    ['2.3.2', '销售费用', ' -   ', ' 2,379 ', ' 2,507 ', ' 2,538 ', ' 8,505 ', ' 15,928 ', ' 1,457 ', 54, ' -   ', ' 4,105 ', ' 5,616 '],
    ['2.3.3', '财务费用', '-', ' 1,417 ', ' 1,417 ', ' 1,417 ', ' 1,417 ', ' -   ', '-', '-', '-', '-', ' -   '],
    [2.4, '税费', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' 62,809 ', ' 62,809 '],
    ['2.4.1', ' 增值税及附加 ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' 62,809 ', ' 62,809 '],
    ['2.4.2', ' 土地增值税 ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   '],
    ['2.4.3', ' 所得税 ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   ', ' -   '],
    [2.5, '银行贷款本金偿还', '-', '-', '-', '-', '-', ' -   ', '-', '-', '-', '-', ' -   '],
    [2.6, '银行贷款利息支付', '-', '-', '-', '-', '-', ' -   ', '-', '-', '-', '-', ' -   '],
    [2.7, '我司融资借款本金偿还', '-', '-', '-', '-', '-', ' -   ', ' 150,000 ', '-', '-', '-', ' 150,000 '],
    [2.8, '我司融资借款利息支付', '-', ' 1,417 ', ' 1,417 ', ' 1,417 ', ' 1,417 ', ' -   ', '-', '-', '-', ' -   ', ' -   '],
    [3, '净现金流', ' -9,983 ', ' 134,635 ', ' -15,579 ', ' -15,630 ', ' -25,575 ', ' 77,850 ', ' -167,403 ', ' -20,055 ', ' -   ', ' -69,651 ', ' -257,110 '],
    [4, '累计现金流', ' -9,983.10 ', ' 124,652 ', ' 109,073 ', ' 93,443 ', ' 67,867 ', ' 67,867 ', ' -99,536 ', ' -119,591 ', ' -119,591 ', ' -189,242 ', ' -189,242 '],
  ];

  let tableHeadHtml = `
  <thead>
    <tr class="text-center">
      <th rowspan="2">序号</th>
      <th rowspan="2">项目</th>
      <th rowspan="2">2020</th>
      <th colspan="4">2021</th>
      <th rowspan="2">2020年</th>
      <th colspan="4">2022</th>
      <th rowspan="2">2019年</th>
    </tr>
    <tr class="text-center">
      <th>一季度</th>
      <th>二季度</th>
      <th>三季度</th>
      <th>四季度</th>
      <th>一季度</th>
      <th>二季度</th>
      <th>三季度</th>
      <th>四季度</th>
    </tr>
  </thead>`;

  let tableBodyHtml = renderTable_r1(data);

  let tableHtml = `<table class="table table-xs table-bordered">${tableHeadHtml}${tableBodyHtml}</table>`;

  $(echartDom).html(tableHtml);
};
const renderTable_r1 = (data) => {
  let tbodyHtmlStart = `<tbody>`;
  let tbodyHtmlEnd = `</tbody>`;
  data.forEach((val, i) => {
    let trHtmlStart = `<tr>`;
    let trHtmlEnd = `</tr>`;
    if ([0, 3, 23, 24].includes(i)) {
      val.forEach((cVal, j) => {
        if (cVal === '-') {
          trHtmlStart += `<td></td>`;
        } else {
          if (j === 0) {
            trHtmlStart += `<td style="font-weight: 900;">${cVal}</td>`;
          } else if (j === 1) {
            trHtmlStart += `<td class="text-center" style="font-weight: 900;">${cVal}</td>`;
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
          if ([1, 2, 4, 5, 11, 15, 19, 20, 21, 22].includes(i) && j === 1) {
            trHtmlStart += `<td class="pl-2" >${cVal}</td>`;
          } else if (j === 0 || j === 1) {
            trHtmlStart += `<td>${cVal}</td>`;
          } else {
            trHtmlStart += `<td class="text-right">${cVal}</td>`;
          }
        }
      });
    }

    trHtmlStart += trHtmlEnd;
    tbodyHtmlStart += trHtmlStart;
  });

  tbodyHtmlStart += tbodyHtmlEnd;

  return tbodyHtmlStart;
};

const r2c1 = () => {
  let cardName = '成本利润表';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  let data = [
    ['序号', '科目', '金额（万元）', '不含税金额', '增值税'],
    [1, '销售收入', ' 420,332.75 ', ' 378,678.15 ', ' 41,654.60 '],
    [2, '土地成本', ' 201,402.58 ', ' 181,443.77 ', ' 19,958.81 '],
    [2.1, '开发成本', ' 114,412.82 ', ' 107,936.62 ', ' 6,476.20 '],
    [3, '期间费用', ' 29,003.98 ', ' 26,488.55 ', ' 2,515.44 '],
    [3.1, '管理费用', ' 6,304.99 ', ' 6,090.86 ', 214.13],
    [3.2, '销售费用', ' 5,043.99 ', ' 4,872.69 ', 171.31],
    [3.3, '财务费用', ' 17,655.00 ', ' 15,525.00 ', ' 2,130.00 '],
    [4, '销售税费', ' 21,110.80 ', '-', '-'],
    [4.1, '增值税及附加', ' 12,704.15 ', '-', ' 12,704.15 '],
    [4.2, '土地增值税', ' 8,406.66 ', '-', '-'],
    [5, '销售利润', ' 54,402.56 ', ' 62,809.22 ', '-'],
    [6, '营业外收入', '-', '-', '-'],
    [7, '营业利润合计', '-', '-', '-'],
    [8, '企业所得税', ' 13,600.64 ', '-', '-'],
    [9, '营业净利润', ' 40,801.92 ', '-', '-'],
    [9.1, '营业净利率', '9.71%', '-', '-'],
    [10, '营业毛利润', ' 104,517.35 ', '-', '-'],
    [10.1, '营业毛利率', '24.87%', '-', '-'],
  ];

  let tableHtml = renderTable_r2c1(data);

  $(echartDom).html(tableHtml);
};
const renderTable_r2c1 = (data) => {
  let theadHtmlStart = `<thead>`;
  let theadHtmlEnd = `</thead>`;
  let tbodyHtmlStart = `<tbody>`;
  let tbodyHtmlEnd = `</tbody>`;
  data.forEach((val, i) => {
    if (i <= 0) {
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

      if (![4, 5, 6, 8, 9].includes(i)) {
        val.forEach((cVal, j) => {
          if (cVal === '-') {
            trHtmlStart += `<td></td>`;
          } else {
            if (j === 0) {
              trHtmlStart += `<td  style="font-weight: 900;">${cVal}</td>`;
            } else if (j === 1) {
              trHtmlStart += `<td class="pl-2" style="font-weight: 900;">${cVal}</td>`;
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
            if (j === 0 || j === 1) {
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

const r2c2 = () => {
  let cardName = '敏感性分析';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);
  cfs.echarts.correctHeight(cardName);

  let buttonInfo2 = {
    id: 'r2c2_select2',
    text: '影响因素',
    list: [
      { key: 'A', value: '累计现金流' },
      { key: 'B', value: '营业净利润' },
    ],
  };
  let buttonInfo = {
    id: 'r2c2_select1',
    text: '变动因素',
    list: [
      { key: 'A', value: '单价' },
      { key: 'B', value: '开发成本' },
      { key: 'C', value: '期间费用' },
      { key: 'D', value: '建筑面积' },
    ],
  };
  cfs.card.head.addSelectButton(headDom, buttonInfo2);
  cfs.card.head.addSelectButton(headDom, buttonInfo);

  $('.r2c2_select1').css('margin-right', '10px');
  $('.r2c2_select1').find('label').css('width', '100px');
  $('.r2c2_select2').find('label').css('width', '100px');

  let text_select1 = '单价';
  let text_select2 = '累计现金流';
  let xAxis = ['-20%', '-15%', '-10%', '-5%', '0', '5%', '10%', '15%', '20%'];
  let data = {
    '单价-累计现金流': [-26790.44, -8291.57, 10207.29, 28706.16, 47205.03, 65703.89, 84202.76, 102701.62, 121200.49],
    '单价-营业净利润': [-24111.39, -7462.41, 9186.57, 25835.54, 42484.52, 59133.5, 75782.48, 92431.46, 109080.44],
    '开发成本-累计现金流': [121200.49, 102701.62, 84202.76, 65703.89, 47205.03, 28706.16, 10207.29, -8291.57, -26790.44],
    '开发成本-营业净利润': [109080.44, 92431.46, 75782.48, 59133.5, 42484.52, 25835.54, 9186.57, -7462.41, -24111.39],
    '期间费用-累计现金流': [115140.46, 97566.54, 81676.67, 63732.78, 44844.77, 28132.04, 9696.93, -7876.99, -25450.91],
    '期间费用-营业净利润': [103626.42, 87809.89, 73509.01, 57359.5, 40360.3, 25318.83, 8727.24, -7089.29, -22905.82],
    '建筑面积-累计现金流': [-25986.72, -8042.82, 10411.44, 27844.98, 48149.13, 63732.78, 81676.67, 107836.7, 117564.47],
    '建筑面积-营业净利润': [-23388.05, -7238.54, 9370.3, 25060.48, 43334.21, 57359.5, 73509.01, 97053.03, 105808.03],
  };

  let option = setOption({ xAxis, data, text_select1, text_select2 });

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }

  $('#' + buttonInfo.id).change(function (e) {
    text_select1 = $(e.target).find('option:selected').text();
    let option = setOption({ xAxis, data, text_select1, text_select2 });
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  });
  $('#' + buttonInfo2.id).change(function (e) {
    text_select2 = $(e.target).find('option:selected').text();
    let option = setOption({ xAxis, data, text_select1, text_select2 });
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  });
};
const setOption = (params) => {
  let { xAxis, data, text_select1, text_select2 } = params;
  return {
    title: {
      text: '累计现金流',
      left: 'center',
    },
    xAxis: {
      type: 'category',
      data: xAxis,
      name: '单价增长率',
      nameLocation: 'middle',
      nameGap: 40,
    },
    yAxis: {
      type: 'value',
      name: '累计现金流情况',
      nameLocation: 'middle',
      nameGap: 80,
    },
    grid: {
      left: '5%',
      right: '4%',
      bottom: '5%',
      top: '6%',
      containLabel: true,
    },
    series: [
      {
        data: data[`${text_select1}-${text_select2}`],
        type: 'bar',
        markLine: {
          symbol: 'none', //去掉警戒线最后面的箭头
          label: {
            show: false,
          },
          data: [
            {
              silent: false, //鼠标悬停事件  true没有，false有
              lineStyle: {
                //警戒线的样式  ，虚实  颜色
                type: 'solid',
                color: '#FA3934',
              },
              yAxis: data[`${text_select1}-${text_select2}`][4], // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
            },
          ],
        },
      },
    ],
  };
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
