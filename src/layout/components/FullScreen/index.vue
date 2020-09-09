<template>
  <div class="full-screen">
    <i class="el-icon-full-screen" @click="toggleFull"></i>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  methods: {
    toggleFull () {
      console.log(screenfull)
      if (!screenfull.isEnabled) {
        this.$message({
          type: 'warning',
          message: '浏览器不支持全屏方法！'
        })
        return false
      }
      screenfull.toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
.full-screen {
  width: 40px;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
</style>
