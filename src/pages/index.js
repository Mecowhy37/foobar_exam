import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Tablet from "./tablet";

const Pages = () => {
  return (
    <Router>
      <Route exact path="/" component={Tablet} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
};
export default Pages;
