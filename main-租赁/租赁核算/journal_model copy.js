/**spread2 = spread对象
 */
// 引入样式
let style = document.createElement("style");
style.innerHTML = `
`;
document.head.appendChild(style);

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
  handleModal();
};

const del_journal_model = () => {
  console.log("del_journal_model");
};

let new_journal_model_html = `
<div class="d-flex flex-column" style="height: 100%">
  <div class="modal-body" style="width: 60%; margin: 0 auto; margin-top: 3rem">
    <div class="form-group row" style="margin-left: 0; margin-right: 0">
      <label class="col-form-label col-lg-4">
        新建凭证类型
        <i class="icon-question3 font-size-base ml-2" data-d="0"></i>
      </label>
      <div class="col-lg-6">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="" />
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="col-form-label col-lg-4">
        新建凭证类型
        <i class="icon-question3 font-size-base ml-2" data-d="1"></i>
        <i class="icon-plus3 spreadIcon"></i><span class="btnText addText">${getLanguage("AddRow")}</span>
      </label>
      <div class="col-lg-12">
        <div class="input-group">
          <table class="table listTable" id="table_demo">
            <thead>
              <tr>
                <th class="text-center">借贷方</th>
                <th class="text-center">科目大类(account_type_code)</th>
                <th class="text-center">选项</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select class="form-control selectedValue otherType" default-value="-">
                  </select>
                </td>
                <td>
                  <select class="form-control selectedValue otherType" default-value="-">
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-footer">
    <button class="btn btn-link" data-dismiss="modal"><i class="icon-cross2 font-size-base mr-1"></i> 取消</button>
    <button class="btn bg-primary"><i class="icon-checkmark3 font-size-base mr-1"></i> 确认</button>
  </div>
</div>
`;

// 容器弹窗
const handleModal = () => {
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
      $(`.icon-question3`, layero).mouseover(function (e) {
        handleTips(e);
      });
      $(`.icon-question3`, layero).mouseout(function () {
        layer.closeAll("tips");
      });

      $("#table_demo select").select2({
        //下拉框初始化
        placeholder: "-",
        dropdownAutoWidth: true,
        minimumResultsForSearch: Infinity,
        language: {
          noResults: function (params) {
            return "暂无数据";
          },
        },
      });
      $("#table_demo select").on("select2:open", function (e) {
        // getSmartList(
        //   e.currentTarget,
        //   $(e.currentTarget).attr('data-name'),
        //   $(e.currentTarget).attr('default-value')
        // );
        console.log(e);
        let html = `
        <option></option>
        <option value="AZ">Arizona</option>
        <option value="CO">Colorado</option>
        <option value="ID">Idaho</option>
        <option value="WY">Wyoming</option>
        `;
        $(e.currentTarget).html(html);
      });

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
      $(".dataTables_wrapper").css("width", "100%");
    },
  });
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
校验:
1、自定义凭证类型必须以C开头,长度10个字符以内,且不重复;
2、至少存在两行凭证分录;
3、至少同时存在借方和贷方
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
1. journal mapping ;
2. JournalType :
3. smartlist-journal _ type ;
4. journal_info_config 增加相关配置;
5. journal mapping config
    </pre>
  </div>
  `,
];
const handleTips = (e) => {
  layer.tips(tips[$(e.currentTarget).attr("data-d")], e.currentTarget, {
    tips: [2, "#f5f5f5"],
    shade: 0,
    area: ["300px", "auto"],
    time: 0,
  });
};
