import React, { Component } from 'react';

class ResturantRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [
                { id: 1, name: 'French Fries', customer: 'Jhon Leo', location: 'New Town', status: 'Pending', time: '10:05', price: '$10' },
                { id: 2, name: 'Mango Pie', customer: 'Kristien', location: 'Old Town', status: 'Pending', time: '14:05', price: '$9' },
                { id: 3, name: 'Fried Egg Sandwich', customer: 'Jack Suit', location: 'Oxford Street', status: 'Pending', time: '12:05', price: '$19' },
                { id: 4, name: 'Lemon Yogurt Parfait', customer: 'Alesdro Guitto', location: 'Church hill', status: 'Pending', time: '12:05', price: '$18' },
                { id: 5, name: 'Spicy Grill Sandwich', customer: 'Jacob Sahwny', location: 'Palace Road', status: 'Pending', time: '12:05', price: '$21' },
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
                                        <th scope="col">Restaurant ID</th>
                                        <th scope="col">Restaurant Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Register Time</th>
                                        <th scope="col">Register Date</th>
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

export default ResturantRequest;
