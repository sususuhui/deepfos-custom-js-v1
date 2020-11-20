// 引入 jQuery-Timelinr
let jQuery_Timelinr_script = document.createElement('script');
jQuery_Timelinr_script.innerHTML = `
jQuery.fn.timelinr = function (options) {
  // default plugin settings
  settings = jQuery.extend(
    {
      orientation: 'horizontal', // value: horizontal | vertical, default to horizontal
      containerDiv: '#timeline', // value: any HTML tag or #id, default to #timeline
      datesDiv: '#dates', // value: any HTML tag or #id, default to #dates
      datesSelectedClass: 'selected', // value: any class, default to selected
      datesSpeed: 'normal', // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
      issuesDiv: '#issues', // value: any HTML tag or #id, default to #issues
      issuesSelectedClass: 'selected', // value: any class, default to selected
      issuesSpeed: 'fast', // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
      issuesTransparency: 0.2, // value: integer between 0 and 1 (recommended), default to 0.2
      issuesTransparencySpeed: 500, // value: integer between 100 and 1000 (recommended), default to 500 (normal)
      prevButton: '#prev', // value: any HTML tag or #id, default to #prev
      nextButton: '#next', // value: any HTML tag or #id, default to #next
      arrowKeys: 'false', // value: true | false, default to false
      startAt: 1, // value: integer, default to 1 (first)
      autoPlay: 'false', // value: true | false, default to false
      autoPlayDirection: 'forward', // value: forward | backward, default to forward
      autoPlayPause: 2000, // value: integer (1000 = 1 seg), default to 2000 (2segs)
    },
    options
  );

  $(function () {
    // Checks if required elements exist on page before initializing timelinr | improvement since 0.9.55
    if ($(settings.datesDiv).length > 0 && $(settings.issuesDiv).length > 0) {
      // setting variables... many of them
      var howManyDates = $(settings.datesDiv + ' li').length;
      var howManyIssues = $(settings.issuesDiv + ' li').length;
      var currentDate = $(settings.datesDiv).find('a.' + settings.datesSelectedClass);
      var currentIssue = $(settings.issuesDiv).find('li.' + settings.issuesSelectedClass);
      var widthContainer = $(settings.containerDiv).width();
      var heightContainer = $(settings.containerDiv).height();
      var widthIssues = $(settings.issuesDiv).width();
      var heightIssues = $(settings.issuesDiv).height();
      var widthIssue = $(settings.issuesDiv + ' li').width();
      var heightIssue = $(settings.issuesDiv + ' li').height();
      var widthDates = $(settings.datesDiv).width();
      var heightDates = $(settings.datesDiv).height();
      var widthDate = $(settings.datesDiv + ' li').width();
      var heightDate = $(settings.datesDiv + ' li').height();
      // set positions!
      if (settings.orientation == 'horizontal') {
        $(settings.issuesDiv).width(widthIssue * howManyIssues);
        $(settings.datesDiv)
          .width(widthDate * howManyDates)
          .css('marginLeft', widthContainer / 2 - widthDate / 2);
        var defaultPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0, $(settings.datesDiv).css('marginLeft').indexOf('px')));
      } else if (settings.orientation == 'vertical') {
        $(settings.issuesDiv).height(heightIssue * howManyIssues);
        $(settings.datesDiv)
          .height(heightDate * howManyDates)
          .css('marginTop', heightContainer / 2 - heightDate / 2);
        var defaultPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0, $(settings.datesDiv).css('marginTop').indexOf('px')));
      }

      $(settings.datesDiv + ' a').click(function (event) {
        event.preventDefault();
        // first vars
        var whichIssue = $(this).text();
        var currentIndex = $(this).parent().prevAll().length;
        // moving the elements
        if (settings.orientation == 'horizontal') {
          $(settings.issuesDiv).animate({ marginLeft: -widthIssue * currentIndex }, { queue: false, duration: settings.issuesSpeed });
        } else if (settings.orientation == 'vertical') {
          $(settings.issuesDiv).animate({ marginTop: -heightIssue * currentIndex }, { queue: false, duration: settings.issuesSpeed });
        }
        $(settings.issuesDiv + ' li')
          .animate({ opacity: settings.issuesTransparency }, { queue: false, duration: settings.issuesSpeed })
          .removeClass(settings.issuesSelectedClass)
          .eq(currentIndex)
          .addClass(settings.issuesSelectedClass)
          .fadeTo(settings.issuesTransparencySpeed, 1);
        // prev/next buttons now disappears on first/last issue | bugfix from 0.9.51: lower than 1 issue hide the arrows | bugfixed: arrows not showing when jumping from first to last date
        if (howManyDates == 1) {
          $(settings.prevButton + ',' + settings.nextButton).fadeOut('fast');
        } else if (howManyDates == 2) {
          if ($(settings.issuesDiv + ' li:first-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.prevButton).fadeOut('fast');
            $(settings.nextButton).fadeIn('fast');
          } else if ($(settings.issuesDiv + ' li:last-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.nextButton).fadeOut('fast');
            $(settings.prevButton).fadeIn('fast');
          }
        } else {
          if ($(settings.issuesDiv + ' li:first-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.nextButton).fadeIn('fast');
            $(settings.prevButton).fadeOut('fast');
          } else if ($(settings.issuesDiv + ' li:last-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.prevButton).fadeIn('fast');
            $(settings.nextButton).fadeOut('fast');
          } else {
            $(settings.nextButton + ',' + settings.prevButton).fadeIn('slow');
          }
        }
        // now moving the dates
        $(settings.datesDiv + ' a').removeClass(settings.datesSelectedClass);
        $(this).addClass(settings.datesSelectedClass);
        if (settings.orientation == 'horizontal') {
          $(settings.datesDiv).animate({ marginLeft: defaultPositionDates - widthDate * currentIndex }, { queue: false, duration: 'settings.datesSpeed' });
        } else if (settings.orientation == 'vertical') {
          $(settings.datesDiv).animate({ marginTop: defaultPositionDates - heightDate * currentIndex }, { queue: false, duration: 'settings.datesSpeed' });
        }
      });

      $(settings.nextButton).bind('click', function (event) {
        event.preventDefault();
        // bugixed from 0.9.54: now the dates gets centered when there's too much dates.
        var currentIndex = $(settings.issuesDiv)
          .find('li.' + settings.issuesSelectedClass)
          .index();
        if (settings.orientation == 'horizontal') {
          var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginLeft').substring(0, $(settings.issuesDiv).css('marginLeft').indexOf('px')));
          var currentIssueIndex = currentPositionIssues / widthIssue;
          var currentPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0, $(settings.datesDiv).css('marginLeft').indexOf('px')));
          var currentIssueDate = currentPositionDates - widthDate;
          if (currentPositionIssues <= -(widthIssue * howManyIssues - widthIssue)) {
            $(settings.issuesDiv).stop();
            $(settings.datesDiv + ' li:last-child a').click();
          } else {
            if (!$(settings.issuesDiv).is(':animated')) {
              // bugixed from 0.9.52: now the dates gets centered when there's too much dates.
              $(settings.datesDiv + ' li')
                .eq(currentIndex + 1)
                .find('a')
                .trigger('click');
            }
          }
        } else if (settings.orientation == 'vertical') {
          var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginTop').substring(0, $(settings.issuesDiv).css('marginTop').indexOf('px')));
          var currentIssueIndex = currentPositionIssues / heightIssue;
          var currentPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0, $(settings.datesDiv).css('marginTop').indexOf('px')));
          var currentIssueDate = currentPositionDates - heightDate;
          if (currentPositionIssues <= -(heightIssue * howManyIssues - heightIssue)) {
            $(settings.issuesDiv).stop();
            $(settings.datesDiv + ' li:last-child a').click();
          } else {
            if (!$(settings.issuesDiv).is(':animated')) {
              // bugixed from 0.9.54: now the dates gets centered when there's too much dates.
              $(settings.datesDiv + ' li')
                .eq(currentIndex + 1)
                .find('a')
                .trigger('click');
            }
          }
        }
        // prev/next buttons now disappears on first/last issue | bugfix from 0.9.51: lower than 1 issue hide the arrows
        if (howManyDates == 1) {
          $(settings.prevButton + ',' + settings.nextButton).fadeOut('fast');
        } else if (howManyDates == 2) {
          if ($(settings.issuesDiv + ' li:first-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.prevButton).fadeOut('fast');
            $(settings.nextButton).fadeIn('fast');
          } else if ($(settings.issuesDiv + ' li:last-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.nextButton).fadeOut('fast');
            $(settings.prevButton).fadeIn('fast');
          }
        } else {
          if ($(settings.issuesDiv + ' li:first-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.prevButton).fadeOut('fast');
          } else if ($(settings.issuesDiv + ' li:last-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.nextButton).fadeOut('fast');
          } else {
            $(settings.nextButton + ',' + settings.prevButton).fadeIn('slow');
          }
        }
      });

      $(settings.prevButton).click(function (event) {
        event.preventDefault();
        // bugixed from 0.9.54: now the dates gets centered when there's too much dates.
        var currentIndex = $(settings.issuesDiv)
          .find('li.' + settings.issuesSelectedClass)
          .index();
        if (settings.orientation == 'horizontal') {
          var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginLeft').substring(0, $(settings.issuesDiv).css('marginLeft').indexOf('px')));
          var currentIssueIndex = currentPositionIssues / widthIssue;
          var currentPositionDates = parseInt($(settings.datesDiv).css('marginLeft').substring(0, $(settings.datesDiv).css('marginLeft').indexOf('px')));
          var currentIssueDate = currentPositionDates + widthDate;
          if (currentPositionIssues >= 0) {
            $(settings.issuesDiv).stop();
            $(settings.datesDiv + ' li:first-child a').click();
          } else {
            if (!$(settings.issuesDiv).is(':animated')) {
              // bugixed from 0.9.54: now the dates gets centered when there's too much dates.
              $(settings.datesDiv + ' li')
                .eq(currentIndex - 1)
                .find('a')
                .trigger('click');
            }
          }
        } else if (settings.orientation == 'vertical') {
          var currentPositionIssues = parseInt($(settings.issuesDiv).css('marginTop').substring(0, $(settings.issuesDiv).css('marginTop').indexOf('px')));
          var currentIssueIndex = currentPositionIssues / heightIssue;
          var currentPositionDates = parseInt($(settings.datesDiv).css('marginTop').substring(0, $(settings.datesDiv).css('marginTop').indexOf('px')));
          var currentIssueDate = currentPositionDates + heightDate;
          if (currentPositionIssues >= 0) {
            $(settings.issuesDiv).stop();
            $(settings.datesDiv + ' li:first-child a').click();
          } else {
            if (!$(settings.issuesDiv).is(':animated')) {
              // bugixed from 0.9.54: now the dates gets centered when there's too much dates.
              $(settings.datesDiv + ' li')
                .eq(currentIndex - 1)
                .find('a')
                .trigger('click');
            }
          }
        }
        // prev/next buttons now disappears on first/last issue | bugfix from 0.9.51: lower than 1 issue hide the arrows
        if (howManyDates == 1) {
          $(settings.prevButton + ',' + settings.nextButton).fadeOut('fast');
        } else if (howManyDates == 2) {
          if ($(settings.issuesDiv + ' li:first-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.prevButton).fadeOut('fast');
            $(settings.nextButton).fadeIn('fast');
          } else if ($(settings.issuesDiv + ' li:last-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.nextButton).fadeOut('fast');
            $(settings.prevButton).fadeIn('fast');
          }
        } else {
          if ($(settings.issuesDiv + ' li:first-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.prevButton).fadeOut('fast');
          } else if ($(settings.issuesDiv + ' li:last-child').hasClass(settings.issuesSelectedClass)) {
            $(settings.nextButton).fadeOut('fast');
          } else {
            $(settings.nextButton + ',' + settings.prevButton).fadeIn('slow');
          }
        }
      });
      // keyboard navigation, added since 0.9.1
      if (settings.arrowKeys == 'true') {
        if (settings.orientation == 'horizontal') {
          $(document).keydown(function (event) {
            if (event.keyCode == 39) {
              $(settings.nextButton).click();
            }
            if (event.keyCode == 37) {
              $(settings.prevButton).click();
            }
          });
        } else if (settings.orientation == 'vertical') {
          $(document).keydown(function (event) {
            if (event.keyCode == 40) {
              $(settings.nextButton).click();
            }
            if (event.keyCode == 38) {
              $(settings.prevButton).click();
            }
          });
        }
      }
      // default position startAt, added since 0.9.3
      $(settings.datesDiv + ' li')
        .eq(settings.startAt - 1)
        .find('a')
        .trigger('click');
      // autoPlay, added since 0.9.4
      if (settings.autoPlay == 'true') {
        // set default timer
        var timer = setInterval(autoPlay, settings.autoPlayPause);
        // pause autoplay on hover
        $(settings.containerDiv).hover(
          function (ev) {
            clearInterval(timer);
          },
          function (ev) {
            // start again timer on mouse out
            timer = setInterval(autoPlay, settings.autoPlayPause);
          }
        );
      }
    }
  });
};

// autoPlay, added since 0.9.4
function autoPlay() {
  var currentDate = $(settings.datesDiv).find('a.' + settings.datesSelectedClass);
  if (settings.autoPlayDirection == 'forward') {
    if (currentDate.parent().is('li:last-child')) {
      $(settings.datesDiv + ' li:first-child')
        .find('a')
        .trigger('click');
    } else {
      currentDate.parent().next().find('a').trigger('click');
    }
  } else if (settings.autoPlayDirection == 'backward') {
    if (currentDate.parent().is('li:first-child')) {
      $(settings.datesDiv + ' li:last-child')
        .find('a')
        .trigger('click');
    } else {
      currentDate.parent().prev().find('a').trigger('click');
    }
  }
}
`;
document.head.appendChild(jQuery_Timelinr_script);

$(function () {
  $('#timeline').timelinr({
    issuesTransparency: 0,
  });
  initHtml();
  renderDates();
  renderIssues();
});

const setHtmlStyle_Timelinr = (width) => {
  // 引入样式
  let style = document.createElement('style');
  style.innerHTML = `
#timeline {
  width: ${width - 50}px;
  height: 800px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}

#dates li {
  list-style: none;
  float: left;
  width: 150px;
  height: 100px;
  font-size: 8px;
  text-align: center;
}
#dates a {
  padding-top: 10px;
  text-decoration: none;
  color: #424242;
}

#dates img {
  margin-top: 10px;
}

#issues li {
  width: ${width - 50}px;
  height: 600px;
  list-style: none;
  float: left;
  position: relative;
}
#issues li img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
`;
  document.head.appendChild(style);
};

const initHtml = () => {
  let cardName = 'TimelineTable';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  cfs.card.body.getDom(cardName).css('padding', '0');
  cfs.echarts.correctHeight(cardName);

  let html = `
  <div id="timeline">
    <ul id="issues"></ul>
    <ul id="dates"></ul>
  </div>
  `;

  let _width = $(echartDom).width();
  setHtmlStyle_Timelinr(_width);

  $(echartDom).html(html);
};

let data = [
  { id: 0, name: '0 土拍信息201901', img: 'https://i.loli.net/2020/11/09/3SencArtFO2VuNZ.png' },
  { id: 1, name: '1 地块信息201902', img: 'https://i.loli.net/2020/11/09/wtmW7vcTypM16f4.jpg' },
  { id: 2, name: '2 地理位置图201902', img: 'https://i.loli.net/2020/11/09/3B9OJmRV2kvbDZG.jpg' },
  { id: 3, name: '2.1拆迁完工201904', img: 'https://i.loli.net/2020/11/10/tLcdAvn37Q9kei8.png' },
  { id: 4, name: '3 地基201905', img: 'https://i.loli.net/2020/11/09/l3i7UhTA9SVHJam.png' },
  { id: 5, name: '4 框架201907', img: 'https://i.loli.net/2020/11/09/cD5SAG9PhYKnLls.png' },
  { id: 6, name: '4.2 楼体建设202004', img: 'https://i.loli.net/2020/11/09/TPFWrJZu9jLlGnh.png' },
  { id: 7, name: '5 封顶202007', img: 'https://i.loli.net/2020/11/09/mjLrW4ywzlHkB2b.jpg' },
  { id: 8, name: '5.1 楼体建设202008', img: 'https://i.loli.net/2020/11/09/Gn6C2v9QxZLplSB.png' },
  { id: 9, name: '6 外立面202009', img: 'https://i.loli.net/2020/11/09/zCegG6sYkVRrQOF.jpg' },
  { id: 10, name: '7 楼体完工202011', img: 'https://i.loli.net/2020/11/10/XRBkrFsMEG7jQzm.jpg' },
  { id: 11, name: '8 绿化完工202012', img: 'https://i.loli.net/2020/11/09/OVrfPj2d39pyMuU.jpg' },
  { id: 12, name: '9 销售情况202012', img: 'https://i.loli.net/2020/11/09/2zFD4ekaXwTlW7s.png' },
];

const renderDates = () => {
  let html = ``;
  data.forEach((val, i) => {
    html += `<li><a href="#${val.id}">${val.name}<img src="${val.img}" height="100" width="100"/></a></li>`;
  });
  $('#dates').html(html);
};

const renderIssues = () => {
  let html = ``;
  data.forEach((val, i) => {
    html += `
    <li id="${val.id}">
      <img src="${val.img}" width="600"/>
    </li>`;
  });
  $('#issues').html(html);
};

const renderTable1 = (data, params) => {
  var componentId = params.componentId;
  var html = `<table class="table table-hover datatable-highlight dataTable no-footer table-striped" >
                <tr>
                    <th style="padding:0 0 0 1.2rem;width:8rem;"></th>
                    <th>投前版</th>
                    <th>投决版</th>
                    <th>实际数</th>
                </tr>
                <tr>
                    <td style="padding:0 0 0 1.2rem;">ROA</td>
                    <td>
                        <span style="display: inline-block;width: 15%;height: 10px;background: #548235;"></span>
                        <span style="float: right;">15%</span>
                    </td>
                    <td>
                        <span style="display: inline-block;width: 10%;height: 10px;background: #e2f0d9;"></span>
                        <span style="float: right;">10%</span>
                    </td>
                    <td>
                        <span style="display: inline-block;width: 16%;height: 10px;background: #385723;"></span>
                        <span style="float: right;">16%</span>
                    </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0 1.2rem;">ROE</td>
                  <td>
                      <span style="display: inline-block;width: 30%;height: 10px;background: #70ad47;"></span>
                      <span style="float: right;">19%</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 20%;height: 10px;background: #70ad47;"></span>
                      <span style="float: right;">15%</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 15%;height: 10px;background: #385723;"></span>
                      <span style="float: right;">12%</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0 1.2rem;">IRR</td>
                  <td>
                      <span style="display: inline-block;width: 10%;height: 10px;background: #70ad47;"></span>
                      <span style="float: right;">5%</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 10%;height: 10px;background: #70ad47;"></span>
                      <span style="float: right;">5%</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 10%;height: 10px;background: #70ad47;"></span>
                      <span style="float: right;">5%</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0 1.2rem;">单位面积收入</td>
                  <td>
                      <span style="display: inline-block;width: 60%;height: 10px;background: #c55a11;"></span>
                      <span style="float: right;">1万</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 60%;height: 10px;background: #de5a00;"></span>
                      <span style="float: right;">1.2万</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 55%;height: 10px;background: #c55a11;"></span>
                      <span style="float: right;">1.1万</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0 1.2rem;">单位面积成本</td>
                  <td>
                      <span style="display: inline-block;width: 40%;height: 10px;background: #ffc000;"></span>
                      <span style="float: right;">0.6万</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 45%;height: 10px;background: #c55a11;"></span>
                      <span style="float: right;">0.7万</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 40%;height: 10px;background: #ffc000;"></span>
                      <span style="float: right;">0.65万</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0 1.2rem;">项目总额</td>
                  <td>
                      <span style="display: inline-block;width: 70%;height: 10px;background: #ffe699;"></span>
                      <span style="float: right;">50亿</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 65%;height: 10px;background: #c55a11;"></span>
                      <span style="float: right;">55亿</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 40%;height: 10px;background: #ffc000;"></span>
                      <span style="float: right;">53亿</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 0 1.2rem;">项目期限</td>
                  <td>
                      <span style="display: inline-block;width: 60%;height: 10px;background: #c55a11;"></span>
                      <span style="float: right;">2年</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 65%;height: 10px;background: #ffe699;"></span>
                      <span style="float: right;">1年</span>
                  </td>
                  <td>
                      <span style="display: inline-block;width: 50%;height: 10px;background: #ffc000;"></span>
                      <span style="float: right;">1.5年</span>
                  </td>
                </tr>
              </table>`;
  $('#chart-' + componentId).html(html);
};

const renderTable2 = (data, params) => {
  var componentId = params.componentId;
  var html = `<table class="table table-hover datatable-highlight dataTable no-footer table-striped" >
                <tr>
                    <th style="text-align: center;"></th>
                    <th style="text-align: center;">投前</th>
                    <th style="text-align: center;">实际</th>
                    <th style="text-align: center;">合理区间</th>
                    <th style="text-align: center;">投前超标率</th>
                    <th style="text-align: center;">实际超标率</th>
                </tr>
                <tr>
                    <td style="text-align: center;">前期（工程）费</td>
                    <td style="text-align: center;">152.19</td>
                    <td style="text-align: center;">162.71</td>
                    <td style="text-align: center;">150-155</td>
                    <td class="item">
                        <span style="display: inline-block;width: 15px;height: 15px;border-radius: 50%;"></span>
                        <span style="float: right;">0%</span>
                    </td>
                    <td class="item">
                        <span style="display: inline-block;width: 15px;height: 15px;border-radius: 50%;"></span>
                        <span style="float: right;">5%</span>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;">基础设施配套费</td>
                    <td style="text-align: center;">494.33</td>
                    <td style="text-align: center;">528.52</td>
                    <td style="text-align: center;">480-500</td>
                    <td class="item">
                        <span style="display: inline-block;width: 15px;height: 15px;border-radius: 50%;"></span>
                        <span style="float: right;">0%</span>
                    </td>
                    <td class="item">
                        <span style="display: inline-block;width: 15px;height: 15px;border-radius: 50%;"></span>
                        <span style="float: right;">10%</span>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;">建筑安装工程费</td>
                    <td style="text-align: center;">4148.61</td>
                    <td style="text-align: center;">4435.51</td>
                    <td style="text-align: center;">4400-4500</td>
                    <td class="item">
                        <span style="display: inline-block;width: 15px;height: 15px;border-radius: 50%;"></span>
                        <span style="float: right;">-6%</span>
                    </td>
                    <td class="item">
                        <span style="display: inline-block;width: 15px;height: 15px;border-radius: 50%;"></span>
                        <span style="float: right;">0%</span>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;">公共配套设施建设费</td>
                    <td style="text-align: center;">146.89</td>
                    <td style="text-align: center;">157.05</td>
                    <td style="text-align: center;">140-150</td>
                    <td class="item">
                        <span style="display: inline-block;width: 15px;height: 15px;border-radius: 50%;"></span>
                        <span style="float: right;">0%</span>
                    </td>
                    <td class="item">
                        <span style="display: inline-block;width: 15px;height: 15px;border-radius: 50%;"></span>
                        <span style="float: right;">5%</span>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;">开发间接费</td>
                    <td style="text-align: center;">130.73</td>
                    <td style="text-align: center;">139.77</td>
                    <td style="text-align: center;">130-140</td>
                    <td class="item">
                        <span style="display: inline-block;width: 15px;height: 15px;border-radius: 50%;"></span>
                        <span style="float: right;">0%</span>
                    </td>
                    <td class="item">
                        <span style="display: inline-block;width: 15px;height: 15px;border-radius: 50%;"></span>
                        <span style="float: right;">0%</span>
                    </td>
                </tr>
              </table>`;
  $('#chart-' + componentId).html(html);
  $('#chart-' + componentId).css('overflow', 'auto');
  // $('.table .item').each(function (k, td) {
  //   var spanText = $(td).find('span').eq(1).text();
  //   if (Number(spanText.split('%')[0]) >= 100) {
  //     //大于等于100
  //     $(td).find('span').eq(0).css('background-color', '#76a797');
  //   } else if (Number(spanText.split('%')[0]) >= 60 && Number(spanText.split('%')[0]) < 100) {
  //     //大于等于60 小于100
  //     $(td).find('span').eq(0).css('background-color', '#eac282');
  //   } else if (Number(spanText.split('%')[0]) < 60) {
  //     //小于60
  //     $(td).find('span').eq(0).css('background-color', '#d86344');
  //   }
  // });
  $('.table .item').each(function (k, td) {
    var spanText = $(td).find('span').eq(1).text();
    if (Number(spanText.split('%')[0]) !== 0) {
      $(td).find('span').eq(0).css('background-color', '#d86344');
    } else {
      $(td).find('span').eq(0).css('background-color', '#76a797');
    }
  });
};

//extrajs全局方法
var Cus_theme = 'westeros';
var Cus_echarts = {};
var cfs = {
  //请求后端数据
  request: {
    /*通用同步请求
			code为200返回结果在.res内，否则结果在.err内（部分业务错误也会强制返回500或999）
			type: POST/GET/PUT/DELETE
			json: TRUE为application/json FALSE为application/x-www-form-urlencoded
			returnAll：TRUE返回所有结果, FALSE返回.resultObj（有时候结果在resultList里）
		*/
    common: {
      sendRequest: function (url, type, paramObj, json = false, returnAll = false) {
        var data = json ? JSON.stringify(paramObj) : paramObj;
        var contentType = 'application/' + (json ? 'json' : 'x-www-form-urlencoded');
        var resObj = {};
        var err = '';
        $.ajax({
          url: url,
          type: type,
          contentType: contentType,
          async: false,
          data: data,
          success: function (res) {
            if (returnAll) {
              resObj.res = res;
            } else {
              if (res.resultCode === 0) {
                resObj.res = res.resultObj;
              }
            }
          },
          error: function (XMLHttpRequest) {
            resObj.err = {};
            resObj.err.Message = XMLHttpRequest.responseJSON.Message.substr(0, 200) || XMLHttpRequest.statusText.substr(0, 200);
          },
        });
        return resObj;
      },
    },
    cube: {
      //script: Year{2020}->Period{6}->Version{Working}...
      queryCubeData: function (cubeName, script) {
        var url = Api.SeeplnCube + 'cube/queryCubeData';
        paramObj = $.extend(
          {
            cube_name: cubeName,
            script: script,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, true);
      },
      //通用保存方法
      save: function (sheetDatas) {
        var url = Api.SeeplnCube + 'spreadsheet/save';
        paramObj = $.extend(
          {
            sheetDatas: sheetDatas,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, true);
      },
    },
    foundation: {
      //根据user权限获取维度，最多2层
      getAccessDimensionMemberLevel: function (dimName, exp = '', name = '#root', id = '1', searchValue = '') {
        let url = Api.seepln + 'dimension/getAccessDimensionMemberLevel';
        paramObj = $.extend(
          {
            dimensionName: dimName,
            name: name,
            dimensionExpression: exp,
            id: id,
            searchValue: searchValue,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, false);
      },
      //根据表达式查询，不分权限
      selectDimensionMemberByNameFunction: function (dimensionMemberNames) {
        let url = Api.seepln + 'dimension/selectDimensionMemberByNameFunction';
        paramObj = $.extend(
          {
            dimensionMemberNames: dimensionMemberNames,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, false);
      },
      //执行自定义sql语句
      runComm: function (comm) {
        var url = Api.seepln + 'sqlparser/run/post';
        paramObj = $.extend(
          {
            sql: comm,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, false, true);
      },
    },
    python: {
      //同步调用python
      web: function (pyName, params) {
        var url = Api.python + 'start/web';
        paramObj = $.extend(
          {
            pyName: pyName,
            params: params,
          },
          cfs.common.userParams
        );
        return cfs.request.common.sendRequest(url, 'POST', paramObj, true, true);
      },
    },
  },
  card: {
    //dashboard单个卡片方法 bootstrap4图标：http://easyview.seepln.com/Limitless_2.0.1/Bootstrap%204/Template/layout_1/LTR/material/full/icons_icomoon.html
    head: {
      //获取卡片表头jquery dom
      getDom: function (cardName) {
        return $('#' + cardName);
      },
      //删除卡片表右边所有元素
      removeButton: function (dom) {
        dom.find('.header-elements').html('');
      },
      addSelectButton: function (carHead, buttonInfo) {
        var btn = $(`<div class="list-icons ${buttonInfo.id}">
						<label for="" style="width: 60px;margin: 0;margin-bottom:-4px">${buttonInfo.text}</label>
						<select
							class="form-control select selectXm"
							id="${buttonInfo.id}"
							data-fouc
						>
						</select>
					</div>`);
        let sHtml = '';
        buttonInfo.list.forEach(function (v) {
          sHtml += "<option value='" + v.key + "'>" + v.value + '</option>';
        });
        carHead.find('.header-elements').prepend(btn);
        $('#' + buttonInfo.id).html(sHtml);
        $('.select').select2({ minimumResultsForSearch: -1 });
        return btn;
      },
      /*添加下拉按钮
				buttonInfo: {
					id: "UploadButton",
					text: "上传数据",
					icon: "mi-file-upload",
					list: ["增量上传", "全量上传"]
				},
			*/
      addDropdownButton: function (carHead, buttonInfo) {
        var list = buttonInfo.list;
        for (var i = 0; i < list.length; i++) {
          list[i] = '<a index = "' + i + '" class="dropdown-item" href="#">' + list[i] + '</a>';
        }
        var btn = $(
          '<div id="' +
            buttonInfo.id +
            '" class="dropdown breadcrumb-elements-item mr-2 cursor-pointer">' +
            '<a class="dropdown-toggle" data-toggle="dropdown"><i class="' +
            buttonInfo.icon +
            ' icon text-default mr-1"></i>' +
            '<span class="iconSpan loadDes">' +
            buttonInfo.text +
            '</span></a>' +
            '<div class="dropdown-menu" style="min-width:100px">' +
            list.join('') +
            '</div></div>'
        );
        carHead.find('.header-elements').append(btn);
        if (buttonInfo.id.indexOf('_disable') == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + '_disable';
          var btn_disable = this.addDropdownButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.find('.dropdown-menu').remove();
          btn_disable.hover(function () {
            this.style.cursor = 'not-allowed';
          });
        }
        return btn;
      },
      /*添加普通按钮
				buttonInfo: {
					id: "UploadButton",
					text: "上传数据",
					icon: "mi-file-upload",
				},
			*/
      addButton: function (carHead, buttonInfo) {
        var btn = $(
          '<a class="breadcrumb-elements-item mr-2 cursor-pointer" id="' +
            buttonInfo.id +
            '"><div class="customLoader mr-1" style="margin-bottom: 2px; display: none;"></div><i class="' +
            buttonInfo.icon +
            ' icon text-default mr-1"></i><span class="iconSpan loadDes">' +
            buttonInfo.text +
            '</span></a>'
        );
        carHead.find('.header-elements').append(btn);
        if (buttonInfo.id.indexOf('_disable') == -1) {
          var buttonInfo2 = Object.create(buttonInfo);
          buttonInfo2.id = buttonInfo.id + '_disable';
          var btn_disable = this.addButton(carHead, buttonInfo2);
          btn_disable.hide();
          btn_disable.hover(function () {
            this.style.cursor = 'not-allowed';
          });
        }
        return btn;
      },
      //点击后调用防止反复执行
      disableButton: function (btn) {
        btn.hide();
        $('#' + btn.attr('id') + '_disable').show();
      },
      //恢复按钮可用
      enableButton: function (btn) {
        $('#' + btn.attr('id') + '_disable').hide();
        btn.show();
      },
    },
    body: {
      //获取卡片内容jquery dom
      getDom: function (cardName) {
        return $('#' + cardName).find('.card-body');
      },
      //添加文件上传卡片
      addFileTag: function (cardName, text) {
        var dom = $(
          '<div status="-1" filename="' +
            text +
            '" style="margin: 1.25rem; padding: 10px;display: inherit; background-color:#f7f7f7;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;">' +
            '<span style="margin-right: 15px;">' +
            text +
            '</span>' +
            '<i class="icon-bin delete" onclick="cfs.card.body.deleteFileTag(this)" style="margin-right: 10px;cursor: pointer;"></i>' +
            '<div class="customLoader" style="margin-bottom: 2px;display: none;"></div><span class="infotext" style="margin-left: 5px; margin-right: 5px; display: none;"></span>' +
            '<i data-trigger="hover" data-toggle="popover" data-placement="right" data-content="" class="infobtn icon-info22" style="margin-right: 10px;cursor: pointer; display: none;"></i>'
        );
        this.getDom(cardName).append(dom);
        return dom;
      },
      //删除文件上传卡片
      deleteFileTag: function (dom) {
        dom.parentElement.remove();
      },
    },
  },
  data: {
    //数据处理
    spreadjs: {
      //从excel二维表生成cube.save方法的sheetData（静态表格式）
      createSheetData: function (dimList, dimMap, dataTables, startIndex = 1, maxLength = 10000) {
        var sheetDataObj = { rowDatas: [] };
        if (dataTables == undefined || Object.keys(dataTables).length == 0) return sheetDataObj;
        //准备表头所在列和维度名的map
        var colMap = {};
        for (var i = 0; i < dataTables[0].length; i++) {
          var dimName = dimMap[dataTables[0][i].value] || dataTables[0][i].value;
          if (dimMap.indexOf(dimName) != -1) {
            colMap[i] = dimName;
          }
        }
        var rowDatasArr = [];
        for (var i = startIndex; i < startIndex + maxLength; i++) {
          if (dataTables[i]) {
            var arr = dataTables[i];
            var columnDimensionMemberMap = {};
            for (var c in colMap) {
              var val = arr[c].value;
              columnDimensionMemberMap[colMap[c]] = val;
            }
            rowDatasArr.push({ columnDimensionMemberMap: columnDimensionMemberMap });
          }
        }
        sheetDataObj.rowDatas = rowDatasArr;
        return sheetDataObj;
      },
    },
  },
  //echarts
  echarts: {
    init: function (dom, theme, option) {
      var ec = echarts.init(dom.get(0), theme);
      window.addEventListener('resize', function () {
        ec.resize();
      });
      this.refresh(ec, option);
      return ec;
    },
    refresh: function (ec, option) {
      ec.clear();
      ec.setOption(option);
    },
    correctHeight: function (cardName) {
      let echartDom = $('#' + cardName)
        .find('.card-body')
        .find('.echart');
      let cardBodyDom = $('#' + cardName).find('.card-body');

      let _height = $(cardBodyDom).height();
      $(echartDom).height(_height);
    },
    mobileHeight: function (cardName, height) {
      let cardDom = $('#' + cardName).parent();
      $(cardDom).height(height);
      let echartDom = $('#' + cardName)
        .find('.card-body')
        .find('.echart');
      let _height = $(echartDom).parent().height();
      $(echartDom).height(_height);
    },
  },
  //通用方法
  common: {
    //ajax要用的user属性
    userParams: {
      app: Userinfo.app,
      app_id: Userinfo.app,
      token: Userinfo.token,
      user_id: Userinfo.user_id,
      creater: Userinfo.user_id,
      tenant_code: Userinfo.tenant_code,
      tenantCode: Userinfo.tenant_code,
      language: Userinfo.language,
      description: Userinfo.language,
    },
    //是否对话框，按是后执行thenEvent
    dialogBox: function (text, thenEvent) {
      swal({
        title: text,
        text: '',
        type: 'info',
        showCancelButton: true,
        confirmButtonText: getLanguage('sure'),
        cancelButtonText: getLanguage('cancel'),
      }).then(function (result) {
        if (result.value) {
          thenEvent();
        }
      });
    },
    //excel的5位纯数字日期格式转yyyy-mm-dd
    valueToDate: function (value) {
      var n = Number(value.split('.')[0]);
      var date = new Date('1900-1-1');
      date.setDate(date.getDate() + n - 2);
      return date.format();
    },
  },
  //导出文件
  export: {
    /* 导出文件到指定格式 数据大用csv
			fileName：文件名不带格式
			dataJson：原始数据 eg. [{Entity: "E001", Year:"2020", Period:"9"},{Entity: "E001", Year:"2020", Period:"10"}]
			titleArr：导出的列名: eg. [Entity, Year]
		*/
    toCsv: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      var titleObj = dataJson[0];
      titleArr = titleArr || Object.keys(titleObj);
      var titleStr = titleArr.join('\t,');
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          var cell = dataJson[i][titleArr[j]] || '';
          if (cell.toString().indexOf(',') > -1) cell = '"' + cell + '"';
          rowArr.push(cell);
        }
        dataArr.push(rowArr.join('\t,'));
      }
      var dataStr = titleStr + '\n' + dataArr.join('\n');
      var blob = new Blob([dataStr], { type: 'text/plain;charset=utf-8' });
      //解决中文乱码问题
      blob = new Blob([String.fromCharCode(0xfeff), blob], { type: blob.type });
      this.download(blob, fileName + '.csv');
    },
    toXls: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      var titleObj = dataJson[0];
      titleArr = titleArr || Object.keys(titleObj);
      var titleStr = '<tr><td>' + titleArr.join('</td><td>') + '</td></tr>';
      var dataArr = [];
      for (var i = 0; i < dataJson.length; i++) {
        var rowArr = [];
        for (var j = 0; j < titleArr.length; j++) {
          rowArr.push('<td>' + (dataJson[i][titleArr[j]] || '') + '</td>');
        }
        dataArr.push('<tr>' + rowArr.join('') + '</tr>');
      }
      var dataStr = '<table>' + titleStr + dataArr.join('') + '</table>';
      var uri = 'data:application/vnd.ms-excel;base64,';
      var excelHtml = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
                xmlns:x="urn:schemas-microsoft-com:office:excel" 
                xmlns="http://www.w3.org/TR/REC-html40">
                <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
                <x:Name>${fileName}</x:Name>
                <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
                </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
                </head><body>${dataStr}</body></html>`;
      //下载模板
      function base64(s) {
        return window.btoa(unescape(encodeURIComponent(s)));
      }
      var blob = new Blob([excelHtml], {
        type: 'application/vnd.ms-excel',
      });
      this.download(blob, fileName + '.xls');
    },
    toXlsx: function (fileName, dataJson, titleArr = null) {
      if (!dataJson) return;
      if (dataJson.length == 0 && titleArr == null) return;
      //组标题
      //
      var sheet = XLSX.utils.json_to_sheet(dataJson);
      var blob = this.sheet2blob(sheet, fileName.substr(0, 30));
      this.download(blob, fileName + '.xlsx');
    },
    sheet2blob: function (sheet, sheetName) {
      sheetName = sheetName || 'sheet1';
      var workbook = {
        SheetNames: [sheetName],
        Sheets: {},
      };
      workbook.Sheets[sheetName] = sheet;
      // 生成excel的配置项
      var wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary',
      };
      var wbout = XLSX.write(workbook, wopts);
      var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
      // 字符串转ArrayBuffer
      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
      }
      return blob;
    },
    download: function (blob, fileFullName) {
      var btn = document.createElement('a');
      btn.href = URL.createObjectURL(blob);
      btn.download = fileFullName;
      btn.style = 'display: none;';
      document.body.appendChild(btn);
      btn.click();
      document.body.removeChild(btn);
    },
  },
};
