import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Experiments from '../Experiments';

import Intro from '../Intro';
import WorkDetails from '../Work/WorkDetails';

const Routing = ({props}) => {
  return(
    <Switch>
        <Route exact path="/" component={Intro}/>
        <Route exact path="/Work" component={Intro}/>
        <Route exact path="/Experiments" component={Experiments}/>
        <Route exact path={"/va"} component={() => <WorkDetails something={props}/>}/>
        <Route exact path="/gc" component={WorkDetails}/>
        <Route exact path="/vt" component={WorkDetails}/>
        <Route name="app" path="/" handler={Intro}>
          <Redirect exact from="/" to="/" />
        </Route>
        
    </Switch>
  );
}

export default Routing;
