
import ChartMaker from '../factory/gbasechart';

import * as DataManager from '../highchart/highchartData';
import BarChart from '../highchart/barChart';
import ColumnChart from '../highchart/columnChart';
import LineChart from '../highchart/lineChart';
import AreaChart from '../highchart/areaChart';
import PieChart from '../highchart/pieChart';
import BubbleChart from '../highchart/bubbleChart';
import GenreMaker from '../highchart/genreMaker';

var HighChart = class HighChart extends ChartMaker {

    draw(state){
  
        //$("#container").html("");
        // this.propsToVO(state.props);
        this.chart = this.createChartByGenre(state);
        //this.setChartProperties();
        this.chart.container('container');
        function chart3(){
          var dataType = state.subChart.highdataType;
          var data = DataManager.getData(dataType);
          //data.title.text = state.props.title.value;
          if(state.chart.genre == "line")
          {
            data.chart.type="line";
            if(dataType=='spline' || dataType=='series_spline')
            {
              data.chart.type="spline";
            }
          }

          if(state.chart.genre == "bar")
          {
            data.chart.type="bar";
            if(dataType=='percent_stacked')
            {
              data.plotOptions={bar:{stacking:'percent'}};
            }

          }

          // if(state.chartInfo.chart.genre == "pie")
          // {
          //   data.chart.type="pie";
          // }
          //
          // if(state.chartInfo.chart.genre == "area")
          // {
          //   data.chart.type="area";
          // }

          var chart = new Highcharts.Chart(data);
        }
        $(function () {
            chart3();
        });
        this.chart.draw();
    

    }

    setTitle(title){
        this.title = title;
        this.chart.title(title);
    }

    JSONToVO(json){
       this.title = json.chart.title.text;
    }

    propsToVO(props){
        this.title = props.title.value;
    }

    createChartByGenre(chartInfo){
        var genre = chartInfo.chart.genre;
        var subGenre = chartInfo.subChart.genre;
        var dataType = chartInfo.subChart.highdataType;
        //var data = DataManager.getData(dataType);
        //return GenreMaker.factory(genre).getChart(subGenre,data);
        return GenreMaker.factory(genre).getChart(subGenre,"");
    }

    setChartProperties(props){
        this.setTitle(this.title);
    }
};

ChartMaker.HighChart = HighChart;

export var HighChart;
