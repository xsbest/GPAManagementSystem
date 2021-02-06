
<!--
 * @Author: XS 769276639qq.com
 * @Date: 2020-10-14 22:39:21
 * @Last Modified by: XS
 * @Last Modified time: Do not edit
 * @Description: 注册
 -->
<template>
  <div class="login">
    <div class="login-box">
      <!-- 注册模块 -->
      <div class="logo">
        <img
          src="@/assets/images/hanbao1.png"
          alt="LOGO"
          width="43"
          height="43"
        >
      </div>
      <h2 class="tit">综测管理平台</h2>
      <div class="name">汉堡企业高效管理</div>
      <!-- 输入框填写部分 -->
      <div class="num">
        <img
          src="@/assets/images/hat.svg"
          alt=""
        >

        <!-- <select
          class="num"
          style="color:#999;margin-left:-6px;"
        >
          <option
            value=""
            style="color:#999;display:none;"
          >————请选择组织单位————</option>
          <option value="">仲恺农业工程学院</option>
        </select> -->
        <input
          type="text"
          class="num"
          v-model="query.school"
          placeholder="请输入学校"
        >
      </div>
      <div class="num">
        <img
          src="@/assets/images/pencil.svg"
          alt=""
        >
        <input
          type="text"
          class="num"
          v-model="query.className"

          placeholder="请输入班级名称"
        >
      </div>
      <div class="num">
        <img
          src="@/assets/images/user.svg"
          alt=""
        >
        <input
          type="text"
          class="num"
          v-model="query.loginName"
          placeholder="请输入系统账号"
        >
      </div>

      <div class="upload">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList"
          accept=".xlxs"
        >
          <el-button
            size="small"
            type="primary"
            @click="download"
          >点击下载模板</el-button>
          <el-button
            size="small"
            type="primary"
          >点击上传</el-button>
          <div
            slot="tip"
            class="el-upload__tip"
          >
            <p>请下载模板后根据模板格式填写，</p>
            <p>并点击上传班级信息表（注意格式为.xlsx）
            </p>
          </div>

        </el-upload>
        <div>
          <input
            @change="getFile($event)"
            type="file"
          >
        </div>
      </div>
      <!-- 输入框填写部分 -->

      <div>
        <el-button
          type="primary"
          class="login_btn"
          @click="submit"
        >确认</el-button>
      </div>

    </div>
    <!-- 注册模块 -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      query: {
        school: '',
        className: '',
        loginName: ''
      },
      file: '',
      url: {},
      fileList: []
    }
  },
  methods: {
    handleChange () {},
    download () {
      location.href =
        'http://81.71.142.81/1014/static/%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E6%A8%A1%E6%9D%BF.xlsx'
    },
    // 获取文件
    getFile ($event) {
      this.file = event.target.files[0]
      console.log(this.file)
    },
    async submit () {
      var fd = new FormData()
      console.log(fd)
      fd.append('school', this.query.school)
      fd.append('className', this.query.className)
      fd.append('loginName', this.query.loginName)
      fd.append('file', this.file)
      const res = await this.$http.post(
        'sp-1.0-SNAPSHOT/registerStudent',
        fd,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      console.log(res)
      if (res.status === 200) {
        this.$message.success('创建成功！初始密码为“000000”')
        this.$router.push('login')
      }
    },
    submitUpload () {}
  }
}
</script>
<style lang="scss" scoped>
$bg: rgba(99, 185, 190, 1);
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
  //上传
  .upload {
    margin-top: 20px;
    .el-button {
      background-color: $bg;
      margin-right: 20px;
      &:hover {
        opacity: 0.8;
      }
    }
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
