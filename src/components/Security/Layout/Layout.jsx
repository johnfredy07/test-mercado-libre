import React from 'react';
import {
  Layout as AntLayout, Breadcrumb, Row, Col
} from 'antd';
import * as PropTypes from 'prop-types';
import Logo from './Logo';

const { Header, Content, Footer } = AntLayout;

const Layout = ({ children }) => (
  <AntLayout className="custom-layout">
    <Header className="custom-header">
      <Row>
        <Col span={4}>
          <Logo />
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
};

export default Layout;
