/** 凭证配置复制
 * v160 2021-03-20 生蚝原作
 */

function Init() {
  // 引入样式
  let style = document.createElement("style");
  style.innerHTML = `
  .layui-layer-btn{
    color:#fff !important
  }
  `;
  document.head.appendChild(style);

  init_journal_config();
}

function init_journal_config() {
  $(`[name='copy_info_config']`).click(function () {
    copy_info_config();
  });

  $(`[name='copy_detail_config']`).click(function () {
    copy_detail_config();
  });

  const copy_info_config = () => {
    let exp = "JournalType{Base(TotalJournaltype,0)}";
    let sign = "info";
    modalRender(exp, sign);
  };

  const copy_detail_config = () => {
    let exp = "JournalMappingID{Base(TotalJournalMapping,0)}";
    let sign = "detail";

    modalRender(exp, sign);
  };

  const copy_html = `
  <div class="d-flex flex-column" style="height: 100%">
    <div class="modal-body" style="width: 60%; margin: 0 auto; margin-top: 1rem">
      <div class="form-group row" style="margin-left: 0; margin-right: 0;margin-bottom: 3rem">
        <label class="col-form-label col-lg-3">
          复制从
        </label>
        <div class="col-lg-9">
          <div class="input-group">
            <select class="form-control selectedValue otherType account_type_code" default-value="-">
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div class="form-group row" style="margin-left: 0; margin-right: 0; margin-top: 2rem">
        <label class="col-form-label col-lg-3">
          复制至
        </label>
        <div class="col-lg-9">
          <div class="input-group">
          <select class="form-control multiselect" multiple="multiple">
          </select>
          </div>
        </div>
      </div>
    </div>
  
    <div class="modal-footer">
      <button class="btn bg-primary" data-func="close"><i class="icon-cross2 font-size-base mr-1"></i> 取消</button>
      <button class="btn bg-primary" data-func="save"><i class="icon-checkmark3 font-size-base mr-1"></i> 确认</button>
    </div>
  </div>
  `;

  const modalRender = (exp, sign) => {
    layer.open({
      zIndex: 9999,
      type: 1,
      area: ["50%", "60%"],
      title: "复制字段配置",
      // move: false,
      resize: false,
      // scrollbar: false,
      closeBtn: 1,
      content: copy_html,
      success: function (layero, index) {
        $(`button[data-func='close']`, layero).click(function (e) {
          layer.close(index);
        });
        $(`button[data-func='save']`, layero).click(function () {
          let selected_val = $("select.account_type_code", layero).val();
          let selected_mul_val = $("select.multiselect").val();

          if (_.isNull(selected_val) || _.isEmpty(selected_val) || _.isUndefined(selected_val) || _.isEmpty(selected_mul_val)) {
            $.jGrowl("", {
              header: "选择项不能为空",
              theme: "bg-danger alert-danger alert-styled-left alert-styled-custom",
            });
          } else {
            let content = `将覆盖凭证类型 {${_.join(selected_mul_val, ",")}} 的 ${sign} 配置, 是否继续?`;
            let data = {};
            if (sign === "info") {
              data = {
                from_journal_type: selected_val,
                to_journal_type: selected_mul_val,
              };
            }
            if (sign === "detail") {
              data = {
                from_journal_mapping_id: selected_val,
                to_journal_mapping_id: selected_mul_val,
              };
            }
            confirmNotice(content, data, sign);
          }
        });

        // 单选框初始化
        $("select.account_type_code", layero).select2({
          placeholder: "-",
          dropdownAutoWidth: true,
          minimumResultsForSearch: true,
          language: {
            noResults: function (params) {
              return "暂无数据";
            },
          },
        });
        $("select.account_type_code", layero).on("select2:open", async function (e) {
          getSelectData(e.currentTarget, exp);
        });

        // 多选框
        $("select.multiselect").multiselect({
          nonSelectedText: "-",
          enableFiltering: true,
          onDropdownShow: function (e) {
            $.ajax({
              type: "POST",
              url: Api.seepln + "dimension/selectDimensionMemberByNameFunction",
              async: true,
              data: $.extend(
                {
                  dimensionMemberNames: exp,
                  duplicate: true,
                },
                userinfoParamsApp
              ),
              success: function (result) {
                let { resultList } = result;

                let resultList_options = resultList.map((val) => {
                  return {
                    label: `${val.name} - ${val.description_1}`,
                    value: val.name,
                  };
                });

                $("select.multiselect").multiselect("dataprovider", resultList_options);
              },
            });
          },
        });
      },
    });
  };

  const confirmNotice = (content, data, sign) => {
    layer.open({
      content,
      btn: ["确定"],
      yes: async function (index, layero) {
        console.log(data);
        try {
          let res;
          if (sign === "info") {
            res = await api_journal_copy_infofields(data);
          }
          if (sign === "detail") {
            res = await api_journal_copy_detailfieldss(data);
          }
          console.log(res);
          layer.closeAll();
          $("[name=refresh]").trigger("click");
        } catch (e) {
          $.jGrowl("", {
            header: e,
            theme: "bg-danger alert-danger alert-styled-left alert-styled-custom",
          });
        }
      },
      cancel: function () {
        //右上角关闭回调
        //return false 开启该代码可禁止点击该按钮关闭
      },
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
          html += `<option value=${val.name} >${val.name} - ${val.description_1}</option>`;
        });
        $(dom).html(html);
      },
    });
  };

  const api_journal_copy_infofields = (params) => {
    return CommonRequest({
      url: "http://v1.test01.proinnova.com.cn/SeeplnGLedger/drilling-vourcher/journal_copy_infofields",
      // url: Api.seepln + "SeeplnGLedger/drilling-vourcher/journal_copy_infofields",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        ...params,
      }),
    });
  };

  const api_journal_copy_detailfieldss = (params) => {
    return CommonRequest({
      url: "http://v1.test01.proinnova.com.cn/SeeplnGLedger/drilling-vourcher/journal_copy_detailfields",
      // url: Api.seepln + "SeeplnGLedger/drilling-vourcher/journal_copy_detailfieldss",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        ...params,
      }),
    });
  };
}
