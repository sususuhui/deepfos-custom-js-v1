$(() => {
  r2();
  let btn = `
    <span class="breadcrumb-elements-item cursor-pointer" id="newPage" style="margin-right: 20px;" onclick="toDetail()">
      <i class="icon-database4 icon mr-1"></i>
      <span class="text-ellipsis">新建立项申请</span>
    </span>
  `;
  $(".breadcrumb-line .header-elements").prepend(btn);
});

const toDetail = () => {
  const url = "../formTemplate/formTemplateDetailLayer.html?isNew=true&template_name=pipeline_progress&template_type=";
  const layerFn = BasicHeaders["tenant-code"] === "cpm" ? top.layer : layer;
  layerFn.open({
    type: 2,
    title: false,
    area: ["100%", "100%"],
    move: false,
    resize: false,
    scrollbar: false,
    closeBtn: 0,
    content: url,
    success: function (layero, index) {
      websocketFlag = false;
    },
  });
};

function electronicFormFn() {
  let listDom = $("[data-name='SD_pipeline_main']").find(`.elementIframe`)[0].contentWindow;
  listDom.$("#contractList_table tbody").on("click", "tr td:not('.flexCon , .progress_status, .checkPart, .dataTables_empty')", async function (e) {
    let system_id = $(e.target).attr("title");
    console.log(system_id);

    if (!_.isUndefined(system_id)) {
      let pythonData = await getData({ system_id });
      const source = JSON.parse(pythonData.result);

      // let data = {
      //   source: [
      //     ["立项申请", 0, "data1-1", "data1-2", "data1-3", "data1-4"],
      //     ["选址勘探", 1, "data2-1", "data2-2", "data2-3", "data2-4"],
      //     ["租金谈判", 2, "data3-1", "data3-2", "data3-3", "data3-4"],
      //     ["门店装修", 3, "data4-1", "data4-2", "data4-3", "data4-4"],
      //     ["开业准备", 4, "data5-1", "data5-2", "data5-3", "data5-4"],
      //   ],
      // };

      let data = {
        source: [...source],
      };

      initHeadDom_r2(system_id);
      initBodyDom_r2(data);
    }
  });
}

const r2 = () => {
  let cardName = "r2";
  let echartDom = $("#" + cardName)
    .find(".card-body")
    .find(".echart");
  let cardBodyDom = $("#" + cardName).find(".card-body");
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  initHeadDom_r2();
  initBodyDom_r2();
};
const initHeadDom_r2 = (system_id) => {
  let cardName = "r2";
  let carHeadBtnDom = $("#" + cardName)
    .find(".card-header")
    .find(".dataSheetCon");

  carHeadBtnDom.html("");
  let html = "";

  let input = `
    <div class="pr-2 list-icons">
      <span class="badge badge-light badge-striped badge-striped-left border-left-primary seachText">
        系统编码
      </span>
      <div id="system_id_r2">${_.isUndefined(system_id) ? null : system_id}</div>
    </div>
  `;
  html += input;
  let refreshBtn = `
    <span
      class="freshBS searchButton query"
      onclick="refresh_r2()"
      style="cursor: pointer"
    >
      <i class="icon-loop3 icon mr-2" style="font-size: 13px"></i>
      <span></span>
    </span>
  `;
  html += refreshBtn;

  carHeadBtnDom.html(html);
};

const refresh_r2 = () => {
  initHeadDom_r2();
  initBodyDom_r2();
};

const initBodyDom_r2 = (data) => {
  let cardName = "r2";
  let echartDom = $("#" + cardName)
    .find(".card-body")
    .find(".echart");

  let totalData = {
    source: [],
  };
  const dimensions = ["开店阶段", "进程提示", "计划开始", "计划结束", "实际开始", "实际结束"];
  const stateConfig = [
    {
      title: "尚未开始",
      color: "#A5A5A5",
    },
    {
      title: "请尽快开始",
      color: "#FF0000",
    },
    {
      title: "进行中",
      color: "#00B0F0",
    },
    {
      title: "如期完成",
      color: "#92D050",
    },
    {
      title: "延期完成",
      color: "#FFC000",
    },
  ];

  if (!_.isUndefined(data)) totalData = data;

  echartDom.html("");

  let table_html_start = `<table id="table_r2" class="table table-hover datatable-highlight dataTable no-footer table-striped">`;

  table_html_start += `<thead><tr>`;
  dimensions.forEach((val, i) => {
    table_html_start += `<th style="text-align: center">${val}</th>`;
  });
  table_html_start += `</tr></thead>`;
  table_html_start += `<tbody>`;
  totalData.source.forEach((val, i) => {
    table_html_start += `<tr>`;
    val.forEach((cVal, j) => {
      if (j === 1) {
        table_html_start += `
          <td class="item" style="display: flex;justify-content: center;">
            <div style="width:100px" >
              <span
                style="
                  display: inline-block;
                  width: 15px;
                  height: 15px;
                  border-radius: 50%;
                  margin-right: 10px;
                  background-color: ${stateConfig[val[1]].color};
                "
              ></span>
              <span style="">${stateConfig[cVal].title}</span>
            </div>
          </td>
          `;
      } else {
        table_html_start += `<td style="text-align: center">${cVal}</td>`;
      }
    });
    table_html_start += `</tr>`;
  });
  table_html_start += `</tbody>`;
  table_html_start += `</table>`;

  echartDom.html(table_html_start);

  $("#table_r2").DataTable({
    destroy: true,
    bFilter: false, //是否启动过滤、搜索功能
    bLengthChange: true, //开启一页显示多少条数据的下拉菜单，允许用户从下拉框(10、25、50和100)，注意需要分页(bPaginate：true)。
    paging: false,
    stripeClasses: ["odd"],
    processing: false, //隐藏加载提示,自行处理
    serverSide: false, //开启后台分页
    bAutoWidth: false, //是否自适应宽度
    bPaginate: false, //是否显示（应用）分页器
    bSort: false, //是否启动各个字段的排序功能
    info: false,
    language: {
      // "sEmptyTable":"暂无数据"
    },
    oLanguage: {
      sEmptyTable: getLanguage("noData"),
    },
    columnDefs: [{ width: "100px", targets: 1 }],
  });
};

/**
 *
 * 请求数据
 * @param {*} params
 * @returns
 */
function getData(params) {
  return CommonRequest({
    url: `${Api.python}start/web`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      pyName: "openstore_process_dashboard",
      params: params || {
        system_id: "S200101001",
      },
      ...userinfoParams2,
    }),
  });
}
