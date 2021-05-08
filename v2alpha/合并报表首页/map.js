const { areaDom, antd, React, ReactDOM, eCharts, dataSource, getDataSource, jquery } = params;
const { Button, Row, Col, Spin } = antd;
let i = 0;
// 定义初始回退数组
let arrMap = [100000];
function Map({ dataScatter }) {
  const getJson = (adcode) => {
    const myChart = eCharts.init(document.getElementById("map"));
    myChart.showLoading();
    i++;
    // 获取当前用户请求python-web所需要的请求头
    let code = JSON.parse(localStorage.getItem("global__userInfo"));
    let { token, u_id, user_id } = code;
    let url = "https://geo.datav.aliyun.com/areas_v2/bound/" + adcode + "_full.json";
    jquery.post(
      {
        url: "http://v2alpha.seepln.com/python-web/doPythonWeb",
        data: JSON.stringify({
          pythonName: "request_2",
          runType: 1,
          parameter: JSON.stringify({ url }),
        }),
        headers: {
          "content-type": "application/json;charset=UTF-8",
          "user-id": user_id,
          "u-id": u_id,
          app: 4,
          version: "v1_5_5",
          "tenant-code": "eavgvl969v0",
          language: 1,
          token: token,
        },
      },
      (res) => {
        const chinaJson = JSON.parse(res);
        console.log("chinaJson", chinaJson);
        // 初始化地图绘制各区域数据
        let data = [];
        // let length = chinaJson.data.features.length;
        // 随机生成散点value值
        // for (let i = 0; i <= Math.ceil(length / 3); i += 2) {
        //   let value = chinaJson.data.features[i].properties.center;
        //   value.push(Math.random() * 100 + 300 + 20 * i);
        //   data1.push({
        //     name: chinaJson.data.features[i].properties.name,
        //     value,
        //     // 让散点图颜色不受visualMap影响
        //     visualMap: false,
        //   });
        // }
        // 设置地图各区域数据
        chinaJson.data.features.map((item) => {
          data.push({
            name: item.properties.name,
            adcode: item.properties.adcode,
            value: Math.random() * 100 + 200,
          });
        });
        // 注册地图数据
        eCharts.registerMap("China" + i, chinaJson.data, {});
        let option = {
          tooltip: {
            trigger: "item",
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
              var value = (params.value + "").split(".");
              value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,");
              return params.seriesName + "<br/>" + params.name + ": " + value + "</br>";
            },
          },
          visualMap: {
            left: "right",
            type: "continuous", // 连续型
            min: 150, // 值域最小值，必须参数
            max: 300, // 值域最大值，必须参数
            calculable: true, // 是否启用值域漫游
            inRange: {
              color: ["#EAEDFC", "#B9C2FB", "#8393F4", "#7381D6", "#5562CB", "#3B49BD"],
              outOfRange: ["#6495ED", "#4169E1", "00BFFF", "1E90FF"],
              // 指定数值从低到高时的颜色变化
            },
            text: ["High", "Low"],
            textStyle: {
              color: "black", // 值域控件的文本颜色
            },
            calculable: true,
          },
          geo: {
            map: "China" + i,
            roam: true,
            itemStyle: {
              // 每个区域的样式
              normal: {
                areaColor: "#1F759C",
                borderColor: "#D3D7E1", // 图形的描边颜色
                borderWidth: 1, //描边线宽
              },
            },
          },
          // 散点图配置
          series: [
            {
              name: "销售数量",
              type: "scatter",
              tooltip: {
                position: "top",
                formatter: function (params) {
                  var value = (Math.ceil(params.value[2]) + "").split(".");
                  value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,");
                  return params.name + ": " + value + "</br>";
                },
              },
              coordinateSystem: "geo",
              symbolSize: function (parmas) {
                //显示打点的值，即点的大小根据一个方法除数取整
                console.log("大小", parmas);
                return Math.ceil(parmas[2] / 200);
              },
              label: {
                show: true,
                position: "right",
                formatter: "{b}",
              },
              itemStyle: {
                color: "#FFD700",
              },
              // 散点数据
              data: dataScatter,
            },
            {
              name: "中华人民共和国",
              type: "map",
              geoIndex: 0,
              roam: true,
              map: "China" + i,
              emphasis: {
                label: {
                  show: true,
                },
              },
              data: data,
            },
          ],
        };
        // 设置地图点击事件监听
        myChart.on("click", function (params) {
          console.log("arrmap", arrMap);
          // 判断回退数组中是否含有当前点击地区的adcode
          if (arrMap.includes(params.data.adcode)) {
            return;
          }
          // 将当前点击的区域adcode添加到数组最前端
          arrMap.unshift(params.data.adcode);
          getJson(params.data.adcode);
        });
        myChart.setOption(option, true);
        myChart.hideLoading();
      }
    );
  };
  React.useEffect(() => {
    const myChart = eCharts.init(document.getElementById("map"));
    if (dataScatter) {
      // 初始显示中国地图
      getJson(100000);
    }
  }, [dataScatter]);
  const backMap = () => {
    if (arrMap.length != 1) {
      // 删除数组最前端的数据，并且进行回退重新渲染地图
      arrMap.shift();
      getJson(arrMap[0]);
    } else {
      return;
    }
  };
  return (
    <>
      <div>
        <Button type="primary" onClick={backMap} style={{ float: "right" }}>
          回退
        </Button>
      </div>
      <div id="map" style={{ height: "90%", width: "100%", clear: "both" }}></div>
    </>
  );
}
return {
  run() {
    ReactDOM.render(<Map></Map>, areaDom);
  },
  getData(data) {
    ReactDOM.render(<Map dataScatter={data?.groupMap}></Map>, areaDom);
  },
};
