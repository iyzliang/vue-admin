<template>
  <div class="side-collapse">
    <i
      :class="{ 'el-icon-s-unfold': opened, 'el-icon-s-fold': !opened }"
      @click="toggleOpen"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'side-collapse',

  computed: {
    opened () {
      return this.$store.state.app.opened
    }
  },

  methods: {
    toggleOpen () {
      this.$store.commit('SET_OPEND', !this.opened)
    }
  }
}
</script>

<style lang="scss" scoped>
.side-collapse {
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  > i {
    font-size: 18px;
    color: #363f44;
    cursor: pointer;
  }
}
</style>
