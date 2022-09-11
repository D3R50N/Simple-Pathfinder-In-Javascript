function domId(id) {
    return document.getElementById(id);
}


const container = domId("container");
const stp_btn = domId("stp_btn");
const find_btn = domId("find_btn");
const total = 30;
const stepFlex = 100 / total;
const steps = [];
var setStart = true, setEnd = false, setObs = false;
var isSetingUp = false;
var begin, obs = [], end;


var path = [];
const DIR_R = 1, DIR_L = - 1, DIR_T = -total, DIR_B =  total;
