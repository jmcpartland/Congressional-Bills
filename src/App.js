import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import BillsList from "./BillsList";
import Bill from "./Bill";
import Navigation from "./Navigation";


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Navigation}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/billsList" component={BillsList} />
          <Route exact path="/bill/:id" component={Bill} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;