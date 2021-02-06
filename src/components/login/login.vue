
<!--
 * @Author: XS 769276639qq.com
 * @Date: 2020-10-11 22:03:43
 * @Last Modified by: XS
 * @Last Modified time: Do not edit
 * @Description: 登录模块
 -->
<template>
  <div class="login">
    <div class="login-box">
      <!-- 登录模块 -->
      <div class="logo">
        <img src="@/assets/images/hanbao1.png"
             alt="LOGO"
             width="43"
             height="43">
      </div>
      <h2 class="tit">综测管理平台</h2>
      <div class="name">汉堡企业高效管理</div>
      <!-- 输入框填写部分 -->
      <div class="num">
        <img src="@/assets/images/hat.svg"
             alt="">
        <!-- <select
          class="num"
          v-model="query.school"
          style="color:#999;margin-left:-6px;"
        >
          <option
            value=""
            style="color:#999;display:none;"
          >————请选择组织单位————</option>
          <option value="仲恺农业工程学院">仲恺农业工程学院</option>
        </select> -->
        <input type="text"
               class="num"
               v-model="query.school"
               placeholder="请输入学校">
      </div>
      <div class="num">
        <img src="@/assets/images/pencil.svg"
             alt="">
        <input type="text"
               class="num"
               v-model="query.className"
               placeholder="请输入班级名称">
      </div>
      <div class="num">
        <img src="@/assets/images/user.svg"
             alt="">
        <input type="text"
               class="num"
               v-model="query.loginName"
               placeholder="请输入系统账号">
      </div>
      <div class="num">
        <img src="@/assets/images/lock.svg"
             alt="">
        <input type="password"
               class="num"
               v-model="query.password"
               placeholder="请输入密码">
      </div>
      <!-- 输入框填写部分 -->

      <!-- 密码操作 -->
      <div class="passwdOptions">
        <el-button type="text">忘记密码</el-button>
        <el-button type="text">修改密码</el-button>
      </div>
      <!-- 密码操作 -->

      <div>
        <el-button type="primary"
                   class="login_btn"
                   @click="login">登录</el-button>
      </div>
      <div>
        <el-button type="primary"
                   class="login_btn"
                   @click="register">创建班级</el-button>
      </div>
      <!-- <div class="passwdOptions">
        <el-button
          type="text"
          style="margin-left:300px;"
          @click="createClass"
        >创建班级</el-button>
      </div> -->
    </div>
    <!-- 登录模块 -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      query: {
        school: '',
        className: '',
        loginName: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      const queryData = JSON.stringify(this.query)
      try {
        const res = await this.$http.post(
          'login',
          queryData,
          {
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
          }
        )
        console.log(res)
        if (res.data.code === 200) {
          this.$message.success('登录成功！')
          location.href = 'http://81.71.142.81:9000/service_studyScore/test'
        } else {
          this.$message.error('登录失败！')
        }
      } catch (err) {
        console.log(err)
        this.$message.error('登录失败')
      }
    },
    createClass () {
      this.$router.push('createClass')
    },
    register () {
      this.$router.push('register')
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
  }
  .login_btn:hover {
    opacity: 0.8;
  }
}
</style>
