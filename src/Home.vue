<template>
<div>

</div>

</template>
<script>
  import ChartMaker from './factory/gbasechart'
  import AnyChart from './factory/anychart'
  import HighChart from './factory/highchart'
  import EChart from './factory/echart'
import anychart from 'anychart'
  export default {
        name : 'Home',
        data() {
        return {
  
          branches: ['AnyChart', 'HighChart', 'EChart'],
          currentBranch: 'AnyChart',
      
          currentGenre: 'bar',
     
          }
        },
    created: function() {
      this.drawChart();
    },


    methods: {

      drawChart:function(){


    var state =   {"chartInfo":{
      "chart":{"code": "140000",
    "chart": "14",
    "subChart": "00",
    "name": "面积图",
    "genre":"area",
    "level": 1},

  "subChart":{
  "code": "140100",
  "chart": "14",
  "subChart": "01",
  "name": "面积图",
  "genre":"area",
  "dataType":"simple",
  "highdataType":"areasimple",
  "isSeries":false,
  "level": 2
}
 }};


    var chart = ChartMaker.factory("AnyChart");
  

   chart.draw(state); 



  
      },
 
    },


    }


</script>
