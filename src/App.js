import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Dashboard";
import { createMemoryHistory } from "history";
const history = createMemoryHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
