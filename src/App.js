import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Heading from "./Heading";
import Home from "./Home";
import BillsList from "./BillsList";
import Navigation from "./Navigation";


function App() {
  const [bills, setBills] = useState([])
  const billsUrl = "http://localhost:3001/bills"
  const propublicaUrl = "https://api.propublica.org/congress/v1/117/senate/bills/enacted.json"
  const propublicaKey = 'tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI'


  useEffect(() => {
    fetch(billsUrl)
      .then((r) => r.json())
      .then((data) => setBills(data))

      // fetch(propublicaUrl, {
      //   headers: {
      //     'X-API-Key' : propublicaKey
      //   }
      // })
      //   .then(response => response.json())
      //   .then(data => setBills(data.results[0].bills))
  }, [])

// console.log(bills)

  return (
    <Router>
      <div className="App">
        <Route path="/" component={Heading} />
        <Route path="/" component={Navigation}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/billsList" render={() => <BillsList bills={bills} />} />
          {/* <Route exact path="/bill/:id" component={Bill} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
