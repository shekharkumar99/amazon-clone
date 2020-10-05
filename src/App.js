import React from 'react';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path = "/checkout"> <Header /></Route>
       
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
