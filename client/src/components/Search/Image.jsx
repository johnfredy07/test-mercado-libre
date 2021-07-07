import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ picture, thumbnail, alt = '' }) => (
  <figure className="figure">
    <img
      src={picture}
      alt={alt}
      className="picture"
    />
  </figure>
);

Image.propTypes = {
  picture: PropTypes.string,
  thumbnail: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
