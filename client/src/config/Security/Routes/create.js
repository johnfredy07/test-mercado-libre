const create = ({ layout, url, ...rest }) => ({
  ...rest,
  layout,
  path: url
});

export default create;
