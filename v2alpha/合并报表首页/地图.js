const { areaInfo, getAreaInfoByCode, areaDom, dataSource, eCharts, React, ReactDOM, antd, lodash } = params;

const chartArea = document.createElement("div");
chartArea.setAttribute("id", "r1c1");
chartArea.setAttribute("style", "width: 100%; height:100%");
areaDom.append(chartArea);

let myChart;

// 动态加载 js
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

const Init = () => {
  loadScript("https://cdn.jsdelivr.net/npm/echarts@5.1.1/dist/echarts.min.js", () => {
    loadScript("https://cdn.jsdelivr.net/npm/echarts-countries-js@1.0.4/echarts-countries-js/china.js", () => {
      myChart = echarts.init(document.getElementById("r1c1"));
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
          left: "left",
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
    });
  });
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
    Init();
  },
  resize() {
    myChart.resize();
  },
};
