
import GenreMaker from '../anychart/genreMaker'; 

var BarChart = class BarChart extends GenreMaker {

    setData(data,state){
        super.setData(data,state);
        if(this.ifSeries()){
            for (var series in this.data) {
                this.chart.bar(this.data[series]);
            }
        }else{
             this.chart.bar(this.data);
        }
    }

    createChart(){
        var chart = anychart.bar();
        if(this.if3D()){
            chart = anychart.bar3d();
          
        }
        return chart;
    }; 
};


    
GenreMaker.bar = BarChart;

export var BarChart;
