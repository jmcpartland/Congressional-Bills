import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Heading from "./Heading";
import Home from "./Home";
import BillsIndex from "./BillsIndex";
import BillsShow from "./BillsShow";


function App() {
  const billsUrl = "http://localhost:3001/bills"
  const [bills, setBills] = useState([])

  useEffect(() => {
    fetch(billsUrl)
    .then((r) => r.json())
    .then((data) => {
        setBills(data)
        })
  }, [])


  // Putting entire app in a loading state
  if (bills.length <= 0) return <h1 className="loading">Loading...</h1>
  
  // console.log(bills)


  return (
    <Router>
      <div className="App">
        <Route path="/" render={() => <Heading />} />
        <Switch>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/billsIndex/:id">
              <BillsShow bills={bills} setBills={setBills} />
            </Route>
            <Route exact path="/billsIndex">
              <BillsIndex bills={bills} />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
