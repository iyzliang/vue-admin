export default {
  state: {
    opened: true,
    menuList: [
      {
        menuId: '1',
        disabled: false,
        routeName: 'home',
        icon: 'el-icon-s-home',
        menuName: '首页',
        children: []
      }
    ],
    menuActive: '1'
  },
  mutations: {
    SET_OPEND (state, payload) {
      state.opened = payload
    }
  }
}
