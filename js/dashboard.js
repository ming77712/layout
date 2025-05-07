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

const solidgaugeData = {
  Routereported: 60,
  Noroutereported: 40,
  Totalfaultreports: 100,
};

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

const comparisonData = {
  Month: [1, 2],
  Devices: [
    { Name: '銳俤(Locator 690)', Month1: 'A+(96%)', Month2: 'A(90%)' },
    { Name: '易通(EC-912 4G)', Month1: 'A+(95%)', Month2: 'A+(99%)' },
    { Name: '航釱(H4G)', Month1: 'A+(99%)', Month2: 'A+(98%)' },
    { Name: '宇暘(J40)', Month1: 'A+(96%)', Month2: 'A(90%)' },
    { Name: '康訊(U3 LTE)', Month1: 'A+(99%)', Month2: 'B+(87%)' },
    { Name: '冠祺鴻(TP-458-4G)', Month1: 'C(79%)', Month2: 'A+(99%)' },
    { Name: '長輝資訊(CH-68-4G)', Month1: 'A+(96%)', Month2: 'A+(98%)' },
    { Name: '中興保全(MSM0901)', Month1: 'A+(98%)', Month2: 'A+(98%)' },
    { Name: '弋揚(EP-168-4G)', Month1: 'A+(98%)', Month2: 'A+(99%)' },
    { Name: '捷世林(JAS106)', Month1: 'C(79%)', Month2: 'A+(96%)' },
    { Name: '長輝資訊(D1-Plus)', Month1: 'A+(98%)', Month2: 'A+(96%)' },
    { Name: '富德爾(FT-168 4G)', Month1: 'B+(87%)', Month2: 'A+(95%)' },
    { Name: '天眼衛星(SE-401 4G)', Month1: 'A+(96%)', Month2: 'A+(95%)' },
    { Name: '康訊(U1 PLUS LTE)', Month1: 'A+(99%)', Month2: 'A+(99%)' },
    { Name: '弋揚(EDR-168 4G)', Month1: 'A(90%)', Month2: 'A+(95%)' },
    { Name: '中興保全(MSM0921)', Month1: 'A+(98%)', Month2: 'A+(98%)' },
  ],
};

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

// 未完成
// Highcharts.chart('sameXaxisDifferentIntervals', {
//   title: {
//     text: '目前正式核可車輛數',
//   },
//   series: [
//     {
//       type: 'column',
//       name: 'Mean per thirty years',
//       data: JSON.parse(document.getElementById('columnData').textContent),
//       pointRange: 30 * 365 * 24 * 36e5,
//       groupPadding: 0,
//       pointPadding: 0,
//       pointPlacement: -0.5,
//       tooltip: {
//         // Subtract 30 years from the year to get the start of the period
//         headerFormat:
//           '<span style="font-size: 0.8em;">' +
//           '{subtract (point.x:%Y) 30} - {point.x:%Y}</span><br>',
//       },
//     },
//     {
//       name: 'Annual mean',
//       data: JSON.parse(document.getElementById('lineData').textContent),
//       accessibility: {
//         description: `
//               A data series illustrating the same data as the first,
//               but at different time intervals
//           `,
//       },
//     },
//   ],
//   tooltip: {
//     valueSuffix: '°C',
//     valueDecimals: 2,
//   },
//   yAxis: {
//     accessibility: {
//       description: 'temperature',
//     },
//     minPadding: 0,
//     maxPadding: 0,
//     labels: {
//       format: '{value:.1f}°C',
//     },
//     name: 'Temperature change',
//     title: {
//       text: 'Temp anomaly (compared to 1951-1980 avg.)',
//     },
//   },
//   xAxis: {
//     endOnTick: true,
//     type: 'datetime',
//   },
// });

function renderIcons() {
  const chart = this;
  const centerX = chart.plotWidth / 2 + chart.plotLeft;
  const centerY = chart.plotHeight / 2 + chart.plotTop;
  const currentValue = solidgaugeData['Routereported'];
  const total = solidgaugeData['Totalfaultreports'];

  if (!chart.customTooltipLabel) {
    chart.customTooltipLabel = chart.renderer
      .label(
        `<span style="font-size: 2em; color: ${
          Highcharts.getOptions().colors[0]
        }; font-weight: bold; margin-right: 3rem;">${currentValue}/<br></span>

        <span style="font-size: 2em; color: ${
          Highcharts.getOptions().colors[0]
        }; font-weight: bold; margin-left: 3rem;">${total}</span>`,

        centerX - 50, // X position (adjust as needed)
        centerY, // Y position (initially centered)
        'rect',
        0,
        0,
        true
      )
      .css({
        fontSize: '36px',
        color: Highcharts.getOptions().colors[0],
        textAlign: 'center',
      })
      .attr({
        align: 'center',
        padding: 0,
        zIndex: 10,
      })
      .add();
  } else {
    chart.customTooltipLabel.attr({
      text: `<span style="font-size: 2em; color: ${
        Highcharts.getOptions().colors[0]
      }; font-weight: bold">${currentValue}<br>/${total}</span>`,
    });
  }

  chart.customTooltipLabel.align(
    {
      align: 'center',
      verticalAlign: 'middle',
      y: -80,
    },
    false,
    'spacingBox'
  );
}

const trackColors = Highcharts.getOptions().colors.map((color) =>
  new Highcharts.Color(color).setOpacity(0.3).get()
);

Highcharts.chart('solidgauge', {
  chart: {
    type: 'solidgauge',
    // height: '110%',
    events: {
      render: renderIcons,
    },
  },

  title: {
    text: '前一日故障報備回報路線車輛數',
    style: {
      fontSize: '24px',
    },
  },

  tooltip: {
    enabled: false,
  },

  pane: {
    startAngle: 0,
    endAngle: 360,
    background: [
      {
        // Track for Conversion
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

// A point click event that uses the Renderer to draw a label next to the point
// On subsequent clicks, move the existing label instead of creating a new one.
Highcharts.addEvent(Highcharts.Point, 'click', function () {
  if (this.series.options.className.indexOf('popup-on-click') !== -1) {
    const chart = this.series.chart;
    const date = chart.time.dateFormat('%A, %b %e, %Y', this.x);
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
          zIndex: 7, // Above series, below tooltip
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

// 未完成
Highcharts.chart('lineCharts', {
  chart: {
    scrollablePlotArea: {
      minWidth: 700,
    },
  },

  data: {
    csvURL: 'https://www.highcharts.com/samples/data/analytics.csv',
    beforeParse: function (csv) {
      return csv.replace(/\n\n/g, '\n');
    },
  },

  title: {
    text: '前一日勾稽案件數',
    align: 'center',
  },

  xAxis: {
    tickInterval: 7 * 24 * 3600 * 1000, // one week
    tickWidth: 0,
    gridLineWidth: 1,
    labels: {
      align: 'left',
      x: 3,
      y: -3,
    },
  },

  yAxis: [
    {
      // left y axis
      title: {
        text: null,
      },
      labels: {
        align: 'left',
        x: 3,
        y: 16,
        format: '{value:.,0f}',
      },
      showFirstLabel: false,
    },
    {
      // right y axis
      linkedTo: 0,
      gridLineWidth: 0,
      opposite: true,
      title: {
        text: null,
      },
      labels: {
        align: 'right',
        x: -3,
        y: 16,
        format: '{value:.,0f}',
      },
      showFirstLabel: false,
    },
  ],

  legend: {
    align: 'left',
    verticalAlign: 'top',
    borderWidth: 0,
  },

  tooltip: {
    fixed: true,
    shared: true,
    crosshairs: true,
  },

  plotOptions: {
    series: {
      cursor: 'pointer',
      className: 'popup-on-click',
      marker: {
        lineWidth: 1,
      },
    },
  },

  series: [
    {
      name: 'All sessions',
      lineWidth: 4,
      marker: {
        radius: 4,
      },
    },
    {
      name: 'New users',
    },
  ],
});

const dataPrev = {
  2020: [
    ['kr', 9],
    ['jp', 12],
    ['au', 8],
    ['de', 17],
    ['ru', 19],
    ['cn', 26],
    ['gb', 27],
    ['us', 46],
  ],
  2016: [
    ['kr', 13],
    ['jp', 7],
    ['au', 8],
    ['de', 11],
    ['ru', 20],
    ['cn', 38],
    ['gb', 29],
    ['us', 47],
  ],
  2012: [
    ['kr', 13],
    ['jp', 9],
    ['au', 14],
    ['de', 16],
    ['ru', 24],
    ['cn', 48],
    ['gb', 19],
    ['us', 36],
  ],
  2008: [
    ['kr', 9],
    ['jp', 17],
    ['au', 18],
    ['de', 13],
    ['ru', 29],
    ['cn', 33],
    ['gb', 9],
    ['us', 37],
  ],
  2004: [
    ['kr', 8],
    ['jp', 5],
    ['au', 16],
    ['de', 13],
    ['ru', 32],
    ['cn', 28],
    ['gb', 11],
    ['us', 37],
  ],
  2000: [
    ['kr', 7],
    ['jp', 3],
    ['au', 9],
    ['de', 20],
    ['ru', 26],
    ['cn', 16],
    ['gb', 1],
    ['us', 44],
  ],
};

const data = {
  2020: [
    ['kr', 6],
    ['jp', 27],
    ['au', 17],
    ['de', 10],
    ['ru', 20],
    ['cn', 38],
    ['gb', 22],
    ['us', 39],
  ],
  2016: [
    ['kr', 9],
    ['jp', 12],
    ['au', 8],
    ['de', 17],
    ['ru', 19],
    ['cn', 26],
    ['gb', 27],
    ['us', 46],
  ],
  2012: [
    ['kr', 13],
    ['jp', 7],
    ['au', 8],
    ['de', 11],
    ['ru', 20],
    ['cn', 38],
    ['gb', 29],
    ['us', 47],
  ],
  2008: [
    ['kr', 13],
    ['jp', 9],
    ['au', 14],
    ['de', 16],
    ['ru', 24],
    ['cn', 48],
    ['gb', 19],
    ['us', 36],
  ],
  2004: [
    ['kr', 9],
    ['jp', 17],
    ['au', 18],
    ['de', 13],
    ['ru', 29],
    ['cn', 33],
    ['gb', 9],
    ['us', 37],
  ],
  2000: [
    ['kr', 8],
    ['jp', 5],
    ['au', 16],
    ['de', 13],
    ['ru', 32],
    ['cn', 28],
    ['gb', 11],
    ['us', 37],
  ],
};

const countries = {
  kr: {
    name: 'South Korea',
    color: '#FE2371',
  },
  jp: {
    name: 'Japan',
    color: '#544FC5',
  },
  au: {
    name: 'Australia',
    color: '#2CAFFE',
  },
  de: {
    name: 'Germany',
    color: '#FE6A35',
  },
  ru: {
    name: 'Russia',
    color: '#6B8ABC',
  },
  cn: {
    name: 'China',
    color: '#1C74BD',
  },
  gb: {
    name: 'Great Britain',
    color: '#00A6A6',
  },
  us: {
    name: 'United States',
    color: '#D568FB',
  },
};

// Add upper case country code
for (const [key, value] of Object.entries(countries)) {
  value.ucCode = key.toUpperCase();
}

const getData = (data) =>
  data.map((point) => ({
    name: point[0],
    y: point[1],
    color: countries[point[0]].color,
  }));

const chart = Highcharts.chart('comparison', {
  chart: {
    type: 'column',
  },
  // Custom option for templates
  countries,
  title: {
    text: '二月各車機之妥善率',
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
    headerFormat:
      '<span style="font-size: 15px">' +
      '{series.chart.options.countries.(point.key).name}' +
      '</span><br/>',
    pointFormat:
      '<span style="color:{point.color}">\u25CF</span> ' +
      '{series.name}: <b>{point.y} medals</b><br/>',
  },
  xAxis: {
    type: 'category',
    max: 4,
    labels: {
      useHTML: true,
      animate: true,
      format:
        '{chart.options.countries.(value).ucCode}<br>' +
        '<span class="f32">' +
        '<span style="display:inline-block;height:32px;' +
        'vertical-align:text-top;" class="flag {value}">' +
        '</span></span>',
      style: {
        textAlign: 'center',
      },
    },
  },
  yAxis: [
    {
      title: {
        text: 'Gold medals',
      },
      showFirstLabel: false,
    },
  ],
  series: [
    {
      color: 'rgba(158, 159, 163, 0.5)',
      pointPlacement: -0.2,
      linkedTo: 'main',
      data: dataPrev[2020].slice(),
      name: '2016',
    },
    {
      name: '2020',
      id: 'main',
      dataSorting: {
        enabled: true,
        matchByName: true,
      },
      dataLabels: [
        {
          enabled: true,
          inside: true,
          style: {
            fontSize: '16px',
          },
        },
      ],
      data: getData(data[2020]).slice(),
    },
  ],
  exporting: {
    allowHTML: true,
  },
});

const locations = [
  {
    city: 'Tokyo',
    year: 2020,
  },
  {
    city: 'Rio',
    year: 2016,
  },
  {
    city: 'London',
    year: 2012,
  },
  {
    city: 'Beijing',
    year: 2008,
  },
  {
    city: 'Athens',
    year: 2004,
  },
  {
    city: 'Sydney',
    year: 2000,
  },
];

locations.forEach((location) => {
  const btn = document.getElementById(location.year);

  btn.addEventListener('click', () => {
    document.querySelectorAll('.buttons button.active').forEach((active) => {
      active.className = '';
    });
    btn.className = 'active';

    chart.update(
      {
        title: {
          text: '二月各車機之妥善率',
        },
        series: [
          {
            name: location.year - 4,
            data: dataPrev[location.year].slice(),
          },
          {
            name: location.year,
            data: getData(data[location.year]).slice(),
          },
        ],
      },
      true,
      false,
      {
        duration: 800,
      }
    );
  });
});
