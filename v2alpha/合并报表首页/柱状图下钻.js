const { areaInfo, getAreaInfoByCode, areaDom, dataSource, eCharts, React, ReactDOM, antd, lodash, jquery } = params;
const { Button } = antd;

let myChart_r3;
let globalState = {};

const Charts = () => {
  let data = {
    type: "bar",
    data: [
      ["品牌", " 实际收入 ", "预算收入"],
      ["FA", 12790886.12, 19000000],
      ["DB", 15741005.96, 13000000],
      ["SK", 11835074.84, 10000000],
      ["CA", 7612985.26, 4000000],
      ["OTHER", 5858406.78, 5000000],
    ],
  };

  const [chartData, setChartData] = React.useState(data);

  React.useEffect(() => {
    r3(chartData);
  }, [chartData]);

  const nextTo = () => {
    const { name } = globalState;

    if (name === "FA") {
      let data = {
        type: "sunburst",
        data: [
          {
            name: "新品",
            children: [
              {
                name: "当年份货品",
                value: 6232425,
              },
              {
                name: "去年秋冬货品（1-3月）",
                value: 2192959,
              },
            ],
          },
          {
            name: "旧品",
            children: [
              {
                name: "过1年份货品",
                value: 1931948.5,
              },
              {
                name: "过2年份货品",
                value: 768015.41,
              },
              {
                name: "过3年及以前年份货品",
                value: 1075829.63,
              },
            ],
          },
          {
            name: "配饰",
            children: [
              {
                name: "当年份配饰",
                value: 112562.52,
              },
              {
                name: "过1年份配饰",
                value: 187265.03,
              },
              {
                name: "过2年份配饰",
                value: 129765,
              },
              {
                name: "过3年及以前年份配饰",
                value: 160114.91,
              },
            ],
          },
        ],
      };

      setChartData(data);
    }
  };

  const nextToTop = () => {
    let data = {
      type: "bar",
      data: [
        ["品牌", " 实际收入 ", "预算收入"],
        ["FA", 12790886.12, 19000000],
        ["DB", 15741005.96, 13000000],
        ["SK", 11835074.84, 10000000],
        ["CA", 7612985.26, 4000000],
        ["OTHER", 5858406.78, 5000000],
      ],
    };

    setChartData(data);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div id="r3" style={{ height: "100%", width: "100%" }}></div>
      <div id="r3_float_box" style={{ display: "none", backgroundColor: "#fff", zIndex: "99", position: "absolute" }}>
        {/* <div style={{ textAlign: "center" }}>
          <Button style={{ width: "100%" }} type="text" onClick={() => linkTo()}>
            多维穿透
          </Button>
        </div> */}
        <div style={{ textAlign: "center" }}>
          <Button style={{ width: "100%" }} type="text" onClick={() => nextTo()}>
            穿透
          </Button>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button style={{ width: "100%" }} type="text" onClick={() => nextToTop()}>
            返回
          </Button>
        </div>
      </div>
    </div>
  );
};

const r3 = ({ data, type }) => {
  myChart_r3 = eCharts.init(document.getElementById("r3"));

  if (type === "bar") {
    const option = {
      title: {
        text: "品牌收入预实对比",
        left: "center",
      },
      legend: {
        top: "bottom",
      },
      tooltip: {},
      dataset: {
        source: data,
      },
      xAxis: { type: "category" },
      yAxis: {},
      series: [{ type: "bar" }, { type: "bar" }],
    };
    myChart_r3.dispose();
    myChart_r3 = eCharts.init(document.getElementById("r3"));
    myChart_r3.setOption(option);
  } else {
    const option = {
      title: {
        text: "产品收入预实对比",
        left: "center",
      },
      tooltip: {},
      series: {
        type: "sunburst",
        data: data,
        radius: [60, "80%"],
        itemStyle: {
          borderRadius: 8,
          borderWidth: 2,
        },
        label: {
          show: false,
        },
      },
    };
    myChart_r3.dispose();
    myChart_r3 = eCharts.init(document.getElementById("r3"));
    myChart_r3.setOption(option);
  }

  myChart_r3.on("click", function (params) {
    const { offsetX, offsetY } = params.event;
    jquery("#r3_float_box").css({ top: `${offsetY}px`, left: `${offsetX - 80}px` });
    jquery("#r3_float_box").show();

    globalState = params;
  });

  myChart_r3.on("mouseout", function (params) {
    jquery("#r3_float_box").hide();

    globalState = {};
  });
};

return {
  run() {
    ReactDOM.render(<Charts></Charts>, areaDom);
  },
  resize() {
    myChart_r3.resize();
  },
};
