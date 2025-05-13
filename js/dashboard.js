// header nav bar start
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const tabsContainer = document.querySelector('.tabs');

  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      showTab(e.target.dataset.tab);
    });
  });

  tabsContainer.addEventListener('click', (e) => {
    const li = e.target.closest('.menu-section ul li');
    if (li) {
      document.querySelectorAll('.menu-section ul li').forEach((item) => {
        item.classList.remove('active');
      });

      li.classList.add('active');
    }
  });

  function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach((tab) => {
      tab.style.display = 'none';
    });

    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    document.getElementById(tabId).style.display = 'block';
    event.target.classList.add('active');
  }
});
// header nav bar end

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
  MaxFormCount: 300,
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
  TotalVehicleCount: [
    1707, 1709, 1709, 1707, 1712, 1714, 1721, 1721, 1721, 1726, 1731, 1731,
    1733, 1732, 1732, 1732, 1738, 1738, 1739, 1742, 1739, 1749, 1749, 1751,
    1750, 1741, 1733, 1733, 1740, 1748, 1748,
  ],
};

// 前一日故障報備回報路線車輛數
const solidgaugeData = {
  Routereported: 60,
  Noroutereported: 40,
  Totalfaultreports: 100,
  PreTotalreports: 300,
};

// 前一日勾稽案件數
const lineChartsData = {
  Date: [
    '2025/2/1',
    '2025/2/2',
    '2025/2/3',
    '2025/2/4',
    '2025/2/5',
    '2025/2/6',
    '2025/2/7',
    '2025/2/8',
    '2025/2/9',
    '2025/2/10',
    '2025/2/11',
    '2025/2/12',
    '2025/2/13',
    '2025/2/14',
    '2025/2/15',
    '2025/2/16',
    '2025/2/17',
    '2025/2/18',
    '2025/2/19',
    '2025/2/20',
    '2025/2/21',
    '2025/2/22',
    '2025/2/23',
    '2025/2/24',
    '2025/2/25',
    '2025/2/26',
    '2025/2/27',
    '2025/2/28',
    '2025/3/1',
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
  credits: {
    enabled: false,
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
    max: stackedAreaData['MaxFormCount'],
  },
  tooltip: {
    shared: true,
    headerFormat:
      '<span style="font-size:12px"><b>{point.key}時</b></span>' + '<br>',
  },
  credits: {
    enabled: false,
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
  credits: {
    enabled: false,
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

// 動態計算 diffPer7Days
const diffPer7Days = [];
const interval = 7; // 7 天為一個區間
for (
  let i = 0;
  i < sameXaxisDifferentIntervalsData.Date.length;
  i += interval
) {
  const startIndex = i;
  const endIndex = Math.min(
    i + interval - 1,
    sameXaxisDifferentIntervalsData.Date.length - 1
  );
  const centerIndex = Math.floor((startIndex + endIndex) / 2); // 計算中心點索引
  const diff =
    sameXaxisDifferentIntervalsData.TotalVehicleCount[endIndex] -
    sameXaxisDifferentIntervalsData.TotalVehicleCount[startIndex];
  const range = `${sameXaxisDifferentIntervalsData.Date[startIndex]} - ${sameXaxisDifferentIntervalsData.Date[endIndex]}`;

  diffPer7Days.push({
    x: centerIndex, // 中心點索引
    y: diff, // 7 天差值
    range: range, // 日期範圍
  });
}

// 目前正式核可車輛數
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
  yAxis: [
    {
      title: {
        text: '車輛數',
      },
      // Set min and max to ensure visibility of TotalVehicleCount
      min: Math.min(...sameXaxisDifferentIntervalsData.TotalVehicleCount) - 5,
      max: Math.max(...sameXaxisDifferentIntervalsData.TotalVehicleCount) + 5,
    },
    {
      title: {
        text: '七日車輛成長差',
      },
      opposite: true,
    },
  ],
  tooltip: {
    shared: false,
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      type: 'column',
      name: '七日車輛成長差',
      data: diffPer7Days,
      yAxis: 1,
      color: '#7cb5ec',
      pointWidth: 100,
      groupPadding: 0,
      pointPadding: 0,
      opacity: 0.5,
      tooltip: {
        pointFormatter: function () {
          return `<b>${this.series.name}</b><br>${this.range}: ${this.y}`;
        },
      },
    },
    {
      type: 'line',
      name: '總車輛數',
      data: sameXaxisDifferentIntervalsData.TotalVehicleCount,
      color: '#434348',
      yAxis: 0,
      tooltip: {
        pointFormatter: function () {
          return `<b>${this.series.name}</b><br> ${this.y}`;
        },
      },
    },
  ],
});

// 前一日故障報備回報路線車輛數

const defaultColors = ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9'];
const trackColors = (Highcharts.getOptions().colors || defaultColors).map(
  (color) => new Highcharts.Color(color).setOpacity(0.3).get()
);

Highcharts.chart('solidgauge', {
  chart: {
    type: 'solidgauge',
  },

  title: {
    text: '前一日故障報備回報路線車輛數',
  },

  tooltip: {
    useHTML: true,
    backgroundColor: 'none',
    borderWidth: 0,
    shadow: false,
    style: {
      fontSize: '48px',
    },
    formatter: function () {
      const point = this.point;
      const value = point.y;
      return `
        <div>
          <div style="font-weight: bold; color: ${point.color}">
            ${value}/</br>100
          </div>
        </div>
      `;
    },
    positioner: function (labelWidth, labelHeight) {
      return {
        x: this.chart.plotLeft + this.chart.plotWidth / 2 - labelWidth / 2,
        y: this.chart.plotTop + this.chart.plotHeight / 2 - labelHeight / 2,
      };
    },
  },

  credits: {
    enabled: false,
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
      {
        outerRadius: '87%',
        innerRadius: '63%',
        backgroundColor: trackColors[1],
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
          y: Math.round(
            ((solidgaugeData['PreTotalreports'] -
              solidgaugeData['Totalfaultreports']) /
              solidgaugeData['PreTotalreports']) *
              100
          ),
        },
        {
          color: Highcharts.getOptions().colors[1],
          radius: '87%',
          innerRadius: '63%',
          y: Math.round(
            (solidgaugeData['Routereported'] /
              solidgaugeData['Totalfaultreports']) *
              100
          ),
        },
      ],
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

  credits: {
    enabled: false,
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
  credits: {
    enabled: false,
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

const imageArea = document.querySelector('#imageArea');

imageArea.addEventListener('click', (e) => {
  if (e.target.dataset.city === undefined) return;
  console.log(e.target.dataset.city);
});
