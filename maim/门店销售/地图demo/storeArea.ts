(() => {
  class CustomerArea {
    chart;
    operationArray = [
      {
        region: "TotalChina",
        mapName: "china",
        provinceDes: "",
      },
    ];
    pieShapeChart;
    ColumnarChart;
    backFlag = true;

    init() {
      const that = this;
      const mapDivHeight = $(".newDemoMap").height() - $(".queryCondition").innerHeight() - 20;
      // 左侧table最大高度
      const scrollDivHeight = mapDivHeight - $(".customAreaHeaderBox").height() - 1;

      // 设置中间滚动table得最大高度
      $(".scrollTable").css({
        "max-height": `${scrollDivHeight}px`,
        "min-height": `${scrollDivHeight}px`,
      });

      // 设置右侧地图echarts高度
      $("#salesOverview").css({
        height: `${mapDivHeight}px`,
      });

      this.demoInit();

      this.queryPartAjax();

      // 后退按钮绑定事件
      $(".legitRipple").on("click", () => {
        that.mapBack();
      });
    }

    // 按钮后退事件
    async mapBack() {
      const that = this;
      // 如果已经是中国地图则不做任何处理
      const operationArrayLen = this.operationArray.length;
      if (operationArrayLen == 1 || !this.backFlag) {
        return;
      }

      this.backFlag = false;

      loadingShow(".tableHeight");
      this.operationArray.splice(operationArrayLen - 1, 1);

      const newOperationArrayLen = this.operationArray.length;
      const getDataRes = await this.getData({ Year: "2020", Period: "5", Region: this.operationArray[newOperationArrayLen - 1].region, MonthlyStructure: "1", user_id: "123456" });

      const resultData = JSON.parse(getDataRes.result);

      // 渲染左侧表格数据
      this.combineTableContent(resultData);
      if (newOperationArrayLen == 2) {
        this.chart.dispose();
        this.pieShapeChart.dispose();
        this.ColumnarChart.dispose();
        $("#charts1").height("0px");
        $("#charts2").height("0px");
        $("#salesOverview").css("height", $("#salesOverview").height() + 300 + "px");
        const { provinceDes } = this.operationArray[1];
        this.initProvinceMap(provinceDes, resultData, true, true);
      } else if (newOperationArrayLen == 1) {
        this.initProvinceMap("china", resultData, true, false);
      }
      loadingHide(".tableHeight");

      this.backFlag = true;
    }
    /**
     * 查询筛选条件请求接口
     */
    queryPartAjax() {
      return CommonRequest({
        url: `${Api.seepln}dimension/selectDimensionMemberByNameFunction`,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          ...Userinfo,
        },
        data: {
          dimensionMemberNames: "Year{Base(TotalYear,0)}",
          duplicate: "1",
          ...Userinfo,
        },
      });
    }

    // 获取页面数据
    getData(params?: any) {
      return CommonRequest({
        url: `${Api.python}start/web`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          pyName: "map_interface",
          params: params || { Year: "2020", Period: "5", Region: "TotalChina", MonthlyStructure: "1", user_id: "123456" },
          ...userinfoParams2,
        }),
      });
    }

    async demoInit() {
      const demoData = await this.getData();
      // console.log( demoData.result )
      const provinceData = JSON.parse(demoData.result);
      // 初始话表格数据
      this.combineTableContent(provinceData);

      this.initProvinceMap("china", provinceData, false, true);
    }

    combineTableContent(tableData) {
      const that = this;
      const { FormColumns, Form, Level, Map } = tableData;
      $(".customAreaWrap").css("width", FormColumns.length * 100 + "px");
      // table 行头标题html字符串
      let headerTitle = "";
      // table 存储行头对应取数据得字段key
      const headerCodeField = [];
      // table中心数据内容html字符串
      let contentStr = "";
      // 合计table内容html字符串
      let footStr = "";
      if (FormColumns) {
        FormColumns.forEach((v, i) => {
          // 拼接标题头内容
          headerTitle += `
                <td>${v.Description || ""}</td>
              `;

          headerCodeField.push(v.Column);
        });
      }

      // 如果存在中心数据
      if (Form) {
        Form.forEach((valueItem, valueIndex) => {
          const { ProvinceAlias, ProvinceCode, CityCode, Province, City } = valueItem;
          const region = Level === "Nation" ? ProvinceCode : CityCode;
          if (valueIndex != 0) {
            contentStr += `
            <tr mapparam='${ProvinceAlias || ""}' region='${region}' level='${Level}' provinceDes='${Province || ""}' city="${City || ""}" >
              ${headerCodeField.map((v, i) => {
                let tdContent = `<td>${valueItem[v]}</td>`;
                if (v === "Rate") {
                  tdContent = `
                      <td class="text_right">${valueItem[v]}</td>
                    `;
                } else if (v === "Actual" || v === "Target") {
                  tdContent = `
                      <td class="text_right">${toThousands(valueItem[v])}</td>
                    `;
                } else if (v === "MarketDefinition") {
                  tdContent = `
                      <td style="background:${valueItem["color"]}">${valueItem[v]}</td>
                    `;
                }
                return tdContent;
              })}
            </tr>
          `;
          }
        });
      }
      // 计算合计得内容
      const totalTr = headerCodeField.map((v, i) => {
        // 如果内容为合计得不是最后一项
        let footTdCont = `
          <td></td>
        `;
        if (i == 0) {
          footTdCont = `
            <td>合计</td>
          `;
        } else if (v == "Rate") {
          footTdCont = `
          <td class="text_right">${Form[0] ? Form[0][v] : ""}</td>
        `;
        } else if (v == "Actual" || v === "Target") {
          footTdCont = `
            <td class="text_right">${Form[0] ? toThousands(Form[0][v]) : ""}</td>
          `;
        } else {
          footTdCont = `
            <td>${Form[0] ? Form[0][v] : ""}</td>
          `;
        }
        return footTdCont;
      });

      contentStr += `
          <tr>
            ${totalTr.join("")}
          </tr>
        `;

      // table 内容html字符串
      $(".customAreaHeader tbody tr").html(headerTitle);
      $(".customAreaContent tbody").html(contentStr);

      // table里的每行tr点击进入对应省份下面的市地图
      $(".customAreaContent")
        .find("tr")
        .each((i, v) => {
          const trObj = $(v);
          trObj.on("click", () => {
            // 如果到了区,县级别,则不再调用接口
            if (Level == "City") {
              return;
            }
            that.chartClick({
              province: trObj.attr("mapparam"),
              level: Level,
              region: trObj.attr("region"),
              provinceDes: trObj.attr("provinceDes"),
              city: trObj.attr("city"),
            });
          });
        });
    }
    // 初始化省份地图
    initProvinceMap(mapName, provinceData, setOptionFlag, chartInitFlag) {
      const that = this;
      // 获取地图数据key为Mao得值
      const { Map, Level } = provinceData;
      // YTD消耗数据数组
      const consumeData = [];
      //  YTD指标数组
      const indexData = [];
      //  达成率数组
      const achievementRateData = [];

      // 组合地图显示数据
      Map.forEach((v) => {
        const { Actual, Province, Rate, City } = v;
        consumeData.push({
          value: Rate,
          name: Province || City,
          level: Level,
          ...v,
          Rate,
        });
      });
      this.initEchartSMap(mapName, consumeData, achievementRateData, setOptionFlag, chartInitFlag);
    }

    initEchartSMap(mapName, consumeData, achievementRateData, setOptionFlag, chartInitFlag) {
      console.log(consumeData, "consumeData");
      const that = this;
      const itemStyle = {
        normal: {
          borderColor: "rgba(0, 0, 0, 0.2)",
        },
        emphasis: {
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 20,
          borderWidth: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      };
      const option = {
        tooltip: {
          formatter: function (params) {
            const { name, seriesName, data } = params;
            const actual = (data && data.Actual) || "";
            const rate = (data && data.Rate) || "";
            const target = (data && data.Target) || "";
            return `
              <p>${name}</p>
              <p>日均交易量:${toThousands(actual)}</p>
              <p>客单价:${target}</p>
              <p>销售额:${rate}</p>
            `;
          },
        },
        grid: {
          left: "30%",
          containLabel: true,
        },
        // 设置左下角手柄得样式及其颜色
        visualMap: {
          min: 0,
          max: 3000000,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
          inRange: {
            color: ["#edf3f6", "#04a1f6"],
          },
        },
        series: [
          {
            name: "销售额",
            type: "map",
            map: mapName,
            itemStyle: itemStyle,
            showLegendSymbol: false,
            roam: true,
            label: {
              normal: {
                show: false,
                rotate: 40,
                formatter: "{b}：{value|{c}}",
                backgroundColor: "#fff",
                padding: [3, 5],
                borderRadius: 3,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.5)",
                color: "#777",
                rich: {
                  value: {
                    color: "#019D2D",
                    fontSize: 14,
                  },
                },
              },
              emphasis: {
                show: false,
              },
            },
            data: consumeData,
          },
        ],
      };
      if (chartInitFlag) {
        this.chart = echarts.init(document.getElementById("salesOverview"));
      }
      this.chart.setOption(option, setOptionFlag);
      this.chart.off("click");
      this.chart.on("click", (param) => {
        const {
          data: { level, Province, ProvinceCode, ProvinceAlias, City, CityCode },
        } = param;
        that.chartClick({
          province: ProvinceAlias || "",
          level,
          region: ProvinceCode || CityCode,
          provinceDes: Province || "",
          city: City,
        });
      });
    }

    loadScriptMap(provinceName) {
      return CommonRequest({
        url: `../js/StbDemo/map/js/province/${provinceName}.js`,
        method: "get",
      });
    }

    // echarts上的点击事件或者table上行的点击事件
    async chartClick(param) {
      const that = this;
      const { province, level, region, provinceDes, city } = param;
      loadingShow(".tableHeight");
      that.operationArray.push({
        region,
        mapName: province || "",
        provinceDes: provinceDes || "",
      });
      // 如果是省份
      if (level == "Nation") {
        // 获取省下面的市数据
        const cityDataRes = await this.getData({ Year: "2020", Period: "5", Region: region, MonthlyStructure: "1", user_id: "123456" });
        const cityData = JSON.parse(cityDataRes.result);

        // 重新渲染左侧table数据
        this.combineTableContent(cityData);
        // 调用初始化echarts方法

        const head = document.getElementsByTagName("head")[0] || document.documentElement;
        var scriptObj = document.createElement("script");
        scriptObj.setAttribute("type", "text/javascript");
        scriptObj.setAttribute("src", `../js/StbDemo/map/js/province/${province}.js`);
        scriptObj.setAttribute("name", name);

        scriptObj.onload = function () {
          that.initProvinceMap(provinceDes, cityData, true, false);
        };
        head.appendChild(scriptObj);
      } else if (level == "Province") {
        // 如果是市下面区县级别的table数据
        const countyDataRes = await this.getData({ Year: "2020", Period: "5", Region: region, MonthlyStructure: "1", user_id: "123456" });
        const countyData = JSON.parse(countyDataRes.result);
        // 重新渲染左侧table数据
        this.combineTableContent(countyData);

        this.resolutionArea(city, countyData);

        $("#charts1").css("height", "300px");
        $("#charts2").css("height", "300px");
        $("#salesOverview").css("height", $("#salesOverview").height() - 300 + "px");
        this.chartsOneInit(countyData);
        this.chartsTwoInit(countyData);
      }
      loadingHide(".tableHeight");
    }

    chartsOneInit(countyData) {
      const { Chart1 } = countyData;
      const Chart1Data = [];
      const legendData = [];
      const colorData = [];
      if (this.pieShapeChart) {
        this.pieShapeChart.dispose();
      }
      Chart1.forEach((v) => {
        const { Actual, MarketDefinition, color, Rate } = v;
        Chart1Data.push({
          ...v,
          value: Actual,
          name: MarketDefinition,
        });
        colorData.push(color);
        legendData.push(MarketDefinition);
      });
      console.log(Chart1Data, "Chart1Data");
      const option = {
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)",
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          bottom: 10,
          left: "center",
          data: legendData,
        },
        color: colorData,
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: Chart1Data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.pieShapeChart = echarts.init(document.getElementById("charts1"));
      this.pieShapeChart.setOption(option, true);
    }

    chartsTwoInit(countyData) {
      const { Chart2 } = countyData;
      const xAxisData = [];
      const seriesData = [];
      Chart2.forEach((v) => {
        xAxisData.push(v.County);
        seriesData.push({
          value: v.Actual,
          color: v.color,
        });
      });
      console.log(seriesData, "seriesData");
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "category",
          data: xAxisData,
          axisLabel: {
            interval: 0,
            rotate: 60,
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: seriesData,
            type: "bar",
            itemStyle: {
              normal: {
                color: function (params) {
                  const {
                    data: { color },
                  } = params;
                  return color;
                },
              },
            },
          },
        ],
      };
      if (this.ColumnarChart) {
        this.ColumnarChart.dispose();
      }
      this.ColumnarChart = echarts.init(document.getElementById("charts2"));
      this.ColumnarChart.setOption(option, true);
    }
    /**
     * 解释区县坐标加载百度地图
     */
    resolutionArea(cityName, countyData) {
      const that = this;
      const myGeo = new BMap.Geocoder(); //把当前点击的区或者市作地址解析
      myGeo.getPoint(
        cityName,
        function (point) {
          if (point) {
            that.chart.setOption(
              {
                // 加载 bmap 组件
                bmap: {
                  // 百度地图中心经纬度
                  center: [point.lng, point.lat],
                  // 百度地图缩放
                  zoom: 9,
                  // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
                  roam: true,
                  // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
                  mapStyle: {},
                },
                series: [
                  {
                    type: "scatter",
                    // 使用百度地图坐标系
                    name: "city",
                    coordinateSystem: "bmap",
                    // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
                    // data: newPointArray,
                    symbolSize: function (val) {
                      // if (val[2] > 100000) {
                      // 	return val[2] / 10000
                      // } else {
                      // 	return val[2] / 2000
                      // }
                      // return 15;
                    },
                    label: {
                      // normal: {
                      //   formatter: function(data) {
                      //     return data.name + ':' + format(parseInt(data.value[2]/10000))
                      //   },
                      //   position: 'right',
                      //   show: false
                      // },
                      emphasis: {
                        show: true,
                      },
                    },
                    itemStyle: {
                      normal: {
                        color: "red",
                      },
                    },
                  },
                ],
              },
              true
            );
            // 获取百度地图map对象
            const mapObj = that.chart.getModel().getComponent("bmap").getBMap();

            that.madeBoundary(mapObj, cityName, countyData);
          } else {
            alert("您选择地址没有解析到结果!");
          }
        },
        cityName
      );
    }

    // 区域图
    madeBoundary(map, cityName, countyData) {
      const bdary = new BMap.Boundary();
      const { Map } = countyData;
      // 设置百度地图自定义的json样式
      map.setMapStyle({
        styleJson: [
          {
            featureType: "water",
            elementType: "all",
            stylers: {
              color: "#d1d1d1",
            },
          },
          {
            featureType: "land",
            elementType: "all",
            stylers: {
              color: "#f3f3f3",
            },
          },
          {
            featureType: "railway",
            elementType: "all",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "highway",
            elementType: "all",
            stylers: {
              color: "#fdfdfd",
            },
          },
          {
            featureType: "highway",
            elementType: "labels",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "arterial",
            elementType: "geometry",
            stylers: {
              color: "#fefefe",
            },
          },
          {
            featureType: "arterial",
            elementType: "geometry.fill",
            stylers: {
              color: "#fefefe",
            },
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "green",
            elementType: "all",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "subway",
            elementType: "all",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "manmade",
            elementType: "all",
            stylers: {
              color: "#d1d1d1",
            },
          },
          {
            featureType: "local",
            elementType: "all",
            stylers: {
              color: "#d1d1d1",
            },
          },
          {
            featureType: "arterial",
            elementType: "labels",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "boundary",
            elementType: "all",
            stylers: {
              color: "#fefefe",
            },
          },
          {
            featureType: "building",
            elementType: "all",
            stylers: {
              color: "#d1d1d1",
            },
          },
          {
            featureType: "label",
            elementType: "labels.text.fill",
            stylers: {
              color: "#999999",
            },
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: {
              visibility: "off",
            },
          },
          {
            featureType: "administrative",
            elementType: "labels",
            stylers: {
              visibility: "off",
            },
          },
        ],
      });

      // 获取当前市的区域描点坐标
      bdary.get(cityName, function (rs) {
        map.clearOverlays(); //清除地图覆盖物
        const count = rs.boundaries.length; //行政区域的点有多少个
        const pointArray = [];
        const ply = new BMap.Polygon(rs.boundaries[0], { strokeWeight: 2, strokeColor: "#8B6914", fillOpacity: 1, fillColor: "" }); //建立多边形覆盖物 1.strokeWeight 线宽
        ply.name = "111";
        map.addOverlay(ply); //添加覆盖物
      });

      Map.forEach((areaV) => {
        const { County, color } = areaV;
        bdary.get(County, function (rs) {
          const ply = new BMap.Polygon(rs.boundaries[0], { strokeWeight: 2, strokeColor: "#8B6914", fillOpacity: 1, fillColor: color || "" }); //建立多边形覆盖物 1.strokeWeight 线宽
          ply.name = County;
          map.addOverlay(ply); //添加覆盖物																											  2.strokeColor 线条颜色

          //添加名称标签层
          var centerlabel = new BMap.Label(County, { offset: new BMap.Size(0, 0) });
          centerlabel.setStyle({
            color: "#272727",
            fontFamily: "微软雅黑",
            backgroundColor: "0.01",
            border: "0",
          });

          centerlabel.setPosition(ply.getBounds().getCenter());
          map.addOverlay(centerlabel);
        });
      });
    }
  }

  new CustomerArea().init();
})();
