
import GenreMaker from '../highchart/genreMaker';
import * as DataMaker from '../highchart/highchartData';

var BubbleChart = class BubbleChart extends GenreMaker {


    getChart(subGenre,data){

      var chart = this.createChart(subGenre);

      return chart;
    }

    createChart(){
      var chart = anychart.bubble();
      return chart;
    }
};



GenreMaker.bubble = BubbleChart;

export var BubbleChart;
