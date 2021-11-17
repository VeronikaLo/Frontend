//anime

const anime = require(`animejs`);

anime({
    targets:'.chart',
    duration: 5000,
    backgroundColor:'#ffea00'
});




//moment
const moment = require ('moment');

let now = moment();
moment.locale('de');
let date = now.format("LLLL");
console.log (date);

document.querySelector(`#time`).innerHTML = date;


// chart
let dataChart = {
    weekDays:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    total:[10,9,10,11,9,4,6],
    work:[9,9,6,9,5,0,0],
    course:[1,0,3,2,4,4,5],
    sport:[0,0,1,0,0,0,1]

}




const Chart = require('chart.js');
const ctx = document.getElementById('myChart').getContext('2d');
const  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dataChart.weekDays ,
      datasets: [{ 
          data: dataChart.total,
          label: "Total",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, { 
          data: dataChart.work,
          label: "Dental office",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
        }, { 
          data: dataChart.course,
          label: "IT-Girls",
          borderColor: "#ffa500",
          backgroundColor:"#ffc04d",
          fill: false,
        }, { 
          data: dataChart.sport,
          label: "Sport",
          borderColor: "#c45850",
          backgroundColor:"#d78f89",
          fill: false,
        }
      ]
    },
  });







