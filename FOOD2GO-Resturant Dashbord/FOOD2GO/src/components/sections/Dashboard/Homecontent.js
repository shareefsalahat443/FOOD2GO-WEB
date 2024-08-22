import React, { Component } from 'react';
import Recentorder from './Recentorder';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Chart from './Chart';
import Trendingorder from './Trendingorder';
import Orderchart from './Orderchart';


class Homecontent extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="db-header-title">Welcome, Anny</h1>
                    </div>
                    <div className="col-12">
                        <Chart />
                    </div>
                    {/* Recent Orders Requested */}
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <div className="d-flex justify-content-between">
                                    <div className="align-self-center align-left">
                                        <h6>Recent Orders Requested</h6>
                                    </div>
                                    <button type="button" className="btn btn-primary">View All</button>
                                </div>
                            </div>
                            <div className="ms-panel-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Food Item</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Product ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="ms-table-f-w"> <img src="assets/img/FOOD2GO/pizza.jpg" alt="people" /> Pizza </td>
                                                <td>$19.99</td>
                                                <td>67384917</td>
                                            </tr>
                                            <tr>
                                                <td className="ms-table-f-w"> <img src="assets/img/FOOD2GO/french-fries.jpg" alt="people" /> French Fries </td>
                                                <td>$14.59</td>
                                                <td>789393819</td>
                                            </tr>
                                            <tr>
                                                <td className="ms-table-f-w"> <img src="assets/img/FOOD2GO/cereals.jpg" alt="people" /> Multigrain Hot Cereal </td>
                                                <td>$25.22</td>
                                                <td>137893137</td>
                                            </tr>
                                            <tr>
                                                <td className="ms-table-f-w"> <img src="assets/img/FOOD2GO/egg-sandwich.jpg" alt="people" /> Fried Egg Sandwich </td>
                                                <td>$11.23</td>
                                                <td>235193138</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header new">
                                <h6>Monthly Revenue</h6>
                                <select className="form-control new" id="exampleSelect">
                                    <option value={1}>January</option>
                                    <option value={2}>February</option>
                                    <option value={3}>March </option>
                                    <option value={4}>April</option>
                                    <option value={5}>May</option>
                                    <option value={1}>June</option>
                                    <option value={2}>July</option>
                                    <option value={3}>August</option>
                                    <option value={4}>September</option>
                                    <option value={5}>October</option>
                                    <option value={4}>November</option>
                                    <option value={5}>December</option>
                                </select>
                            </div>
                            <div className="ms-panel-body">
                                <span className="progress-label"> <strong>Week 1</strong> </span>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                </div>
                                <span className="progress-label"> <strong>Week 2</strong> </span>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                </div>
                                <span className="progress-label"> <strong>Week 3</strong> </span>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                                </div>
                                <span className="progress-label"> <strong>Week 4</strong> </span>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Food Orders */}
                    <div className="col-md-12">
                        <Trendingorder />
                    </div>
                    {/* END/Food Orders */}
                    {/* Recent Orders Requested */}
                    <div className="col-xl-7 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <div className="d-flex justify-content-between">
                                    <div className="ms-header-text">
                                        <h6>Order Timing Chart</h6>
                                    </div>
                                </div>
                            </div>
                            <Orderchart />
                        </div>
                    </div>
                    {/* Favourite Products */}
                    <div className="col-xl-5 col-md-12">
                        
                        {/* Favourite Products */}
                        {/* Total Earnings */}
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Total Earnings</h6>
                            </div>
                            <div className="ms-panel-body p-0">
                                <div className="ms-quick-stats">
                                    <div className="ms-stats-grid">
                                        <i className="fa fa-star" />
                                        <p className="ms-text-dark">$8,033</p>
                                        <span>Today</span>
                                    </div>
                                    <div className="ms-stats-grid">
                                        <i className="fa fa-university" />
                                        <p className="ms-text-dark">$3,039</p>
                                        <span>Yesterday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Total Earnings */}
                    {/* Recent Placed Orders< */}
                    <div className="col-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Recently Placed Orders</h6>
                            </div>
                            <div className="ms-panel-body">
                                <Recentorder />
                            </div>
                        </div>
                    </div>
                    {/* Recent Orders< */}
                    
                    
                 
                </div>
            </div>

        );
    }
}

export default Homecontent;