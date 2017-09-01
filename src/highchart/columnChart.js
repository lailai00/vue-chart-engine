
import GenreMaker from '../highchart/genreMaker';
import * as DataMaker from '../highchart/highchartData';


var ColumnChart = class ColumnChart extends GenreMaker {

    createChart(subGenre){

        var chart = anychart.column();
        if(subGenre.indexOf("3d")!=-1){
            chart = anychart.column3d();

        }
        return chart;
    }

    getChart(subGenre,data){
         var chart = this.createChart(subGenre);

        if(subGenre.indexOf("stacked")!=-1||subGenre=="series"){
            for (var series in data) {
                chart.column(data[series]);
            }
            if(subGenre.indexOf("percent")!=-1){
                chart.yScale().stackMode("percent");
            }else if(subGenre.indexOf("stacked")!=-1){
                chart.yScale().stackMode("value");
            }
        }else{
            chart.column(data);
        }


        return chart;
    }

}



GenreMaker.column = ColumnChart;

export var ColumnChart;
