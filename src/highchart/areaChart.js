
import GenreMaker from '../highchart/genreMaker';
import * as DataMaker from '../highchart/highchartData';

var AreaChart = class AreaChart extends GenreMaker {


  getChart(subGenre,data){

    var chart = this.createChart(subGenre);

    return chart;
  }

  createChart(){
    var chart = anychart.area();
    return chart;
  }
};



GenreMaker.area = AreaChart;

export var AreaChart;
