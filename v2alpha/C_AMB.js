const { spread, GC, setPovChangeCallback, povForm, dispatchDataSheetInfo } = params;

const AfterRefresh = () => {
  const sheet = spread.getActiveSheet();

  spread.suspendPaint();
  sheet.suspendCalcService(true);

  const { Period } = povForm.getFieldValue(4);

  debugger;
  if (Period === "2") {
    debugger;
    sheet.setColumnVisible(26, false);
    sheet.setColumnVisible(27, false);
    sheet.setColumnVisible(28, false);
  } else {
    sheet.setColumnVisible(26, true);
    sheet.setColumnVisible(27, true);
    sheet.setColumnVisible(28, true);
  }

  sheet.resumeCalcService(false);
  spread.resumePaint();
};

return {
  AfterRefresh,
};
