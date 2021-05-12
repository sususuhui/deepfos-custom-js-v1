const { areaInfo, getAreaInfoByCode, areaDom, dataSource, eCharts, React, ReactDOM, antd, lodash } = params;

let myChart;

const Charts = () => {
  React.useEffect(() => {
    renderChart();
  }, []);

  return <div id="r3c1" style={{ height: "100%", width: "100%" }}></div>;
};

const renderChart = () => {
  myChart = eCharts.init(document.getElementById("r3c1"));

  const option = {
    title: {
      text: "资产结构分析",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "bottom",
    },
    series: [
      {
        type: "pie",
        radius: "50%",
        data: [
          { name: "货币资金", value: 81686212.86 },
          { name: "应收账款", value: 374164919 },
          { name: "预付账款", value: 106655.19 },
          { name: "存货", value: 863692436 },
          { name: "可供出售金融资产净额 ", value: 536046482.5 },
          { name: "投资性房地产净额 ", value: 179757234 },
          { name: "固定资产", value: 4892496.73 },
          { name: "工程物资", value: 1352000 },
          { name: "长期待摊费用 ", value: 131472.16 },
          { name: "其他非流动资产 ", value: 2415169.98 },
        ],
        label: {
          //饼图图形上的文本标签
          normal: {
            show: true,
            position: "outer", //标签的位置
            textStyle: {
              fontWeight: 300,
              fontSize: 10, //文字的字体大小
            },
            formatter: "{d}%", //显示%
          },
        },
      },
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
