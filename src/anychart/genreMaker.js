

export default class GenreMaker {
  constructor(state) {
    this.chart = null;
    this.data = null;
    this.is3D = state.is3D;
    this.isSeries = state.chartInfo.subChart.isSeries;
    this.subGenre = state.chartInfo.subChart.genre;
    this.genre = state.chartInfo.chart.genre;
  }

  static factory(type,state) {
    return new GenreMaker[type](state);
  }  

  ifSeries(){
    //return state.chartInfo.subChart.isSeries;
    return this.isSeries;
  }

  getGenre(){
    return this.genre;
  }

  getSubGenre(state){
    //return state.chartInfo.subChart.genre;
    return this.subGenre;
  }

  if3D(){  
    return this.is3D;
  }

  setData(totalData,state){
        //this.data = data;
     //   var genre = this.getGenre(state);
        var subGenre = this.getSubGenre(state);
        var dataType = state.chartInfo.subChart.dataType;
        var data = totalData.normalData;

        if(this.genre=="bubble"){  
          // switch(dataType){
          //   case "simple":
          //     data = totalData.bubble1;
          //     break;
          //   case "series":
          //           data1 = totalData.bubble1;
          //           data2 = totalData.bubble2;
          //           data = [data1,data2];
          //     break;
          //   default:
          // }
          if(this.isSeries){
            var data1 = anychart.data.set(totalData.bubble1);
            var data2 = anychart.data.set(totalData.bubble2);
            data = [data1,data2];
          }else{
            data = totalData.bubble1;
          }

        }else if(this.genre=="heatmap"){
            data =totalData.heatMapData;
        }else if(this.genre=="marker"){
            data = totalData.markerData;
        }else if(this.genre.indexOf("range")!=-1){
            data = totalData.rangeData;
        }else{
          switch(dataType){
            case "simple":
              data = totalData.normalData;
              break;
            case "stacked":
            case "percent_stacked":
            case "series":
                    var seriesData = anychart.data.set(totalData.stackedData);
                    var seriesData_1 = seriesData.mapAs({x: 0, value: 1});
                    var seriesData_2 = seriesData.mapAs({x: 0, value: 2});
                    var seriesData_3 = seriesData.mapAs({x: 0, value: 3});
                    data = [seriesData_1,seriesData_2,seriesData_3];
              break;
            default:
            
          }
        }



        this.data = data;
       
    }


  
      getChart(state){ 

        var subGenre = state.chartInfo.subChart.genre;

        var chart = this.createChart();

        if(subGenre.indexOf("stacked")!=-1||subGenre=="series"){
            // this.getSeriesChart(chart,data);
           
             if(subGenre.indexOf("percent")!=-1){
                chart.yScale().stackMode("percent");
             }else if(subGenre.indexOf("stacked")!=-1){
                chart.yScale().stackMode("value");
             }
        }
        this.chart = chart;
        return chart;
    };
} 