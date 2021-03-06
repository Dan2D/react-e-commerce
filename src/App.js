import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop page/ShopPage";
import "./App.scss";


function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route  path="/shop" component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
