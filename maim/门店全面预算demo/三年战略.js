let Cus_echarts = {};
let Cus_theme = 'westeros';

let StrategyData = {
  Sales: 738010861.89,
  TotalCosts: 217490972.07,
  GrossProfit: 520519889.82,
  Fees: 501847386.07,
  NetProfit: 29742667,
};
let StrategyAdjustment = {
  YearSalesGrow: 0.08,
  FixedCosts: 0.1,
  FixedFees: 0.3,
};
let r2_data = {
  GrossProfitGrow: {
    '3Y_Average': '',
    Y_Data: [],
  },
  NetProfitGrow: {
    '3Y_Average': '',
    Y_Data: [],
  },
};

$(function () {
  r1c1();
  r2();
  r1c2();
});

function formCreate() {
  let data = $('#r1c1-form').serializeArray();
  StrategyAdjustment = {
    YearSalesGrow: parseFloat(data[0].value) / 100,
    FixedCosts: parseFloat(data[1].value) / 100,
    FixedFees: parseFloat(data[2].value) / 100,
  };

  r2();
  r1c2();
}

function formReset() {
  document.getElementById('r1c1-form').reset();
  let data = $('#r1c1-form').serializeArray();
  StrategyAdjustment = {
    YearSalesGrow: parseFloat(data[0].value) / 100,
    FixedCosts: parseFloat(data[1].value) / 100,
    FixedFees: parseFloat(data[2].value) / 100,
  };
  r2();
  r1c2();
}

function r1c1() {
  let cardName = 'r1c1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let html = `
  <form id="r1c1-form">
    <div class="form-group row">
      <label class="col-form-label col-3">年均销售增长率</label>
      <div class="col-6">
        <input type="text" class="form-control" name="YearSalesGrow" value=8>
      </div>
      <div class="col-1" style="line-height: 40px;">
        <span>%</span>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-form-label col-3">固定成本%</label>
      <div class="col-6">
        <input type="text" class="form-control" name="FixedCosts" value=10>
      </div>
      <div class="col-1" style="line-height: 40px;">
        <span>%</span>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-form-label col-3">固定费用%</label>
      <div class="col-6">
        <input type="text" class="form-control" name="FixedFees" value=30>
      </div>
      <div class="col-1" style="line-height: 40px;">
        <span>%</span>
      </div>
    </div>
  </form>
  <div class="form-group row">
    <button class="btn btn-primary offset-8" onclick="formReset()">重置</button>
    <button class="btn btn-primary ml-1" onclick="formCreate()">生成</button>
  </div>
  `;

  $(echartDom).append(html);
}

function r1c2() {
  let cardName = 'r1c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['毛利增长率 同比', '净利润增长率 同比'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      data: [2020, 2021, 2022],
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} %',
      },
    },
    series: [
      {
        name: '毛利增长率 同比',
        type: 'line',
        stack: '1',
        data: r2_data.GrossProfitGrow.Y_Data,
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%',
          color: '#212121',
        },
        markLine: {
          symbol: 'none',
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: '{c}%',
              },
            },
          },
          data: [{ yAxis: r2_data.GrossProfitGrow[`3Y_Average`] }],
        },
      },
      {
        name: '净利润增长率 同比',
        type: 'line',
        stack: '2',
        data: r2_data.NetProfitGrow.Y_Data,
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%',
          color: '#212121',
        },
        markLine: {
          symbol: 'none',
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: '{c}%',
              },
            },
          },
          data: [{ yAxis: r2_data.NetProfitGrow[`3Y_Average`] }],
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

  r2_setTable();
  r2_handleTableData();
}

function r2_setTable() {
  let cardName = 'r2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let html = `<table class="table table-sm table-bordered table-striped">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col" class='text-center'>实际</th>
      <th colspan="3" class='text-center'>预测</th>
    </tr>
    <tr>
      <th scope="col"></th>
      <th scope="col" class='text-center'>2019</th>
      <th scope="col" class='text-center'>2020</th>
      <th scope="col" class='text-center'>2021</th>
      <th scope="col" class='text-center'>2022</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id='r2-Sales' class='text-center' scope="row">销售额</th>
    </tr>
    <tr>
      <th id='r2-TotalCosts' class='text-center' scope="row">总成本</th>
    </tr>
    <tr>
      <th id='r2-FixedCosts' class='text-center' scope="row">固定成本</th>
    </tr>
    <tr>
      <th id='r2-VariableCosts' class='text-center' scope="row">可变成本</th>
    </tr>
    <tr>
      <th id='r2-GrossProfit' class='text-center' scope="row">毛利</th>
    </tr>
    <tr>
      <th id='r2-Fees' class='text-center' scope="row">费用</th>
    </tr>
    <tr>
      <th id='r2-FixedFees' class='text-center' scope="row">固定费用</th>
    </tr>
    <tr>
      <th id='r2-VariableFees' class='text-center' scope="row">可变费用</th>
    </tr>
    <tr>
      <th id='r2-NetProfit' class='text-center' scope="row">净利润</th>
    </tr>
  </tbody>
</table>`;

  $(echartDom).html(html);
}

function r2_handleTableData() {
  let cardName = 'r2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let table_r1c1 = StrategyData.Sales;
  let table_r1c2 = table_r1c1 * (1 + StrategyAdjustment.YearSalesGrow);
  let table_r1c3 = table_r1c2 * (1 + StrategyAdjustment.YearSalesGrow);
  let table_r1c4 = table_r1c3 * (1 + StrategyAdjustment.YearSalesGrow);

  let table_r2c1 = StrategyData.TotalCosts;
  let table_r3c1 = (table_r3c2 = table_r3c3 = table_r3c4 = table_r2c1 * StrategyAdjustment.FixedCosts);

  let table_r4c1 = table_r2c1 - table_r3c1;
  let table_r4c2 = table_r4c1 * (1 + StrategyAdjustment.YearSalesGrow);
  let table_r4c3 = table_r4c2 * (1 + StrategyAdjustment.YearSalesGrow);
  let table_r4c4 = table_r4c3 * (1 + StrategyAdjustment.YearSalesGrow);

  let table_r2c2 = table_r3c2 + table_r4c2;
  let table_r2c3 = table_r3c3 + table_r4c3;
  let table_r2c4 = table_r3c4 + table_r4c4;

  let table_r5c1 = StrategyData.GrossProfit;
  let table_r5c2 = table_r1c2 - table_r2c2;
  let table_r5c3 = table_r1c3 - table_r2c3;
  let table_r5c4 = table_r1c4 - table_r2c4;

  let table_r6c1 = StrategyData.Fees;

  let table_r7c1 = (table_r7c2 = table_r7c3 = table_r7c4 = table_r6c1 * StrategyAdjustment.FixedFees);

  let table_r8c1 = table_r6c1 - table_r7c1;
  let table_r8c2 = table_r8c1 * (1 + StrategyAdjustment.YearSalesGrow);
  let table_r8c3 = table_r8c2 * (1 + StrategyAdjustment.YearSalesGrow);
  let table_r8c4 = table_r8c3 * (1 + StrategyAdjustment.YearSalesGrow);

  let table_r6c2 = table_r7c2 + table_r8c2;
  let table_r6c3 = table_r7c3 + table_r8c3;
  let table_r6c4 = table_r7c4 + table_r8c4;

  let table_r9c1 = StrategyData.NetProfit;
  let table_r9c2 = table_r5c2 - table_r6c2;
  let table_r9c3 = table_r5c3 - table_r6c3;
  let table_r9c4 = table_r5c4 - table_r6c4;

  $(echartDom)
    .find('#r2-Sales')
    .after(r2_createTd(table_r1c1) + r2_createTd(table_r1c2) + r2_createTd(table_r1c3) + r2_createTd(table_r1c4));
  $(echartDom)
    .find('#r2-TotalCosts')
    .after(r2_createTd(table_r2c1) + r2_createTd(table_r2c2) + r2_createTd(table_r2c3) + r2_createTd(table_r2c4));
  $(echartDom)
    .find('#r2-FixedCosts')
    .after(r2_createTd(table_r3c1) + r2_createTd(table_r3c2) + r2_createTd(table_r3c3) + r2_createTd(table_r3c4));
  $(echartDom)
    .find('#r2-VariableCosts')
    .after(r2_createTd(table_r4c1) + r2_createTd(table_r4c2) + r2_createTd(table_r4c3) + r2_createTd(table_r4c4));
  $(echartDom)
    .find('#r2-GrossProfit')
    .after(r2_createTd(table_r5c1) + r2_createTd(table_r5c2) + r2_createTd(table_r5c3) + r2_createTd(table_r5c4));
  $(echartDom)
    .find('#r2-Fees')
    .after(r2_createTd(table_r6c1) + r2_createTd(table_r6c2) + r2_createTd(table_r6c3) + r2_createTd(table_r6c4));
  $(echartDom)
    .find('#r2-FixedFees')
    .after(r2_createTd(table_r7c1) + r2_createTd(table_r7c2) + r2_createTd(table_r7c3) + r2_createTd(table_r7c4));
  $(echartDom)
    .find('#r2-VariableFees')
    .after(r2_createTd(table_r8c1) + r2_createTd(table_r8c2) + r2_createTd(table_r8c3) + r2_createTd(table_r8c4));
  $(echartDom)
    .find('#r2-NetProfit')
    .after(r2_createTd(table_r9c1) + r2_createTd(table_r9c2) + r2_createTd(table_r9c3) + r2_createTd(table_r9c4));

  // r1c2 data
  let GrossProfitGrow_FirstY = table_r5c2 / table_r5c1 - 1;
  let GrossProfitGrow_SecondY = table_r5c3 / table_r5c2 - 1;
  let GrossProfitGrow_ThirdY = table_r5c4 / table_r5c3 - 1;

  let NetProfitGrow_FirstY = table_r9c2 / table_r9c1 - 1;
  let NetProfitGrow_SecondY = table_r9c3 / table_r9c2 - 1;
  let NetProfitGrow_ThirdY = table_r9c4 / table_r9c3 - 1;

  let GrossProfitGrow_3Y_Average = Math.pow(table_r5c4 / table_r5c1, 1 / 3) - 1;
  let NetProfitGrow_3Y_Average = Math.pow(table_r9c4 / table_r9c1, 1 / 3) - 1;

  function toTransform(point) {
    let str = Number(point * 100).toFixed(2);
    return str;
  }

  r2_data.GrossProfitGrow.Y_Data = [toTransform(GrossProfitGrow_FirstY), toTransform(GrossProfitGrow_SecondY), toTransform(GrossProfitGrow_ThirdY)];
  r2_data.NetProfitGrow.Y_Data = [toTransform(NetProfitGrow_FirstY), toTransform(NetProfitGrow_SecondY), toTransform(NetProfitGrow_ThirdY)];

  r2_data.GrossProfitGrow[`3Y_Average`] = toTransform(GrossProfitGrow_3Y_Average);
  r2_data.NetProfitGrow[`3Y_Average`] = toTransform(NetProfitGrow_3Y_Average);
}

function r2_createTd(tdData) {
  let td = `<td class="text-right">${numFormat(tdData.toFixed(0))}</td>`;
  return td;
}

/**
 * 千分符
 * @param {*} num
 * @returns
 */
function numFormat(num) {
  let RNum = Number(num);
  let c = RNum.toString().indexOf('.') !== -1 ? RNum.toLocaleString() : RNum.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  return c;
}
/**
 * 小数转百分比
 * @param {*} point
 * @param {*} num
 * @returns
 */
function toPercent(point, num) {
  var str = Number(point * 100).toFixed(num);
  str += '%';
  return str;
}

//extraJs全局方法
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
