<template>
  <div class="gradeInit">
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

    <el-dialog title="提示"
               :visible.sync="addVisible"
               width="30%">
      <span>这是一段信息</span>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="addVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{ date: 123 }],
      addVisible: false
    }
  },
  methods: {
    showAddBox () {
      this.addVisible = true
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
