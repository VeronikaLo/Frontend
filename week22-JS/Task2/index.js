const moment = require ('moment');

let now = moment();
moment.locale('de');
let date = now.format("LLLL");
console.log (date);

document.querySelector(`#time`).innerHTML = date;



const Chart = require('chart.js');
const myChart = new Chart(ctx,{});




