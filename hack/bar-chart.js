var ctx = document.getElementById('myBarChart').getContext('2d');
var edu_sum= localStorage.getItem("edu_sum");
var tea_sum= localStorage.getItem("tea_sum");
var sch_sum= localStorage.getItem("sch_sum");
var home_sum= localStorage.getItem("home_sum");
var fri_sum= localStorage.getItem("fri_sum");

var data = {
    labels: ['Education', 'Teachers', 'School', 'Home','Friends'],
    datasets: [{
      label: "Data",
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
    ],
      borderWidth: 1,
      hoverBackgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
    ],
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [edu_sum, tea_sum, sch_sum, home_sum, fri_sum]
    }]
  };

  var options = {
    scales: {
        xAxes: [{
            gridLines: {
                color: ['antiquewhite'],
                offsetGridLines: true
            }
        }]
    }
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});