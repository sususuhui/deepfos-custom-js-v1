// 封装的一些自定义方法 https://proinnova.yuque.com/vnf5h6/tmgyfo/fadrs1
const cfs = new DevCustomFuncTools();
// 存初始化的 echarts
let Cus_echarts = {};

$(() => {
  // pov 筛选绑定块刷新（如果使用 Js 内直接调用 python）
  $("#globalPovPart")
    .find(".freshBS")
    .off("click")
    .on("click", function (e) {
      $("[data-name='r2']").find(".freshBS").click();
    });
});

const r1 = (data, params) => {
  const cardName = "r1";
  const echartDom = cfs.card.body.getDom(cardName).find(".echart");

  let option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: JSON.parse(data).res,
    },
    xAxis: { type: "category" },
    yAxis: {},
    series: [{ type: "bar" }, { type: "bar" }],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

const r2 = async () => {
  // 获取 pov
  let pov = showDashBoard.globalCurrentPovObj;

  const cardName = "r2";
  const echartDom = cfs.card.body.getDom(cardName).find(".echart");

  // python web 调用
  let result = await getData("dashboard_example", JSON.stringify(pov), "1");

  let option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: result.res,
    },
    xAxis: { type: "category" },
    yAxis: {},
    series: [{ type: "bar" }, { type: "bar" }],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

/**
 * @Description: cfs 工具集中也有
 * @param {*} pythonName
 * @param {*} parameter
 * @param {*} runType
 * @return {*}
 */
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
