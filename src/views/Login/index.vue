<template>
  <div class="login">
    <vue-particles
      class="login-particles"
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <el-card class="box-card">
      <div class="login-logo"></div>
      <el-form :model="loginForm" :rules="loginRules" autocomplete="on" label-position="left">
        <el-form-item prop="username">
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="用户名"
            prefix-icon="el-icon-user-solid"
            type="text"
            autocomplete="on">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            ref="password"
            v-model="loginForm.password"
            placeholder="密码"
            prefix-icon="el-icon-lock"
            type="password"
            autocomplete="on"
            @keyup.enter.native="handleLogin">
          </el-input>
        </el-form-item>
        <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登 录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      }
    }
  },

  mounted () {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },

  methods: {
    handleLogin () {
      console.log('logo')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  background-color: #f0f2f5;
  width: 100%;
  height: 100vh;
}
.login-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
}
.box-card {
  width: 300px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  .login-logo {
    width: 200px;
    height: 70px;
    margin: 0 auto;
    background-image: url('../../assets/images/logo-long.png');
    background-size: 100%;
    background-position: left top;
    background-repeat: no-repeat;
  }
}
</style>
