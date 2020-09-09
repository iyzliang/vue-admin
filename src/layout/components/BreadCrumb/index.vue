<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in breadList"
        :to="{ name: item.name }"
        :key="index"
        >{{ item.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadList: []
    }
  },

  watch: {
    $route: {
      handler (route) {
        if (route.meta.breadList) {
          this.breadList = route.meta.breadList
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
.bread-crumb {
  .el-breadcrumb {
    height: 60px;
    line-height: 60px;
  }
}
</style>
