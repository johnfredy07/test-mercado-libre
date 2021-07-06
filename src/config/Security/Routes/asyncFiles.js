import { lazy } from 'react';

const asyncFiles = {
  search: lazy(() => import('../../../pages/Search.js')),
  // notFound: lazy(() => import('../../../pages/Security/Other/NotFound404.js')),
};

export default asyncFiles;
