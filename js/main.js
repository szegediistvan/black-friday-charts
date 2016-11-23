var refreshTime = 10000;

var ordersCountChartElement = document.getElementById("orders-count-chart");
var ordersValueChartElement = document.getElementById("orders-value-chart");
var ordersCountLineChart;
var ordersValueLineChart;

var options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

$.getJSON("data/data.json", function (json) {

    var datas = [];
    $.each( json, function( key, val ) {
        datas.push(val);
    });

    ordersCountLineChart = new Chart(ordersCountChartElement, {
        type: 'line',
        data: {
            labels: datas[0],
            datasets: [
                {
                    label: "Orders Count",
                    fill: false,
                    backgroundColor: "rgba(75,0,192,0.9)",
                    borderColor: "rgba(75,0192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,0,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,0,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: datas[1],
                    spanGaps: false
                }
            ]
        },
        options: options
    });

    ordersValueLineChart = new Chart(ordersValueChartElement, {
        type: 'line',
        data: {
            labels: datas[0],
            datasets: [
                {
                    label: "Orders Value",
                    fill: false,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: datas[2],
                    spanGaps: false
                }
            ]
        },
        options: options
    });

    $('#last-counts').html(datas[3]);
    $('#last-values').html(datas[4]);

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

function refreshChart(chart){
    chart.update();
}

setInterval(function(){
    refreshChart(ordersCountLineChart);
    location.reload();
}, refreshTime);
