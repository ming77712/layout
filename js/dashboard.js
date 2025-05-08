// 頁面加載時，初始化隱藏所有子選單
document.addEventListener('DOMContentLoaded', function () {
  // 隱藏所有子選單
  document.querySelectorAll('.dropdown-submenu').forEach(function (submenu) {
    submenu.style.display = 'none';
  });
});

function toggleSubmenu(element) {
  // 阻止事件冒泡
  // event.preventDefault();
  // event.stopPropagation();

  // 獲取父選單文本
  const parentText = element.textContent.trim().replace(/▶|▼/g, '').trim();
  const arrow = element.querySelector('.menu-arrow');

  // 找到所有屬於這個父選單的子選單
  const submenus = document.querySelectorAll(
    `.dropdown-submenu[data-parent="${parentText}"]`
  );

  // 檢查第一個子選單的顯示狀態來確定是顯示還是隱藏
  const isVisible = submenus.length > 0 && submenus[0].style.display !== 'none';

  // 切換顯示/隱藏狀態
  submenus.forEach(function (submenu) {
    submenu.style.display = isVisible ? 'none' : 'block';
  });

  // 更新箭頭方向
  if (isVisible) {
    arrow.textContent = '▶'; // 未展開時顯示向右箭頭
  } else {
    arrow.textContent = '▼'; // 展開時顯示向下箭頭
  }
}

// 點選主下拉選單時保持它開啟
document.querySelectorAll('.dropdown-menu').forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});

// 點擊文檔其他位置時關閉所有子選單
document.addEventListener('click', function (event) {
  // 檢查點擊的目標不是下拉選單或其子元素
  if (!event.target.closest('.dropdown-menu')) {
    document.querySelectorAll('.dropdown-submenu').forEach(function (submenu) {
      submenu.style.display = 'none';
    });

    document.querySelectorAll('.menu-arrow').forEach(function (arrow) {
      arrow.textContent = '▶'; // 重置為向右箭頭
    });
  }
});

// 目前行駛中的總車輛數
const stackedColumnData = {
  FormVehicleCount: [
    280, 205, 210, 213, 230, 337, 394, 358, 388, 375, 379, 344, 367, 320, 374,
    300, 328, 283, 170, 240, 221, 203, 197, 204,
  ],
  NoFormVehicleCount: [
    602, 590, 480, 450, 479, 724, 671, 774, 840, 820, 782, 800, 844, 710, 740,
    678, 722, 684, 690, 592, 570, 530, 490, 481,
  ],
};

// 目前申報運送表單數
const stackedAreaData = {
  UndeliveredForm: [
    300, 287, 277, 269, 249, 247, 231, 224, 200, 183, 179, 144, 84, 69, 66, 37,
    39, 28, 11, 12, 6, 2, 0, 0,
  ],
  DeliveringForm: [
    0, 12, 20, 25, 40, 35, 41, 35, 43, 41, 24, 37, 64, 43, 26, 35, 15, 10, 15,
    5, 4, 3, 2, 0,
  ],
  DeliveredForm: [
    0, 1, 3, 6, 11, 18, 28, 41, 57, 76, 97, 119, 152, 188, 208, 228, 246, 262,
    274, 283, 290, 295, 298, 300,
  ],
};

// 當日累積載運量
const splitPackedBubbleData = [
  {
    name: '第一類毒化物',
    data: [
      {
        name: '苯 Benzene',
        value: 20.0,
      },
      {
        name: '丙烯腈 Acrylonitrile',
        value: 40.8,
      },
      {
        name: '二硫化碳 Carbon disulfide',
        value: 800.1,
      },
      {
        name: '甲基汞 Methylmercury',
        value: 0.47,
      },
      {
        name: '可氯丹 Chlordane',
        value: 543.9,
      },
    ],
  },
  {
    name: '第二類毒化物',
    data: [
      {
        name: '苯 Benzene',
        value: 20.0,
      },
      {
        name: '鎘 Cadmium',
        value: 579.1,
      },
      {
        name: '甲醯胺 Formamide',
        value: 87.4,
      },
      {
        name: '甲醛 Formaldehyde',
        value: 70.7,
      },
    ],
  },
  {
    name: '第三類毒化物',
    data: [
      {
        name: '氰化鎘 Cadmium cyanide',
        value: 1900.7,
      },
      {
        name: '苯胺 Aniline',
        value: 73,
      },
      {
        name: '地特靈 Dieldrin',
        value: 66.6,
      },
    ],
  },
  {
    name: '關注化學物質',
    data: [
      {
        name: '一氧化二氮（笑氣）Nitrous Oxide',
        value: 820,
      },
      {
        name: '一氧化鉛 Lead monoxide',
        value: 999.9,
      },
    ],
  },
];

// 目前正式核可車輛數
const sameXaxisDifferentIntervalsData = {
  Date: [
    '1月1日',
    '1月2日',
    '1月3日',
    '1月4日',
    '1月5日',
    '1月6日',
    '1月7日',
    '1月8日',
    '1月9日',
    '1月10日',
    '1月11日',
    '1月12日',
    '1月13日',
    '1月14日',
    '1月15日',
    '1月16日',
    '1月17日',
    '1月18日',
    '1月19日',
    '1月20日',
    '1月21日',
    '1月22日',
    '1月23日',
    '1月24日',
    '1月25日',
    '1月26日',
    '1月27日',
    '1月28日',
    '1月29日',
    '1月30日',
    '1月31日',
  ],
  InitialReview: [
    10, 5, 0, 0, 5, 3, 7, 0, 1, 5, 7, 0, 4, 9, 0, 0, 8, 7, 6, 8, 2, 10, 0, 4, 1,
    1, 2, 0, 7, 10, 2,
  ],
  Unlisting: [
    3, 3, 0, 2, 0, 1, 0, 0, 1, 0, 2, 0, 2, 10, 0, 0, 2, 7, 5, 5, 5, 0, 0, 2, 2,
    10, 10, 0, 0, 2, 2,
  ],
  TotalVehicleCount: [
    1707, 1709, 1709, 1707, 1712, 1714, 1721, 1721, 1721, 1726, 1731, 1731,
    1733, 1732, 1732, 1732, 1738, 1738, 1739, 1742, 1739, 1749, 1749, 1751,
    1750, 1741, 1733, 1733, 1740, 1748, 1748,
  ],
  DailyVehicleGrowth: [
    7, 2, 0, -2, 5, 2, 7, 0, 0, 5, 5, 0, 2, -1, 0, 0, 6, 0, 1, 3, -3, 10, 0, 2,
    -1, -9, -8, 0, 7, 8, 0,
  ],
};

// 前一日故障報備回報路線車輛數
const solidgaugeData = {
  Routereported: 60,
  Noroutereported: 40,
  Totalfaultreports: 100,
};

// 前一日勾稽案件數
const lineChartsData = {
  Date: [
    '2025/12/18',
    '2025/12/19',
    '2025/12/20',
    '2025/12/21',
    '2025/12/22',
    '2025/12/23',
    '2025/12/24',
    '2025/12/25',
    '2025/12/26',
    '2025/12/27',
    '2025/12/28',
    '2025/12/29',
    '2025/12/30',
    '2025/12/31',
    '2026/1/1',
    '2026/1/2',
    '2026/1/3',
    '2026/1/4',
    '2026/1/5',
    '2026/1/6',
    '2026/1/7',
    '2026/1/8',
    '2026/1/9',
    '2026/1/10',
    '2026/1/11',
    '2026/1/12',
    '2026/1/13',
    '2026/1/14',
    '2026/1/15',
  ],
  FormNoTracking: [
    5, 3, 0, 2, 7, 3, 2, 1, 3, 2, 3, 4, 1, 4, 10, 2, 2, 1, 2, 2, 5, 10, 4, 0, 1,
    2, 5, 3, 1,
  ],
  StartEndMismatch: [
    3, 8, 7, 4, 7, 2, 10, 5, 6, 8, 5, 2, 6, 5, 10, 4, 6, 4, 3, 6, 4, 15, 0, 2,
    4, 3, 5, 7, 2,
  ],
};

// 當月各車機之妥善率
const comparisonData = {
  Month: [9, 8],
  Vendor: {
    '銳俤(Locator 690)': [
      [96, 'A+'],
      [90, 'A'],
    ],
    '易通(EC-912 4G)': [
      [95, 'A+'],
      [99, 'A+'],
    ],
    '航釱(H4G)': [
      [99, 'A+'],
      [98, 'A+'],
    ],
    '宇暘(J40)': [
      [96, 'A+'],
      [90, 'A'],
    ],
    '康訊(U3 LTE)': [
      [99, 'A+'],
      [87, 'B+'],
    ],
    '冠祺鴻(TP-458-4G)': [
      [79, 'C'],
      [99, 'A+'],
    ],
    '長輝資訊(CH-68-4G)': [
      [96, 'A+'],
      [98, 'A+'],
    ],
    '中興保全(MSM0901)': [
      [98, 'A+'],
      [98, 'A+'],
    ],
    '弋揚(EP-168-4G)': [
      [98, 'A+'],
      [99, 'A+'],
    ],
    '捷世林(JAS106)': [
      [79, 'C'],
      [96, 'A+'],
    ],
    '長輝資訊(D1-Plus)': [
      [98, 'A+'],
      [96, 'A+'],
    ],
    '富德爾(FT-168 4G)': [
      [87, 'B+'],
      [95, 'A+'],
    ],
    '天眼衛星(SE-401 4G)': [
      [96, 'A+'],
      [95, 'A+'],
    ],
    '康訊(U1 PLUS LTE)': [
      [99, 'A+'],
      [99, 'A+'],
    ],
    '弋揚(EDR-168 4G)': [
      [90, 'A'],
      [95, 'A+'],
    ],
    '中興保全(MSM0921)': [
      [98, 'A+'],
      [98, 'A+'],
    ],
  },
};

// 目前行駛中的總車輛數
Highcharts.chart('stackedColumn', {
  chart: {
    type: 'column',
  },
  title: {
    text: '目前行駛中的總車輛數',
    align: 'center',
  },
  xAxis: {
    title: {
      text: '24小時',
    },
    categories: [
      '00',
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
    ],
  },
  yAxis: {
    min: 0,
    title: {
      text: '車輛數',
    },
    stackLabels: {
      enabled: true,
    },
  },
  legend: {
    align: 'left',
    x: 70,
    verticalAlign: 'top',
    y: 30,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false,
  },
  tooltip: {
    headerFormat: '<b>{category}時</b><br/>',
    pointFormat:
      '{series.name}: {point.y}<br/>目前行駛中的總車輛數: {point.stackTotal}',
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      name: '無表單車輛數',
      data: stackedColumnData['NoFormVehicleCount'],
    },
    {
      name: '有表單車輛數',
      data: stackedColumnData['FormVehicleCount'],
    },
  ],
});

// 目前申報運送表單數
Highcharts.chart('stackedArea', {
  chart: {
    type: 'area',
  },
  title: {
    text: '目前申報運送表單數',
  },
  yAxis: {
    title: {
      text: '表單數',
    },
    max: 300,
  },
  tooltip: {
    shared: true,
    headerFormat:
      '<span style="font-size:12px"><b>{point.key}時</b></span>' + '<br>',
  },
  plotOptions: {
    series: {
      pointStart: 0o0,
    },
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666',
      },
    },
  },
  series: [
    {
      name: '未運送表單 UndeliveredForm',
      data: stackedAreaData['UndeliveredForm'],
    },
    {
      name: '運送中表單 DeliveringForm',
      data: stackedAreaData['DeliveringForm'],
    },
    {
      name: '已完成運送表單 DeliveredForm',
      data: stackedAreaData['DeliveredForm'],
    },
  ],
});

// 當日累積載運量
Highcharts.chart('splitPackedBubble', {
  chart: {
    type: 'packedbubble',
    height: '100%',
  },
  title: {
    text: '當日累積載運量',
    align: 'center',
  },
  tooltip: {
    pointFormat: '<b>{point.name}:</b> {point.value}',
  },
  plotOptions: {
    packedbubble: {
      minSize: '20%',
      maxSize: '100%',
      zMin: 0,
      zMax: 2000,
      layoutAlgorithm: {
        gravitationalConstant: 0.05,
        splitSeries: true,
        seriesInteraction: false,
        dragBetweenSeries: true,
        parentNodeLimit: true,
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}',
        filter: {
          property: 'y',
          operator: '>',
          value: 250,
        },
        style: {
          color: 'black',
          textOutline: 'none',
          fontWeight: 'normal',
        },
      },
    },
  },
  series: splitPackedBubbleData,
});

// 目前正式核可車輛數
// 未完成
Highcharts.chart('sameXaxisDifferentIntervals', {
  title: {
    text: '目前正式核可車輛數',
  },
  xAxis: {
    categories: sameXaxisDifferentIntervalsData.Date,
    title: {
      text: '日期',
    },
  },
  yAxis: {
    title: {
      text: '車輛數',
    },
  },
  tooltip: {
    shared: true,
  },
  series: [
    {
      type: 'column',
      name: '單日車輛成長差',
      data: sameXaxisDifferentIntervalsData.InitialReview.map(
        (val, i) => val - sameXaxisDifferentIntervalsData.Unlisting[i]
      ),
      color: '#7cb5ec',
    },
    {
      type: 'line',
      name: '總車輛數',
      data: sameXaxisDifferentIntervalsData.TotalVehicleCount,
      color: '#434348',
    },
  ],
});

// 前一日故障報備回報路線車輛數
const trackColors = Highcharts.getOptions().colors.map((color) =>
  new Highcharts.Color(color).setOpacity(0.3).get()
);

Highcharts.chart('solidgauge', {
  chart: {
    type: 'solidgauge',
    // height: '110%',
  },

  title: {
    text: '前一日故障報備回報路線車輛數',
    style: {
      fontSize: '24px',
    },
  },

  tooltip: {
    useHTML: true,
    backgroundColor: 'none',
    borderWidth: 0,
    shadow: false,
    style: {
      fontSize: '64px',
    },
    formatter: function () {
      const currentValue = solidgaugeData['Routereported'];
      const total = solidgaugeData['Totalfaultreports'];
      return `
        <div>
          <div style="text-align: left; font-weight: bold; color: ${
            Highcharts.getOptions().colors[0]
          }">
            ${currentValue}/
          </div>
          <div style="text-align: right; font-weight: bold; color: ${
            Highcharts.getOptions().colors[0]
          }">
            ${total}
          </div>
        </div>
      `;
    },
    shared: true,
    positioner: function (labelWidth, labelHeight, point) {
      return {
        x: this.chart.plotLeft + this.chart.plotWidth / 2 - labelWidth / 2,
        y: this.chart.plotTop + this.chart.plotHeight / 2 - labelHeight / 2,
      };
    },
  },

  pane: {
    startAngle: 0,
    endAngle: 360,
    background: [
      {
        outerRadius: '112%',
        innerRadius: '88%',
        backgroundColor: trackColors[0],
        borderWidth: 0,
      },
    ],
  },

  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 0,
    tickPositions: [],
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        enabled: false,
      },
      linecap: 'round',
      stickyTracking: false,
      rounded: true,
    },
  },

  series: [
    {
      data: [
        {
          color: Highcharts.getOptions().colors[0],
          radius: '112%',
          innerRadius: '88%',
          y:
            (solidgaugeData['Totalfaultreports'] / 100) *
            solidgaugeData['Routereported'],
        },
      ],
      custom: {
        icon: 'filter',
        iconColor: '#303030',
      },
    },
  ],
});

// 前一日勾稽案件數
const formNoTrackingData = lineChartsData.Date.map((dateStr, i) => [
  new Date(dateStr).getTime(),
  lineChartsData.FormNoTracking[i],
]);

const startEndMismatchData = lineChartsData.Date.map((dateStr, i) => [
  new Date(dateStr).getTime(),
  lineChartsData.StartEndMismatch[i],
]);

Highcharts.addEvent(Highcharts.Point, 'click', function () {
  if (this.series.options.className.indexOf('popup-on-click') !== -1) {
    const chart = this.series.chart;
    const date = chart.time.dateFormat('%Y/%m/%d', this.x);
    const text = `<b>${date}</b><br/>${this.y} ${this.series.name}`;

    const anchorX = this.plotX + this.series.xAxis.pos;
    const anchorY = this.plotY + this.series.yAxis.pos;
    const align = anchorX < chart.chartWidth - 200 ? 'left' : 'right';
    const x = align === 'left' ? anchorX + 10 : anchorX - 10;
    const y = anchorY - 30;
    if (!chart.sticky) {
      chart.sticky = chart.renderer
        .label(text, x, y, 'callout', anchorX, anchorY)
        .attr({
          align,
          fill: 'rgba(0, 0, 0, 0.75)',
          padding: 10,
          zIndex: 7,
        })
        .css({
          color: 'white',
        })
        .on('click', function () {
          chart.sticky = chart.sticky.destroy();
        })
        .add();
    } else {
      chart.sticky
        .attr({ align, text })
        .animate({ anchorX, anchorY, x, y }, { duration: 250 });
    }
  }
});

Highcharts.setOptions({
  time: {
    useUTC: false,
  },
});

Highcharts.chart('lineCharts', {
  chart: {
    scrollablePlotArea: {
      minWidth: 700,
    },
  },

  title: {
    text: '前一日勾稽案件數',
    align: 'center',
  },

  xAxis: {
    type: 'datetime',
    tickInterval: 7 * 24 * 3600 * 1000,
    tickWidth: 0,
    gridLineWidth: 1,
    labels: {
      align: 'left',
      x: 3,
      y: -3,
      formatter: function () {
        const date = new Date(this.value);
        return Highcharts.dateFormat('%Y/%m/%d', date.getTime());
      },
    },
  },

  yAxis: {
    title: {
      text: '案件數',
    },
    labels: {
      format: '{value:.,0f}',
      align: 'left',
      x: 3,
      y: 16,
    },
  },

  tooltip: {
    xDateFormat: '%Y/%m/%d',
    fixed: true,
    shared: true,
    crosshairs: true,
  },

  legend: {
    align: 'left',
    verticalAlign: 'top',
    borderWidth: 0,
  },

  plotOptions: {
    series: {
      cursor: 'pointer',
      className: 'popup-on-click',
      marker: {
        lineWidth: 1,
        radius: 4,
      },
    },
  },

  series: [
    {
      name: '有表單無軌跡',
      data: formNoTrackingData,
      lineWidth: 4,
      className: 'popup-on-click',
    },
    {
      name: '起迄點不符',
      data: startEndMismatchData,
      className: 'popup-on-click',
    },
  ],
});

// 當月各車機之妥善率
const vendors = Object.keys(comparisonData.Vendor);

// 建立資料：每個點都要有 `name` 欄位，以便 shared tooltip 正確配對
const currentMonthData = vendors.map((vendor) => ({
  name: vendor,
  y: comparisonData.Vendor[vendor][0][0],
  grade: comparisonData.Vendor[vendor][0][1],
}));

const previousMonthData = vendors.map((vendor) => ({
  name: vendor,
  y: comparisonData.Vendor[vendor][1][0],
  grade: comparisonData.Vendor[vendor][1][1],
}));

const chart = Highcharts.chart('comparison', {
  chart: {
    type: 'column',
  },
  title: {
    text: '當月各車機之妥善率',
    align: 'center',
  },
  plotOptions: {
    series: {
      grouping: false,
      borderWidth: 0,
    },
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    shared: true,
    useHTML: true,
    formatter: function () {
      const points = this.points;
      let tooltip = `<b>${points[0].key}</b><br/>`;
      points.forEach((p) => {
        tooltip += `<span style="color:${p.color}">\u25CF</span> ${p.series.name}:
          <b>${p.y}%</b> (等級: ${p.point.grade})<br/>`;
      });
      return tooltip;
    },
  },
  xAxis: {
    type: 'category',
    categories: vendors,
    labels: {
      style: {
        textAlign: 'center',
      },
    },
  },
  yAxis: {
    title: {
      text: '妥善率 (%)',
    },
    max: 100,
  },
  series: [
    {
      name: '9 月',
      id: 'main',
      dataSorting: {
        enabled: true,
        matchByName: true,
      },
      dataLabels: {
        enabled: true,
        inside: true,
        formatter: function () {
          return this.point.grade;
        },
        style: {
          fontSize: '16px',
        },
      },
      data: currentMonthData,
    },
    {
      name: '8 月',
      color: 'rgba(158, 159, 163, 0.5)',
      pointPlacement: -0.2,
      linkedTo: 'main',
      data: previousMonthData,
    },
  ],
  exporting: {
    allowHTML: true,
  },
});

// locations.forEach((location) => {
//   const btn = document.getElementById(location.year);

//   btn.addEventListener('click', () => {
//     document.querySelectorAll('.buttons button.active').forEach((active) => {
//       active.className = '';
//     });
//     btn.className = 'active';

//     chart.update(
//       {
//         title: {
//           text: '二月各車機之妥善率',
//         },
//         series: [
//           {
//             name: location.year - 4,
//             data: dataPrev[location.year].slice(),
//           },
//           {
//             name: location.year,
//             data: getData(data[location.year]).slice(),
//           },
//         ],
//       },
//       true,
//       false,
//       {
//         duration: 800,
//       }
//     );
//   });
// });
