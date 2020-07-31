import React, {lazy, Suspense} from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import {Layout, LoadingSpinner} from "components/components";

const App = () => (
  <Router basename="/">
      <Layout>
        <Suspense fallback={<LoadingSpinner isLoading={true}/>}>
          <Switch>
              <Route exact path="/" component={lazy(() => import("pages/Home/Home"))}/>
              <Route exact path="/about" component={lazy(() => import("pages/About/About"))}/>
              <Route exact path="/contact" component={lazy(() => import("pages/Contact/Contact"))}/>
              <Route exact path="/skills" component={lazy(() => import("pages/Skills/Skills"))}/>
              <Route exact path="/projects" component={lazy(() => import("pages/Projects/Projects"))}/>
              <Route component={lazy(() => import("pages/Error/Error"))}/>
          </Switch>
        </Suspense>
      </Layout>
  </Router>
);

export default App;