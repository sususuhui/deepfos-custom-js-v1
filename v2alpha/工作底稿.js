const { spread, GC, setPovChangeCallback, povForm, dispatchDataSheetInfo } = params;

const handleInit = () => {
  const configureBtnWrap = document.querySelector("#configureBtnWrap");
  let linkTo = document.createElement("button");
  linkTo.setAttribute("class", "ant-btn ant-btn-sm");
  linkTo.setAttribute("type", "button");
  linkTo.innerHTML = "<span>查看明细</span>";
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
        case 19:
          window.open(`form-list-view?id=LSTECASRE7SB3H&sign=${paramObj.sign}`);
          break;
        case 20:
          window.open(`form-list-view?id=LSTECH4QBI8Q08&name=Reconciliation_report&sign=${paramObj.sign}`);
          break;
        case 21:
          window.open(`form-list-view?id=LSTECGD78BL927&sign=${paramObj.sign}`);
          break;
      }
    }
  };

  changeEntityDsc();
};

const changeEntityDsc = () => {
  const sheet = spread.getActiveSheet();

  const sheet_b2 = sheet.getCell(1, 1).value();
  const sheet_h2 = sheet.getCell(1, 7).value();
  const sheet_n2 = sheet.getCell(1, 13).value();

  if (sheet_b2.result === "马克华菲（上海）商业有限公司(合并）") sheet.setValue(1, 1, { ...sheet_b2, result: "小计" });
  if (sheet_h2.result === "马克华菲（上海）商业有限公司(合并）") sheet.setValue(1, 7, { ...sheet_h2, result: "小计" });
  if (sheet_n2.result === "马克华菲（上海）商业有限公司(合并）") sheet.setValue(1, 13, { ...sheet_n2, result: "小计" });
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
  changeEntityDsc,
};
