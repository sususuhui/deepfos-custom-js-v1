const { areaInfo, getAreaInfoByCode, areaDom, dataSource, eCharts, React, ReactDOM, antd, lodash } = params;

const { Table } = antd;
const { Column } = Table;

let myChart;

const Charts = () => {
  const [loadScriptStatus, setLoadScriptStatus] = React.useState(false);

  React.useEffect(() => {
    loadScript("https://cdn.jsdelivr.net/npm/echarts@5.1.1/dist/echarts.min.js", () => {
      loadScript("https://cdn.jsdelivr.net/npm/echarts-countries-js@1.0.4/echarts-countries-js/china.js", () => {
        setLoadScriptStatus(true);
      });
    });
  }, []);

  React.useEffect(() => {
    if (loadScriptStatus) {
      renderMap();
    }
  }, [loadScriptStatus]);

  return (
    <div style={{ height: "100%", width: "100%", display: "flex" }}>
      <div id="r1c1" style={{ height: "100%", width: "35%" }}>
        <RenderTable />
      </div>
      <div id="r1c2" style={{ height: "100%", width: "65%", marginRight: "50px" }}></div>
    </div>
  );
};

const RenderTable = () => {
  const data = [
    { area: "北京", storeNum: 24, income: " 3,041,968.96 " },
    { area: "天津", storeNum: 17, income: " 2,883,997.04 " },
    { area: "河北", storeNum: 37, income: " 2,860,280.56 " },
    { area: "山西", storeNum: 9, income: " 2,492,103.63 " },
    { area: "内蒙古", storeNum: 27, income: " 3,002,626.32 " },
    { area: "辽宁", storeNum: 58, income: " 2,407,556.59 " },
    { area: "吉林", storeNum: 17, income: " 2,108,848.87 " },
    { area: "黑龙江", storeNum: 30, income: " 2,613,246.94 " },
    { area: "上海", storeNum: 37, income: " 2,170,118.89 " },
    { area: "江苏", storeNum: 62, income: " 2,360,377.60 " },
    { area: "浙江", storeNum: 19, income: " 2,542,504.52 " },
    { area: "安徽", storeNum: 45, income: " 2,194,697.48 " },
    { area: "福建", storeNum: 31, income: " 2,547,719.35 " },
    { area: "江西", storeNum: 19, income: " 2,280,666.63 " },
    { area: "山东", storeNum: 54, income: " 2,537,256.99 " },
    { area: "河南", storeNum: 21, income: " 2,414,845.73 " },
    { area: "湖北", storeNum: 54, income: " 2,078,026.84 " },
    { area: "湖南", storeNum: 34, income: " 2,746,698.40 " },
    { area: "广东", storeNum: 88, income: " 3,062,533.93 " },
    { area: "广西", storeNum: 8, income: " 2,513,428.11 " },
    { area: "海南", storeNum: 3, income: " 2,429,982.51 " },
    { area: "重庆", storeNum: 21, income: " 2,561,684.70 " },
    { area: "四川", storeNum: 53, income: " 2,642,352.73 " },
    { area: "贵州", storeNum: 32, income: " 3,046,754.85 " },
    { area: "云南", storeNum: 6, income: " 2,181,916.46 " },
    { area: "西藏", storeNum: 1, income: " 2,405,818.11 " },
    { area: "陕西", storeNum: 21, income: " 2,262,035.87 " },
    { area: "甘肃", storeNum: 8, income: " 2,872,439.82 " },
    { area: "青海", storeNum: 2, income: " 3,095,153.18 " },
    { area: "宁夏", storeNum: 3, income: " 2,394,309.84 " },
    { area: "新疆", storeNum: 9, income: " 3,248,048.55 " },
  ];
  return (
    <Table dataSource={data}>
      <Column title="地区" dataIndex="area" key="area" />
      <Column title="门店数量" dataIndex="storeNum" key="storeNum" />
      <Column title="收入" dataIndex="income" key="income" />
    </Table>
  );
};

const renderMap = () => {
  myChart = echarts.init(document.getElementById("r1c2"));
  let geoCoordMap = {};
  /*获取地图数据*/
  const mapFeatures = echarts.getMap("china").geoJson.features;
  mapFeatures.forEach(function (v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;
  });

  const option = {
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        if (params.componentIndex === 2) {
          let toolTiphtml = "";
          mapData.forEach((val) => {
            if (val.name === params.name) {
              toolTiphtml += val.name + "：" + numFormat(val.attr3);
            }
          });
          return toolTiphtml;
        }
      },
    },

    visualMap: {
      show: true,
      min: 0,
      max: 100,
      left: "right",
      top: "bottom",
      text: ["高", "低"], // 文本，默认为数值文本
      calculable: true,
      seriesIndex: [1],
      inRange: {
        color: ["#00467F", "#A5CC82"], // 蓝绿
      },
    },
    geo: {
      show: true,
      map: "china",
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: "#031525",
          borderColor: "#3B5077",
        },
        emphasis: {
          areaColor: "#2B91B7",
        },
      },
    },
    series: [
      {
        type: "scatter",
        coordinateSystem: "geo",
        data: convertData(geoCoordMap, mapData),
        symbolSize: 8,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: true,
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          normal: {
            color: "#05C3F9",
          },
        },
      },
      {
        type: "map",
        map: "china",
        geoIndex: 0,
        aspectScale: 0.75, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            show: false,
            textStyle: {
              color: "#fff",
            },
          },
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: "#031525",
            borderColor: "#3B5077",
          },
          emphasis: {
            areaColor: "#2B91B7",
          },
        },
        animation: false,
        data: mapData,
      },
      {
        type: "scatter",
        coordinateSystem: "geo",
        symbol: "pin", //气泡
        symbolSize: 32,
        label: {
          normal: {
            show: true,
            formatter: "{@[2]}",
            textStyle: {
              color: "#fff",
              fontSize: 9,
            },
          },
        },
        itemStyle: {
          normal: {
            color: "#F62157", //标志颜色
          },
        },
        zlevel: 6,
        data: convertData(geoCoordMap, mapData),
      },
    ],
  };

  myChart.setOption(option);
};

let mapData = [
  { name: "北京", value: 24, attr3: 3041968.96 },
  { name: "天津", value: 17, attr3: 2883997.04 },
  { name: "河北", value: 37, attr3: 2860280.56 },
  { name: "山西", value: 9, attr3: 2492103.63 },
  { name: "内蒙古", value: 27, attr3: 3002626.32 },
  { name: "辽宁", value: 58, attr3: 2407556.59 },
  { name: "吉林", value: 17, attr3: 2108848.87 },
  { name: "黑龙江", value: 30, attr3: 2613246.94 },
  { name: "上海", value: 37, attr3: 2170118.89 },
  { name: "江苏", value: 62, attr3: 2360377.6 },
  { name: "浙江", value: 19, attr3: 2542504.52 },
  { name: "安徽", value: 45, attr3: 2194697.48 },
  { name: "福建", value: 31, attr3: 2547719.35 },
  { name: "江西", value: 19, attr3: 2280666.63 },
  { name: "山东", value: 54, attr3: 2537256.99 },
  { name: "河南", value: 21, attr3: 2414845.73 },
  { name: "湖北", value: 54, attr3: 2078026.84 },
  { name: "湖南", value: 34, attr3: 2746698.4 },
  { name: "广东", value: 88, attr3: 3062533.93 },
  { name: "广西", value: 8, attr3: 2513428.11 },
  { name: "海南", value: 3, attr3: 2429982.51 },
  { name: "重庆", value: 21, attr3: 2561684.7 },
  { name: "四川", value: 53, attr3: 2642352.73 },
  { name: "贵州", value: 32, attr3: 3046754.85 },
  { name: "云南", value: 6, attr3: 2181916.46 },
  { name: "西藏", value: 1, attr3: 2405818.11 },
  { name: "陕西", value: 21, attr3: 2262035.87 },
  { name: "甘肃", value: 8, attr3: 2872439.82 },
  { name: "青海", value: 2, attr3: 3095153.18 },
  { name: "宁夏", value: 3, attr3: 2394309.84 },
  { name: "新疆", value: 9, attr3: 3248048.55 },
];

const convertData = function (geoCoordMap, data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};

const loadScript = (url, callback) => {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
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
