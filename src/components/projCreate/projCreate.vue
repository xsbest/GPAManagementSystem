<template>
  <div class="projCreate">

        <el-input
          type="text"
          v-model="obj"
          placeholder='请输入需要计算的学科（例如"大学英语"），每个学科以“，”分隔'
        ></el-input>

        <el-input
          v-model="score"
          type="text"
          placeholder="请输入科目对应需要计算的属性（例如“绩点”，“学分”）（根据本校规则自行制定），每个学科以“，”分隔"
        ></el-input>

        <span> 总成绩=</span>
        <el-input
          v-model="query.formula"
          style="display:inline-block;"
          type="text"
          placeholder="请输入公式，公式里计算项目名字必须和以上填入的属性相同（如：(绩点+学分)/2）"
        ></el-input>

        <el-button @click="submit">提交</el-button>

  </div>
</template>
<script>
export default {
  data () {
    return {
      score: '',
      obj: '',
      query:
        {
          keMu: [],
          shuXing: [],
          formula: ''
        }

    }
  },
  methods: {
    async submit () {
      console.log(this.query)
      this.turnArr()
      const res = await this.$http.post('sp-1.0-SNAPSHOT/dealInitStudyScoreTable',
        JSON.stringify(this.query),
        { headers: { 'Content-Type': 'application/json;charset=utf-8' } })
      console.log(res)
    },
    turnArr () {
      this.query.keMu = this.obj.split('，')
      this.query.shuXing = this.score.split('，')

      console.log(this.query.keMu)
      console.log(this.query.shuXing)
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
