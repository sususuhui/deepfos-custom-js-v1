var Cus_theme = 'westeros';
var Cus_echarts = {};

function r1c1() {
  let cardName = 'r1c1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let YName = [
    '麦中门店装修项目',
    '麦中Oracle HFM项目',
    '浙江麦当劳信息系统运维项目',
    '浙江麦当劳门店翻新项目',
    '天津麦当劳门店设备升级项目',
    '四川麦当劳网络改造项目',
    '北京麦当劳设备更换项目',
    '浙江麦当劳MCD Capex项目',
  ];
  let Xdata = [1500000, 1200000, 1200000, 612000, 600000, 600000, 500000, 120000];
  let idArr = ['CE028VB4QA64', 'CE028GC6PPP8', 'CE02KBC0DGMO', 'CE028U5GNF2D', 'CE02K4LSLD9C', 'CE02KJJ1RPES', 'CE02KM2J0TDU', 'CE02K0IJ9H6H'];
  let seriesData = [];
  seriesData.push({
    id: idArr.reverse(),
    data: Xdata.reverse(),
    type: 'bar',
  });
  let option = {
    color: ['#29b6f6'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: function (params) {
        var html = '';
        if (params.length > 0) {
          Xindex = params[0].dataIndex;
          id = params[0].seriesId;
          status = params[0].axisValue;
          for (var int = 0; int < params.length; int++) {
            html += params[int].axisValue + '<br>' + '<span class="badge badge-mark border-blue mr-1"></span>' + format(params[int].data) + '<br>';
          }
        }
        return html;
      },
    },
    legend: {
      data: ['2011年', '2012年'],
    },
    grid: {
      left: '3%',
      top: '0',
      right: '15%',
      bottom: '20',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      name: getLanguage('money') + '：' + getLanguage('yuan'),
      boundaryGap: [0, 0.01],
      axisLabel: {
        interval: 0,
        rotate: 40,
      },
    },
    yAxis: {
      name: getLanguage('contractName2'),
      type: 'category',
      data: YName.reverse(),
      axisLabel: {
        interval: 0,
      },
    },
    series: seriesData,
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

  let pieData = [
    { name: "MCML-McDonald's China Management", value: 2882 },
    { name: '浙江麦当劳餐厅食品有限公司', value: 980 },
    { name: '上海麦当劳食品有限公司', value: 651 },
    { name: '山东麦当劳（餐厅食品）有限公司', value: 374 },
    { name: '天津麦当劳食品有限公司', value: 95 },
  ];
  let nameArr = ["MCML-McDonald's China Management", '浙江麦当劳餐厅食品有限公司', '上海麦当劳食品有限公司', '山东麦当劳（餐厅食品）有限公司', '天津麦当劳食品有限公司'];
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} :<br/>{c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: nameArr,
    },
    series: [
      {
        name: 'Capex项目统计',
        type: 'pie',
        center: ['54%', '50%'],
        // radius : '70%',
        data: pieData.reverse(),
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
          normal: {
            label: {
              // 　　　　　　　　　　position:"inner",　　　　　　　//可选参数：外部 “outer” 和内部 “inner”
              // 　　　　　　　　　　textStyle:{
              // 　　　　　　　　　　　　align:"center",
              // 　　　　　　　　　　　　baseline:"middle",
              // 　　　　　　　　　　},
              // formatter:get,
            },
            lableLine: {
              show: false,
            },
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

function r2c1() {
  let cardName = 'r2c1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let dateArr = ['2019/12', '2020/1', '2020/2', '2020/3', '2020/4', '2020/5', '2020/6', '2020/7', '2020/8', '2020/9', '2020/10', '2020/11', '2020/12'];
  let CashflowData = [83178, 87681, 79717, 114179, 79529, 80997, 127903, 85230, 78831, 94746, 73847, 68426, 100432];
  let option = {
    color: ['#ffa726'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '15%',
      top:'5%',
      containLabel: true,
    },
    xAxis: {
      name: getLanguage('period') + '：' + getLanguage('year'),
      type: 'category',
      data: dateArr,
    },
    dataZoom: [
      {
        type: 'inside',
      },
      {
        type: 'slider',
      },
    ],
    yAxis: {
      name: '资金流：' + getLanguage('yuan'),
      type: 'value',
    },
    series: [
      {
        data: CashflowData,
        type: 'bar',
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r2c2() {
  let cardName = 'r2c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let yDataHead = ['Re-image', 'EOTF', 'Brand Extension', 'Capacity & Energy Saving', 'New Equipment', 'Required maintenance', 'Total Re-investment - Store'];
  let yDataValue1 = [8, 99, 19, 66, 43, 2, 21];
  let yDataValue2 = [92, 1, 81, 34, 57, 98, 79];
  let aMoney = [30.5, 15.1, 5.9, 8.3, 4.9, 8.3, 16.2];

  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow',
      },
      formatter: function (params) {
        var html = '';
        if (params.length > 0) {
          for (var int = 0; int < params.length; int++) {
            html += params[int].axisValue + '<br>' + params[int].marker + params[int].seriesName + '：' + format(params[int].data) + '%<br>';
          }
        }
        return html;
      },
    },
    legend: {
      data: ['ACt%', 'Plan%'],
      x: 'center',
      y: 'bottom',
      orient: 'horizontal',
    },
    // title : {
    //     text: title,
    //     // subtext: '数据来自西安兰特水电测控技术有限公司',
    //     x: 'center',
    //     // align: 'right'
    // },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      top:'5%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: function (val) {
          return val + '%';
        },
      },
    },
    yAxis: {
      type: 'category',
      data: yDataHead,
      // interval:0,
      axisLabel: {
        interval: 0,
      },
    },
    series: [
      {
        name: 'ACt%',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: false,
            position: 'insideRight',
          },
        },
        data: yDataValue1,
        itemStyle: {
          normal: {
            color: '#ffd966',
          },
        },
      },
      {
        name: 'Plan%',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'insideRight',
          },
        },
        data: yDataValue2,
        itemStyle: {
          normal: {
            color: '#ccc',
            label: {
              formatter: function (parmas) {
                return aMoney[parmas.dataIndex];
              },
            },
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
