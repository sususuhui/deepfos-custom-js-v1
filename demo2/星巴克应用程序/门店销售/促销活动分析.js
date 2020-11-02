function r1c1() {
  let cardName = 'r1c1';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');

  let tableHtml = `
  <table class="table table-bordered">
  <tbody>
    <tr>
      <td>七折券活动</td>
      <td>0.90%</td>
    </tr>
    <tr>
      <td>饮品买一送一</td>
      <td>0.85%</td>
    </tr>
    <tr>
      <td>圣诞促销</td>
      <td>0.63%</td>
    </tr>
    <tr>
      <td>双十一促销</td>
      <td>0.58%</td>
    </tr>
    <tr>
      <td>双倍积分活动</td>
      <td>0.30%</td>
    </tr>
    <tr>
      <td>满减活动</td>
      <td>0.17%</td>
    </tr>
  </tbody>
</table>`;

  $(echartDom).html(tableHtml);
}

function r1c2() {
  let cardName = 'r1c2';
  let echartDom = cfs.card.body.getDom(cardName).find('.echart');
  let headDom = cfs.card.head.getDom(cardName);

  let data1 = [
    28179,
    26263,
    29928,
    29496,
    21211,
    28438,
    ' 14,713 ',
    ' 17,852 ',
    ' 18,949 ',
    ' 18,028 ',
    ' 15,680 ',
    ' 16,964 ',
    ' 19,151 ',
    ' 16,064 ',
    ' 17,119 ',
    ' 13,981 ',
    ' 14,522 ',
    ' 13,618 ',
    ' 17,975 ',
    ' 18,683 ',
    ' 14,793 ',
    ' 15,389 ',
    ' 18,253 ',
    ' 13,160 ',
    ' 17,431 ',
    ' 15,769 ',
    ' 14,571 ',
    ' 15,477 ',
    ' 15,930 ',
    ' 18,436 ',
    ' 16,765 ',
    ' 15,049 ',
    ' 18,301 ',
    ' 16,552 ',
    ' 18,273 ',
    ' 16,845 ',
    20595,
    28569,
    28003,
    22113,
    27042,
    24617,
    22957,
    29267,
    29308,
    21396,
    29192,
    29794,
    27180,
    25015,
    ' 78,264 ',
    ' 71,739 ',
    ' 65,227 ',
    ' 63,546 ',
    ' 76,453 ',
    ' 70,802 ',
    ' 83,130 ',
    ' 75,363 ',
    ' 74,896 ',
    ' 61,067 ',
    ' 82,986 ',
    ' 60,928 ',
    ' 72,108 ',
    ' 78,691 ',
    27249,
    26964,
    22980,
    29237,
    23355,
    25051,
    25680,
    20079,
    26013,
    28207,
    23308,
    27337,
    26994,
    26323,
    25437,
    29507,
    25607,
    29912,
    21804,
    26856,
    26784,
    23739,
    25795,
    28985,
    22717,
    24409,
    22987,
    26403,
    27287,
    23347,
    20548,
    27201,
    24610,
    28259,
    20151,
    29567,
    20708,
    20980,
    20242,
    22279,
    21224,
    29152,
    21547,
    26546,
    28748,
    29358,
    23414,
    24077,
    29207,
    23588,
    23070,
    24843,
    21383,
    21435,
    22270,
    27856,
    21574,
    28547,
    28256,
    24810,
    26383,
    78813,
    68573,
    95295,
    79920,
    73464,
    99065,
    66511,
    68239,
    71143,
    85464,
    86827,
    69535,
    95259,
    93123,
    75702,
    81173,
    76513,
    20294,
    22171,
    29339,
    25553,
    24163,
    29117,
    22740,
    23259,
    24623,
    29016,
    52047,
    50172,
    56451,
    50232,
    58559,
    51217,
    57395,
    56825,
    49610,
    65120,
    22555,
    28149,
    29398,
    28355,
    24434,
    26132,
    24725,
    23646,
    25517,
    27149,
    26077,
    29073,
    29999,
    26052,
    25022,
    22188,
    24040,
    29284,
    20533,
    27029,
    26760,
    29743,
    26473,
    26172,
    24825,
    28550,
    28887,
    21455,
    26597,
    28215,
    28951,
    21745,
    26633,
    27447,
    20801,
    29014,
    24285,
    22950,
    27254,
    25057,
    27967,
    24775,
    24751,
    25836,
    20484,
    21586,
    29767,
    22149,
    24049,
    25191,
    24299,
    27798,
    24224,
    23961,
    28609,
    21252,
    22784,
    22898,
    27119,
    28156,
    24663,
    24953,
    25785,
    26100,
    23789,
    20767,
    23964,
    23107,
    22690,
    24828,
    21747,
    26137,
    23963,
    29413,
    22909,
    23192,
    20220,
    27403,
    22473,
    22481,
    26132,
    26195,
    20115,
    28222,
    26494,
    27340,
    23047,
    26757,
    27415,
    20518,
    20724,
    22919,
    28900,
    26879,
    29965,
    27514,
    24616,
    26871,
    25883,
    23492,
    26762,
    28848,
    28433,
    29321,
    21083,
    26520,
    20863,
    29074,
    21305,
    22438,
    23968,
    28292,
    21155,
    26670,
    26671,
    21029,
    26461,
    25224,
    28816,
    29365,
    20351,
    21180,
    28999,
    25873,
    21317,
    24379,
    24755,
    22753,
    20731,
    26407,
    27144,
    21723,
    28283,
    25198,
    25955,
    20199,
    20356,
    29826,
    25970,
    25696,
    25810,
    26670,
    22698,
    ' 96,317 ',
    ' 113,681 ',
    ' 104,002 ',
    ' 94,235 ',
    ' 132,831 ',
    ' 135,223 ',
    ' 127,817 ',
    ' 111,481 ',
    ' 129,539 ',
    ' 128,305 ',
    29213,
    23842,
    29891,
    27010,
    21336,
    20788,
    29172,
    21424,
    27885,
    21948,
    26661,
    25296,
    27459,
    29951,
    28999,
    24895,
    24276,
    20808,
    20256,
    28227,
    26636,
    26332,
    29639,
    25843,
    26381,
    21467,
    21974,
    22029,
    23647,
    26646,
    25340,
    25992,
    22497,
    21216,
    28895,
    27411,
    25725,
    48414,
    56451,
    56422,
    59590,
    62517,
    61919,
    47805,
    43801,
    58714,
    47746,
    57425,
    49489,
    50973,
    ' 59,562 ',
    28179,
  ];

  let data2 = [
    22110,
    20439,
    21513,
    22208,
    29980,
    26004,
    13359,
    16700,
    18252,
    16428,
    17332,
    16780,
    13002,
    15168,
    19015,
    14832,
    13689,
    14325,
    17362,
    15448,
    16467,
    18065,
    16112,
    16163,
    14666,
    14662,
    19171,
    17301,
    13327,
    14717,
    18534,
    17408,
    15059,
    16032,
    13048,
    ' 16,662 ',
    24880,
    20243,
    29724,
    27132,
    26139,
    24254,
    28316,
    27502,
    27245,
    21126,
    23561,
    23547,
    26072,
    28933,
    ' 68,542 ',
    ' 72,054 ',
    ' 70,718 ',
    ' 73,826 ',
    ' 65,736 ',
    ' 63,740 ',
    ' 58,791 ',
    ' 53,963 ',
    ' 66,448 ',
    ' 51,915 ',
    ' 68,885 ',
    ' 55,817 ',
    ' 51,951 ',
    ' 57,238 ',
    25819,
    22919,
    20517,
    24165,
    21247,
    22234,
    22467,
    25258,
    20694,
    24956,
    20517,
    28872,
    29193,
    24137,
    20022,
    20759,
    24334,
    20253,
    24790,
    22659,
    24611,
    24074,
    21628,
    20816,
    28974,
    20402,
    24457,
    22837,
    27147,
    24293,
    27795,
    22059,
    26698,
    24461,
    29839,
    21551,
    21639,
    24291,
    21793,
    23726,
    28016,
    29029,
    29751,
    22344,
    28991,
    27532,
    28879,
    23609,
    25705,
    29280,
    22898,
    26382,
    20933,
    27804,
    21602,
    23088,
    28301,
    26513,
    24055,
    29320,
    29069,
    84799,
    76618,
    68176,
    96306,
    70969,
    69107,
    93058,
    98086,
    68397,
    74240,
    89348,
    91546,
    74274,
    101867,
    96034,
    93836,
    88821,
    22052,
    29632,
    25193,
    26058,
    25623,
    29651,
    25061,
    22344,
    27939,
    25627,
    48843,
    55519,
    43820,
    44233,
    55705,
    40865,
    56291,
    46239,
    51053,
    41249,
    27972,
    29058,
    24125,
    25494,
    23154,
    22475,
    20087,
    23163,
    24566,
    20786,
    21393,
    21664,
    25903,
    26273,
    25009,
    24220,
    21273,
    27068,
    28868,
    22735,
    22359,
    29322,
    21101,
    21957,
    26797,
    28191,
    25506,
    25195,
    25493,
    24952,
    27290,
    28637,
    27748,
    27349,
    21456,
    29656,
    25846,
    26371,
    23386,
    23290,
    20721,
    25939,
    28270,
    24284,
    23881,
    22269,
    21205,
    20814,
    21615,
    29452,
    24951,
    23500,
    22979,
    22751,
    26691,
    21779,
    20397,
    25382,
    23947,
    29760,
    27148,
    21053,
    28606,
    21653,
    23735,
    25467,
    23372,
    21943,
    20951,
    21581,
    29365,
    27590,
    29295,
    29319,
    21880,
    29361,
    21219,
    22516,
    24956,
    29305,
    29786,
    27024,
    20546,
    29223,
    24820,
    21682,
    29576,
    28908,
    23540,
    26907,
    28253,
    25437,
    24433,
    29109,
    24089,
    25654,
    25339,
    28467,
    23376,
    28672,
    27378,
    24843,
    25297,
    21709,
    24115,
    21096,
    24737,
    25778,
    26970,
    23421,
    29660,
    26796,
    25244,
    27398,
    25736,
    22449,
    22487,
    23889,
    20373,
    20585,
    24137,
    21361,
    24258,
    24695,
    23522,
    26127,
    22818,
    24880,
    22581,
    28228,
    29785,
    29874,
    27865,
    24016,
    28948,
    28096,
    22880,
    23755,
    24675,
    23565,
    28863,
    23893,
    27506,
    ' 136,544 ',
    ' 124,401 ',
    ' 113,690 ',
    ' 101,344 ',
    ' 108,256 ',
    ' 141,306 ',
    ' 108,601 ',
    ' 104,108 ',
    ' 127,652 ',
    ' 136,245 ',
    24551,
    23582,
    27121,
    25103,
    25420,
    23236,
    23136,
    22801,
    27979,
    24461,
    29949,
    22812,
    26529,
    28758,
    28225,
    29745,
    25420,
    26314,
    26552,
    23660,
    20231,
    21812,
    27198,
    22475,
    26237,
    26130,
    26839,
    29385,
    25899,
    29267,
    28285,
    26295,
    22417,
    29732,
    26103,
    22072,
    27144,
    ' 57,853 ',
    ' 59,279 ',
    ' 53,289 ',
    ' 52,463 ',
    ' 57,917 ',
    ' 57,330 ',
    ' 57,815 ',
    ' 61,700 ',
    ' 56,228 ',
    ' 56,382 ',
    ' 46,469 ',
    ' 44,702 ',
    ' 45,559 ',
    ' 56,122 ',
  ];

  let data3 = [
    26,
    22,
    24,
    28,
    10,
    8,
    21,
    17,
    6,
    8,
    6,
    11,
    20,
    17,
    9,
    17,
    23,
    14,
    8,
    7,
    15,
    23,
    23,
    6,
    16,
    15,
    9,
    6,
    8,
    10,
    11,
    15,
    15,
    25,
    18,
    7,
    29,
    26,
    24,
    30,
    25,
    8,
    16,
    15,
    9,
    14,
    30,
    21,
    20,
    8,
    73,
    59,
    62,
    73,
    54,
    20,
    42,
    54,
    82,
    14,
    59,
    40,
    14,
    23,
    23,
    6,
    10,
    10,
    16,
    10,
    30,
    24,
    14,
    16,
    8,
    21,
    5,
    8,
    13,
    16,
    10,
    11,
    8,
    18,
    17,
    5,
    14,
    21,
    15,
    9,
    7,
    6,
    5,
    15,
    11,
    24,
    11,
    25,
    12,
    8,
    28,
    21,
    27,
    22,
    19,
    18,
    8,
    8,
    12,
    17,
    7,
    12,
    22,
    23,
    15,
    28,
    13,
    24,
    24,
    17,
    17,
    28,
    30,
    26,
    9,
    12,
    22,
    21,
    25,
    16,
    39,
    44,
    30,
    30,
    16,
    27,
    36,
    37,
    21,
    44,
    13,
    37,
    9,
    11,
    11,
    18,
    12,
    13,
    6,
    7,
    19,
    29,
    52,
    71,
    136,
    58,
    32,
    65,
    32,
    136,
    156,
    90,
    21,
    29,
    19,
    24,
    9,
    10,
    14,
    10,
    23,
    23,
    11,
    19,
    29,
    15,
    22,
    9,
    27,
    10,
    12,
    27,
    10,
    14,
    23,
    15,
    22,
    13,
    11,
    27,
    22,
    10,
    12,
    29,
    28,
    18,
    7,
    24,
    12,
    17,
    29,
    21,
    26,
    24,
    13,
    15,
    17,
    7,
    25,
    13,
    7,
    14,
    13,
    25,
    14,
    17,
    5,
    19,
    30,
    15,
    28,
    12,
    27,
    5,
    30,
    25,
    6,
    29,
    22,
    8,
    27,
    6,
    26,
    6,
    8,
    27,
    17,
    21,
    17,
    21,
    11,
    7,
    6,
    24,
    13,
    22,
    24,
    15,
    6,
    25,
    25,
    8,
    15,
    18,
    19,
    26,
    15,
    14,
    29,
    28,
    15,
    5,
    21,
    25,
    15,
    6,
    28,
    24,
    20,
    30,
    20,
    29,
    5,
    18,
    18,
    16,
    21,
    10,
    24,
    11,
    22,
    10,
    26,
    17,
    25,
    28,
    15,
    21,
    10,
    5,
    16,
    20,
    7,
    26,
    14,
    18,
    23,
    9,
    26,
    15,
    26,
    23,
    8,
    19,
    20,
    46,
    31,
    73,
    100,
    27,
    73,
    69,
    116,
    96,
    39,
    17,
    26,
    10,
    7,
    7,
    28,
    20,
    29,
    12,
    10,
    22,
    16,
    16,
    11,
    28,
    27,
    23,
    11,
    11,
    30,
    10,
    26,
    10,
    25,
    22,
    18,
    24,
    20,
    10,
    27,
    25,
    16,
    5,
    25,
    11,
    12,
    18,
    57,
    80,
    83,
    87,
    53,
    23,
    38,
    27,
    76,
    42,
    34,
    53,
    68,
    97,
    26,
    22,
  ];

  let data4 = [
    19,
    21,
    17,
    29,
    18,
    25,
    4,
    12,
    13,
    9,
    12,
    14,
    10,
    4,
    11,
    11,
    5,
    8,
    8,
    10,
    9,
    8,
    10,
    13,
    4,
    8,
    7,
    12,
    14,
    14,
    8,
    14,
    12,
    14,
    13,
    3,
    21,
    28,
    25,
    18,
    13,
    19,
    25,
    15,
    5,
    21,
    9,
    21,
    24,
    19,
    18,
    44,
    62,
    23,
    15,
    18,
    75,
    31,
    44,
    77,
    51,
    69,
    59,
    42,
    16,
    25,
    27,
    10,
    10,
    7,
    6,
    14,
    28,
    19,
    20,
    13,
    28,
    8,
    16,
    25,
    12,
    17,
    23,
    6,
    14,
    19,
    22,
    12,
    21,
    25,
    25,
    26,
    5,
    12,
    10,
    27,
    15,
    10,
    9,
    11,
    19,
    12,
    13,
    18,
    21,
    17,
    15,
    26,
    6,
    24,
    23,
    17,
    12,
    13,
    5,
    15,
    19,
    26,
    8,
    8,
    5,
    18,
    6,
    16,
    26,
    27,
    41,
    99,
    95,
    99,
    23,
    27,
    23,
    104,
    36,
    117,
    72,
    45,
    59,
    32,
    41,
    120,
    16,
    7,
    22,
    27,
    16,
    30,
    7,
    27,
    30,
    15,
    25,
    19,
    75,
    75,
    47,
    28,
    14,
    47,
    14,
    84,
    26,
    26,
    26,
    30,
    9,
    6,
    29,
    30,
    17,
    30,
    19,
    11,
    30,
    5,
    16,
    21,
    17,
    12,
    18,
    22,
    29,
    14,
    30,
    28,
    22,
    15,
    7,
    11,
    21,
    19,
    15,
    10,
    9,
    6,
    24,
    24,
    30,
    8,
    8,
    26,
    27,
    5,
    24,
    13,
    16,
    22,
    24,
    16,
    29,
    23,
    26,
    30,
    6,
    21,
    21,
    7,
    30,
    25,
    10,
    18,
    28,
    5,
    11,
    12,
    30,
    6,
    16,
    24,
    26,
    14,
    16,
    20,
    5,
    9,
    8,
    7,
    20,
    16,
    7,
    10,
    23,
    10,
    12,
    26,
    8,
    12,
    5,
    30,
    18,
    10,
    6,
    26,
    18,
    6,
    10,
    29,
    29,
    16,
    24,
    19,
    7,
    9,
    30,
    29,
    5,
    22,
    28,
    27,
    17,
    28,
    23,
    15,
    6,
    5,
    16,
    27,
    11,
    15,
    24,
    23,
    19,
    7,
    26,
    7,
    16,
    19,
    6,
    10,
    30,
    12,
    19,
    5,
    20,
    26,
    12,
    12,
    22,
    21,
    11,
    17,
    7,
    19,
    13,
    147,
    158,
    49,
    153,
    33,
    38,
    55,
    109,
    104,
    48,
    18,
    28,
    14,
    26,
    6,
    16,
    29,
    13,
    13,
    22,
    12,
    15,
    12,
    12,
    21,
    6,
    30,
    21,
    15,
    17,
    5,
    16,
    12,
    22,
    12,
    10,
    21,
    15,
    18,
    24,
    22,
    15,
    11,
    6,
    23,
    16,
    25,
    55,
    52,
    88,
    18,
    70,
    21,
    21,
    70,
    15,
    49,
    61,
    85,
    30,
    54,
  ];

  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['销售额-实际', '销售额-预算', '销售费用-实际', '销售费用-预算'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '13%',
      top: '12%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,
      data: [
        '2020/1/1',
        '2020/1/2',
        '2020/1/3',
        '2020/1/4',
        '2020/1/5',
        '2020/1/6',
        '2020/1/7',
        '2020/1/8',
        '2020/1/9',
        '2020/1/10',
        '2020/1/11',
        '2020/1/12',
        '2020/1/13',
        '2020/1/14',
        '2020/1/15',
        '2020/1/16',
        '2020/1/17',
        '2020/1/18',
        '2020/1/19',
        '2020/1/20',
        '2020/1/21',
        '2020/1/22',
        '2020/1/23',
        '2020/1/24',
        '2020/1/25',
        '2020/1/26',
        '2020/1/27',
        '2020/1/28',
        '2020/1/29',
        '2020/1/30',
        '2020/1/31',
        '2020/2/1',
        '2020/2/2',
        '2020/2/3',
        '2020/2/4',
        '2020/2/5',
        '2020/2/6',
        '2020/2/7',
        '2020/2/8',
        '2020/2/9',
        '2020/2/10',
        '2020/2/11',
        '2020/2/12',
        '2020/2/13',
        '2020/2/14',
        '2020/2/15',
        '2020/2/16',
        '2020/2/17',
        '2020/2/18',
        '2020/2/19',
        '2020/2/20',
        '2020/2/21',
        '2020/2/22',
        '2020/2/23',
        '2020/2/24',
        '2020/2/25',
        '2020/2/26',
        '2020/2/27',
        '2020/2/28',
        '2020/2/29',
        '2020/3/1',
        '2020/3/2',
        '2020/3/3',
        '2020/3/4',
        '2020/3/5',
        '2020/3/6',
        '2020/3/7',
        '2020/3/8',
        '2020/3/9',
        '2020/3/10',
        '2020/3/11',
        '2020/3/12',
        '2020/3/13',
        '2020/3/14',
        '2020/3/15',
        '2020/3/16',
        '2020/3/17',
        '2020/3/18',
        '2020/3/19',
        '2020/3/20',
        '2020/3/21',
        '2020/3/22',
        '2020/3/23',
        '2020/3/24',
        '2020/3/25',
        '2020/3/26',
        '2020/3/27',
        '2020/3/28',
        '2020/3/29',
        '2020/3/30',
        '2020/3/31',
        '2020/4/1',
        '2020/4/2',
        '2020/4/3',
        '2020/4/4',
        '2020/4/5',
        '2020/4/6',
        '2020/4/7',
        '2020/4/8',
        '2020/4/9',
        '2020/4/10',
        '2020/4/11',
        '2020/4/12',
        '2020/4/13',
        '2020/4/14',
        '2020/4/15',
        '2020/4/16',
        '2020/4/17',
        '2020/4/18',
        '2020/4/19',
        '2020/4/20',
        '2020/4/21',
        '2020/4/22',
        '2020/4/23',
        '2020/4/24',
        '2020/4/25',
        '2020/4/26',
        '2020/4/27',
        '2020/4/28',
        '2020/4/29',
        '2020/4/30',
        '2020/5/1',
        '2020/5/2',
        '2020/5/3',
        '2020/5/4',
        '2020/5/5',
        '2020/5/6',
        '2020/5/7',
        '2020/5/8',
        '2020/5/9',
        '2020/5/10',
        '2020/5/11',
        '2020/5/12',
        '2020/5/13',
        '2020/5/14',
        '2020/5/15',
        '2020/5/16',
        '2020/5/17',
        '2020/5/18',
        '2020/5/19',
        '2020/5/20',
        '2020/5/21',
        '2020/5/22',
        '2020/5/23',
        '2020/5/24',
        '2020/5/25',
        '2020/5/26',
        '2020/5/27',
        '2020/5/28',
        '2020/5/29',
        '2020/5/30',
        '2020/5/31',
        '2020/6/1',
        '2020/6/2',
        '2020/6/3',
        '2020/6/4',
        '2020/6/5',
        '2020/6/6',
        '2020/6/7',
        '2020/6/8',
        '2020/6/9',
        '2020/6/10',
        '2020/6/11',
        '2020/6/12',
        '2020/6/13',
        '2020/6/14',
        '2020/6/15',
        '2020/6/16',
        '2020/6/17',
        '2020/6/18',
        '2020/6/19',
        '2020/6/20',
        '2020/6/21',
        '2020/6/22',
        '2020/6/23',
        '2020/6/24',
        '2020/6/25',
        '2020/6/26',
        '2020/6/27',
        '2020/6/28',
        '2020/6/29',
        '2020/6/30',
        '2020/7/1',
        '2020/7/2',
        '2020/7/3',
        '2020/7/4',
        '2020/7/5',
        '2020/7/6',
        '2020/7/7',
        '2020/7/8',
        '2020/7/9',
        '2020/7/10',
        '2020/7/11',
        '2020/7/12',
        '2020/7/13',
        '2020/7/14',
        '2020/7/15',
        '2020/7/16',
        '2020/7/17',
        '2020/7/18',
        '2020/7/19',
        '2020/7/20',
        '2020/7/21',
        '2020/7/22',
        '2020/7/23',
        '2020/7/24',
        '2020/7/25',
        '2020/7/26',
        '2020/7/27',
        '2020/7/28',
        '2020/7/29',
        '2020/7/30',
        '2020/7/31',
        '2020/8/1',
        '2020/8/2',
        '2020/8/3',
        '2020/8/4',
        '2020/8/5',
        '2020/8/6',
        '2020/8/7',
        '2020/8/8',
        '2020/8/9',
        '2020/8/10',
        '2020/8/11',
        '2020/8/12',
        '2020/8/13',
        '2020/8/14',
        '2020/8/15',
        '2020/8/16',
        '2020/8/17',
        '2020/8/18',
        '2020/8/19',
        '2020/8/20',
        '2020/8/21',
        '2020/8/22',
        '2020/8/23',
        '2020/8/24',
        '2020/8/25',
        '2020/8/26',
        '2020/8/27',
        '2020/8/28',
        '2020/8/29',
        '2020/8/30',
        '2020/8/31',
        '2020/9/1',
        '2020/9/2',
        '2020/9/3',
        '2020/9/4',
        '2020/9/5',
        '2020/9/6',
        '2020/9/7',
        '2020/9/8',
        '2020/9/9',
        '2020/9/10',
        '2020/9/11',
        '2020/9/12',
        '2020/9/13',
        '2020/9/14',
        '2020/9/15',
        '2020/9/16',
        '2020/9/17',
        '2020/9/18',
        '2020/9/19',
        '2020/9/20',
        '2020/9/21',
        '2020/9/22',
        '2020/9/23',
        '2020/9/24',
        '2020/9/25',
        '2020/9/26',
        '2020/9/27',
        '2020/9/28',
        '2020/9/29',
        '2020/9/30',
        '2020/10/1',
        '2020/10/2',
        '2020/10/3',
        '2020/10/4',
        '2020/10/5',
        '2020/10/6',
        '2020/10/7',
        '2020/10/8',
        '2020/10/9',
        '2020/10/10',
        '2020/10/11',
        '2020/10/12',
        '2020/10/13',
        '2020/10/14',
        '2020/10/15',
        '2020/10/16',
        '2020/10/17',
        '2020/10/18',
        '2020/10/19',
        '2020/10/20',
        '2020/10/21',
        '2020/10/22',
        '2020/10/23',
        '2020/10/24',
        '2020/10/25',
        '2020/10/26',
        '2020/10/27',
        '2020/10/28',
        '2020/10/29',
        '2020/10/30',
        '2020/10/31',
        '2020/11/1',
        '2020/11/2',
        '2020/11/3',
        '2020/11/4',
        '2020/11/5',
        '2020/11/6',
        '2020/11/7',
        '2020/11/8',
        '2020/11/9',
        '2020/11/10',
        '2020/11/11',
        '2020/11/12',
        '2020/11/13',
        '2020/11/14',
        '2020/11/15',
        '2020/11/16',
        '2020/11/17',
        '2020/11/18',
        '2020/11/19',
        '2020/11/20',
        '2020/11/21',
        '2020/11/22',
        '2020/11/23',
        '2020/11/24',
        '2020/11/25',
        '2020/11/26',
        '2020/11/27',
        '2020/11/28',
        '2020/11/29',
        '2020/11/30',
        '2020/12/1',
        '2020/12/2',
        '2020/12/3',
        '2020/12/4',
        '2020/12/5',
        '2020/12/6',
        '2020/12/7',
        '2020/12/8',
        '2020/12/9',
        '2020/12/10',
        '2020/12/11',
        '2020/12/12',
        '2020/12/13',
        '2020/12/14',
        '2020/12/15',
        '2020/12/16',
        '2020/12/17',
        '2020/12/18',
        '2020/12/19',
        '2020/12/20',
        '2020/12/21',
        '2020/12/22',
        '2020/12/23',
        '2020/12/24',
        '2020/12/25',
        '2020/12/26',
        '2020/12/27',
        '2020/12/28',
        '2020/12/29',
        '2020/12/30',
        '2020/12/31',
      ],
    },
    yAxis: [
      {
        type: 'value',
      },
      {
        type: 'value',
      },
    ],
    dataZoom: [
      {
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        start: 80,
        end: 100,
      },
    ],
    series: [
      {
        name: '销售额-实际',
        type: 'line',
        stack: '1',
        data: data1,
        markArea: {
          itemStyle: {
            color: 'rgba(252, 228, 236, 0.4)',
          },
          data: [
            [
              {
                name: '七折券',
                xAxis: '2020/1/7',
              },
              {
                xAxis: '2020/2/5',
              },
            ],
            [
              {
                name: '买一送一',
                xAxis: '2020/2/20',
              },
              {
                xAxis: '2020/3/4',
              },
            ],
            [
              {
                name: '满减活动',
                xAxis: '2020/5/5',
              },
              {
                xAxis: '2020/5/21',
              },
            ],
            [
              {
                name: '双倍积分活动',
                xAxis: '2020/6/1',
              },
              {
                xAxis: '2020/6/10',
              },
            ],
            [
              {
                name: '双十一促销',
                xAxis: '2020/11/1',
              },
              {
                xAxis: '2020/11/10',
              },
            ],
            [
              {
                name: '圣诞节',
                xAxis: '2020/12/18',
              },
              {
                xAxis: '2020/12/31',
              },
            ],
          ],
        },
      },
      {
        name: '销售额-预算',
        type: 'line',
        stack: '2',
        data: data2,
        markArea: {
          itemStyle: {
            color: 'rgba(252, 228, 236, 0.4)',
          },
          data: [
            [
              {
                name: '七折券',
                xAxis: '2020/1/7',
              },
              {
                xAxis: '2020/2/5',
              },
            ],
            [
              {
                name: '买一送一',
                xAxis: '2020/2/20',
              },
              {
                xAxis: '2020/3/4',
              },
            ],
            [
              {
                name: '满减活动',
                xAxis: '2020/5/5',
              },
              {
                xAxis: '2020/5/21',
              },
            ],
            [
              {
                name: '双倍积分活动',
                xAxis: '2020/6/1',
              },
              {
                xAxis: '2020/6/10',
              },
            ],
            [
              {
                name: '双十一促销',
                xAxis: '2020/11/1',
              },
              {
                xAxis: '2020/11/10',
              },
            ],
            [
              {
                name: '圣诞节',
                xAxis: '2020/12/18',
              },
              {
                xAxis: '2020/12/31',
              },
            ],
          ],
        },
      },
      {
        name: '销售费用-实际',
        type: 'line',
        yAxisIndex: 1,
        stack: '3',
        data: data3,
        markArea: {
          itemStyle: {
            color: 'rgba(252, 228, 236, 0.4)',
          },
          data: [
            [
              {
                name: '七折券',
                xAxis: '2020/1/7',
              },
              {
                xAxis: '2020/2/5',
              },
            ],
            [
              {
                name: '买一送一',
                xAxis: '2020/2/20',
              },
              {
                xAxis: '2020/3/4',
              },
            ],
            [
              {
                name: '满减活动',
                xAxis: '2020/5/5',
              },
              {
                xAxis: '2020/5/21',
              },
            ],
            [
              {
                name: '双倍积分活动',
                xAxis: '2020/6/1',
              },
              {
                xAxis: '2020/6/10',
              },
            ],
            [
              {
                name: '双十一促销',
                xAxis: '2020/11/1',
              },
              {
                xAxis: '2020/11/10',
              },
            ],
            [
              {
                name: '圣诞节',
                xAxis: '2020/12/18',
              },
              {
                xAxis: '2020/12/31',
              },
            ],
          ],
        },
      },
      {
        name: '销售费用-预算',
        type: 'line',
        yAxisIndex: 1,
        stack: '4',
        data: data4,
        markArea: {
          itemStyle: {
            color: 'rgba(252, 228, 236, 0.4)',
          },
          data: [
            [
              {
                name: '七折券',
                xAxis: '2020/1/7',
              },
              {
                xAxis: '2020/2/5',
              },
            ],
            [
              {
                name: '买一送一',
                xAxis: '2020/2/20',
              },
              {
                xAxis: '2020/3/4',
              },
            ],
            [
              {
                name: '满减活动',
                xAxis: '2020/5/5',
              },
              {
                xAxis: '2020/5/21',
              },
            ],
            [
              {
                name: '双倍积分活动',
                xAxis: '2020/6/1',
              },
              {
                xAxis: '2020/6/10',
              },
            ],
            [
              {
                name: '双十一促销',
                xAxis: '2020/11/1',
              },
              {
                xAxis: '2020/11/10',
              },
            ],
            [
              {
                name: '圣诞节',
                xAxis: '2020/12/18',
              },
              {
                xAxis: '2020/12/31',
              },
            ],
          ],
        },
      },
    ],
  };

  if (!Cus_echarts[cardName]) {
    Cus_echarts[cardName] = cfs.echarts.init(echartDom, Cus_theme, option);
  } else {
    cfs.echarts.refresh(Cus_echarts[cardName], option);
  }
}

var Cus_theme = 'westeros';
var Cus_echarts = {};

//extrajs全局方法
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
