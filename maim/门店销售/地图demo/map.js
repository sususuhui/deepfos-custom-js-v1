function mergeProvinces(chinaJson, names, properties) {
  //合并大区里省份的coordinates
  let features = chinaJson.features;
  let polygons = [];
  let polygons2 = [];

  for (let i = 0; i < names.length; i++) {
    let polygonsCoordinates = [];
    let polygonsEncodeOffsets = [];
    for (let z = 0; z < names[i].length; z++) {
      for (let j = 0; j < features.length; j++) {
        if (features[j].properties.name == names[i][z]) {
          if (features[j].geometry.coordinates[0].constructor == String) {
            //合并coordinates
            for (let l = 0; l < features[j].geometry.coordinates.length; l++) {
              polygonsCoordinates.push(features[j].geometry.coordinates[l]);
            }
          } else if (features[j].geometry.coordinates[0].constructor == Array) {
            for (let k = 0; k < features[j].geometry.coordinates.length; k++) {
              for (let d = 0; d < features[j].geometry.coordinates[k].length; d++) {
                polygonsCoordinates.push(features[j].geometry.coordinates[k][d]);
              }
            }
          }

          if (features[j].geometry.encodeOffsets[0].constructor == String) {
            //合并encodeOffsets
            polygonsEncodeOffsets.push(features[j].geometry.encodeOffsets);
          } else if (features[j].geometry.encodeOffsets[0].constructor == Array) {
            for (let k = 0; k < features[j].geometry.encodeOffsets.length; k++) {
              if (features[j].geometry.encodeOffsets[k][0].constructor == Array) {
                for (let e = 0; e < features[j].geometry.encodeOffsets[k].length; e++) {
                  polygonsEncodeOffsets.push(features[j].geometry.encodeOffsets[k][e]);
                }
              } else {
                polygonsEncodeOffsets.push(features[j].geometry.encodeOffsets[k]);
              }
            }
          }

          break;
        }
      }
    }
    polygons.push(polygonsCoordinates);
    polygons2.push(polygonsEncodeOffsets);
  }

  // 构建新的合并区域
  let features = [];

  for (let a = 0; a < names.length; a++) {
    let feature = {
      id: features.length.toString(),
      type: "FeatureCollection",
      geometry: {
        type: "Polygon",
        coordinates: polygons[a],
        encodeOffsets: polygons2[a],
      },
      properties: {
        name: properties.name[a] || "",
        childNum: polygons[a].length,
      },
    };
    if (properties.cp[a]) {
      feature.properties.cp = properties.cp[a];
    }

    // 将新的合并区域添加到地图中
    features.push(feature);
  }
  chinaJson.features = features;
}

function repRegionStrategy() {
  debugger;
  $.get("js/china.json", function (chinaJson) {
    let params = {
      names: [
        //把各个大区的省份用二维数组分开
        ["北京", "天津", "河北", "山西", "内蒙古"],
        ["黑龙江", "吉林", "辽宁"],
        ["山东", "江苏", "安徽", "江西", "浙江", "福建", "上海", "台湾"],
        ["河南", "湖北", "湖南"],
        ["广东", "广西", "海南", "香港", "澳门"],
        ["重庆", "四川", "云南", "西藏", "贵州"],
        ["陕西", "甘肃", "青海", "宁夏", "新疆"],
      ],
      properties: {
        //自定义大区的名字，要和上面的大区省份一一对应
        name: ["华北", "东北", "华东", "华中", "华南", "西南", "西北"],
        cp: [
          //经纬度可以自己随意定义
          [116.24, 39.54],
          [126.32, 43.5],
          [121.28, 31.13],
          [114.2, 30.32],
          [113.15, 23.08],
          [104.04, 30.39],
          [103.49, 36.03],
        ],
      },
    };

    mergeProvinces(chinaJson, params.names, params.properties);

    echarts.registerMap("china", chinaJson); // 注册地图

    let data = [
      //地图数据
      {
        name: "东北",
        value: 3685,
      },
      {
        name: "华北",
        value: 7342,
      },
      {
        name: "华南",
        value: 21416,
      },
      {
        name: "华东",
        value: 25314,
      },
      {
        name: "华中",
        value: 2500,
      },
      {
        name: "西南",
        value: 10427,
      },
      {
        name: "西北",
        value: 2440,
      },
    ];
  });
}
