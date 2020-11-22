import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'components/components';
import { Home, About, Contact, Skills, Projects, Error } from 'pages/pages';

const App = () => (
  <Router basename="/">
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route component={Error} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
