import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop page/ShopPage";
import "./App.css";


function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route  path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
