<template>
  <div class="selfTestInit">
    <!-- 按钮们 -->
    <div class="buttons">
      <el-button size="small"
                 type="primary"
                 @click="showAddBox('add')">
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
      <el-table-column fixed="right"
                       header-align="center"
                       align="center"
                       label="操作">
        <template slot-scope="scope">
          <el-button @click="deleteRow(scope.row)"
                     type="text"
                     size="small">删除</el-button>
          <el-button type="text"
          @click="showAddBox('edit',scope.row)"
                     size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :close-on-click-modal="false"
               :title="addInitBoxType==='add'?'新增初始化':'编辑初始化'"
               :visible.sync="addVisible"
               width="480px">
      <el-Form ref="formRef"
               :model="formData">
        <el-form-item label="自测分数类型:"
                      label-width="140px"
                      prop="selfTestScoreType">
          <el-input v-model="formData.selfTestScoreType"
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
        <el-form-item label="新年份:"
                      label-width="140px"
                      prop="year"
                      :hidden="addInitBoxType==='add'"
                      >
          <el-input v-model="formData.year"
                    style="width:80%"></el-input>
        </el-form-item>
      </el-Form>
      <div style="margin:10px auto; text-align:center; width:300px">
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
      addInitBoxType: 'add',
      formData: {
        schoolName: '仲恺',
        department: '信科院'
      }
    }
  },
  methods: {
     deleteRow (row) {
       console.log(row)
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    resetForm (ref) {
      this.$refs[ref].resetFields()
    },
    showAddBox (type, row) {
      this.addVisible = true
      // 新增
      if (type === 'add') {
        this.resetForm('formRef')
      } else {
      // 编辑
        console.log(row)
      }

      this.addInitBoxType = type
    },
    async submit () {
      this.formData.proportion = Number(this.formData.proportion)
      console.log(this.formData)

      const res = await this.$http.post('http://81.71.142.81:8006/service_self/setInit/addInitByAdmin', [{
        ...this.formData
      }])
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
