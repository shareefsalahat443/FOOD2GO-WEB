import React, { Component } from 'react';


// Line chart 1
var data_1 = [4100, 3800, 3200, 3400, 2700, 3600, 3300, 3700, 4900];
var labels = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17", "Jan-18", "Jan-19"];
function chartData1() {
    return {
        labels: labels,
        datasets: [{
            label: "Data",
            borderColor: '#000000',
            pointBorderColor: '#000000',
            pointBackgroundColor: '#000000',
            pointHoverBackgroundColor: '#000000',
            pointHoverBorderColor: '#000000',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(25, 25, 25, 0.12)",
            borderWidth: 2,
            data: data_1
        }]
    }
}

// Line chart 2
var data_2 = [2800, 2600, 2300, 2800, 3600, 2900, 3000, 3100, 3600, 3000, 3100, 3200];
var labels2 = ["Jan-11", "Jan-12", "Jan-13", "Jan-14", "Jan-15", "Jan-16", "Jan-17","Jan-18", "Jan-19", "Jan-20", "Jan-21", "Jan-22"];
function chartData2() {
    return {
        labels: labels2,
        datasets: [{
            label: "Data",
            borderColor: '#ff0018',
            pointBorderColor: '#ff0018',
            pointBackgroundColor: '#ff0018',
            pointHoverBackgroundColor: '#ff0018',
            pointHoverBorderColor: '#ff0018',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(255, 0, 24, 0.11)",
            borderWidth: 2,
            data: data_2
        }]
    }
}
// Line chart 3
function chartData3() {
    return {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        datasets: [{
            label: "Data",
            borderColor: '#000000',
            pointBorderColor: '#000000',
            pointBackgroundColor: '#000000',
            pointHoverBackgroundColor: '#000000',
            pointHoverBorderColor: '#000000',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(25, 25, 25, 0.12)",
            borderWidth: 2,
            data: [5,6,8,1,5,3,9,7,5,8,7,3,6,9,1]
        }]
    }
}
// Line chart 4
function chartData4() {
    return {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        datasets: [{
            label: "Data",
            borderColor: '#ff0018',
            pointBorderColor: '#ff0018',
            pointBackgroundColor: '#ff0018',
            pointHoverBackgroundColor: '#ff0018',
            pointHoverBorderColor: '#ff0018',
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            backgroundColor: "rgba(255, 0, 24, 0.11)",
            borderWidth: 2,
            data: [1,4,7,3,5,7,6,5,8,3,5,5,4,3,7]
        }]
    }
}

class Chart extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data1: chartData1(),
            data2: chartData2(),
            data3: chartData3(),
            data4: chartData4(),
            open: true,
        }
    };
    render() {
        return (
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                    <span className="ms-chart-label bg-orange"><i className="material-icons">shopping_cart</i></span>
                        <div className="ms-card-body media">
                            <div className="media-body">
                            <span className="black-text"  >Orders Received</span>
                            <h2> </h2>

                            <h2>100</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                    <span className="ms-chart-label bg-green"><i className="material-icons">check_circle</i></span>
                        <div className="ms-card-body media">
                            <div className="media-body">
                         <span className="black-text"> Orders Served</span>
                         <h2> </h2>

                                <h2>3,973</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                    <span className="ms-chart-label bg-blue"><i className="material-icons">hourglass_empty</i></span>
                        <div className="ms-card-body media">
                            <div className="media-body">
                                <span className="black-text"><strong>Pending Orders</strong></span>
                                <h2> </h2>

                                <h2>7,333</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                        <span className="ms-chart-label bg-red"><i className="material-icons">money_off</i></span>
                        <div className="ms-card-body media">
                            <div className="media-body">
                                <span className="black-text"><strong>Refund</strong></span>
                                <h2> </h2>

                                <h2>48,973</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="ms-card ms-widget has-graph-full-width ms-infographics-widget">
                        <span className="ms-chart-label bg-black"><i className="material-icons">person_add </i></span>
                        <div className="ms-card-body media">
                            <div className="media-body">
                                <span className="black-text"><strong>New Cusomers</strong></span>
                                <h2> </h2>

                                <h2>48,973</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chart;