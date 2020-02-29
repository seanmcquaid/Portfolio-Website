import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from "components/Layout/Layout";
import {Home, About} from "pages/pages";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
            <Route to="/" component={Home}/>
            <Route to="/about" component={About}/>
            <Route to=""/>
            <Route to=""/>
            <Route to=""/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
