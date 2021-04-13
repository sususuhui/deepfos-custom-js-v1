/*
 * @description:
 * @Author: Saszr
 * @Date: 2021-04-06 13:49:46
 * @LastEditors: Saszr
 */

// 全局 sheet 信息
var sheetInfo = [
  {
    floatingTableName: "Fix_assets_ZBZXB_new",
    sheetID: "EEBANALAE2U1",
    sheetName: "Fix_assets_ZBZXB_new2",
  },
  {
    floatingTableName: "Fix_assets_ZBZXB_new",
    sheetID: "EEBPNNFEDB6Q",
    sheetName: "test111",
  },
];

function currentSheetInfo() {}

function AfterRefresh() {
  debugger
  let activeSheetName = "Fix_assets_ZBZXB_new2";
  let activeSheetName = "test111";

  if (GlobalChangeSave.includes(activeSheetName)) {
    let activeSheetInfo = sheetInfo.filter((val, i) => {
      return val.sheetName === activeSheetName;
    })[0];

    handleDirtyCells(activeSheetInfo);
  }
}

function BeforeSave() {
  debugger
  let activeSheetName = "Fix_assets_ZBZXB_new2";
  let activeSheetName = "test111";

  const sheet = spread.getSheetFromName(activeSheetName);
  // spreadJS 更新值
  const changedAllCell = sheet.getDirtyCells();

  GlobalDirtyCells = {
    ...GlobalDirtyCells,
    [activeSheetName]: changedAllCell,
  };

  GlobalChangeSave = [...GlobalChangeSave, activeSheetName];
}

// 共用缓存数据
var GlobalChangeSave = [];
var GlobalCacheData = [];
var GlobalActiveSheetName = "";
var GlobalDirtyCells = {};
function Init() {
  initSpreadEvent();
  initGlobalEvent();
}

/**
 * 初始化 SpreadJS 事件
 */
function initSpreadEvent() {
  GlobalCacheData = [];
  GlobalActiveSheetName = "";

  // 绑定单元格点击事件，缓存初始状态
  spread.bind(GC.Spread.Sheets.Events.CellClick, function (e, args) {
    const { row, col, sheet, sheetName } = args;
    const cellVal = sheet.getValue(row, col);
    const cacheIndex = GlobalCacheData.findIndex((val, i) => {
      return val.row === row && val.col === col && val.sheetName === sheetName;
    });
    if (cacheIndex === -1) {
      GlobalCacheData.push({
        row,
        col,
        cellVal,
        sheetName,
      });
    }
  });
  // sheet 切换
  spread.bind(GC.Spread.Sheets.Events.SheetTabClick, function (e, args) {
    const { sheetName } = args;
    GlobalActiveSheetName = sheetName;
  });
}

function initGlobalEvent() {
  const activeSheetName = spread.getActiveSheet().name();
  if (_.isEmpty(GlobalActiveSheetName)) {
    GlobalActiveSheetName = activeSheetName;
  }

  $(`[name='check_log']`).off("click");
  $(`[name='check_log']`).click(function () {
    const sheet = spread.getSheetFromName(GlobalActiveSheetName);
    const activeColumnIndex = sheet.getActiveColumnIndex();
    const activeRowIndex = sheet.getActiveRowIndex();

    const colNum = sheet.getColumnCount();
    const colSelectedName = sheet.getArray(0, 0, 1, colNum)[0][activeColumnIndex];
    const rowData = sheet.getArray(activeRowIndex, 0, 1, colNum)[0];

    const activeSheetInfo = sheetInfo.filter((val, i) => {
      return val.sheetName === GlobalActiveSheetName;
    })[0];
    const { floatingTableName, sheetID } = activeSheetInfo;

    const params = {
      floatingTableName,
      sheetID,
      colSelectedName,
      rowData,
    };

    showLogModal(params);
  });
}

/**
 * 处理更新数据
 * @param {*} floatingTableName
 * @param {*} sheetID
 * @param {*} sheetName
 */
async function handleDirtyCells(sheetInfo) {
  debugger;
  const { floatingTableName, sheetID, sheetName } = sheetInfo;

  const sheet = spread.getSheetFromName(sheetName);

  // // spreadJS 更新值
  // const changedAllCell = sheet.getDirtyCells();

  const changedAllCell = GlobalDirtyCells[sheetName];

  // 过滤初始值相同的单元格修改
  let changedCell = [];
  changedAllCell.forEach((val, i) => {
    const cacheIndex = GlobalCacheData.findIndex((cVal, i) => {
      return cVal.row === val.row && cVal.col === val.col && cVal.sheetName === sheetName;
    });

    if (cacheIndex != -1) {
      if (GlobalCacheData[cacheIndex].cellVal != val.newValue) {
        changedCell.push({
          ...GlobalCacheData[cacheIndex],
        });
      }
    }
  });

  // 行数据归类
  const changedRow = changedCell.reduce(function (pre, current, index) {
    pre[current.row] = pre[current.row] || [];
    pre[current.row].push(current);
    return pre;
  }, {});

  // 修改行 数据格式
  let postData = [];
  Object.keys(changedRow).forEach(function (key) {
    let changedRowData = {
      rowData: [],
      changedCellKey: [],
    };

    const colNum = sheet.getColumnCount();
    const rowData = sheet.getArray(parseInt(key), 0, 1, colNum)[0];
    const colAllName = sheet.getArray(0, 0, 1, colNum)[0];

    changedRow[parseInt(key)].forEach((val, i) => {
      const colAllNameIndex = val.col;
      changedRowData.changedCellKey.push(colAllName[colAllNameIndex]);
    });
    changedRowData.rowData = rowData;

    postData.push(changedRowData);
  });

  // 构造最终请求数据
  const colNum = sheet.getColumnCount();
  const colAllName = sheet.getArray(0, 0, 1, colNum)[0];
  let params = {
    floatingTableName,
    sheetID,
    colAllName: colAllName,
    data: postData,
  };
  console.log("params: ", params);

  let result = await getData("dataaudit_savedata", JSON.stringify(params), "1");

  console.log("result: ", result);

  _.pull(GlobalChangeSave, sheetName);

  initSpreadEvent();
  initGlobalEvent();
}

function showLogModal(params) {
  let modal_html = `
  <div class="d-flex flex-column" style="height: 100%">
    <div class="modal-body" style="width: 80%; margin: 0 auto; margin-top: 3rem">
      <div class="log_jobDatable">
      </div>
    </div>
  </div>
  `;

  layer.open({
    zIndex: 9999,
    type: 1,
    area: ["50%", "60%"],
    title: "单元格修改记录",
    // move: false,
    resize: false,
    // scrollbar: false,
    closeBtn: 1,
    content: modal_html,
    success: function (layero, index) {
      console.log(params);
      // 初始化datatable
      $(".log_jobDatable").html("");
      let html =
        '<table class="table text-nowrap" id="log_jobContentTable">' +
        '<thead class="log_headerteader">' +
        "<tr></tr>" +
        "</thead>" +
        '<tbody class="log_tbodyHeader">' +
        "</tbody>" +
        "</table>";
      $(".log_jobDatable").html(html);

      $("#log_jobContentTable").DataTable({
        processing: true,
        destroy: true,
        searching: false,
        bLengthChange: false,
        paging: true,
        dom: "Rlfrtip", //可调整列宽
        bSort: false, //是否启动各个字段的排序功能
        fixedHeader: true,
        iDisplayLength: 10, //每页显示条数

        ajax: {
          url: "http://rap2api.taobao.org/app/mock/267950/datatable",
          type: "GET",
          dataSrc: "result",
          data: function () {
            return {};
          },
        },
        columns: [
          { title: "我是列1", data: "col1" },
          { title: "我是列2", data: "col2" },
          { title: "我是列3", data: "col3" },
          { title: "我是列4", data: "col4" },
        ],
        language: {
          search: '<span id="user">' + getLanguage("search") + ":</span> _INPUT_",
          searchPlaceholder: getLanguage("PleaseEnterInfo"),
          lengthMenu: "<span>Show:</span> _MENU_",
          info:
            getLanguage("showPaging") + " _START_ " + getLanguage("to") + " _END_ " + getLanguage("StudyResults") + "，" + getLanguage("total") + " _TOTAL_ " + getLanguage("item"),
          oPaginate: {
            sFirst: getLanguage("homePage"),
            sPrevious: getLanguage("previous"),
            sNext: getLanguage("next"),
            sLast: getLanguage("tailPage"),
          },
          infoEmpty: getLanguage("showPaging") + "0" + getLanguage("to") + "0 " + getLanguage("StudyResults") + "，" + getLanguage("total") + " _TOTAL_ " + getLanguage("item"),
          sEmptyTable: getLanguage("noData"),
        },
      });
    },
  });
}

function getData(pythonName, parameter, runType) {
  return CommonRequest({
    url: `${Api.pythonWeb}doPythonWeb`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      pythonName,
      parameter,
      runType,
      ...userinfoParams2,
    }),
  });
}
