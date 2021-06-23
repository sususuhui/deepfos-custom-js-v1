$("#contractList_table").on("init.dt", async function () {
  const cfs = new DevCustomFuncTools();

  const screening = getValue("#picker_container_contract");

  let extraComm = await getFormListSql(screening);
  const extraCommFrom = extraComm.indexOf("from");
  const extraComZ = extraComm.slice(extraCommFrom + 4, extraComm.length);

  let comm = `
  SELECT
    sum(
      IFNULL(cf.cf_amount, 0) - IFNULL(deduct.a1, 0) - IFNULL(deduct.a2, 0) - IFNULL(deduct.a3, 0)
    ) kpi1,
    sum(
      IFNULL(cf.cf_amount, 0) - IFNULL(deduct.total_amount, 0)
    ) kpi2
  FROM
    ${extraComZ}
  `;

  let data_a = 0,
    data_b = 0,
    data_c = 0;
  let res = cfs.request.foundation.runComm(comm);
  if (res.err) {
    ForSwal("读取数据失败：" + res.err.Message);
  } else {
    const data = res.res;
    if (!_.isNull(data[0])) {
      data_a = numFormat(data[0].kpi1);
      data_b = numFormat(data[0].kpi2);
      data_c = numFormat(data[0].kpi1 - data[0].kpi2);
    }
  }

  let html = `
  <div style="display: flex; float: left; margin: 0.625rem 0 0 0">
    <div class="mr-3">本期应付：${data_a} 元</div>
    <div class="mr-3">本期已付：${data_b} 元</div>
    <div>本期应付未付：${data_c} 元</div>
  </div>
  `;

  $(".datatable-header").append(html);
});

const getFormListSql = (params) => {
  return CommonRequest({
    url: `${ApiFn.getOrigin()}/DynamicForm/formlist/formListSql`,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    data: $.param({
      work_type: 6,
      query_map: JSON.stringify(params),
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
