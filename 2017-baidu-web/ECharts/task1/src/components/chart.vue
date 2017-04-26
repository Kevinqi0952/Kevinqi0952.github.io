<template>
 <div id="chart"></div>
</template>

<script type="text/ecmascript-6">
  const echarts = require('echarts/lib/echarts');

  export default{
    data(){
      return{
        name:'chart',
        options:{
          title: { text: 'CHART' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          },{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    mounted(){
      this.myChart = echarts.init(document.querySelector('#chart'));
      this.myChart.setOption(this.options);
    }
  };
</script>

<style scoped>
#chart {
  width: 100%;
  height: 600px;
}
</style>
