const { areaInfo, getAreaInfoByCode, areaDom, dataSource, eCharts, React, ReactDOM, antd, lodash } = params;

let myChart;

const Charts = () => {
  React.useEffect(() => {
    renderChart();
  }, []);

  return <div id="r3c2" style={{ height: "100%", width: "100%" }}></div>;
};

const renderChart = () => {
  myChart = eCharts.init(document.getElementById("r3c2"));

  const option = {
    title: {
      text: "分品牌收入波动分析",
      left: "center",
    },
    legend: {
      top: "bottom",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    tooltip: {},
    dataset: {
      source: [
        ["product", "FA", "DB", "SK", "CA"],
        ["第一季度", 22960917.62, 10455935.07, 13078850.33, 17985047.06],
        ["第二季度", 28655791.77, 12170176.75, 7523462.52, 18097792.21],
        ["第三季度", 25226849.79, 8277175.9, 16774592.41, 18079916.48],
        ["第四季度", 23046450.61, 9907974, 13502142.67, 15061889.83],
      ],
    },
    yAxis: { type: "category" },
    xAxis: {
      type: "value",
    },
    series: [
      { type: "bar", stack: "total" },
      { type: "bar", stack: "total" },
      { type: "bar", stack: "total" },
      { type: "bar", stack: "total" },
    ],
  };

  myChart.setOption(option);
};

/**
 * 千分符
 * @param {*} num
 * @returns
 */
const numFormat = (num) => {
  let RNum = Number(num);
  let c = RNum.toString().indexOf(".") !== -1 ? RNum.toLocaleString() : RNum.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  return c;
};

return {
  run() {
    ReactDOM.render(<Charts></Charts>, areaDom);
  },
  resize() {
    myChart.resize();
  },
};
