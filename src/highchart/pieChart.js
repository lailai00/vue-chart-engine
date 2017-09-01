
import GenreMaker from '../highchart/genreMaker';
import * as DataMaker from '../highchart/highchartData';

var PieChart = class PieChart extends GenreMaker {


    getChart(subGenre,data){

      var chart = this.createChart(subGenre);
      //chart.pie(data);
      return chart;
    }

    createChart(){
      var chart = anychart.pie();
      return chart;
    }
};



GenreMaker.pie = PieChart;

export var PieChart;
