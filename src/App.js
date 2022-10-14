import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './router/home/Home';
import Shops from './components/shops/Shops';
import ShopWrapper from './router/shop-wrapper/ShopWrapper';
import SinglePageShop from './router/single-page-shop/SinglePageShop';
import ProWrapper from "./router/pro-wrapper/ProWrapper"
import Products from './components/products/Products';
import SinglePagePro from './router/single-page-pro/SinglePagePro';
import PrivateRoute from './router/private-route/PrivateRoute';
import Admin from './router/admin/Admin';
import PrivateRouteSeller from './router/private-route/PrivateRouteSeller';
import Seller from './router/seller/Seller';
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/shop-wrapper" component={ShopWrapper} />
            <Route path="/shops/:type" component={Shops} />
            <Route path="/single-page-shop/:userName" component={SinglePageShop} />

            <Route path="/pro-wrapper" component={ProWrapper} />
            <Route path="/products/:type" component={Products} />
            <Route path="/single-page-pro/:id" component={SinglePagePro} />
            <PrivateRouteSeller path="/seller">
                <Seller />
            </PrivateRouteSeller>
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
          </Switch>

      </Router>
    </div>
  );
}

export default App;
