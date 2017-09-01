
import GenreMaker from '../anychart/genreMaker'; 

var ColumnChart = class ColumnChart extends GenreMaker {

    createChart(){
        alert("createChart");
        var chart = anychart.column();

        if(this.if3D()){
            chart = anychart.column3d();
          
        }

        return chart;
    }

    setData(data,state){ 
        super.setData(data,state);
        if(this.ifSeries()){
               
            for (var series in this.data) {
             
                this.chart.column(this.data[series]);
            }
        }else{
             this.chart.column(this.data);
        }
    }
}


    
GenreMaker.column = ColumnChart;

export var ColumnChart;
