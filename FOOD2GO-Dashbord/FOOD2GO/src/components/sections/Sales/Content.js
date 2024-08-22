import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import $ from 'jquery';

// Table data
var dataSet2 = [
    ["64541", "<img src='/themes/themeforest/react/FOOD2GO/static/media/food-4.330f3357fe2a343b5cec.jpg' style='width:50px; height:30px;'>Peri Peri Fries", "6200", "In Stock", "$32", "<a href='#'><i class='fas fa-pencil-alt text-secondary'></i></a> <a href='a'><i class='far fa-trash-alt ms-text-danger'></i></a>"]
];
class Content extends Component {
    componentDidMount() {
        //initialize datatable
        $('#data-table-1').DataTable({
            data: dataSet2,
            columns: [
                { title: "Product ID" },
                { title: "Product Name" },
                { title: "Quantity" },
                { title: "Status" },
                { title: "Price" }
            ],
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
                                <h6>Product Sale</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="table-responsive">
                                    <table id="data-table-1" className="table table-hover w-100" />
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