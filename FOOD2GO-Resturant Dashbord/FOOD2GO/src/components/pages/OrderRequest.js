import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Quickbar from '../layouts/Quickbar';
import OrderRequest from '../sections/Orders/OrderRequest';


class OrderRequestFORM extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <div className="ms-content-wrapper">
                        <div className="row">
                            <div className="col-md-12">
                            
                                <OrderRequest/>

                                
                            </div>
                        </div>
                    </div>
                </main>
                <Quickbar />
            </div>
        );
    }
}

export default OrderRequestFORM;