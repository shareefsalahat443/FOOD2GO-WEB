import React, { Component } from 'react';

class OrderRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [
    { id: 1, name: 'CLASSIC CHICKEN', customer: 'ShareefSalahat', location: 'Nablus - Tallouza-Assira Street', status: 'Pending', time: '11:58', price: '₪31' },
            ]
        };
    }

    handleStatusChange = (id, status) => {
        this.setState(prevState => ({
            orders: prevState.orders.map(order =>
                order.id === id ? { ...order, status: status } : order
            )
        }));
    };

    render() {
        return (
            <div className="col-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Order Request</h6>
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
                                        <th scope="col">Delivered Time</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.orders.map(order => (
                                        <tr key={order.id}>
                                            <th scope="row">{order.id}</th>
                                            <td>{order.name}</td>
                                            <td>{order.customer}</td>
                                            <td>{order.location}</td>
                                            <td>{order.time}</td>
                                            <td>{order.price}</td>
                                            <td>
                                                {order.status === 'Pending' ? (
                                                    <>
                                                        <button className="btn btn-success btn-sm" onClick={() => this.handleStatusChange(order.id, 'Delivered')}>Accept</button>
                                                        <button className="btn btn-danger btn-sm" onClick={() => this.handleStatusChange(order.id, 'Cancelled')}>Cancel</button>
                                                    </>
                                                ) : (
                                                    <span style={{ color: order.status === 'Delivered' ? 'green' : 'red' }}>
                                                        {order.status === 'Delivered' ? 'Accepted' : 'Cancelled'}
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderRequest;
