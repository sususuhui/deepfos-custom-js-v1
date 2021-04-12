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

function BeforeSave() {
  // let activeSheetName = spread.getActiveSheet().name();
  let activeSheetName = "Fix_assets_ZBZXB_new2";
  let activeSheetName = "test111";

  let activeSheetInfo = sheetInfo.filter((val, i) => {
    return val.sheetName === activeSheetName;
  })[0];

  handleDirtyCells(activeSheetInfo);
}

// 共用缓存数据
var GlobalCacheData = [];
var GlobalActiveSheetName = "";
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
  const { floatingTableName, sheetID, sheetName } = sheetInfo;

  const sheet = spread.getSheetFromName(sheetName);

  // spreadJS 更新值
  const changedAllCell = sheet.getDirtyCells();

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
}

function showLogModal(params) {
  let modal_html = `
  <div class="d-flex flex-column" style="height: 100%">
    <div class="modal-body" style="width: 60%; margin: 0 auto; margin-top: 3rem">
      <div class="log_jobDatable">
      </div>
    </div>
  </div>
  `;

  let testData = [
    ["测试行1列1", "测试行1列2", "测试行1列3", "测试行1列4", "测试行1列5", "测试行1列6"],
    ["测试行2列1", "测试行2列2", "测试行2列3", "测试行2列4", "测试行2列5", "测试行2列6"],
    ["测试行3列1", "测试行3列2", "测试行3列3", "测试行3列4", "测试行3列5", "测试行3列6"],
  ];

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
      //   debugger;
      //   // 初始化datatable
      //   $(".log_jobDatable").html("");
      //   let html =
      //     '<table class="table text-nowrap" id="log_jobContentTable">' +
      //     '<thead class="headerteader">' +
      //     "<tr></tr>" +
      //     "</thead>" +
      //     '<tbody class="tbodyHeader">' +
      //     "</tbody>" +
      //     "</table>";
      //   $(".log_jobDatable").html(html);

      //   $("#log_jobContentTable").DataTable({
      //     processing: true,
      //     serverSide: true,
      //     destroy: true,
      //     searching: false,
      //     bLengthChange: false,
      //     paging: true,
      //     dom: "Rlfrtip", //可调整列宽
      //     bSort: false, //是否启动各个字段的排序功能
      //     fixedHeader: true,
      //     iDisplayLength: 10, //每页显示条数
      //     // ajax: function (datas, callback, settings) {
      //     //   //封装请求参数
      //     //   let param = {};
      //     //   param.pageSize = datas.length; //页面显示记录条数，在页面显示每页显示多少项的时候
      //     //   param.pageNum = datas.start / datas.length + 1; //当前页码
      //     //   $.ajax({
      //     //     type: "GET",
      //     //     url: Api.userlog + "job-content/page/" + id,
      //     //     async: false,
      //     //     data: $.extend(
      //     //       {
      //     //         status: $("#jobStatus").val(),
      //     //         param: $("#jobNameValue").val(),
      //     //       },
      //     //       userinfoParams2,
      //     //       param
      //     //     ),
      //     //     dataType: "json",
      //     //     success: function (result) {
      //     //       debugger;
      //     //       var returnData = {};
      //     //       returnData.draw = result.draw; //这里直接自行返回了draw计数器,应该由后台返回
      //     //       returnData.recordsTotal = result.total; //返回数据全部记录
      //     //       returnData.recordsFiltered = result.total; //后台不实现过滤功能，每次查询均视作全部结果
      //     //       returnData.data = result.list; //返回的数据列表
      //     //       //调用DataTables提供的callback方法，代表数据已封装完成并传回DataTables进行渲染
      //     //       //此时的数据需确保正确无误，异常判断应在执行此回调前自行处理完毕
      //     //       callback(returnData);
      //     //     },
      //     //   });
      //     // },

      //     // data: testData,
      //     columns: [
      //       { title: "我是列1", data: 0 },
      //       { title: "我是列2", data: 1 },
      //       { title: "我是列3", data: 2 },
      //       { title: "我是列4", data: 3 },
      //       { title: "我是列5", data: 4 },
      //     ],
      //     dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
      //   });
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
