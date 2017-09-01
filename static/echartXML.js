 export default {
        "chart": {
            "type": "bar"
        },
        "title": {
            "text": "title"
        },

        "subtitle": {
            "text": "Source: foundation"
        },

        "yAxis": {
            "tickInterval": 40000,
            "title": {
                "text": "Number of Employees"
            },
            "labels":{
                
            }
            
        },
        "xAxis":{
            "title":{
                "text":"Year"
            }
        },
        "legend": {
            "layout": "vertical",
            "align": "right",
            "verticalAlign": "middle"
        },

        "plotOptions": {
            "series": {
                "pointStart": 2011
            }
        },

        "series": [{
            "name": "Installation",
            "data": [43934, 52503, 57177, 69658, 97031, 119931, 137133]
        }, {
            "name": "Manufacturing",
            "data": [24916, 24064, 29742, 29851, 32490, 30282, 38121]
        }, {
            "name": "Sales & Distribution",
            "data": [11744, 17722, 16005, 19771, 20185, 24377, 32147]
        }, {
            "name": "Project Development",
            "data": [null, null, 7988, 12169, 15112, 22452, 34400]
        }, {
            "name": "Other",
            "data": [12908, 5948, 8105, 11248, 8989, 11816, 18274]
        }]

    }
 
