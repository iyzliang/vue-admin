<template>
  <div class="side-bar" :style="{ width: isCollapse ? '65px' : '200px' }">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="menuActive"
      :collapse="isCollapse"
      unique-opened
      router
      text-color="#606266">
      <template v-for="item in menuList">
        <el-menu-item v-if="item.children.length === 0" :key="item.menuId" :index="item.menuId" :disabled="item.disabled" :route="{ name: item.routeName }">
          <i style="marginRight: 10px" :class="item.icon"></i>
          <span slot="title">{{ item.menuName }}</span>
        </el-menu-item>
        <el-submenu v-else :key="item.menuId" :index="item.menuId">
          <template slot="title">
            <i style="marginRight: 10px" :class="item.icon"></i>
            <span slot="title">{{ item.menuName }}</span>
          </template>
          <el-menu-item v-for="el in item.children" :key="el.menuId" :index="el.menuId" :disabled="el.disabled" :route="{ name: el.routeName }">
            {{ el.menuName }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'side-bar',

  computed: {
    menuList () {
      return this.$store.state.app.menuList
    },
    menuActive () {
      return this.$store.state.app.menuActive
    },
    isCollapse () {
      return !this.$store.state.app.opened
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  height: 100%;
  background-color: $color-bg2;
  overflow-y: scroll;
  transition: width 0.3s ease-in-out;
  background-color:#EBF1F8;
  overflow: hidden;
}
</style>
