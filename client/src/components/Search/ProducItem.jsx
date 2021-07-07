import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const ProducItem = (item) => {
  const {
    price, title, picture, thumbnail, address
  } = item;
  console.log('props');
  return (
    <article className="card">
      <Image
        picture={picture || 'https://http2.mlstatic.com/D_NQ_NP_776753-MCO45336221420_032021-V.webp'}
      />
      <div>
        <div>
          <h2>
            <span>help.currencySymbol(price.currency)</span>
          </h2>
        </div>
        <h3>{title || 'title'}</h3>
      </div>
      <small>{address?.state_name || 'address'}</small>
    </article>
  );
};

ProducItem.propTypes = {};

export default ProducItem;
