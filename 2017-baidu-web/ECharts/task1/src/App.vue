<template>
  <div id="app">
    <histogram class="histogram"></histogram>
    <line-chart></line-chart>
  </div>
</template>

<script type="text/ecmascript-6">
  import histogram from "./components/histogram.vue";
  import linechart from "./components/linechart.vue";

  export default{
    components:{
      'histogram':histogram,
      'line-chart':linechart
    }
  };
</script>

<style>

</style>
