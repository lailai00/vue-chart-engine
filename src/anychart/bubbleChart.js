
import GenreMaker from '../anychart/genreMaker'; 

var BubbleChart = class BubbleChart extends GenreMaker {

    setData(data,state){
        super.setData(data,state);
        var subGenre = this.getSubGenre();
        
        this.chart.xAxis();
        this.chart.yAxis();
        if(this.ifSeries()){
            for (var series in this.data) {
                this.chart.bubble(this.data[series]);
            }
        }else{
            this.chart.bubble(this.data);      
        }
    }




    createChart(){
        var chart = anychart.cartesian();
        return chart;
    }; 
};


    
GenreMaker.bubble = BubbleChart;

export var BubbleChart;
