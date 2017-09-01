
import GenreMaker from '../highchart/genreMaker';
import * as DataMaker from '../highchart/highchartData';


var BarChart = class BarChart extends GenreMaker {

    createChart(subGenre){
        var chart = anychart.bar();

        if(subGenre.indexOf("3d")!=-1){
            chart = anychart.bar3d();

        }

        return chart;
    }

    getChart(subGenre,data){

        var chart = this.createChart(subGenre);

        if(subGenre.indexOf("stacked")!=-1||subGenre=="series"){
             this.getSeriesChart(chart,data);

             if(subGenre.indexOf("percent")!=-1){
                chart.yScale().stackMode("percent");
             }else if(subGenre.indexOf("stacked")!=-1){
                chart.yScale().stackMode("value");
             }
        }else{
             chart.bar(data);
        }


        return chart;
    }


    getSeriesChart(chart,data){
        for (var series in data) {
            chart.bar(data[series]);
        }
    }

}



GenreMaker.bar = BarChart;

export var BarChart;
