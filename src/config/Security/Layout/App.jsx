import React from 'react';
import * as PropTypes from 'prop-types';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from '../../../components/Security/Layout';
import AppSuspense from '../../../components/Security/Layout/AppSuspense';

const App = ({ language }) => (
  <ConfigProvider locale={language}>
    <Router>
      <AppSuspense>
        <Layout />
      </AppSuspense>
    </Router>
  </ConfigProvider>
);

App.propTypes = {
  language: PropTypes.object,
};

export default App;
