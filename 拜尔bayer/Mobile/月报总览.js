// 渲染 EChart 的通用方法
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

function Chart_R1C1(data, params) {
  console.log("function Chart_R1C1");
  let componentId = params.componentId;
  let pythonData = JSON.parse(data);
  let language = pythonData.languagechoice;
  let _height = parseInt($("#chart-" + componentId).height());
  let option = {
    toolbox: {
      show: true,
      feature: { saveAsImage: { show: true } },
    },
    legend: { show: false },
    grid: {
      left: "20%",
      right: "15%",
      top: 0,
      bottom: 140,
    },
    xAxis: { show: false },
    yAxis: {
      show: true,
      data: pythonData.Header,
      inverse: true,
      axisLine: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 15,
      },
    },
    series: [
      {
        name: "ytd_data",
        type: "bar",
        data: pythonData.YTD,
        barWidth: parseInt(((_height - 140) * 0.85) / 6),
        itemStyle: {
          normal: {
            show: true,
            barBorderRadius: parseInt(((_height - 140) * 0.85) / 12),
            color: function (params) {
              var num = pythonData.Color.length;
              return pythonData.Color[params.dataIndex % num];
            },
          },
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: function (data) {
              return format((data.data / pythonData.Unit.divisor).toFixed(pythonData.Unit.fix)) + " (" + pythonData.Unit.unit + ")";
            },
          },
        },
      },
      {
        name: "fy_data",
        type: "bar",
        data: pythonData.FullYear,
        barWidth: parseInt((_height - 140) / 6),
        barGap: -1.1,
        label: {
          normal: {
            show: true,
            position: "right",
            color: "#000000",
            formatter: function (data) {
              return format((data.data / pythonData.Unit.divisor).toFixed(pythonData.Unit.fix));
            },
          },
        },
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#000000",
            borderWidth: 1,
            barBorderRadius: parseInt((_height - 140) / 18),
          },
        },
      },
    ],
    graphic: [
      {
        type: "group",
        left: "center",
        bottom: 10,
        children: [
          {
            type: "text",
            left: "center",
            bottom: 10,
            style: {
              fill: "#333",
              text: ["VS " + language[0], "VS " + language[1], language[2], "", language[3], language[4], language[5]].join("\n"),
              font: "bold 15px Microsoft YaHei",
            },
          },
          {
            type: "text",
            left: 120,
            bottom: 10,
            style: {
              fill: "#333",
              text: [
                pythonData.CY_PY + "%",
                pythonData.CY_Target + "%",
                pythonData.YTD_Target + "%",
                "",
                pythonData.PY_Actual + "%",
                pythonData.CY_Target + "%",
                pythonData.CY_Actual + "%",
              ].join("\n"),
              font: "15px Microsoft YaHei",
              textAlign: "right",
            },
          },
          {
            type: "text",
            left: -200,
            bottom: 10,
            style: {
              fill: "#333",
              text: [language[5], "", language[6], "", language[7], "", ""].join("\n"),
              font: "bold 15px Microsoft YaHei",
              textAlign: "right",
            },
          },
        ],
      },
    ],
  };

  // 手机端
  if (getRequest().isView == "mobile") {
    mobileHeight("Chart_R1C1", 600);

    let cardBodyDom = $("#Chart_R1C1").find(".card-body");
    cardBodyDom.css("padding", "0");

    let echartDom = $("#Chart_R1C1").find(".card-body").find(".echart");
    echartDom.height(cardBodyDom.height());

    let htmlDom = `
      <div id="Chart_R1C1_1">
      </div>
      <div id="Chart_R1C1_2">
      </div>
      <div id="Chart_R1C1_3">
      </div>
    `;
    echartDom.html(htmlDom);

    let Chart_R1C1_1_dom = "";
    pythonData.Header.forEach((val, i) => {
      let arr = [pythonData.PY_Actual, pythonData.CY_Target, pythonData.CY_Actual];
      let html = `
      <div class="mx-2 mb-3 mt-2">
        <div class="d-flex justify-content-start mb-1">
          <div class="d-flex justify-content-between" style="height: 17px;width:75%">
            <div>${val}</div>
            <div style="font-weight: 300;color:${pythonData.Color[i]}">
              ${(pythonData.YTD[i] / pythonData.Unit.divisor).toFixed(pythonData.Unit.fix)}(${pythonData.Unit.unit})
            </div>
          </div>
          <div></div>
        </div>
        <div class="d-flex justify-content-start">
          <div class="progress" style="height: 17px;width:80%;border-radius: 10px;">
            <div class="progress-bar" style="width: ${arr[i]}%;background-color: ${pythonData.Color[i]};">
              <span class="sr-only"></span>
            </div>
          </div>
          <div class="ml-1" style="font-weight: 300;">
            ${(pythonData.FullYear[i] / pythonData.Unit.divisor).toFixed(pythonData.Unit.fix)}
          </div>
        </div>
      </div>
      `;
      Chart_R1C1_1_dom += html;
    });
    $("#Chart_R1C1_1").html(Chart_R1C1_1_dom);

    let Chart_R1C1_2_dom = `
      <div class="mb-2 mt-2 py-2" style="background-color:#F8F8F8;border-right: 2px solid #000027;">
        <div class="d-flex justify-content-start mb-1 pl-2">
          <div class="d-flex justify-content-center" style="width:78%">
            <div style="border: 1px solid red;border-radius: 15px 0 0 15px;padding: 0 5px 0 10px;font-size: 12px;line-height: 24px;">
              ${pythonData.languagechoice[5]}
            </div>
            <div class="mx-2">vs</div>
            <div style="border: 1px solid blue;border-radius: 0 15px 15px 0;padding: 0 10px 0 5px;font-size: 12px;line-height: 24px;">
              ${pythonData.languagechoice[0]}
            </div>
          </div>
          <div style="font-weight: 300;" class="ml-2">
            ${pythonData.CY_PY}%
          </div>
        </div>
      </div>
      <div class="mb-2 mt-2 py-2" style="background-color:#F8F8F8;border-right: 2px solid #000027;">
        <div class="d-flex justify-content-start mb-1 pl-2">
          <div class="d-flex justify-content-center" style="width:78%">
            <div style="border: 1px solid red;border-radius: 15px 0 0 15px;padding: 0 5px 0 10px;font-size: 12px;line-height: 24px;">
              ${pythonData.languagechoice[5]}
            </div>
            <div class="mx-2">vs</div>
            <div style="border: 1px solid blue;border-radius: 0 15px 15px 0;padding: 0 10px 0 5px;font-size: 12px;line-height: 24px;">
              ${pythonData.languagechoice[1]}
            </div>
          </div>
          <div style="font-weight: 300;" class="ml-2">
            ${pythonData.CY_Target}%
          </div>
        </div>
      </div>
      <div class="mb-2 mt-2 py-2" style="background-color:#F8F8F8;border-right: 2px solid #000027;">
        <div class="d-flex justify-content-start mb-1 pl-2">
          <div class="d-flex justify-content-center" style="width:78%">
            <div style="border: 1px solid red;border-radius: 15px 0 0 15px;padding: 0 5px 0 10px;font-size: 12px;line-height: 24px;">
              ${pythonData.languagechoice[6]}
            </div>
            <div class="mx-2">vs</div>
            <div style="border: 1px solid blue;border-radius: 0 15px 15px 0;padding: 0 10px 0 5px;font-size: 12px;line-height: 24px;">
              全年指标
            </div>
          </div>
          <div style="font-weight: 300;" class="ml-2">
            ${pythonData.YTD_Target}%
          </div>
        </div>
      </div>
      `;
    $("#Chart_R1C1_2").html(Chart_R1C1_2_dom);

    $("#Chart_R1C1_3").height(160);
    let option = {
      title: {
        left: "center",
        text: `—— ${pythonData.languagechoice[7]} ——`,
        textStyle: {
          fontWeight: 300,
        },
      },
      series: [
        {
          name: "1",
          center: ["20%", "50%"],
          startAngle: 90,
          endAngle: -270,
          type: "gauge",
          radius: "45%",
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: pythonData.Color[0],
            },
          },
          axisLine: {
            lineStyle: {
              width: 8,
              color: [[1, "#e1e4e9"]],
            },
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            distance: 50,
          },
          data: [
            {
              value: pythonData.PY_Actual,
              name: pythonData.languagechoice[3],
              title: {
                offsetCenter: ["0%", "130%"],
              },
              detail: {
                offsetCenter: ["0%", "0%"],
              },
            },
          ],
          title: {
            fontSize: 12,
          },
          detail: {
            width: 60,
            height: 16,
            fontSize: 12,
            formatter: "{value}%",
          },
        },
        {
          name: "2",
          center: ["50%", "50%"],
          startAngle: 90,
          endAngle: -270,
          type: "gauge",
          radius: "45%",
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: pythonData.Color[1],
            },
          },
          axisLine: {
            lineStyle: {
              width: 8,
              color: [[1, "#e1e4e9"]],
            },
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            distance: 50,
          },
          data: [
            {
              value: pythonData.CY_Target,
              name: pythonData.languagechoice[4],
              title: {
                offsetCenter: ["0%", "130%"],
              },
              detail: {
                offsetCenter: ["0%", "0%"],
              },
            },
          ],
          title: {
            fontSize: 12,
          },
          detail: {
            width: 60,
            height: 16,
            fontSize: 12,
            formatter: "{value}%",
          },
        },
        {
          name: "3",
          center: ["80%", "50%"],
          startAngle: 90,
          endAngle: -270,
          type: "gauge",
          radius: "45%",
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: pythonData.Color[2],
            },
          },
          axisLine: {
            lineStyle: {
              width: 8,
              color: [[1, "#e1e4e9"]],
            },
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            distance: 50,
          },
          data: [
            {
              value: pythonData.CY_Actual,
              name: pythonData.languagechoice[5],
              title: {
                offsetCenter: ["0%", "130%"],
              },
              detail: {
                offsetCenter: ["0%", "0%"],
              },
            },
          ],
          title: {
            fontSize: 12,
          },
          detail: {
            width: 60,
            height: 16,
            fontSize: 12,
            formatter: "{value}%",
          },
        },
      ],
    };
    const chart = echarts.init(document.getElementById("Chart_R1C1_3"));
    chart.clear();
    chart.setOption(option);
    $(window).on("resize", function () {
      chart.resize();
    });

    return;
  }

  initEchart(componentId, option);
}

function Chart_R1C2(data, params) {
  console.log("function Chart_R1C2");
  let componentId = params.componentId;
  let pythonData = JSON.parse(data);
  let unit = pythonData.Unit.unit;
  let divisor = pythonData.Unit.divisor;
  let fix = pythonData.Unit.fix;
  let option = {
    legend: {
      show: true,
      data: pythonData.Legend,
    },
    color: pythonData.Color,
    tooltip: {
      show: true,
      trigger: "axis",
      formatter: function (data) {
        let headerText = "<strong>" + data[0].axisValue + "消耗 (" + unit + ")</strong>";
        let bodyText = "";
        data.forEach(function (item) {
          bodyText += "<br>" + item.marker + item.seriesName + ": " + format((item.data / divisor).toFixed(fix));
        });
        return headerText + bodyText;
      },
    },
    toolbox: {
      feature: { saveAsImage: { show: true } },
    },
    grid: {
      top: "15%",
      bottom: "15%",
      left: "10%",
      right: "10%",
    },
    xAxis: {
      type: "category",
      axisLabel: {
        align: "center",
        fontWeight: "bold",
      },
      data: pythonData.xAxis,
    },
    yAxis: [
      {
        name: pythonData.yAxis[0],
        type: "value",
        axisLabel: {
          formatter: function (value, index) {
            return format((value / divisor).toFixed(0));
          },
        },
        splitLine: { show: false },
      },
      {
        name: pythonData.yAxis[1],
        type: "value",
        axisLabel: {
          formatter: function (value, index) {
            return format((value / divisor).toFixed(0));
          },
        },
        splitLine: { show: false },
      },
    ],
    series: [
      {
        name: pythonData.Legend[1],
        type: "line",
        seriesLayoutBy: "row",
        label: {
          normal: {
            show: false,
            position: "top",
          },
        },
        data: pythonData.CY,
      },
      {
        name: pythonData.Legend[0],
        type: "bar",
        seriesLayoutBy: "row",
        label: {
          normal: {
            show: false,
            position: "top",
          },
        },
        yAxisIndex: 1,
        barWidth: "60%",
        data: pythonData.Periodic,
      },
      {
        name: pythonData.Legend[2],
        type: "line",
        seriesLayoutBy: "row",
        label: {
          normal: {
            show: false,
            position: "top",
          },
        },
        data: pythonData.PY,
      },
      {
        name: pythonData.Legend[3],
        type: "line",
        seriesLayoutBy: "row",
        label: {
          normal: {
            show: false,
            position: "top",
          },
        },
        data: pythonData.Target,
      },
    ],
  };
  // 手机端
  if (getRequest().isView == "mobile") {
    option = {
      legend: {
        show: true,
        data: pythonData.Legend,
        itemWidth: 10,
      },
      color: pythonData.Color,
      tooltip: {
        show: true,
        trigger: "axis",
        formatter: function (data) {
          let headerText = "<strong>" + data[0].axisValue + "消耗 (" + unit + ")</strong>";
          let bodyText = "";
          data.forEach(function (item) {
            bodyText += "<br>" + item.marker + item.seriesName + ": " + format((item.data / divisor).toFixed(fix));
          });
          return headerText + bodyText;
        },
      },
      toolbox: {
        feature: { saveAsImage: { show: true } },
      },
      grid: {
        top: 75,
        bottom: "12%",
        left: "20%",
        right: "18%",
      },
      xAxis: {
        type: "category",
        axisLabel: {
          align: "center",
          fontWeight: "bold",
        },
        data: pythonData.xAxis,
      },
      yAxis: [
        {
          name: pythonData.yAxis[0],
          type: "value",
          axisLabel: {
            formatter: function (value, index) {
              return format((value / divisor).toFixed(0));
            },
          },
          splitLine: { show: false },
        },
        {
          name: pythonData.yAxis[1],
          type: "value",
          axisLabel: {
            formatter: function (value, index) {
              return format((value / divisor).toFixed(0));
            },
          },
          splitLine: { show: false },
        },
      ],
      series: [
        {
          name: pythonData.Legend[1],
          type: "line",
          seriesLayoutBy: "row",
          label: {
            normal: {
              show: false,
              position: "top",
            },
          },
          data: pythonData.CY,
        },
        {
          name: pythonData.Legend[0],
          type: "bar",
          seriesLayoutBy: "row",
          label: {
            normal: {
              show: false,
              position: "top",
            },
          },
          yAxisIndex: 1,
          barWidth: 10,
          data: pythonData.Periodic,
          itemStyle: {
            barBorderRadius: 10,
          },
        },
        {
          name: pythonData.Legend[2],
          type: "line",
          seriesLayoutBy: "row",
          label: {
            normal: {
              show: false,
              position: "top",
            },
          },
          data: pythonData.PY,
        },
        {
          name: pythonData.Legend[3],
          type: "line",
          seriesLayoutBy: "row",
          label: {
            normal: {
              show: false,
              position: "top",
            },
          },
          data: pythonData.Target,
        },
      ],
    };
  }
  initEchart(componentId, option);
}

function Chart_R2C1(data, params) {
  console.log("function Chart_R2C1");
  let componentId = params.componentId;
  let pythonData = JSON.parse(data);
  // let offset_top = $("#bottom_middle_chart").height() * 0.1 + 'px';
  let offset_top = "30px";
  let option = {
    title: [
      {
        text: pythonData.title[0],
        x: "35%",
        top: 5,
        textAlign: "center",
        textStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
      },
      {
        text: pythonData.title[1],
        x: "75%",
        top: 5,
        textAlign: "center",
        textStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
      },
    ],
    toolbox: {
      show: true,
      feature: { saveAsImage: { show: true } },
    },
    legend: { show: false },
    grid: [
      {
        top: offset_top,
        bottom: "0%",
        left: "5%",
        right: "48%",
        containLabel: true,
      },
      {
        gridindex: 1,
        top: offset_top,
        bottom: "0%",
        left: "65%",
        right: "7%",
        containLabel: true,
      },
    ],
    xAxis: [
      {
        type: "value",
        show: false,
        splitLine: { show: false },
      },
      {
        gridIndex: 1,
        type: "value",
        show: false,
        splitLine: { show: false },
      },
    ],
    yAxis: [
      {
        type: "category",
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          margin: 30,
          fontWeight: "bold",
        },
        data: pythonData.yAxis,
      },
      {
        gridIndex: 1,
        type: "category",
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false },
        data: pythonData.yAxis,
      },
    ],
    series: [
      {
        name: "left_inc",
        type: "bar",
        barWidth: "50%",
        stack: "left",
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{c}%",
          },
        },
        itemStyle: {
          color: pythonData.Inc_inc.color,
        },
        data: pythonData.Inc_inc.data,
      },
      {
        name: "left_dec",
        type: "bar",
        barWidth: "50%",
        stack: "left",
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{c}%",
          },
        },
        itemStyle: {
          color: pythonData.Inc_dec.color,
        },
        data: pythonData.Inc_dec.data,
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: "right_inc",
        type: "bar",
        barWidth: "50%",
        stack: "right",
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{c}%",
          },
        },
        itemStyle: {
          color: pythonData.Ach100.color,
        },
        data: pythonData.Ach100.data,
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: "right_dec",
        type: "bar",
        barWidth: "50%",
        stack: "right",
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{c}%",
          },
        },
        itemStyle: {
          color: pythonData.Ach89.color,
        },
        data: pythonData.Ach89.data,
      },
      {
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: "right_mid",
        type: "bar",
        barWidth: "50%",
        stack: "right",
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{c}%",
          },
        },
        itemStyle: {
          color: pythonData.Ach90.color,
        },
        data: pythonData.Ach90.data,
      },
    ],
  };

  // 手机端
  if (getRequest().isView == "mobile") {
    mobileHeight("Chart_R2C1", 380);
    option = {
      title: [
        {
          text: pythonData.title[0],
          x: "25%",
          top: 5,
          textAlign: "center",
          textStyle: {
            fontSize: 12,
            // fontWeight: "bold",
          },
        },
        {
          text: pythonData.title[1],
          x: "75%",
          top: 5,
          textAlign: "center",
          textStyle: {
            fontSize: 12,
            // fontWeight: "bold",
          },
        },
      ],
      toolbox: {
        show: true,
        feature: { saveAsImage: { show: true } },
      },
      legend: { show: false },
      grid: [
        {
          top: offset_top,
          bottom: "0%",
          left: 0,
          right: "70%",
          containLabel: true,
        },
        {
          gridindex: 1,
          top: offset_top,
          bottom: "0%",
          left: "45%",
          right: 50,
          containLabel: true,
        },
      ],
      xAxis: [
        {
          type: "value",
          show: false,
          splitLine: { show: false },
        },
        {
          gridIndex: 1,
          type: "value",
          show: false,
          splitLine: { show: false },
        },
      ],
      yAxis: [
        {
          type: "category",
          axisTick: { show: false },
          axisLine: { show: false },
          // axisLabel: {
          //   margin: 30,
          //   fontWeight: "bold",
          // },
          axisLabel: { show: false },
          data: pythonData.yAxis,
        },
        {
          gridIndex: 1,
          type: "category",
          axisTick: { show: false },
          axisLine: { show: false },
          // axisLabel: { show: false },
          axisLabel: {
            margin: 20,
            // width: 130,
            height: 30,
            padding: [0, 10, 0, 10],
            borderRadius: 20,
            backgroundColor: "#EEEFEE",
          },
          data: pythonData.yAxis,
        },
      ],
      series: [
        {
          name: "left_inc",
          type: "bar",
          barWidth: "50%",
          stack: "left",
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{c}%",
            },
          },
          itemStyle: {
            color: pythonData.Inc_inc.color,
            barBorderRadius: [0, 10, 10, 0],
          },
          data: pythonData.Inc_inc.data,
        },
        {
          name: "left_dec",
          type: "bar",
          barWidth: "50%",
          stack: "left",
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{c}%",
            },
          },
          itemStyle: {
            color: pythonData.Inc_dec.color,
            barBorderRadius: [10, 0, 0, 10],
          },
          data: pythonData.Inc_dec.data,
        },
        {
          xAxisIndex: 1,
          yAxisIndex: 1,
          name: "right_inc",
          type: "bar",
          barWidth: "50%",
          stack: "right",
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{c}%",
            },
          },
          itemStyle: {
            color: pythonData.Ach100.color,
            barBorderRadius: [0, 10, 10, 0],
          },
          data: pythonData.Ach100.data,
        },
        {
          xAxisIndex: 1,
          yAxisIndex: 1,
          name: "right_dec",
          type: "bar",
          barWidth: "50%",
          stack: "right",
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{c}%",
            },
          },
          itemStyle: {
            color: pythonData.Ach89.color,
            barBorderRadius: [0, 10, 10, 0],
          },
          data: pythonData.Ach89.data,
        },
        {
          xAxisIndex: 1,
          yAxisIndex: 1,
          name: "right_mid",
          type: "bar",
          barWidth: "50%",
          stack: "right",
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{c}%",
            },
          },
          itemStyle: {
            color: pythonData.Ach90.color,
            barBorderRadius: [0, 10, 10, 0],
          },
          data: pythonData.Ach90.data,
        },
      ],
    };
  }

  initEchart(componentId, option);
}

function getTableLine(num) {
  var list = [];
  var bottom = 102;
  var height = 20;
  for (var i = 0; i < num; i++) {
    list.push({
      type: "line",
      bottom: bottom - i * height,
      right: 10,
      style: {
        fill: "#333",
      },
      shape: {
        x1: 0,
        y1: 0,
        x2: 3200,
        y2: 0,
      },
    });
  }
  return list;
}

function getDataZoom(num, width) {
  let proportion = (width - 80 - 10) / (num * 80);
  let dataZoom = {
    show: true,
    start: 0,
    end: 100,
    maxSpan: 100,
    zoomLock: false,
    height: 20,
  };
  if (proportion < 1) {
    dataZoom.end = parseInt(proportion * 20) * 5;
    dataZoom.maxSpan = parseInt(proportion * 20) * 5;
  }
  return dataZoom;
}

function Chart_R2C2(data, params) {
  console.log("function Chart_R2C2");
  let componentId = params.componentId;
  let pythonData = JSON.parse(data);
  let lineList = getTableLine(4);
  let unit = pythonData.Unit.unit;
  let divisor = pythonData.Unit.divisor;
  let fix = pythonData.Unit.fix;
  let option = {
    title: [
      {
        text: "\n" + pythonData.FormHeader.join("\n") + "\n",
        bottom: 16,
        left: 3,
        textStyle: {
          lineHeight: 20,
          fontSize: 13,
          fontWeight: "bold",
          formatter: function (value) {
            return "{table|" + value + "}";
          },
          rich: {
            table: {
              align: "center",
            },
          },
        },
      },
    ],
    tooltip: {
      trigger: "axis",
      formatter: function (data) {
        let headerText = "<strong>" + data[0].axisValue + "消耗 (" + unit + ")</strong>";
        let bodyText = "";
        data.forEach(function (item) {
          bodyText += "<br>" + item.marker + item.seriesName + ": " + format((item.data / divisor).toFixed(0));
        });
        return headerText + bodyText;
      },
    },
    legend: {
      data: pythonData.Legend,
    },
    grid: {
      bottom: 128,
      left: 80,
      right: 10,
    },
    dataZoom: getDataZoom(pythonData.xAxis.length, $("#chart-" + componentId).width()),
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: pythonData.xAxis,
        axisTick: {
          length: 85,
        },
        axisLabel: {
          interval: 0,
          formatter: function (value, index) {
            var indexNum = 0;
            for (var i = 0; i < pythonData.xAxis.length; i++) {
              if (value == pythonData.xAxis[i]) {
                indexNum = i;
              }
            }
            return (
              "{table|" +
              value +
              "}\n{table|" +
              format(pythonData.Inc[indexNum].toFixed(0)) +
              "%}\n{table|" +
              format(pythonData.Ach[indexNum].toFixed(0)) +
              "%}\n{table|" +
              format(pythonData.Sch[indexNum].toFixed(0)) +
              "%}"
            );
          },
          // formatter: function (value, index){
          //   debugger
          // },
          //   formatter: function (value, index) {
          //     var indexNum = 0;
          //     for (var i = 0; i < pythonData.xAxis.length; i++) {
          //       if (value == pythonData.xAxis[i]) {
          //         indexNum = i;
          //       }
          //     }
          //     // return `{table|aa}\n
          //     // {a|1}{table|1%}\n
          //     // {a|1}{table|2%}\n
          //     // {a|1}{table|3%}`;
          //     return `{table|aa}\n{a|1 }{table|1%}\n{a|1 }{table|2%}\n{b|}{table|3%}`;
          //   },
          rich: {
            table: {
              lineHeight: 20,
              align: "center",
            },
            a: {
              lineHeight: 20,
              color: "red",
            },
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        scale: true,
        name: unit,
        axisLabel: {
          formatter: function (value) {
            return format((value / divisor).toFixed(0));
          },
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: pythonData.Legend[0],
        type: "bar",
        barGap: "0%",
        barWidth: "20%",
        color: pythonData.Color[0],
        label: {
          show: false,
          position: "top",
        },
        yAxisIndex: 0,
        data: pythonData.PY,
      },
      {
        name: pythonData.Legend[1],
        type: "bar",
        barWidth: "20%",
        color: pythonData.Color[1],
        label: {
          show: false,
          position: "top",
        },
        yAxisIndex: 0,
        data: pythonData.CY,
      },
      {
        name: pythonData.Legend[2],
        type: "bar",
        barWidth: "20%",
        color: pythonData.Color[2],
        label: {
          show: false,
          position: "top",
        },
        yAxisIndex: 0,
        data: pythonData.Target,
      },
    ],
    graphic: lineList,
  };

  // 手机端
  if (getRequest().isView == "mobile") {
    mobileHeight("Chart_R1C2", 380);
    option = {
      title: [
        {
          text: "\n" + pythonData.FormHeader.join("\n") + "\n",
          bottom: 26,
          left: 3,
          textStyle: {
            lineHeight: 20,
            fontSize: 11,
            fontWeight: "bold",
            formatter: function (value) {
              return "{table|" + value + "}";
            },
            rich: {
              table: {
                align: "center",
              },
            },
          },
        },
      ],
      tooltip: {
        trigger: "axis",
        formatter: function (data) {
          let headerText = "<strong>" + data[0].axisValue + "消耗 (" + unit + ")</strong>";
          let bodyText = "";
          data.forEach(function (item) {
            bodyText += "<br>" + item.marker + item.seriesName + ": " + format((item.data / divisor).toFixed(0));
          });
          return headerText + bodyText;
        },
      },
      legend: {
        data: pythonData.Legend,
      },
      grid: {
        bottom: 128,
        left: 70,
        right: 10,
      },
      dataZoom: getDataZoom(pythonData.xAxis.length, $("#chart-" + componentId).width()),
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: true,
          data: pythonData.xAxis,
          axisTick: {
            length: 85,
          },
          axisLabel: {
            interval: 0,
            formatter: function (value, index) {
              var indexNum = 0;
              for (var i = 0; i < pythonData.xAxis.length; i++) {
                if (value == pythonData.xAxis[i]) {
                  indexNum = i;
                }
              }
              return (
                "{table|" +
                value +
                "}\n{table|" +
                format(pythonData.Inc[indexNum].toFixed(0)) +
                "%}\n{table|" +
                format(pythonData.Ach[indexNum].toFixed(0)) +
                "%}\n{table|" +
                format(pythonData.Sch[indexNum].toFixed(0)) +
                "%}"
              );
            },
            // formatter: function (value, index){
            //   debugger
            // },
            //   formatter: function (value, index) {
            //     var indexNum = 0;
            //     for (var i = 0; i < pythonData.xAxis.length; i++) {
            //       if (value == pythonData.xAxis[i]) {
            //         indexNum = i;
            //       }
            //     }
            //     // return `{table|aa}\n
            //     // {a|1}{table|1%}\n
            //     // {a|1}{table|2%}\n
            //     // {a|1}{table|3%}`;
            //     return `{table|aa}\n{a|1 }{table|1%}\n{a|1 }{table|2%}\n{b|}{table|3%}`;
            //   },
            rich: {
              table: {
                lineHeight: 20,
                align: "center",
              },
              a: {
                lineHeight: 20,
                color: "red",
              },
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          scale: true,
          name: unit,
          axisLabel: {
            formatter: function (value) {
              return format((value / divisor).toFixed(0));
            },
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: pythonData.Legend[0],
          type: "bar",
          barGap: "0%",
          barWidth: 16,
          color: pythonData.Color[0],
          label: {
            show: false,
            position: "top",
          },
          itemStyle: {
            normal: {
              barBorderWidth: 1.5,
              barBorderRadius: 10,
            },
          },
          yAxisIndex: 0,
          data: pythonData.PY,
        },
        {
          name: pythonData.Legend[1],
          type: "bar",
          barWidth: 16,
          color: pythonData.Color[1],
          label: {
            show: false,
            position: "top",
          },
          itemStyle: {
            normal: {
              barBorderWidth: 1.5,
              barBorderRadius: 10,
            },
          },
          yAxisIndex: 0,
          data: pythonData.CY,
        },
        {
          name: pythonData.Legend[2],
          type: "bar",
          barWidth: 16,
          color: pythonData.Color[2],
          label: {
            show: false,
            position: "top",
          },
          itemStyle: {
            normal: {
              barBorderWidth: 1.5,
              barBorderRadius: 10,
            },
          },
          yAxisIndex: 0,
          data: pythonData.Target,
        },
      ],
      graphic: lineList,
    };
  }

  initEchart(componentId, option);
}

// function addDiv_R2C2(componentId,upDivHeight,downDivHeight){
//   let html = `
//   <div id="chart-${componentId}-newDiv">
//     <div id="chart-${componentId}-upDiv" style="height: ${upDivHeight}px;"></div>
//     <div id="chart-${componentId}-downDiv" style="height: ${downDivHeight}px;"></div>
//   </div>
//   `
//   $("#" + "chart-" + componentId + "").html(html)
// }

// function Chart_R2C2(data, params) {
//   console.log("function Chart_R2C2");
//   let componentId = params.componentId;
//   let pythonData = JSON.parse(data);

//   $("#" + "chart-" + componentId + "").css('overflow-x','auto')

//   addDiv_R2C2(componentId,200,100)
// }

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

// 渲染产品
function Chart_R3(data, params) {
  console.log("function Chart_R3");
  let componentId = params.componentId;
  let pythonData = JSON.parse(data);
  console.log(pythonData);
  let xAxisData = pythonData.xAxis;
  let dataPY = pythonData.PY;
  let dataInc = pythonData.Inc;
  let dataDec = pythonData.Dec;
  let dataCY = pythonData.CY;
  let dataTotal = pythonData.Hide;
  let unit = pythonData.Unit.unit;
  let divisor = pythonData.Unit.divisor;
  let fix = pythonData.Unit.fix;
  let option = {
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "10%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      splitLine: { show: false },
      axisLabel: { rotate: 35, align: "right" },
      data: xAxisData,
    },
    yAxis: {
      name: unit,
      type: "value",
      splitLine: { show: false },
      axisLabel: {
        formatter: function (value, index) {
          return format((value / divisor).toFixed(0));
        },
      },
    },
    series: [
      {
        name: "hide",
        type: "bar",
        stack: "Total",
        itemStyle: {
          normal: {
            barBorderColor: dataTotal.color,
            color: dataTotal.color,
          },
        },
        data: dataTotal.data,
      },
      {
        name: "py",
        type: "bar",
        stack: "Total",
        label: {
          normal: {
            show: true,
            position: "top",
            color: dataPY.color,
            formatter: function (data) {
              console.log(data);
              return format((data.data / pythonData.Unit.divisor).toFixed(pythonData.Unit.fix));
            },
          },
        },
        itemStyle: {
          normal: {
            barBorderColor: dataPY.color,
            color: dataPY.color,
          },
        },
        barWidth: "50%",
        // barMaxWidth: 80,
        data: dataPY.data,
      },
      {
        name: "inc",
        type: "bar",
        stack: "Total",
        label: {
          normal: {
            show: true,
            position: "top",
            formatter: function (data) {
              return format((data.data / pythonData.Unit.divisor).toFixed(pythonData.Unit.fix));
            },
          },
        },
        itemStyle: {
          normal: {
            barBorderColor: dataInc.color,
            color: dataInc.color,
          },
        },
        barWidth: "50%",
        // barMaxWidth: 20,
        data: dataInc.data,
      },
      {
        name: "dec",
        type: "bar",
        stack: "Total",
        label: {
          normal: {
            show: true,
            position: "bottom",
            formatter: function (data) {
              return format((data.data / pythonData.Unit.divisor).toFixed(pythonData.Unit.fix));
            },
          },
        },
        itemStyle: {
          normal: {
            barBorderColor: dataDec.color,
            color: dataDec.color,
          },
        },
        barWidth: "50%",
        // barMaxWidth: 20,
        data: dataDec.data,
      },
      {
        name: "cy",
        type: "bar",
        stack: "Total",
        label: {
          normal: {
            show: true,
            position: "top",
            color: dataCY.color,
            formatter: function (data) {
              return format((data.data / pythonData.Unit.divisor).toFixed(pythonData.Unit.fix));
            },
          },
        },
        itemStyle: {
          normal: {
            barBorderColor: dataCY.color,
            color: dataCY.color,
          },
        },
        barWidth: "50%",
        // barMaxWidth: 20,
        data: dataCY.data,
      },
    ],
  };

  // 手机端
  if (getRequest().isView == "mobile") {
    let newData = (data) => {
      let newData = data.map((val, i) => {
        if (val === "-") {
          return val;
        } else {
          return val / 100;
        }
      });
      return newData;
    };

    option = {
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: 50,
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        splitLine: { show: false },
        axisLabel: { rotate: 35, align: "right" },
        data: xAxisData,
      },
      yAxis: {
        name: 100 + unit,
        type: "value",
        splitLine: { show: false },
        axisLabel: {
          formatter: function (value, index) {
            return format((value / divisor).toFixed(0));
          },
        },
      },
      series: [
        {
          name: "hide",
          type: "bar",
          stack: "Total",
          itemStyle: {
            normal: {
              barBorderColor: dataTotal.color,
              color: dataTotal.color,
            },
          },
          data: newData(dataTotal.data),
        },
        {
          name: "py",
          type: "bar",
          stack: "Total",
          label: {
            normal: {
              show: true,
              position: "top",
              color: dataPY.color,
              formatter: function (data) {
                console.log(data);
                return format((data.data / pythonData.Unit.divisor).toFixed(pythonData.Unit.fix));
              },
              fontSize: 10,
            },
          },
          itemStyle: {
            normal: {
              barBorderColor: dataPY.color,
              color: dataPY.color,
              barBorderRadius: 10,
            },
          },
          barWidth: 16,
          // barMaxWidth: 80,
          data: newData(dataPY.data),
        },
        {
          name: "inc",
          type: "bar",
          stack: "Total",
          label: {
            normal: {
              show: true,
              position: "top",
              formatter: function (data) {
                return format((data.data / pythonData.Unit.divisor).toFixed(pythonData.Unit.fix));
              },
              fontSize: 10,
            },
          },
          itemStyle: {
            normal: {
              barBorderColor: dataInc.color,
              color: dataInc.color,
              barBorderRadius: 10,
            },
          },
          barWidth: 16,
          // barMaxWidth: 20,
          data: newData(dataInc.data),
        },
        {
          name: "dec",
          type: "bar",
          stack: "Total",
          label: {
            normal: {
              show: true,
              position: "bottom",
              formatter: function (data) {
                return format((data.data / pythonData.Unit.divisor).toFixed(pythonData.Unit.fix));
              },
              fontSize: 10,
            },
          },
          itemStyle: {
            normal: {
              barBorderColor: dataDec.color,
              color: dataDec.color,
              barBorderRadius: 10,
            },
          },
          barWidth: 16,
          // barMaxWidth: 20,
          data: newData(dataDec.data),
        },
        {
          name: "cy",
          type: "bar",
          stack: "Total",
          label: {
            normal: {
              show: true,
              position: "top",
              color: dataCY.color,
              formatter: function (data) {
                return format((data.data / pythonData.Unit.divisor).toFixed(pythonData.Unit.fix));
              },
              fontSize: 10,
            },
          },
          itemStyle: {
            normal: {
              barBorderColor: dataCY.color,
              color: dataCY.color,
              barBorderRadius: 10,
            },
          },
          barWidth: 16,
          // barMaxWidth: 20,
          data: newData(dataCY.data),
        },
      ],
    };
  }

  initEchart(componentId, option);
}

function Chart_R3C2(data, params) {
  console.log("function Chart_R3C2");
  let pyData = JSON.parse(data);
  console.log(pyData);
  $("#chart-" + params.componentId + "")
    .parent()
    .addClass("pt-0 pl-0 pr-0 pb-0");
  let formHeader = [];
  pyData.Column.columns.forEach(function (item) {
    formHeader.push(item.name);
  });
  var tableDom = getR3C2Table(pyData.Data, formHeader);
  renderR3Table(tableDom, params.componentId, "R3C2");
  //增加下载按钮
  if (
    $("#chart-" + params.componentId + "")
      .parents(".componentCard")
      .find(".downLoadTable").length === 0
  ) {
    $("#chart-" + params.componentId + "")
      .parents(".componentCard")
      .find(".sheetPovPart")
      .before(
        '<a class="breadcrumb-elements-item cursor-pointer mr-2 ml-2 pt-0 pb-0 downLoadTable" onclick="downloadPyTable(\'' +
          params.componentId +
          "','R3C2')\"><i class=\"icon-download4 icon text-default mr-2\"></i><span class='iconSpan loadDes pt-0 pb-0 '>下载</span></a>"
      );
  }
  initDataTable("#TableR3C2", $(".sheetTable").height(), 1);
  // 字体加粗
  pyData.Data.forEach(function (rowItem, i) {
    if (rowItem[0] <= 2) {
      $("tr.r3c2" + i).css("font-weight", "bold");
    }
  });
}

function getR3C2Table(data, Columns) {
  var tHeadHtml = "";
  var tBodyHtml = "";
  var exportTbody = "";
  Columns.forEach(function (th, i) {
    tHeadHtml += '<th style="background-color: rgba(0,0,0,.02);">' + th + "</th>";
  });
  data.forEach(function (rowItem, x) {
    tBodyHtml += '<tr class="r3c2' + x + '">';
    exportTbody += "<tr>";
    rowItem.forEach(function (tdVal, i) {
      var cellVal = tdVal;
      if (i === rowItem.length - 2) {
        //后两列百分比格式
        var colorStyle = gertColorByValue1(cellVal);
        cellVal = floatNum.accMul(cellVal, 100).toFixed(1) + "%";
        tBodyHtml += '<td><span class="badge badge-mark mr-1" style="background-color:' + colorStyle + ";border-color:" + colorStyle + '"></span>' + cellVal + "</td>";
      } else if (i === rowItem.length - 1) {
        //后两列百分比格式
        var colorStyle = gertColorByValue(cellVal);
        cellVal = floatNum.accMul(cellVal, 100).toFixed(1) + "%";
        tBodyHtml += '<td><span class="badge badge-mark mr-1" style="background-color:' + colorStyle + ";border-color:" + colorStyle + '"></span>' + cellVal + "</td>";
      } else if (i > 1 && i < rowItem.length - 1) {
        cellVal = format(cellVal.toFixed(0));
        tBodyHtml += "<td>" + cellVal + "</td>";
      } else if (i == 1) {
        // 缩进层级显示
        var space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
          productsTitleSpace = [];
        for (var i = 0; i < rowItem[0]; i++) {
          productsTitleSpace.push(space);
          var ptsStr = productsTitleSpace.join("");
        }
        tBodyHtml += '<td style=" text-align:left; ' + '">' + "&nbsp;&nbsp;&nbsp;" + ptsStr + cellVal + "</td>";
      }
      if (i > 0) {
        exportTbody += "<td>" + tdVal + "</td>";
      }
    });
    tBodyHtml += "</tr>";
    exportTbody += "</tr>";
  });
  return {
    tBodyHtml: tBodyHtml,
    tHeadHtml: tHeadHtml,
    exportTbody: exportTbody,
  };
}

// 公用渲染table
function renderR3Table(tableDom, id, k) {
  var tableSHtml =
    '<div class="h-100 sheetTable">\n  <table class="table table-bordered text-nowrap table-xs text-center" style="width:100%!important" id="Table' +
    k +
    '">\n	<thead>\n	<tr>' +
    tableDom.tHeadHtml +
    "</tr>\n	</thead>\n	<tbody>\n	" +
    tableDom.tBodyHtml +
    '\n	</tbody>\n  </table>\n  <table class="table table-bordered text-nowrap table-xs disPNone" id="exportTable' +
    k +
    '">\n	<thead>\n	<tr>' +
    tableDom.tHeadHtml +
    "</tr>\n	</thead>\n	<tbody>\n	" +
    tableDom.exportTbody +
    "\n	</tbody>\n  </table>\n</div>";
  $("#chart-" + id + "").html(tableSHtml);
}
/**
 * 初始化table固定表头
 */
function initDataTable(tableName, scrollYHeight, leftColumns) {
  $(tableName).DataTable({
    destroy: true,
    bFilter: false,
    bLengthChange: false,
    paging: false,
    // autoWidth: false,
    order: [],
    bSort: false,
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
//下载table
function downloadPyTable(id, table_type) {
  var tableName = $("#chart-" + id + "")
    .parents(".pythonCard")
    .find(".card-title")
    .text();
  $("#exportTable" + table_type).tableExport({
    type: "xlsx",
    escape: "false",
    fileName: tableName,
  });
}
// 根据值的范围获取颜色
function gertColorByValue(val) {
  if (val >= 1.1) {
    return "#65b511";
  } else if (val >= 1) {
    return "#ffcc00";
  } else if (val < 1) {
    return "#d30f4c";
  }
}
function gertColorByValue1(val) {
  if (val >= 0.1) {
    return "#65b511";
  } else if (val >= 0) {
    return "#ffcc00";
  } else if (val < 0) {
    return "#d30f4c";
  }
}

$(function () {
  // 加载下载excel插件
  $("body").append('<script src="../js/plugins/xlsx.full.min.js"></script>');
  //设置样式
  var styleHtml = "<style>" + ".sheetTable td,.sheetTable th{" + "padding:0.1rem 0.5rem}" + "</style>";
  $("head").append(styleHtml);
});

//导出文件
function Chart_R4(id) {
  var dom = $('[data-id="' + id + '"]').find(".elementIframe")[0].contentWindow;
  //数据导出
  initializeCustomLoader(dom);
  Custom_data_export_Main(dom);
}

//ready
$(document).ready(function () {
  // 手机端
  if (getRequest().isView == "mobile") {
    // // 引入样式
    // let style = document.createElement("style");
    // style.innerHTML = `
    // ::-webkit-scrollbar {
    //   display: none;
    // }
    // `;
    // document.head.appendChild(style);

    // 引入echarts5
    let echarts_Script = document.createElement("script");
    echarts_Script.setAttribute("type", "text/javascript");
    echarts_Script.setAttribute("src", "https://cdn.jsdelivr.net/npm/echarts@5.0.1/dist/echarts.min.js");
    document.head.appendChild(echarts_Script);
  }
  $("#showDashBoard")
    .find(".freshBS")
    .click(function () {
      var domSelected = $("#globalPovPart").children().eq(2).find("a").text();
      // ajax请求架构筛选的层级
      var settings = {
        url: Api.seepln + "dimension/selectDimensionMemberByNameFunction",
        method: "POST",
        timeout: 0,
        headers: {
          "user-id": Userinfo.user_id,
          app: Userinfo.app,
          token: Userinfo.token,
          "tenant-code": Userinfo.tenant_code,
          language: Userinfo.language,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
          app_id: Userinfo.app,
          token: Userinfo.token,
          user_id: Userinfo.user_id,
          tenant_code: Userinfo.tenant_code,
          language: Userinfo.language,
          dimensionMemberNames: "DailyStructure{IDescendant(TotalChannel,0)}",
          duplicate: "1",
          resultString: "name,description_1,description_2,level",
        },
      };
      $.ajax(settings).done(function (response) {
        response.resultList.forEach(function (data, i) {
          if (data.description_1 == domSelected) {
            var dom = $('[data-id="' + Chart_R2_Id + '"]').find(".elementIframe")[0].contentWindow;
            resetColumn(dom);
            if (data.level == 3) {
              unVisibleColumn(dom, [2, 3]);
            }
            if (data.level == 4) {
              unVisibleColumn(dom, [3, 4, 5, 9]);
            }
            if (data.level == 5) {
              unVisibleColumn(dom, [2, 3, 5, 6, 7, 9]);
            }
          }
        });
      });
    });
});

function resetColumn(dom) {
  [2, 3, 4, 5, 6, 7, 9].forEach(function (column) {
    dom.$("#contractList_table").DataTable().column(column).visible(true);
  });
}

function unVisibleColumn(dom, arr) {
  arr.forEach(function (column) {
    dom.$("#contractList_table").DataTable().column(column).visible(false);
  });
}

//导出文件
function Custom_data_export_Main(mainDom) {
  cus_conf.frameDom1 = mainDom;
  if (mainDom.$("#" + cus_conf.buttonInfo1_1.id).length == 0) {
    var cardHead = mainDom.$("div.header-elements").parent();
    var btnDom = cfs.card.head.addButton(cardHead, cus_conf.buttonInfo1_1, true);
    btnDom.css("padding-right", "35px");
    btnDom.bind("click", { cardId: "1", btnDom: btnDom }, ExportExcel);
  }
}
function ExportExcel(event) {
  Custom_startButtonLoading(event.data.btnDom);
  setTimeout(function () {
    var povObj = showDashBoard.globalOldPovObj;
    var table = cus_conf["table" + event.data.cardId];
    var tableName = table.Name;
    var povFieldArr = table.PovFields;
    var povArr = table.Pov;
    var work_type = Custom_getUrlParam("param1");
    var dynamicForm = cfs.request.DynamicForm;
    var titleObj = dynamicForm.contractField(work_type);
    if (titleObj.err) {
      ForSwal("读取数据失败:" + titleObj.err.Message);
    } else {
      var titleArr = [];
      for (let i = 0; i < titleObj.res.resultList[0].length; i++) {
        titleArr.push(titleObj.res.resultList[0][i].alias_name);
      }
      var titleArrDesc = titleObj.res.resultList[1];
      var query_map = {};
      for (let i = 0; i < povFieldArr.length; i++) {
        query_map[povFieldArr[i]] = povObj[povArr[i]];
      }
      var formObj = dynamicForm.formList(work_type, JSON.stringify(query_map));
      if (formObj.err) {
        ForSwal("读取数据失败:" + formObj.err.Message);
      } else {
        let dataJson = formObj.res.data;
        cfs.export.toCsv(event.data.btnDom.parent().parent().find("h6").text(), dataJson, titleArr, titleArrDesc);
      }
    }
    Custom_stopButtonLoading(event.data.btnDom);
  }, 100);
}
function Custom_getUrlParam(paramName) {
  var params = cus_conf.frameDom1.location.search || "";
  if (params.indexOf(paramName)) {
    return params.split(paramName + "=")[1].split("&")[0];
  } else {
    return "";
  }
}
function Custom_startButtonLoading(btnDom) {
  //显示按钮loading
  btnDom.find("i").hide();
  btnDom.find(".customLoader").show();
}
function Custom_stopButtonLoading(btnDom) {
  //关闭按钮loading
  btnDom.find(".customLoader").hide();
  btnDom.find("i").show();
}
var cus_conf = {
  //全局配置参数
  frameDom1: {},
  buttonInfo1_1: {
    id: "Export_Button",
    text: "导出文件",
    icon: "mi-file-upload",
  },
  table1: {
    Name: "app1_cssi_dash_daily_consumption_detail",
    Pov: ["Year", "Period", "Structure", "District"],
    PovFields: ["Year", "Period", "TerritoryCode", "CountyCode"],
    Fields: ["region", "gm", "entity", "property", "period", "area", "occarea", "facetotal", "efftotal"],
    NotNull: [],
    FieldMap: [],
    DefaultId: false,
    datas: {},
  },
};
//Functions.js
function initializeCustomLoader(dom) {
  //添加loading动画
  if (dom.$("#customLoaderStyle").length == 0) {
    var css1 =
      ".customLoader {border: .2em solid transparent;border-top-color: currentcolor;border-radius: 50%;-webkit-animation: 1s customLoader linear infinite;animation: 1s customLoader linear infinite;position: relative;display: inline-block;width: 1em;height: 1em;color: inherit;vertical-align: middle;pointer-events: none;}.customLoader:before {content: '';display: block;width: inherit;height: inherit;position: absolute;top: -.2em;left: -.2em;border: .2em solid currentcolor;border-radius: 50%;opacity: .5;}@-webkit-keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}@keyframes customLoader {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}";
    dom.$('<style id="customLoaderStyle"></style>').text(css1).appendTo(dom.$("head"));
  }
}
var cfs = {
  //dashboard全局方法
  request: {
    //请求后端数据
    common: {
      //通用请求
      sendRequest: function (url, type, paramObj, json = false) {
        let data = json ? JSON.stringify(paramObj) : paramObj;
        let contentType = "application/" + (json ? "json" : "x-www-form-urlencoded");
        var resObj = {};
        var err = "";
        $.ajax({
          url: url,
          type: type,
          contentType: contentType,
          async: false,
          data: data,
          success: function (res) {
            resObj.res = res;
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
      queryCubeData: function (cubeName, script) {
        let url = Api.SeeplnCube + "cube/queryCubeData";
        paramObj = $.extend(
          {
            cube_name: cubeName,
            script: script,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true);
      },
      save: function (sheetDatas) {
        let url = Api.SeeplnCube + "spreadsheet/save";
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
      runComm: function (comm) {
        let url = Api.seepln + "sqlparser/run/post";
        paramObj = $.extend(
          {
            sql: comm,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false);
      },
    },
    DynamicForm: {
      contractField: function (work_type) {
        let url = Api.DynamicForm + "contract/contractField";
        paramObj = $.extend(
          {
            work_type: work_type,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false);
      },
      formList: function (work_type, query_map, start = 0, length = 1000000) {
        let url = Api.DynamicForm + "formlist/formList";
        paramObj = $.extend(
          {
            work_type: work_type,
            query_map: query_map,
            start: start,
            length: length,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false);
      },
    },
    python: {
      web: function (pyName, params) {
        let url = Api.python + "start/web";
        paramObj = $.extend(
          {
            pyName: pyName,
            params: params,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true);
      },
    },
  },
  card: {
    //单个卡片方法
    head: {
      //卡片头
      getDom: function (cardName) {
        return $("#" + cardName);
      },
      removeButton: function (dom) {
        dom.find(".header-elements").html("");
      },
      addButton: function (cardHead, buttonInfo, prepend = false) {
        var buttonHtml = $(
          '<a class="breadcrumb-elements-item mr-2 cursor-pointer" id="' +
            buttonInfo.id +
            '"><div class="customLoader mr-2" style="margin-bottom: 2px; display: none;"></div><i class="' +
            buttonInfo.icon +
            ' icon text-default mr-2"></i><span class="iconSpan loadDes">' +
            buttonInfo.text +
            "</span></a>"
        );
        if (prepend) cardHead.find(".header-elements").prepend(buttonHtml);
        else cardHead.find(".header-elements").append(buttonHtml);
        return buttonHtml;
      },
      enableButton: function (btn, event, call) {
        btn.bind(
          "click",
          {
            cardId: event.data.cardId,
            cardBody: event.data.cardBody,
            fileObj: event.data.fileObj,
          },
          call
        );
        btn.hover(function () {
          this.style.cursor = "pointer";
        });
      },
      disableButton: function (btn) {
        btn.unbind("click");
        btn.hover(function () {
          this.style.cursor = "not-allowed";
        });
        btn.hover();
      },
    },
    body: {
      //卡片内容
      getDom: function (cardName) {
        return $("#" + cardName).find(".card-body");
      },
      addFileTag: function (cardName, text, prepend = false) {
        var dom = $(
          '<div status="-1" filename="' +
            text +
            '" style="margin: 1.25rem; padding: 10px;display: inherit; background-color:#f7f7f7;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;">' +
            '<span style="margin-right: 15px;">' +
            text +
            "</span>" +
            '<i class="icon-bin delete" onclick="cfs.card.body.deleteFileTag(this)" style="margin-right: 10px;cursor: pointer;"></i>' +
            '<div class="customLoader" style="display: none;"></div><span class="infotext" style="margin-left: 5px; margin-right: 5px; display: none;"></span>' +
            '<i data-trigger="hover" data-toggle="popover" data-placement="right" data-content="" class="infobtn icon-info22" style="margin-right: 10px;cursor: pointer; display: none;"></i>'
        );
        if (prepend) this.getDom(cardName).prepend(dom);
        else this.getDom(cardName).append(dom);
        return dom;
      },
      deleteFileTag: function (dom) {
        dom.parentElement.remove();
      },
    },
  },
  data: {
    //数据处理
    spreadjs: {
      createSheetData: function (dimList, dimMap, dataTables, startIndex = 1, maxLength = 10000) {
        var sheetDataObj = { rowDatas: [] };
        if (dataTables == undefined || Object.keys(dataTables).length == 0) return sheetDataObj;
        //准备表头所在列和维度名的map
        var colMap = {};
        for (let i = 0; i < dataTables[0].length; i++) {
          let dimName = dimMap[dataTables[0][i].value] || dataTables[0][i].value;
          if (dimMap.indexOf(dimName) != -1) {
            colMap[i] = dimName;
          }
        }
        var rowDatasArr = [];
        for (let i = startIndex; i < startIndex + maxLength; i++) {
          if (dataTables[i]) {
            let arr = dataTables[i];
            var columnDimensionMemberMap = {};
            for (let c in colMap) {
              let val = arr[c].value;
              columnDimensionMemberMap[colMap[c]] = val;
            }
            rowDatasArr.push({
              columnDimensionMemberMap: columnDimensionMemberMap,
            });
          }
        }
        sheetDataObj.rowDatas = rowDatasArr;
        return sheetDataObj;
      },
    },
  },
  common: {
    //通用方法
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
    valueToDate: function (value) {
      let n = Number(value.split(".")[0]);
      var date = new Date("1900-1-1");
      date.setDate(date.getDate() + n - 2);
      return date.format();
    },
  },
  export: {
    toCsv: function (fileName, dataJson, titleArr = null, titleArrDesc = null) {
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
      var dataStr = (titleArrDesc == null ? titleStr : titleArrDesc.join("\t,")) + "\n" + dataArr.join("\n");
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
const mobileHeight = (cardName, height) => {
  let cardDom = $("#" + cardName).parent();
  $(cardDom).height(height);
  let echartDom = $("#" + cardName)
    .find(".card-body")
    .find(".echart");
  let _height = $(echartDom).parent().height();
  $(echartDom).height(_height);
};
