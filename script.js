"use strict"


async function getData() {
    let url = "data.json";
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderData() {
    let spendingData = await getData();
    
    let days = [];
    let amounts = [];

    spendingData.forEach(data => {
        days.push(data.day);
        amounts.push(data.amount);
    })

    createChart(days, amounts);
}



renderData();






/* Colors */
let softRed = "hsl(10, 79%, 65%)";
let cyan = "hsl(186, 34%, 60%)";
let fadedSoftRed = "hsl(10, 79%, 75%)";
let fadedCyan = "hsl(186, 34%,70%)";

let mediumBrown = "hsl(28, 10%, 53%)";
let darkBrown = "hsl(25, 47%, 15%)";




function createChart(days, amounts) {
    const canvas = document.getElementById("canvas").getContext("2d");
    const myChart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: days,
            datasets: [{
                data: amounts,
                barPercentage: .96,
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: [
                    softRed,
                    softRed,
                    cyan,
                    softRed,
                    softRed,
                    softRed,
                    softRed,
                ],
                hoverBackgroundColor: [
                    fadedSoftRed,
                    fadedSoftRed,
                    fadedCyan,
                    fadedSoftRed,
                    fadedSoftRed,
                    fadedSoftRed,
                    fadedSoftRed,
                ],
            }]
        },
        options: {
            maintainAspectRatio: false,
            onHover: (event, chartElement) => {
                event.native.target.style.cursor = chartElement[0]
                    ? "pointer"
                    : "default";
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
                        title: function () { },
                    }
                }
            }
        }
    });
}