const r1c1 = () => {
  let cardName = "r1c1";
  let cardName_mini = "r1c1_mini";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find(".card-header").css("display", "none");
  cfs.card.body.getDom(cardName).css("padding", "0");

  // echart div高度
  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  $(echartDom).css("background-color", "#26a69a");

  // 增加容器dom
  let Wrapper = `
  <div style="height:50%;padding:1rem;color:white">
  <div class="d-flex">
  <div>
    <span class="font-size-sm opacity-75 mr-2">2020 实际</span>
    <span style="font-size: 1.3rem">18.08%</span>
  </div>
  <span class="badge bg-teal-800 badge-pill align-self-center ml-auto">14.55%</span>
</div>
<div class="d-flex">
  <div>
    <span class="font-size-sm opacity-75 mr-2">2021 预算</span>
    <span style="font-size: 1.3rem">18.27%</span>
  </div>
  <span class="align-self-center ml-auto" style="font-size: 1.3rem">CAR</span>
</div>
  </div>
    <div id="${cardName_mini}" style="width:100%;position: absolute;bottom: 0;height: 50%"></div>
  `;

  echartDom.html(Wrapper);

  let miniEchartDom = cfs.card.body.getDom(cardName).find(`#${cardName_mini}`);

  let option = {
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
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
        name: "直接访问",
        type: "line",
        itemStyle: {
          normal: {
            color: "rgba(255,255,255,0.5)",
          },
        },
        data: [200, 300, 200, 334, 390, 330, 220, 300, 200, 334, 390, 300],
      },
    ],
  };

  echartDom.click(() => {
    toPage(1);
  });
  echartDom.css("cursor", "pointer");

  if (!Cus_echarts[cardName_mini]) {
    Cus_echarts[cardName_mini] = cfs.echarts.init(miniEchartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName_mini], option);
  }
};

const r1c2 = () => {
  let cardName = "r1c2";
  let cardName_mini = "r1c2_mini";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find(".card-header").css("display", "none");
  cfs.card.body.getDom(cardName).css("padding", "0");

  // echart div高度
  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  $(echartDom).css("background-color", "#ec407a");

  // 增加容器dom
  let Wrapper = `
    <div style="height:50%;padding:1rem;color:white">
    <div class="d-flex">
    <div>
      <span class="font-size-sm opacity-75 mr-2">2020 实际</span>
      <span style="font-size: 1.3rem">5.40%</span>
    </div>
    <span class="badge bg-teal-800 badge-pill align-self-center ml-auto">+5.59%</span>
  </div>
  <div class="d-flex">
    <div>
      <span class="font-size-sm opacity-75 mr-2">2021 预算</span>
      <span style="font-size: 1.3rem">6.10%</span>
    </div>
    <span class="align-self-center ml-auto" style="font-size: 1.3rem">ROA</span>
  </div>
    </div>
    <div id="${cardName_mini}" style="width:100%;position: absolute;bottom: 0;height: 50%"></div>
  `;

  echartDom.html(Wrapper);

  let miniEchartDom = cfs.card.body.getDom(cardName).find(`#${cardName_mini}`);

  let option = {
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
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
        name: "直接访问",
        type: "line",
        itemStyle: {
          normal: {
            color: "rgba(255,255,255,0.5)",
          },
        },
        data: [200, 300, 200, 334, 390, 330, 220, 300, 200, 334, 390, 300],
      },
    ],
  };

  if (!Cus_echarts[cardName_mini]) {
    Cus_echarts[cardName_mini] = cfs.echarts.init(miniEchartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName_mini], option);
  }
};

const r1c3 = () => {
  let cardName = "r1c3";
  let cardName_mini = "r1c3_mini";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  headDom.find(".card-header").css("display", "none");
  cfs.card.body.getDom(cardName).css("padding", "0");

  // echart div高度
  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  $(echartDom).css("background-color", "#29b6f6");

  // 增加容器dom
  let Wrapper = `
  <div style="height:50%;padding:1rem;color:white">
  <div class="d-flex">
  <div>
    <span class="font-size-sm opacity-75 mr-2">2020 实际</span>
    <span style="font-size: 1.3rem">11.01%</span>
  </div>
  <span class="badge bg-teal-800 badge-pill align-self-center ml-auto">11.02%</span>
</div>
<div class="d-flex">
  <div>
    <span class="font-size-sm opacity-75 mr-2">2021 预算</span>
    <span style="font-size: 1.3rem">11.06%</span>
  </div>
  <span class="align-self-center ml-auto" style="font-size: 1.3rem">ROE</span>
</div>
  </div>
    <div id="${cardName_mini}" style="width:100%;position: absolute;bottom: 0;height: 50%"></div>
  `;

  echartDom.html(Wrapper);

  let miniEchartDom = cfs.card.body.getDom(cardName).find(`#${cardName_mini}`);

  let option = {
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
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
        name: "直接访问",
        type: "line",
        itemStyle: {
          normal: {
            color: "rgba(255,255,255,0.5)",
          },
        },
        data: [200, 300, 200, 334, 390, 330, 220, 300, 200, 334, 390, 300],
      },
    ],
  };

  if (!Cus_echarts[cardName_mini]) {
    Cus_echarts[cardName_mini] = cfs.echarts.init(miniEchartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName_mini], option);
  }
};

const r2c1 = () => {
  let cardName = "r2c1";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  let option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["PPOP增长%", "净利增长%", "贷款增长%"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "13%",
      top: "12%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      // boundaryGap: false,
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        show: true,
        // formatter: '{value} %'//以百分比显示
        formatter: function (value, index) {
          return value * 100 + "%";
        },
      },
    },
    series: [
      {
        name: "PPOP增长%",
        type: "line",
        stack: "1",
        data: [0.082, 0.0532, 0.0301, 0.0534, 0.049, 0.033, 0.052, 0.0301, 0.0534, 0.049, 0.082, 0.0532],
      },
      {
        name: "净利增长%",
        type: "line",
        stack: "2",
        data: [0.08, 0.0732, 0.0901, 0.0934, 0.129, 0.133, 0.132, 0.0934, 0.129, 0.133, 0.132, 0.132],
      },
      {
        name: "贷款增长%",
        type: "line",
        stack: "3",
        data: [0.079, 0.0832, 0.0801, 0.0834, 0.129, 0.093, 0.092, 0.0801, 0.0834, 0.129, 0.093, 0.092],
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

const r2c2 = () => {
  let cardName = "r2c2";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  echartDom.css("overflow-y", "auto");

  let totalData = [
    ["主要经营指标", "基本标准", "良好银行标准", "去年实际", "全年预算", "当前滚动预算"],
    ["备付金比例 ", "0.0%", "5.0%", "20.0%", "20.0%", "20.0%"],
    ["存贷比例", "75.0%", "75.0%", "57.2%", "49.1%", "49.7%"],
    ["拨备覆盖率", "150.0%", "150.0%", "278.9%", "278.9%", "278.9%"],
    ["不良贷款比例", "15.0%", "7.0%", "1.0%", "1.0%", "1.0%"],
    ["资本充足率（CAR)", "8.0%", "8.0%", "26.0%", "11.0%", "26.0%"],
    ["核心资本充足率", "6.0%", "6.0%", "15.5%", "160.9%", "160.9%"],
    ["资本利润率(ROE)", "11.0%", "20.0%", "18.8%", "18.8%", "18.8%"],
    ["资产利润率(ROA)", "0.6%", "1.0%", "1.3%", "1.3%", "1.3%"],
    ["成本收入比", "45.0%", "40.0%", "34.0%", "42.0%", "45.0%"],
    ["利润增长率", "0.0%", "15.0%", "4.0%", "4.0%", "4.0%"],
  ];

  echartDom.html("");

  let table_html_start = `<table id="table_r2c2" class="table table-hover datatable-highlight dataTable no-footer table-striped">`;

  table_html_start += `<thead><tr>`;
  totalData[0].forEach((val, i) => {
    table_html_start += `<th style="text-align: center">${val}</th>`;
  });
  table_html_start += `</tr></thead>`;
  table_html_start += `<tbody>`;
  totalData.forEach((val, i) => {
    if (i > 0) {
      table_html_start += `<tr>`;
      val.forEach((cVal, j) => {
        if (j > 2) {
          let currentVal = parseInt(cVal.replace("%", ""));
          let firstVal = parseInt(val[1].replace("%", ""));
          let secondVal = parseInt(val[2].replace("%", ""));
          table_html_start += `
            <td class="item">
              <div style="width:100px;margin-right: auto;margin-left: auto;" >
                <span
                  style="
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    margin-right: 10px;
                    background-color: ${currentVal >= secondVal ? "green" : currentVal < firstVal ? "red" : "yellow"};
                  "
                ></span>
                <span style="">${cVal}</span>
              </div>
            </td>
            `;
        } else {
          table_html_start += `<td style="text-align: center">${cVal}</td>`;
        }
      });
      table_html_start += `</tr>`;
    }
  });
  table_html_start += `</tbody>`;
  table_html_start += `</table>`;

  echartDom.html(table_html_start);

  $("#table_r2c2").DataTable({
    destroy: true,
    bFilter: false, //是否启动过滤、搜索功能
    bLengthChange: true, //开启一页显示多少条数据的下拉菜单，允许用户从下拉框(10、25、50和100)，注意需要分页(bPaginate：true)。
    paging: false,
    stripeClasses: ["odd"],
    processing: false, //隐藏加载提示,自行处理
    serverSide: false, //开启后台分页
    bAutoWidth: false, //是否自适应宽度
    bPaginate: false, //是否显示（应用）分页器
    bSort: false, //是否启动各个字段的排序功能
    info: false,
    language: {
      // "sEmptyTable":"暂无数据"
    },
    oLanguage: {
      sEmptyTable: getLanguage("noData"),
    },
    columnDefs: [{ width: "100px", targets: 1 }],
  });
};

const r3c1 = () => {
  let cardName = "r3c1";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  // headDom.find('.card-header').css('display', 'none');

  cfs.echarts.correctHeight(cardName);

  let option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["40%", "70%"],
        data: [
          { value: 65, name: "利息收入" },
          { value: 35, name: "非利息收入" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          formatter: function (params) {
            return params.percent + "%";
          },
        },
        labelLine: {
          show: true,
        },
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

const r3c2 = () => {
  let cardName = "r3c2";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  // headDom.find('.card-header').css('display', 'none');

  cfs.echarts.correctHeight(cardName);

  let option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "70%",
        data: [
          { value: 1048, name: "公司金融" },
          { value: 735, name: "零售金融" },
          { value: 580, name: "金融市场" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          formatter: function (params) {
            return params.percent + "%";
          },
        },
        labelLine: {
          show: true,
        },
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

const r3c3 = () => {
  let cardName = "r3c3";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  // headDom.find('.card-header').css('display', 'none');

  cfs.echarts.correctHeight(cardName);

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: ["花都支行", "荔湾支行", "天河支行", "黄埔支行", "白云支行"],
    },
    series: [
      {
        name: "支行收入排名",
        type: "bar",
        data: [150, 190, 250, 270, 660, 900],
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

const r4c1 = () => {
  let cardName = "r4c1";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  // headDom.find('.card-header').css('display', 'none');

  cfs.echarts.correctHeight(cardName);

  let option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["40%", "70%"],
        data: [
          { value: 1048, name: "已计划" },
          { value: 735, name: "已核销" },
          { value: 580, name: "结余备用" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          formatter: function (params) {
            return params.percent + "%";
          },
        },
        labelLine: {
          show: true,
        },
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

const r4c2 = () => {
  let cardName = "r4c2";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");

  let xDataHead = [202101, 202102, 202103, 202104, 202105, 202106, 202107, 202108, 202109, 202110, 202111, 202112];
  let chartData = [
    [1219, 1269, 1319, 1249, 1179, 1229, 1279, 1209, 1229, 1279, 1329, 1379],
    [482.8702346, 432.8702346, 482.8702346, 412.8702346, 342.8702346, 392.8702346, 442.8702346, 372.8702346, 392.8702346, 442.8702346, 492.8702346, 542.8702346],
    [644.134911, 694.134911, 744.134911, 674.134911, 604.134911, 654.134911, 704.134911, 634.134911, 654.134911, 704.134911, 754.134911, 804.134911],
    [897, 947, 997, 927, 857, 907, 957, 887, 907, 957, 1007, 1057],
    [264.2289747, 184.2289747, 204.2289747, 184.2289747, 184.2289747, 184.2289747, 384.2289747, 244.2289747, 284.2289747, 384.2289747, 184.2289747, 204.2289747],
  ];
  let aMoney = [21.0, 25.0, 18.0, 19.0, 31.0, 33.0, 28.0, 31.0, 19.0, 24, 23, 18];
  let lenged = ["租赁费", "商场费用", "广告宣传", "薪酬福利", "其他"];
  let seriesArr = [];
  let colors = ["rgb(86,154,218)", "rgb(165,165,165)", "rgb(235,125,49)", "rgb(81,107,145)", "rgb(255,192,0)", "#75d874", "#e0bc78", "#dc77dc", "#72b362"];

  lenged.forEach(function (v, i) {
    seriesArr.push({
      name: v,
      type: "bar",
      stack: "总量",
      // barWidth:25, //柱状图宽度
      barMaxWidth: 30,
      label: {
        normal: {
          show: false,
          position: "insideRight",
        },
      },
      data: chartData[i],
      itemStyle: {
        normal: {
          color: colors[i],
        },
      },
    });
  });

  seriesArr.push({
    name: "费率",
    type: "line",
    yAxisIndex: 1,
    color: "#ED7D31",
    data: aMoney,
    smooth: false,
  });

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow",
      },
      formatter: function (params) {
        let html = "";
        if (params.length > 0) {
          for (var int = 0; int < params.length; int++) {
            html += params[int].axisValue + "<br>" + params[int].marker + params[int].seriesName + "：" + format(params[int].data.toFixed(4)) + "<br>";
          }
        }
        return html;
      },
    },
    legend: {
      data: ["租赁费", "商场费用", "广告宣传", "薪酬福利", "其他", "费率"],
      x: "center",
      y: "top",
      orient: "horizontal",
    },
    grid: {
      left: "2%",
      right: 75,
      bottom: "5%",
      containLabel: true,
    },
    // dataZoom: [
    // 	{
    // 		// startValue: xDataHead[0]
    // 		filterMode: 'filter',
    // 		startValue: 0,
    // 		endValue: Number(xDataHead.length / 3),
    // 	},
    // 	{
    // 		type: 'slider',
    // 	},
    // ],
    yAxis: [
      {
        type: "value",
        name: getLanguage("money2") + "：千元",
        boundaryGap: [0, 0.01],
        axisLabel: {
          formatter: function (val) {
            return format(val);
          },
          interval: 0,
          rotate: 40,
        },
      },
      {
        type: "value",
        min: 0,
        // max: 8.22,
        // interval: 25,
        axisLabel: {
          formatter: "{value} %",
        },
      },
    ],
    xAxis: {
      type: "category",
      data: xDataHead,
      axisLabel: {
        // formatter:(val)=>{
        //     return val/1000
        // },
        interval: 0,
        rotate: 40,
      },
    },
    series: seriesArr,
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
};

const toPage = (sign, area) => {
  let urls;
  let childProjectCode = showDashBoard.globalCurrentPovObj;
  console.log(childProjectCode);

  if (_.isUndefined(area)) {
    if (sign === 1) {
      urls = `../dataSheet/dataSheet.html?appid=97&isLayer=true&param1=GRDEAT75VRFP2P&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=GRD&elementId=GRDEAT75VRFP2P&folderId=8784346&elementTitle=annual_target_cal&pageName=annual_target_cal`;
    }
  }

  parent.layer.open({
    type: 2,
    title: false,
    area: ["100%", "100%"],
    move: false,
    resize: false,
    scrollbar: false,
    content: urls,
    closeBtn: 0,
  });
};

//extrajs全局方法
var Cus_theme = "westeros";
var Cus_echarts = {};
var cfs = {
  //请求后端数据
  request: {
    /*通用同步请求
			code为200返回结果在.res内，否则结果在.err内（部分业务错误也会强制返回500或999）
			type: POST/GET/PUT/DELETE
			json: TRUE为application/json FALSE为application/x-www-form-urlencoded
			returnAll：TRUE返回所有结果, FALSE返回.resultObj（有时候结果在resultList里）
		*/
    common: {
      sendRequest: function (url, type, paramObj, json = false, returnAll = false) {
        var data = json ? JSON.stringify(paramObj) : paramObj;
        var contentType = "application/" + (json ? "json" : "x-www-form-urlencoded");
        var resObj = {};
        var err = "";
        $.ajax({
          url: url,
          type: type,
          contentType: contentType,
          async: false,
          data: data,
          success: function (res) {
            if (returnAll) {
              resObj.res = res;
            } else {
              if (res.resultCode === 0) {
                resObj.res = res.resultObj;
              }
            }
          },
          error: function (XMLHttpRequest) {
            resObj.err = {};
            resObj.err.Message = XMLHttpRequest.responseJSON.Message.substr(0, 200) || XMLHttpRequest.statusText.substr(0, 200);
          },
        });
        return resObj;
      },
    },
    cube: {
      //script: Year{2020}->Period{6}->Version{Working}...
      queryCubeData: function (cubeName, script) {
        var url = Api.SeeplnCube + "cube/queryCubeData";
        paramObj = $.extend(
          {
            cube_name: cubeName,
            script: script,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true);
      },
      //通用保存方法
      save: function (sheetDatas) {
        var url = Api.SeeplnCube + "spreadsheet/save";
        paramObj = $.extend(
          {
            sheetDatas: sheetDatas,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true);
      },
    },
    foundation: {
      //根据user权限获取维度，最多2层
      getAccessDimensionMemberLevel: function (dimName, exp = "", name = "#root", id = "1", searchValue = "") {
        let url = Api.seepln + "dimension/getAccessDimensionMemberLevel";
        paramObj = $.extend(
          {
            dimensionName: dimName,
            name: name,
            dimensionExpression: exp,
            id: id,
            searchValue: searchValue,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false);
      },
      //根据表达式查询，不分权限
      selectDimensionMemberByNameFunction: function (dimensionMemberNames) {
        let url = Api.seepln + "dimension/selectDimensionMemberByNameFunction";
        paramObj = $.extend(
          {
            dimensionMemberNames: dimensionMemberNames,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false);
      },
      //执行自定义sql语句
      runComm: function (comm) {
        var url = Api.seepln + "sqlparser/run/post";
        paramObj = $.extend(
          {
            sql: comm,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false, true);
      },
    },
    python: {
      //同步调用python
      web: function (pyName, params) {
        var url = Api.python + "start/web";
        paramObj = $.extend(
          {
            pyName: pyName,
            params: params,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true, true);
      },
    },
  },
  card: {
    //dashboard单个卡片方法 bootstrap4图标：http://easyview.seepln.com/Limitless_2.0.1/Bootstrap%204/Template/layout_1/LTR/material/full/icons_icomoon.html
    head: {
      //获取卡片表头jquery dom
      getDom: function (cardName) {
        return $("#" + cardName);
      },
      //删除卡片表右边所有元素
      removeButton: function (dom) {
        dom.find(".header-elements").html("");
      },
      addSelectButton: function (carHead, buttonInfo) {
        var btn = $(`<div class="list-icons ${buttonInfo.id}">
						<label for="" style="width: 60px;margin: 0;margin-bottom:-4px">${buttonInfo.text}</label>
						<select
							class="form-control select selectXm"
							id="${buttonInfo.id}"
							data-fouc
						>
						</select>
					</div>`);
        let sHtml = "";
        buttonInfo.list.forEach(function (v) {
          sHtml += "<option value='" + v.key + "'>" + v.value + "</option>";
        });
        carHead.find(".header-elements").prepend(btn);
        $("#" + buttonInfo.id).html(sHtml);
        $(".select").select2({ minimumResultsForSearch: -1 });
        return btn;
      },
      /*添加下拉按钮
				buttonInfo: {
					id: "UploadButton",
					text: "上传数据",
					icon: "mi-file-upload",
					list: ["增量上传", "全量上传"]
				},
			*/
      addDropdownButton: function (carHead, buttonInfo) {
        var list = buttonInfo.list;
        for (var i = 0; i < list.length; i++) {
          list[i] = '<a index = "' + i + '" class="dropdown-item" href="#">' + list[i] + "</a>";
        }
        var btn = $(
          '<div id="' +
            buttonInfo.id +
            '" class="dropdown breadcrumb-elements-item mr-2 cursor-pointer">' +
            '<a class="dropdown-toggle" data-toggle="dropdown"><i class="' +
            buttonInfo.icon +
            ' icon text-default mr-1"></i>' +
            '<span class="iconSpan loadDes">' +
            buttonInfo.text +
            "</span></a>" +
            '<div class="dropdown-menu" style="min-width:100px">' +
            list.join("") +
            "</div></div>"
        );
        carHead.find(".header-elements").append(btn);
        if (buttonInfo.id.indexOf("_disable") == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + "_disable";
          var btn_disable = this.addDropdownButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.find(".dropdown-menu").remove();
          btn_disable.hover(function () {
            this.style.cursor = "not-allowed";
          });
        }
        return btn;
      },
      /*添加普通按钮
				buttonInfo: {
					id: "UploadButton",
					text: "上传数据",
					icon: "mi-file-upload",
				},
			*/
      addButton: function (carHead, buttonInfo) {
        var btn = $(
          '<a class="breadcrumb-elements-item mr-2 cursor-pointer" id="' +
            buttonInfo.id +
            '"><div class="customLoader mr-1" style="margin-bottom: 2px; display: none;"></div><i class="' +
            buttonInfo.icon +
            ' icon text-default mr-1"></i><span class="iconSpan loadDes">' +
            buttonInfo.text +
            "</span></a>"
        );
        carHead.find(".header-elements").append(btn);
        if (buttonInfo.id.indexOf("_disable") == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + "_disable";
          var btn_disable = this.addButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.hover(function () {
            this.style.cursor = "not-allowed";
          });
        }
        return btn;
      },
      //点击后调用防止反复执行
      disableButton: function (btn) {
        btn.hide();
        $("#" + btn.attr("id") + "_disable").show();
      },
      //恢复按钮可用
      enableButton: function (btn) {
        $("#" + btn.attr("id") + "_disable").hide();
        btn.show();
      },
    },
    body: {
      //获取卡片内容jquery dom
      getDom: function (cardName) {
        return $("#" + cardName).find(".card-body");
      },
      //添加文件上传卡片
      addFileTag: function (cardName, text) {
        var dom = $(
          '<div status="-1" filename="' +
            text +
            '" style="margin: 1.25rem; padding: 10px;display: inherit; background-color:#f7f7f7;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;">' +
            '<span style="margin-right: 15px;">' +
            text +
            "</span>" +
            '<i class="icon-bin delete" onclick="cfs.card.body.deleteFileTag(this)" style="margin-right: 10px;cursor: pointer;"></i>' +
            '<div class="customLoader" style="margin-bottom: 2px;display: none;"></div><span class="infotext" style="margin-left: 5px; margin-right: 5px; display: none;"></span>' +
            '<i data-trigger="hover" data-toggle="popover" data-placement="right" data-content="" class="infobtn icon-info22" style="margin-right: 10px;cursor: pointer; display: none;"></i>'
        );
        this.getDom(cardName).append(dom);
        return dom;
      },
      //删除文件上传卡片
      deleteFileTag: function (dom) {
        dom.parentElement.remove();
      },
    },
  },
  data: {
    //数据处理
    spreadjs: {
      //从excel二维表生成cube.save方法的sheetData（静态表格式）
      createSheetData: function (dimList, dimMap, dataTables, startIndex = 1, maxLength = 10000) {
        var sheetDataObj = { rowDatas: [] };
        if (dataTables == undefined || Object.keys(dataTables).length == 0) return sheetDataObj;
        //准备表头所在列和维度名的map
        var colMap = {};
        for (var i = 0; i < dataTables[0].length; i++) {
          var dimName = dimMap[dataTables[0][i].value] || dataTables[0][i].value;
          if (dimMap.indexOf(dimName) != -1) {
            colMap[i] = dimName;
          }
        }
        var rowDatasArr = [];
        for (var i = startIndex; i < startIndex + maxLength; i++) {
          if (dataTables[i]) {
            var arr = dataTables[i];
            var columnDimensionMemberMap = {};
            for (var c in colMap) {
              var val = arr[c].value;
              columnDimensionMemberMap[colMap[c]] = val;
            }
            rowDatasArr.push({ columnDimensionMemberMap: columnDimensionMemberMap });
          }
        }
        sheetDataObj.rowDatas = rowDatasArr;
        return sheetDataObj;
      },
    },
  },
  //echarts
  echarts: {
    init: function (dom, theme, option) {
      var ec = echarts.init(dom.get(0), theme);
      window.addEventListener("resize", function () {
        ec.resize();
      });
      this.refresh(ec, option);
      return ec;
    },
    refresh: function (ec, option) {
      ec.clear();
      ec.setOption(option);
    },
    correctHeight: function (cardName) {
      let echartDom = $("#" + cardName)
        .find(".card-body")
        .find(".echart");
      let cardBodyDom = $("#" + cardName).find(".card-body");

      let _height = $(cardBodyDom).height();
      $(echartDom).height(_height);
    },
    mobileHeight: function (cardName, height) {
      let cardDom = $("#" + cardName).parent();
      $(cardDom).height(height);
      let echartDom = $("#" + cardName)
        .find(".card-body")
        .find(".echart");
      let _height = $(echartDom).parent().height();
      $(echartDom).height(_height);
    },
  },
  //通用方法
  common: {
    //ajax要用的user属性
    userParams: {
      app: Userinfo.app,
      app_id: Userinfo.app,
      token: Userinfo.token,
      user_id: Userinfo.user_id,
      creater: Userinfo.user_id,
      tenant_code: Userinfo.tenant_code,
      tenantCode: Userinfo.tenant_code,
      language: Userinfo.language,
      description: Userinfo.language,
    },
    //是否对话框，按是后执行thenEvent
    dialogBox: function (text, thenEvent) {
      swal({
        title: text,
        text: "",
        type: "info",
        showCancelButton: true,
        confirmButtonText: getLanguage("sure"),
        cancelButtonText: getLanguage("cancel"),
      }).then(function (result) {
        if (result.value) {
          thenEvent();
        }
      });
    },
    //excel的5位纯数字日期格式转yyyy-mm-dd
    valueToDate: function (value) {
      var n = Number(value.split(".")[0]);
      var date = new Date("1900-1-1");
      date.setDate(date.getDate() + n - 2);
      return date.format();
    },
  },
  //导出文件
  export: {
    /* 导出文件到指定格式 数据大用csv
			fileName：文件名不带格式
			dataJson：原始数据 eg. [{Entity: "E001", Year:"2020", Period:"9"},{Entity: "E001", Year:"2020", Period:"10"}]
			titleArr：导出的列名: eg. [Entity, Year]
		*/
    toCsv: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      var titleObj = dataJson[0];
      titleArr = titleArr || Object.keys(titleObj);
      var titleStr = titleArr.join("\t,");
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          var cell = dataJson[i][titleArr[j]] || "";
          if (cell.toString().indexOf(",") > -1) cell = '"' + cell + '"';
          rowArr.push(cell);
        }
        dataArr.push(rowArr.join("\t,"));
      }
      var dataStr = titleStr + "\n" + dataArr.join("\n");
      var blob = new Blob([dataStr], { type: "text/plain;charset=utf-8" });
      //解决中文乱码问题
      blob = new Blob([String.fromCharCode(0xfeff), blob], { type: blob.type });
      this.download(blob, fileName + ".csv");
    },
    toXls: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      var titleObj = dataJson[0];
      titleArr = titleArr || Object.keys(titleObj);
      var titleStr = "<tr><td>" + titleArr.join("</td><td>") + "</td></tr>";
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          rowArr.push("<td>" + (dataJson[i][titleArr[j]] || "") + "</td>");
        }
        dataArr.push("<tr>" + rowArr.join("") + "</tr>");
      }
      var dataStr = "<table>" + titleStr + dataArr.join("") + "</table>";
      var uri = "data:application/vnd.ms-excel;base64,";
      var excelHtml = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
                xmlns:x="urn:schemas-microsoft-com:office:excel" 
                xmlns="http://www.w3.org/TR/REC-html40">
                <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
                <x:Name>${fileName}</x:Name>
                <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
                </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
                </head><body>${dataStr}</body></html>`;
      //下载模板
      function base64(s) {
        return window.btoa(unescape(encodeURIComponent(s)));
      }
      var blob = new Blob([excelHtml], {
        type: "application/vnd.ms-excel",
      });
      this.download(blob, fileName + ".xls");
    },
    toXlsx: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      //
      var sheet = XLSX.utils.json_to_sheet(dataJson);
      var blob = this.sheet2blob(sheet, fileName.substr(0, 30));
      this.download(blob, fileName + ".xlsx");
    },
    sheet2blob: function (sheet, sheetName) {
      sheetName = sheetName || "sheet1";
      var workbook = {
        SheetNames: [sheetName],
        Sheets: {},
      };
      workbook.Sheets[sheetName] = sheet;
      // 生成excel的配置项
      var wopts = {
        bookType: "xlsx", // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: "binary",
      };
      var wbout = XLSX.write(workbook, wopts);
      var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
      // 字符串转ArrayBuffer
      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
      }
      return blob;
    },
    download: function (blob, fileFullName) {
      var btn = document.createElement("a");
      btn.href = URL.createObjectURL(blob);
      btn.download = fileFullName;
      btn.style = "display: none;";
      document.body.appendChild(btn);
      btn.click();
      document.body.removeChild(btn);
    },
  },
};
