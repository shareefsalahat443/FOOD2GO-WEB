import React, { Component } from 'react';

class Ordertable extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6> Order List</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className="table-responsive">
                            <table className="table table-hover thead-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">Order ID</th>
                                        <th scope="col">Order Name</th>
                                        <th scope="col">Customer Name</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Order Status</th>
                                        <th scope="col">Delivered Time</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>FCLASSIC CHICKEN</td>
                                        <td>ShareefSalahat</td>
                                        <td> Nablus - Tallouza-Assira Streett</td>
                                        <td><span className="badge badge-success">Delivered</span></td>
                                        <td>11:58</td>
                                        <td>₪31</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ordertable;