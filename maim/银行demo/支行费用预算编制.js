function init() {
  // spread.getSheet(0).bind(GC.Spread.Sheets.Events.CellClick, function (sender, args) {
  //   if (args.row === 3 && args.col === 1) {
  //     spread.getSheet(0).setHyperlink(3, 1, {
  //       command: function () {
  //         toPage(1);
  //       },
  //     });
  //   }
  // });
  spread.getSheet(0).setHyperlink(3, 1, {
    command: function () {
      toPage(1);
    },
  });
}

const toPage = (sign, area) => {
  let urls;

  if (_.isUndefined(area)) {
    if (sign === 1) {
      urls = `../dataSheet/dataSheet.html?appid=97&isLayer=true&param1=GRDEAQ6AHT2GAC&routList=%5B%7B%22name%22%3A%22%u6839%u76EE%u5F55%22%2C%22foldId%22%3A%220%22%7D%5D&elementType=GRD&elementId=GRDEAQ6AHT2GAC&folderId=8784323&elementTitle=human_resource&pageName=human_resource`;
    }
  }

  parent.layer.open({
    type: 2,
    title: false,
    area: ["100%", "100%"],
    move: false,
    resize: false,
    scrollbar: false,
    content: urls,
    closeBtn: 0,
  });
};
