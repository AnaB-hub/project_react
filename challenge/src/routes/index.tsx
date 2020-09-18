import React from "react";
import { Router } from "react-router-dom";

import { Route } from "react-router-dom";
import { Provider } from "react-redux";

import CountryList from "../pages/CountryList";
import CountryEdit from "../pages/CountryEdit";
import CountryDetails from "../pages/CountryDetails";

import history from "../services/history";
import store from "../store/store";

const Routes: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={CountryList} />
      <Route path="/edit/:name+" component={CountryEdit} />
      <Route path="/details/:name+" component={CountryDetails} />
    </Router>
  </Provider>
);

export default Routes;
