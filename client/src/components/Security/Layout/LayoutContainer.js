import React from 'react';
import * as PropTypes from 'prop-types';
import {
  Switch, withRouter
} from 'react-router-dom';
import Layout from './Layout';
import Routes from './Routes';
import { routes } from '../../../config/Security/Routes';

// Configuracion de rutas y layout
const LayoutContainer = ({ history, handleScope, globalScope }) => (
  <Switch>
    <Layout
      history={history}
      handleScope={handleScope}
      globalScope={globalScope}
    >
      <Routes
        routes={routes}
        globalScope={globalScope}
        handleScope={handleScope}
      />
    </Layout>
  </Switch>
);

LayoutContainer.propTypes = {
  history: PropTypes.object,
  handleScope: PropTypes.func,
  globalScope: PropTypes.object,
};

export default withRouter(LayoutContainer);
