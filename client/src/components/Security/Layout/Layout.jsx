import React from 'react';
import {
  Layout as AntLayout, Row, Col
} from 'antd';
import * as PropTypes from 'prop-types';
import Logo from './Logo';
import Search from '../../Search/Search';
import { Breadcrumb } from '../../Shared';

const { Header, Footer } = AntLayout;

const Layout = ({ children, history, globalScope }) => {
  const { categories } = globalScope;
  return (
    <div>
      <AntLayout className="custom-layout">
        <Header className="custom-header">
          <Row>
            <Col span={3} className="icon-search">
              <Logo />
            </Col>
            <Col span={19}>
              <Search history={history} globalScope={globalScope} />
            </Col>
          </Row>
        </Header>
      </AntLayout>
      <main className="ant-layout-content">
        <div className="container">
          <Breadcrumb categories={categories || []} />
          <div>{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  history: PropTypes.object,
  globalScope: PropTypes.object,
};

export default Layout;
