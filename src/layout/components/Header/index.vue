<template>
  <div class="layout-header">
    <div class="header_d1">
      <side-collapse />
      <bread-crumb />
    </div>
    <div class="header_d2">
      <full-screen />
      <user-dropdown />
    </div>
  </div>
</template>

<script>
import sideCollapse from '../SideCollapse'
import breadCrumb from '../BreadCrumb'
import fullScreen from '../FullScreen'
import userDropdown from '../UserDropdown'

export default {
  name: 'layout-header',

  components: {
    sideCollapse,
    breadCrumb,
    fullScreen,
    userDropdown
  }
}
</script>

<style lang="scss" scoped>
.layout-header {
  width: 100%;
  height: $headerHeight;
  line-height: $headerHeight;
  background-color: $color-bg1;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header_d1 {
    display: flex;
  }
  .header_d2 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
