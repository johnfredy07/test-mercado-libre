import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import Image from './Image';

const Detail = ({ item }) => {
  const {
    picture, title, price, description
  } = item;
  return (
    <div className="product">
      <Image
        picture={picture || 'https://http2.mlstatic.com/D_NQ_NP_776753-MCO45336221420_032021-V.webp'}
      />
      <div className="detail">
        <small>
          {item.condition === 'new' ? 'Nuevo - ' : 'Usado - '}
          {item.sold_quantity}
          {' '}
          Vendidos
        </small>
        <h1>{title || 'Title'}</h1>
        {(price || true) && (
        <h2>
          <span>$</span>
          {
            parseInt(8000).toLocaleString('de-DE')
          }
          {(price?.decimals > 0 || true) && (
          <sup>{price?.decimals || '00'}</sup>
          )}
        </h2>
        )}
        <Button type="primary">Comprar</Button>
      </div>
      <div className="description">
        <h2>Descripcion del producto</h2>
        <div>{description || 'description'}</div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  item: PropTypes.object,
};

export default Detail;
