import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from './components/layouts/Preloader';
import Dashboard from './components/pages/Dashboard';
import Buttons from './components/pages/Buttons';
import Chartjs from './components/pages/Chartjs';
import Chat from './components/pages/Chat';
import Customerlist from './components/pages/Customerlist';
import Customerreview from './components/pages/Customerreview';
import Datatables from './components/pages/Datatables';
import Email from './components/pages/Email';
import Googlemaps from './components/pages/Googlemaps';
import Invoicedetail from './components/pages/Invoicedetail';
import Invoicelist from './components/pages/Invoicelist';
import Googlechart from './components/pages/Googlechart';
import Orders from './components/pages/Orders';
import Restaurantlist from './components/pages/Restaurantlist';
import Sales from './components/pages/Sales';
import Todolist from './components/pages/Todolist';
import Vectormaps from './components/pages/Vectormaps';
import Invoice from './components/pages/Invoice';
import Userprofile from './components/pages/Userprofile';
import ResturantRequest from './components/pages/ResturantRequest';



function App() {
  return (
    <Router basename={'/FOOD2GO/Admin-Dashbord'}>
      <Preloader/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/chartjs" component={Chartjs} />
        <Route path="/chat" component={Chat} />
        <Route path="/customer-list" component={Customerlist} />
        <Route path="/customer-review" component={Customerreview} />
        <Route path="/data-tables" component={Datatables} />
        <Route path="/email" component={Email} />
        <Route path="/google-maps" component={Googlemaps} />
        <Route path="/invoice-detail" component={Invoicedetail} />
        <Route path="/invoice-list" component={Invoicelist} />
        <Route path="/google-chart" component={Googlechart} />
        <Route path="/orders" component={Orders} />
        <Route path="/restaurant-list" component={Restaurantlist} />
        <Route path="/restaurant-request" component={ResturantRequest} />

        <Route path="/sales" component={Sales} />
        <Route path="/todo-list" component={Todolist} />
        <Route path="/vector-maps" component={Vectormaps} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/user-profile" component={Userprofile} />
      </Switch>
    </Router>
  );
}

export default App;
