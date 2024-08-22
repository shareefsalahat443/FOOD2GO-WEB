import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs-2';

// Bar chart
function chartData1() {
    return {
        labels: ["Shawarman", "Fareed ", "Sharlock Pizza"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#ff0018", "#f7b11b", "#ff6c60", "#8663e1", "#08bf6f"],
            data: [180, 200,220]
        }]
    }
}
const options = {
    legend: { display: false },
    title: {
        display: true,
        text: 'Restaurants Profits'
    }
}

class Barchart extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: chartData1(),
            open: true,
        }
    };
    render() {
        return (
            <BarChart data={this.state.data1} options={options} />
        );
    }
}

export default Barchart;