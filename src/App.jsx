import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import routes from "./routes";

export default function App() {
  return (
    <Layout>
      <Suspense fallback="Loading...">
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} component={component} />
          ))}
        </Switch>
      </Suspense>
    </Layout>
  );
}
