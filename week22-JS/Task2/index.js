const moment = require ('moment');

let now = moment();
moment.locale('de');
let date = now.format("LLLL");
console.log (date);

document.querySelector(`#time`).innerHTML = date;



const Chart = require('chart.js');
const ctx = document.getElementById('myChart').getContext('2d');
const  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [{ 
          data: [10,10,9,9,9,3,4],
          label: "Total",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, { 
          data: [9,9,6,9,5,0,0],
          label: "Working hours",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
        }, { 
          data: [1,0,3,0,3,3,4],
          label: "Coding activity",
          borderColor: "#ffa500",
          backgroundColor:"#ffc04d",
          fill: false,
        }, { 
          data: [0,1,0,0,1,0,0],
          label: "Sport",
          borderColor: "#c45850",
          backgroundColor:"#d78f89",
          fill: false,
        }
      ]
    },
  });







