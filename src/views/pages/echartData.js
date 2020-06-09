export default {
  data () {
    return {
      echartData: {
        power: { // 折线图表
          textStyle: {
            color: '#fff'
          },
          legend: {
            type: 'plain',
            data: ['generationPower', 'feedinPower', 'loadsPower'],
            top: 10,
            formatter: name => {
              return this.$t('chart.' + name)
            },
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'axis',
            formatter: params => {
              let headLabel = ''
              let res = ''
              params.forEach(v => {
                !headLabel && (headLabel = v.axisValueLabel)
                res += '</br>' + v.marker + this.$t('chart.' + v.seriesName) + ' : ' + v.data[1]
              })
              return headLabel + res
            }
          },
          xAxis: {
            type: 'time',
            splitLine: {
              show: false
            },
            axisLabel: {
              // formatter: function (value) {
              //   return formatDate(value, 'MM-dd HH:mm')
              // }
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          },
          grid: {
            height: '50%'
          },
          // dataZoom: [{
          //   type: 'slider',
          //   show: true,
          //   xAxisIndex: [0],
          //   top: '80%',
          //   start: 0,
          //   end: 70
          // }],
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                color: ['#00BAFF'],
                type: 'dotted',
                opacity: 0.4
              }
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          },
          series: [
            {
              name: 'generationPower',
              data: [[1585190129697, 1020], [1585190139697, 932], [1585190149697, 901], [1585190159697, 934], [1585190169697, 1290], [1585190179697, 1330], [1585190189697, 1320]],
              type: 'line',
              smooth: true
            },
            {
              name: 'feedinPower',
              data: [[1585190129697, 1500], [1585190139697, 700], [1585190149697, 400], [1585190159697, 745], [1585190169697, 1000], [1585190179697, 1130], [1585190189697, 2020]],
              type: 'line',
              smooth: true
            },
            {
              name: 'loadsPower',
              data: [[1585190129697, 1720], [1585190139697, 832], [1585190149697, 501], [1585190159697, 334], [1585190169697, 1890], [1585190179697, 730], [1585190189697, 220]],
              type: 'line',
              smooth: true
            }
          ]
        },
        elec: { // 柱状图
          legend: {
            bottom: 10,
            data: [],
            formatter: name => {
              return this.$t('chart.' + name)
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: params => {
              let { seriesName, name, value, marker } = params
              return this.$t('chart.' + seriesName) + '<br/>' + marker + name + ' : ' + value
            }
          },
          // dataset: {
          //   dimensions: ['axis', 'generation', 'feed-in', 'loads', 'grid consumption'],
          //   source: [
          //     { axis: '01', 'generation': 43.3, 'feed-in': 85.8, 'loads': 93.7, 'grid consumption': 93.7 },
          //     { axis: '02', 'generation': 83.1, 'feed-in': 73.4, 'loads': 55.1, 'grid consumption': 93.7 },
          //     { axis: '03', 'generation': 86.4, 'feed-in': 65.2, 'loads': 82.5, 'grid consumption': 93.7 },
          //     { axis: '04', 'generation': 72.4, 'feed-in': 53.9, 'loads': 39.1, 'grid consumption': 93.7 },
          //     { axis: '05', 'generation': 73.4, 'feed-in': 53.9, 'loads': 39.1, 'grid consumption': 93.7 },
          //     { axis: '06', 'generation': 72.4, 'feed-in': 53.9, 'loads': 39.1, 'grid consumption': 93.7 },
          //     { axis: '07', 'generation': 76.4, 'feed-in': 53.9, 'loads': 39.1, 'grid consumption': 93.7 },
          //     { axis: '08', 'generation': 72.4, 'feed-in': 53.9, 'loads': 39.1, 'grid consumption': 93.7 }
          //   ]
          // },
          xAxis: {
            type: 'category',
            data: []
          },
          grid: [{
            height: '55%'
          }],
          dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            top: '80%',
            start: 0,
            end: 70
          }],
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            // {
            //   type: 'bar',
            //   name: 'feed-in',
            //   data: []
            // }
          ]
        }
      }
    }
  }
}
