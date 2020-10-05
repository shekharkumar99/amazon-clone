import React from 'react';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js"

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path = "/Checkout"> <Header /><Checkout/></Route>
       
          <Route path="/Login"></Route>
          <Route path ="/">
            <Header />
            <Home />
          </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
