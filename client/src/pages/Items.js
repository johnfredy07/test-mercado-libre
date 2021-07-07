import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ProducItem } from '../components/Search';

const Items = ({ history, match, handleScope }) => {
  const { search } = match.params;

  useEffect(() => {
    handleScope({ search: { value: search } });
  }, []);

  return (
    <div>
      <ProducItem item={{}} />
      <ProducItem />
    </div>
  );
};

Items.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  handleScope: PropTypes.func,
};

export default Items;
