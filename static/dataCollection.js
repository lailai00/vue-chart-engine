
import Data from './data.js';
import AnychartXML from './anychartXML.js';    
import HighchartXML from './highchartXML.js';    
import EchartXML from './echartXML.js';

export var fetchData = function(){
    return Data;
}

export var fetchAnychartXML = function(){
    return AnychartXML;
}

export var fetchHighchartXML = function(){
    return HighchartXML;
}
export var fetchEchartXML = function(){
    return EchartXML;
}