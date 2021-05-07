function abc() {
  spread.suspendPaint();
  var sheet = spread.getActiveSheet();
  try {
    sheet.columnOutlines.ungroupRange(2, 6); //取消列分组初始化
    sheet.columnOutlines.group(2, 6); //C-H列区域分组
    sheet.columnOutlines.direction(GC.Spread.Sheets.Outlines.OutlineDirection.backward); //按钮位置放于左侧
    sheet.columnOutlines.expand(0, false); //列上的区域分组默认收起
  } catch (e) {
    sheet.invalidateLayout();
    sheet.repaint(); //当前sheet重新绘制
  }

  spread.resumePaint();
}
