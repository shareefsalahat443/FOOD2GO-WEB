import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb'

const invoicelisttable = [
    {
        invoiceid: "15451",
        name: "Fried Egg Sandwich",
        orderid: "001",
        invoicedate: "19/04/2022",
        quantity: "1",
        bill: "₪25",
    },
    {
        invoiceid: "15451",
        name: "Spicy Grilled Sandwich",
        orderid: "002",
        invoicedate: "19/02/2024",
        quantity: "2",
        bill: "₪21",
    }
]

class Detailcontent extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="col-12">
                            <div className="ms-panel">
                                <div className="ms-panel-header">
                                    <h6>Invoice List</h6>
                                </div>
                                <div className="ms-panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover thead-primary">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Invoice ID</th>
                                                    <th scope="col">Order Name</th>
                                                    <th scope="col">Order Id</th>
                                                    <th scope="col">Invoice Date</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total Bill</th>
                                                    <th scope="col">Send Invoice</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {invoicelisttable.map((item, i) => (
                                                    <tr key={i}>
                                                        <th scope="row">{item.invoiceid}</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.orderid}</td>
                                                        <td>{item.invoicedate}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.bill}</td>
                                                        <td><Link to="#"><i className="fas fa-paper-plane text-success" /></Link> <Link to="#"><i className="far fa-trash-alt ms-text-danger" /></Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Detailcontent;