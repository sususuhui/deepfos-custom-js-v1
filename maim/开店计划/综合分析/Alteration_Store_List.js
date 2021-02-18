function customizedJs() {
  try {
    setPageTransferPov();
  } catch (error) {
    console.error(error);
  }
}

const setPageTransferPov = () => {
  let src = $("iframe", window.parent.document).attr("src");
  const paramObj = getSrcParam(src);
  if (!_.isUndefined(paramObj.Custom_params)) {
    let flag = parseInt(paramObj.Custom_params);

    spread.setActiveSheetIndex(flag);
  }
};

/**
 * 获取 iframe src 参数
 * @param {*} src
 */
const getSrcParam = (src) => {
  //把src用'?'分隔成数组
  let arrayTemp = src.split("?");
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
