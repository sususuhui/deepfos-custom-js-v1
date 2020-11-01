let Cus_echarts = {};
let Cus_theme = 'westeros';

$(function () {
  r1();
  r3c1();
  r3c2();
  r4();
});

function r1() {
  let dashboardDom = $('.dashBoardContent');
  let html = `
  <div class="row dataSheet mb-2 row_extra_1" style="height: 90px">
  <div class="col-2">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-blue-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">任务总数</div>
            <div class="font-weight-semibold" style="font-size: large">25</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-2">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-blue-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">正常完成</div>
            <div class="font-weight-semibold" style="font-size: large">5</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-2">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-blue-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">延期完成</div>
            <div class="font-weight-semibold" style="font-size: large">1</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-2">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-blue-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">进行中</div>
            <div class="font-weight-semibold" style="font-size: large">1</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-2">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-blue-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">进行中-延期</div>
            <div class="font-weight-semibold" style="font-size: large">1</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-2">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-blue-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">未开始</div>
            <div class="font-weight-semibold" style="font-size: large">17</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
  dashboardDom.prepend(html);
}

function r3c1() {
  let cardName = 'pie_chart';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['剩余额度', '已使用'],
    },
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: '48%',
        style: {
          text: '40%',
          textAlign: 'center',
          fill: '#000',
          width: 40,
          height: 30,
          fontSize: 18,
        },
      },
    ],
    series: [
      {
        // name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 29880800, name: '剩余额度' },
          { value: 19544900, name: '已使用' },
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

function r3c2() {
  let cardName = 'budget_detail';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  let data = [
    ['类别', '合计', '采购合同', '人力资源', '项目费用'],
    ['剩余额度', ' 298,808.00 ', ' 160,000.00 ', ' 50,000.00 ', ' 88,808.00 '],
    ['实际金额', ' 195,449.00 ', ' 140,000.00 ', ' 50,000.00 ', ' 5,449.00 '],
    ['预算金额', ' 494,257.00 ', ' 300,000.00 ', ' 100,000.00 ', ' 94,257.00 '],
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
      trHtmlStart += trHtmlEnd;
      tbodyHtmlStart += trHtmlStart;
    }
  });
  theadHtmlStart += theadHtmlEnd;
  tbodyHtmlStart += tbodyHtmlEnd;

  let tableHtml = `<table class="table table-xs table-bordered">${theadHtmlStart}${tbodyHtmlStart}</table>`;

  return tableHtml;
};

function r4() {
  let cardName = 'budget_vs_actual';
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
        data: [8399, 20391, 28966, 90407, 58060, 9519, 50790, 48181, 40710, 38718, 97960, 2156],
      },
      {
        name: '实际支出',
        type: 'bar',
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
