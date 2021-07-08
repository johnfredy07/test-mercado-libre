import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { ProducItem } from '../components/Search';

const Items = ({ history, handleScope }) => {
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    handleScope({ search: { value: state?.detail } });
  }, []);

  return (
    <div>
      <ProducItem history={history} item={{}} />
      <ProducItem history={history} item={{}} />
    </div>
  );
};

Items.propTypes = {
  history: PropTypes.object,
  handleScope: PropTypes.func,
};

export default Items;
