class ChartJSAdapter {

    constructor(chartDOMElementId) {
        this.ctx = document.getElementById(chartDOMElementId).getContext('2d');

        this.labels = [...Array(new Collatz(41).getResult().length).entries()];
        this.data = {
        labels: this.labels,
        datasets: [{
            label: 'My First Dataset',
            data: new Collatz(41).getResult(),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },{
            label: 'My First Dataset',
            data: new Collatz(47).getResult(),
            fill: false,
            borderColor: 'rgb(192, 75, 192)',
            tension: 0.1
        }]
        };

        this.config = {
            type: 'line',
            data: this.data,
        };

        this.myChart = new Chart(this.ctx, {
            type: 'line',
            labels: this.labels,
            data: this.data,
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