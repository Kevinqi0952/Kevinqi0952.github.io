<template>
<div id="line-chart">{{name}}</div>
</template>

<script type="text/ecmascript-6">
  const echarts = require('echarts/lib/echarts');

  export default{
    data(){
      return {
        name:"line-chart",
        options:{
          title: { text: '柱状图' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    mounted(){
      this.myChart = echarts.init(document.querySelector('#line-chart'));
      this.myChart.setOption(this.options);
    }
  };
</script>

<style>
  #line-chart{
    width: 1000px;
    height: 500px;
    margin: 20px auto 100px auto;
  }
</style>
