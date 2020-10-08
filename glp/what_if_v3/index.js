// 引入echarts
let echarts_Script = document.createElement("script");
echarts_Script.setAttribute("type", "text/javascript");
echarts_Script.setAttribute("src", "../js/plugins/echarts.min.js");
document.head.appendChild(echarts_Script);

let clpCpmCommon_Script = document.createElement("script");
clpCpmCommon_Script.setAttribute("type", "text/javascript");
clpCpmCommon_Script.setAttribute("src", "../js/demo/clpCpmCommon.js");
document.head.appendChild(clpCpmCommon_Script);

// dashboard样式 去除卡片头部
let style = document.createElement("style");
// style.innerHTML =
//   ".dashBoardContent .card-header{display:none} table, th, td {border: none !important;}";
style.innerHTML = `
.dashBoardContent .card-header {
  display: none;
}

#NOI-table{
    border: none !important;
}

#NOI-table th,
#NOI-table td {
  border: none !important;
  padding: 0.3rem;
}

#level-table{
  border: none !important;
}

#level-table th,
#level-table td {
border: none !important;
padding: 0.3rem;
}


#total-table-part_wrapper table th,
#total-table-part_wrapper table td {
  padding: 0.3rem 0.5rem;
}

.litterStyle {
  font-size: 12px;
}

.font-color-write {
  color:#fff;
}


.r1c3_echart{
  margin-right: 3rem;
  margin-left: 3rem;
}

.split-line{
  border-right: 1px solid #ccc !important;
}

`;

document.head.appendChild(style);

//ready
$(document).ready(function () {});

function r1c1(data, params) {
  console.log("r1c1");
  // 初始化
  let componentId = params.componentId;
  let id = "chart-" + componentId + "";
  let id_mini = "chart-" + componentId + "-mini";
  let r1c1_data = JSON.parse(data);
  // let r1c1_data = localData.r1_data;

  // 卡片背景色，padding调整
  $("#" + id).css("background-color", "#82bc00");
  $("#" + id)
    .parent()
    .addClass("pt-0 pl-0 pr-0 pb-0");
  // const _height = $("#" + id).height() + 40;
  // $("#" + id).height(_height);
  $("#" + id).css("height", "100%");

  // 增加容器dom
  // let d3Wrapper = `<div class="container-fluid" style="position: absolute;bottom: 0; "><div id="members-online"></div></div>`;
  let d3Wrapper = `
    <div class="font-color-write" style="flex:1 1 auto;padding:1.25rem">
      <div class="d-flex">
        <div id="total" style="padding-right: 10px">
          <div>
            <span class="font-size-sm opacity-75 mr-2"></span>
          </div>
        </div>
        <div id="total_MRG01" style="padding-left: 10px;border-left: 1px solid #ccc;">
          <div style="text-align:center;">
            <span class="font-size-sm opacity-75 mr-2">全国平均</span>
          </div>
        </div>
        <span class=" ml-auto" style='font-size: 1.3125rem;'>Avg. Occupancy%</span>
      </div>
    </div>
    <div id="${id_mini}" class="container-fluid" style="position: absolute;bottom: 0; "></div>
  `;
  $("#" + id).html(d3Wrapper);

  let re_r1c1_data = r1c1_data.r1c1_data.map(function (val, i) {
    if (typeof val == "number") {
      return Number(val.toFixed(2));
    } else {
      return val;
    }
  });

  let yearSuffix = {
    [getCurrentYear() - 1]: "Actual&nbsp;",
    [getCurrentYear()]: "Fcst&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    [getCurrentYear() + 1]: "Budget",
  };

  r1c1_data.occ_total.forEach(function (val) {
    let html = `
    <div>
      <span class="font-size-sm opacity-75 mr-2">${val[0]} ${yearSuffix[parseInt(val[0])]}</span>
      <span class="oldIncome1" style="font-size: 1.125rem;">${toPercent(val[1], 0)}</span>
    </div>
    `;
    $("#" + id)
      .find("#total")
      .append(html);
  });

  r1c1_data.occ_total_MRG01.forEach(function (val) {
    let html = `
    <div>
      <span class="font-size-sm opacity-75 mr-2">${val[0]} ${yearSuffix[parseInt(val[0])]}</span>
      <span class="oldIncome1" style="font-size: 1.125rem;">${toPercent(val[1], 0)}</span>
    </div>
    `;
    $("#" + id)
      .find("#total_MRG01")
      .append(html);
  });

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        let html = params[0].name + "<br>";
        for (let i = 0; i < params.length; i++) {
          html += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>';
          html += params[i].value * 100 + "%" + "<br>";
        }
        return html;
      },
    },
    grid: {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
    },
    xAxis: {
      show: false,
      splitLine: { show: false },
      type: "category",
      data: r1c1_data.xAxis,
    },
    yAxis: {
      show: false,
      splitLine: { show: false },
      type: "value",
      max: function (value) {
        return value.max + 0.5;
      },
    },
    series: [
      {
        data: re_r1c1_data,
        type: "bar",
        itemStyle: {
          normal: {
            color: "rgba(255,255,255,0.5)",
          },
        },
        label: {
          show: true,
          position: "top",
          color: "#F7FFFF",
          formatter: function (params) {
            return (params.value * 100).toFixed(0) + "%";
          },
        },
      },
    ],
  };
  initEchart_mini(componentId, option, 50);
}

function r1c2(data, params) {
  console.log("r1c2");
  // 初始化
  let componentId = params.componentId;
  let id = "chart-" + componentId + "";
  let id_mini = "chart-" + componentId + "-mini";
  let r1c2_data = JSON.parse(data);
  // let r1c2_data = localData.r1_data;

  // 卡片背景色，padding调整
  $("#" + id).css("background-color", "#00953a");
  $("#" + id)
    .parent()
    .addClass("pt-0 pl-0 pr-0 pb-0");
  // const _height = $("#" + id).height() + 40;
  // $("#" + id).height(_height);
  $("#" + id).css("height", "100%");

  // 增加容器dom
  let d3Wrapper = `
    <div class="font-color-write" style="flex:1 1 auto;padding:1.25rem">
    <div class="d-flex">
    <div id="total" style="padding-right: 10px">
      <div>
        <span class="font-size-sm opacity-75 mr-2"></span>
      </div>
    </div>
    <div id="total_MRG01" style="padding-left: 10px;border-left: 1px solid #ccc;">
      <div style="text-align:center;">
        <span class="font-size-sm opacity-75 mr-2" style="text-align:center;">全国平均</span>
      </div>
    </div>
    <span class=" ml-auto" style='font-size: 1.3125rem;'>Avg. Effective Rent</span>
  </div>
    </div>
    <div id="${id_mini}" style="width:100%;position: absolute;bottom: 0;"></div>
  `;

  $("#" + id).html(d3Wrapper);

  let re_r1c2_data = r1c2_data.r1c2_data.map(function (val, i) {
    if (typeof val == "number") {
      return Number(val.toFixed(2));
    } else {
      return val;
    }
  });

  let yearSuffix = {
    [getCurrentYear() - 1]: "Actual&nbsp;",
    [getCurrentYear()]: "Fcst&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    [getCurrentYear() + 1]: "Budget",
  };

  r1c2_data.eff_total.forEach(function (val) {
    let html = `
    <div>
      <span class="font-size-sm opacity-75 mr-2">${val[0]} ${yearSuffix[parseInt(val[0])]}</span>
      <span class="oldIncome1" style="font-size: 1.125rem;">${val[1].toFixed(2)}</span>
    </div>
    `;
    $("#" + id)
      .find("#total")
      .append(html);
  });

  r1c2_data.eff_total_MRG01.forEach(function (val) {
    let html = `
    <div>
      <span class="font-size-sm opacity-75 mr-2">${val[0]} ${yearSuffix[parseInt(val[0])]}</span>
      <span class="oldIncome1" style="font-size: 1.125rem;">${val[1].toFixed(2)}</span>
    </div>
    `;
    $("#" + id)
      .find("#total_MRG01")
      .append(html);
  });
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        let html = params[0].name + "<br>";
        for (let i = 0; i < params.length; i++) {
          html += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>';
          html += params[i].value + "<br>";
        }
        return html;
      },
    },
    grid: {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
    },
    xAxis: {
      show: false,
      splitLine: { show: false },
      type: "category",
      data: r1c2_data.xAxis,
    },
    yAxis: {
      show: false,
      splitLine: { show: false },
      type: "value",
      axisLabel: {
        formatter: "{value}",
      },
      max: function (value) {
        return value.max + 0.1;
      },
    },
    series: [
      {
        type: "line",
        itemStyle: {
          color: "rgba(255,255,255,0.5)",
        },
        data: re_r1c2_data,
        label: {
          show: true,
          position: ["-100%", "300%"],
          color: "#F7FFFF",
          formatter: function (params) {
            return params.value.toFixed(2);
          },
        },
      },
    ],
  };
  initEchart_mini(componentId, option, 50);
}

function r1c3(data, params) {
  console.log("r1c3");
  // 初始化
  let componentId = params.componentId;
  let id = "chart-" + componentId + "";
  let id_mini = "chart-" + componentId + "-mini";
  let r1c3_data = JSON.parse(data);
  // let r1c3_data = localData.r1_data;

  // 卡片背景色，padding调整
  $("#" + id).css("background-color", "#ffc000");
  $("#" + id)
    .parent()
    .addClass("pt-0 pl-0 pr-0 pb-0");
  // const _height = $("#" + id).height() + 40;
  // $("#" + id).height(_height);
  $("#" + id).css("height", "100%");

  // 增加容器dom
  let d3Wrapper = `
    <div class="font-color-write" style="flex:1 1 auto;padding:1.25rem">
    <div class="d-flex">
    <div id="total" style="padding-right: 10px">
      <div>
        <span class="font-size-sm opacity-75 mr-2"></span>
      </div>
    </div>
    <div id="total_MRG01" style="padding-left: 10px;border-left: 1px solid #ccc;">
      <div style="text-align:center;">
        <span class="font-size-sm opacity-75 mr-2" style="text-align:center;">全国平均</span>
      </div>
    </div>
    <span class=" ml-auto" style='font-size: 1.3125rem;'>NOI Margin</span>
  </div>
    </div>
    <div id="${id_mini}" style="width:100%;position: absolute;bottom: 0;"></div>
  `;
  $("#" + id).html(d3Wrapper);

  let re_r1c3_data = r1c3_data.r1c3_data.map(function (val, i) {
    if (typeof val == "number") {
      return Number(val.toFixed(3)) * 100;
    } else {
      return val;
    }
  });

  let yearSuffix = {
    [getCurrentYear() - 1]: "Actual&nbsp;",
    [getCurrentYear()]: "Fcst&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    [getCurrentYear() + 1]: "Budget",
  };

  r1c3_data.noi_total.forEach(function (val) {
    let html = `
    <div>
      <span class="font-size-sm opacity-75 mr-2">${val[0]} ${yearSuffix[parseInt(val[0])]}</span>
      <span class="oldIncome1" style="font-size: 1.125rem;">${toPercent(val[1], 1)}</span>
    </div>
    `;
    $("#" + id)
      .find("#total")
      .append(html);
  });

  r1c3_data.noi_total_MRG01.forEach(function (val) {
    let html = `
    <div>
      <span class="font-size-sm opacity-75 mr-2">${val[0]} ${yearSuffix[parseInt(val[0])]}</span>
      <span class="oldIncome1" style="font-size: 1.125rem;">${toPercent(val[1], 1)}</span>
    </div>
    `;
    $("#" + id)
      .find("#total_MRG01")
      .append(html);
  });

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        let html = params[0].name + "<br>";
        for (let i = 0; i < params.length; i++) {
          html += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>';
          html += params[i].value + "%" + "<br>";
        }
        return html;
      },
    },
    grid: {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
    },
    xAxis: {
      show: false,
      splitLine: { show: false },
      type: "category",
      data: r1c3_data.xAxis,
    },
    yAxis: {
      show: false,
      splitLine: { show: false },
      type: "value",
      max: function (value) {
        return value.max + 10;
      },
    },
    series: [
      {
        type: "line",
        smooth: true,
        symbol: "none",
        sampling: "average",
        itemStyle: {
          color: "rgba(255,255,255,0.5)",
        },
        areaStyle: {
          color: "rgba(255,255,255,0.5)",
        },
        data: re_r1c3_data,
      },
    ],
  };

  initEchart_mini(componentId, option, 50);
}

function r2c1(data, params) {
  console.log("r2c1");
  // 初始化
  let componentId = params.componentId;
  let id = "chart-" + componentId + "";

  let r2c1_data = JSON.parse(data).map(function (val, x) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        if (y == 1 && x > 3 && x < 10) {
          let str = Number(ch_val * 100).toFixed(2);
          str = "-" + str + "%";
          return str;
        } else if (y == 1 && (x < 4 || x == 10)) {
          let str = Number(ch_val * 100).toFixed(2);
          str += "%";
          return str;
        } else {
          return numFormat(ch_val.toFixed(0));
        }
      } else {
        return ch_val;
      }
    });
  });

  let table = `
    <span>Revenue excl leveling</span>
    <div class="table-responsive">
      <table class="table table-xs table-bordered text-nowrap table-striped" style="width: 100%;" id='level-table'>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th class="text-right">Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  `;

  $("#" + id).html(table);

  renderFcstTable(r2c1_data, "#level-table");
}

function renderFcstTable(FcstData, tableName) {
  let tbodyHtml = "";
  FcstData.forEach((trV) => {
    tbodyHtml += `<tr>`;
    trV.forEach((tdV, tdI) => {
      if (tdI == 4) {
        tbodyHtml += `<td class="text-right">${tdV}</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>`;
      } else if (tdI == 1 || tdI == 2 || tdI == 3) {
        tbodyHtml += `<td class="text-right">${tdV}</td>`;
      } else {
        tbodyHtml += `<td>${tdV}</td>`;
      }
    });
    tbodyHtml += `</tr>`;
  });
  $(tableName).find("tbody").html(tbodyHtml);
}

function r2c2(data, params) {
  console.log("r2c2");
  let componentId = params.componentId;

  let r2c2_data = JSON.parse(data).map(function (val, x) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        return (ch_val / 1000000).toFixed(0);
      } else {
        return ch_val;
      }
    });
  });

  updateStepChart(r2c2_data, componentId);
}

function r2c3(data, params) {
  // 初始化
  let componentId = params.componentId;
  let id = "chart-" + componentId + "";

  let r2c3_data_L = JSON.parse(data).pie_L.map(function (val, x) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        return (ch_val / 1000).toFixed(0);
      } else {
        return ch_val;
      }
    });
  });

  let r2c3_data_R = JSON.parse(data).pie_R.map(function (val, x) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        return (ch_val / 1000).toFixed(0);
      } else {
        return ch_val;
      }
    });
  });

  let xData_L = r2c3_data_L.map(function (val, x) {
    return val[0];
  });

  let pieData_L = r2c3_data_L.map(function (val, x) {
    if (val[0] == "Other") {
      return {
        value: val[1],
        name: val[0],
        label: { show: false, position: "inner" },
      };
    } else {
      return {
        value: val[1],
        name: val[0],
      };
    }
  });

  let pieData_R = r2c3_data_R.map(function (val, x) {
    if (val[0] == "Other") {
      return {
        value: val[1],
        name: val[0],
        label: { show: false, position: "inner" },
      };
    } else {
      return {
        value: val[1],
        name: val[0],
      };
    }
  });

  let option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} k ({d}%)",
    },
    title: [
      {
        subtext: "Revenue excl leveling 2021YTD",
        subtextStyle: {
          color: "#000000",
        },
        // text: "Revenue excl leveling 2021YTD",
        left: "22%",
        top: "5%",
        textAlign: "center",
      },
      {
        subtext: "NLA as of 2021.12.31",
        subtextStyle: {
          color: "#000000",
        },
        // text: "NLA as of 2021.12.31",
        left: "72%",
        top: "5%",
        textAlign: "center",
      },
    ],
    legend: {
      // orient: "vertical",
      y: "bottom",
      data: xData_L,
      // data: ["SameStore", `Yr${getCurrentYear(true)} 完工`, `Yr${getCurrentYear(true) + 1} 完工`, "Other"],
      // selected: {
      //   Other: false,
      //   //不想显示的都设置成false
      // },
    },
    series: [
      {
        name: "Revenue excl leveling",
        type: "pie",
        radius: "50%",
        center: ["30%", "50%"],
        data: pieData_L,
        startAngle: 320,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        // minAngle: 10,
        label: {
          //去除饼图的指示折线label
          normal: {
            show: true,
            // position: "inside",
            formatter: "{d}%",
            // formatter: function (params) {
            //   if (params.name == "Other") {
            //     return null;
            //   } else {
            //     str = params.percent + "%";
            //     return str;
            //   }
            // },
          },
        },
      },
      {
        name: "NLA",
        type: "pie",
        radius: "50%",
        center: ["75%", "50%"],
        data: pieData_R,
        startAngle: 320,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        // minAngle: 10,
        label: {
          //去除饼图的指示折线label
          normal: {
            show: true,
            // position: "inside",
            formatter: "{d}%",
          },
        },
      },
    ],
    color: ["#00953a", "#82bc00", "#ffc000", "#A5A5A5"],
  };

  initEchart_padding(componentId, option);
}

function r3c1(data, params) {
  // 初始化
  let componentId = params.componentId;
  let id = "chart-" + componentId + "";

  let r3c1_data = JSON.parse(data).map(function (val, x) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        if (y == 4) {
          // let str = Number(ch_val * 100).toFixed(1);
          // if (str.indexOf("-") != -1) {
          //   let reStr = str.replace("-", "");
          let reStr = Number(ch_val * 100).toFixed(1);
          reStr += "%";
          return reStr;
          // } else {
          //   str = "-" + str + "%";
          //   return str;
          // }
        } else {
          return numFormat(ch_val.toFixed(0));
        }
        // if (y == 1 && x > 3 && x < 10) {
        //   let str = Number(ch_val * 100).toFixed(0);
        //   if (str.indexOf("-") != -1) {
        //     let reStr = str.replace("-", "");
        //     reStr += "%";
        //     return reStr;
        //   } else {
        //     str = "-" + str + "%";
        //     return str;
        //   }
        // } else if (y == 4 && (x < 4 || x == 10)) {
        //   let str = Number(ch_val * 100).toFixed(1);
        //   str += "%";
        //   return str;
        // } else {
        //   return numFormat(ch_val.toFixed(0));
        // }
      } else {
        return ch_val;
      }
    });
  });

  let table = `
    <table class="table table-xs table-bordered text-nowrap table-striped" style="width:100%!important" id='NOI-table'>
      <thead>
        <tr>
          <th></th>
          <th class="text-right">2020</th>
          <th class="text-right">2021</th>
          <th class="text-right">Var</th>
          <th class="text-right">Var%</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>`;

  $("#" + id).html(table);

  renderFcstTable(r3c1_data, "#NOI-table");
}

function dataDealBar(data) {
  return data.map(function (val, x) {
    if (typeof val == "number") {
      // return (val / 1000000).toFixed(0);
      return val.toFixed(2);
    } else {
      return val;
    }
  });
}
function dataDealLine(data) {
  return data.map(function (val, x) {
    if (typeof val == "number") {
      return (val * 100).toFixed(0);
    } else {
      return val;
    }
  });
}
function initEchart_r3c2(id, option) {
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on("resize", function () {
    chart.resize();
  });
}

function r3c2(data, params) {
  console.log("r3c2");
  // 初始化
  let componentId = params.componentId;
  let id = "chart-" + componentId + "";

  let r3c2_data_L_bar = dataDealBar(JSON.parse(data).pic_L.bar);
  let r3c2_data_L_line = dataDealLine(JSON.parse(data).pic_L.line);
  let r3c2_data_C_bar = dataDealBar(JSON.parse(data).pic_C.bar);
  let r3c2_data_C_line = dataDealLine(JSON.parse(data).pic_C.line);
  let r3c2_data_R_bar = dataDealBar(JSON.parse(data).pic_R.bar);
  let r3c2_data_R_line = dataDealLine(JSON.parse(data).pic_R.line);

  // 增加容器dom
  let Wrapper = `
    <div style="height:100%;width100%;display:flex">
      <div id="${id}-L"  style="height:100%;flex:1"></div>
      <div id="${id}-C"  style="height:100%;flex:1"></div>
      <div id="${id}-R"  style="height:100%;flex:1"></div>
    </div>
  `;
  $("#" + id).html(Wrapper);

  // pic_L
  let option_L = {
    title: {
      text: `Same store-Completion Before Yr${getCurrentYear(true)}`,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var html = "";
        if (params.length > 0) {
          html += params[0].axisValue + "<br>";
          html += params[0].marker + params[0].seriesName + "：" + format(params[0].data) + "<br>";
          html += params[1].marker + params[1].seriesName + "：" + format(params[1].data) + "%" + "<br>";
        }
        return html;
      },
    },
    legend: {
      data: ["Avg. Effective Rent", "Avg. Occ%"],
      orient: "vertical",
      left: "center",
      bottom: "bottom",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "40px",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [`Yr${getCurrentYear(true)}`, `Yr${getCurrentYear(true) + 1}`],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "RMB/sqm",
        splitLine: { show: false },
      },
      {
        type: "value",
        name: "Avg. Occ%",
        max: 100,
        min: 0,
        axisLabel: {
          show: true,
          interval: "auto",
          formatter: "{value}%",
        },
      },
    ],
    series: [
      {
        name: "Avg. Effective Rent",
        type: "bar",
        stack: "bar",
        barMaxWidth: 30,
        color: "#00953a",
        data: r3c2_data_L_bar,
        label: {
          show: true,
          position: "top",
          color: "#000000",
          // formatter: function (params) {
          //   return params.value;
          // },
        },
      },

      {
        name: "Avg. Occ%",
        type: "bar",
        barMaxWidth: 30,
        yAxisIndex: 1,
        color: "#ffc000",
        data: r3c2_data_L_line,
        label: {
          show: true,
          position: "top",
          color: "#000000",
          formatter: function (params) {
            return params.value + "%";
          },
        },
      },
    ],
  };
  // pic_C
  let option_C = {
    title: {
      text: `Yr${getCurrentYear(true)} New Completion`,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var html = "";
        if (params.length > 0) {
          html += params[0].axisValue + "<br>";
          html += params[0].marker + params[0].seriesName + "：" + format(params[0].data) + "<br>";
          html += params[1].marker + params[1].seriesName + "：" + format(params[1].data) + "%" + "<br>";
        }
        return html;
      },
    },
    legend: {
      data: ["Avg. Effective Rent", "Avg. Occ%"],
      orient: "vertical",
      left: "center",
      bottom: "bottom",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "40px",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [`Yr${getCurrentYear(true)}`, `Yr${getCurrentYear(true) + 1}`],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: { show: false },
        name: "RMB/sqm",
        max: function (value) {
          return (value.max + 0.1 * value.max).toFixed(2);
        },
      },
      {
        name: "Avg. Occ%",
        type: "value",
        max: 100,
        min: 0,
        axisLabel: {
          show: true,
          interval: "auto",
          formatter: "{value}%",
        },
      },
    ],
    series: [
      {
        name: "Avg. Effective Rent",
        type: "bar",
        stack: "bar",
        barMaxWidth: 30,
        color: "#00953a",
        data: r3c2_data_C_bar,
        label: {
          show: true,
          position: "top",
          color: "#000000",
          // formatter: function (params) {
          //   return params.value;
          // },
        },
      },

      {
        name: "Avg. Occ%",
        type: "bar",
        barMaxWidth: 30,
        yAxisIndex: 1,
        color: "#ffc000",
        data: r3c2_data_C_line,
        label: {
          show: true,
          position: "top",
          color: "#000000",
          formatter: function (params) {
            return params.value + "%";
          },
        },
      },
    ],
  };
  // pic_R
  let option_R = {
    title: {
      text: `Yr${getCurrentYear(true) + 1} New Completion`,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var html = "";
        if (params.length > 0) {
          html += params[0].axisValue + "<br>";
          html += params[0].marker + params[0].seriesName + "：" + format(params[0].data) + "<br>";
          html += params[1].marker + params[1].seriesName + "：" + format(params[1].data) + "%" + "<br>";
        }
        return html;
      },
    },
    legend: {
      data: ["Avg. Effective Rent", "Avg. Occ%"],
      orient: "vertical",
      left: "center",
      bottom: "bottom",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "40px",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [`Yr${getCurrentYear(true) + 1}`],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "RMB/sqm",
        splitLine: { show: false },
      },
      {
        name: "Avg. Occ%",
        type: "value",
        max: 100,
        min: 0,
        axisLabel: {
          show: true,
          interval: "auto",
          formatter: "{value}%",
        },
      },
    ],
    series: [
      {
        name: "Avg. Effective Rent",
        type: "bar",
        stack: "bar",
        barMaxWidth: 30,
        color: "#00953a",
        data: r3c2_data_R_bar,
        label: {
          show: true,
          position: "top",
          color: "#000000",
          // formatter: function (params) {
          //   return params.value;
          // },
        },
      },

      {
        name: "Avg. Occ%",
        type: "bar",
        barMaxWidth: 30,
        yAxisIndex: 1,
        color: "#ffc000",
        data: r3c2_data_R_line,
        label: {
          show: true,
          position: "top",
          color: "#000000",
          formatter: function (params) {
            return params.value + "%";
          },
        },
      },
    ],
  };
  initEchart_r3c2(`${id}-L`, option_L);
  initEchart_r3c2(`${id}-C`, option_C);
  initEchart_r3c2(`${id}-R`, option_R);
}

// 计算最大值
function _calcMaxNumber(arr) {
  let max = Math.max(...arr);
  let maxInt = Math.ceil(max / 0.95);
  let maxVal = maxInt * 1;
  return maxVal;
}
// 计算最小值
function _calcMinNumber(arr) {
  let min = Math.min(...arr);
  let minInt = Math.floor(min / 1);
  let minVal = minInt * 1;
  return minVal;
}

function r4(data, params) {
  console.log("r4");
  let componentId = params.componentId;

  let r4_data = JSON.parse(data);

  let r4_data_Existing = r4_data.revenue_existing.map(function (val) {
    if (typeof val == "number") {
      return (val / 1000000).toFixed(0);
    } else {
      return val;
    }
  });

  let r4_data_Future = r4_data.revenue_new.map(function (val) {
    if (typeof val == "number") {
      return (val / 1000000).toFixed(0);
    } else {
      return val;
    }
  });

  let occ = r4_data.occ.map(function (val) {
    if (typeof val == "number") {
      return Number(val.toFixed(2)) * 100;
    } else {
      return val;
    }
  });

  let other = r4_data.Budget.map(function (val) {
    if (typeof val == "number") {
      // return Number(val.toFixed(2));
      return (val / 1000000).toFixed(0);
    } else {
      return val;
    }
  });

  let barData = [...other.slice(4, 8), ...r4_data_Future.slice(6, 12), ...r4_data_Existing];
  let lineData = [...occ];

  let barMax = _calcMaxNumber(barData),
    barMin = _calcMinNumber(barData),
    lineMax = _calcMaxNumber(lineData),
    lineMin = _calcMinNumber(lineData);

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        var html = "";
        // if (params.length > 0) {
        //   html += params[0].axisValue + "<br>";
        //   for (var int = 0; int < params.length; int++) {
        //     html += params[int].marker + params[int].seriesName + "：" + format(params[int].data) + "<br>";
        //   }
        // }
        if (params.length > 0) {
          html += params[0].axisValue + "<br>";
          html += params[0].marker + params[0].seriesName + "：" + format(params[0].data) + "<br>";
          html += params[1].marker + params[1].seriesName + "：" + format(params[1].data) + "<br>";
          html += params[2].marker + params[2].seriesName + "：" + format(params[2].data) + "%" + "<br>";
          html += params[3].marker + params[3].seriesName + "：" + format(params[3].data) + "<br>";
        }
        return html;
      },
    },
    legend: {
      data: ["Revenue_Existing", "Revenue_New", "Avg. Occ%", `Revenue_Yr${getCurrentYear(true)} Budget`],
      orient: "vertical",
      left: "center",
      bottom: "bottom",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "40px",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          `${getCurrentYear(true) - 1}Q1`,
          `${getCurrentYear(true) - 1}Q2`,
          `${getCurrentYear(true) - 1}Q3`,
          `${getCurrentYear(true) - 1}Q4`,
          `${getCurrentYear(true)}Q1`,
          `${getCurrentYear(true)}Q2`,
          `${getCurrentYear(true)}Q3`,
          `${getCurrentYear(true)}Q4`,
          `${getCurrentYear(true) + 1}Q1`,
          `${getCurrentYear(true) + 1}Q2`,
          `${getCurrentYear(true) + 1}Q3`,
          `${getCurrentYear(true) + 1}Q4`,
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "mRMB",
        // min: barMin,
        // max: barMax,
        // splitNumber: 5,
        // interval: (barMax - barMin) / 5,
      },
      {
        type: "value",
        splitLine: { show: false },
        name: "Avg. Occ%",
        max: 100,
        min: 20,
        axisLabel: {
          show: true,
          interval: "auto",
          formatter: "{value}%",
        },
        // min: lineMin,
        // max: lineMax,
        // splitNumber: 5,
        // interval: (lineMax - lineMin) / 5,
      },
    ],
    series: [
      {
        name: "Revenue_Existing",
        type: "bar",
        stack: "bar",
        barMaxWidth: 30,
        color: "#00953a",
        data: r4_data_Existing,
      },
      {
        name: "Revenue_New",
        type: "bar",
        stack: "bar",
        barMaxWidth: 30,
        color: "#82bc00",
        data: r4_data_Future,
      },
      {
        name: "Avg. Occ%",
        type: "line",
        yAxisIndex: 1,
        color: "#ffc000",
        data: occ,
        symbolSize: 8,
        label: {
          show: true,
          color: "#000000",
          position: ["-100%", "-150%"],
          formatter: function (params) {
            return params.value.toFixed(0) + "%";
          },
        },
      },
      {
        name: `Revenue_Yr${getCurrentYear(true)} Budget`,
        type: "bar",
        barGap: "-132%",
        barMaxWidth: 50,
        // yAxisIndex: 1,
        color: "#ED7D31",
        data: other,
        itemStyle: {
          normal: {
            color: "rgba(129,175,239,0.3)", //柱子颜色
            // borderColor: "#000000", //边框颜色
            // borderWidth: 2,
          },
        },
      },
    ],
  };

  initEchart_padding(componentId, option);
}

var r5_data = "";
var r5_id = "";
function r5(data, params) {
  // 初始化
  let componentId = params.componentId;
  r5_id = "chart-" + componentId + "";
  r5_data = JSON.parse(data);

  $("#" + r5_id)
    .parent()
    .css("padding-top", "3rem");

  switchPercentage_r5();
}

function renderTableColumn_r5() {
  let table = `
  <table id="total-table-part" style="width: 100%;" class="table-borderless table-striped">
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th colspan="7" class='text-center' id='dynamic-column'>NOI</th>
      <th></th>
      <th colspan="4" class='text-center'>NOI Margin</th>
      <th></th>
      <th colspan="3" class='text-center'>NOI Yield on Cost_SS</th>
      <th></th>
      <th colspan="2" class='text-center'>NOI Yield on Cost_YR${getCurrentYear(true)}完工</th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
      <th class="AmountPart text-center">${getCurrentYear(true)}F vs ${getCurrentYear(true) - 1}A</th>
      <th class="percentPart text-center">${getCurrentYear(true)}F vs ${getCurrentYear(true) - 1}A</th>
      <th class="AmountPart text-center">${getCurrentYear(true)}F vs ${getCurrentYear(true)}B</th>
      <th class="percentPart text-center">${getCurrentYear(true)}F vs ${getCurrentYear(true)}B</th>
      <th class="AmountPart text-center">${getCurrentYear(true) + 1}B vs ${getCurrentYear(true)}F</th>
      <th class="percentPart text-center">${getCurrentYear(true) + 1}B vs ${getCurrentYear(true)}F</th>
      <th class="split-line"></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
      <th class="split-line"></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
      <th class="split-line"></th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
      <th class="text-center">Budget</th>
      <th class="AmountPart text-center">Var</th>
      <th class="percentPart text-center">Var%</th>
      <th class="AmountPart text-center">Var</th>
      <th class="percentPart text-center">Var%</th>
      <th class="AmountPart text-center">Var</th>
      <th class="percentPart text-center">Var%</th>
      <th class="split-line"></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
      <th class="text-center">Budget</th>
      <th class="split-line"></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
      <th class="split-line"></th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
`;

  let switchBtn = `<div class="btn-group" style="position: absolute;left: 0;top: 1%;z-index: 99;">
<button type="button" class="btn btn-link" style="color: #333333;font-size: 3px;" data-toggle="dropdown"><i class="icon-menu7"></i></button>
<div class="dropdown-menu dropdown-menu-left">
  <a class="dropdown-item" onclick='switchPercentage_r5()'>Percentage</a>
  <a class="dropdown-item" onclick='switchAmount_r5()'>Amount</a>
</div>
</div>`;

  let switchDetail = `<div class="btn-group mr-2" style="position: absolute;left: 5%;top: 1%;z-index: 99;">
    <button type="button" class="btn btn-light" onclick='switchPercentage_r5()'>Summary</button>
    <button type="button" class="btn btn-light" onclick='switchKey1_r5()'>NOI</button>
    <button type="button" class="btn btn-light" onclick='switchKey2_r5()'>NOI Margin</button>
    <button type="button" class="btn btn-light" onclick='switchKey3_r5()'>Opex&repair Cost</button>
    <button type="button" class="btn btn-light" onclick='switchKey4_r5()'>PM Fee</button>
    <button type="button" class="btn btn-light" onclick='switchKey5_r5()'>Tax</button>
  </div>`;

  let downloadTable = `<span class="breadcrumb-elements-item cursor-pointer" style="position: absolute;right: 2%;top: 0;z-index: 99;" onclick='downloadTable_fork("#r5","#key1","Summary")'>\n  <i class="icon-download4 mr-2"></i>\n  <span class="">下载</span>\n</span>`;

  $("#" + r5_id).html(table);

  $("#" + r5_id).prepend(switchDetail);

  $("#" + r5_id).prepend(switchBtn);

  $("#" + r5_id).prepend(downloadTable);
}

function renderTableColumn_r5_fork() {
  let table = `
  <table id="total-table-part" style="width: 100%;">
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th colspan="10" class='text-center'>NOI</th>
      <th></th>
      <th colspan="4" class='text-center'>NOI Margin</th>
      <th></th>
      <th colspan="3" class='text-center'>NOI Yield on Cost_SS</th>
      <th></th>
      <th colspan="2" class='text-center'>NOI Yield on Cost_YR${getCurrentYear(true)}完工</th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
      <th class="AmountPart text-center">${getCurrentYear(true)}F vs ${getCurrentYear(true) - 1}A</th>
      <th class="percentPart text-center">${getCurrentYear(true)}F vs ${getCurrentYear(true) - 1}A</th>
      <th class="AmountPart text-center">${getCurrentYear(true)}F vs ${getCurrentYear(true)}B</th>
      <th class="percentPart text-center">${getCurrentYear(true)}F vs ${getCurrentYear(true)}B</th>
      <th class="AmountPart text-center">${getCurrentYear(true) + 1}B vs ${getCurrentYear(true)}F</th>
      <th class="percentPart text-center">${getCurrentYear(true) + 1}B vs ${getCurrentYear(true)}F</th>
      <th class="split-line"></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
      <th class="split-line"></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
      <th class="split-line"></th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
      <th class="text-center">Budget</th>
      <th class="AmountPart text-center">Var</th>
      <th class="percentPart text-center">Var%</th>
      <th class="AmountPart text-center">Var</th>
      <th class="percentPart text-center">Var%</th>
      <th class="AmountPart text-center">Var</th>
      <th class="percentPart text-center">Var%</th>
      <th class="split-line"></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
      <th class="text-center">Budget</th>
      <th class="split-line"></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
      <th class="split-line"></th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
`;

  $(`#table-fork #r5 #key1`).html(table);
}

function switchPercentage_r5() {
  renderTableColumn_r5();
  renderTableColumn_r5_fork();

  //显示百分比列
  $(".AmountPart").hide();
  $(".percentPart").show();

  // 处理数据
  let asset_total = r5_data.asset_total.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        if ([7, 9, 11, 13, 14, 15, 16].indexOf(y) > -1) {
          var str = Number(ch_val * 100).toFixed(0);
          str += "%";
          return str;
        } else if ([18, 19, 20, 22, 23].indexOf(y) > -1) {
          // return numFormat(ch_val.toFixed(3));
          var str = Number(ch_val * 100).toFixed(1);
          str += "%";
          return str;
        } else {
          return numFormat(ch_val.toFixed(0));
        }
      } else {
        return ch_val;
      }
    });
  });

  // 百分比隐藏
  let AmountIndexArr = [6, 8, 10];
  let tbodyHtml = "";
  asset_total.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    if (x == 0) {
      trV.forEach((tdV, y) => {
        if ([7, 9, 11].includes(y) && parseFloat(tdV) < 0) {
          let classAttr = "";
          if (AmountIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}" style="font-weight:bold;color:red">${tdV}</td>`;
        } else if ([0].includes(y)) {
          tbodyHtml += `<td class="text-left" style="font-weight:bold">${tdV}</td>`;
        } else if ([1].includes(y)) {
          tbodyHtml += `<td class="text-left" style="font-weight:bold">${tdV}</td>`;
        } else if ([12, 17, 21].includes(y)) {
          tbodyHtml += `<td class="split-line">${tdV}</td>`;
        } else {
          let classAttr = "";
          if (AmountIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}" style="font-weight:bold;">${tdV}</td>`;
        }
      });
    } else {
      trV.forEach((tdV, y) => {
        if ([7, 9, 11].includes(y) && parseFloat(tdV) < 0) {
          let classAttr = "";
          if (AmountIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}" style="color:red">${tdV}</td>`;
        } else if ([0].includes(y)) {
          tbodyHtml += `<td class="text-left" >${tdV}</td>`;
        } else if ([1].includes(y)) {
          tbodyHtml += `<td class="text-left" >${tdV}</td>`;
        } else if ([12, 17, 21].includes(y)) {
          tbodyHtml += `<td class="split-line">${tdV}</td>`;
        } else {
          let classAttr = "";
          if (AmountIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}">${tdV}</td>`;
        }
      });
    }

    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r5_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r5_id} #total-table-part`, 300, 2);

  $(`#table-fork #r5 #key1`).find("tbody").html(tbodyHtml);
}

function switchAmount_r5() {
  renderTableColumn_r5();

  //显示值
  $(".AmountPart").show();
  $(".percentPart").hide();

  // 处理数据
  let asset_total = r5_data.asset_total.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        if ([7, 9, 11, 13, 14, 15, 16].indexOf(y) > -1) {
          var str = Number(ch_val * 100).toFixed(0);
          str += "%";
          return str;
        } else if ([18, 19, 20, 22, 23].indexOf(y) > -1) {
          // return numFormat(ch_val.toFixed(3));
          var str = Number(ch_val * 100).toFixed(1);
          str += "%";
          return str;
        } else {
          return numFormat(ch_val.toFixed(0));
        }
      } else {
        return ch_val;
      }
    });
  });

  let percentIndexArr = [7, 9, 11];
  let tbodyHtml = "";
  asset_total.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    if (x == 0) {
      trV.forEach((tdV, y) => {
        if ([7, 9, 11].includes(y) && parseFloat(tdV) < 0) {
          let classAttr = "";
          if (percentIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}" style="font-weight:bold;color:red">${tdV}</td>`;
        } else if ([0].includes(y)) {
          tbodyHtml += `<td class="text-left" style="font-weight:bold">${tdV}</td>`;
        } else if ([1].includes(y)) {
          tbodyHtml += `<td class="text-left" style="font-weight:bold">${tdV}</td>`;
        } else if ([12, 17, 21].includes(y)) {
          tbodyHtml += `<td class="split-line">${tdV}</td>`;
        } else {
          let classAttr = "";
          if (percentIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}" style="font-weight:bold;">${tdV}</td>`;
        }
      });
    } else {
      trV.forEach((tdV, y) => {
        if ([7, 9, 11].includes(y) && parseFloat(tdV) < 0) {
          let classAttr = "";
          if (percentIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}" style="color:red">${tdV}</td>`;
        } else if ([0].includes(y)) {
          tbodyHtml += `<td class="text-left" >${tdV}</td>`;
        } else if ([1].includes(y)) {
          tbodyHtml += `<td class="text-left">${tdV}</td>`;
        } else if ([12, 17, 21].includes(y)) {
          tbodyHtml += `<td class="split-line">${tdV}</td>`;
        } else {
          let classAttr = "";
          if (percentIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}">${tdV}</td>`;
        }
      });
    }
    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r5_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r5_id} #total-table-part`, 300, 2);
}

function renderTableColumn_Detail_r5(id, name) {
  let table = `
  <table id="total-table-part" style="width: 100%;" class="table-borderless table-striped">
  <thead>
    <tr>
      <th></th>
      <th colspan="38" class='text-center'>${name}</th>
    </tr>
    <tr>
      <th></th>
      <th colspan="12" class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="split-line"></th>
      <th colspan="12" class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="split-line"></th>
      <th colspan="12" class="text-center">Yr${getCurrentYear(true) + 1}</th>
    </tr>
    <tr>
      <th></th>
      <th class="text-center">Jan</th>
      <th class="text-center">Feb</th>
      <th class="text-center">Mar</th>
      <th class="text-center">Apr</th>
      <th class="text-center">May</th>
      <th class="text-center">Jun</th>
      <th class="text-center">Jul</th>
      <th class="text-center">Aug</th>
      <th class="text-center">Sept</th>
      <th class="text-center">Oct</th>
      <th class="text-center">Nov</th>
      <th class="text-center">Dec</th>
      <th class="split-line"></th>
      <th class="text-center">Jan</th>
      <th class="text-center">Feb</th>
      <th class="text-center">Mar</th>
      <th class="text-center">Apr</th>
      <th class="text-center">May</th>
      <th class="text-center">Jun</th>
      <th class="text-center">Jul</th>
      <th class="text-center">Aug</th>
      <th class="text-center">Sept</th>
      <th class="text-center">Oct</th>
      <th class="text-center">Nov</th>
      <th class="text-center">Dec</th>
      <th class="split-line"></th>
      <th class="text-center">Jan</th>
      <th class="text-center">Feb</th>
      <th class="text-center">Mar</th>
      <th class="text-center">Apr</th>
      <th class="text-center">May</th>
      <th class="text-center">Jun</th>
      <th class="text-center">Jul</th>
      <th class="text-center">Aug</th>
      <th class="text-center">Sept</th>
      <th class="text-center">Oct</th>
      <th class="text-center">Nov</th>
      <th class="text-center">Dec</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
`;

  let switchBtn = `<div class="btn-group" style="position: absolute;left: 0;top: 1%;z-index: 99;">
<button type="button" class="btn btn-link" style="color: #333333;font-size: 3px;" data-toggle="dropdown"><i class="icon-menu7"></i></button>
<div class="dropdown-menu dropdown-menu-left">
  <a class="dropdown-item" onclick='switchPercentage_r5()'>Percentage</a>
  <a class="dropdown-item" onclick='switchAmount_r5()'>Amount</a>
</div>
</div>`;

  let switchDetail = `<div class="btn-group mr-2" style="position: absolute;left: 5%;top: 1%;z-index: 99;">
<button type="button" class="btn btn-light" onclick='switchPercentage_r5()'>Summary</button>
<button type="button" class="btn btn-light" onclick='switchKey1_r5()'>NOI</button>
<button type="button" class="btn btn-light" onclick='switchKey2_r5()'>NOI Margin</button>
<button type="button" class="btn btn-light" onclick='switchKey3_r5()'>Opex&repair Cost</button>
<button type="button" class="btn btn-light" onclick='switchKey4_r5()'>PM Fee</button>
<button type="button" class="btn btn-light" onclick='switchKey5_r5()'>Tax</button>
</div>`;

  let downloadTable = `<span class="breadcrumb-elements-item cursor-pointer" style="position: absolute;right: 2%;top: 0;z-index: 99;" onclick='downloadTable_detail("${id}","${name}")'>\n  <i class="icon-download4 mr-2"></i>\n  <span class="">下载</span>\n</span>`;

  $("#" + r5_id).html(table);

  $("#" + r5_id).prepend(switchDetail);

  $("#" + r5_id).prepend(switchBtn);

  $("#" + r5_id).prepend(downloadTable);
}

function switchKey1_r5() {
  renderTableColumn_Detail_r5(r5_id, "NOI");

  // 处理数据
  let asset_1 = r5_data.asset_1.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        return numFormat(ch_val.toFixed(0));
      } else {
        return ch_val;
      }
    });
  });

  let tbodyHtml = "";
  asset_1.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    trV.forEach((tdV, y) => {
      if ([13, 26].includes(y)) {
        tbodyHtml += `<td class="split-line">${tdV}</td>`;
      } else if ([0].includes(y)) {
        tbodyHtml += `<td class="text-left" >${tdV}</td>`;
      } else {
        tbodyHtml += `<td class="text-right">${tdV}</td>`;
      }
    });
    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r5_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r5_id} #total-table-part`, 300, 1);
}
function switchKey2_r5() {
  renderTableColumn_Detail_r5(r5_id, "NOI Margin");

  // 处理数据
  let asset_2 = r5_data.asset_2.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        var str = Number(ch_val * 100).toFixed(0);
        str += "%";
        return str;
      } else {
        return ch_val;
      }
    });
  });

  let tbodyHtml = "";
  asset_2.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    trV.forEach((tdV, y) => {
      if ([13, 26].includes(y)) {
        tbodyHtml += `<td class="split-line">${tdV}</td>`;
      } else if ([0].includes(y)) {
        tbodyHtml += `<td class="text-left" >${tdV}</td>`;
      } else {
        tbodyHtml += `<td class="text-right">${tdV}</td>`;
      }
    });
    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r5_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r5_id} #total-table-part`, 300, 1);
}

function switchKey3_r5() {
  renderTableColumn_Detail_r5(r5_id, "Opex&repair Cost");

  // 处理数据
  let asset_3 = r5_data.asset_3.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        return numFormat(ch_val.toFixed(0));
      } else {
        return ch_val;
      }
    });
  });

  let tbodyHtml = "";
  asset_3.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    trV.forEach((tdV, y) => {
      if ([13, 26].includes(y)) {
        tbodyHtml += `<td class="split-line">${tdV}</td>`;
      } else if ([0].includes(y)) {
        tbodyHtml += `<td class="text-left" >${tdV}</td>`;
      } else {
        tbodyHtml += `<td class="text-right">${tdV}</td>`;
      }
    });
    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r5_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r5_id} #total-table-part`, 300, 1);
}

function switchKey4_r5() {
  renderTableColumn_Detail_r5(r5_id, "PM Fee");

  // 处理数据
  let asset_4 = r5_data.asset_4.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        return numFormat(ch_val.toFixed(0));
      } else {
        return ch_val;
      }
    });
  });

  let tbodyHtml = "";
  asset_4.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    trV.forEach((tdV, y) => {
      if ([13, 26].includes(y)) {
        tbodyHtml += `<td class="split-line">${tdV}</td>`;
      } else if ([0].includes(y)) {
        tbodyHtml += `<td class="text-left" >${tdV}</td>`;
      } else {
        tbodyHtml += `<td class="text-right">${tdV}</td>`;
      }
    });
    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r5_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r5_id} #total-table-part`, 300, 1);
}

function switchKey5_r5() {
  renderTableColumn_Detail_r5(r5_id, "Tax");

  // 处理数据
  let asset_5 = r5_data.asset_5.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        return numFormat(ch_val.toFixed(0));
      } else {
        return ch_val;
      }
    });
  });

  let tbodyHtml = "";
  asset_5.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    trV.forEach((tdV, y) => {
      if ([13, 26].includes(y)) {
        tbodyHtml += `<td class="split-line">${tdV}</td>`;
      } else if ([0].includes(y)) {
        tbodyHtml += `<td class="text-left" >${tdV}</td>`;
      } else {
        tbodyHtml += `<td class="text-right">${tdV}</td>`;
      }
    });
    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r5_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r5_id} #total-table-part`, 300, 1);
}

var r6_data = "";
var r6_id = "";
function r6(data, params) {
  // 初始化
  let componentId = params.componentId;
  r6_id = "chart-" + componentId + "";
  // let r3_data = JSON.parse(data);

  r6_data = JSON.parse(data);

  $("#" + r6_id)
    .parent()
    .css("padding-top", "3rem");

  switchPercentage_r6();
}

function renderTableColumn_r6() {
  let table = `
  <table id="total-table-part" style="width: 100%;" class="table-borderless table-striped">
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th colspan="7" class='text-center'>Revenue excl leveling</th>
      <th></th>
      <th colspan="3" class='text-center'>Avg. Occ%</th>
      <th></th>
      <th colspan="3" class='text-center'>Avg. Effective Rent</th>
      <th></th>
      <th colspan="3" class='text-center'>NLA</th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
      <th class="text-center">${getCurrentYear(true)}F vs ${getCurrentYear(true) - 1}A</th>
      <th class="text-center">${getCurrentYear(true)}F Fcst vs ${getCurrentYear(true)}B</th>
      <th class="text-center">${getCurrentYear(true) + 1}B vs ${getCurrentYear(true)}F</th>
      <th class="split-line"></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
      <th class="split-line"></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
      <th class="split-line"></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
      <th class="text-center">Budget</th>
      <th class="AmountPart text-center">Var</th>
      <th class="percentPart text-center">Var%</th>
      <th class="AmountPart text-center">Var</th>
      <th class="percentPart text-center">Var%</th>
      <th class="AmountPart text-center">Var</th>
      <th class="percentPart text-center">Var%</th>
      <th class="split-line"></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
      <th class="split-line"></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
      <th class="split-line"></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
`;

  let switchBtn = `<div class="btn-group" style="position: absolute;left: 0;top: 1%;z-index: 99;">
<button type="button" class="btn btn-link" style="color: #333333;font-size: 3px;" data-toggle="dropdown"><i class="icon-menu7"></i></button>
<div class="dropdown-menu dropdown-menu-left">
  <a class="dropdown-item" onclick='switchPercentage_r6()'>Percentage</a>
  <a class="dropdown-item" onclick='switchAmount_r6()'>Amount</a>
</div>
</div>`;

  let switchDetail = `<div class="btn-group mr-2" style="position: absolute;left: 5%;top: 1%;z-index: 99;">
<button type="button" class="btn btn-light" onclick='switchPercentage_r6()'>Summary</button>
<button type="button" class="btn btn-light" onclick='switchKey1_r6()'>Revenue excl leveling</button>
<button type="button" class="btn btn-light" onclick='switchKey2_r6()'>Avg. Occ%</button>
<button type="button" class="btn btn-light" onclick='switchKey3_r6()'>Avg. Effective Rent</button>
<button type="button" class="btn btn-light" onclick='switchKey4_r6()'>NLA</button>
<button type="button" class="btn btn-light" onclick='switchKey5_r6()'>Leveling</button>
</div>`;

  let downloadTable = `<span class="breadcrumb-elements-item cursor-pointer" style="position: absolute;right: 2%;top: 0;z-index: 99;" onclick='downloadTable_fork("#r6","#key1","Summary")'>\n  <i class="icon-download4 mr-2"></i>\n  <span class="">下载</span>\n</span>`;

  $("#" + r6_id).html(table);

  $("#" + r6_id).prepend(switchDetail);

  $("#" + r6_id).prepend(switchBtn);

  $("#" + r6_id).prepend(downloadTable);
}

function renderTableColumn_r6_fork() {
  let table = `
  <table id="total-table-part" style="width: 100%;">
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th colspan="10" class='text-center'>Revenue excl leveling</th>
      <th></th>
      <th colspan="3" class='text-center'>Avg. Occ%</th>
      <th></th>
      <th colspan="3" class='text-center'>Avg. Effective Rent</th>
      <th></th>
      <th colspan="3" class='text-center'>NLA</th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
      <th class="text-center">${getCurrentYear(true)}F vs ${getCurrentYear(true) - 1}A</th>
      <th class="text-center">${getCurrentYear(true)}F vs ${getCurrentYear(true) - 1}A</th>
      <th class="text-center">${getCurrentYear(true)}F Fcst vs ${getCurrentYear(true)}B</th>
      <th class="text-center">${getCurrentYear(true)}F Fcst vs ${getCurrentYear(true)}B</th>
      <th class="text-center">${getCurrentYear(true) + 1}B vs ${getCurrentYear(true)}F</th>
      <th class="text-center">${getCurrentYear(true) + 1}B vs ${getCurrentYear(true)}F</th>
      <th class="split-line"></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
      <th class="split-line"></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
      <th class="split-line"></th>
      <th class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="text-center">Yr${getCurrentYear(true) + 1}</th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
      <th class="text-center">Budget</th>
      <th class="AmountPart text-center">Var</th>
      <th class="percentPart text-center">Var%</th>
      <th class="AmountPart text-center">Var</th>
      <th class="percentPart text-center">Var%</th>
      <th class="AmountPart text-center">Var</th>
      <th class="percentPart text-center">Var%</th>
      <th class="split-line"></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
      <th class="split-line"></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
      <th class="split-line"></th>
      <th class="text-center">Actual</th>
      <th class="text-center">Fcst</th>
      <th class="text-center">Budget</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
`;

  $(`#table-fork #r6 #key1`).html(table);
}

function switchPercentage_r6() {
  renderTableColumn_r6();
  renderTableColumn_r6_fork();

  //显示百分比列
  $(".AmountPart").hide();
  $(".percentPart").show();

  // 处理数据
  let asset_total = r6_data.asset_total.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        if ([7, 9, 11, 13, 14, 15].indexOf(y) > -1) {
          var str = Number(ch_val * 100).toFixed(0);
          str += "%";
          return str;
        } else if ([17, 18, 19].indexOf(y) > -1) {
          return numFormat(ch_val.toFixed(2));
        } else {
          return numFormat(ch_val.toFixed(0));
        }
      } else {
        return ch_val;
      }
    });
  });

  // 百分比隐藏
  let AmountIndexArr = [6, 8, 10];
  let tbodyHtml = "";
  asset_total.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    if (x == 0) {
      trV.forEach((tdV, y) => {
        if ([7, 9, 11].includes(y) && parseFloat(tdV) < 0) {
          let classAttr = "";
          if (AmountIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}" style="font-weight:bold;color:red">${tdV}</td>`;
        } else if ([0].includes(y)) {
          tbodyHtml += `<td class="text-left" style="font-weight:bold">${tdV}</td>`;
        } else if ([1].includes(y)) {
          tbodyHtml += `<td class="text-left" style="font-weight:bold">${tdV}</td>`;
        } else if ([12, 16, 20].includes(y)) {
          tbodyHtml += `<td class="split-line">${tdV}</td>`;
        } else {
          let classAttr = "";
          if (AmountIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}" style="font-weight:bold;">${tdV}</td>`;
        }
      });
    } else {
      trV.forEach((tdV, y) => {
        if ([7, 9, 11].includes(y) && parseFloat(tdV) < 0) {
          let classAttr = "";
          if (AmountIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}" style="color:red">${tdV}</td>`;
        } else if ([0].includes(y)) {
          tbodyHtml += `<td class="text-left">${tdV}</td>`;
        } else if ([1].includes(y)) {
          tbodyHtml += `<td class="text-left">${tdV}</td>`;
        } else if ([12, 16, 20].includes(y)) {
          tbodyHtml += `<td class="split-line">${tdV}</td>`;
        } else {
          let classAttr = "";
          if (AmountIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}">${tdV}</td>`;
        }
      });
    }

    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r6_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r6_id} #total-table-part`, 300, 2);

  $(`#table-fork #r6 #key1`).find("tbody").html(tbodyHtml);
}

function switchAmount_r6() {
  renderTableColumn_r6();

  //显示值
  $(".AmountPart").show();
  $(".percentPart").hide();

  // 处理数据
  let asset_total = r6_data.asset_total.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        if ([7, 9, 11, 13, 14, 15].indexOf(y) > -1) {
          var str = Number(ch_val * 100).toFixed(0);
          str += "%";
          return str;
        } else if ([17, 18, 19].indexOf(y) > -1) {
          return numFormat(ch_val.toFixed(2));
        } else {
          return numFormat(ch_val.toFixed(0));
        }
      } else {
        return ch_val;
      }
    });
  });

  let percentIndexArr = [7, 9, 11];
  let tbodyHtml = "";
  asset_total.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    if (x == 0) {
      trV.forEach((tdV, y) => {
        if ([7, 9, 11].includes(y) && parseFloat(tdV) < 0) {
          let classAttr = "";
          if (percentIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}" style="font-weight:bold;color:red">${tdV}</td>`;
        } else if ([0].includes(y)) {
          tbodyHtml += `<td class="text-left" style="font-weight:bold">${tdV}</td>`;
        } else if ([1].includes(y)) {
          tbodyHtml += `<td class="text-left" style="font-weight:bold">${tdV}</td>`;
        } else if ([12, 16, 20].includes(y)) {
          tbodyHtml += `<td class="split-line">${tdV}</td>`;
        } else {
          let classAttr = "";
          if (percentIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}" style="font-weight:bold;">${tdV}</td>`;
        }
      });
    } else {
      trV.forEach((tdV, y) => {
        if ([7, 9, 11].includes(y) && parseFloat(tdV) < 0) {
          let classAttr = "";
          if (percentIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}" style="color:red">${tdV}</td>`;
        } else if ([0].includes(y)) {
          tbodyHtml += `<td class="text-left" >${tdV}</td>`;
        } else if ([1].includes(y)) {
          tbodyHtml += `<td class="text-left" >${tdV}</td>`;
        } else if ([12, 16, 20].includes(y)) {
          tbodyHtml += `<td class="split-line">${tdV}</td>`;
        } else {
          let classAttr = "";
          if (percentIndexArr.includes(y)) {
            classAttr = "disPNone";
          }
          tbodyHtml += `<td class="text-right ${classAttr}">${tdV}</td>`;
        }
      });
    }

    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r6_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r6_id} #total-table-part`, 300, 2);
}

function renderTableColumn_Detail_r6(id, name) {
  let table = `
  <table id="total-table-part" style="width: 100%;" class="table-borderless table-striped">
  <thead>
    <tr>
      <th></th>
      <th colspan="38" class='text-center'>${name}</th>
    </tr>
    <tr>
      <th></th>
      <th colspan="12" class="text-center">Yr${getCurrentYear(true) - 1}</th>
      <th class="split-line"></th>
      <th colspan="12" class="text-center">Yr${getCurrentYear(true)}</th>
      <th class="split-line"></th>
      <th colspan="12" class="text-center">Yr${getCurrentYear(true) + 1}</th>
    </tr>
    <tr>
      <th></th>
      <th class="text-center">Jan</th>
      <th class="text-center">Feb</th>
      <th class="text-center">Mar</th>
      <th class="text-center">Apr</th>
      <th class="text-center">May</th>
      <th class="text-center">Jun</th>
      <th class="text-center">Jul</th>
      <th class="text-center">Aug</th>
      <th class="text-center">Sept</th>
      <th class="text-center">Oct</th>
      <th class="text-center">Nov</th>
      <th class="text-center">Dec</th>
      <th class="split-line"></th>
      <th class="text-center">Jan</th>
      <th class="text-center">Feb</th>
      <th class="text-center">Mar</th>
      <th class="text-center">Apr</th>
      <th class="text-center">May</th>
      <th class="text-center">Jun</th>
      <th class="text-center">Jul</th>
      <th class="text-center">Aug</th>
      <th class="text-center">Sept</th>
      <th class="text-center">Oct</th>
      <th class="text-center">Nov</th>
      <th class="text-center">Dec</th>
      <th class="split-line"></th>
      <th class="text-center">Jan</th>
      <th class="text-center">Feb</th>
      <th class="text-center">Mar</th>
      <th class="text-center">Apr</th>
      <th class="text-center">May</th>
      <th class="text-center">Jun</th>
      <th class="text-center">Jul</th>
      <th class="text-center">Aug</th>
      <th class="text-center">Sept</th>
      <th class="text-center">Oct</th>
      <th class="text-center">Nov</th>
      <th class="text-center">Dec</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
`;

  let switchBtn = `<div class="btn-group" style="position: absolute;left: 0;top: 1%;z-index: 99;">
<button type="button" class="btn btn-link" style="color: #333333;font-size: 3px;" data-toggle="dropdown"><i class="icon-menu7"></i></button>
<div class="dropdown-menu dropdown-menu-left">
  <a class="dropdown-item" onclick='switchPercentage_r6()'>Percentage</a>
  <a class="dropdown-item" onclick='switchAmount_r6()'>Amount</a>
</div>
</div>`;

  let switchDetail = `<div class="btn-group mr-2" style="position: absolute;left: 5%;top: 1%;z-index: 99;">
<button type="button" class="btn btn-light" onclick='switchPercentage_r6()'>Summary</button>
<button type="button" class="btn btn-light" onclick='switchKey1_r6()'>Revenue excl leveling</button>
<button type="button" class="btn btn-light" onclick='switchKey2_r6()'>Avg. Occ%</button>
<button type="button" class="btn btn-light" onclick='switchKey3_r6()'>Avg. Effective Rent</button>
<button type="button" class="btn btn-light" onclick='switchKey4_r6()'>NLA</button>
<button type="button" class="btn btn-light" onclick='switchKey5_r6()'>Leveling</button>
</div>`;

  let downloadTable = `<span class="breadcrumb-elements-item cursor-pointer" style="position: absolute;right: 2%;top: 0;z-index: 99;" onclick='downloadTable_detail("${id}","${name}")'>\n  <i class="icon-download4 mr-2"></i>\n  <span class="">下载</span>\n</span>`;

  $("#" + r6_id).html(table);

  $("#" + r6_id).prepend(switchDetail);

  $("#" + r6_id).prepend(switchBtn);

  $("#" + r6_id).prepend(downloadTable);
}

function switchKey1_r6() {
  renderTableColumn_Detail_r6(r6_id, "Revenue excl leveling");

  // 处理数据
  let asset_1 = r6_data.asset_1.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        return numFormat(ch_val.toFixed(0));
      } else {
        return ch_val;
      }
    });
  });

  let tbodyHtml = "";
  asset_1.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    trV.forEach((tdV, y) => {
      if ([13, 26].includes(y)) {
        tbodyHtml += `<td class="split-line">${tdV}</td>`;
      } else if ([0].includes(y)) {
        tbodyHtml += `<td class="text-left" >${tdV}</td>`;
      } else {
        tbodyHtml += `<td class="text-right">${tdV}</td>`;
      }
    });
    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r6_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r6_id} #total-table-part`, 300, 1);
}

function switchKey2_r6() {
  renderTableColumn_Detail_r6(r6_id, "Avg. OCC");

  // 处理数据
  let asset_2 = r6_data.asset_2.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        var str = Number(ch_val * 100).toFixed(0);
        str += "%";
        return str;
      } else {
        return ch_val;
      }
    });
  });

  let tbodyHtml = "";
  asset_2.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    trV.forEach((tdV, y) => {
      if ([13, 26].includes(y)) {
        tbodyHtml += `<td class="split-line">${tdV}</td>`;
      } else if ([0].includes(y)) {
        tbodyHtml += `<td class="text-left" >${tdV}</td>`;
      } else {
        tbodyHtml += `<td class="text-right">${tdV}</td>`;
      }
    });
    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r6_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r6_id} #total-table-part`, 300, 1);
}

function switchKey3_r6() {
  renderTableColumn_Detail_r6(r6_id, "Avg. Effective Rent");

  // 处理数据
  let asset_3 = r6_data.asset_3.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        return numFormat(ch_val.toFixed(2));
      } else {
        return ch_val;
      }
    });
  });

  let tbodyHtml = "";
  asset_3.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    trV.forEach((tdV, y) => {
      if ([13, 26].includes(y)) {
        tbodyHtml += `<td class="split-line">${tdV}</td>`;
      } else if ([0].includes(y)) {
        tbodyHtml += `<td class="text-left" >${tdV}</td>`;
      } else {
        tbodyHtml += `<td class="text-right">${tdV}</td>`;
      }
    });
    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r6_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r6_id} #total-table-part`, 300, 1);
}

function switchKey4_r6() {
  renderTableColumn_Detail_r6(r6_id, "NLA");

  // 处理数据
  let asset_4 = r6_data.asset_4.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        return numFormat(ch_val.toFixed(0));
      } else {
        return ch_val;
      }
    });
  });

  let tbodyHtml = "";
  asset_4.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    trV.forEach((tdV, y) => {
      if ([13, 26].includes(y)) {
        tbodyHtml += `<td class="split-line">${tdV}</td>`;
      } else if ([0].includes(y)) {
        tbodyHtml += `<td class="text-left" >${tdV}</td>`;
      } else {
        tbodyHtml += `<td class="text-right">${tdV}</td>`;
      }
    });
    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r6_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r6_id} #total-table-part`, 300, 1);
}

function switchKey5_r6() {
  renderTableColumn_Detail_r6(r6_id, "Leveling");

  // 处理数据
  let asset_5 = r6_data.asset_5.map(function (val) {
    return val.map(function (ch_val, y) {
      if (typeof ch_val == "number") {
        return numFormat(ch_val.toFixed(0));
      } else {
        return ch_val;
      }
    });
  });

  let tbodyHtml = "";
  asset_5.forEach((trV, x) => {
    tbodyHtml += `<tr>`;
    trV.forEach((tdV, y) => {
      if ([13, 26].includes(y)) {
        tbodyHtml += `<td class="split-line">${tdV}</td>`;
      } else if ([0].includes(y)) {
        tbodyHtml += `<td class="text-left" >${tdV}</td>`;
      } else {
        tbodyHtml += `<td class="text-right">${tdV}</td>`;
      }
    });
    tbodyHtml += `</tr>`;
  });

  $(`${"#" + r6_id} #total-table-part`)
    .find("tbody")
    .html(tbodyHtml);
  initDataTable(`${"#" + r6_id} #total-table-part`, 300, 1);
}

/**
 * 小数转百分比
 * @param {*} point
 * @param {*} num
 * @returns
 */
function toPercent(point, num) {
  var str = Number(point * 100).toFixed(num);
  str += "%";
  return str;
}

/**
 * 渲染 EChart 的通用方法
 * @param {*} id
 * @param {*} option
 */
function initEchart(id, option) {
  id = "chart-" + id + "";
  $("#" + id)
    .parent()
    .addClass("pt-0 pl-0 pr-0 pb-0");
  const _height = $("#" + id).height() + 40;
  $("#" + id).height(_height);
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on("resize", function () {
    chart.resize();
  });
}

/**
 * 渲染 EChart 的通用方法(有padding)
 * 保留边距
 * @param {*} id
 * @param {*} option
 */
function initEchart_padding(id, option) {
  id = "chart-" + id + "";
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on("resize", function () {
    chart.resize();
  });
}

/**
 * 渲染 EChart 的通用方法(小格)
 * 保留边距
 * @param {*} id
 * @param {*} option
 * @param {*} height
 */
function initEchart_mini(id, option, height) {
  id = "chart-" + id + "-mini";
  $("#" + id).height(height);
  const chart = echarts.init(document.getElementById(id));
  chart.clear();
  chart.setOption(option);
  $(window).on("resize", function () {
    chart.resize();
  });
}

/**
 * 千分符
 * @param {*} num
 * @returns
 */
function numFormat(num) {
  let RNum = Number(num);
  let c = RNum.toString().indexOf(".") !== -1 ? RNum.toLocaleString() : RNum.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  return c;
}

/**
 * 当前年份
 * @param {boolean} [simple=false]
 * @returns 2020 / 20
 */
function getCurrentYear(simple = false) {
  let date = new Date();
  if (simple) {
    let vYear = date.getYear() < 2000 ? date.getYear() + 1900 : date.getYear();
    return Number(vYear.toString().substr(2, 2));
  } else {
    return date.getFullYear();
  }
}

/**
 * 阶梯 Echarts
 * @param {*} data
 * @param {*} chartId
 */
function updateStepChart(data, chartId) {
  let totalArr = [0]; //总量
  let decrease = []; //减少
  let increaseArr = []; //收入

  let data_last_child = data[data.length - 1];
  let data_first_child = data[0];

  let data_last_child_last = data_last_child[data_last_child.length - 1];
  let data_first_child_last = data_first_child[data_first_child.length - 1];

  let lastData = Number(data_last_child_last.replace(/,/, ""));
  let firstData = Number(data_first_child_last.replace(/,/, ""));

  let allArr = [];

  data.forEach(function (val, rowIndex) {
    if (rowIndex < data.length - 1) {
      let tdVal = Number(val[2].toString().replace(/,/, ""));
      if (rowIndex == 0) {
        decrease.push("-");
        increaseArr.push("-");
      } else {
        if (tdVal >= 0) {
          increaseArr.push(tdVal);
          decrease.push("-");
        } else {
          increaseArr.push("-");
          decrease.push(Number(String(tdVal).replace("-", "")));
        }
      }
    }
    if (rowIndex == 0) {
      allArr.push(Number(firstData));
    } else if (rowIndex == data.length - 1) {
      allArr.push(Number(lastData));
    } else {
      allArr.push("-");
    }
  });

  increaseArr.forEach(function (v, rowIndex) {
    if (rowIndex <= increaseArr.length - 2) {
      let increaseVal = increaseArr[rowIndex] == "-" ? 0 : increaseArr[rowIndex];
      let decreaseVal = decrease[rowIndex + 1] == "-" ? 0 : decrease[rowIndex + 1];
      let allVal = allArr[rowIndex] == "-" ? 0 : allArr[rowIndex];
      totalArr.push(totalArr[rowIndex] + increaseVal - decreaseVal + allVal);
    }
  });
  let minY = 0;
  if (firstData < lastData) {
    minY = Math.floor(firstData);
  } else {
    minY = Math.floor(lastData);
  }
  let zNumber = "";
  for (var i = 0; i < String(minY).length - 3; i++) {
    zNumber += "0";
  }
  minY = Number(String(String(minY).substring(0, 3) + zNumber)) - firstData;
  let totalData = {
    totalArr,
    decrease,
    increaseArr,
    allArr,
    minY,
  };
  console.log(totalData, "阶梯data");
  // this.renderBarEchart(data)

  let xData = [];

  data.forEach(function (val) {
    xData.push(val[0]);
  });

  stepEchart(totalData, xData, chartId);
}
//renderEntity echart 阶梯瀑布(公用)
function stepEchart(data, xAxisData, chartId) {
  let markLines = [];
  data.allArr.forEach(function (v, i) {
    if (i < data.totalArr.length && i != 0) {
      markLines.push([
        {
          symbol: "none",
          xAxis: i,
          yAxis: data.totalArr[i + 1],
        },
        {
          symbol: "none",
          xAxis: i + 1,
          yAxis: data.totalArr[i + 1],
        },
      ]);
    } else {
      markLines.push([
        {
          symbol: "none",
          xAxis: i,
          yAxis: v,
        },
        {
          symbol: "none",
          xAxis: i + 1,
          yAxis: v,
        },
      ]);
    }
  });
  // console.log(markLines, "markLine");
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (params) {
        // debugger;
        var tar;
        if (params.length === 1) {
          tar = params[0];
        } else {
          if (params[3].value !== "-") {
            tar = params[3];
          } else {
            if (params[1].value !== "-") {
              tar = params[1];
            } else {
              tar = params[2];
            }
          }
        }
        // return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
        return tar.name + " : " + tar.value;
      },
      show: false,
    },
    //   legend: {
    //       data: ['支出', '收入']
    //   },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      splitLine: { show: false },
      axisLabel: {
        interval: 0,
        rotate: 40,
      },
      data: xAxisData,
    },
    yAxis: {
      type: "value",
      name: "mRMB",
      splitLine: { show: false },
      // axisLabel: {
      //   formatter: "{value} k",
      // },
      // min: data.minY,
      min: Math.round(data.allArr[0] / 2),
    },
    series: [
      {
        name: "辅助",
        type: "bar",
        stack: "总量",
        itemStyle: {
          barBorderColor: "rgba(0,0,0,0)",
          color: "rgba(0,0,0,0)",
        },
        emphasis: {
          itemStyle: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
        },
        // barMaxWidth:20,
        data: data.totalArr,
      },
      {
        name: "收入",
        type: "bar",
        stack: "总量",
        label: {
          show: true,
          position: "top",
          formatter: function (params) {
            return format(params.data);
          },
        },
        color: "#8ac1ab",
        barMaxWidth: 30,
        // markLine:{
        //   data:markLines
        // },
        data: data.increaseArr,
      },
      {
        name: "支出",
        type: "bar",
        stack: "总量",
        // color: "#c0c0c0",
        color: "#EB6539",
        label: {
          show: true,
          position: "bottom",
          formatter: function (params) {
            return -format(params.data);
          },
        },
        data: data.decrease,
      },
      {
        name: "总计",
        stack: "总量",
        type: "bar",
        data: data.allArr,
        label: {
          normal: {
            show: true,
            position: "top",
            formatter: function (params) {
              return format(params.data);
            },
            // fontSize: 14
          },
        },
        color: "#00953a",
      },
    ],
  };
  // this.initEchart(chartId, option);
  initEchart_padding(chartId, option);
}

/**
 * 初始化 table
 * @param {*} tableName
 * @param {*} scrollYHeight
 * @param {*} leftColumns
 */
function initDataTable(tableName, scrollYHeight, leftColumns) {
  $(tableName).DataTable({
    destroy: true,
    bFilter: false, //是否启动过滤、搜索功能
    bLengthChange: false, //开启一页显示多少条数据的下拉菜单，允许用户从下拉框(10、25、50和100)，注意需要分页(bPaginate：true)。
    paging: false,
    // autoWidth: false,
    order: [], //首次渲染不排序
    bSort: false, //是否启动各个字段的排序功能
    info: false,
    scrollY: scrollYHeight,
    scrollCollapse: true,
    scrollX: true,
    autowidth: true,
    fixedColumns: { leftColumns: leftColumns },
    language: {
      sEmptyTable: getLanguage("noData"),
    },
  });
}
// pdf 打印
$(function () {
  // 加载下载excel插件
  //设置样式
  var styleHtml =
    "<style>" +
    ".list_table td,.list_table th{" +
    "padding:0.2rem 0.4rem}" +
    ".yeAk_input_style{padding: 0 0.5rem;border-width: 1px;border: 1px solid #333;border-bottom: 1px solid !important;" +
    " border-top: 1px solid !important;min-width: 20px;background: #fff !important;color: #333!important;text-align: right;}" +
    "@page {size: landscape;}" +
    ".border-right{border-right: 1px solid #ddd}" +
    "</style>";
  $("head").append(styleHtml);
  var exportStr = '<span class="breadcrumb-elements-item cursor-pointer" onclick="PdfPrintDiv()">\n  <i class="icon-download4 mr-2"></i>\n  <span class="">打印</span>\n</span>';
  $("#refreshBoard").before(exportStr);
  $(".sidebar-main-toggle").addClass("demo-chartDraw");
});
function PdfPrintDiv() {
  $(".breadcrumb-line,.sidebar.sidebar-main,.navbar-dark").addClass("d-none");
  $(window).trigger("resize");
  //实现打印
  //   设置页面横向
  setTimeout(function () {
    var style = document.createElement("style");
    style.innerHTML = "@page{size: landscape}";
    window.document.head.appendChild(style);
    var bdhtml = window.document.body.innerHTML,
      sprnstr = "<!--startprint-->",
      eprnstr = "<!--endprint-->";
    var prnhtml = bdhtml.substr(bdhtml.indexOf(sprnstr) + 17);
    prnhtml = prnhtml.substring(0, prnhtml.indexOf(eprnstr));
    window.document.body.innerhtml = prnhtml;
    window.print();
    //完成后不隐藏
    $(".breadcrumb-line,.sidebar.sidebar-main,.navbar-dark").removeClass("d-none");
  }, 300);
}

// 创建一个table div 存放 table
$(function () {
  // //创建一个div
  // var div = document.createElement("div");

  // //为div创建属性class = "test"
  // var divattr = document.createAttribute("id");
  // divattr.value = "table-fork";

  // //把属性class = "test"添加到div
  // div.setAttributeNode(divattr);

  // var style = document.createAttribute("style");
  // div.setAttributeNode(style);
  // div.style.display = "none";
  let table_fork = `
    <div id="table-fork" style="display:none">
      <div id='r5'>
        <div id='key1'></div>
        <div id='key2'></div>
        <div id='key3'></div>
        <div id='key4'></div>
        <div id='key5'></div>
        <div id='key6'></div>
      </div>
      <div id='r6'>
        <div id='key1'></div>
        <div id='key2'></div>
        <div id='key3'></div>
        <div id='key4'></div>
        <div id='key5'></div>
        <div id='key6'></div>
      </div>
    </div>
  `;
  $("body").append(table_fork);
});

//下载table
function downloadTable_detail(id, name) {
  $("#" + id)
    .find("#total-table-part")
    .tableExport({
      type: "xlsx",
      escape: "false",
      fileName: name,
      // ignoreColumn:ignorArr
    });
}

function downloadTable_fork(piece, tab, name) {
  $(`#table-fork ${piece} ${tab}`).children().tableExport({
    type: "xlsx",
    escape: "false",
    fileName: name,
    // ignoreColumn:ignorArr
  });
}

$(function () {
  $("body").append('<script src="../js/plugins/xlsx.full.min.js"></script>');
});
