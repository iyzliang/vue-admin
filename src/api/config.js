export default {
  // 请求的默认配置
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1 * 60 * 1000,
  reqConfig: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  }
}
