const { spread, GC, setPovChangeCallback, povForm, dispatchDataSheetInfo } = params;

const handleInit = () => {
  // 设置默认行高
  const sheet = spread.getActiveSheet();
  sheet.defaults.rowHeight = 40;

  sheet.options.rowHeaderVisible = false;
  sheet.options.colHeaderVisible = false;
  sheet.options.frozenlineColor = "#FFFFFF";

  // 图标规则
  const spreadNS = GC.Spread.Sheets;
  const cfs = sheet.conditionalFormats;
  const iconSetRule = new spreadNS.ConditionalFormatting.IconSetRule();
  iconSetRule.ranges([new spreadNS.Range(1, 2, 9, 1)]);
  iconSetRule.iconSetType(spreadNS.ConditionalFormatting.IconSetType.threeSymbolsUncircled).reverseIconOrder(true).showIconOnly(true);
  cfs.addRule(iconSetRule);
};

return {
  handleInit,
};
