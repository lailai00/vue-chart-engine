
import GenreMaker from '../anychart/genreMaker'; 

var LineChart = class LineChart extends GenreMaker {

  setData(data,state){
  
        super.setData(data,state);
        var subGenre = this.getSubGenre(state);
        if(this.ifSeries()){
            for (var series in this.data) {
                if(subGenre=="series_line"){
                    this.chart.line(this.data[series]);
                }else if(subGenre=="series_spline"){
                    this.chart.spline(this.data[series]);
                }
            }
        }else{
              
            if(subGenre=="line"){
                this.chart.line(this.data);
            }else if(subGenre=="spline"){
                this.chart.spline(this.data);
            }
        }
    }
    
    createChart(subGenre){
        var chart = anychart.line();
        return chart;
    } 
}


    
GenreMaker.line = LineChart;

export var LineChart;