function dealSheetData(data) {
  // 转换数据格式
  var xAxis = [];
  var yAxis = [];
  var series = [];
  var valObj = {};
  var legend = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      let xVal = '';
      v.sdd.forEach(function (s) {
        xVal += s.n;
      });
      xAxis.push(xVal);
    });
  });
  valObj.xAxis = xAxis;
  data.sheetList[0].rowList.forEach(function (item) {
    item.m.forEach(function (v) {
      yAxis.push(v.sdd[0].d);
    });
  });

  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];

    rowVal.forEach(function (cellVal) {
      itemArr.push(typeof cellVal.d != 'undefined' ? floatNum.accMul(cellVal.d.toFixed(2), 1) : '-');
    });
    series.push(itemArr);
  });

  for (var i = 0; i < series.length; i++) {
    valObj[yAxis[i]] = series[i];
    legend.push(yAxis[i]);
  }
  valObj.legend = legend;
  return valObj;
}

function dealSheetDataPie(data) {
  // 转换数据格式
  debugger;
  var yAxis = [];
  var series = [];
  var valObj = {};
  var legend = [];
  var datas = [];
  data.sheetList[0].rowList.forEach(function (item) {
    item.m.forEach(function (v) {
      yAxis.push(v.sdd[0].d);
    });
  });

  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];

    rowVal.forEach(function (cellVal) {
      itemArr.push(typeof cellVal.d != 'undefined' ? floatNum.accMul(cellVal.d.toFixed(2), 1) : '-');
    });
    series.push(itemArr[0]);
  });

  for (var i = 0; i < series.length; i++) {
    datas.push({ value: series[i], name: yAxis[i] });
    legend.push(yAxis[i]);
  }
  valObj.data = datas;
  valObj.legend = legend;
  return valObj;
}

const r1c1 = (data, params) => {
  let cardName = 'r1c1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');
  cfs.echarts.correctHeight(cardName);

  // let data = {
  //   category: '客户数量',
  //   legend: ['本期老客户数量', '本期新增客户数量'],
  //   xAxis: ['2019Q1', '2019Q2', '2019Q3', '2019Q4', '2020Q1', '2020Q2', '2020Q3'],
  //   本期老客户数量: [4, 8, 9, 11, 15, 22, 25],
  //   本期新增客户数量: [4, 1, 2, 4, 7, 3, 25],
  // };
  let datas = dealSheetData(data);
  datas.category = '客户数量';
  let seriesData = [];
  datas.legend.forEach((val, i) => {
    seriesData.push({
      name: val,
      type: 'bar',
      stack: datas.category,
      barWidth: 45,
      data: datas[val],
    });
  });

  let option = {
    title: {
      text: '签约客户数量',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: datas.legend,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: 30,
      top: 50,
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: datas.xAxis,
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: seriesData,
    color: ['#9a3b65', '#ca4e72', '#602A78'],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};
const r1c2 = (data, params) => {
  let cardName = 'r1c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');
  cfs.echarts.correctHeight(cardName);

  // let data = {
  //   category: '客户来源分析',
  //   legend: ['直销', '渠道', '财码'],
  //   data: [
  //     { value: 34, name: '直销' },
  //     { value: 28, name: '渠道' },
  //     { value: 21, name: '财码' },
  //   ],
  // };
  let datas = dealSheetDataPie(data);
  debugger;

  datas.category = '客户来源分析';
  let seriesData = [];
  datas.legend.forEach((val, i) => {
    seriesData.push({
      name: val,
      type: 'bar',
      stack: datas.category,
      barWidth: 45,
      data: datas[val],
    });
  });

  let option = {
    title: {
      text: '客户来源分析',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}%',
    },
    legend: {
      orient: 'horizontal',
      y: 'bottom',
      data: datas.legend,
    },
    series: [
      {
        name: '客户来源分析',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        // avoidLabelOverlap: false,
        // label: {
        //   show: true,
        //   // position: 'center',
        // },
        // labelLine: {
        //   show: true,
        // },
        data: datas.data,
      },
    ],
    color: ['#9a3b65', '#ca4e72', '#602A78'],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

const r2c1 = () => {
  let cardName = 'r2c1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');
  cfs.echarts.correctHeight(cardName);

  let data = {
    category: '签约总额',
    legend: ['合并报表', '租赁核算', '全场景'],
    xAxis: ['2019Q1', '2019Q2', '2019Q3', '2019Q4', '2020Q1', '2020Q2', '2020Q3'],
    合并报表: [4, 8, 9, 11, 15, 22, 25],
    租赁核算: [4, 8, 9, 11, 15, 22, 25],
    全场景: [4, 8, 9, 11, 15, 22, 25],
  };
  let seriesData = [];
  data.legend.forEach((val, i) => {
    seriesData.push({
      name: val,
      type: 'bar',
      stack: data.category,
      barWidth: 45,
      data: data[val],
    });
  });

  let option = {
    title: {
      text: '2019-2020Q3签约合同额',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: data.legend,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: 30,
      top: 50,
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: data.xAxis,
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: seriesData,
    color: ['#9a3b65', '#ca4e72', '#602A78'],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};
const r2c2 = () => {
  let cardName = 'r2c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find('.card-header').css('display', 'none');
  cfs.echarts.correctHeight(cardName);

  let data = {
    category: '签约总合同数',
    legend: ['合并报表', '租赁核算', '全场景'],
    xAxis: ['2019Q1', '2019Q2', '2019Q3', '2019Q4', '2020Q1', '2020Q2', '2020Q3'],
    合并报表: [4, 8, 9, 11, 15, 22, 25],
    租赁核算: [4, 8, 9, 11, 15, 22, 25],
    全场景: [4, 8, 9, 11, 15, 22, 25],
  };
  let seriesData = [];
  data.legend.forEach((val, i) => {
    seriesData.push({
      name: val,
      type: 'bar',
      stack: data.category,
      barWidth: 45,
      data: data[val],
    });
  });

  let option = {
    title: {
      text: '2019-2020Q3签约合同数量',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: data.legend,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: 30,
      top: 50,
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: data.xAxis,
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: seriesData,
    color: ['#9a3b65', '#ca4e72', '#602A78'],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

var Cus_theme = '';
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
