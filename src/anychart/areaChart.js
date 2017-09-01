
import GenreMaker from '../anychart/genreMaker'; 

var AreaChart = class AreaChart extends GenreMaker {

    setData(data,state){
        super.setData(data,state);
            var subGenre = this.getSubGenre(state);
        if(this.ifSeries()){
             var chart = anychart.area();
            for (var series in this.data) {
                if(subGenre=="stacked_spline"){
                    this.chart.splineArea(this.data[series]);
                }else if(subGenre.indexOf("step")){
                    this.chart.stepArea(this.data[series]);
                }else{
                    this.chart.area(this.data[series]);
                }
            }
        }else{
        
            if(subGenre=="spline"){
                this.chart.splineArea(this.data);
            }else{
                this.chart.area(this.data);
            }
        }
    }




    createChart(){
        alert("~~~");
        var chart = anychart.area();
        if(this.if3D() && !this.ifSeries()){
            var chart = anychart.area3d();
        }
        
        return chart;
    }; 
};


    
GenreMaker.area = AreaChart;

export var AreaChart;
