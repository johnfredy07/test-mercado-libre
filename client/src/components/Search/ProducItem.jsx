import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from './Image';
import { currency } from '../../utils/general';
import shippingPicture from '../../assets/img/ic_shipping2x.png';

const ProducItem = ({ item }) => {
  const {
    price, title, picture, address, id, freeShipping
  } = item;

  return (
    <Link to={`/item/${id}`}>
      <div className="card">
        <Image
          picture={picture}
        />
        <div>
          <div>
            <h2>
              <span>{currency(price?.currency)}</span>
              {parseInt(price.amount).toLocaleString('de-DE')}
              {price.decimals > 0 && <sup>{price.decimals}</sup>}
            </h2>
            {freeShipping && (
              <Image
                picture={shippingPicture}
              />
            )}
          </div>
          <h3>{title}</h3>
        </div>
        <small>{address?.state_name}</small>
      </div>
    </Link>
  );
};

ProducItem.propTypes = {
  item: PropTypes.object,
};

export default ProducItem;
