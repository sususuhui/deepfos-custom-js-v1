const this_list_name = 'approve_status';

// 引入样式
let style = document.createElement('style');
style.innerHTML = `
.bold {
  font-weight: 700;
}

.searchForm .actionBtn {
  padding: .375rem 1rem;
  display: inline-block;
  margin-left: 0;
  border: 1px solid #ddd;
}

/* 覆盖表格样式 */
.table td {
  border-top: 0px;
}

.table tfoot th {
  border-top: 0;
}

.fontColor {
  color: red;
}

/* 表格样式覆盖 */
.listTable>thead th {
  white-space: nowrap;
  /* overflow: hidden;
    text-overflow: ellipsis; */
}

.listTable>tbody td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}

.table td,
.table th {
  padding: .65rem 0.3rem 0.65rem 1.25rem;
}

.listTable tfoot th {
  font-weight: 600;
}

/* 下拉框禁用样式覆盖 */
.searchForm .form-control:disabled {
  color: #333;
}

.searchForm .multiselect.btn-light.disabled {
  color: #333;
  opacity: 1;
}

/* 过账弹框样式 */
#post_detail .icon-2x {
  font-size: 20px;
}

.fab-menu-inner div[data-fab-label].fab-label-light:after {
  background: #000;
  color: #fff;
}

.listTable .input-group-sm .form-control,
.listTable .btn-group>.btn,
.listTable input {
  padding: 0.25rem 0;
}

.listTable tr td {
  padding-top: 0;
  padding-bottom: 0;
}

.searchForm .select2-selection--single {
  padding: 0.25rem 0;
}

.searchForm .actionBtn {
  padding: .375rem 1rem;
  display: inline-block;
  margin-left: 0;
  border: solid #ddd;
  border-width: 0.0625rem 0.0625rem 0.0625rem 0;
}

.searchForm .actionBtn:first-child {
  border-width: 0.0625rem;
}

.searchForm .actionBtn:focus {
  outline: none !important;
}

.searchForm .dataTable .dataTables_empty {
  background-color: rgba(0, 0, 0, .03);
  border-bottom: 1px solid #ddd;
  padding: .75rem 1rem !important;
}

.table .form-check .uniform-checker {
  top: 0.1rem;
}

.listTable thead th:first-child {
  width: 5px;
}

.listTable thead th:nth-child(2) {
  padding-left: 0;
}

.listTable tbody tr td:nth-child(2) {
  padding-left: 0;
}

.table .uniform-checker input,
.table .uniform-checker span,
.table .uniform-checker {
  width: 1rem;
  height: 1rem;
}

.table .uniform-checker span:after {
  top: -0.125rem;
  left: -0.125rem;
}

.form-check {
  padding-right: 0;
  margin-right: -0.8rem;
}

.select2-selection__rendered {
  color: #333;
}

.searchForm .dt-buttons {
  position: absolute;
  right: 3rem;
  top: -4rem;
  margin: 0;
}

a {
  cursor: pointer;
}

.dataTables_length {
	margin-right: 1.25rem;
}

table tr {
  cursor: pointer;
}

.VoucherList {
  margin:.5625rem 0;
}
`;
document.head.appendChild(style);

// 动态加载 js
const loadScript = (url, callback) => {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  if (script.readyState) {
    //IE
    script.onreadystatechange = function () {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
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
  document.getElementsByTagName('head')[0].appendChild(script);
};

const userinfoParamSmartList = {
  creater: getTokenAnduserId.user_id,
  tenantCode: getUserInfo.tenant_code,
  token: getTokenAnduserId.token,
  app: getSessionAppId,
  language: sign,
};
let totalInoArray = [{ data: 'name' }];
let langugeListData = []; //语言信息
let smartlistvalueData = []; //值列表数据
let smartlistinfovalue = []; //总体信息数据
let tableDetail = []; //自定义列表
let columnsNummber = []; // 列表成员table列

// 卡片按钮
let buttons2 = [
  {
    //添加行删除行按钮配置
    extend: 'addRow2',
    text:
      '<i class="icon-plus3 spreadIcon"></i><span class="btnText addText">' +
      getLanguage('AddRow') +
      '</span>',
  },
  {
    extend: 'deleteRow2',
    text:
      '<i class="icon-cross2 spreadIcon"></i><span class="btnText addText">' +
      getLanguage('delRow') +
      '</span>',
  },
  {
    extend: 'upRow',
    text:
      '<i class="icon-move-up2 spreadIcon"></i><span class="btnText addText">' +
      getLanguage('upRow') +
      '</span>',
  },
  {
    extend: 'downRow',
    text:
      '<i class="icon-move-down2 spreadIcon"></i><span class="btnText addText">' +
      getLanguage('downRow') +
      '</span>',
  },
  {
    extend: 'formSave',
    text:
      '<i class="icon-floppy-disk spreadIcon" style="margin-right:5px"></i><span class="btnText addText">' +
      '保存' +
      '</span>',
  },
];
// 删除行2
$.fn.dataTable.ext.buttons.deleteRow2 = {
  className: 'breadcrumb-elements-item actionBtn',
  action: function (e, dt, node, config) {
    e.preventDefault();
    if ($('.checked11').length > 0) {
      $('.checked11').addClass('checked');
    }
    $('.checked').removeClass('checked11');
    var table = $('#nummber_table');
    var tableBody = table.find('tbody');
    if (
      tableBody.find('tr').length < 1 ||
      tableBody.find('.dataTables_empty').length > 0
    ) {
      alertA(getLanguage('deleteRowFail_0'));
      return;
    }
    if (tableBody.find('.checked').length < 1) {
      alertA(getLanguage('deleteRowFail_1'));
      return;
    }
    if (tableBody.find('tr').length <= table.attr('data-minrow')) {
      alertA(
        getLanguage('minRow') +
          table.attr('data-minrow') +
          getLanguage('deleteRowFail_2_1')
      );
      return;
    }
    if (
      tableBody.find('tr').length - tableBody.find('.checked').length <
      table.attr('data-minrow')
    ) {
      alertA(
        getLanguage('minRow') +
          table.attr('data-minrow') +
          getLanguage('deleteRowFail_2_2')
      );
      return;
    }
    table.find('th').find('input').parent().removeClass('checked');
    // 判断是否全部删除
    var checkedArr = tableBody.find('.checked');
    var trLength = tableBody.find('tr').length;
    var systemNoDel = false;
    for (var m = 0; m < checkedArr.length; m++) {
      systemNoDel = false;
      var system = $(checkedArr[m])
        .parents('td')
        .next('td')
        .find('input[name=subjectValue]')
        .attr('data-system');
      var index = $(checkedArr[m])
        .parents('td')
        .next('td')
        .find('input[name=subjectValue]')
        .attr('data-index');
      //获取system,判断是否是系统成员。0：非系统成员，1：系统成员如果同时勾选了系统成员和非系统成员，删除，则只有非系统成员被删除
      if (system !== '1' && system !== undefined) {
        $('#nummber_table')
          .DataTable()
          .row($(checkedArr[m]).parents('tr'))
          .remove()
          .draw(true);
        for (var i = 0; i < smartlistvalueData.length; i++) {
          if (index == smartlistvalueData[i].sortid) {
            //判断选中的CheckBox和列id是否相同
            smartlistvalueData.splice(i, 1); //删除
          }
        }
        systemNoDel = true;
      }
    }
    //   系统参数不能删除
    if (systemNoDel == false) {
      $.jGrowl('', {
        header: '系统参数不能删除',
        theme: 'alert-styled-left bg-danger',
      });
    }
    $('td .form-check-input-styled').uniform(); //初始化复选框；

    if (tableBody.find('.dataTables_empty').length > 0) {
      tableBody.find('.dataTables_empty').html(getLanguage('noData'));
    }
  },
};
//添加行2
var indexAdd = 0;
$.fn.dataTable.ext.buttons.addRow2 = {
  className: 'breadcrumb-elements-item actionBtn',
  action: function (e, dt, node, config) {
    e.preventDefault();
    $('#nummber_table')
      .find('th')
      .find('input')
      .parent()
      .removeClass('checked');
    $('#nummber_table').DataTable().row.add(nummberTableDom).draw();
    // 添加默认数据
    var rowObj = {};
    $.each(columnsNummber, function (k, v) {
      rowObj[v.data] = '';
    });
    rowObj['status'] = 0; //开关默认关
    rowObj['sortid'] = smartlistvalueData.length; //开关默认关
    // if (smartlistvalueData.length == 0) {
    // 	smartlistvalueData.push(	)
    // } else {
    // 	smartlistvalueData[smartlistvalueData.length] = rowObj
    // }
    smartlistvalueData[smartlistvalueData.length] = rowObj;
    $('td .form-check-input-styled').uniform(); //初始化复选框；
    $('#nummber_table select').select2({
      //下拉框初始化
      placeholder: '-',
      minimumResultsForSearch: Infinity,
      language: {
        noResults: function (params) {
          return '暂无数据';
        },
      },
    });
    $('#nummber_table select').on('select2:open', function (e) {
      getSmartList(
        e.currentTarget,
        $(e.currentTarget).attr('data-name'),
        $(e.currentTarget).attr('default-value')
      );
    });
    initSwitch($('#nummber_table').find('tr:last-child'));
    $('td .form-check-input-styled').uniform(); //初始化复选框；
  },
};
// 上移
$.fn.dataTable.ext.buttons.upRow = {
  className: 'breadcrumb-elements-item actionBtn',
  action: function (e, dt, node, config) {
    e.preventDefault();
    var table = $('#nummber_table');
    var tableBody = table.find('tbody');
    var id = table.attr('id');
    var checkedArr = tableBody.find('.checked');
    if (tableBody.find('.dataTables_empty').length > 0) {
      alertA(getLanguage('upRowFail_0'));
      return;
    }
    if (table.find('.checked').length < 1) {
      alertA(getLanguage('upRowFail_1'));
      return;
    }
    if (tableBody.find('tr').length == 1) {
      alertA(getLanguage('upRowFail_2'));
      return;
    }
    if (tableBody.find('.checked').length > 1) {
      alertA(getLanguage('upRowFail_3'));
      return;
    }
    if (
      tableBody.find('.checked').parents('tr').prev().prop('nodeName') != 'TR'
    ) {
      alertA(getLanguage('upRowFail_4'));
      return;
    }
    //添加data-idex 选中框调用
    var dataArr = [];
    var index = table.DataTable().row($(checkedArr[0]).parents('tr')).index();
    $('#' + id).attr('data-idex', index - 1);
    //获取该table 数据+dom
    for (var t = 1; t < table.find('tr').length; t++) {
      //获取每一行数据+dom singlerow >> 单行默认DOM
      var singlerow = [];
      var idT = t;
      for (var k in nummberTableDom) {
        if (t == index + 1) {
          //选中项
          idT = t - 1;
        } else if (t == index) {
          //选中项的上一项
          idT = t + 1;
        }
        var defaultInput = nummberTableDom[k];
        defaultInput = defaultInput.replace('id="', 'id="' + (idT - 1) + '-');
        singlerow.push(defaultInput);
      }
      //获取该table 中数据
      var tr = $(table.find('tr')[t]);
      for (var i = 0; i < tr.find('td').length; i++) {
        var td = tr.find('td')[i];

        if ($(td).find('select').length == 1) {
          if (
            _.isUndefined(
              $(td).find('.select2-selection__rendered').attr('title')
            )
          ) {
            singlerow[i] = singlerow[i].replace(
              '<option></option>',
              `<option></option>`
            );
          } else {
            singlerow[i] = singlerow[i].replace(
              '<option></option>',
              `<option value=${$(td)
                .find('.select2-selection__rendered')
                .attr('title')}>${$(td)
                .find('.select2-selection__rendered')
                .attr('title')}</option>`
            );
            singlerow[i] = singlerow[i].replace(
              'default-value="-"',
              `default-value=${$(td)
                .find('.select2-selection__rendered')
                .attr('title')}`
            );
          }
        }

        if ($(td).find('input').length == 1) {
          //input 框赋值
          singlerow[i] = singlerow[i].replace(
            'class',
            'value="' + $(td).find('input').val() + '" class'
          );
        }
        // 开关赋值
        if ($(td).find('input[name="status"]').length == 1) {
          if ($(td).find('input[name="status"]').prop('checked') == true) {
            singlerow[i] = singlerow[i].replace('class', 'checked class');
          } else {
            singlerow[i] = singlerow[i].replace('class', 'class');
          }
        }
      }
      dataArr.push(singlerow);
    }
    if (index - 1 >= 0) {
      var data = dataArr;
      table.DataTable().clear();
      data.splice(index - 1, 0, data.splice(index, 1)[0]);
      table.DataTable().rows.add(data).draw();
    } else {
      alertA(getLanguage('upRowFail_5'));
    }
    $($(tableBody).find('.form-check-input-styled')).uniform(); //初始化复选框  仅针对tablebody 中复选框进行初始化
    $(tableBody.find('.form-check-input-styled ')[index - 1]).prop(
      'checked',
      true
    );
    $('#nummber_table select').select2({
      //下拉框初始化
      placeholder: '-',
      minimumResultsForSearch: Infinity,
      language: {
        noResults: function (params) {
          return '暂无数据';
        },
      },
    });
    $('#nummber_table select').on('select2:open', function (e) {
      getSmartList(
        e.currentTarget,
        $(e.currentTarget).attr('data-name'),
        $(e.currentTarget).attr('default-value')
      );
    });
    $('#nummber_table')
      .find('tr td:last-child')
      .each(function (k, v) {
        var elems = Array.prototype.slice.call(
          $(v).find('.form-check-input-switchery')
        );
        var switchery;
        elems.forEach(function (html) {
          switchery = new Switchery(html);
        });
      });
  },
};
// 下移
$.fn.dataTable.ext.buttons.downRow = {
  className: 'breadcrumb-elements-item actionBtn',
  action: function (e, dt, node, config) {
    e.preventDefault();
    var table = $('#nummber_table');
    var tableBody = table.find('tbody');
    var id = table.attr('id');
    var checkedArr = tableBody.find('.checked');
    if (tableBody.find('.dataTables_empty').length > 0) {
      alertA(getLanguage('downRowFail_0'));
      return;
    }
    if (table.find('.checked').length < 1) {
      alertA(getLanguage('downRowFail_1'));
      return;
    }
    if (tableBody.find('tr').length == 1) {
      alertA(getLanguage('upRowFail_2'));
      return;
    }
    if (tableBody.find('.checked').length > 1) {
      alertA(getLanguage('upRowFail_3'));
      return;
    }
    if (
      tableBody.find('.checked').parents('tr').next().prop('nodeName') != 'TR'
    ) {
      alertA(getLanguage('downRowFail_4'));
      return;
    }
    var max = table.find('tr').length - 1;
    var dataArr = [];
    var index = table.DataTable().row($(checkedArr[0]).parents('tr')).index();
    //添加data-idex 选中框调用
    $('#' + id).attr('data-idex', index + 1);
    //获取该table 数据+dom
    for (var t = 1; t < table.find('tr').length; t++) {
      //获取每一行数据+dom singlerow >> 单行默认DOM
      var singlerow = [];
      var idT = t;
      for (var k in nummberTableDom) {
        if (t == index + 1) {
          //选中项
          idT = t + 1;
        } else if (t == index + 2) {
          //选中项的下一项
          idT = t - 1;
        }
        var defaultInput = nummberTableDom[k];
        defaultInput = defaultInput.replace('id="', 'id="' + (idT - 1) + '-');
        singlerow.push(defaultInput);
      }
      //获取该table 中数据
      var tr = $(table.find('tr')[t]);
      //获取该table 中数据
      var tr = $(table.find('tr')[t]);
      for (var i = 0; i < tr.find('td').length; i++) {
        var td = tr.find('td')[i];

        if ($(td).find('select').length == 1) {
          if (
            _.isUndefined(
              $(td).find('.select2-selection__rendered').attr('title')
            )
          ) {
            singlerow[i] = singlerow[i].replace(
              '<option></option>',
              `<option></option>`
            );
          } else {
            singlerow[i] = singlerow[i].replace(
              '<option></option>',
              `<option value=${$(td)
                .find('.select2-selection__rendered')
                .attr('title')}>${$(td)
                .find('.select2-selection__rendered')
                .attr('title')}</option>`
            );
            singlerow[i] = singlerow[i].replace(
              'default-value="-"',
              `default-value=${$(td)
                .find('.select2-selection__rendered')
                .attr('title')}`
            );
          }
        }

        if ($(td).find('input').length == 1) {
          //input 框赋值
          singlerow[i] = singlerow[i].replace(
            'class',
            'value="' + $(td).find('input').val() + '" class'
          );
        }
        // 开关赋值
        if ($(td).find('input[name="status"]').length == 1) {
          if ($(td).find('input[name="status"]').prop('checked') == true) {
            singlerow[i] = singlerow[i].replace('class', 'checked class');
          } else {
            singlerow[i] = singlerow[i].replace('class', 'class');
          }
        }
      }
      dataArr.push(singlerow);
    }
    if (index + 1 < max) {
      var data = dataArr;
      table.DataTable().clear();
      data.splice(index + 1, 0, data.splice(index, 1)[0]);
      table.DataTable().rows.add(data).draw(false);
    } else {
      alertA(getLanguage('downRowFail_5'));
    }
    $($(tableBody).find('.form-check-input-styled')).uniform(); //初始化复选框  仅针对tablebody 中复选框进行初始化
    $(tableBody.find('.form-check-input-styled ')[index + 1]).prop(
      'checked',
      true
    );
    $('#nummber_table select').select2({
      //下拉框初始化
      placeholder: '-',
      minimumResultsForSearch: Infinity,
      language: {
        noResults: function (params) {
          return '暂无数据';
        },
      },
    });
    $('#nummber_table select').on('select2:open', function (e) {
      getSmartList(
        e.currentTarget,
        $(e.currentTarget).attr('data-name'),
        $(e.currentTarget).attr('default-value')
      );
    });
    $('#nummber_table')
      .find('tr td:last-child')
      .each(function (k, v) {
        var elems = Array.prototype.slice.call(
          $(v).find('.form-check-input-switchery')
        );
        var switchery;
        elems.forEach(function (html) {
          switchery = new Switchery(html);
        });
      });
  },
};

// 保存
$.fn.dataTable.ext.buttons.formSave = {
  className: 'breadcrumb-elements-item actionBtn',
  action: function (e, dt, node, config) {
    e.preventDefault();
    saveData();
  },
};

$(() => {
  loadScript('../js/global_assets/js/pages/dataTables.buttons.min.js', () => {
    initDom();
    getLanguageListInfos();
    editQueryData();
  });
});

// 初始 dom
const initDom = () => {
  $('.dashBoardContent').html('');

  const initHtml = `
  <div class="card searchForm nummberList">
    <div class="card-header header-elements-inline bg-white">
      <h6 id="searchTitle3" class="card-title bold">列表成员</h6>
      <div class="header-elements">
        <div class="list-icons">
          <a class="list-icons-item" data-action="collapse"></a>
        </div>
      </div>
    </div>
    <div class="card-body">
      <form action="#">
        <div class="card-body py-0 pl-0 pr-0" id="listMumberDatatable_id">
        </div>
      </form>
    </div>
  </div>
`;

  $('.dashBoardContent').html(initHtml);
};

//获取语言配置信息，渲染总体信息
const getLanguageListInfos = () => {
  columnsNummber = [
    { title: getLanguage('value'), data: 'subjectValue', id: '' },
    { title: getLanguage('whetherToOpen'), data: 'status', id: '' }, //往列表成员列里添加列  data数据等后台添加之后再改
  ];
  $.ajax({
    type: 'POST',
    url: Api.seepln + 'language/selectLanguageInfo',
    data: userinfoParams,
    async: false,
    success: function (result) {
      var data = result.resultList;
      langugeListData = result.resultList;
      $.each(data, function (k, v) {
        if (k === 1) return;
        const description = getLanguage('description_' + v.sign);
        columnsNummber.splice(columnsNummber.length - 1, 0, {
          title: getLanguage('FieldDes') + '（' + description + '）',
          data: 'description_' + v.sign,
          id: '',
        });
        totalInoArray.push({ data: 'description_' + v.sign });
      });
    },
  });
};

// 编辑查询
const editQueryData = () => {
  $.ajax({
    url: Api.seepln + 'smartlistinfo/showThreeParts', //showThreeParts
    data: $.extend(
      {
        name: this_list_name, // TODO
      },
      userinfoParamSmartList
    ),
    type: 'GET',
    async: false,
    success: function (res) {
      if (!ajaxTipMsg(res)) {
        return;
      }
      smartlistvalueData = res.smartlistvalue;
      smartlistinfovalue = res.smartlistinfovalue;

      // 添加自定义字段 ud
      let tableDetail_temp = [];
      const { dimensionudvalue } = res;
      dimensionudvalue.forEach((val, i) => {
        const { active, udname, description_1, description_2, sort } = val;
        columnsNummber.splice(columnsNummber.length - 1, 0, {
          title: description_1,
          data: udname,
          id: sort,
        });
        tableDetail_temp.push({
          active: active === 1,
          description_1,
          description_2,
          udname,
        });
      });
      tableDetail = tableDetail_temp;

      $.each(columnsNummber, function (k, v) {
        var $td = $(
          `<td><input type="text" name="" class="form-control otherType" ></td>`
        );
        $('#nummber_table')
          .find('tr')
          .each(function (i, e) {
            if ($(e).find('td').length < columnsNummber.length + 1) {
              $(e).append($td);
            }
          });
      });

      initTableNummber(res);
    },
    error: function (err) {
      console.log(err);
    },
  });
};
//初始化列表成员table
const initTableNummber = (res) => {
  $('#listMumberDatatable_id').html('');
  $('#listMumberDatatable_id').html(
    `<table class="table table-hover listTable" id="nummber_table"><thead></thead><tbody></tbody></table>`
  );
  nummberTableDom = [];
  var checkBoxHtml =
    '<div class="form-check"><label class="form-check-label"><input type="checkbox"  onchange="checkboxSelectAll(this,event,nummber_table)"  class="form-check-input-styled " ' +
    '><span style="opacity:0;">-</span></label></div>';
  var checkBoxColum =
    '<input autocomplete="off" type="checkbox"  onchange="checkboxSelectOne(this,event)"  class="form-check-input-styled " ' +
    '>';
  nummberTableDom.push(checkBoxColum);
  //渲染表头
  var titleHtml = '<tr>';
  titleHtml += '<th class="otherColumn">' + checkBoxHtml + '</th>';
  columnsNummber.forEach(function (v, i) {
    // if (i === 2) return;
    titleHtml += '<th class="numberColumn">' + v.title + '</th>';
    if (v.data == 'status') {
      var sHtml =
        '<input type="checkbox" class="form-check-input-switchery" name="' +
        v.data +
        '" data-fouc  onchange="numberChange(this);" ' +
        '>';
      nummberTableDom.push(sHtml);
    } else {
      if (v.data === 'subjectValue') {
        var sHtml =
          '<input type="text" name="' +
          v.data +
          '" class="form-control otherType Describe" data-system="0" required onkeyup="checkInput(this);" autocomplete="off" onchange="numberChange(this);" ' +
          '>';
        nummberTableDom.push(sHtml);
      } else {
        if (v.data.includes('ud')) {
          var sHtml = `<select name="${
            v.data
          }" class="form-control selectedValue otherType" required  data-name="${
            this_list_name + '_' + v.data
          }" default-value="-"><option></option></select>`;
          nummberTableDom.push(sHtml);
        } else {
          var sHtml = `<select name="${
            v.data
          }" class="form-control selectedValue otherType" required  data-name="${
            this_list_name + '_name'
          }" default-value="-"><option></option></select>`;
          nummberTableDom.push(sHtml);
        }
      }
    }
  });
  titleHtml += '</tr>';
  $('#nummber_table thead').html(titleHtml);
  $('#nummber_table .form-check-input-styled').uniform(); //初始化复选框；

  var tableOne = $('#nummber_table').DataTable({
    destroy: true,
    bFilter: false, //是否启动过滤、搜索功能
    bLengthChange: true, //开启一页显示多少条数据的下拉菜单，允许用户从下拉框(10、25、50和100)，注意需要分页(bPaginate：true)。
    paging: false,
    stripeClasses: ['odd'],
    processing: false, //隐藏加载提示,自行处理
    serverSide: false, //开启后台分页
    bAutoWidth: false, //是否自适应宽度
    bPaginate: false, //是否显示（应用）分页器
    bSort: false, //是否启动各个字段的排序功能
    info: false,
    buttons: buttons2,
    dom:
      '<"datatable-header"<"contract_title">fB<"Authority_button">l><"datatable-scroll"t><"datatable-footer"ip>',
    language: {
      // "sEmptyTable":"暂无数据"
    },
    oLanguage: {
      sEmptyTable: getLanguage('noData'),
    },
    // fnDrawCallback: function (settings) {
    //   loadingHide('.dimensionContent');
    // },
    createdRow: function (row, data, index) {
      //input id 添加tr序列号
      for (let j = 0; j < $('input', row).length; j++) {
        $($('input', row)[j]).attr('data-index', index);
      }
    },
  });
  // 渲染body
  smartlistvalueData.forEach(function (v, i) {
    let arrData = []; //每行回显数据
    arrData.push(checkBoxColum);
    columnsNummber.forEach(function (value, index) {
      // if (index === 2) return;
      if (smartlistvalueData[i][value.data] == null) {
        smartlistvalueData[i][value.data] = '';
      }
      let dataContent = smartlistvalueData[i][value.data]; //获取表头对应的值
      let sHtml = '';
      if (value.data == 'status') {
        //是否开启复选框
        if (dataContent == 1) {
          sHtml =
            '<input type="checkbox" class="form-check-input-switchery" name="' +
            value.data +
            '" checked data-fouc onchange="numberChange(this);" ' +
            '>';
        } else {
          sHtml =
            '<input type="checkbox" class="form-check-input-switchery" name="' +
            value.data +
            '" data-fouc onchange="numberChange(this);" ' +
            '>';
        }
      } else if (value.data.includes('ud')) {
        sHtml = `<select name="${
          value.data
        }" class="form-control selectedValue otherType" required  data-name="${
          this_list_name + '_' + value.data
        }" default-value="${dataContent}"><option value="${dataContent}">${dataContent}</option></select>`;
      } else {
        if (v.system == '1') {
          sHtml =
            '<input type="text" name="' +
            value.data +
            '" class="form-control otherType" value="' +
            dataContent +
            '" data-index="' +
            i +
            '" data-sort="' +
            v.sortid +
            '" data-system="' +
            v.system +
            '" readonly="readonly" onchange="numberChange(this);" autocomplete="off" ' +
            '>';
        } else {
          if (value.data === 'subjectValue') {
            sHtml =
              '<input type="text" name="' +
              value.data +
              '" class="form-control otherType" value="' +
              dataContent +
              '"  data-index="' +
              i +
              '"  data-sort="' +
              v.sortid +
              '" data-system="' +
              v.system +
              '" onchange="numberChange(this);" autocomplete="off" ' +
              '>';
          } else {
            sHtml = `<select name="${
              value.data
            }" class="form-control selectedValue otherType" required  data-name="${
              this_list_name + '_name'
            }" default-value="${dataContent}"><option value="${dataContent}">${dataContent}</option></select>`;
          }
        }
      }
      arrData.push(sHtml);
    });
    tableOne.row.add(arrData).draw(false);
    arrData = [];
    initSwitch($('#nummber_table').find('tr:last-child'));
  });
  $.each(langugeListData, function (k, v) {
    $('input[name=description_' + v.sign + ']').removeAttr('readonly');
  });
  $('td .form-check-input-styled').uniform(); //初始化复选框；
  $('#nummber_table select').select2({
    //下拉框初始化
    placeholder: '-',
    minimumResultsForSearch: Infinity,
    language: {
      noResults: function (params) {
        return '暂无数据';
      },
    },
  });

  $('#nummber_table select').on('select2:open', function (e) {
    getSmartList(
      e.currentTarget,
      $(e.currentTarget).attr('data-name'),
      $(e.currentTarget).attr('default-value')
    );
  });
};
//初始化switch
const initSwitch = (tr) => {
  var elems = Array.prototype.slice.call(
    $(tr[1]).find('.form-check-input-switchery')
  );
  elems.forEach(function (html) {
    var switchery = new Switchery(html);
  });
};

//获取smartlist
const getSmartList = (dom, value, defaultValue) => {
  $.ajax({
    type: 'POST',
    url: Api.seepln + 'smart/getSmartListData',
    async: false,
    data: $.extend(
      {
        subject_field: value,
        description: sign,
      },
      userinfoParamsApp
    ),
    success: function (result) {
      const { resultObj } = result;
      let currentSelectOption = resultObj.map((val) => {
        return val.description;
      });
      let html = '<option></option>';
      currentSelectOption.forEach((val, i) => {
        if (val === defaultValue) {
          html += `<option value=${val}  selected="selected">${val}</option>`;
        } else {
          html += `<option value=${val} >${val}</option>`;
        }
      });
      $(dom).html(html);
    },
  });
};

const saveData = (params) => {
  let listNummber = [];

  if (smartlistinfovalue.length == 0) {
    smartlistinfovalue[0]['system'] = '0';
    smartlistinfovalue[0]['status'] = '1';
  }

  // 列表成员的值
  $('#nummber_table tbody tr').each(function (i, tr) {
    let rowObj = {};
    $(tr)
      .find('td')
      .each(function (j, td) {
        if (j == 0) {
          return;
        }
        if ($(td).find('select').length == 1) {
          if (
            _.isUndefined(
              $(td).find('.select2-selection__rendered').attr('title')
            )
          ) {
            rowObj[columnsNummber[j - 1]['data']] = '';
          } else {
            rowObj[columnsNummber[j - 1]['data']] = $(td)
              .find('.select2-selection__rendered')
              .attr('title');
          }
          rowObj['system'] = '0';
        }

        if ($(td).find('input').length == 1) {
          rowObj[columnsNummber[j - 1]['data']] = $(td).find('input').val();
          rowObj['system'] = '0';
        }
        // 获取CheckBox状态
        if ($(td).find('input[type=checkbox]').length == 1) {
          var tdCheckbox = $(td).find('input[type=checkbox]')[0].checked;
          if (tdCheckbox == true) {
            rowObj[columnsNummber[j - 1]['data']] = 1;
          } else {
            rowObj[columnsNummber[j - 1]['data']] = 0;
          }
        }
        if ($(td).find('input[name="subjectValue"]').length == 1) {
          rowObj['sortid'] = $(td)
            .find('input[name="subjectValue"]')
            .attr('data-index');
        }
      });
    listNummber.push(rowObj);
  });

  // 数据全量保存
  $.each(smartlistvalueData, function (k, v) {
    $.each(columnsNummber, function (k1, v1) {
      smartlistvalueData[k][v1.data] = listNummber[k][v1.data];
    });
  });

  CommonRequest.post(
    Api.seepln + 'smartlistinfo/updateThreeParts',
    $.param({
      oldname: this_list_name,
      newname: this_list_name,
      smartlistinfovalue: JSON.stringify(smartlistinfovalue),
      dimensionvalue: JSON.stringify(tableDetail),
      smartlistvalue: JSON.stringify(smartlistvalueData),
      ...userinfoParamSmartList,
    })
  ).then((result) => {
    oldName = $('#name').val();
    if (typeof result.result != 'undefined' && result.result == 'success') {
      ForSwal(getLanguage('saveSuccess'), true);
    } else {
      ForSwal(result.tipMsg, false);
    }
  });
};
