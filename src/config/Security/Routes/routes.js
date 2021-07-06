import create from './create';
import asyncFiles from './asyncFiles';

const routes = [
  create({
    component: asyncFiles.search,
    layout: true,
    url: '/search',
    target: 'search',
  }),
];

export default routes;
