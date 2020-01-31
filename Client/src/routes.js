import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LinksPage} from "./Pages/linksPge";
import CreatePage from "./Pages/createPage";
import {DetailPage} from "./Pages/DetailPage";
import AuthPage from "./Pages/AuthPage";
export const useRoutes = isAuthentificated => {
  if (isAuthentificated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Redirect to="/create" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage></AuthPage>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
