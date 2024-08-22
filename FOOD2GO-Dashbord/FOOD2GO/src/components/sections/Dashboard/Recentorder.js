import React, { Component } from 'react';


const recentordertable = [
    {
        orderid: "1",
        ordername: "Pizza",
        customername: "shareef443",
        location: "Nablus,Tallouza",
        orderstatus: "Pending",
        orderstatuscls: "badge badge-primary",
        deliverytime: "10:05",
        price: "₪29.99"
    },
    {
        orderid: "2",
        ordername: "Shawarma",
        customername: "firas254",
        location: "Nablus,rafedia",
        orderstatus: "Delivered",
        orderstatuscls: "badge badge-success",
        deliverytime: "12:15",
        price: "₪19.99"
    }
    
]


class Recentorder extends Component {
    render() {
        return (
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
                        {recentordertable.map((item, i) => (
                            <tr key={i}>
                                <th scope="row">{item.orderid}</th>
                                <td>{item.ordername}</td>
                                <td>{item.customername}</td>
                                <td>{item.location}</td>
                                <td><span className={item.orderstatuscls}>{item.orderstatus}</span>
                                </td>
                                <td>{item.deliverytime}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Recentorder;