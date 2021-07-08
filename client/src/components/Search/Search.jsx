import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Input, Form } from 'antd';

const { Search: InputSearch } = Input;

const Search = ({ history, globalScope }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { search } = globalScope;

  useEffect(() => {
    form.setFieldsValue({ search: search?.value });
  }, [search]);

  const onSearch = (value) => history.push({
    pathname: '/items',
    search: `?search=${value}`,
    state: { detail: value }
  });
  return (
    <div>
      <Form form={form}>
        <Form.Item name="search" className="aling-search">
          <InputSearch
            placeholder={t('search.placeholder')}
            size="large"
            onSearch={onSearch}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

Search.propTypes = {
  history: PropTypes.object,
  globalScope: PropTypes.object,
};

export default Search;
