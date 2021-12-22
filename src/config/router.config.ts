export default [
  {
    title: '',
    path: '/',
    Component: () => import('@/pages/homePage/index'),
  },
  {
    title: '',
    path: '/ada',
    Component: () => import('@/pages/ada/index'),
  },
  {
    title: '',
    path: '/articles/:id',
    Component: () => import('@/pages/articles/index'),
  },
];
