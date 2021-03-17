$(() => {
  r1();
  r1c1();
  r1c2();
  r2c1();
});

const r1 = () => {
  let dashboardDom = $(".dashBoardContent");
  let html = `
  <div class="row dataSheet mb-2 row_extra_1" style="height: 90px">
  <div class="col-2">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-blue-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">任务总数</div>
            <div class="font-weight-semibold" style="font-size: large">25</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-2">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-blue-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">正常完成</div>
            <div class="font-weight-semibold" style="font-size: large">5</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-2">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-blue-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">延期完成</div>
            <div class="font-weight-semibold" style="font-size: large">1</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-2">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-blue-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">进行中</div>
            <div class="font-weight-semibold" style="font-size: large">1</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-2">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-blue-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">进行中-延期</div>
            <div class="font-weight-semibold" style="font-size: large">1</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-2">
    <div class="card">
      <div class="card-body pb-1">
        <div class="d-flex align-items-center justify-content-left mb-2">
          <a href="#" class="btn bg-transparent border-blue-400 text-blue-400 rounded-round border-2 btn-icon mr-3">
            <i class="icon-stats-bars4"></i>
          </a>
          <div>
            <div class="font-weight-semibold" style="font-size: medium;white-space: nowrap;">未开始</div>
            <div class="font-weight-semibold" style="font-size: large">17</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
  dashboardDom.prepend(html);
};

const r1c1 = () => {
  let cardName = "r1c1";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");
  let headDom = cfs.card.head.getDom(cardName);

  cfs.echarts.correctHeight(cardName);

  let html = `
  <form action="#">
    <div class="row">
      <label class="col-lg-3 col-form-label">项目代码</label>
      <div class="col-lg-9">
        <div class="form-control-plaintext">ITPRO00182021021</div>
      </div>
    </div>

    <div class="row">
      <label class="col-lg-3 col-form-label">项目名称</label>
      <div class="col-lg-9">
        <div class="form-control-plaintext">capex三期</div>
      </div>
    </div>

    <div class="row">
      <label class="col-lg-3 col-form-label">项目性质</label>
      <div class="col-lg-9">
        <div class="form-control-plaintext">capex</div>
      </div>
    </div>

    <div class="row">
      <label class="col-lg-3 col-form-label">执行部门</label>
      <div class="col-lg-9">
        <div class="form-control-plaintext">IT</div>
      </div>
    </div>

    <div class="row">
      <label class="col-lg-3 col-form-label">项目经理</label>
      <div class="col-lg-9">
        <div class="form-control-plaintext">Evan</div>
      </div>
    </div>

    <div class="row">
      <label class="col-lg-3 col-form-label">业务部门</label>
      <div class="col-lg-9">
        <div class="form-control-plaintext">Asset Management</div>
      </div>
    </div>

    <div class="row">
      <label class="col-lg-3 col-form-label">开始日期</label>
      <div class="col-lg-9">
        <div class="form-control-plaintext">2021-04-01</div>
      </div>
    </div>

    <div class="row">
      <label class="col-lg-3 col-form-label">结束日期</label>
      <div class="col-lg-9">
        <div class="form-control-plaintext">2022-11-01</div>
      </div>
    </div>
  </form>
  `;

  echartDom.html(html);
};

function r1c2() {
  let cardName = "r1c2";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");

  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  let option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: 10,
      data: ["剩余额度", "已使用"],
    },
    graphic: [
      {
        type: "text",
        left: "center",
        top: "48%",
        style: {
          text: "40%",
          textAlign: "center",
          fill: "#000",
          width: 40,
          height: 30,
          fontSize: 18,
        },
      },
    ],
    series: [
      {
        // name: '访问来源',
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 29880800, name: "剩余额度" },
          { value: 19544900, name: "已使用" },
        ],
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function r2c1() {
  let cardName = "r2c1";
  let echartDom = cfs.card.body.getDom(cardName).find(".echart");

  let cardBodyDom = cfs.card.body.getDom(cardName);
  let _height = $(cardBodyDom).height();
  $(echartDom).height(_height);

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    legend: {
      data: ["预算支出", "实际支出", "预算总量", "实际总量"],
      bottom: "bottom",
    },
    grid: {
      left: "4%",
      right: "4%",
      bottom: "10%",
      top: "6%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["Jan-20", "Feb-20", "Mar-20", "Apr-20", "May-20", "Jun-20", "Jul-20", "Aug-20", "Sep-20", "Oct-20", "Nov-20", "Dec-20"],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        // name: '水量',
        min: 0,
        // max: 250,
        interval: 20000,
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        // name: '温度',
        min: 0,
        // max: 25,
        interval: 100000,
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],

    series: [
      {
        name: "预算支出",
        type: "bar",
        data: [8399, 20391, 28966, 90407, 58060, 9519, 50790, 48181, 40710, 38718, 97960, 2156],
      },
      {
        name: "实际支出",
        type: "bar",
        data: [6099, 9384, 38966, 91000, 50000, "-", "-", "-", "-", "-", "-", "-"],
      },
      {
        name: "预算总量",
        type: "line",
        yAxisIndex: 1,
        data: [8399, 28790, 57756, 148163, 206223, 215742, 266532, 314713, 355423, 394141, 492101, 494257],
      },
      {
        name: "实际总量",
        type: "line",
        yAxisIndex: 1,
        data: [6099, 15483, 54449, 145449, 195449, "-", "-", "-", "-", "-", "-", "-"],
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

function renderEcharts(data, params) {
  var componentId = params.componentId;
  var myChart = echarts.init(document.getElementById("chart-" + componentId));
  var HEIGHT_RATIO = 0.6;
  var Index = 0;
  var start_date = 1; //对应下标
  var end_date = 2; //对应下标
  var DATA_ZOOM_AUTO_MOVE_THROTTLE = 30;
  var DATA_ZOOM_X_INSIDE_INDEX = 1;
  var DATA_ZOOM_Y_INSIDE_INDEX = 3;
  var DATA_ZOOM_AUTO_MOVE_SPEED = 0.2;
  var DATA_ZOOM_AUTO_MOVE_DETECT_AREA_WIDTH = 30;
  var _draggable;
  var _draggingEl;
  var _dropShadow;
  var _draggingCursorOffset = [0, 0];
  var _draggingTimeLength;
  var _draggingRecord;
  var _dropRecord;
  var _cartesianXBounds = [];
  var _cartesianYBounds = [];
  var _rawData;
  var _autoDataZoomAnimator;
  var defaultDate = "2020-5-31"; //默认显示的坐标时间
  var color1 = "#bf2536"; //红色-实际结束日期比结束日期大
  var color2 = "#1e9f00"; //绿色-实际结束日期比结束日期小
  var color3 = "#ddb30b"; //甘特图黄色区域
  var handleShow = false; //手柄是否显示
  var timeArray = []; //显示坐标线时间的数组
  var getListData = {
    //显示甘特图组合部分的数据
    parkingApron: {},
    flight: {},
  };
  let res2 = {
    res: [
      {
        task_name: "Project Kick Off",
        end_date: "2020-01-02 00:00:00",
        actual_end_date: "2020-01-09 00:00:00",
        task_code: "Task01",
        start_date: "2020-01-01 00:00:00",
      },
      {
        task_name: "Requirement confirm",
        end_date: "2020-01-31 00:00:00",
        actual_end_date: "2020-04-18 00:00:00",
        task_code: "Task02",
        start_date: "2020-01-01 00:00:00",
      },
      {
        task_name: "Development",
        end_date: "2020-04-30 00:00:00",
        actual_end_date: "2020-04-30 00:00:00",
        task_code: "Task03",
        start_date: "2020-02-01 00:00:00",
      },
      {
        task_name: "SIT",
        end_date: "2020-05-31 00:00:00",
        actual_end_date: "2020-07-02 00:00:00",
        task_code: "Task04",
        start_date: "2020-05-01 00:00:00",
      },
      {
        task_name: "UAT",
        end_date: "2020-06-30 00:00:00",
        actual_end_date: "2020-07-15 00:00:00",
        task_code: "Task05",
        start_date: "2020-06-01 00:00:00",
      },
      {
        task_name: "Go live",
        end_date: "2020-07-15 00:00:00",
        actual_end_date: "2020-07-04 00:00:00",
        task_code: "Task06",
        start_date: "2020-07-01 00:00:00",
      },
      {
        task_name: "Training",
        end_date: "2020-07-31 00:00:00",
        actual_end_date: null,
        task_code: "Task07",
        start_date: "2020-07-16 00:00:00",
      },
      {
        task_name: "Payment",
        end_date: "2020-08-31 00:00:00",
        actual_end_date: null,
        task_code: "Task08",
        start_date: "2020-08-01 00:00:00",
      },
    ],
  };
  getListData.parkingApron["dimensions"] = ["Name", "Type"];
  getListData.parkingApron["data"] = [];
  getListData.flight["dimensions"] = ["Index", "start_date", "end_date", "actual_end_date", "Flight Number", "lineDate"];
  getListData.flight["data"] = [];
  $.each(res2.res, function (k, v) {
    var array = [];
    var flightArray = [];
    // y轴数据
    array.push(v.task_code);
    array.push(v.task_name);
    getListData.parkingApron["data"].push(array);
    // 主体数据
    flightArray.push(v.start_date);
    flightArray.push(v.end_date);
    flightArray.push(v.actual_end_date || "");
    getListData.flight["data"].push(flightArray);
  });
  getListData.parkingApron["data"].reverse();
  getListData.flight["data"].reverse(); //先把书序倒序
  // 再添加index
  $.each(getListData.flight["data"], function (k, v) {
    getListData.flight["data"][k].unshift(k);
  });
  var startTime = getListData.flight.data[getListData.flight.data.length - 1][1]; //开始时间
  var endTime = getListData.flight.data[0][2]; //结束时间
  // 给getListData.flightArray.data赋值显示坐标线的时间点
  var getDays = getAll(startTime.split(" ")[0], endTime.split(" ")[0]); //获取区间的所有日期
  $.each(getDays, function (k, v) {
    if (new Date(v).getDate() == 1 && new Date(v).getMonth() == 0) {
      //获取2020-1-1
      timeArray.push(formatDate(new Date(v)));
    } else if (isLastDay(v) == true) {
      // 判断是否是最后一天
      timeArray.push(formatDate(new Date(v)));
    }
  });
  _rawData = getListData;
  console.log(_rawData);
  // 判断坐标轴默认日期是否在日期区间范围内
  var now = new Date(defaultDate);
  var d1 = new Date(startTime);
  var d2 = new Date(endTime);
  if (now > d1 && now < d2 == true) {
    //是否显示手柄
    handleShow = true;
  }
  myChart.setOption((option = makeOption()));
  initDrag();
  // 初始化option
  function makeOption() {
    return {
      tooltip: {
        show: true,
        formatter: function (params) {
          var startDate = params.data[1];
          var endDate = params.data[2];
          var actualDate = params.data[3];
          return `<div>
                          <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#f44336;"></span>开始日期：${startDate}
                        </div>
                        <div>
                          <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#f44336;"></span>结束日期：${endDate}
                        </div>
                        <div>
                          <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#f44336;"></span>实际结束日期：${actualDate}
                        </div>`;
        },
      },
      animation: false,
      toolbox: {
        left: 20,
        top: 0,
        itemSize: 20,
        feature: {
          myDrag: {
            show: false,
            title: "Make bars\ndraggable",
            icon:
              "path://M990.55 380.08 q11.69 0 19.88 8.19 q7.02 7.01 7.02 18.71 l0 480.65 q-1.17 43.27 -29.83 71.93 q-28.65 28.65 -71.92 29.82 l-813.96 0 q-43.27 -1.17 -72.5 -30.41 q-28.07 -28.07 -29.24 -71.34 l0 -785.89 q1.17 -43.27 29.24 -72.5 q29.23 -29.24 72.5 -29.24 l522.76 0 q11.7 0 18.71 7.02 q8.19 8.18 8.19 18.71 q0 11.69 -7.6 19.29 q-7.6 7.61 -19.3 7.61 l-518.08 0 q-22.22 1.17 -37.42 16.37 q-15.2 15.2 -15.2 37.42 l0 775.37 q0 23.39 15.2 38.59 q15.2 15.2 37.42 15.2 l804.6 0 q22.22 0 37.43 -15.2 q15.2 -15.2 16.37 -38.59 l0 -474.81 q0 -11.7 7.02 -18.71 q8.18 -8.19 18.71 -8.19 l0 0 ZM493.52 723.91 l-170.74 -170.75 l509.89 -509.89 q23.39 -23.39 56.13 -21.05 q32.75 1.17 59.65 26.9 l47.94 47.95 q25.73 26.89 27.49 59.64 q1.75 32.75 -21.64 57.3 l-508.72 509.9 l0 0 ZM870.09 80.69 l-56.13 56.14 l94.72 95.9 l56.14 -57.31 q8.19 -9.35 8.19 -21.05 q-1.17 -12.86 -10.53 -22.22 l-47.95 -49.12 q-10.52 -9.35 -23.39 -9.35 q-11.69 -1.17 -21.05 7.01 l0 0 ZM867.75 272.49 l-93.56 -95.9 l-380.08 380.08 l94.73 94.73 l378.91 -378.91 l0 0 ZM322.78 553.16 l38.59 39.77 l-33.92 125.13 l125.14 -33.92 l38.59 38.6 l-191.79 52.62 q-5.85 1.17 -12.28 0 q-6.44 -1.17 -11.11 -5.84 q-4.68 -4.68 -5.85 -11.7 q-2.34 -5.85 0 -11.69 l52.63 -192.97 l0 0 Z",
            onclick: onDragSwitchClick,
          },
        },
      },
      dataZoom: [
        {
          type: "slider",
          xAxisIndex: 0,
          filterMode: "weakFilter",
          height: 20,
          bottom: 0,
          start: 0,
          end: 100,
          handleIcon:
            "M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
          handleSize: "80%",
          showDetail: false,
        },
        {
          type: "inside",
          id: "insideX",
          xAxisIndex: 0,
          filterMode: "weakFilter",
          start: 0,
          end: 100,
          zoomOnMouseWheel: false,
          moveOnMouseMove: true,
        },
        {
          type: "slider",
          yAxisIndex: 0,
          zoomLock: true,
          width: 10,
          right: 10,
          top: 70,
          bottom: 20,
          start: 0,
          end: 100,
          handleSize: 0,
          showDetail: false,
        },
        {
          type: "inside",
          id: "insideY",
          yAxisIndex: 0,
          start: 0,
          end: 100,
          zoomOnMouseWheel: false,
          moveOnMouseMove: true,
          moveOnMouseWheel: true,
        },
      ],
      grid: {
        show: true,
        top: 78,
        bottom: 20,
        left: 180,
        right: 30,
        backgroundColor: "#fff",
        borderWidth: 0,
      },
      axisPointer: {
        //坐标线不跟鼠标移动而动
        triggerOn: "none",
      },
      xAxis: {
        type: "time",
        position: "top",
        min: startTime,
        max: endTime,
        // interval: 3600 * 24 * 1000 * 30.4,
        interval: 3600 * 24 * 1000,
        axisPointer: {
          //坐标线
          triggerTooltip: false,
          value: defaultDate,
          snap: false, //坐标轴指示器是否自动吸附到点上
          lineStyle: {
            color: "#004E52",
            opacity: 0.3,
            width: 2,
          },
          label: {
            show: true,
            formatter: function (params) {
              return echarts.format.formatTime("yyyy-MM-dd", params.value);
            },
            backgroundColor: "#004E52",
            margin: -20, //label距离轴的距离
          },
          handle: {
            show: handleShow,
            color: "#004E52",
            size: 0,
          },
        },
        splitLine: {
          //分隔线颜色，可以设置成单个颜色
          show: false,
          lineStyle: {
            color: ["#E9EDFF"],
          },
        },
        axisLine: {
          //是否显示坐标轴线
          show: false,
        },
        axisTick: {
          //刻度线的颜色
          show: false,
          lineStyle: {
            color: "#929ABA",
          },
        },
        axisLabel: {
          color: "#929ABA",
          inside: false,
          align: "center",
          showMinLabel: true,
          showMaxLabel: true,
          // rotate:45,
          formatter: function (value, index) {
            var date = new Date(value);
            if (date.getTime() == new Date(startTime).getTime()) {
              //判断日期和开始日期一样显示开始日期
              return formatDate(date);
            }
            // 判断是否是最后一天--true为最后一天显示
            if (isLastDay(date) == true) {
              return formatDate(date);
            }
          },
        },
      },
      yAxis: {
        axisTick: { show: false },
        splitLine: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false },
        min: 0,
        max: _rawData.parkingApron.data.length,
      },
      series: [
        {
          id: "flightData",
          type: "custom",
          renderItem: renderGanttItem,
          dimensions: _rawData.flight.dimensions,
          encode: {
            x: [start_date, end_date],
            y: Index,
            tooltip: [Index, start_date, end_date],
          },
          data: _rawData.flight.data,
        },
        {
          //渲染左边纵轴坐标
          type: "custom",
          renderItem: renderAxisLabelItem,
          dimensions: _rawData.parkingApron.dimensions,
          encode: {
            x: -1, // Then this series will not controlled by x.
            y: 0,
          },
          data: echarts.util.map(_rawData.parkingApron.data, function (item, index) {
            return [index].concat(item);
          }),
        },
      ],
    };
  }
  // 组合甘特图主体区域
  function renderGanttItem(params, api) {
    var categoryIndex = api.value(Index);
    var timeArrival = api.coord([api.value(start_date), categoryIndex]);
    var timeDeparture = api.coord([api.value(end_date), categoryIndex]);
    var coordSys = params.coordSys;
    _cartesianXBounds[0] = coordSys.x;
    _cartesianXBounds[1] = coordSys.x + coordSys.width;
    _cartesianYBounds[0] = coordSys.y;
    _cartesianYBounds[1] = coordSys.y + coordSys.height;
    var barLength = timeDeparture[0] - timeArrival[0];
    // Get the heigth corresponds to length 1 on y axis.
    var barHeight = api.size([0, 1])[1] * HEIGHT_RATIO;
    var x = timeArrival[0];
    var y = timeArrival[1] - barHeight;
    var flightNumber = api.value(3) + "";
    var flightNumberWidth = echarts.format.getTextRect(flightNumber).width;
    var text = barLength > flightNumberWidth + 40 && x + barLength >= 180 ? flightNumber : "";
    //黄色区域
    var rectNormal = clipRectByRect(params, {
      x: x,
      y: y,
      width: barLength,
      height: barHeight,
    });
    // 红色区域--设置实际日期比结束日期大
    // api.value(3)--获取的是实际结束日期
    var satrtDateT;
    var endDateT;
    var start;
    var end;
    var styleColor;
    if (api.value(3) !== "") {
      //判断实际结束日期存在
      var dateSize = CompareDate(api.value(3), formatDate(new Date(api.value(2))));
      if (dateSize == true) {
        //实际结束日期比结束日期大
        satrtDateT = new Date(api.value(2)); //结束日期
        endDateT = new Date(api.value(3)); //实际结束日期
        styleColor = color1;
      } else {
        //实际结束日期比结束日期小
        satrtDateT = new Date(api.value(3)); //实际结束日期
        endDateT = new Date(api.value(2)); //结束日期
        styleColor = color2;
      }
    }
    if (satrtDateT !== undefined && endDateT !== undefined) {
      var getStartTimeT = satrtDateT.getTime();
      var getEndTimeT = endDateT.getTime();
      start = api.coord([getStartTimeT, categoryIndex]); //api.value(1)--开始时间
      end = api.coord([getEndTimeT, categoryIndex]); //api.value(2)--结束时间
      var rectVIP = clipRectByRect(params, {
        x: start[0],
        y: start[1] - barHeight,
        width: end[0] - start[0],
        height: barHeight,
      });
    }
    var lineStyle = api.style({
      fill: "#E9EDFF",
    });
    var returnChildren = [];
    // 渲染主体区域时把坐标线也显示出来
    returnChildren = [
      {
        type: "rect",
        ignore: !rectNormal,
        shape: rectNormal,
        style: api.style({ fill: color3 }), //黄色区域
        z2: 10,
      },
      {
        type: "rect",
        ignore: !rectVIP && !api.value(4),
        shape: rectVIP,
        style: api.style({ fill: styleColor }), //红色区域或者绿色区域
        z2: 10,
      },
    ];
    //绘制x轴坐标线
    $.each(timeArray, function (k, v) {
      var lineDate = api.coord([v, k]);
      var rectText = clipRectByRect(params, {
        x: lineDate[0],
        y: 30,
        width: 1,
        height: 400,
      });
      var obj = {
        type: "rect",
        ignore: !rectNormal && !rectVIP,
        shape: rectText,
        silent: true, //坐标轴是否是静态无法交互
        style: lineStyle, //坐标线
      };
      returnChildren.push(obj);
    });
    return {
      type: "group",
      children: returnChildren,
    };
  }
  // 自定义y轴
  function renderAxisLabelItem(params, api) {
    var y = api.coord([0, api.value(0)])[1];
    if (y < params.coordSys.y + 5) {
      return;
    }
    return {
      type: "group",
      position: [0, y],
      children: [
        {
          type: "path",
          shape: {
            d: "M0,0 L0,-20 L30,-20 C42,-20 38,-1 50,-1 L70,-1 L70,0 Z",
            x: 0,
            y: -20,
            width: 90,
            height: 20,
            layout: "cover",
          },
          style: {
            fill: "#368c6c",
          },
        },
        {
          //绿色框配置项
          type: "text",
          style: {
            x: 3,
            y: -3,
            text: api.value(1),
            textVerticalAlign: "bottom",
            textAlign: "left",
            textFill: "#fff",
          },
        },
        {
          //绿色后面值配置项
          type: "text",
          style: {
            x: 58,
            y: -2,
            textVerticalAlign: "bottom",
            textAlign: "left",
            text: api.value(2),
            textFill: "#000",
          },
        },
      ],
    };
  }
  function clipRectByRect(params, rect) {
    return echarts.graphic.clipRectByRect(rect, {
      x: params.coordSys.x,
      y: params.coordSys.y,
      width: params.coordSys.width,
      height: params.coordSys.height,
    });
  }
  function onDragSwitchClick(model, api, type) {
    _draggable = !_draggable;
    myChart.setOption({
      dataZoom: [
        {
          id: "insideX",
          disabled: _draggable,
        },
        {
          id: "insideY",
          disabled: _draggable,
        },
      ],
    });
    this.model.setIconStatus(type, _draggable ? "emphasis" : "normal");
  }
  function initDrag() {
    _autoDataZoomAnimator = makeAnimator(dispatchDataZoom);
    myChart.on("mousedown", function (param) {
      if (!_draggable || !param || param.seriesIndex == null) {
        return;
      }
      // Drag start
      _draggingRecord = {
        dataIndex: param.dataIndex,
        categoryIndex: param.value[Index],
        timeArrival: param.value[start_date],
        timeDeparture: param.value[end_date],
      };
      var style = { lineWidth: 2, fill: "rgba(255,0,0,0.1)", stroke: "rgba(255,0,0,0.8)", lineDash: [6, 3] };

      _draggingEl = addOrUpdateBar(_draggingEl, _draggingRecord, style, 100);
      _draggingCursorOffset = [_draggingEl.position[0] - param.event.offsetX, _draggingEl.position[1] - param.event.offsetY];
      _draggingTimeLength = _draggingRecord.timeDeparture - _draggingRecord.timeArrival;
    });
    myChart.getZr().on("mousemove", function (event) {
      if (!_draggingEl) {
        return;
      }
      var cursorX = event.offsetX;
      var cursorY = event.offsetY;
      // Move _draggingEl.
      _draggingEl.attr("position", [_draggingCursorOffset[0] + cursorX, _draggingCursorOffset[1] + cursorY]);
      prepareDrop();
      autoDataZoomWhenDraggingOutside(cursorX, cursorY);
    });
    myChart.getZr().on("mouseup", function () {
      // Drop
      if (_draggingEl && _dropRecord) {
        updateRawData() &&
          myChart.setOption({
            series: {
              id: "flightData",
              data: _rawData.flight.data,
            },
          });
      }
      dragRelease();
    });
    myChart.getZr().on("globalout", dragRelease);
    function dragRelease() {
      _autoDataZoomAnimator.stop();
      if (_draggingEl) {
        myChart.getZr().remove(_draggingEl);
        _draggingEl = null;
      }
      if (_dropShadow) {
        myChart.getZr().remove(_dropShadow);
        _dropShadow = null;
      }
      _dropRecord = _draggingRecord = null;
    }
    function addOrUpdateBar(el, itemData, style, z) {
      var pointArrival = myChart.convertToPixel("grid", [itemData.timeArrival, itemData.categoryIndex]);
      var pointDeparture = myChart.convertToPixel("grid", [itemData.timeDeparture, itemData.categoryIndex]);

      var barLength = pointDeparture[0] - pointArrival[0];
      var barHeight = Math.abs(myChart.convertToPixel("grid", [0, 0])[1] - myChart.convertToPixel("grid", [0, 1])[1]) * HEIGHT_RATIO;
      if (!el) {
        el = new echarts.graphic.Rect({
          shape: { x: 0, y: 0, width: 0, height: 0 },
          style: style,
          z: z,
        });
        myChart.getZr().add(el);
      }
      el.attr({
        shape: { x: 0, y: 0, width: barLength, height: barHeight },
        position: [pointArrival[0], pointArrival[1] - barHeight],
      });
      return el;
    }
    function prepareDrop() {
      // Check droppable place.
      var xPixel = _draggingEl.shape.x + _draggingEl.position[0];
      var yPixel = _draggingEl.shape.y + _draggingEl.position[1];
      var cursorData = myChart.convertFromPixel("grid", [xPixel, yPixel]);
      if (cursorData) {
        // Make drop shadow and _dropRecord
        _dropRecord = {
          categoryIndex: Math.floor(cursorData[1]),
          timeArrival: cursorData[0],
          timeDeparture: cursorData[0] + _draggingTimeLength,
        };
        var style = { fill: "rgba(0,0,0,0.4)" };
        _dropShadow = addOrUpdateBar(_dropShadow, _dropRecord, style, 99);
      }
    }
    // This is some business logic, don't care about it.
    function updateRawData() {
      var flightData = _rawData.flight.data;
      var movingItem = flightData[_draggingRecord.dataIndex];

      // Check conflict
      for (var i = 0; i < flightData.length; i++) {
        var dataItem = flightData[i];
        if (
          dataItem !== movingItem &&
          _dropRecord.categoryIndex === dataItem[Index] &&
          _dropRecord.timeArrival < dataItem[end_date] &&
          _dropRecord.timeDeparture > dataItem[start_date]
        ) {
          alert("Conflict! Find a free space to settle the bar!");
          return;
        }
      }
      // No conflict.
      movingItem[Index] = _dropRecord.categoryIndex;
      movingItem[start_date] = _dropRecord.timeArrival;
      movingItem[end_date] = _dropRecord.timeDeparture;
      return true;
    }
    function autoDataZoomWhenDraggingOutside(cursorX, cursorY) {
      // When cursor is outside the cartesian and being dragging,
      // auto move the dataZooms.
      var cursorDistX = getCursorCartesianDist(cursorX, _cartesianXBounds);
      var cursorDistY = getCursorCartesianDist(cursorY, _cartesianYBounds);

      if (cursorDistX !== 0 || cursorDistY !== 0) {
        _autoDataZoomAnimator.start({
          cursorDistX: cursorDistX,
          cursorDistY: cursorDistY,
        });
      } else {
        _autoDataZoomAnimator.stop();
      }
    }
    function dispatchDataZoom(params) {
      var option = myChart.getOption();
      var optionInsideX = option.dataZoom[DATA_ZOOM_X_INSIDE_INDEX];
      var optionInsideY = option.dataZoom[DATA_ZOOM_Y_INSIDE_INDEX];
      var batch = [];

      prepareBatch(batch, "insideX", optionInsideX.start, optionInsideX.end, params.cursorDistX);
      prepareBatch(batch, "insideY", optionInsideY.start, optionInsideY.end, -params.cursorDistY);
      batch.length &&
        myChart.dispatchAction({
          type: "dataZoom",
          batch: batch,
        });
      function prepareBatch(batch, id, start, end, cursorDist) {
        if (cursorDist === 0) {
          return;
        }
        var sign = cursorDist / Math.abs(cursorDist);
        var size = end - start;
        var delta = DATA_ZOOM_AUTO_MOVE_SPEED * sign;

        start += delta;
        end += delta;

        if (end > 100) {
          end = 100;
          start = end - size;
        }
        if (start < 0) {
          start = 0;
          end = start + size;
        }
        batch.push({
          dataZoomId: id,
          start: start,
          end: end,
        });
      }
    }
    function getCursorCartesianDist(cursorXY, bounds) {
      var dist0 = cursorXY - (bounds[0] + DATA_ZOOM_AUTO_MOVE_DETECT_AREA_WIDTH);
      var dist1 = cursorXY - (bounds[1] - DATA_ZOOM_AUTO_MOVE_DETECT_AREA_WIDTH);
      return dist0 * dist1 <= 0
        ? 0 // cursor is in cartesian
        : dist0 < 0
        ? dist0 // cursor is at left/top of cartesian
        : dist1; // cursor is at right/bottom of cartesian
    }
    function makeAnimator(callback) {
      var requestId;
      var callbackParams;
      // Use throttle to prevent from calling dispatchAction frequently.
      callback = echarts.throttle(callback, DATA_ZOOM_AUTO_MOVE_THROTTLE);

      function onFrame() {
        callback(callbackParams);
        requestId = requestAnimationFrame(onFrame);
      }
      return {
        start: function (params) {
          callbackParams = params;
          if (requestId == null) {
            onFrame();
          }
        },
        stop: function () {
          if (requestId != null) {
            cancelAnimationFrame(requestId);
          }
          requestId = callbackParams = null;
        },
      };
    }
  }
  // 格式化日期
  function formatDate(now) {
    var year = now.getFullYear(); //取得4位数的年份
    var month = now.getMonth() + 1; //取得日期中的月份，其中0表示1月，11表示12月
    var date = now.getDate(); //返回日期月份中的天数（1到31）
    return year + "-" + month + "-" + date;
  }
  // 补齐日期
  function getAll(begin, end) {
    var arr = [];
    var ab = begin.split("-");
    var ae = end.split("-");
    var db = new Date();
    db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
    var de = new Date();
    de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
    var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
    var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
    for (var k = unixDb; k <= unixDe; ) {
      //console.log((new Date(parseInt(k))).format());
      k = k + 24 * 60 * 60 * 1000;
      arr.push(new Date(parseInt(k)).format());
    }
    return arr;
  }
  //判断是否是最后一天
  function isLastDay(inputDate) {
    var d = new Date(inputDate);
    var nd = new Date(d.getTime() + 24 * 60 * 60 * 1000); //next day
    return d.getMonth() != nd.getMonth();
  }
  // 比较两个日期的大小
  function CompareDate(d1, d2) {
    return new Date(d1.replace(/-/g, "/")) > new Date(d2.replace(/-/g, "/"));
  }
}

var Cus_theme = "westeros";
var Cus_echarts = {};
//extrajs全局方法
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
