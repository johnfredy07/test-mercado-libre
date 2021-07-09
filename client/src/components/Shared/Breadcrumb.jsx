import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ categories }) => (
  <div className="breadcrumb">
    {(categories || []).map((item, index) => (<span key={index}>{item}</span>))}
  </div>
);

Breadcrumb.propTypes = {
  categories: PropTypes.array,
};

export default Breadcrumb;
