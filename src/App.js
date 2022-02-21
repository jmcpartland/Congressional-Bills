import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Heading from "./Heading";
import Home from "./Home";
import BillsContainer from "./BillsContainer";
import Navigation from "./Navigation";


function App() {
  const billsUrl = "http://localhost:3001/bills"
  const propublicaUrl = "https://api.propublica.org/congress/v1/117/senate/bills/enacted.json"
  const propublicaKey = 'tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI'
  let billsSource = [];
  const [bills, setBills] = useState(billsSource)
  
  
  const loadBills = (data) => {
    billsSource = Array.from(data)
    // billsSource = [...data]
    console.log(billsSource)
    setBills(billsSource)
  }

  useEffect(() => {
    fetch(billsUrl)
    .then((r) => r.json())
    .then((data) => loadBills(data))
  }, [])
  
  const handleSearch = (e) => {
    // console.log(e)
    const filteredBills = bills.filter(billObj => billObj.title.toLowerCase().includes(e.toLowerCase()))
    setBills(filteredBills)
  }
  

  return (
    <Router>
      <div className="App">
        <Route path="/" render={() => <Heading handleSearch={handleSearch} />} />
        <Route path="/" component={Navigation}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/billsContainer" render={() => <BillsContainer bills={bills} />} />
          {/* <Route exact path="/bill/:id" component={Bill} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
