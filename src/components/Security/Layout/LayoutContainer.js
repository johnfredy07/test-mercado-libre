import React from 'react';
import * as PropTypes from 'prop-types';
import {
  Switch, withRouter
} from 'react-router-dom';
import Layout from './Layout';
import Routes from './Routes';
import { routes } from '../../../config/Security/Routes';

const LayoutContainer = ({ history }) => (
  <Switch>
    <Layout history={history}>
      <Routes
        routes={routes}
      />
    </Layout>
  </Switch>
);

LayoutContainer.propTypes = {
  history: PropTypes.object,
};

export default withRouter(LayoutContainer);
