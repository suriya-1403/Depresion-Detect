var ctx = document.getElementById('myRadarChart').getContext('2d');
var edu_sum= localStorage.getItem("edu_sum");
var tea_sum= localStorage.getItem("tea_sum");
var sch_sum= localStorage.getItem("sch_sum");
var home_sum= localStorage.getItem("home_sum");
var fri_sum= localStorage.getItem("fri_sum");

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Education', 'Teachers', 'School', 'Home','Friends'],
        datasets: [{
            label:"Data",
            backgroundColor: 'rgba(255, 99, 132, 0.2',
            borderColor: 'rgba(255, 99, 132,1)',
            hoverBackgroundColor:'rgba(255, 99, 132, 1)',
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [edu_sum, tea_sum, sch_sum, home_sum, fri_sum]
        }]
    },
    options: {
        scale: {
          gridLines: {
            color: ['antiquewhite']
          }
        },
        ticks: {
            suggestedMin: 5,
            suggestedMax: 10
        }
      }
});
