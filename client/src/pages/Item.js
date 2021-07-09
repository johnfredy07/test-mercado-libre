import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Empty } from 'antd';
import { Detail } from '../components/Search';
import { Loading } from '../components/Shared';

const Item = ({ match, handleScope, globalScope }) => {
  const { id } = match.params;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const scope = globalScope || {};

  useEffect(() => {
    const getData = async () => axios
      .get(`${process.env.REACT_APP_API}/api/items/${id}`)
      .then((res) => {
        setData(res?.data?.item);
        handleScope({ ...scope, categories: res?.data?.categories });
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error - get items: ', err);
        setLoading(false);
      });

    if (!id) {
      setData({});
    }
    setLoading(true);
    getData();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div>
      {Object.keys(data || {}).length === 0 ? (<Empty />) : <Detail item={data} /> }
    </div>
  );
};

Item.propTypes = {
  match: PropTypes.object,
  handleScope: PropTypes.func,
  globalScope: PropTypes.object,
};

export default Item;
