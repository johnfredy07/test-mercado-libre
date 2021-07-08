import create from './create';
import asyncFiles from './asyncFiles';

const routes = [
  create({
    component: asyncFiles.items,
    layout: true,
    url: '/items',
    target: 'items',
  }),
  create({
    component: asyncFiles.item,
    layout: true,
    url: '/item/:id?',
    target: 'items',
  }),
];

export default routes;
