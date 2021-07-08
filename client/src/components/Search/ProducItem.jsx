import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from './Image';

const ProducItem = ({ history, item }) => {
  const {
    price, title, picture, thumbnail, address, id
  } = item;

  return (
    <Link to={`/item/${id}`}>
      <div className="card">
        <Image
          picture={picture || 'https://http2.mlstatic.com/D_NQ_NP_776753-MCO45336221420_032021-V.webp'}
        />
        <div>
          <div>
            <h2>
              <span>10.000</span>
            </h2>
          </div>
          <h3>{title || 'title'}</h3>
        </div>
        <small>{address?.state_name || 'address'}</small>
      </div>
    </Link>
  );
};

ProducItem.propTypes = {
  history: PropTypes.object,
  item: PropTypes.object,
};

export default ProducItem;
