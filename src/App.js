import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from "components/Layout/Layout";
import {Home, About, Contact, Skills, Projects} from "pages/pages";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
            <Route to="/" component={Home}/>
            <Route to="/about" component={About}/>
            <Route to="/contact" component={Contact}/>
            <Route to="/skills" component={Skills}/>
            <Route to="/projects" component={Projects}/>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
