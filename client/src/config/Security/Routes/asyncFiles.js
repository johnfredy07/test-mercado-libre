import { lazy } from 'react';

const asyncFiles = {
  items: lazy(() => import('../../../pages/Items.js')),
  item: lazy(() => import('../../../pages/Item.js')),
  // notFound: lazy(() => import('../../../pages/Security/Other/NotFound404.js')),
};

export default asyncFiles;
