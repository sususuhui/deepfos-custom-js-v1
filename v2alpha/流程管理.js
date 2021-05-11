const { spread, GC, setPovChangeCallback, povForm, dispatchDataSheetInfo } = params;

const handleInit = () => {
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

return {
  handleInit,
};
