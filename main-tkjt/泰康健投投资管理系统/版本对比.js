const dealSheetData = (d) => {
  console.log(d);

  const data = d.sheetList.filter((val, i) => {
    return val.sn === "版本对比";
  });

  if (_.isEmpty(data)) return;

  // 筛选出是否有
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

// const dealSheetData = (d) => {
//   console.log(d);

//   const data = d.sheetList.filter((val, i) => {
//     return val.sn === "版本对比";
//   });

//   debugger;

//   if (_.isEmpty(data)) return;

//   debugger;

//   // 筛选出是否有 资产小计 EBITDA 期末现金余额
//   let legend_资产小计_index, legend_EBITDA_index, legend_期末现金余额_index;
//   data[0].rowList[0].m.forEach((val, i) => {
//     if (val.sdd[0].d === "资产小计") {
//       legend_资产小计_index = i;
//     }
//     if (val.sdd[0].d === "EBITDA") {
//       legend_EBITDA_index = i;
//     }
//     if (val.sdd[0].d === "期末现金余额") {
//       legend_期末现金余额_index = i;
//     }
//   });

//   // 资产小计
//   let xAxis_资产小计_无版本 = [],
//     xAxis_资产小计_版本对比一 = [],
//     xAxis_资产小计_版本对比二 = [];
//   let data_资产小计_无版本 = [],
//     data_资产小计_版本对比一 = [],
//     data_资产小计_版本对比二 = [];
//   if (!_.isUndefined(legend_资产小计_index)) {
//     // xAxis
//     data[0].columnList[0].m.forEach((val, i) => {
//       xAxis_资产小计_无版本.push(val.sdd[1].d);
//     });
//     data[0].columnList[1].m.forEach((val, i) => {
//       xAxis_资产小计_版本对比一.push(val.sdd[1].d);
//     });
//     data[0].columnList[2].m.forEach((val, i) => {
//       xAxis_资产小计_版本对比二.push(val.sdd[1].d);
//     });
//     // data
//     data_资产小计_无版本 = data[0].dataList[legend_资产小计_index].slice(0, 40).map((val) => {
//       return val.d;
//     });
//     data_资产小计_版本对比一 = data[0].dataList[legend_资产小计_index].slice(41, 81).map((val) => {
//       return val.d;
//     });
//     data_资产小计_版本对比二 = data[0].dataList[legend_资产小计_index].slice(82, 122).map((val) => {
//       return val.d;
//     });
//   }

//   // EBITDA
//   let xAxis_EBITDA_无版本 = [],
//     xAxis_EBITDA_版本对比一 = [],
//     xAxis_EBITDA_版本对比二 = [];
//   let data_EBITDA_无版本 = [],
//     data_EBITDA_版本对比一 = [],
//     data_EBITDA_版本对比二 = [];
//   if (!_.isUndefined(legend_EBITDA_index)) {
//     data[0].columnList[0].m.forEach((val, i) => {
//       xAxis_EBITDA_无版本.push(val.sdd[1].d);
//     });
//     data[0].columnList[1].m.forEach((val, i) => {
//       xAxis_EBITDA_版本对比一.push(val.sdd[1].d);
//     });
//     data[0].columnList[2].m.forEach((val, i) => {
//       xAxis_EBITDA_版本对比二.push(val.sdd[1].d);
//     });
//     // data
//     data_EBITDA_无版本 = data[0].dataList[legend_EBITDA_index].slice(0, 40).map((val) => {
//       return val.d;
//     });
//     data_EBITDA_版本对比一 = data[0].dataList[legend_EBITDA_index].slice(41, 81).map((val) => {
//       return val.d;
//     });
//     data_EBITDA_版本对比二 = data[0].dataList[legend_EBITDA_index].slice(82, 122).map((val) => {
//       return val.d;
//     });
//   }

//   // 期末现金余额
//   let xAxis_期末现金余额_无版本 = [],
//     xAxis_期末现金余额_版本对比一 = [],
//     xAxis_期末现金余额_版本对比二 = [];
//   let data_期末现金余额_无版本 = [],
//     data_期末现金余额_版本对比一 = [],
//     data_期末现金余额_版本对比二 = [];
//   if (!_.isUndefined(legend_期末现金余额_index)) {
//     data[0].columnList[0].m.forEach((val, i) => {
//       xAxis_期末现金余额_无版本.push(val.sdd[1].d);
//     });
//     data[0].columnList[1].m.forEach((val, i) => {
//       xAxis_期末现金余额_版本对比一.push(val.sdd[1].d);
//     });
//     data[0].columnList[2].m.forEach((val, i) => {
//       xAxis_期末现金余额_版本对比二.push(val.sdd[1].d);
//     });
//     // data
//     data_期末现金余额_无版本 = data[0].dataList[legend_期末现金余额_index].slice(0, 40).map((val) => {
//       return val.d;
//     });
//     data_期末现金余额_版本对比一 = data[0].dataList[legend_期末现金余额_index].slice(41, 81).map((val) => {
//       return val.d;
//     });
//     data_期末现金余额_版本对比二 = data[0].dataList[legend_期末现金余额_index].slice(82, 122).map((val) => {
//       return val.d;
//     });
//   }

//   let totalData = {
//     data_资产小计_无版本,
//     data_资产小计_版本对比一,
//     data_资产小计_版本对比二,

//     data_EBITDA_无版本,
//     data_EBITDA_版本对比一,
//     data_EBITDA_版本对比二,

//     data_期末现金余额_无版本,
//     data_期末现金余额_版本对比一,
//     data_期末现金余额_版本对比二,
//   };

//   let totalData = {
//     data_资产小计_无版本,
//     data_资产小计_版本对比一,
//     data_资产小计_版本对比二,

//     data_EBITDA_无版本,
//     data_EBITDA_版本对比一,
//     data_EBITDA_版本对比二,

//     data_期末现金余额_无版本,
//     data_期末现金余额_版本对比一,
//     data_期末现金余额_版本对比二,
//   };

//   debugger;

//   return totalData;
// };

const VersionVS = (data) => {
  dealSheetData(data);
};

// 渲染 EChart 的通用方法
const initEchart = (id, option) => {
  id = "chart-" + id + "";
  $("#" + id)
    .parent()
    .addClass("pt-0 pl-0 pr-0 pb-0");
  // const _height = $("#" + id).height() + 40;
  const _height = $("#" + id)
    .parent()
    .height();
  $("#" + id).height(_height);
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on("resize", function () {
    // debugger;
    chart.resize();
  });
};
