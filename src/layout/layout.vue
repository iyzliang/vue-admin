<template>
  <div class="layout-wrapper">
    <side-bar />
    <div class="layout-container">
      <y-header></y-header>
      <div class="layout-container-main">
        <transition name="fade-transverse"  mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import yHeader from './components/Header'
import SideBar from './components/SideBar'
export default {
  name: 'layout-wrapper',

  components: {
    yHeader,
    SideBar
  }
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  width: 100%;
  height: 100%;
  min-width: 900px;
  display: flex;
  .layout-container {
    flex: auto;
    transition: width 0.3s ease-in-out;
    height: 100%;
    .layout-container-main {
      width: 100%;
      height: calc(100% - 60px);
      overflow: scroll;
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
</style>
