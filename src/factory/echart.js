
import ChartMaker from '../factory/gbasechart';

import * as DataManager from '../echart/echartData';
import BarChart from '../echart/barChart';
import ColumnChart from '../echart/columnChart';
import LineChart from '../echart/lineChart';
import AreaChart from '../echart/areaChart';
import GenreMaker from '../echart/genreMaker';

var EChart = class EChart extends ChartMaker {

    draw(state){
        console.log("FFF");
        //$("#container").html("");
        //this.propsToVO(state.props);
        this.chart =  this.createChartByGenre(state);
        //this.setChartProperties();


        //  // 基于准备好的dom，初始化echarts实例
        //  var element = document.getElementById("container");
        //  // alert(element);
        //  // element.id="container";


        // var myChart = echarts.init(element);

        // // 指定图表的配置项和数据
        // var option = {
        //     title: {
        //         text: 'ECharts 入门示例'
        //     },
        //     tooltip: {},
        //     legend: {
        //         data:['销量']
        //     },
        //     xAxis: {
        //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        //     },
        //     yAxis: {},
        //     series: [{
        //         name: '销量',
        //         type: 'bar',
        //         data: [5, 20, 36, 10, 10, 20]
        //     }]
        // };

        // // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
    }

    setTitle(title){
        this.title = title;
        if(this.chart != "")
        {
          this.chart.setOption({title : {text : title}});
        }

    }

    propsToVO(props){
        this.title = props.title.value;
    }

    createChartByGenre(chartInfo){
        var genre = chartInfo.chart.genre;
        var subGenre = chartInfo.subChart.genre;
        console.log("createChartByGenre");
        return GenreMaker.factory(genre).getChart(subGenre,"");
    }

    setChartProperties(props){
        this.setTitle(this.title);
    }
};

ChartMaker.EChart = EChart;

export var EChart;
