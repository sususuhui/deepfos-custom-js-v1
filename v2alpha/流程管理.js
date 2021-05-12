const { spread, GC, setPovChangeCallback, povForm, dispatchDataSheetInfo } = params;

const handleInit = () => {
  const configureBtnWrap = document.querySelector("#configureBtnWrap");

  let linkTo = document.createElement("button");
  linkTo.setAttribute("class", "ant-btn ant-btn-sm");
  linkTo.setAttribute("type", "button");
  linkTo.innerHTML = "<span>数据复制</span>";
  configureBtnWrap.prepend(linkTo);

  linkTo.onclick = () => {
    const sheet = spread.getActiveSheet();
    const activeColumnIndex = sheet.getActiveColumnIndex();
    const activeRowIndex = sheet.getActiveRowIndex();

    const cellVal = sheet.getCell(activeRowIndex, activeColumnIndex).value();

    if (cellVal === null) {
      // console.log('单元格为 null')
    } else {
      const domain = window.location.host;
      let paramObj = getUrlParams();

      switch (activeColumnIndex) {
        case 0:
          window.open(`/business-form?now=1620805441918&sign=${paramObj.sign}&templateId=BCFECL49JVTC4P`);
          break;
      }
    }
  };

  // 设置默认行高
  const sheet = spread.getActiveSheet();
  sheet.defaults.rowHeight = 40;
  sheet.getCell(0, 0).font("bold normal 15px normal").vAlign(GC.Spread.Sheets.VerticalAlign.center);
  sheet.getCell(0, 1).font("bold normal 15px normal").vAlign(GC.Spread.Sheets.VerticalAlign.center);
  sheet.getCell(0, 2).font("bold normal 15px normal").vAlign(GC.Spread.Sheets.VerticalAlign.center);
  sheet.getCell(0, 3).font("bold normal 15px normal").vAlign(GC.Spread.Sheets.VerticalAlign.center);
  sheet.getCell(0, 3).font("bold normal 15px normal").vAlign(GC.Spread.Sheets.VerticalAlign.center);
  sheet.getRange(1, 1, 10, 10, GC.Spread.Sheets.SheetArea.viewport).font("13px normal").vAlign(GC.Spread.Sheets.VerticalAlign.center);
  sheet.options.rowHeaderVisible = false;
  sheet.options.colHeaderVisible = false;
  sheet.setValue(0, 0, "实体");
  sheet.options.frozenlineColor = "#FFFFFF";
  spread.options.tabStripVisible = false;

  // 图标规则
  const spreadNS = GC.Spread.Sheets;
  const cfs = sheet.conditionalFormats;
  const iconSetRule = new spreadNS.ConditionalFormatting.IconSetRule();
  iconSetRule.ranges([new spreadNS.Range(1, 2, 9, 1)]);
  iconSetRule.iconSetType(spreadNS.ConditionalFormatting.IconSetType.threeSymbolsUncircled).reverseIconOrder(true).showIconOnly(true);
  cfs.addRule(iconSetRule);

  // 隐藏 statusDiv
  document.querySelector("#statusDiv").style.display = "none";
};

const getUrlParams = () => {
  let arrayTemp = window.location.href.split("?");
  let obj = new Object();
  //如果不带参数，则不执行下面的代码
  if (arrayTemp.length > 1) {
    let params = arrayTemp[1].split("&");
    for (let i = 0; i < params.length; i++) {
      let parm = params[i].split("=");
      //将key和value定义给obj
      obj[parm[0]] = parm[1];
    }
  }
  return obj;
};

return {
  handleInit,
};
