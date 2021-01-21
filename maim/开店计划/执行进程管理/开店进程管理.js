const r2 = (params) => {
  let cardName = 'r2';
  let echartDom = $('#' + cardName)
    .find('.card-body')
    .find('.echart');

  const totalData = {
    dimensions: [
      '开店阶段',
      '进程提示',
      '计划开始',
      '计划结束',
      '实际开始',
      '实际结束',
    ],
    source: [
      ['立项申请', 0, 'data1-1', 'data1-2', 'data1-3', 'data1-4'],
      ['选址勘探', 1, 'data2-1', 'data2-2', 'data2-3', 'data2-4'],
      ['租金谈判', 2, 'data3-1', 'data3-2', 'data3-3', 'data3-4'],
      ['门店装修', 3, 'data4-1', 'data4-2', 'data4-3', 'data4-4'],
      ['开业准备', 4, 'data5-1', 'data5-2', 'data5-3', 'data5-4'],
    ],
  };

  const stateConfig = [
    {
      title: '尚未开始',
      color: '#A5A5A5',
    },
    {
      title: '请尽快开始',
      color: '#FF0000',
    },
    {
      title: '进行中',
      color: '#00B0F0',
    },
    {
      title: '如期完成',
      color: '#92D050',
    },
    {
      title: '延期完成',
      color: '#FFC000',
    },
  ];

  echartDom.html('');

  let table_html_start = `<table class="table table-hover datatable-highlight dataTable no-footer table-striped">`;

  table_html_start += `<tr>`;
  totalData.dimensions.forEach((val, i) => {
    table_html_start += `<th style="text-align: center">${val}</th>`;
  });
  table_html_start += `</tr>`;

  totalData.source.forEach((val, i) => {
    table_html_start += `<tr>`;
    val.forEach((cVal, j) => {
      if (j === 1) {
        table_html_start += `
          <td class="item" style="display: flex;justify-content: center;">
            <div style="width:100px" >
              <span
                style="
                  display: inline-block;
                  width: 15px;
                  height: 15px;
                  border-radius: 50%;
                  margin-right: 10px;
                  background-color: ${stateConfig[val[1]].color};
                "
              ></span>
              <span style="">${stateConfig[cVal].title}</span>
            </div>
          </td>
          `;
      } else {
        table_html_start += `<td style="text-align: center">${cVal}</td>`;
      }
    });
    table_html_start += `</tr>`;
  });

  table_html_start += `</table>`;

  echartDom.html(table_html_start);
};

/**
 *
 * 请求数据
 * @param {*} params
 * @returns
 */
function getData(params) {
  return CommonRequest({
    url: `${Api.python}start/web`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      pyName: 'xxxx',
      params: params || {
        system_id: 'S200101001',
      },
      ...userinfoParams2,
    }),
  });
}
