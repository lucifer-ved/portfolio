import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Work from '../Work';
import Experiments from '../Experiments';
import GetInTouch from '../GetInTouch';
import Intro from '../Intro';

const Routing = () => {
  return(
    <Switch>
        <Route exact path="/" component={Intro}/>
        <Route exact path="/Work" component={Intro}/>
        <Route exact path="/Experiments" component={Experiments}/>
        <Route exact path="/GetInTouch" component={GetInTouch}/>
        <Route name="app" path="/" handler={Intro}>
          <Redirect exact from="/" to="/" />
        </Route>
        
    </Switch>
  );
}

export default Routing;
