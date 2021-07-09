import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import Image from './Image';
import { currency } from '../../utils/general';

const Detail = ({ item }) => {
  const { t } = useTranslation();
  const {
    picture, title, price, description
  } = item;
  return (
    <div className="product">
      <Image
        picture={picture}
      />
      <div className="detail">
        <small>
          {item.condition === 'new' ? t('detail.new') : t('detail.used')}
          {item.sold_quantity}
          {' '}
          {t('detail.sold')}
        </small>
        <h1>{title}</h1>
        {(price) && (
        <h2>
          <span>{currency(price?.currency)}</span>
          {
            parseInt(price?.amount).toLocaleString('de-DE')
          }
          {(price?.decimals > 0) && (
          <sup>{price?.decimals}</sup>
          )}
        </h2>
        )}
        <Button type="primary" className="button">{t('detail.buy')}</Button>
      </div>
      <div className="description">
        <h2>{t('detail.description')}</h2>
        <div>{description}</div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  item: PropTypes.object,
};

export default Detail;
