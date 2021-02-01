<template>
  <div class="inedx">
    <!-- box1区域  -------------------------------------------- -->

    <el-card class="box1">
      <div class="header">新增数据</div>
      <div>
      </div>
    </el-card>
    <!-- box2区域  -------------------------------------------- -->
    <el-card class="box2">
      <div class="header">项目管理</div>

      <div>
      </div>
    </el-card>
    <!-- box3区域  -------------------------------------------- -->

    <el-card class="box3">
      <div class="header"></div>

      <div>

      </div>
    </el-card>

    <!-- box4区域  -------------------------------------------- -->

    <el-card class="box4">
      <div class="header"></div>

      <div>
      </div>
    </el-card>

  </div>
</template>
<style lang="scss" scoped>
.box1,
.box2,
.box3,
.box4 {
  width: 35%;
  height: 250px;
  float: left;
  margin-left: 100px;
  margin-top: 30px;
  position: relative;
  overflow: visible;
  background-color: #f2f2f2;
}
.header {
  width: 115px;
  height: 40px;
  background-color: rgba(204, 0, 0, 0.8);
  position: absolute;
  left: 10px;
  top: -18px;
  border-radius: 5px;
}
</style>
