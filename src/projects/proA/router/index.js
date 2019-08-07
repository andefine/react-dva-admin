const router = {
  name: 'proA',
  path: '/proA',
  menusSecondLevel: [
    {
      name: 'page 1',
      path: '/Page1',
      component: () => import('proA/pages/Page1'),
    },
    {
      name: 'page 2',
      path: '/Page2',
      component: () => import('proA/pages/Page2'),
    },
  ],
}

export default router
