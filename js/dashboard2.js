// 基本使用：
/*
// 初始化圖表管理器
 const chartManager = new ChartManager();
// 設定 API responseData
 chartManager.setResponseData(responseData);

// 渲染單個圖表
 chartManager.renderChart('stackedColumn', 'chart-container-id');

// 使用內建的初始化函數
 fetch('/api/dashboard-data')
   .then(response => response.json())
   .then(responseData => {
     const chartManager = initializeCharts(responseData);
   });
*/

// 範例調用：
/*
fetch('/api/dashboard-data')
  .then(response => response.json())
  .then(responseData => {
    const chartManager = init(responseData);

    // 如果需要後續更新某個圖表
    // chartManager.updateChart('stackedColumn', newData);
  });
*/

// 圖表配置模組
const ChartConfigs = {
  // 目前行駛中的總車輛數 - 堆疊柱狀圖
  stackedColumn: {
    getOptions: (data) => ({
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
        categories: Array.from({ length: 24 }, (_, i) =>
          String(i).padStart(2, '0')
        ),
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
          data: data.NoFormVehicleCount,
        },
        {
          name: '有表單車輛數',
          data: data.FormVehicleCount,
        },
      ],
    }),
  },

  // 目前申報運送表單數 - 堆疊面積圖
  stackedArea: {
    getOptions: (data) => ({
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
        max: data.MaxFormCount,
      },
      tooltip: {
        shared: true,
        headerFormat:
          '<span style="font-size:12px"><b>{point.key}時</b></span><br>',
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        series: {
          pointStart: 0,
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
          data: data.UndeliveredForm,
        },
        {
          name: '運送中表單 DeliveringForm',
          data: data.DeliveringForm,
        },
        {
          name: '已完成運送表單 DeliveredForm',
          data: data.DeliveredForm,
        },
      ],
    }),
  },

  // 當日累積載運量 - 打包氣泡圖
  splitPackedBubble: {
    getOptions: (data) => ({
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
            dragBetweenSeries: false,
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
      series: data.categories,
    }),
  },

  // 目前正式核可車輛數 - 混合圖表
  sameXaxisDifferentIntervals: {
    getOptions: (data) => {
      // 動態計算 diffPer7Days
      const diffPer7Days = [];
      const interval = 7;
      for (let i = 0; i < data.Date.length; i += interval) {
        const startIndex = i;
        const endIndex = Math.min(i + interval - 1, data.Date.length - 1);
        const centerIndex = Math.floor((startIndex + endIndex) / 2);
        const diff =
          data.TotalVehicleCount[endIndex] - data.TotalVehicleCount[startIndex];
        const range = `${data.Date[startIndex]} - ${data.Date[endIndex]}`;

        diffPer7Days.push({
          x: centerIndex,
          y: diff,
          range: range,
        });
      }

      return {
        title: {
          text: '目前正式核可車輛數',
        },
        xAxis: {
          categories: data.Date,
          title: {
            text: '日期',
          },
        },
        yAxis: [
          {
            title: {
              text: '車輛數',
            },
            min: Math.min(...data.TotalVehicleCount) - 5,
            max: Math.max(...data.TotalVehicleCount) + 5,
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
            data: data.TotalVehicleCount,
            color: '#434348',
            yAxis: 0,
            tooltip: {
              pointFormatter: function () {
                return `<b>${this.series.name}</b><br> ${this.y}`;
              },
            },
          },
        ],
      };
    },
  },

  // 前一日故障報備回報路線車輛數 - 實心儀表盤
  solidgauge: {
    getOptions: (data) => {
      const defaultColors = [
        '#7cb5ec',
        '#434348',
        '#90ed7d',
        '#f7a35c',
        '#8085e9',
      ];
      const trackColors = (Highcharts.getOptions().colors || defaultColors).map(
        (color) => new Highcharts.Color(color).setOpacity(0.3).get()
      );

      return {
        chart: {
          type: 'solidgauge',
        },
        title: {
          text: '前一日車機無異常或已路線報備車輛情形',
        },
        tooltip: {
          useHTML: true,
          backgroundColor: 'none',
          borderWidth: 0,
          shadow: false,
          style: {
            fontSize: '20px',
          },
          formatter: function () {
            const point = this.point;
            const index = point.index;
            let value, totalValue, label;

            if (index === 0) {
              value = data.PreTotalreports - data.Totalfaultreports;
              totalValue = data.PreTotalreports;
              label = '車機正常運作率';
            } else {
              value = data.Routereported;
              totalValue = data.Totalfaultreports;
              label = '已完成路線報備率';
            }

            return `
              <div>
                <div class="text-center fw-bold" style="color: ${point.color}">
                  ${label}
                </div>
                <div class="text-center fw-bold" style="color: ${point.color}">
                  ${value}/${totalValue}
                </div>
              </div>
            `;
          },
          positioner: function (labelWidth, labelHeight) {
            return {
              x:
                this.chart.plotLeft + this.chart.plotWidth / 2 - labelWidth / 2,
              y:
                this.chart.plotTop +
                this.chart.plotHeight / 2 -
                labelHeight / 2,
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
        yAxis: [
          {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: [],
          },
        ],
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
                  data.PreTotalreports > 0
                    ? ((data.PreTotalreports - data.Totalfaultreports) /
                        data.PreTotalreports) *
                      100
                    : 0,
                yAxis: 0,
              },
              {
                color: Highcharts.getOptions().colors[1],
                radius: '87%',
                innerRadius: '63%',
                y:
                  data.Totalfaultreports > 0
                    ? (data.Routereported / data.Totalfaultreports) * 100
                    : 0,
                yAxis: 1,
              },
            ],
          },
        ],
      };
    },
  },

  // 前一日勾稽案件數 - 時間序列線圖
  lineCharts: {
    getOptions: (data) => {
      const formNoTrackingData = data.Date.map((dateStr, i) => [
        new Date(dateStr).getTime(),
        data.FormNoTracking[i],
      ]);

      const startEndMismatchData = data.Date.map((dateStr, i) => [
        new Date(dateStr).getTime(),
        data.StartEndMismatch[i],
      ]);

      return {
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
          reversed: true,
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
      };
    },
  },

  // 當月各車機之妥善率 - 比較柱狀圖
  comparison: {
    getOptions: (data, vendors, currentMonth = 9, previousMonth = 8) => {
      const currentMonthData = vendors.map((vendor) => ({
        name: vendor,
        y: data.Vendor[vendor][0]?.[0] ?? 0,
        grade: data.Vendor[vendor][0]?.[1] ?? '無',
      }));

      const previousMonthData = vendors.map((vendor) => ({
        name: vendor,
        y: data.Vendor[vendor][1]?.[0] ?? 0,
        grade: data.Vendor[vendor][1]?.[1] ?? '無',
      }));

      return {
        chart: {
          type: 'column',
          height: 400,
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
            const points = this.points || [];
            if (!points.length) return false;
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
            rotation: -45,
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
            name: `${currentMonth} 月`,
            id: 'main',
            dataSorting: {
              enabled: false,
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
            name: `${previousMonth} 月`,
            color: 'rgba(158, 159, 163, 0.5)',
            pointPlacement: -0.2,
            linkedTo: 'main',
            data: previousMonthData,
          },
        ],
        exporting: {
          allowHTML: true,
        },
      };
    },
  },
};

// 圖表管理
class ChartManager {
  constructor() {
    this.charts = {};
    this.responseData = null;
  }

  // 設定 API 響應數據
  setResponseData(data) {
    this.responseData = data;
  }

  // 渲染單個圖表
  renderChart(chartType, containerId, customData = null) {
    const config = ChartConfigs[chartType];
    if (!config) {
      console.error(`Chart type "${chartType}" not found`);
      return;
    }

    let data;
    let options;

    // 根據圖表類型選擇對應的數據
    switch (chartType) {
      case 'stackedColumn':
        data = customData || this.responseData?.TotalVehiclesCurrentlyOperating;
        break;
      case 'stackedArea':
        data =
          customData || this.responseData?.TotalTransportFormsCurrentlyReported;
        break;
      case 'splitPackedBubble':
        data = customData || this.responseData?.DailyAccumulatedFreightVolume;
        break;
      case 'sameXaxisDifferentIntervals':
        data = customData || this.responseData?.TotalOfficiallyApprovedVehicles;
        break;
      case 'solidgauge':
        data =
          customData ||
          this.responseData?.PreviousDayFaultReportedRouteVehicles;
        options = config.getOptions(data);
        break;
      case 'lineCharts':
        data = customData || this.responseData?.PreviousDayAuditedCases;
        break;
      case 'comparison':
        data =
          customData || this.responseData?.MonthlyVehicleDeviceReliabilityRate;
        const vendors = Object.keys(data.Vendor);
        options = config.getOptions(
          data,
          vendors,
          data.Month[0],
          data.Month[1]
        );
        break;
    }

    if (!data) {
      console.error(`No data available for chart type "${chartType}"`);
      return;
    }

    // 如果沒有預設的 options，則獲取配置
    if (!options) {
      options = config.getOptions(data);
    }

    // 渲染圖表
    const chart = Highcharts.chart(containerId, options);
    this.charts[containerId] = chart;

    return chart;
  }

  // 更新圖表數據
  updateChart(containerId, newData) {
    const chart = this.charts[containerId];
    if (chart) {
      // 根據圖表類型更新數據
      chart.series.forEach((series, index) => {
        if (newData[index]) {
          series.setData(newData[index], false);
        }
      });
      chart.redraw();
    }
  }

  // 銷毀圖表
  destroyChart(containerId) {
    if (this.charts[containerId]) {
      this.charts[containerId].destroy();
      delete this.charts[containerId];
    }
  }
}

// 設定比較圖表的分頁功能
function setupComparisonCharts(chartManager, comparisonData) {
  const vendors = Object.keys(comparisonData.Vendor);
  const splitPoint = Math.ceil(vendors.length / 2);

  // 渲染第一頁
  chartManager.renderChart('comparison', 'comparison1', {
    ...comparisonData,
    Vendor: Object.fromEntries(
      Object.entries(comparisonData.Vendor).slice(0, splitPoint)
    ),
  });

  // 渲染第二頁
  chartManager.renderChart('comparison', 'comparison2', {
    ...comparisonData,
    Vendor: Object.fromEntries(
      Object.entries(comparisonData.Vendor).slice(splitPoint)
    ),
  });

  // 設定分頁按鈕事件
  setupComparisonButtons();
}

// 設定比較圖表按鈕
function setupComparisonButtons() {
  document.getElementById('comparison1').style.display = 'block';
  document.getElementById('comparison2').style.display = 'none';

  const buttons = document.querySelectorAll('.buttons [data-page]');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const page = e.target.dataset.page;

      document.querySelectorAll('.buttons button.active').forEach((active) => {
        active.className = '';
      });

      button.className = 'active';

      document.getElementById('comparison1').style.display =
        page === '1' ? 'block' : 'none';
      document.getElementById('comparison2').style.display =
        page === '2' ? 'block' : 'none';
    });
  });
}

// 設定點擊事件（用於線圖）
function setupLineChartEvents() {
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
}

// 初始化 Highcharts 設定
Highcharts.setOptions({
  time: {
    useUTC: false,
  },
});
