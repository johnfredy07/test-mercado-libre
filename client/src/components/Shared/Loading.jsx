import React from 'react';
import * as PropTypes from 'prop-types';
import { Col, Row, Spin } from 'antd';

const Loading = ({ loading, children, custom }) => (
  <Row type="flex" className="custom-loading-row">
    <Col span={24} className="custom-loading-col">
      <Spin size="large" spinning={loading} className={custom || 'custom-loading-spin'}>
        {children}
      </Spin>
    </Col>
  </Row>
);

Loading.propTypes = {
  children: PropTypes.any,
  custom: PropTypes.string,
  loading: PropTypes.bool,
};

export default Loading;
