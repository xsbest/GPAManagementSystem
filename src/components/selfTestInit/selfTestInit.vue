<template>
  <div class="selfTestInit">
    <!-- 按钮们 -->
    <div class="buttons">
      <el-button size="small"
                 type="primary"
                 @click="showAddBox">
        初始化新增
      </el-button>
      <div class="search">
        <el-input class="search-input"
                  placeholder="请输入查询关键字"
                  size="small"></el-input>
        <el-button size="small"
                   type="primary">
          查询
        </el-button>
      </div>

    </div>
    <!-- 表格 -->
    <el-table :data="tableData"
              border
              stripe
              style="width: 100%">
      <el-table-column prop="date"
                       header-align="center"
                       align="center"
                       label="日期">
      </el-table-column>
      <el-table-column prop="date"
                       header-align="center"
                       align="center"
                       label="日期">
      </el-table-column>
      <el-table-column prop="date"
                       header-align="center"
                       align="center"
                       label="日期">
      </el-table-column>
      <el-table-column prop="date"
                       header-align="center"
                       align="center"
                       label="日期">
      </el-table-column>

    </el-table>

    <el-dialog :close-on-click-modal="false"
               title="新增初始化"
               :visible.sync="addVisible"
               width="32%">
      <el-Form ref="formRef"
               :model="formData">
        <el-form-item label="自测分数类型:"
                      label-width="140px"
                      prop="addTestScoreType">
          <el-input v-model="formData.addTestScoreType"
                    style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="分数比例:"
                      label-width="140px"
                      prop="proportion">
          <el-input v-model="formData.proportion"
                    style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="自测截止时间:"
                      label-width="140px"
                      prop="studentDeadline">
          <el-input v-model="formData.studentDeadline"
                    style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="自测审核截止时间:"
                      label-width="140px"
                      prop="managerDeadline">
          <el-input v-model="formData.managerDeadline"
                    style="width:80%"></el-input>
        </el-form-item>
        <el-form-item label="年份:"
                      label-width="140px"
                      prop="year">
          <el-input v-model="formData.year"
                    style="width:80%"></el-input>
        </el-form-item>
      </el-Form>
      <div style="margin:10px 220px">
        <el-button size="small"
                   @click="addVisible = false"
                   style="margin-right:5px">取 消</el-button>
        <el-button size="small"
                   type="primary"
                   @click="submit">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{ date: 123 }],
      addVisible: false,
      formData: {
        addTestScoreType: ''
      }
    }
  },
  methods: {
    showAddBox () {
      this.addVisible = true
    },
    async submit () {
      console.log(this.formData)
      const res = await this.$http.post('http://81.71.142.81:9000/zongce2/service/service_self/setInit', {
        ...this.formData
      })
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: space-between;
  .search {
    width: 300px;
    .search-input {
      width: 200px;
    }
    .el-button {
      display: inline-block;
      margin-left: 10px;
    }
  }
}
</style>
