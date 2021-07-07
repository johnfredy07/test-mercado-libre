import React from 'react';
import * as PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

const Routes = ({
  routes, redirect, handleScope, globalScope
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
            handleScope,
            globalScope
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
  handleScope: PropTypes.func,
  globalScope: PropTypes.object,
};

export default Routes;
