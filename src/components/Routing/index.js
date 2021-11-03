import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Experiments from '../Experiments';


import Intro from '../Intro';
import WorkDetails from '../Work/WorkDetails';
import ProjectDetail from '../ProjectDetail';


const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route exact path="/work" component={Intro} />
      <Route exact path="/experiments" component={Experiments} />
      {/* <Route path={`/experiments/:id`} component={ExperimentDetail}/> */}
      <Route path={`/project/:id`} component={ProjectDetail} />
      <Route path={`/work/:id`} component={WorkDetails} />
      <Route name="app" path="/" handler={Intro}>
        <Redirect exact from="/" to="/" />
      </Route>

    </Switch>
  );
}

export default Routing;
