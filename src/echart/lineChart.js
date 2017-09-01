
import GenreMaker from '../echart/genreMaker';

var LineChart = class LineChart extends GenreMaker {



  getChart(subGenre,data){

    echarts.init(document.getElementById('container')).dispose();


    var option = new Object();
    option.chart = new Object();
    option.title={text:"图形预览",x:'center'};
    option.tooltip={trigger:"axis"};
    option.yAxis=[{type:'value'}];

     var data = option;
    switch (subGenre) {
      case "line":
        option.xAxis=[{type:'category',data:['Department Stores1','Discount Stores','Specialty Stores','Juvenile Specialty','All other outlets']}];
        option.series=[{name:'蒸发量',type:'line',data:[737166, 537166, 188662, 178662, 89000]}];
        data = option;
        break;

      case "spline":

        option.xAxis=[{type:'category',data:['Department Stores1','Discount Stores','Specialty Stores','Juvenile Specialty','All other outlets']}];
        option.series=[{name:'蒸发量',type:'line',smooth:true,data:[737166, 537166, 188662, 178662, 89000]}];
        data = option;
        break;
      case "series_line":
        option.xAxis=[{type:'category',data:['QTR1','QTR2','QTR3','QTR4']}];
        option.series=[{name:'A',type:'line',data:[3.8,5.5,9.9,5.7]},{name:'b',type:'line',data:[5.5,7.0,9.7,7.6]},{name:'c',type:'line',data:[6.9,9.6,8.3,9.7]}];
        data = option;
        break;
      case "series_spline":
        option.xAxis=[{type:'category',data:['QTR1','QTR2','QTR3','QTR4']}];
        option.series=[{name:'A',type:'line',smooth:true,data:[3.8,5.5,9.9,5.7]},{name:'b',type:'line',smooth:true,data:[5.5,7.0,9.7,7.6]},{name:'c',type:'line',smooth:true,data:[6.9,9.6,8.3,9.7]}];
        data = option;
        break;
      default:

    }

        echarts.init(document.getElementById('container')).setOption(data);
        return echarts.init(document.getElementById('container'));
  }


}



GenreMaker.line = LineChart;

export var LineChart;
