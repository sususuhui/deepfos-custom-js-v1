$("#contractList_table").on("init.dt", async function () {
  const cfs = new DevCustomFuncTools();

  const screening = getValue("#picker_container_contract");

  const formListConfig = await getformListConfig();

  let extraComm = ``;

  if (formListConfig.resultCode === 0) {
    formListConfig.resultObj.form_query.forEach((val) => {
      const { where_name, value_symbol, alias_name } = val;
      if (!_.isEmpty(screening[alias_name])) {
        if (value_symbol === "like") {
          extraComm += ` and ${where_name} like '%${screening[alias_name]}%'`;
        } else if (value_symbol === "in") {
          const inValArr = _.split(screening[alias_name], ",");

          let inVal = "";
          inValArr.forEach((cVal) => {
            inVal += `'${cVal}',`;
          });
          let inValZ = inVal.slice(0, inVal.length - 1);

          extraComm += ` and ${where_name} in (${inValZ})`;
        } else {
          extraComm += ` and ${where_name} ${value_symbol} ${screening[alias_name]}`;
        }
      }
    });
  }

  let comm = `
  SELECT
    sum(
      IFNULL(cf.cf_amount, 0) - IFNULL(deduct.a1, 0) - IFNULL(deduct.a2, 0) - IFNULL(deduct.a3, 0)
    ) kpi1,
    sum(
      IFNULL(cf.cf_amount, 0) - IFNULL(deduct.total_amount, 0)
    ) kpi2
  FROM
    app1_contract_info contract,
    app1_contract_object_info object,
    app1_di2_table_dimension di2,
    app1_contract_lessee_cashflow cf
  LEFT JOIN (
    SELECT
      cf_id,
      CASE
    WHEN doc_type = 1 THEN
      SUM(cf_dedu_amount)
    END AS a1,
    CASE
  WHEN doc_type = 2 THEN
    SUM(cf_dedu_amount)
  END AS a2,
  CASE
  WHEN doc_type = 3 THEN
    SUM(cf_dedu_amount)
  END AS a3,
  sum(cf_dedu_amount) AS total_amount,
  sum(cf_dedu_amount_cal) AS total_amount_cal
  FROM
    app1_deduct_detail ded,
    app1_deduct_info dei
  WHERE
    ded.sys_pa_id = dei.sys_pa_id
  AND deduct_status = 3
  GROUP BY
    cf_id
  ) deduct ON cf.id = deduct.cf_id
  WHERE
    contract.sys_contract_id = object.sys_contract_id
  AND object.sys_contract_id = cf.sys_contract_id
  AND object.sys_object_id = cf.sys_object_id
  AND object.sys_sub_id = cf.sys_sub_id
  AND object.is_open_max = 1
  AND cf.cf_status IN (2, 3, 4, 7, 9)
  AND contract.company_code = di2. NAME
  ${extraComm}
  `;

  let data_a = null,
    data_b = null,
    data_c = null;
  let res = cfs.request.foundation.runComm(comm);
  if (res.err) {
    ForSwal("读取数据失败：" + res.err.Message);
  } else {
    const data = res.res;
    console.log("data: ", data);
    if (!_.isNull(data[0])) {
      data_a = numFormat(data[0].kpi1);
      data_b = numFormat(data[0].kpi2);
      data_c = numFormat(data[0].kpi1 - data[0].kpi2);
    }
  }

  let html = `
  <div style="display: flex; float: left; margin: 0.625rem 0 0 0">
    <div class="mr-3">本期应付：${data_a}</div>
    <div class="mr-3">本期已付：${data_b}</div>
    <div>本期应付未付：${data_c}</div>
  </div>
  `;

  $(".datatable-header").append(html);
});

const getformListConfig = (params) => {
  return CommonRequest({
    url: `${Api.DynamicForm}formListConfig/getformListConfig`,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    data: $.param({
      work_type: 6,
      ...userinfoParams3,
    }),
  });
};

/**
 * 千分符
 * @param {*} num
 * @returns
 */
const numFormat = (num) => {
  let RNum = Number(num);
  let c =
    RNum.toString().indexOf(".") !== -1
      ? RNum.toLocaleString()
      : RNum.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  return c;
};
