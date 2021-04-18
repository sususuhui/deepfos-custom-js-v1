$(() => {
  r1();
});

const r1 = () => {
  let dashboardDom = $(".dashBoardContent");
  let html = `
    <div class="row">
        <div class="col-xl-12">
          <div class="card" id="card1" style="height: 600px; margin-left: 2px; margin-right:5px">
            <div class="card-header bg-white header-elements-inline listHeader" style="padding: 0.625rem 1.25rem">
              <h6 class="card-title text-nowrap mr-3 element-name hiddenStyle">亏损过程分析-收入</h6>
            </div>
          </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-6">
          <div class="card" id="card2" style="height: 370px; margin-left: 2px; margin-right:5px">
            <div class="card-header bg-white header-elements-inline listHeader" style="padding: 0.625rem 1.25rem">
              <h6 class="card-title text-nowrap mr-3 element-name hiddenStyle">RevPAR和入住率概览</h6>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card" id="card3" style="height: 370px; margin-left: 2px; margin-right:5px">
            <div class="card-header bg-white header-elements-inline listHeader" style="padding: 0.625rem 1.25rem">
              <h6 class="card-title text-nowrap mr-3 element-name hiddenStyle">门店-波士顿矩阵分析</h6>
            </div>
          </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-12">
          <div class="card" id="card4" style="height: 600px; margin-left: 2px; margin-right:5px">
            <div class="card-header bg-white header-elements-inline listHeader" style="padding: 0.625rem 1.25rem">
              <h6 class="card-title text-nowrap mr-3 element-name hiddenStyle">亏损过程分析-成本</h6>
            </div>
          </div>
        </div>
    </div>
  `;
  dashboardDom.prepend(html);
  // 指定图表的配置项和数据
  option1 = {
    title: {
      text: "",
      subtext: "",
      left: "center",
      top: "5%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      x: "50%",
      y: "80%",
    },
    grid: {
      left: "5%",
      right: "5%",
      bottom: "30%",
      top: "10%",
      containLabel: false,
    },
    dataZoom: [
      {
        type: "slider", //slider表示有滑动块的，inside表示内置的
        show: true,
        xAxisIndex: [0],
      },
    ],
    xAxis: [
      {
        type: "category",
        data: [
          "M-12",
          "M-11",
          "M-10",
          "M-9",
          "M-8",
          "M-7",
          "M-6",
          "M-5",
          "M-4",
          "M-3",
          "M-2",
          "M-1",
          "M",
          "M+1",
          "M+2",
          "M+3",
          "M+4",
          "M+5",
          "M+6",
          "M+7",
          "M+8",
          "M+9",
          "M+10",
          "M+11",
          "M+12",
        ],
        color: function (value, index) {
          debugger;
          if (index == "M") {
            return "red";
          } else {
            return "black";
          }
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "金额(万元)",
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "希岸酒店-四川成都锦里店",
        data: [
          19500 * (Math.random() * 0.05 + 1),
          19000 * (Math.random() * 0.1 + 1),
          18500 * (Math.random() * 0.1 + 1),
          18000 * (Math.random() * 0.1 + 1),
          17500 * (Math.random() * 0.1 + 1),
          17000 * (Math.random() * 0.1 + 1),
          16500 * (Math.random() * 0.1 + 1),
          16000 * (Math.random() * 0.1 + 1),
          15500 * (Math.random() * 0.1 + 1),
          15000 * (Math.random() * 0.1 + 1),
          12500 * (Math.random() * 0.1 + 1),
          10500 * (Math.random() * 0.1 + 1),
          3000 * (Math.random() * 0.05 + 1),
          2500 * (Math.random() * 0.1 + 1),
          2000 * (Math.random() * 0.1 + 1),
          1500 * (Math.random() * 0.1 + 1),
          1200 * (Math.random() * 0.1 + 1),
          1000 * (Math.random() * 0.1 + 1),
          900 * (Math.random() * 0.1 + 1),
          800 * (Math.random() * 0.1 + 1),
          700 * (Math.random() * 0.1 + 1),
          600 * (Math.random() * 0.1 + 1),
          500 * (Math.random() * 0.1 + 1),
          400 * (Math.random() * 0.1 + 1),
          100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 1.5),
        type: "line",
      },
      {
        name: "欧暇·地中海-深圳深圳野生动物园店",
        data: [
          19500 * (Math.random() * 0.05 + 1),
          19000 * (Math.random() * 0.1 + 1),
          18500 * (Math.random() * 0.1 + 1),
          18000 * (Math.random() * 0.1 + 1),
          17500 * (Math.random() * 0.1 + 1),
          17000 * (Math.random() * 0.1 + 1),
          16500 * (Math.random() * 0.1 + 1),
          16000 * (Math.random() * 0.1 + 1),
          15500 * (Math.random() * 0.1 + 1),
          15000 * (Math.random() * 0.1 + 1),
          12500 * (Math.random() * 0.1 + 1),
          10500 * (Math.random() * 0.1 + 1),
          3000 * (Math.random() * 0.05 + 1),
          2500 * (Math.random() * 0.1 + 1),
          2000 * (Math.random() * 0.1 + 1),
          1500 * (Math.random() * 0.1 + 1),
          1200 * (Math.random() * 0.1 + 1),
          1000 * (Math.random() * 0.1 + 1),
          900 * (Math.random() * 0.1 + 1),
          800 * (Math.random() * 0.1 + 1),
          700 * (Math.random() * 0.1 + 1),
          600 * (Math.random() * 0.1 + 1),
          500 * (Math.random() * 0.1 + 1),
          400 * (Math.random() * 0.1 + 1),
          100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 1.4),
        type: "line",
      },
      {
        name: "锦江之星-上海同济大学店",
        data: [
          19500 * (Math.random() * 0.05 + 1),
          19000 * (Math.random() * 0.1 + 1),
          18500 * (Math.random() * 0.1 + 1),
          18000 * (Math.random() * 0.1 + 1),
          17500 * (Math.random() * 0.1 + 1),
          17000 * (Math.random() * 0.1 + 1),
          16500 * (Math.random() * 0.1 + 1),
          16000 * (Math.random() * 0.1 + 1),
          15500 * (Math.random() * 0.1 + 1),
          15000 * (Math.random() * 0.1 + 1),
          12500 * (Math.random() * 0.1 + 1),
          10500 * (Math.random() * 0.1 + 1),
          3000 * (Math.random() * 0.05 + 1),
          2500 * (Math.random() * 0.1 + 1),
          2000 * (Math.random() * 0.1 + 1),
          1500 * (Math.random() * 0.1 + 1),
          1200 * (Math.random() * 0.1 + 1),
          1000 * (Math.random() * 0.1 + 1),
          900 * (Math.random() * 0.1 + 1),
          800 * (Math.random() * 0.1 + 1),
          700 * (Math.random() * 0.1 + 1),
          600 * (Math.random() * 0.1 + 1),
          500 * (Math.random() * 0.1 + 1),
          400 * (Math.random() * 0.1 + 1),
          100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 1.3),
        type: "line",
      },
      {
        name: "郁锦香-南宁阳朔西街店",
        data: [
          19500 * (Math.random() * 0.05 + 1),
          19000 * (Math.random() * 0.1 + 1),
          18500 * (Math.random() * 0.1 + 1),
          18000 * (Math.random() * 0.1 + 1),
          17500 * (Math.random() * 0.1 + 1),
          17000 * (Math.random() * 0.1 + 1),
          16500 * (Math.random() * 0.1 + 1),
          16000 * (Math.random() * 0.1 + 1),
          15500 * (Math.random() * 0.1 + 1),
          15000 * (Math.random() * 0.1 + 1),
          12500 * (Math.random() * 0.1 + 1),
          10500 * (Math.random() * 0.1 + 1),
          3000 * (Math.random() * 0.05 + 1),
          2500 * (Math.random() * 0.1 + 1),
          2000 * (Math.random() * 0.1 + 1),
          1500 * (Math.random() * 0.1 + 1),
          1200 * (Math.random() * 0.1 + 1),
          1000 * (Math.random() * 0.1 + 1),
          900 * (Math.random() * 0.1 + 1),
          800 * (Math.random() * 0.1 + 1),
          700 * (Math.random() * 0.1 + 1),
          600 * (Math.random() * 0.1 + 1),
          500 * (Math.random() * 0.1 + 1),
          400 * (Math.random() * 0.1 + 1),
          100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 1.2),
        type: "line",
      },
      {
        name: "喆啡-湖南株洲体育馆店",
        data: [
          19500 * (Math.random() * 0.05 + 1),
          19000 * (Math.random() * 0.1 + 1),
          18500 * (Math.random() * 0.1 + 1),
          18000 * (Math.random() * 0.1 + 1),
          17500 * (Math.random() * 0.1 + 1),
          17000 * (Math.random() * 0.1 + 1),
          16500 * (Math.random() * 0.1 + 1),
          16000 * (Math.random() * 0.1 + 1),
          15500 * (Math.random() * 0.1 + 1),
          15000 * (Math.random() * 0.1 + 1),
          12500 * (Math.random() * 0.1 + 1),
          10500 * (Math.random() * 0.1 + 1),
          3000 * (Math.random() * 0.05 + 1),
          2500 * (Math.random() * 0.1 + 1),
          2000 * (Math.random() * 0.1 + 1),
          1500 * (Math.random() * 0.1 + 1),
          1200 * (Math.random() * 0.1 + 1),
          1000 * (Math.random() * 0.1 + 1),
          900 * (Math.random() * 0.1 + 1),
          800 * (Math.random() * 0.1 + 1),
          700 * (Math.random() * 0.1 + 1),
          600 * (Math.random() * 0.1 + 1),
          500 * (Math.random() * 0.1 + 1),
          400 * (Math.random() * 0.1 + 1),
          100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 1.1),
        type: "line",
      },
      {
        name: "卢浮酒店-广州沙湾古镇店",
        data: [
          19500 * (Math.random() * 0.05 + 1),
          19000 * (Math.random() * 0.1 + 1),
          18500 * (Math.random() * 0.1 + 1),
          18000 * (Math.random() * 0.1 + 1),
          17500 * (Math.random() * 0.1 + 1),
          17000 * (Math.random() * 0.1 + 1),
          16500 * (Math.random() * 0.1 + 1),
          16000 * (Math.random() * 0.1 + 1),
          15500 * (Math.random() * 0.1 + 1),
          15000 * (Math.random() * 0.1 + 1),
          12500 * (Math.random() * 0.1 + 1),
          10500 * (Math.random() * 0.1 + 1),
          3000 * (Math.random() * 0.05 + 1),
          2500 * (Math.random() * 0.1 + 1),
          2000 * (Math.random() * 0.1 + 1),
          1500 * (Math.random() * 0.1 + 1),
          1200 * (Math.random() * 0.1 + 1),
          1000 * (Math.random() * 0.1 + 1),
          900 * (Math.random() * 0.1 + 1),
          800 * (Math.random() * 0.1 + 1),
          700 * (Math.random() * 0.1 + 1),
          600 * (Math.random() * 0.1 + 1),
          500 * (Math.random() * 0.1 + 1),
          400 * (Math.random() * 0.1 + 1),
          100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 1.0),
        type: "line",
      },
      {
        name: "锦江都城-北京奥林匹克公园店",
        data: [
          19500 * (Math.random() * 0.05 + 1),
          19000 * (Math.random() * 0.1 + 1),
          18500 * (Math.random() * 0.1 + 1),
          18000 * (Math.random() * 0.1 + 1),
          17500 * (Math.random() * 0.1 + 1),
          17000 * (Math.random() * 0.1 + 1),
          16500 * (Math.random() * 0.1 + 1),
          16000 * (Math.random() * 0.1 + 1),
          15500 * (Math.random() * 0.1 + 1),
          15000 * (Math.random() * 0.1 + 1),
          12500 * (Math.random() * 0.1 + 1),
          10500 * (Math.random() * 0.1 + 1),
          3000 * (Math.random() * 0.05 + 1),
          2500 * (Math.random() * 0.1 + 1),
          2000 * (Math.random() * 0.1 + 1),
          1500 * (Math.random() * 0.1 + 1),
          1200 * (Math.random() * 0.1 + 1),
          1000 * (Math.random() * 0.1 + 1),
          900 * (Math.random() * 0.1 + 1),
          800 * (Math.random() * 0.1 + 1),
          700 * (Math.random() * 0.1 + 1),
          600 * (Math.random() * 0.1 + 1),
          500 * (Math.random() * 0.1 + 1),
          400 * (Math.random() * 0.1 + 1),
          100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 0.9),
        type: "line",
      },
      {
        name: "希尔顿欢朋-北京国贸店",
        data: [
          19500 * (Math.random() * 0.05 + 1),
          19000 * (Math.random() * 0.1 + 1),
          18500 * (Math.random() * 0.1 + 1),
          18000 * (Math.random() * 0.1 + 1),
          17500 * (Math.random() * 0.1 + 1),
          17000 * (Math.random() * 0.1 + 1),
          16500 * (Math.random() * 0.1 + 1),
          16000 * (Math.random() * 0.1 + 1),
          15500 * (Math.random() * 0.1 + 1),
          15000 * (Math.random() * 0.1 + 1),
          12500 * (Math.random() * 0.1 + 1),
          10500 * (Math.random() * 0.1 + 1),
          3000 * (Math.random() * 0.05 + 1),
          2500 * (Math.random() * 0.1 + 1),
          2000 * (Math.random() * 0.1 + 1),
          1500 * (Math.random() * 0.1 + 1),
          1200 * (Math.random() * 0.1 + 1),
          1000 * (Math.random() * 0.1 + 1),
          900 * (Math.random() * 0.1 + 1),
          800 * (Math.random() * 0.1 + 1),
          700 * (Math.random() * 0.1 + 1),
          600 * (Math.random() * 0.1 + 1),
          500 * (Math.random() * 0.1 + 1),
          400 * (Math.random() * 0.1 + 1),
          100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 0.8),
        type: "line",
      },
      {
        name: "锦江白玉兰-重庆解放碑店",
        data: [
          19500 * (Math.random() * 0.05 + 1),
          19000 * (Math.random() * 0.1 + 1),
          18500 * (Math.random() * 0.1 + 1),
          18000 * (Math.random() * 0.1 + 1),
          17500 * (Math.random() * 0.1 + 1),
          17000 * (Math.random() * 0.1 + 1),
          16500 * (Math.random() * 0.1 + 1),
          16000 * (Math.random() * 0.1 + 1),
          15500 * (Math.random() * 0.1 + 1),
          15000 * (Math.random() * 0.1 + 1),
          12500 * (Math.random() * 0.1 + 1),
          10500 * (Math.random() * 0.1 + 1),
          3000 * (Math.random() * 0.05 + 1),
          2500 * (Math.random() * 0.1 + 1),
          2000 * (Math.random() * 0.1 + 1),
          1500 * (Math.random() * 0.1 + 1),
          1200 * (Math.random() * 0.1 + 1),
          1000 * (Math.random() * 0.1 + 1),
          900 * (Math.random() * 0.1 + 1),
          800 * (Math.random() * 0.1 + 1),
          700 * (Math.random() * 0.1 + 1),
          600 * (Math.random() * 0.1 + 1),
          500 * (Math.random() * 0.1 + 1),
          400 * (Math.random() * 0.1 + 1),
          100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 0.7),
        type: "line",
      },
      {
        name: "丽亭-上海五角场万达店",
        data: [
          19500 * (Math.random() * 0.05 + 1),
          19000 * (Math.random() * 0.1 + 1),
          18500 * (Math.random() * 0.1 + 1),
          18000 * (Math.random() * 0.1 + 1),
          17500 * (Math.random() * 0.1 + 1),
          17000 * (Math.random() * 0.1 + 1),
          16500 * (Math.random() * 0.1 + 1),
          16000 * (Math.random() * 0.1 + 1),
          15500 * (Math.random() * 0.1 + 1),
          15000 * (Math.random() * 0.1 + 1),
          12500 * (Math.random() * 0.1 + 1),
          10500 * (Math.random() * 0.1 + 1),
          3000 * (Math.random() * 0.05 + 1),
          2500 * (Math.random() * 0.1 + 1),
          2000 * (Math.random() * 0.1 + 1),
          1500 * (Math.random() * 0.1 + 1),
          1200 * (Math.random() * 0.1 + 1),
          1000 * (Math.random() * 0.1 + 1),
          900 * (Math.random() * 0.1 + 1),
          800 * (Math.random() * 0.1 + 1),
          700 * (Math.random() * 0.1 + 1),
          600 * (Math.random() * 0.1 + 1),
          500 * (Math.random() * 0.1 + 1),
          400 * (Math.random() * 0.1 + 1),
          100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 0.6),
        type: "line",
      },
    ],
  };
  var echartDom1 = $(`<div class="card-body" id="chart1" style="height: 100%; width: 100%"></div>`);
  $("#card1").append(echartDom1);
  let ec1 = cfs.echarts.init(echartDom1, cfs.echarts.theme, option1);
  // $('.icon-loop3').click(function (e) {
  //     for( i=0; i<10; i++){
  //         option1.series[0].data = [ 9500 * ( Math.random()*0.05 + 1 ), 9000 * ( Math.random()*0.1 + 1 ), 8500 * ( Math.random()*0.1 + 1 ), 8000 * ( Math.random()*0.1 + 1 ), 7500 * ( Math.random()*0.1 + 1 ), 7000 * ( Math.random()*0.1 + 1 ), 6500 * ( Math.random()*0.1 + 1 ), 6000 * ( Math.random()*0.1 + 1 ), 5500 * ( Math.random()*0.1 + 1 ), 5000 * ( Math.random()*0.1 + 1 ), 4500 * ( Math.random()*0.1 + 1 ), 3500 * ( Math.random()*0.1 + 1 ), 3000 * ( Math.random()*0.05 + 1 ), 2500 * ( Math.random()*0.1 + 1 ), 2000 * ( Math.random()*0.1 + 1 ), 1500 * ( Math.random()*0.1 + 1 ), 1200 * ( Math.random()*0.1 + 1 ), 1000 * ( Math.random()*0.1 + 1 ), 900 * ( Math.random()*0.1 + 1 ), 800 * ( Math.random()*0.1 + 1 ), 700 * ( Math.random()*0.1 + 1 ), 600 * ( Math.random()*0.1 + 1 ), 500 * ( Math.random()*0.1 + 1 ), 400 * ( Math.random()*0.1 + 1 ), 100 * ( Math.random()*0.1 + 1 )];
  //     }
  //     cfs.echarts.refresh(ec1, option1);
  // });

  //   option2 = {
  //     xAxis: {
  //         name:'利润增长率'
  //     },
  //     yAxis: {
  //         name:'净利润'
  //     },
  //     series: [{
  //         symbolSize: 10,
  //         data: [
  //             [10.0, 8.04],
  //             [8.07, 6.95],
  //             [13.0, 7.58],
  //             [9.05, 8.81],
  //             [-11.0, 8.33],
  //             [-14.0, 7.66],
  //             [-13.4, 6.81],
  //             [-10.0, 6.33],
  //             [14.0, 8.96],
  //             [-12.5, 6.82],
  //             [9.15, 7.20],
  //             [11.5, 7.20],
  //             [3.03, 4.23],
  //             [-12.2, 7.83],
  //             [2.02, 4.47],
  //             [1.05, 3.33],
  //             [-4.05, 4.96],
  //             [-6.03, 7.24],
  //             [-12.0, 6.26],
  //             [12.0, 8.84],
  //             [7.08, 5.82],
  //             [5.02, 5.68],
  //             [-10.0, -8.04],
  //             [-18.07,-6.95],
  //             [-13.0, -7],
  //             [-9.05, -8],
  //             [-11.0, -8.33],
  //             [-14.0, -7.66],
  //             [-13.4, -6.81],
  //             [-10.0, -6.33],
  //             [-14.0, -8.96],
  //             [-12.5, -6.82],
  //             [9.15, -7.20],
  //             [11.5, -7.20],
  //             [-3.03, 4.23],
  //             [12.2, -7.83],
  //             [2.02, -4.47],
  //             [1.05, -7.33],
  //             [4.05, -4.96],
  //             [-6.03, 7.24],
  //             [12.0, -6.26],
  //             [12.0, -8.84],
  //             [7.08, -5.82],
  //             [5.02, -5.68]
  //         ],
  //         type: 'scatter'
  //     }]
  // };
  //   option2 = {
  //         xAxis: {},
  //         yAxis: {},
  //         series: [
  //         {
  //           data: [[0, 9], [9, 9]],
  //           type: 'line',
  //           smooth:false, //关键点，为true是不支持虚线的，实线就用true
  //           itemStyle:{
  //             normal:{
  //               lineStyle:{
  //                 width:2,
  //                 color: 'red',
  //                 type:'dotted' //'dotted'虚线 'solid'实线
  //               }
  //             }
  //             }
  //         },
  //         {
  //           data: [[9, 0], [9, 9]],
  //           type: 'line',
  //           smooth:false, //关键点，为true是不支持虚线的，实线就用true
  //           itemStyle:{
  //             normal:{
  //               lineStyle:{
  //                 width:2,
  //                 color: 'red',
  //                 type:'dotted' //'dotted'虚线 'solid'实线
  //               }
  //             }
  //             }

  //         },
  //         ]
  // };
  option2 = {
    xAxis: {
      name: "利润增长率",
    },
    yAxis: {
      name: "净利润",
    },
    series: [
      {
        symbolSize: 10,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [14.0, 8.96],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68],
          [10.0, 8.04],
          [18.07, 6.95],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 7.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68],
          [10.0, 8.04],
          [18.07, 6.95],
          [13.0, 7],
          [9.05, 8],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
        ],
        type: "scatter",
      },
      {
        data: [
          [0, 6],
          [6, 6],
        ],
        type: "line",
        smooth: false, //关键点，为true是不支持虚线的，实线就用true
        itemStyle: {
          normal: {
            lineStyle: {
              width: 2,
              color: "red",
              type: "dotted", //'dotted'虚线 'solid'实线
            },
          },
        },
      },
      {
        data: [
          [6, 0],
          [6, 6],
        ],
        type: "line",
        smooth: false, //关键点，为true是不支持虚线的，实线就用true
        itemStyle: {
          normal: {
            lineStyle: {
              width: 2,
              color: "red",
              type: "dotted", //'dotted'虚线 'solid'实线
            },
          },
        },
      },
    ],
  };
  var echartDom2 = $(`<div class="card-body" id="chart2" style="height: 100%; width: 100%"></div>`);
  $("#card2").append(echartDom2);
  let ec2 = cfs.echarts.init(echartDom2, cfs.echarts.theme, option2);

  option3 = {
    xAxis: {
      name: "利润增长率",
    },
    yAxis: {
      name: "净利润",
    },
    series: [
      {
        symbolSize: 10,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [-11.0, 8.33],
          [-14.0, 7.66],
          [-13.4, 6.81],
          [-10.0, 6.33],
          [14.0, 8.96],
          [-12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [-12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [-4.05, 4.96],
          [-6.03, 7.24],
          [-12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68],
          [-10.0, -8.04],
          [-18.07, -6.95],
          [-13.0, -7],
          [-9.05, -8],
          [-11.0, -8.33],
          [-14.0, -7.66],
          [-13.4, -6.81],
          [-10.0, -6.33],
          [-14.0, -8.96],
          [-12.5, -6.82],
          [9.15, -7.2],
          [11.5, -7.2],
          [-3.03, 4.23],
          [12.2, -7.83],
          [2.02, -4.47],
          [1.05, -7.33],
          [4.05, -4.96],
          [-6.03, 7.24],
          [12.0, -6.26],
          [12.0, -8.84],
          [7.08, -5.82],
          [5.02, -5.68],
        ],
        type: "scatter",
      },
    ],
  };
  var echartDom3 = $(`<div class="card-body" id="chart3" style="height: 100%; width: 100%"></div>`);
  $("#card3").append(echartDom3);
  let ec3 = cfs.echarts.init(echartDom3, cfs.echarts.theme, option3);

  // 指定图表的配置项和数据
  option4 = {
    title: {
      text: "",
      subtext: "",
      left: "center",
      top: "5%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      x: "50%",
      y: "80%",
    },
    grid: {
      left: "5%",
      right: "5%",
      bottom: "30%",
      top: "10%",
      containLabel: false,
    },
    dataZoom: [
      {
        type: "slider", //slider表示有滑动块的，inside表示内置的
        show: true,
        xAxisIndex: [0],
      },
    ],
    xAxis: [
      {
        type: "category",
        data: [
          "M-12",
          "M-11",
          "M-10",
          "M-9",
          "M-8",
          "M-7",
          "M-6",
          "M-5",
          "M-4",
          "M-3",
          "M-2",
          "M-1",
          "M",
          "M+1",
          "M+2",
          "M+3",
          "M+4",
          "M+5",
          "M+6",
          "M+7",
          "M+8",
          "M+9",
          "M+10",
          "M+11",
          "M+12",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "成本(万元)",
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "希岸酒店-四川成都锦里店",
        data: [
          501 * (Math.random() * 0.05 + 1),
          1002 * (Math.random() * 0.1 + 1),
          1503 * (Math.random() * 0.1 + 1),
          2004 * (Math.random() * 0.1 + 1),
          3505 * (Math.random() * 0.1 + 1),
          4006 * (Math.random() * 0.1 + 1),
          6507 * (Math.random() * 0.1 + 1),
          7008 * (Math.random() * 0.1 + 1),
          8009 * (Math.random() * 0.1 + 1),
          8510 * (Math.random() * 0.1 + 1),
          9511 * (Math.random() * 0.1 + 1),
          10512 * (Math.random() * 0.1 + 1),
          23000 * (Math.random() * 0.05 + 1),
          24500 * (Math.random() * 0.1 + 1),
          26000 * (Math.random() * 0.1 + 1),
          26500 * (Math.random() * 0.1 + 1),
          27000 * (Math.random() * 0.1 + 1),
          28000 * (Math.random() * 0.1 + 1),
          29000 * (Math.random() * 0.1 + 1),
          30000 * (Math.random() * 0.1 + 1),
          31700 * (Math.random() * 0.1 + 1),
          32600 * (Math.random() * 0.1 + 1),
          33500 * (Math.random() * 0.1 + 1),
          34400 * (Math.random() * 0.1 + 1),
          35100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 1.5),
        type: "line",
      },
      {
        name: "欧暇·地中海-深圳深圳野生动物园店",
        data: [
          501 * (Math.random() * 0.05 + 1),
          1002 * (Math.random() * 0.1 + 1),
          1503 * (Math.random() * 0.1 + 1),
          2004 * (Math.random() * 0.1 + 1),
          3505 * (Math.random() * 0.1 + 1),
          4006 * (Math.random() * 0.1 + 1),
          6507 * (Math.random() * 0.1 + 1),
          7008 * (Math.random() * 0.1 + 1),
          8009 * (Math.random() * 0.1 + 1),
          8510 * (Math.random() * 0.1 + 1),
          9511 * (Math.random() * 0.1 + 1),
          10512 * (Math.random() * 0.1 + 1),
          23000 * (Math.random() * 0.05 + 1),
          24500 * (Math.random() * 0.1 + 1),
          26000 * (Math.random() * 0.1 + 1),
          26500 * (Math.random() * 0.1 + 1),
          27000 * (Math.random() * 0.1 + 1),
          28000 * (Math.random() * 0.1 + 1),
          29000 * (Math.random() * 0.1 + 1),
          30000 * (Math.random() * 0.1 + 1),
          31700 * (Math.random() * 0.1 + 1),
          32600 * (Math.random() * 0.1 + 1),
          33500 * (Math.random() * 0.1 + 1),
          34400 * (Math.random() * 0.1 + 1),
          35100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 1.4),
        type: "line",
      },
      {
        name: "锦江之星-上海同济大学店",
        data: [
          501 * (Math.random() * 0.05 + 1),
          1002 * (Math.random() * 0.1 + 1),
          1503 * (Math.random() * 0.1 + 1),
          2004 * (Math.random() * 0.1 + 1),
          3505 * (Math.random() * 0.1 + 1),
          4006 * (Math.random() * 0.1 + 1),
          6507 * (Math.random() * 0.1 + 1),
          7008 * (Math.random() * 0.1 + 1),
          8009 * (Math.random() * 0.1 + 1),
          8510 * (Math.random() * 0.1 + 1),
          9511 * (Math.random() * 0.1 + 1),
          10512 * (Math.random() * 0.1 + 1),
          23000 * (Math.random() * 0.05 + 1),
          24500 * (Math.random() * 0.1 + 1),
          26000 * (Math.random() * 0.1 + 1),
          26500 * (Math.random() * 0.1 + 1),
          27000 * (Math.random() * 0.1 + 1),
          28000 * (Math.random() * 0.1 + 1),
          29000 * (Math.random() * 0.1 + 1),
          30000 * (Math.random() * 0.1 + 1),
          31700 * (Math.random() * 0.1 + 1),
          32600 * (Math.random() * 0.1 + 1),
          33500 * (Math.random() * 0.1 + 1),
          34400 * (Math.random() * 0.1 + 1),
          35100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 1.3),
        type: "line",
      },
      {
        name: "郁锦香-南宁阳朔西街店",
        data: [
          501 * (Math.random() * 0.05 + 1),
          1002 * (Math.random() * 0.1 + 1),
          1503 * (Math.random() * 0.1 + 1),
          2004 * (Math.random() * 0.1 + 1),
          3505 * (Math.random() * 0.1 + 1),
          4006 * (Math.random() * 0.1 + 1),
          6507 * (Math.random() * 0.1 + 1),
          7008 * (Math.random() * 0.1 + 1),
          8009 * (Math.random() * 0.1 + 1),
          8510 * (Math.random() * 0.1 + 1),
          9511 * (Math.random() * 0.1 + 1),
          10512 * (Math.random() * 0.1 + 1),
          23000 * (Math.random() * 0.05 + 1),
          24500 * (Math.random() * 0.1 + 1),
          26000 * (Math.random() * 0.1 + 1),
          26500 * (Math.random() * 0.1 + 1),
          27000 * (Math.random() * 0.1 + 1),
          28000 * (Math.random() * 0.1 + 1),
          29000 * (Math.random() * 0.1 + 1),
          30000 * (Math.random() * 0.1 + 1),
          31700 * (Math.random() * 0.1 + 1),
          32600 * (Math.random() * 0.1 + 1),
          33500 * (Math.random() * 0.1 + 1),
          34400 * (Math.random() * 0.1 + 1),
          35100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 1.2),
        type: "line",
      },
      {
        name: "喆啡-湖南株洲体育馆店",
        data: [
          501 * (Math.random() * 0.05 + 1),
          1002 * (Math.random() * 0.1 + 1),
          1503 * (Math.random() * 0.1 + 1),
          2004 * (Math.random() * 0.1 + 1),
          3505 * (Math.random() * 0.1 + 1),
          4006 * (Math.random() * 0.1 + 1),
          6507 * (Math.random() * 0.1 + 1),
          7008 * (Math.random() * 0.1 + 1),
          8009 * (Math.random() * 0.1 + 1),
          8510 * (Math.random() * 0.1 + 1),
          9511 * (Math.random() * 0.1 + 1),
          10512 * (Math.random() * 0.1 + 1),
          23000 * (Math.random() * 0.05 + 1),
          24500 * (Math.random() * 0.1 + 1),
          26000 * (Math.random() * 0.1 + 1),
          26500 * (Math.random() * 0.1 + 1),
          27000 * (Math.random() * 0.1 + 1),
          28000 * (Math.random() * 0.1 + 1),
          29000 * (Math.random() * 0.1 + 1),
          30000 * (Math.random() * 0.1 + 1),
          31700 * (Math.random() * 0.1 + 1),
          32600 * (Math.random() * 0.1 + 1),
          33500 * (Math.random() * 0.1 + 1),
          34400 * (Math.random() * 0.1 + 1),
          35100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 1.1),
        type: "line",
      },
      {
        name: "卢浮酒店-广州沙湾古镇店",
        data: [
          501 * (Math.random() * 0.05 + 1),
          1002 * (Math.random() * 0.1 + 1),
          1503 * (Math.random() * 0.1 + 1),
          2004 * (Math.random() * 0.1 + 1),
          3505 * (Math.random() * 0.1 + 1),
          4006 * (Math.random() * 0.1 + 1),
          6507 * (Math.random() * 0.1 + 1),
          7008 * (Math.random() * 0.1 + 1),
          8009 * (Math.random() * 0.1 + 1),
          8510 * (Math.random() * 0.1 + 1),
          9511 * (Math.random() * 0.1 + 1),
          10512 * (Math.random() * 0.1 + 1),
          23000 * (Math.random() * 0.05 + 1),
          24500 * (Math.random() * 0.1 + 1),
          26000 * (Math.random() * 0.1 + 1),
          26500 * (Math.random() * 0.1 + 1),
          27000 * (Math.random() * 0.1 + 1),
          28000 * (Math.random() * 0.1 + 1),
          29000 * (Math.random() * 0.1 + 1),
          30000 * (Math.random() * 0.1 + 1),
          31700 * (Math.random() * 0.1 + 1),
          32600 * (Math.random() * 0.1 + 1),
          33500 * (Math.random() * 0.1 + 1),
          34400 * (Math.random() * 0.1 + 1),
          35100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 1.0),
        type: "line",
      },
      {
        name: "锦江都城-北京奥林匹克公园店",
        data: [
          501 * (Math.random() * 0.05 + 1),
          1002 * (Math.random() * 0.1 + 1),
          1503 * (Math.random() * 0.1 + 1),
          2004 * (Math.random() * 0.1 + 1),
          3505 * (Math.random() * 0.1 + 1),
          4006 * (Math.random() * 0.1 + 1),
          6507 * (Math.random() * 0.1 + 1),
          7008 * (Math.random() * 0.1 + 1),
          8009 * (Math.random() * 0.1 + 1),
          8510 * (Math.random() * 0.1 + 1),
          9511 * (Math.random() * 0.1 + 1),
          10512 * (Math.random() * 0.1 + 1),
          23000 * (Math.random() * 0.05 + 1),
          24500 * (Math.random() * 0.1 + 1),
          26000 * (Math.random() * 0.1 + 1),
          26500 * (Math.random() * 0.1 + 1),
          27000 * (Math.random() * 0.1 + 1),
          28000 * (Math.random() * 0.1 + 1),
          29000 * (Math.random() * 0.1 + 1),
          30000 * (Math.random() * 0.1 + 1),
          31700 * (Math.random() * 0.1 + 1),
          32600 * (Math.random() * 0.1 + 1),
          33500 * (Math.random() * 0.1 + 1),
          34400 * (Math.random() * 0.1 + 1),
          35100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 0.9),
        type: "line",
      },
      {
        name: "希尔顿欢朋-北京国贸店",
        data: [
          501 * (Math.random() * 0.05 + 1),
          1002 * (Math.random() * 0.1 + 1),
          1503 * (Math.random() * 0.1 + 1),
          2004 * (Math.random() * 0.1 + 1),
          3505 * (Math.random() * 0.1 + 1),
          4006 * (Math.random() * 0.1 + 1),
          6507 * (Math.random() * 0.1 + 1),
          7008 * (Math.random() * 0.1 + 1),
          8009 * (Math.random() * 0.1 + 1),
          8510 * (Math.random() * 0.1 + 1),
          9511 * (Math.random() * 0.1 + 1),
          10512 * (Math.random() * 0.1 + 1),
          23000 * (Math.random() * 0.05 + 1),
          24500 * (Math.random() * 0.1 + 1),
          26000 * (Math.random() * 0.1 + 1),
          26500 * (Math.random() * 0.1 + 1),
          27000 * (Math.random() * 0.1 + 1),
          28000 * (Math.random() * 0.1 + 1),
          29000 * (Math.random() * 0.1 + 1),
          30000 * (Math.random() * 0.1 + 1),
          31700 * (Math.random() * 0.1 + 1),
          32600 * (Math.random() * 0.1 + 1),
          33500 * (Math.random() * 0.1 + 1),
          34400 * (Math.random() * 0.1 + 1),
          35100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 0.8),
        type: "line",
      },
      {
        name: "锦江白玉兰-重庆解放碑店",
        data: [
          501 * (Math.random() * 0.05 + 1),
          1002 * (Math.random() * 0.1 + 1),
          1503 * (Math.random() * 0.1 + 1),
          2004 * (Math.random() * 0.1 + 1),
          3505 * (Math.random() * 0.1 + 1),
          4006 * (Math.random() * 0.1 + 1),
          6507 * (Math.random() * 0.1 + 1),
          7008 * (Math.random() * 0.1 + 1),
          8009 * (Math.random() * 0.1 + 1),
          8510 * (Math.random() * 0.1 + 1),
          9511 * (Math.random() * 0.1 + 1),
          10512 * (Math.random() * 0.1 + 1),
          23000 * (Math.random() * 0.05 + 1),
          24500 * (Math.random() * 0.1 + 1),
          26000 * (Math.random() * 0.1 + 1),
          26500 * (Math.random() * 0.1 + 1),
          27000 * (Math.random() * 0.1 + 1),
          28000 * (Math.random() * 0.1 + 1),
          29000 * (Math.random() * 0.1 + 1),
          30000 * (Math.random() * 0.1 + 1),
          31700 * (Math.random() * 0.1 + 1),
          32600 * (Math.random() * 0.1 + 1),
          33500 * (Math.random() * 0.1 + 1),
          34400 * (Math.random() * 0.1 + 1),
          35100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 0.7),
        type: "line",
      },
      {
        name: "丽亭-上海五角场万达店",
        data: [
          501 * (Math.random() * 0.05 + 1),
          1002 * (Math.random() * 0.1 + 1),
          1503 * (Math.random() * 0.1 + 1),
          2004 * (Math.random() * 0.1 + 1),
          3505 * (Math.random() * 0.1 + 1),
          4006 * (Math.random() * 0.1 + 1),
          6507 * (Math.random() * 0.1 + 1),
          7008 * (Math.random() * 0.1 + 1),
          8009 * (Math.random() * 0.1 + 1),
          8510 * (Math.random() * 0.1 + 1),
          9511 * (Math.random() * 0.1 + 1),
          10512 * (Math.random() * 0.1 + 1),
          23000 * (Math.random() * 0.05 + 1),
          24500 * (Math.random() * 0.1 + 1),
          26000 * (Math.random() * 0.1 + 1),
          26500 * (Math.random() * 0.1 + 1),
          27000 * (Math.random() * 0.1 + 1),
          28000 * (Math.random() * 0.1 + 1),
          29000 * (Math.random() * 0.1 + 1),
          30000 * (Math.random() * 0.1 + 1),
          31700 * (Math.random() * 0.1 + 1),
          32600 * (Math.random() * 0.1 + 1),
          33500 * (Math.random() * 0.1 + 1),
          34400 * (Math.random() * 0.1 + 1),
          35100 * (Math.random() * 0.1 + 1),
        ].map((item) => item * 0.6),
        type: "line",
      },
    ],
  };
  var echartDom4 = $(`<div class="card-body" id="chart4" style="height: 100%; width: 100%"></div>`);
  $("#card4").append(echartDom4);
  let ec4 = cfs.echarts.init(echartDom4, cfs.echarts.theme, option4);
  // $('.icon-loop3').click(function (e) {
  //     option1.series[0].data = [ 500 * ( Math.random()*0.05 + 1 ), 900 * ( Math.random()*0.1 + 1 ), 1000 * ( Math.random()*0.1 + 1 ), 1500 * ( Math.random()*0.1 + 1 ), 2000 * ( Math.random()*0.1 + 1 ), 2500 * ( Math.random()*0.1 + 1 ), 3000 * ( Math.random()*0.1 + 1 ), 3500 * ( Math.random()*0.1 + 1 ), 4000 * ( Math.random()*0.1 + 1 ), 4500 * ( Math.random()*0.1 + 1 ), 5000 * ( Math.random()*0.1 + 1 ), 5500 * ( Math.random()*0.1 + 1 ), 6000 * ( Math.random()*0.05 + 1 ), 6500 * ( Math.random()*0.1 + 1 ), 7000 * ( Math.random()*0.1 + 1 ), 7500 * ( Math.random()*0.1 + 1 ), 8000 * ( Math.random()*0.1 + 1 ), 9000 * ( Math.random()*0.1 + 1 ), 9500 * ( Math.random()*0.1 + 1 ), 10000 * ( Math.random()*0.1 + 1 ), 10700 * ( Math.random()*0.1 + 1 ),11000 * ( Math.random()*0.1 + 1 ), 12000 * ( Math.random()*0.1 + 1 ), 12500 * ( Math.random()*0.1 + 1 ), 13000 * ( Math.random()*0.1 + 1 )],
  //     cfs.echarts.refresh(ec4, option4);
  // });
};

var cfs = {
  logictable: {
    checkMain: function (configs) {
      //custom check
      if (!configs) return;
      for (let i = 0; i < configs.length; i++) {
        var type = configs[i].type.toLowerCase();
        if (type != "check") continue;
        var exp = configs[i].exp.replace(" ", "");
        if (exp) {
          var expArr = exp.split(",");
          for (let i1 = 0; i1 < expArr.length; i1++) {
            var expStr = expArr[i1];
            var check = this.check(expStr);
            if (!check) {
              ForSwal(configs[i].message);
              return { continueFlag: false };
            }
          }
        }
      }
    },
    jumpMain: function (configs) {
      if (!configs) return;
      for (let i = 0; i < configs.length; i++) {
        var type = configs[i].type.toLowerCase();
        if (type.indexOf("jump") == -1) continue;
        var url = configs[i].exp;
        if (url.indexOf("query_map") > 0) {
          var queryMap = url.split("&query_map=")[1].split(",");
          var reg = /{{[a-zA-Z0-9|.|_]+}}/; //获取双括号里的值
          $.each(queryMap, function (k, v) {
            var getQueryMapParam = v.match(reg)[0].replace(/\{|}/g, "").split("."); //去掉大括号
            var queryValue =
              $("#" + getQueryMapParam[0])
                .children()
                .find("input[id$='" + getQueryMapParam[1] + "']")
                .val() ||
              $("#" + getQueryMapParam[0])
                .children()
                .find("select[id$='" + getQueryMapParam[1] + "']")
                .val(); //获取值
            url = url.replace(reg, queryValue); //替换参数
          });
        }
        if (url) {
          // 动态创建函数
          window[configs[i].trigger_name] = function () {
            cfs.common.jumpUrl(url);
          };
        }
      }
    },
    changeMain: function (configs) {
      //custom change
      if (!configs) return;
      for (let i = 0; i < configs.length; i++) {
        var type = configs[i].type.toLowerCase();
        if (type != "change") continue;
        var trigger = configs[i].trigger_name;
        var exp = configs[i].exp.replace(" ", "");
        if (trigger && exp) {
          var expArr = exp.split(";");
          for (let i = 0; i < expArr.length; i++) {
            var triArr = trigger.split(",");
            for (let j = 0; j < triArr.length; j++) {
              this.addChange(triArr[j], expArr[i]);
            }
          }
        }
      }
    },
    fbsMain: function (configs) {
      //fill before save
      if (!configs) return;
      for (let i = 0; i < configs.length; i++) {
        var type = configs[i].type.toLowerCase();
        if (type != "fill_before_save") continue;
        var exp = configs[i].exp.replace(" ", "");
        if (exp) {
          this.fillAll(exp);
        }
      }
    },
    getTemplateid: function () {
      return FormDetail.getFormParam().template_id;
    },
    getConfigs: function (type = null) {
      var template_id = this.getTemplateid();
      var typeStr = type ? ` and type in ('${type}')` : "";
      var comm = `select * from app${Userinfo.app}_logictable_custom where is_active=1 and template_id='${template_id}'${typeStr} order by sort`;
      var res = cfs.request.foundation.runComm(comm);
      return res.res;
    },
    getDom: function (exp) {
      var arr = [];
      try {
        var expArr = exp.split(".");
        var card = $(`[name='${expArr[0]}']`);
        if (expArr.length > 1) {
          arr = card.eq(0).find("." + expArr[1]);
          return arr;
        } else {
          return card;
        }
      } catch {
        return null;
      }
    },
    setValue: function (dom, val) {
      let digitlen = dom.attr("digitlen");
      if (dom.attr("digitlen")) {
        val = val.toFixed(dom.attr("digitlen"));
      }
      dom.val(val);
      dom.trigger("change");
    },
    addChange: function (trigger, exp) {
      try {
        var triArr = trigger.split(".");
        var module = this.getDom(triArr[0]);
        var module_id = module.attr("module_id");
        var _this = this;
        $(document).on("change", `[module_id='${module_id}']:first .${triArr[1]}:not(th,td)`, function () {
          let domArr = _this.getDom(trigger);
          let index = domArr.index($(this));
          _this.fillAll(exp, index);
        });
        return true;
      } catch {
        return false;
      }
    },
    check: function (exp) {
      var domArr = [];
      var checkArr = this.calculate(exp, null, domArr);
      var res = true;
      for (let i = 0; i < checkArr.length; i++) {
        var checked = checkArr[i];
        if (!checked) {
          domArr[i].forEach(function (dom) {
            if (!dom.attr("disabled")) {
              addDanger(dom);
            }
            res = false;
          });
        }
      }
      return res;
    },
    calculate: function (exp, index, domArr = []) {
      var resArr = [];
      var arr0 = exp.match(/[a-zA-Z0-9|_]+[.]{1}[a-zA-Z0-9|_|.|&]+/g); //原始表达式
      var arr1 = []; //存放处理结果
      var max = 0;
      if (!arr0) return resArr;
      for (let i = 0; i < arr0.length; i++) {
        let obj = this.execute(arr0[i], index);
        let arr = obj.value;
        if (arr.length > max) max = arr.length;
        arr1.push(obj);
      }
      var splitArr = exp.split(/[a-zA-Z0-9|_]+[.]{1}[a-zA-Z0-9|_|.|&]+/);
      for (let i = 0; i < max; i++) {
        var calcStr = "";
        var id = i;
        var withkey0 = null;
        var domArr0 = [];
        var breakFlag = false;
        for (let k = 0; k < arr1.length; k++) {
          let obj = arr1[k];
          if (obj.dom.eq(id).length == 0 && obj.withkey) {
            breakFlag = true;
            break;
          }
          if (withkey0) {
            id = getWithkeyMatchId(withkey0, obj.withkey);
          }
          var str = "";
          if (id == -1) {
            str = "0";
          } else if (arr0[k].split(".").length > 2) {
            str = arr0[k];
          } else {
            str = obj.exp + `.value[${id}]`;
          }
          calcStr += splitArr[k] + str;
          eval(`${obj.exp}=obj;`);
          domArr0.push(obj.dom.eq(id));
          if (k == 0 && obj.withkey) {
            withkey0 = obj.withkey[id];
          }
        }
        if (breakFlag) break;
        domArr.push(domArr0);
        calcStr += splitArr[splitArr.length - 1];
        var result = eval(calcStr);
        resArr.push(result);
      }
      return resArr;
      function round(num, fix) {
        return num.toFixed(fix);
      }
      function getWithkeyMatchId(withkey0, withkeyArr) {
        for (let i = 0; i < withkeyArr.length; i++) {
          if (isObjectValueEqual(withkey0, withkeyArr[i])) {
            return i;
          }
        }
        return -1;
      }
      function isObjectValueEqual(a, b) {
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
        if (aProps.length != bProps.length) {
          return false;
        }
        for (var i = 0; i < aProps.length; i++) {
          var propName = aProps[i];
          if (a[propName] !== b[propName]) {
            return false;
          }
        }
        return true;
      }
    },
    execute: function (exp, index) {
      var resObj = {};
      var exp1 = exp;
      var arrCal = exp.split(".");
      var withkeyArr = null;
      if (exp.split("&").length > 1) {
        withkeyArr = exp.split("&").splice(1);
        exp1 = exp.split("&")[0];
      }
      if (arrCal.length > 2) {
        exp1 = arrCal[0] + "." + arrCal[1];
      }
      var valueArr = [];
      var domArr = this.getDom(exp1);
      var withkeyValueArr = [];
      if (domArr) {
        var _this = this;
        domArr.each(function (k1, dom) {
          valueArr.push(_this.toValue($(dom).val()));
          if (withkeyArr) {
            var withkeyObj = {};
            withkeyArr.forEach(function (withkey, k2) {
              let dom = _this.getDom(arrCal[0] + "." + withkey);
              if (dom.eq(k1)) withkeyObj["id" + (k2 + 1)] = dom.eq(k1).val();
            });
            withkeyValueArr.push(withkeyObj);
          }
        });
        resObj["exp"] = exp1;
        resObj["dom"] = domArr;
        resObj["value"] = valueArr;
        resObj["sum"] = this.sum(valueArr);
        resObj["withkey"] = withkeyValueArr;
        resObj["exist"] = function (str) {
          return this.value.indexOf(str) > -1;
        };
        resObj["current"] = index && index > -1 ? valueArr[index] : "";
      }
      return resObj;
    },
    fillAll: function (exp, index) {
      var expArr = exp.split("=");
      var targetExp = expArr[0];
      var calcExp = exp.replace(targetExp + "=", "");
      var targetObj = this.execute(targetExp, index);
      var resArr = this.calculate(calcExp, index);
      var _this = this;
      if (targetObj.dom && resArr) {
        if (targetExp.endsWith(".current")) {
          if (resArr[index]) {
            _this.setValue(targetObj.dom.eq(index), resArr[index]);
          }
        } else {
          targetObj.dom.each(function (k, dom) {
            if (resArr[k]) {
              _this.setValue($(this), resArr[k]);
            }
          });
        }
      }
    },
    sum: function (arr) {
      var s = 0;
      for (let i = 0; i < arr.length; i++) {
        if (Number(this.toValue(arr[i]))) s += Number(this.toValue(arr[i]));
      }
      return s;
    },
    toValue: function (str) {
      if (Number(str)) {
        return Number(str);
      } else if (str && str.endsWith("%") && Number(str.TrimEnd("%"))) {
        return Number(str.TrimEnd("%")) / 100;
      } else {
        return str;
      }
    },
  },
  //请求后端数据
  request: {
    /*通用同步请求
      code为200返回结果在.res内，否则结果在.err内（部分业务错误也会强制返回500或999）
      type: POST/GET/PUT/DELETE
      json: TRUE为application/json FALSE为application/x-www-form-urlencoded
      returnAll：TRUE返回所有结果, FALSE返回.resultObj（有时候结果在resultList里）
    */
    common: {
      getGeoJson: async (jsonName) => {
        // 解除限制（datav）
        let metaReferrer = document.createElement("meta");
        metaReferrer.setAttribute("name", "referrer");
        metaReferrer.setAttribute("content", "no-referrer");
        document.head.appendChild(metaReferrer);
        const publicUrl = "https://geo.datav.aliyun.com/areas_v2/bound/";
        let url = publicUrl + jsonName;
        /*let config = {
          method: "GET",
          url: url,
        };
        let res = await axios(config);
        return res.data;*/
        const result = await axios
          .get(url)
          .then((res) => {
            const data = res.data;
            return data;
          })
          .catch((errors) => {
            return null;
          });
        return result;
      },
      getAreaCode: async (areaName, filter = null) => {
        var filterParam = filter == null ? "" : "&filter=" + filter;
        var url = `https://restapi.amap.com/v3/config/district?keywords=${areaName}${filterParam}&subdistrict=0&key=a9a356f626f32c37c5342a673c3c6178`;
        const result = await axios
          .get(url)
          .then((res) => {
            const data = res.data.districts;
            return data;
          })
          .catch((errors) => {
            return null;
          });
        return result;
      },
      sendRequest: function (url, type, paramObj, json, returnAll = true) {
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
            if (res.code && res.code == 500) {
              resObj.err = res;
            } else {
              if (returnAll) {
                resObj.res = res;
              } else {
                if (res.resultCode === 0) {
                  resObj.res = res.resultObj;
                }
              }
            }
          },
          error: function (XMLHttpRequest) {
            resObj.err = {};
            resObj.err.Message = XMLHttpRequest.responseJSON ? XMLHttpRequest.responseJSON.Message.substr(0, 200) : XMLHttpRequest.statusText.substr(0, 200);
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
      saveDimensionMember: function (dim, dim_list, increment = 1) {
        let url = Api.seepln + "dimensionSave/saveDimensionMember";
        paramObj = $.extend(
          {
            name: dim,
            increment: increment, //1增量0全量
            dimension_member_list: dim_list,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false, true);
      },
      updateDimensionMemberAttribute: function (dimension, update_dimension) {
        var url = Api.seepln + "dimensionImport/updateDimensionMemberAttribute";
        paramObj = $.extend(
          {
            dimension: dimension,
            "update_dimension[]": update_dimension,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false, true);
      },
      queryCubeInfoAndDetail: function (cube_name) {
        var url = Api.seepln + "cube/queryCubeInfoAndDetail";
        paramObj = $.extend(
          {
            cube_name: cube_name,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, false, true);
      },
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
        return cfs.request.common.sendRequest(url, "POST", paramObj, true);
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
        var url = Api.seepln + "sqlparser/run/post2";
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
      //异步调用python
      job: function (pyName, params) {
        var url = Api.python + "start/web/job";
        paramObj = $.extend(
          {
            pyName: pyName,
            params: params,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, "POST", paramObj, true, true);
      },
      //调用pythonWeb
      pythonWeb: function (pythonName, parameter, runType = 1) {
        var url = Api.pythonWeb + "doPythonWeb";
        paramObj = $.extend(
          {
            pythonName: pythonName,
            parameter: JSON.stringify(parameter),
            runType: runType, //1-同步，2-异步
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
        return $("#" + cardName).find(".card-header");
      },
      //删除卡片表右边所有元素
      removeButton: function (dom) {
        //dom.find(".header-elements").html("");
        dom.find(".header-elements").children().hide();
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
            '"><i class="customLoader mr-1 icon-spinner2 spinner" style="display: none;"></i><i class="' +
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
        return $($("#" + cardName).find(".card-body")[0]);
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
            '<i class="customLoader mr-1 icon-spinner2 spinner" style="display: none;"></i><span class="infotext" style="margin-left: 5px; margin-right: 5px; display: none;"></span>' +
            '<i data-trigger="hover" data-toggle="popover" data-placement="right" data-content="" class="infobtn icon-info22" style="margin-right: 10px;cursor: pointer; display: none;"></i>' +
            "</div>"
        );
        this.getDom(cardName).append(dom);
        return dom;
      },
      //删除文件上传卡片
      deleteFileTag: function (dom) {
        dom.parentElement.remove();
      },
      createTable: function (paramObj) {
        var cardName = paramObj.cardName;
        var data = paramObj.data;
        var fieldArr = paramObj.fieldArr;
        var type = paramObj.type ? `type='${paramObj.type}'` : "";
        var cls = paramObj.cls ? `class='${paramObj.cls}'` : "";
        var withHead = paramObj.withHead ? paramObj.withHead : true;
        var headStr = paramObj.headStr;
        var headCls = paramObj.headCls ? `class='${paramObj.headCls}'` : "";
        var rowCls = paramObj.rowCls ? `class='${paramObj.rowCls}'` : "";
        var tableStyle = paramObj.tableStyle ? `style='${paramObj.tableStyle}'` : "";
        var unitFormat = paramObj.unitFormat;
        let headArr = [];
        let rowArr = [];
        var orderArr = [];
        var idCol = -1;
        if (data.length > 0) {
          var arr = Object.keys(data[0]);
          if (!fieldArr) fieldArr = arr;
          for (let i = 0; i < fieldArr.length; i++) {
            if (arr[i].indexOf("id") > -1) {
              idCol = i;
            }
            orderArr.push(arr.indexOf(fieldArr[i]));
          }
        }
        var titleArr = [];
        for (let i = 0; i < data.length; i++) {
          if (withHead && i === 0) {
            titleArr = Object.keys(data[i]);
            titleArrTmp = [];
            let tArr = [];
            for (let i1 = 0; i1 < orderArr.length; i1++) {
              titleArrTmp.push(titleArr[orderArr[i1]]);
              tArr.push("<th style='font-weight: bold; min-width: 80px'>" + titleArr[orderArr[i1]] + "</th>");
            }
            titleArr = titleArrTmp;
            headArr.push(`<tr ${headCls}>` + tArr.join("") + "</tr>");
          }
          let cellArr = [];
          for (let i1 = 0; i1 < titleArr.length; i1++) {
            cellArr.push("<td>" + (data[i][titleArr[i1]] ? (unitFormat ? data[i][titleArr[i1]].toLocaleString() : data[i][titleArr[i1]]) : "") + "</td>");
          }
          let rowId = idCol > -1 ? `rowid='${data[i][Object.keys(data[i])[idCol]]}'` : "";
          rowArr.push(`<tr ${rowCls} ${rowId} ${type}>` + cellArr.join("") + "</tr>");
        }
        let headHtml = withHead ? "<thead>" + headArr.join("") + "</thead>" : "";
        if (headStr != null) headHtml = headStr;
        let dom = $(`<div class="table-responsive" style="">
                        <table ${cardName ? `id="table_${cardName}"` : ""} ${cls} ${tableStyle}>
                          ${headHtml}
                          <tbody class="">
                          ${rowArr.join("")}
                          </tbody>
                        </table>
                      </div>`);
        if (cardName) this.getDom(cardName).append(dom);
        return dom;
      },
      redrawToDatatable: function (cardBody, tableDom, sort = true, fixedLeftColumns = -1) {
        var dt = tableDom.DataTable({
          sScrollX: "100%",
          sScrollY: "100%",
          //sScrollXInner: "110%",
          bSort: sort, //是否排序
          fixedColumns: {
            leftColumns: fixedLeftColumns, //-1第一列不固定，默认固定第一列
            heightMatch: "auto",
          },
          paging: false, //是否显示分页
          searching: false, //是否开启搜索
          info: false,
        });
        var dataTable = tableDom.closest(".dataTables_scroll");
        var headerHeight = dataTable.find(".dataTables_scrollHead").height();
        dataTable.find(".dataTables_scrollBody").css("max-height", cardBody.height() - headerHeight);
        dt.draw();
        //绘制完后再调整高度
        var headerHeight = dataTable.find(".dataTables_scrollHead").height();
        dataTable.find(".dataTables_scrollBody").css("max-height", cardBody.height() - headerHeight);
        return dt;
      },
      createSimpleTag1: function (cardName, data, iconCls) {
        let dom = $(`<div class="media">
                      <div class="mr-3 align-self-center">
                        <i class="${iconCls}"></i>
                      </div>
                      <div class="media-body text-left align-self-center">
                        <h3 class="font-weight-black mb-0">${data}</h3>
                      </div>
                    </div>`);
        if (cardName) this.getDom(cardName).append(dom);
        return dom;
      },
    },
    //自定义初始化卡片
    cusInit: function (cardName, border = true, removeHead = false, textCenter = true, useEchart = false, hideRef = true) {
      var cardDom = $(`[data-name='${cardName}']`);
      //cardDom.addClass("border border-primary");
      if (border) {
        if (cardDom.find("#" + cardName).length > 0) {
          cardDom
            .find("#" + cardName)
            .css("border", "3px solid #64b5f6")
            .css("border-radius", "5px");
        } else {
          cardDom.css("border", "3px solid #64b5f6").css("border-radius", "5px");
        }
      }
      var cardBody = cfs.card.body.getDom(cardName);
      if (!useEchart) {
        cardBody.html("");
        cardBody.css("padding", "10px");
        cardBody.css("overflow", "auto");
      }
      var headDom = cardDom.find(".card-header");
      headDom.css("height", "3rem");
      //headDom.find("h6").css("padding", "5px");
      let ref = headDom.find(".freshBS");
      ref.find("i").css("margin", 10);
      if (hideRef) ref.hide();
      if (removeHead) {
        headDom.remove();
      } else if (textCenter) {
        headDom.find("h6").addClass("ml-3").addClass("text-center").css("width", "100%");
        headDom.removeClass("bg-white");
        headDom.addClass("bg-primary-300");
      }
      return cardBody;
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
    theme: "westeros",
    init: function (dom, theme, option) {
      var ec = echarts.init(dom.get(0), theme);
      dom.resize(function () {
        ec.resize();
      });
      /*window.addEventListener('resize', function () {
        ec.resize();
      });*/
      this.refresh(ec, option);
      return ec;
    },
    refresh: function (ec, option) {
      ec.clear();
      ec.setOption(option);
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
    drag: function (obj) {
      //拖拽移动
      obj.addEventListener("mousedown", start);
      function start(event) {
        // 鼠标左键
        if (event.button == 0) {
          // getComputedStyle(obj)['margin-left'] return XXpx需要转成整型
          // 如果有obj有margin值而不加这个数组拖拽会出现位置偏移
          offsetX = event.pageX - obj.offsetLeft + parseInt(getComputedStyle(obj)["margin-left"]);
          offsetY = event.pageY - obj.offsetTop + parseInt(getComputedStyle(obj)["margin-top"]);
          // 绑定事件，同样unbind解绑定，此效果的实现最后必须要解绑定，否则鼠标松开后拖拽效果依然存在
          //movemove事件必须绑定到$(document)上，鼠标移动是在整个屏幕上的
          document.addEventListener("mousemove", move);
          //此处的$(document)可以改为obj
          document.addEventListener("mouseup", stop);
        }
        return false; //阻止默认事件或冒泡
      }
      function move(event) {
        obj.style.bottom = "";
        obj.style.right = "";
        obj.style.left = event.pageX - offsetX + "px";
        obj.style.top = event.pageY - offsetY + "px";
        return false; //阻止默认事件或冒泡
      }
      function stop(envet) {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", stop);
      }
    },
    loadingShow: function (cardName, msg) {
      var block = $($(`[data-name='${cardName}']`).find(".card-body")[0]);
      block.append(
        $(`
        <div id="dashboardMessage" class="blockui-message bg-slate-700 text-white rounded p-2" style="display: none;">
            <i class="icon-spinner4 spinner mt-1"></i> <span class="font-weight-semibold d-block mt-2">${msg}</span>
        </div>
      `)
      );
      var message = $($(".blockui-message")[0]);
      try {
        $(block).block({
          message: message,
          overlayCSS: {
            backgroundColor: "#fff",
            opacity: 0.8,
            cursor: "wait",
          },
          css: {
            width: 100,
            "-webkit-border-radius": 2,
            "-moz-border-radius": 2,
            border: 0,
            padding: 0,
          },
        });
      } catch (error) {}
    },
    loadingHide: function (cardName) {
      var message = $(".blockui-message");
      var block = $($(`[data-name='${cardName}']`).find(".card-body")[0]);
      try {
        $(block).unblock({
          onUnblock: function () {
            message.removeClass("bg-slate-700");
          },
        });
        $("#dashboardMessage").remove();
      } catch (error) {
        alertA(error);
      }
    },
    jumpUrl: function (url) {
      parent.layer.open({
        type: 2,
        title: false,
        area: ["100%", "100%"],
        move: false,
        resize: false,
        scrollbar: false,
        content: url,
        closeBtn: 0,
      });
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
      var titleStr = titleArr.join(",");
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          var cell = dataJson[i][titleArr[j]] || "";
          cell = cell.toString();
          cell = cell.replace('"', '""');
          if (cell.indexOf(",") > -1) {
            cell = '"' + cell + '"';
          }
          rowArr.push(cell);
        }
        dataArr.push(rowArr.join(","));
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
                <head><meta charset='UTF-8'><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
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
    /* 调用示例：
      cfs.export.toXlsx("test", data, null ,function(spread){
        //填充完data数据后的自定义spread操作
        var sheet = spread.getSheet(0);
        sheet.setValue(0, 0, "100");
      });
    */
    toXlsx: function (fileName, dataJson = null, titleArr = null, spreadOperate = null, contentDomStr = ".dashBoardContent") {
      if (dataJson && dataJson instanceof Array) {
        if (dataJson.length == 0 && titleArr == null) return;
        //组标题
        var titleObj = dataJson[0];
        titleArr = titleArr || Object.keys(titleObj);
        var dataArr = [];
        for (var i = 0; i < dataJson.length; i++) {
          var rowArr = [];
          for (var j = 0; j < titleArr.length; j++) {
            var cell = dataJson[i][titleArr[j]];
            rowArr.push(cell);
          }
          dataArr.push(rowArr);
        }
      }
      var divName = `exportXlsxTmp`;
      var div = $(`<div id="${divName}" style='display:none;'></div>`);
      $(contentDomStr).append(div);
      var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), { sheetCount: 1 });
      var sheet = spread.getSheet(0);
      sheet.suspendPaint();
      if (dataJson) {
        if (dataArr.length > 200) sheet.addRows(0, dataArr.length + 1 - 200);
        sheet.setArray(0, 0, [titleArr]);
        sheet.setArray(1, 0, dataArr);
      }
      if (spreadOperate && spreadOperate instanceof Function) {
        spreadOperate(spread);
      }
      sheet.resumePaint();
      var excelIo = new GC.Spread.Excel.IO();
      var json = spread.toJSON();
      excelIo.save(
        json,
        function (blob) {
          saveAs(blob, fileName + ".xlsx");
        },
        function (e) {
          // process error
          console.log(e);
        }
      );
      div.remove();
    },
    toJson: function (data, filename) {
      if (filename) filename += ".json";
      if (typeof data === "object") {
        data = JSON.stringify(data, undefined, 4);
      }
      var blob = new Blob([data], { type: "text/json" }),
        e = document.createEvent("MouseEvents"),
        a = document.createElement("a");
      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
      e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
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
