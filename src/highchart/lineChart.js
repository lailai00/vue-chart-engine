
import GenreMaker from '../highchart/genreMaker';
import * as DataMaker from '../highchart/highchartData';

var LineChart = class LineChart extends GenreMaker {


    createChart(subGenre){
        var chart = anychart.line();
        return chart;
    }


    getChart(subGenre,data){
        var chart = this.createChart(subGenre);
        if(subGenre=="line"){
            chart.line(data);
        }else if(subGenre=="spline"){
            chart.spline(data);
        }

        if(subGenre.indexOf("series")!=-1){
            for (var series in data) {
                if(subGenre=="series_line"){
                    chart.line(data[series]);
                }else if(subGenre=="series_spline"){
                    chart.spline(data[series]);
                }
            }
        }
        return chart;
    }

    getSeriesChart(){
        // var data = DataMaker.getData();
        // var chart = highchart.bar(data);
        // return chart;
    }

}



GenreMaker.line = LineChart;

export var LineChart;
