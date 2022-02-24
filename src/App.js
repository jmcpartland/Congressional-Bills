import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Heading from "./Heading";
import Home from "./Home";
import BillsIndex from "./BillsIndex";
import BillsShow from "./BillsShow";
import Navigation from "./Navigation";


function App() {
  const billsUrl = "http://localhost:3001/bills"

  const [bills, setBills] = useState([])

  let theBills = []

  useEffect(() => {
    fetch(billsUrl)
    .then((r) => r.json())
    .then((data) => {
        // theBills = [...data]
        setBills(data, bills.comments="")
    })
  }, [])

  // console.log(bills[1])

  return (
    <Router>
      <div className="App">
        <Route path="/" render={() => <Heading />} />
        <Route path="/" component={Navigation}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/billsIndex/:id">
             <BillsShow bills={bills} />
          </Route>
          <Route exact path="/billsIndex">
            <BillsIndex bills={bills} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
