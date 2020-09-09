import axios from 'axios'
import Config from './config'
import { Loading, Message } from 'element-ui'
import Vue from 'vue'
import router from '@/router'

const $axios = axios.create({
  timeout: Config.timeout,
  baseURL: Config.baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})
// 并发请求
Vue.prototype.$http = axios
// 在全局请求和响应拦截器中添加请求状态
let loading = null

$axios.interceptors.request.use(config => {
  loading = Loading.service({ text: '拼命加载中...' })
  return config
}, error => {
  return Promise.reject(error)
})

$axios.interceptors.response.use(response => {
  if (loading) loading.close()
  return Promise.resolve(response.data)
}, error => {
  if (loading) loading.close()
  if (error.response) {
    let msg = ''
    switch (error.response.status) {
      case 400:
        msg = error.response.data.message
        break
      case 401:
        msg = '未授权，请登录'
        window.location.pathname !== '/login' && router.replace({ name: 'login' })
        break
      case 403:
        msg = '拒绝访问'
        break
      case 404:
        msg = `请求地址出错: ${error.response.config.url}`
        break
      case 408:
        msg = '请求超时'
        break
      case 500:
        msg = '服务器内部错误'
        break
      case 501:
        msg = '服务未实现'
        break
      case 502:
        msg = '网关错误'
        break
      case 503:
        msg = '服务不可用'
        break
      case 504:
        msg = '网关超时'
        break
      case 505:
        msg = 'HTTP版本不受支持'
        break
      default: break
    }
    Message.error(msg)
  } else {
    // 请求超时或者网络有问题
    if (error.message.includes('timeout')) {
      Message.error('请求超时！请检查网络是否正常')
    } else {
      Message.error('请求失败，请检查网络是否已连接')
    }
  }
  return Promise.reject(error)
})
export default $axios
