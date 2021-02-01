
<!--
 * @Author: XS 769276639qq.com
 * @Date: 2020-10-13 19:16:24
 * @Last Modified by: XS
 * @Last Modified time: Do not edit
 * @Description: 创建班级
 -->
<template>
  <div class="login">
    <div class="login-box">
      <!-- 登录模块 -->
      <div class="logo">
        LOGO
      </div>
      <h2 class="tit">综测管理平台</h2>
      <div class="name">汉堡企业高效管理</div>
      <!-- 输入框填写部分 -->
      <div class="num">
        <img
          src="@/assets/images/hat.svg"
          alt=""
        >
        <select
          class="num"
          style="color:#999;margin-left:-6px;"
        >
          <option
            value=""
            style="color:#999;display:none;"
          >————请选择组织单位————</option>
          <option value="">仲恺农业工程学院</option>
        </select>
      </div>
      <div class="num">
        <img
          src="@/assets/images/pencil.svg"
          alt=""
        >
        <input
          type="text"
          class="num"
          placeholder="请输入班级名称"
        >
      </div>

      <div class="num">
        <img
          src="@/assets/images/lock.svg"
          alt=""
        >
        <input
          type="text"
          class="num"
          placeholder="请输入密码"
        >
      </div>
      <!-- 输入框填写部分 -->

      <div>
        <el-button
          type="primary"
          class="login_btn"
          @click="login"
        >立即创建</el-button>
      </div>

    </div>
    <!-- 登录模块 -->
  </div>
</template>
<script>
const data = JSON.stringify({
  school: '仲恺农业工程学院',
  className: 'saas',
  loginName: 131,
  password: 123
})
export default {
  data () {
    return {}
  },
  methods: {
    async login () {
      const res = await this.$http.post(
        'sp-1.0-SNAPSHOT/login',
        JSON.stringify({ student: data }),
        {
          headers: { 'Content-Type': 'application/json;charset=utf-8' }
        }
      )
      console.log(res)
    },
    createClass () {
      this.$router.push('createClass')
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes stepIn {
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
    box-shadow: 10px 10px 5px #999;
  }
}
.login {
  height: 100%;
  width: 100%;
  background-color: rgba(99, 185, 190, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    animation: stepIn 2s forwards;
    border-radius: 5px;
    width: 434px;
    background-color: #fff;
  }
  .logo {
    margin: 48px auto 20px;
    border-radius: 5px;
    line-height: 48px;
    width: 234px;
    height: 48px;
    color: #fff;
    font-size: 12px;
    background-color: rgba(99, 185, 190, 1);
    text-align: center;
  }
  .tit {
    font-size: 34px;
    font-weight: 500;
    color: #333;
  }
  .name {
    color: #999;
    font-size: 16px;
    margin-top: 16px;
  }
  .num {
    border-bottom: 1px solid #ccc;
    width: 328px;
    margin: 20px auto 0;
    position: relative;
    input,
    select {
      border: 0;
      outline: 0;
      height: 27px;
      color: #000;
      display: inline-block;
      width: 230px;
    }

    img {
      position: absolute;
      left: 0;
      bottom: 5px;
      width: 27px;
      height: 29px;
    }
  }
  .passwdOptions {
    font-size: 13px;
    width: 328px;
    height: 50px;
    margin: 0 auto;
    position: relative;
    color: rgba(99, 185, 190, 1);
    .el-button {
      position: absolute;
      font-size: 12px;
    }
    .el-button:first-child {
      left: 0;
    }
    .el-button:last-child {
      right: 0;
    }
  }
  .login_btn {
    background-color: rgba(99, 185, 190, 1);
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    width: 328px;
    margin-bottom: 20px;
    margin-top: 30px;
  }
  .login_btn:hover {
    opacity: 0.8;
  }
}
</style>
