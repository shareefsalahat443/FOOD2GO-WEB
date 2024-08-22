import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from './components/layouts/Preloader';
import Dashboard from './components/pages/Dashboard';
import Addproduct from './components/pages/Addproduct';
import Chartjs from './components/pages/Chartjs';
import Chat from './components/pages/Chat';
import Customerlist from './components/pages/Customerlist';
import Customerreview from './components/pages/Customerreview';
import Email from './components/pages/Email';
import Googlemaps from './components/pages/Googlemaps';
import Invoicedetail from './components/pages/Invoicedetail';
import Invoicelist from './components/pages/Invoicelist';
import Menucatalogue from './components/pages/Menucatalogue';
import Menugrid from './components/pages/Menugrid';
import Menulist from './components/pages/Menulist';
import Googlechart from './components/pages/Googlechart';
import Orders from './components/pages/Orders';
import Productdetail from './components/pages/Productdetail';
import Sales from './components/pages/Sales';
import Todolist from './components/pages/Todolist';
import Vectormaps from './components/pages/Vectormaps';
import Userprofile from './components/pages/Userprofile';
import OrderRequest from './components/pages/OrderRequest';


function App() {
  return (
    <Router basename={'/FOOD2GO'}>
      <Preloader/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/add-product" component={Addproduct} />
        <Route path="/chartjs" component={Chartjs} />
        <Route path="/chat" component={Chat} />
        <Route path="/customer-list" component={Customerlist} />
        <Route path="/customer-review" component={Customerreview} />
        <Route path="/email" component={Email} />
         <Route path="/google-maps" component={Googlemaps} />
        <Route path="/invoice-detail" component={Invoicedetail} />
        <Route path="/invoice-list" component={Invoicelist} />
        <Route path="/menu-catalogue" component={Menucatalogue} />
        <Route path="/menu-grid" component={Menugrid} />
        <Route path="/menu-list" component={Menulist} />
        <Route path="/google-chart" component={Googlechart} />
        <Route path="/orders" component={Orders} />
        <Route path="/Order-Request" component={OrderRequest} />
        <Route path="/product-detail" component={Productdetail} />
        <Route path="/sales" component={Sales} />
        <Route path="/todo-list" component={Todolist} />
        <Route path="/vector-maps" component={Vectormaps} />
        <Route path="/user-profile" component={Userprofile} />
      </Switch>
    </Router>
  );
}

export default App;
