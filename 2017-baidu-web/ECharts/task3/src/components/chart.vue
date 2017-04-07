<template>
  <div id="chart">{{ name }}</div>
</template>

<script type="text/ecmascript-6">
  const echarts = require('echarts/lib/echarts');

  export default{
    data(){
      return {
        name: 'chart'

      }
    },
    methods: {},
    mounted(){
      function foo(str,a){
        eval( str ); //欺骗！
        console.log(a,b);
      }
      var b = 2;
      foo("var b = 3;",1);//
    }
    }
</script>

<style>
  #chart {
    width: 1000px;
    height: 500px;
    margin: 20px auto 100px auto;
  }
</style>
