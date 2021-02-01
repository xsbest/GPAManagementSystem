<template>
  <!-- 学生自测初始化 -->
  <div class="projCreate">
    <el-input v-model="query.formula"
              placeholder="请输入公式,比如:自测=文体*0.2+思想"></el-input>
    <el-input v-model="query.time"
              placeholder="截至时间"></el-input>
    <el-input v-model="query.text"
              placeholder="请输入自测内容"></el-input>
    <el-input v-model="query.student.school"
              placeholder="学校"></el-input>
    <el-input v-model="query.student.className"
              placeholder="班级"></el-input>
    <el-input v-model="query.student.loginName"
              placeholder="账号"></el-input>
    <el-input v-model="query.student.password"
              placeholder="密码"></el-input>
    <el-button @click="submit">提交</el-button>
  </div>
</template>
<script>
import { selfTestInit } from '@/api/api'
export default {
  data () {
    return {
      addscoretypeName: '', // 分数名称
      proportion: '', // 分数比例
      selftestdeadline: '', // 自测截止时间
      checkdeadline: '', // 自测审核截止时间
      year: '', // 年份
      query: {

      }
    }
  },
  methods: {
    async submit () {
      const res = await selfTestInit(JSON.stringify(this.query))
      console.log(res)
    },
    turnArr () {

    }
  }
}
</script>
<style lang="scss" scoped>
p {
  text-align: left;
}
.el-input {
  margin-top: 20px;
  width: 800px;
  display: block;
}
</style>
