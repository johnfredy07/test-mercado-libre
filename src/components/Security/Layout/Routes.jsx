import React from 'react';
import * as PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

const Routes = ({
  routes, redirect
}) => (
  <Switch>
    {routes.map(({ component, exact, path }, index) => (
      <Route
        key={index}
        exact={exact}
        path={path}
        render={(props) => React.createElement(
          component,
          {
            ...props,
          },
          null
        )}
      />
    ))}
    {redirect && <Route render={() => <Redirect to="/" />} />}
  </Switch>
);

Routes.propTypes = {
  redirect: PropTypes.bool,
  routes: PropTypes.array,
};

export default Routes;
