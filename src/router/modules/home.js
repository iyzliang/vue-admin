export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "HOME" */ '@/views/Home/index'),
    meta: {
      menuId: 1,
      activeId: 1,
      icon: 'yuanyue-lianxiqumu',
      breadList: [
        {
          title: '首页'
        }
      ]
    }
  }
]
