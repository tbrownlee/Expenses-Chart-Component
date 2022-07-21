"use strict"



let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
let amounts = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];

let softRed = "hsl(10, 79%, 65%)";
let mediumBrown = "hsl(28, 10%, 53%)";
let darkBrown = "hsl(25, 47%, 15%)";


const ctx = document.getElementById('canvas').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: days,
    datasets: [{
      data: amounts,
      barPercentage: .96,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: [
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(186, 34%, 60%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
      ],
      hoverBackgroundColor: [
        'hsl(10, 79%, 75%)',
        'hsl(10, 79%, 75%)',
        'hsl(186, 34%,70%)',
        'hsl(10, 79%, 75%)',
        'hsl(10, 79%, 75%)',
        'hsl(10, 79%, 75%)',
        'hsl(10, 79%, 75%)',
      ],
    }]
  },
  options: {
    maintainAspectRatio: false,
    onHover: (event, chartElement) => {
      event.native.target.style.cursor = chartElement[0]
        ? 'pointer'
        : 'default';
    },
    scales: {
      y: {
        display: false
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          padding: 0,
          color: mediumBrown,
          font: {
            family: "DM Sans"
          }
        }
      },
    },
    plugins: { 
      legend: { 
        display: false,
      },
      tooltip: {
        caretSize: 0,
        yAlign: "bottom",
        xAlign: "center",
        displayColors: false,
        backgroundColor: darkBrown,
        caretPadding: 5,
        callbacks: {
          title: function() {},
       }
      }
    }
  }
});




















/* 

This problem was challenging, if anyone could help solve one of the below that would be great!!


-**Unable to access the JSON data**

-Border-radius not working on bottom-left, bottom-right bars
-Tooltip box does not go above the highest bar (the blue one)
-The numbers do not have dollar signs 

*/