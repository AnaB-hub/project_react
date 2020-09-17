import React from "react";

import { Switch, Route } from "react-router-dom";

import CountryList from "../pages/CountryList";
import CountryEdit from "../pages/CountryEdit";
import CountryDetails from "../pages/CountryDetails";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={CountryList} />
    <Route path="/edit/:name+" component={CountryEdit} />
    <Route path="/details/:name+" component={CountryDetails} />
  </Switch>
);

export default Routes;
