import React from 'react';
import {
  Layout as AntLayout, Breadcrumb, Row, Col
} from 'antd';
import * as PropTypes from 'prop-types';
import Logo from './Logo';
import Search from '../../Search/Search';

const { Header, Content, Footer } = AntLayout;

const Layout = ({ children, history, globalScope }) => (
  <AntLayout className="custom-layout">
    <Header className="custom-header">
      <Row>
        <Col span={4}>
          <Logo />
        </Col>
        <Col span={17}>
          <Search history={history} globalScope={globalScope} />
        </Col>
      </Row>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">{children}</div>
    </Content>
    <Footer />
  </AntLayout>
);

Layout.propTypes = {
  children: PropTypes.any,
  history: PropTypes.object,
  globalScope: PropTypes.object,
};

export default Layout;
