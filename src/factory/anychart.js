
import ChartMaker from '../factory/gbasechart'; 
import * as DataCollection from '../../static/dataCollection'; 
import BarChart from '../anychart/barChart'; 
import ColumnChart from '../anychart/columnChart'; 
import LineChart from '../anychart/lineChart';
import AreaChart from '../anychart/areaChart'; 
import PieChart from '../anychart/pieChart'; 
import BubbleChart from '../anychart/bubbleChart'; 
import GenreMaker from '../anychart/genreMaker'; 

var stage;
var AnyChart = class AnyChart extends ChartMaker {

    initial(state){
        this.xml = DataCollection.fetchAnychartXML();
    }
  
    draw(state){
        // this.JSONToVO(this.xml);
        // this.propsToVO(state.props);
        // var theme = state.theme.split('|')[0];;
        // var currentTheme = state.currentTheme;
        // var palette = state.palette;
        // var currentPalette = state.currentPalette;
        // // if (theme != currentTheme || palette != currentPalette || chartTypes != currentTypes || seriesCount != seriesCount) {
        // if (theme != currentTheme || palette != currentPalette) {
        //     currentPalette = palette;
        //     //currentSeriesCount = seriesCount;
        //     currentTheme = theme;
        //     anychart.theme(theme);
            this.updateChart(state);
        // }
        // this.setChartProperties();

    }

    updateChart(state){
        $("#container").empty();
        stage = acgraph.create('container');
        var genre = state.chartInfo.chart.genre;
        alert(genre);
        var obj = GenreMaker.factory(genre,state);
        this.chart = obj.getChart(state);
        if(this.chart){
            obj.setData(this.data,state);
        }else{
            this.chart = obj.setData(this.data,state);
        }

        this.changePalette(state);
        this.chart.container(stage).draw();
    }

    changePalette(state){
       // this.updateChart(state);
        var palette = anychart.palettes[state.palette];
        this.chart.palette(palette);
    }

    setTitle(title){
        this.title = title;
        this.chart.title(title);
    }


    JSONToVO(json){
       this.title = json.chart.title.text;
    }

    propsToVO(props){
        // let $ = require('jquery');
        // if(!$.isEmptyObject(props)){
        //     this.title = props.title.value;
        // }
    }


    setChartProperties(props){

        this.setTitle(this.title);
    }

    update(state){
         var theme = $('#themes-select').val().split('|')[0];
        var chartTypes = $chartTypes.val();
        var paletteName = $paletteSelect.val();


        var palette = anychart.palettes[paletteName];
        //var seriesCount = (paletteName == 'monochrome') ? 5 : 10;
        if (theme != currentTheme || palette != currentPalette || chartTypes != currentTypes || seriesCount != seriesCount) {
            currentPalette = palette;
            currentSeriesCount = seriesCount;
            currentTheme = theme;
            currentTypes = chartTypes;
            disposeCharts();
            anychart.theme(theme);
            updateCharts(palette, chartTypes, seriesCount);
        }
    }
};

ChartMaker.AnyChart = AnyChart;

export var AnyChart;