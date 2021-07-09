import React, { useCallback, useState } from 'react';
import * as PropTypes from 'prop-types';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from '../../../components/Security/Layout';
import AppSuspense from '../../../components/Security/Layout/AppSuspense';

const App = ({ language }) => {
  const [scope, setScope] = useState({ search: null });

  // scope para manejo de busqueda y parametros
  const handleScope = useCallback(({ search, ...rest }) => {
    setScope((_scope) => ({ ..._scope, search, ...rest }));
  }, []);

  return (
    <ConfigProvider locale={language}>
      <Router>
        <AppSuspense>
          <Layout handleScope={handleScope} globalScope={scope} />
        </AppSuspense>
      </Router>
    </ConfigProvider>
  );
};

App.propTypes = {
  language: PropTypes.object,
};

export default App;
