### **随便啰嗦一下**
&emsp;
小的前端入门选手一枚，最近在研究vue,然后又看到了百度前端学院的ECharts课程，所以就想着基于vue+webpack来学习一下ECharts。这边就提交一个在vue项目中使用ECharts的笔记吧，有说的不到位的地方希望各方大神能够指点迷津。
&emsp;
### **安装**
&emsp;
因为是基于webpack的，所以我们需要通过npm安装一下ECharts，官方给出的安装方法如下：
```
npm install echarts --save
```
&emsp;
这样就可以安装最新版本的echarts,如果你想要安装指定版本,可以通过修改package.json中的dependencies:
```
  "dependencies": {
    "echarts": "^3.4.0",//需要的版本号
    "vue": "^2.2.1",
    "vue-router": "^2.3.0"
  }
```
&emsp;
然后执行 **npm-install** 就可以安装指定版本的ECharts啦。
&emsp;
### **引入**
&emsp;
通过npm安装好了ECharts后，会存放在在node_modules中，我们可以在main.js中对其进行引用：
```
//main.js

import Vue from 'vue';
import Echarts from 'echarts';
import App from './App';

Vue.use(Echarts);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});


```
&emsp;
这样就可以成功引入ECharts了，接下来我们就去尝试一下将ECharts运用在vue的组件中。
&emsp;
### **vue组件中使用ECharts**
&emsp;
首先我们需要创建一个名为chart.vue的组件，并且在App.vue中引入该组件。

```
//App.vue

<template>
  <div id="app">
    <chart></chart>
  </div>
</template>

<script type="text/ecmascript-6">
  import chart from "./components/chart.vue";

  export default{
    components:{
      'chart':chart
    }
  };
</script>

```
&emsp;
接下来，我们需要在chart组件中通过 ==require(‘echarts')== 引入echarts主模块：

```
const echarts = require('echarts/lib/echarts');
```

&emsp;
紧接着就可以在monted()中初始化echarts实例和绘制图表了

```
  mounted(){
      this.myChart = echarts.init(document.querySelector('#chart'));
      this.myChart.setOption(this.options);
    }
```
&emsp;
通过series的type类型可以绘制不同类型的图表，bar为柱状图，line为折线图，下面是chart组件：

```
//chart.vue

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

<style>
  #chart{
    width: 1000px;
    height: 500px;
    margin: 20px auto 100px auto;
  }
</style>

```
&emsp;
到此为止，我们已经将ECharts运用到了vue的组件中了，并且满足了在一个直角坐标系上同时显示折线图和柱状图的需求。
