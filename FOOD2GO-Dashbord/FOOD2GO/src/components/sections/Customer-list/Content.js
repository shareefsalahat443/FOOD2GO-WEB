import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import $ from 'jquery';

// Table data
var dataSet1 = [
    ["40521", " shareef443", "Nablus,Tallouza", "shareef@gmail.com"],
    ["40521", " firas24", "Nablus,Rafidia", "firas1@gmail.com"]

];
class Content extends Component {
    componentDidMount() {
        //initialize datatable
        $('#data-table-4').DataTable({
            data: dataSet1,
            columns: [
                { title: "Customer ID" },
                { title: "Customer Name" },
                { title: "Location" },
                { title: "Email ID" }            ],
        });
    }
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Customer List</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="table-responsive">
                                    <table id="data-table-4" className="table w-100 thead-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;