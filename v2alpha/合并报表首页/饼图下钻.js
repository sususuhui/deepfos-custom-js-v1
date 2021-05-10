const { areaInfo, getAreaInfoByCode, areaDom, dataSource, eCharts, React, ReactDOM, antd, lodash, jquery } = params;
const { Button } = antd;

let myChart_r2c1, myChart_r2c2;
let globalState = {};

const Charts = () => {
  let data = {
    r2c1: [
      { name: "东北区", value: 1012676.415 },
      { name: "华北区", value: 2929203.39 },
      { name: "华中区", value: 5917537.42 },
      { name: "华东区", value: 8895443.06 },
      { name: "西南二区", value: 7870502.98 },
      { name: "华南区", value: 3806492.63 },
    ],
    r2c2: [
      { name: "直营", value: 7226063.12 },
      { name: "加盟", value: 6703109.53 },
      { name: "联营", value: 7522761.39 },
      { name: "电商", value: 3881531.57 },
      { name: "其他", value: 5098390.285 },
    ],
  };

  const [chartData, setChartData] = React.useState(data);

  React.useEffect(() => {
    r2c1(chartData.r2c1);
    r2c2(chartData.r2c2);
  }, [chartData]);

  const linkTo = () => {
    const { name } = globalState;

    if (name === "壹方城店") {
      let paramObj = getUrlParams();

      window.open(`/data-sheet?id=GRDECBHKD8MA97&sign=${paramObj.sign}`);
    }
  };

  const nextTo = () => {
    const { name } = globalState;

    if (name === "华北区") {
      let data = {
        r2c1: [
          { name: "壹方城店", value: 619728.11 },
          { name: "东海缤纷天地店", value: 223578.15 },
          { name: "KKONE购物中心店", value: 502765.01 },
          { name: "其他", value: 1583132.12 },
        ],
        r2c2: [
          { name: "直营", value: 733662.49 },
          { name: "加盟", value: 884308.93 },
          { name: "联营", value: 532609.87 },
          { name: "电商", value: 659494.8 },
          { name: "其他", value: 119127.3 },
        ],
      };

      setChartData(data);
    }
  };

  const nextToTop = () => {
    let data = {
      r2c1: [
        { name: "东北区", value: 1012676.415 },
        { name: "华北区", value: 2929203.39 },
        { name: "华中区", value: 5917537.42 },
        { name: "华东区", value: 8895443.06 },
        { name: "西南二区", value: 7870502.98 },
        { name: "华南区", value: 3806492.63 },
      ],
      r2c2: [
        { name: "直营", value: 7226063.12 },
        { name: "加盟", value: 6703109.53 },
        { name: "联营", value: 7522761.39 },
        { name: "电商", value: 3881531.57 },
        { name: "其他", value: 5098390.285 },
      ],
    };

    setChartData(data);
  };

  return (
    <div style={{ height: "100%", width: "100%", display: "flex" }}>
      <div id="r2c1" style={{ height: "100%", width: "50%" }}></div>
      <div id="r2c2" style={{ height: "100%", width: "50%" }}></div>
      <div id="r2_float_box" style={{ display: "none", backgroundColor: "#fff", zIndex: "99", position: "absolute" }}>
        <div style={{ textAlign: "center" }}>
          <Button style={{ width: "100%" }} type="text" onClick={() => linkTo()}>
            多维穿透
          </Button>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button style={{ width: "100%" }} type="text" onClick={() => nextTo()}>
            下钻
          </Button>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button style={{ width: "100%" }} type="text" onClick={() => nextToTop()}>
            上钻
          </Button>
        </div>
      </div>
    </div>
  );
};

const r2c1 = (data) => {
  myChart_r2c1 = eCharts.init(document.getElementById("r2c1"));

  const option = {
    title: {
      text: "区域毛利占比",
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
        data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  myChart_r2c1.setOption(option);

  myChart_r2c1.on("click", function (params) {
    const { offsetX, offsetY } = params.event;
    jquery("#r2_float_box").css({ top: `${offsetY}px`, left: `${offsetX - 80}px` });
    jquery("#r2_float_box").show();

    globalState = params;
  });

  myChart_r2c1.on("mouseout", function (params) {
    jquery("#r2_float_box").hide();

    globalState = {};
  });
};

const r2c2 = (data) => {
  myChart_r2c2 = eCharts.init(document.getElementById("r2c2"));

  const option = {
    title: {
      text: "渠道毛利占比",
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
        data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  myChart_r2c2.setOption(option);
};

const getUrlParams = () => {
  let arrayTemp = window.location.href.split("?");
  let obj = new Object();
  //如果不带参数，则不执行下面的代码
  if (arrayTemp.length > 1) {
    let params = arrayTemp[1].split("&");
    for (let i = 0; i < params.length; i++) {
      let parm = params[i].split("=");
      //将key和value定义给obj
      obj[parm[0]] = parm[1];
    }
  }
  return obj;
};

return {
  run() {
    ReactDOM.render(<Charts></Charts>, areaDom);
  },
  resize() {
    myChart_r2c1.resize();
    myChart_r2c2.resize();
  },
};
