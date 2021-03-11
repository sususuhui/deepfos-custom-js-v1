/**spread2 = spread对象
 */

$(() => {
  $(`[name='new_journal_model']`).click(function () {
    new_journal_model();
  });

  $(`[name='del_journal_model']`).click(function () {
    del_journal_model();
  });
});

const new_journal_model = () => {
  console.log("new_journal_model");
  handleModal_new();
};

const del_journal_model = () => {
  console.log("del_journal_model");
  handleModal_del();
};

let new_journal_model_html = `
<div class="d-flex flex-column" style="height: 100%">
  <div class="modal-body" style="width: 60%; margin: 0 auto; margin-top: 3rem">
    <div class="form-group row" style="margin-left: 0; margin-right: 0">
      <label class="col-form-label col-lg-4">
        新建凭证类型
        <i class="icon-question3 font-size-base ml-2" data-d="0" data-w="2"></i>
      </label>
      <div class="col-lg-4">
        <div class="input-group">
          <input type="text" data-name="journal_type" class="form-control" placeholder="如：c46" />
        </div>
      </div>
      <div class="col-lg-4">
      <div class="input-group">
        <input type="text" data-name="journal_type_name" class="form-control" placeholder="如：支付差异" />
      </div>
    </div>
    </div>
    <div class="form-group">
      <label class="col-form-label col-lg-12">
        新建凭证类型
        <i class="icon-question3 font-size-base ml-2" data-d="1" data-w="2"></i>
        <i class="icon-plus3 ml-2"></i>
      </label>
      <div class="col-lg-12">
        <div class="input-group">
          <table class="table listTable" id="table_demo">
            <thead>
              <tr>
                <th class="text-center">借贷方</th>
                <th class="text-center">科目大类(account_type_code)</th>
                <th class="text-center">功能</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-footer">
    <i class="icon-question3 font-size-base mr-4" data-d="2" data-w="1"></i>
    <button class="btn bg-primary" data-func="close"><i class="icon-cross2 font-size-base mr-1"></i> 取消</button>
    <button class="btn bg-primary" data-func="save"><i class="icon-checkmark3 font-size-base mr-1"></i> 确认</button>
  </div>
</div>
`;

const handleModal_new = () => {
  layer.open({
    zIndex: 9999,
    type: 1,
    area: ["50%", "60%"],
    title: "新建凭证模型",
    // move: false,
    resize: false,
    // scrollbar: false,
    closeBtn: 1,
    content: new_journal_model_html,
    success: function (layero, index) {
      $(`button[data-func='close']`, layero).click(function (e) {
        layer.close(index);
      });
      $(`button[data-func='save']`, layero).click(function () {
        let Journal_line = [];
        $("#table_demo tbody tr").each(function (i, tr) {
          let rowObj = { d_c: null, account_type_code: null };
          $(tr)
            .find("td")
            .each(function (j, td) {
              if (j == 0) rowObj.d_c = $(td).find("select").val();
              if (j == 1) rowObj.account_type_code = $(td).find("select").val();
              if (j == 2) return;
            });
          Journal_line.push(rowObj);
        });
        let journal_type = $(`input[data-name='journal_type']`, layero).val();
        let journal_type_name = $(`input[data-name='journal_type_name']`, layero).val();

        let Journal_line_check = true;
        if (Journal_line.length > 0) {
          Journal_line.forEach((val, i) => {
            if (
              _.isNull(val.d_c) ||
              _.isEmpty(val.d_c) ||
              _.isUndefined(val.d_c) ||
              _.isNull(val.account_type_code) ||
              _.isEmpty(val.account_type_code) ||
              _.isUndefined(val.account_type_code)
            ) {
              Journal_line_check = false;
            }
          });
        } else {
          Journal_line_check = false;
        }

        if (journal_type.trim().length == 0 || journal_type_name.trim().length == 0 || !Journal_line_check) {
          $.jGrowl("", {
            header: "新建凭证类型/名称/分录行 不能为空",
            theme: "bg-danger alert-danger alert-styled-left alert-styled-custom",
          });
        } else {
          $.jGrowl("", {
            header: "接口还没写",
            theme: "bg-danger alert-danger alert-styled-left alert-styled-custom",
          });
        }
      });

      // 绑定 tip hover事件
      $(`.icon-question3`, layero).mouseover(function (e) {
        handleTips(e);
      });
      $(`.icon-question3`, layero).mouseout(function () {
        layer.closeAll("tips");
      });
      // 初始化表格为空
      $("#table_demo tbody").html("");
      // 绑定表格新增行
      $(`.icon-plus3`, layero).click(function () {
        // 表格新增行 dom
        addTableRow();
        // 表格内选择框初始化
        $("#table_demo select").select2({
          placeholder: "-",
          dropdownAutoWidth: true,
          minimumResultsForSearch: Infinity,
          language: {
            noResults: function (params) {
              return "暂无数据";
            },
          },
        });
        // 表格 account_type_code 列 选择框增加打开请求远程数据渲染下拉 dom
        $("#table_demo select.account_type_code").on("select2:open", async function (e) {
          getSelectData(e.currentTarget, "Account{Base(Book_account,0)}");
        });
        // 表格删除行dom事件绑定
        $(`.icon-trash`, layero).click(function (e) {
          $(e.currentTarget).parents("tr").remove();
        });
      });
      // 表格 DataTable 渲染
      $(`#table_demo`, layero).DataTable({
        destroy: true,
        bFilter: false, //是否启动过滤、搜索功能
        bLengthChange: false, //开启一页显示多少条数据的下拉菜单，允许用户从下拉框(10、25、50和100)，注意需要分页(bPaginate：true)。
        paging: false,
        processing: false, //隐藏加载提示,自行处理
        serverSide: false, //开启后台分页
        bAutoWidth: false, //是否自适应宽度
        bPaginate: false, //是否显示（应用）分页器
        bSort: false, //是否启动各个字段的排序功能
        info: false,
        language: {},
        oLanguage: {
          sEmptyTable: getLanguage("noData"),
        },
        // columnDefs: [{ width: "100px", targets: 1 }],
      });
      // 设置 DataTable 容器宽度
      $(".dataTables_wrapper").css("width", "100%");
    },
  });
};

const addTableRow = (params) => {
  let table_row = `
    <tr>
      <td>
        <select class="form-control selectedValue otherType" default-value="-">
            <option></option>
            <option value="d">借方</option>
            <option value="c">贷方</option>
        </select>
      </td>
      <td>
        <select class="form-control selectedValue otherType account_type_code" default-value="-">
        </select>
      </td>
      <td class="text-center">
        <i class="icon-trash"></i>
      </td>
    </tr>
  `;
  let table_body_html = ``;
  table_body_html += table_row;

  if ($("#table_demo tbody .odd").length > 0) $("#table_demo tbody").html("");

  $("#table_demo tbody").append(table_body_html);
};

// 提示弹窗
const tips = [
  `
  <div>
    <pre
      style="
        display: block;
        font-family: monospace;
        padding: 0;
        margin: 0;
        font-size: 13px;
        line-height: 1.42857143;
        color: #333;
        word-break: break-all;
        word-wrap: break-word;
        background-color: #f5f5f5;
        border: 0;
        border-radius: 4px;
      "
    >
自定义凭证类型必须以"C"开头,长度10个字符以内
    </pre>
  </div>
  `,
  `
  <div>
    <pre
      style="
        display: block;
        font-family: monospace;
        padding: 0;
        margin: 0;
        font-size: 13px;
        line-height: 1.42857143;
        color: #333;
        word-break: break-all;
        word-wrap: break-word;
        background-color: #f5f5f5;
        border: 0;
        border-radius: 4px;
      "
    >
1、至少存在两行凭证分录
2、至少同时存在借方和贷方
    </pre>
  </div>
  `,
  `
  <div>
    <pre
      style="
        display: block;
        font-family: monospace;
        padding: 0;
        margin: 0;
        font-size: 13px;
        line-height: 1.42857143;
        color: #333;
        word-break: break-all;
        word-wrap: break-word;
        background-color: #f5f5f5;
        border: 0;
        border-radius: 4px;
      "
    >
校验:
1、自定义凭证类型必须以C开头,长度10个字符以内,且不重复;
2、至少存在两行凭证分录;
3、至少同时存在借方和贷方

处理
1. journal mapping 增加相关配置;
2. JournalType 维度增加该成员
3. smartlist-journal_type 增加该成员;
4. journal_info_config 增加相关配置;
5. journal_mapping_config 增加相关配置;
    </pre>
  </div>
  `,
  `
  <div>
    <pre
      style="
        display: block;
        font-family: monospace;
        padding: 0;
        margin: 0;
        font-size: 13px;
        line-height: 1.42857143;
        color: #333;
        word-break: break-all;
        word-wrap: break-word;
        background-color: #f5f5f5;
        border: 0;
        border-radius: 4px;
      "
    >
校验:
选择的凭证类型为系统预置类，不得删除

处理:
1. journal mapping 增加相关配置;
2. JournalType 维度增加该成员
3. smartlist-journal_type 增加该成员;
4. journal_info_config 增加相关配置;
5. journal_mapping_config 增加相关配置;
    </pre>
  </div>
  `,
];
const handleTips = (e) => {
  layer.tips(tips[$(e.currentTarget).attr("data-d")], e.currentTarget, {
    tips: [$(e.currentTarget).attr("data-w"), "#f5f5f5"],
    shade: 0,
    area: ["300px", "auto"],
    time: 0,
  });
};

const getSelectData = (dom, dimensionMemberNames) => {
  $.ajax({
    type: "POST",
    url: Api.seepln + "dimension/selectDimensionMemberByNameFunction",
    async: false,
    data: $.extend(
      {
        dimensionMemberNames: dimensionMemberNames,
        duplicate: true,
      },
      userinfoParamsApp
    ),
    success: function (result) {
      let { resultList } = result;

      let html = "<option></option>";
      resultList.forEach((val, i) => {
        html += `<option value=${val.name} >${val.description_1}</option>`;
      });
      // $(e.currentTarget).html(html);

      $(dom).html(html);
    },
  });
};

let del_journal_model_html = `
<div class="d-flex flex-column" style="height: 100%">
  <div class="modal-body" style="width: 60%; margin: 0 auto; margin-top: 3rem">
    <div class="form-group row" style="margin-left: 0; margin-right: 0">
      <label class="col-form-label col-lg-4">
        删除凭证类型
      </label>
      <div class="col-lg-8">
        <div class="input-group">
          <select class="form-control selectedValue otherType account_type_code" default-value="-">
          </select>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-footer">
    <i class="icon-question3 font-size-base mr-4" data-d="3" data-w="2"></i>
    <button class="btn bg-primary" data-func="close"><i class="icon-cross2 font-size-base mr-1"></i> 取消</button>
    <button class="btn bg-primary" data-func="save"><i class="icon-checkmark3 font-size-base mr-1"></i> 确认</button>
  </div>
</div>
`;
const handleModal_del = () => {
  layer.open({
    zIndex: 9999,
    type: 1,
    area: ["50%", "30%"],
    title: "删除凭证模型",
    // move: false,
    resize: false,
    // scrollbar: false,
    closeBtn: 1,
    content: del_journal_model_html,
    success: function (layero, index) {
      $(`button[data-func='close']`, layero).click(function (e) {
        layer.close(index);
      });
      $(`button[data-func='save']`, layero).click(function () {
        let journal_type = $("select.account_type_code", layero).val();

        if (_.isNull(journal_type) || _.isEmpty(journal_type) || _.isUndefined(journal_type)) {
          $.jGrowl("", {
            header: "删除凭证类型 不能为空",
            theme: "bg-danger alert-danger alert-styled-left alert-styled-custom",
          });
        } else {
          $.jGrowl("", {
            header: "接口还没写",
            theme: "bg-danger alert-danger alert-styled-left alert-styled-custom",
          });
        }
      });

      // 绑定 tip hover事件
      $(`.icon-question3`, layero).mouseover(function (e) {
        handleTips(e);
      });
      $(`.icon-question3`, layero).mouseout(function () {
        layer.closeAll("tips");
      });

      // 表格内选择框初始化
      $("select", layero).select2({
        placeholder: "-",
        dropdownAutoWidth: true,
        minimumResultsForSearch: Infinity,
        language: {
          noResults: function (params) {
            return "暂无数据";
          },
        },
      });
      // 表格 account_type_code 列 选择框增加打开请求远程数据渲染下拉 dom
      $("select.account_type_code", layero).on("select2:open", async function (e) {
        getSelectData(e.currentTarget, "JournalType{Base(TotalJournaltype,0)}");
      });
    },
  });
};
