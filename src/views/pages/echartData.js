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
          // grid: {
          //   height: '50%'
          // },
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
          textStyle: {
            color: '#fff'
          },
          legend: {
            top: 10,
            data: ['feedin', 'generation', 'loads', 'gridConsumption'],
            formatter: name => {
              return this.$t('chart.' + name)
            },
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: params => {
              let { seriesName, name, value, marker } = params
              return this.$t('chart.' + seriesName) + '<br/>' + marker + name + ' : ' + value
            }
          },
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          },
          // grid: [{
          //   height: '55%'
          // }],
          yAxis: {
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              lineStyle: {
                color: ['#fff'],
                type: 'dotted',
                opacity: 0.4
              }
            }
          },
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {
              type: 'bar',
              name: 'feedin',
              data: [{ index: 1, value: 12 }, { index: 2, value: 34 }, { index: 3, value: 58 }]
            },
            {
              type: 'bar',
              name: 'generation',
              data: [{ index: 1, value: 54 }, { index: 2, value: 89 }, { index: 3, value: 90 }]
            },
            {
              type: 'bar',
              name: 'loads',
              data: [{ index: 1, value: 33 }, { index: 2, value: 66 }, { index: 3, value: 110 }]
            },
            {
              type: 'bar',
              name: 'gridConsumption',
              data: [{ index: 1, value: 55 }, { index: 2, value: 33 }, { index: 3, value: 100 }]
            }
          ]
        }
      }
    }
  }
}
