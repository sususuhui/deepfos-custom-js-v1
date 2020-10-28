function initEchart(id, option) {
  const chart = echarts.init(document.getElementById('chart-' + id));
  chart.clear();
  chart.setOption(option);
}

function dealSheetData(data) {
  var xAxis = [];
  var series = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      xAxis.push(v.sdd[0].n);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    var arr1 = ['0', '1', '2', '3', '4', '5'];
    // i==0 || i==1 || i==2 || i==3 || i==4
    if (arr1.includes(i)) {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? floatNum.accMul(cellVal.d.toFixed(0), 1) : '-');
      });
      series.push(itemArr);
    } else {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? cellVal.d.toFixed(0) : '-');
      });
      series.push(itemArr);
    }
  });
  console.log(series);

  return {
    series,
    xAxis,
  };
}

function R1C1(data, params) {
  var componentId = params.componentId;
  var chartData = dealSheetData(data);

  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}',
    },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['销售额', '总成本', '总费用', '其他损益', '净利润'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '辅助',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)',
        },
        emphasis: {
          itemStyle: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)',
          },
        },
        data: [0, chartData.series[2][0], chartData.series[2][0] - chartData.series[3][0], chartData.series[5][0] - chartData.series[4][0], 0],
      },
      {
        name: '销售额',
        //  color:['#568736'],
        type: 'bar',
        stack: '总量',
        data: [chartData.series[0][0], '-', '-', '-', chartData.series[5][0]],
      },
      {
        name: '新增',
        //  color:['#BED5B4'],
        type: 'bar',
        stack: '总量',
        data: ['-', '-', '-', chartData.series[4][0], '-'],
      },
      {
        name: '关店',
        type: 'bar',
        stack: '总量',
        // color:['#A5A5A5'],

        data: ['-', chartData.series[1][0], chartData.series[3][0], '-', '-'],
        barWidth: '60%',
      },
    ],
  };
  // initEchart(componentId, option);

  // 手机端
  if (getRequest().isView == 'mobile') {
    option = {
      ...option,
      grid: {
        left: '0',
        right: '2%',
        bottom: '3%',
        top: '3%',
        containLabel: true,
      },
    };
  }

  chart = echarts.init(document.getElementById('chart-' + componentId));
  chart.clear();
  chart.setOption(option);

  chart.off('click');
  chart.on('click', (params) => {
    window.location.href = 'http://main.seepln.com/v1_5_6/dataSheet/dataSheetMenu.html?param1=GRDE745T96B645&appid=22';
  });
}

function dealSheetData2(data) {
  var xAxis = [];
  var series = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      xAxis.push(v.sdd[0].n);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    if (i == 0) {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? floatNum.accMul(cellVal.d.toFixed(0), 1) : '-');
      });
      series.push(itemArr);
    } else {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? cellVal.d.toFixed(0) : '-');
      });
      series.push(itemArr);
    }
  });
  console.log(series);

  return {
    series,
    xAxis,
  };
}

function R1C2(data, params) {
  var componentId = params.componentId;
  var chartData = dealSheetData2(data);
  var option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      type: 'category',
      // name: '月份',
      data: ['销售额', '总成本', '毛利', '总费用', '其他损益', '净利润'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '去年实际',
        data: chartData.series[0],
        type: 'bar',
      },
      {
        data: chartData.series[1],
        type: 'bar',
        name: '当年预算',
        barCategoryGap: '50%',
      },
    ],
  };

  // 手机端
  if (getRequest().isView == 'mobile') {
    option = {
      ...option,
      grid: {
        left: '0',
        right: '2%',
        bottom: '3%',
        top: '15%',
        containLabel: true,
      },
      series: [
        {
          name: '去年实际',
          data: chartData.series[0],
          type: 'bar',
        },
        {
          data: chartData.series[1],
          type: 'bar',
          name: '当年预算',
          barCategoryGap: '50%',
        },
      ],
    };
  }

  initEchart(componentId, option);
}

function dealSheetData3(data) {
  var xAxis = [];
  var series = [];
  data.sheetList[0].columnList.forEach(function (item) {
    item.m.forEach(function (v) {
      xAxis.push(v.sdd[0].n);
    });
  });
  data.sheetList[0].dataList.forEach(function (rowVal, i) {
    var itemArr = [];
    if (i == 0) {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? floatNum.accMul(cellVal.d.toFixed(0), 1) : '-');
      });
      series.push(itemArr);
    } else {
      rowVal.forEach(function (cellVal) {
        itemArr.push(typeof cellVal.d != 'undefined' ? cellVal.d.toFixed(0) : '-');
      });
      series.push(itemArr);
    }
  });
  console.log(series);

  return {
    series,
    xAxis,
  };
}

function R1C3(data, params) {
  var componentId = params.componentId;
  var chartData = dealSheetData3(data);
  var option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      type: 'category',
      // name: '月份',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '去年实际',
        // data: chartData.series[0],
        data: ['70522189', '70387639', '67198173', '67447659', '71003362', '62573377', '62002871', '71032076', '85716913', '73004680', '71164659', '87658349'],
        type: 'line',
        smooth: true,
      },
      {
        data: chartData.series[1],
        type: 'line',
        name: '当年预算',
        smooth: true,
      },
    ],
  };

  // 手机端
  if (getRequest().isView == 'mobile') {
    option = {
      ...option,
      grid: {
        left: '0',
        right: '2%',
        bottom: '3%',
        top: '15%',
        containLabel: true,
      },
    };
  }

  initEchart(componentId, option);
}

//渲染 科目余额表
function readList(data, params) {
  var componentId = params.componentId;

  // 手机端
  if (getRequest().isView == 'mobile') {
    let cardName = '损益表预算明细';
    let height = 370;

    let cardDom = $('#' + cardName).parent();
    $(cardDom).height(height);
    let echartDom = $('#' + cardName)
      .find('.card-body')
      .find('.echart');
    let _height = $(echartDom).parent().height();
    $(echartDom).height(_height);
  }

  var html = `<table class='table table-bordered datatable-complex-header dataTable no-footer' style="table-layout: fixed;">
                  <thead>
                       <tr>
                            <th style="width:5rem;">科目</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">一月</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">二月</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">三月</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">四月</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">五月</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">六月</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">七月</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">八月</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">九月</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">十月</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">十一月</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">十二月</th>
                            <th style="text-align:center;padding:.75rem 0;width:6rem">全年</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="boldTR">
                            <td>销售额</td>
                            <td style='text-align:center;padding:.75rem 0;'>80,522,189</td>
                            <td style='text-align:center;padding:.75rem 0;'>80,387,639</td>
                            <td style='text-align:center;padding:.75rem 0;'>77,198,173</td>
                            <td style='text-align:center;padding:.75rem 0;'>77,447,659</td>
                            <td style='text-align:center;padding:.75rem 0;'>79,003,362</td>
                            <td style='text-align:center;padding:.75rem 0;'>72,573,377</td>
                            <td style='text-align:center;padding:.75rem 0;'>72,002,871</td>
                            <td style='text-align:center;padding:.75rem 0;'>76,032,076</td>
                            <td style='text-align:center;padding:.75rem 0;'>75,716,913</td>
                            <td style='text-align:center;padding:.75rem 0;'>83,004,680</td>
                            <td style='text-align:center;padding:.75rem 0;'>81,164,659</td>
                            <td style='text-align:center;padding:.75rem 0;'>77,658,349</td>
                            <td style='text-align:center;padding:.75rem 0;'>932,711,948</td>
                        </tr>
                        <tr>
                            <td>总成本</td>
                            <td style='text-align:center;padding:.75rem 0;'>24,478,746</td>
                            <td style='text-align:center;padding:.75rem 0;'>24,437,842</td>
                            <td style='text-align:center;padding:.75rem 0;'>23,468,245</td>
                            <td style='text-align:center;padding:.75rem 0;'>23,544,088</td>
                            <td style='text-align:center;padding:.75rem 0;'>24,017,022</td>
                            <td style='text-align:center;padding:.75rem 0;'>22,062,306</td>
                            <td style='text-align:center;padding:.75rem 0;'>21,888,874</td>
                            <td style='text-align:center;padding:.75rem 0;'>23,113,751</td>
                            <td style='text-align:center;padding:.75rem 0;'>23,017,942</td>
                            <td style='text-align:center;padding:.75rem 0;'>25,233,422</td>
                            <td style='text-align:center;padding:.75rem 0;'>24,674,056</td>
                            <td style='text-align:center;padding:.75rem 0;'>23,608,138</td>
                            <td style='text-align:center;padding:.75rem 0;'>283,544,433</td>
                        </tr> 
                         <tr>
                            <td>毛利</td>
                            <td style='text-align:center;padding:.75rem 0;'>56,043,443</td>
                            <td style='text-align:center;padding:.75rem 0;'>55,949,797</td>
                            <td style='text-align:center;padding:.75rem 0;'>53,729,928</td>
                            <td style='text-align:center;padding:.75rem 0;'>53,903,571</td>
                            <td style='text-align:center;padding:.75rem 0;'>54,986,340</td>
                            <td style='text-align:center;padding:.75rem 0;'>50,511,071</td>
                            <td style='text-align:center;padding:.75rem 0;'>50,113,997</td>
                            <td style='text-align:center;padding:.75rem 0;'>52,918,324</td>
                            <td style='text-align:center;padding:.75rem 0;'>52,698,971</td>
                            <td style='text-align:center;padding:.75rem 0;'>57,771,258</td>
                            <td style='text-align:center;padding:.75rem 0;'>56,490,603</td>
                            <td style='text-align:center;padding:.75rem 0;'>54,050,212</td>
                            <td style='text-align:center;padding:.75rem 0;'>649,167,515</td>
                        </tr> 
                        <tr>
                            <td>费用</td>
                            <td style='text-align:center;padding:.75rem 0;'>52,249,863</td>
                            <td style='text-align:center;padding:.75rem 0;'>52,204,117</td>
                            <td style='text-align:center;padding:.75rem 0;'>51,119,697</td>
                            <td style='text-align:center;padding:.75rem 0;'>51,204,524</td>
                            <td style='text-align:center;padding:.75rem 0;'>51,733,463</td>
                            <td style='text-align:center;padding:.75rem 0;'>49,547,269</td>
                            <td style='text-align:center;padding:.75rem 0;'>49,353,295</td>
                            <td style='text-align:center;padding:.75rem 0;'>50,723,226</td>
                            <td style='text-align:center;padding:.75rem 0;'>50,616,071</td>
                            <td style='text-align:center;padding:.75rem 0;'>53,093,911</td>
                            <td style='text-align:center;padding:.75rem 0;'>52,468,304</td>
                            <td style='text-align:center;padding:.75rem 0;'>51,285,170</td>
                            <td style='text-align:center;padding:.75rem 0;'>615,598,899</td>
                        </tr>
                        <tr>
                            <td>净利润</td>
                            <td style='text-align:center;padding:.75rem 0;'>4,710,247</td>
                            <td style='text-align:center;padding:.75rem 0;'>4,662,347</td>
                            <td style='text-align:center;padding:.75rem 0;'>3,526,898</td>
                            <td style='text-align:center;padding:.75rem 0;'>3,615,714</td>
                            <td style='text-align:center;padding:.75rem 0;'>4,169,544</td>
                            <td style='text-align:center;padding:.75rem 0;'>1,880,469</td>
                            <td style='text-align:center;padding:.75rem 0;'>1,677,369</td>
                            <td style='text-align:center;padding:.75rem 0;'>3,111,765</td>
                            <td style='text-align:center;padding:.75rem 0;'>2,999,566</td>
                            <td style='text-align:center;padding:.75rem 0;'>5,594,013</td>
                            <td style='text-align:center;padding:.75rem 0;'>4,938,966</td>
                            <td style='text-align:center;padding:.75rem 0;'>3,690,721</td>
                            <td style='text-align:center;padding:.75rem 0;'>44,577,629</td>
                        </tr>
                    </tbody>
                </table>`;
  $('#chart-' + componentId).html(html);
  $('#chart-' + componentId)
    .parent()
    .css('overflow', 'auto');
}
