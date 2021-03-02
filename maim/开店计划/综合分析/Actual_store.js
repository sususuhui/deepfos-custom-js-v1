$(() => {
  setPageTransferPov();
});

/**
 * 设置跳转 pov （具体分析）
 */
const setPageTransferPov = () => {
  let src = $("iframe", window.parent.document).attr("src");
  const paramObj = getSrcParam(src);
  if (!_.isUndefined(paramObj.Custom_params)) {
    let pov = JSON.parse(decodeURIComponent(paramObj.Custom_params));

    setTimeout(() => {
      $("[data-name='actual_store']").find(`.elementIframe`)[0].contentWindow.tableDataDraw("#contractList_table", { territory: pov.Entity });
    }, 6000);
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
let iframeE = [];
function electronicFormFn(tn) {
  let d = getIframeByElement(tn.nTBody);
  let a = d.parent().parent().attr("data-name");

  if (iframeE.includes(a)) {
    debugger
    let src = $("iframe", window.parent.document).attr("src");

    const paramObj = getSrcParam(src);
    let pov = JSON.parse(decodeURIComponent(paramObj.Custom_params));
    d[0].contentWindow.tableDataDraw("#contractList_table", { territory: pov.Entity });
    debugger;
  } else {
    iframeE.push(a);
  }
}
//获取元素所在的iframe对象
function getIframeByElement(element) {
  let iframe;
  $("iframe", document).each(function () {
    if (element.ownerDocument === $(this).prop("contentWindow").document) {
      iframe = $(this);
    }
    return !iframe;
  });
  return iframe;
}
$(() => {
  setPageTransferPov();
});

// /**
//  * 设置跳转 pov （具体分析）
//  */
// const setPageTransferPov = () => {
//   let src = $("iframe", window.parent.document).attr("src");
//   const paramObj = getSrcParam(src);
//   if (!_.isUndefined(paramObj.Custom_params)) {
//     let pov = JSON.parse(decodeURIComponent(paramObj.Custom_params));
//     setTimeout(() => {
//       $("[data-name='actual_store']").find(`.elementIframe`)[0].contentWindow.tableDataDraw("#contractList_table", { territory: pov.Entity });
//     }, 6000);
//   }
// };

// /**
//  * 获取 iframe src 参数
//  * @param {*} src
//  */
// const getSrcParam = (src) => {
//   //把src用'?'分隔成数组
//   let arrayTemp = src.split("?");
//   let obj = new Object();
//   //如果不带参数，则不执行下面的代码
//   if (arrayTemp.length > 1) {
//     let params = arrayTemp[1].split("&");
//     for (let i = 0; i < params.length; i++) {
//       let parm = params[i].split("=");
//       //将key和value定义给obj
//       obj[parm[0]] = parm[1];
//     }
//   }
//   return obj;
// };
