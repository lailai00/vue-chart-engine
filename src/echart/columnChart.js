
import GenreMaker from '../echart/genreMaker';
import * as DataMaker from '../echart/echartData';


var ColumnChart = class ColumnChart extends GenreMaker {

  

    getChart(subGenre,data){

      echarts.init(document.getElementById('container')).dispose();


      var option = new Object();
      option.chart = new Object();
      option.title={text:"图形预览",x:'center'};
      option.tooltip={trigger:"axis"};
      option.yAxis=[{type:'value'}];

       var data = option;
      switch (subGenre) {
        case "column":
          option.xAxis=[{type:'category',data:['Department Stores1','Discount Stores','Specialty Stores','Juvenile Specialty','All other outlets']}];
          option.series=[{name:'蒸发量',type:'bar',data:[737166, 537166, 188662, 178662, 89000]}];
          data = option;
          break;

        case "series":
          option.xAxis=[{type:'category',data:['QTR1','QTR2','QTR3','QTR4']}];
          option.series=[{name:'A',type:'bar',data:[3.8,5.5,9.9,5.7]},{name:'b',type:'bar',data:[5.5,7.0,9.7,7.6]},{name:'c',type:'bar',data:[6.9,9.6,8.3,9.7]}];
          data = option;
          break;
        case "stacked":
          option.xAxis=[{type:'category',data:['QTR1','QTR2','QTR3','QTR4']}];
          option.series=[{name:'A',type:'bar',stack: '1',data:[3.8,5.5,9.9,5.7]},{name:'b',type:'bar',stack: '1',data:[5.5,7.0,9.7,7.6]},{name:'c',type:'bar',stack: '1',data:[6.9,9.6,8.3,9.7]}];
          data = option;
          break;
        default:

      }

          echarts.init(document.getElementById('container')).setOption(data);
          return echarts.init(document.getElementById('container'));
    }

}



GenreMaker.column = ColumnChart;

export var ColumnChart;
