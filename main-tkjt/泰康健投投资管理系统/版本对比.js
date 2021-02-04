const dealSheetData = (d) => {
  const data = d.sheetList.filter((val, i) => {
    return val.sn === "版本对比";
  });

  if (_.isEmpty(data)) return;

  let legend = [];
  let legend_index;
  data[0].rowList[0].m.forEach((val, i) => {
    if (val.sdd[0].d === "资产小计") {
      legend = ["资产小计-无版本", "资产小计-版本对比一", "资产小计-版本对比二"];
      legend_index = i;
    }
    if (val.sdd[0].d === "EBITDA") {
      legend = ["EBITDA-无版本", "EBITDA-版本对比一", "EBITDA-版本对比二"];
      legend_index = i;
    }
    if (val.sdd[0].d === "期末现金余额") {
      legend = ["期末现金余额-无版本", "期末现金余额-版本对比一", "期末现金余额-版本对比二"];
      legend_index = i;
    }
  });

  let xAxis = [];
  let data_无版本 = [],
    data_版本对比一 = [],
    data_版本对比二 = [];
  if (!_.isUndefined(legend_index)) {
    // xAxis
    data[0].columnList[0].m.forEach((val, i) => {
      xAxis.push(val.sdd[1].d);
    });
    // data
    data_无版本 = data[0].dataList[legend_index].slice(0, 40).map((val) => {
      return val.d;
    });
    data_版本对比一 = data[0].dataList[legend_index].slice(41, 81).map((val) => {
      return val.d;
    });
    data_版本对比二 = data[0].dataList[legend_index].slice(82, 122).map((val) => {
      return val.d;
    });
  }

  let source = [["product", ...legend]];
  xAxis.forEach((val, i) => {
    source.push([
      val,
      _.isUndefined(data_无版本[i]) ? "-" : data_无版本[i],
      _.isUndefined(data_版本对比一[i]) ? "-" : data_版本对比一[i],
      _.isUndefined(data_版本对比二[i]) ? "-" : data_版本对比二[i],
    ]);
  });

  let totalData = {
    source,
  };
  return totalData;
};

const VersionVS = (data) => {
  let totalData = dealSheetData(data);

  let option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: totalData.source,
    },
    xAxis: { type: "category" },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
  };

  let echartDom = $("#VersionVS").find(".echart");
  const chart = echarts.init(echartDom[0]);
  chart.clear();
  chart.setOption(option);
  $(window).on("resize", function () {
    // debugger;
    chart.resize();
  });
};
