
import GenreMaker from '../anychart/genreMaker'; 

var PieChart = class PieChart extends GenreMaker {

    setData(data,state){
        super.setData(data,state);
        var subGenre = this.getSubGenre();

          if(subGenre=="pie"){
               this.chart = anychart.pie(this.data);
          }else if(subGenre=="doughnut"){
                
                this.chart = anychart.pie(this.data);
                this.chart.innerRadius("30%");
           }
           return this.chart;
    }




    createChart(){
        //var chart = anychart.pie();
        //return chart;
        return null;
    }; 
};


    
GenreMaker.pie = PieChart;

export var PieChart;
