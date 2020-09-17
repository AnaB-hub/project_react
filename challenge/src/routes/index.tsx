import React from "react";

import { Switch, Route } from "react-router-dom";

import CountryList from "../pages/CountryList";
import CountryEdit from "../pages/CountryEdit";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={CountryList} />
    <Route path="/edit" component={CountryEdit} />
  </Switch>
);

export default Routes;
