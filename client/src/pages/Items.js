import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { ProducItem } from '../components/Search';
import { Loading } from '../components/Shared';

const Items = ({ history, handleScope }) => {
  const location = useLocation();
  const { state } = location;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    handleScope({ search: { value: state?.detail } });
  }, []);

  useEffect(() => {
    const getData = async () => axios
      .get(`${process.env.REACT_APP_API}/api/items?q=${state?.detail}`)
      .then((res) => {
        setData(res?.data?.items);
        console.log('data', res?.data);
        handleScope((_scope) => ({ ..._scope, categories: res?.data?.categories }));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error - get items: ', err);
        setLoading(false);
      });

    if (!state?.detail) {
      setData([]);
    }
    setLoading(true);
    getData();
  }, [state]);

  if (loading) return <Loading />;

  return (
    <div>
      {(data || []).map((item, index) => (<ProducItem history={history} item={item} key={index} />))}
    </div>
  );
};

Items.propTypes = {
  history: PropTypes.object,
  handleScope: PropTypes.func,
};

export default Items;
