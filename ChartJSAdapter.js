class ChartJSAdapter {

    constructor() {
        this.ctx = document.getElementById('myChart').getContext('2d');

        this.labels = [...Array(collatz(41).length).entries()];
        this.data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: collatz(41),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'My First Dataset',
            data: collatz(47),
            fill: false,
            borderColor: 'rgb(192, 75, 192)',
            tension: 0.1
        }]
        };

        this.config = {
            type: 'line',
            data: data,
        };

        this.myChart = new Chart(ctx, {
            type: 'line',
            labels: labels,
            data: data,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}