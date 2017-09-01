export var getData = function(dataType){
      var option = new Object();
      option.chart = new Object();
      option.chart.type="column";
      option.chart.renderTo="container";
      if (dataType == "simple" || dataType == "pie_simple")
      {
        option.series = new Array();
        option.series[0] = new Object();
        option.series[0].name="Department Stores1";
        option.series[0].data=[737166];

        option.series[1] = new Object();
        option.series[1].name="Discount Stores";
        option.series[1].data=[537166];

        option.series[2] = new Object();
        option.series[2].name="Specialty Stores";
        option.series[2].data=[188662];

        option.series[3] = new Object();
        option.series[3].name="Juvenile Specialty";
        option.series[3].data=[178662];

        option.series[4] = new Object();
        option.series[4].name="All other outlets";
        option.series[4].data=[89000];
      }
      else if(dataType == "simpleline" || dataType == "spline" || dataType == "areasimple") {
        option.series = new Array();
        option.series[0] = new Object();
        option.series[0].data=[737166, 537166, 188662, 178662, 89000];
      }
      else if(dataType.indexOf("3d") != -1) {
        option.series = new Array();
        option.series[0] = new Object();
        option.series[0].name="QTR1";
        option.series[0].data=[3.8, 5.5, 6.9];

        option.series[1] = new Object();
        option.series[1].name="QTR2";
        option.series[1].data=[5.5, 7.0, 9.6];

        option.series[2] = new Object();
        option.series[2].name="QTR3";
        option.series[2].data=[9.9, 9.7, 8.3];

        option.series[3] = new Object();
        option.series[3].name="QTR4";
        option.series[3].data=[5.7, 7.6, 9.7];
      }
      else if ( dataType == "bubblesimple" ) {
        option.series = new Array();
        option.series[0] = new Object();
        option.series[0].name="数列";
        option.series[0].data=[[2000,1200,3], [2001,800,1], [2002,1100,3],
        [2003,1500,2], [2004,921,4], [2005,1000,3], [2006,1400,2]];

      }
      else if ( dataType == "areastacked" || dataType == "areastacked_spline" || dataType=="areapercent_stacked" ){
        option.series = new Array();
        option.series[0] = new Object();
        option.series[0].name="QTR1";
        option.series[0].data=[3.8, 5.5, 6.9];

        option.series[1] = new Object();
        option.series[1].name="QTR2";
        option.series[1].data=[5.5, 7.0, 9.6];

        option.series[2] = new Object();
        option.series[2].name="QTR3";
        option.series[2].data=[9.9, 9.7, 8.3];

        option.series[3] = new Object();
        option.series[3].name="QTR4";
        option.series[3].data=[5.7, 7.6, 9.7];

      }
      else if ( dataType == "arearange" ) {

      }
      else {
        option.series = new Array();
        option.series[0] = new Object();
        option.series[0].name="QTR1";
        option.series[0].data=[3.8, 5.5, 6.9];

        option.series[1] = new Object();
        option.series[1].name="QTR2";
        option.series[1].data=[5.5, 7.0, 9.6];

        option.series[2] = new Object();
        option.series[2].name="QTR3";
        option.series[2].data=[9.9, 9.7, 8.3];

        option.series[3] = new Object();
        option.series[3].name="QTR4";
        option.series[3].data=[5.7, 7.6, 9.7];
      }

      option.title={title:"市场的份额"};
      option.xAxis={categories:['']};
      option.yAxis={title:{text:""}};

       var data = option;

    switch(dataType)
    {
      //普通柱状图
    case "simple":

      data = option;
      break;
      //堆叠柱状图
    case "stacked":

      option.plotOptions={series:{stacking:'normal'}};
      data = option;
      break;
      //百分比堆叠柱状图
    case "percent_stacked":
      option.plotOptions={column:{stacking:'percent'}};
      data = option;
      break;
      //分组柱状图
    case "series":
      data = option;
      break;

    case "3d_stacked":
        option.chart={type:'column',options3d:{enabled:true,alpha:10,beta:25,depth:35},
        renderTo:'container'};
        option.plotOptions={column:{depth:25}};
        data = option;
        break;

    case "3d_percent_stacked":
        option.chart={type:'column',options3d:{enabled:true,alpha:10,beta:25,depth:35},
        renderTo:'container'};
        option.plotOptions={column:{depth:25,stacking:'percent'}};
        data = option;
        break;

    case "simpleline":
        option.chart.type="line";
        data = option;
        break;

    case "spline":
        option.chart.type="spline";
        data = option;
        break;

    case "series_line":
        option.chart.type="line";
        data = option;
        break;

    case "series_spline":
        option.chart.type="spline";
        data = option;
        break;
    //基础面积图
    case "areasimple":
        option.chart.type="area";
        option.plotOptions={area:{pointStart:1000,marker:{enabled:false,symbol:'circle',radius:2,depth:35}}};
        data = option;
        break;
    //面积堆叠图
    case "areastacked":
        option.chart.type="area";
        option.plotOptions={area:{stacking:'normal'}};
        data = option;
        break;
    //面积平滑堆叠图
    case "areastacked_spline":
        option.chart.type="areaspline";
        option.plotOptions={areaspline:{stacking:'normal',fillOpacity: 0.5}};
        data = option;
        break;
    //百分比堆叠面积图
    case "areapercent_stacked":
        option.chart.type="area";
        option.plotOptions={area:{stacking:'percent'}};
        data = option;
        break;
    //面积范围图（这个还存在问题，后续需要修改2017年07月21日 by Mark）
    case "arearange":
    // function(){
    // $.ajax({
    //   async: false,
    //   type:'get',
    //   url:'https://data.jianshukeji.com/jsonp?filename=json/range.json&callback=?',
    //   success: function test(data){
    //     alert("ddd");
    //     option.chart.type="arearange";
    //     option.series={name:'气温',data: data};
    //     data = option;
    //   }
    //   });
    // };
    $.ajaxSettings.async = false;
    $.getJSON('../../static/arearange.json', function(data){
        option.series = new Array();
        option.series[0] = new Object();
        option.series[0].name="气温";
        option.series[0].data=data;
        option.chart.type="arearange";
        data = option;
    });
    $.ajaxSettings.async = true;

        break;
    //基础饼图
    case "pie_simple":
        option.chart.type="pie";
        data = option;
        break;
    //基础气泡图bubble
    case "bubblesimple":
        option.chart.type="bubble";
        data = option;
        break;
    default:

    }
    return data;
}

var getSeriesData = function(){

}
