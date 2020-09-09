<template>
  <div class="user-drop-down">
    <el-dropdown @command="handleCommand">
      <div class="user-drop">
        <span class="user-drop-text">
          {{ userName }}
          <i class="el-icon-caret-bottom"></i>
        </span>
        <img src="./user.gif" alt="user" @click="handleImg"/>
      </div>
      <el-dropdown-menu solt="dropdown">
        <el-dropdown-item command="changePWD">
          <a><i class="el-icon-user-solid"></i>修改密码</a>
        </el-dropdown-item>
        <el-dropdown-item divided command="logout">
          <a><i class="el-icon-switch-button"></i>登出</a>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'user-drop-down',

  data () {
    return {
      userName: ''
    }
  },

  mounted () {
    this.userName = localStorage.getItem('ZL_USERNAME') || ''
  },

  methods: {
    handleCommand (command) {
      switch (command) {
        case 'changePWD':
          console.log('改密码')
          break
        case 'logout':
          this.$router.push('/login')
          break
      }
    },
    handleImg (event) {
      if (event.detail === 3) {
        console.log('爆炸')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user-drop-down {
  padding: 0 12px;
  cursor: pointer;
  .user-drop {
    height: 100%;
    .user-drop-text {
      margin-right: 8px;
      > i {
        margin-left: 2px;
      }
    }
    > img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
      border-radius: 10px;
    }
  }
}
</style>
