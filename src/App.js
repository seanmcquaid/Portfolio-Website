import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from "components/Layout/Layout";
import {Home, About, Contact, Skills, Projects} from "pages/pages";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/projects" component={Projects}/>
            <Route component={Home}/>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
