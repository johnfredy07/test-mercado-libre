import React from 'react';
import {
  Layout as AntLayout, Breadcrumb, Row, Col
} from 'antd';
import * as PropTypes from 'prop-types';
import Logo from './Logo';
import Search from '../../Search/Search';

const { Header, Footer } = AntLayout;

const Layout = ({ children, history, globalScope }) => {
  console.log('globalScope', globalScope);
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
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
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
