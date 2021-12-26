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
  {
    title: '',
    path: '/link',
    Component: () => import('@/pages/link/index'),
  },
  {
    title: '',
    path: '/message',
    Component: () => import('@/pages/message/index'),
  },
];
