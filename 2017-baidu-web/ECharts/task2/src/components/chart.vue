<template>
  <div id="chart">{{ name }}</div>
</template>

<script type="text/ecmascript-6">
  const echarts = require('echarts/lib/echarts');

  export default{
    data(){
      return {
        name: 'chart',
        options: {
          color:['#33748a','#33b6e3'],
          backgroundColor: 'rgb(215,228,235)',
          title: [
            {
              top:'2%',
              left:'10%',
              text: 'What`s my credit score?',
              textStyle: {
                color: '#333',
                fontWeight: 'bold',
                fontFamily: 'Microsoft YaHei',
                fontSize: '24'
              },
              subtext: 'Puerto Rico,% decrease on a year earlier',
              subtextStyle: {
                color: '#333',
                fontFamily: 'Microsoft YaHei',
                fontSize: '16'
              }
            },{
              left:'10%',
              bottom:'2%',
              text:'Sources:World Bank;Census Bureau;EIU',
              textStyle: {
                fontWeight:'500',
                fontSize:'20'
              }
            }
          ],
          legend: {
            top: '14%',
            left:'10%',
            data: ['Population', 'GDP'],
            align: 'left'
          },
          grid: {
            top: '20%',
            left: '10%',
            right: '10%',
            bottom: '15%'
          },
          tooltip: {},
          xAxis: {
            data: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
            position: 'bottom',
            top: '150'
          },
          yAxis: {
            data: [0, 1, 2, 3],
            position: 'right',
            inverse: true,
            splitArea: {
              show: true
            }
          },
          series: [{
            name: 'Population',
            type: 'bar',
            barWidth : 15,
            data: [0.3, 0.55, 0.5, 0.45, 0.43, 1.1, 1.2, 1.1, 1.6, 1.7]
          }, {
            name: 'GDP',
            type: 'bar',
            data: [0.8, 3.2, 1.8, 2.2, 2.6, 1.9, 2.7, 0.4, 0.9, 1]
          }],
          itemStyle: {
              width:'120'
          }
        }
      }
    },
    mounted(){
      this.myChart = echarts.init(document.querySelector('#chart'));
      this.myChart.setOption(this.options);
    }
  };
</script>

<style>
  #chart {
    width: 700px;
    height: 500px;
    margin: 20px auto 100px auto;
  }
</style>
