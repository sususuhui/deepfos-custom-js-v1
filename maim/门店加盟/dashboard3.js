const cfs = new DevCustomFuncTools();
let Cus_echarts = {};

function map() {
  renderMap();
}

const renderMap = async () => {
  const cardName = "map";
  const echartDom = cfs.card.body.getDom(cardName).find(".echart");

  cfs.card.body.getDom(cardName).css({ padding: 0 });

  const data1 = [
    { name: "锦江之星", value: [120.33, 36.07] },
    { name: "郁锦香", value: [120.13, 33.38] },
    { name: "喆啡", value: [118.58, 24.93] },
    { name: "维也纳", value: [120.1, 30.86] },
    { name: "希岸酒店", value: [122.18, 40.65] },
    { name: "希尔顿欢朋", value: [113.38, 22.52] },
  ];

  const data2 = [
    { name: "7天酒店", value: [121.05, 32.08] },
    { name: "IU", value: [112.02, 22.93] },
    { name: "ZMAX系列", value: [116.69, 23.39] },
    { name: "铂涛", value: [122.1, 37.5] },
  ];

  const data3 = [
    { name: "非繁城品", value: [121.48, 31.22] },
    { name: "锦江白玉兰", value: [101.74, 36.56] },
    { name: "锦江都城", value: [113.06, 22.61] },
    { name: "凯里亚德酒店", value: [120.76, 30.77] },
    { name: "康铂", value: [123.38, 41.8] },
    { name: "昆仑", value: [113.3, 40.12] },
    { name: "丽芮", value: [110.479191, 29.117096] },
    { name: "丽笙酒店", value: [108.72, 34.36] },
    { name: "丽亭", value: [117.2, 39.13] },
    { name: "丽怡", value: [121.1, 31.45] },
    { name: "麗枫", value: [118.1, 24.46] },
    { name: "卢浮酒店", value: [122.05, 37.2] },
    { name: "欧暇·地中海", value: [104.56, 29.77] },
    { name: "派", value: [102.52, 24.35] },
  ];

  let option = {
    legend: {
      left: "10%",
      top: "3%",
      data: ["亏损门店", "预警门店", "正常门店"],
    },
    grid: {
      left: "30%",
      containLabel: true,
    },
    geo: {
      map: "china",
      roam: true,
      zoom: 1.23,
      label: {
        emphasis: {
          show: false,
        },
      },
      itemStyle: {
        emphasis: {
          areaColor: "",
        },
      },
    },
    series: [
      {
        name: "亏损门店",
        type: "scatter",
        coordinateSystem: "geo",
        data: data1,
        symbolSize: 8,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: false,
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          normal: {
            color: "#f5222d",
          },
        },
      },
      {
        name: "预警门店",
        type: "scatter",
        coordinateSystem: "geo",
        data: data2,
        symbolSize: 8,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: false,
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          normal: {
            color: "#fadb14",
          },
        },
      },
      {
        name: "正常门店",
        type: "scatter",
        coordinateSystem: "geo",
        data: data3,
        symbolSize: 8,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            show: false,
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          normal: {
            color: "#52c41a",
          },
        },
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, cfs.echarts.theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};
