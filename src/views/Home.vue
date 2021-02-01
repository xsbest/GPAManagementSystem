<template>
  <el-container>
    <!-- 左侧导航栏 -->
    <el-aside width="200px">
      <div class="logo">
        <img src="@/assets/images/hanbao.png"
             alt=""
             width="34"
             height="33">
      </div>
      <el-menu default-active="2"
               class="el-menu-vertical-demo"
               text-color="000"
               @open="handleOpen"
               @close="handleClose">
        <el-submenu v-for="item in asideItems"
                    :key="item.index"
                    :index="item.index">
          <template slot="title">
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group style="padding:0;"
                              v-if="item.children!==undefined">
            <el-menu-item v-for="i in item.children"
                          :key="i.index"
                          :index="i.index"
                          class="menu-item">
              > {{i.name}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 中间头部 -->
      <el-header>
        <div class="tit">
          <img src="@/assets/images/title.svg"
               alt=""
               width="20"
               height="17">
          <span>班级首页</span>

        </div>
        <div style="position:absolute;width:300px; right:0; bottom:10px">
          <span>欢迎进入综测管理系统！</span>
          <el-button style="color: rgba(99, 185, 190, 1)"
                     @click="logout">退出登录</el-button>
        </div>
      </el-header>
      <!-- 主内容区域 -->
      <el-main>
        <h1>{{title}}</h1>
        <el-card class="main">
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  mounted () {
    // console.log(this.$route.path)
    // switch (this.$route.path) {
    //   case '/initAll': this.title = '初始化'; break
    //   case '/projCreate': this.title = '项目生成'; break
    //   case '/projJudge': this.title = '项目审核'; break
    //   case '/rightManage': this.title = '权限管理'; break
    // }
  },
  computed: {
    activeTitle () {
      // return this.$route.path.slice(1)
      return 1
    }
  },
  data () {
    return {
      asideItems: [{
        name: '初始化模块',
        index: 'initModule',
        children: [{
          name: '学考成绩初始化',
          index: 'gradeInit'
        },
        {
          name: '自测成绩初始化',
          index: 'selfTestInit'
        }]
      },
      {
        name: '成绩管理模块',
        index: 'gradeMangement',
        children: [
          {
            name: '学考成绩管理',
            index: 'gradeManageMent'
          },
          {
            name: '自测成绩管理',
            index: 'selfTestManageMent'
          },
          {
            name: '综测成绩管理',
            index: 'selfTestManageMent'
          }
        ]
      },
      {
        name: '权限管理模块',
        index: 'rightManagement'
      }
      ],
      title: ''
    }
  },
  methods: {
    logout () {
      this.$router.push('login')
    },
    handleOpen (index) {
      // const path = '/' + index
      // this.titleHandle(path)
      console.log(index)
    },
    handleClose () {

    },
    titleHandle (path) {
      console.log(path)
      switch (path) {
        case '/initAll': this.title = '用户初始化'; break
        case '/projCreate': this.title = '项目生成'; break
        case '/projJudge': this.title = '项目审核'; break
        case '/rightManage': this.title = '权限管理'; break
      }
    }

  }
}

</script>
<style lang="scss" scoped>
.menu-item {
  padding-left: 50px !important;
}
.tit {
  position: absolute;
  color: #999;
  font-size: 14px;
  height: 100%;
  span {
    display: inline-block;
    margin-left: 10px;
    transform: translateY(-3px);
  }
}
.logo {
  margin: 13px auto;
  text-align: center;
  line-height: 37px;
  width: 167px;
  height: 37px;
  border-radius: 2px;
  background-color: rgba(242, 242, 242, 0.6);
}
.el-container {
  height: 100%;
}
.el-header {
  position: relative;
  height: 67px !important;
  background-color: #f2f2f2;
  padding: 30px;
}
.el-aside {
  background-color: #3f3f3f;
  height: 100%;
}
.el-main {
  padding: 30px;
  text-align: left;
  h1 {
    left: 0;
    padding: 5px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(231, 224, 224);
  }
}
.el-menu-item.is-active {
  background-color: rgba(99, 185, 190, 1);
}
.el-menu-item:hover {
  background-color: rgba(242, 242, 242, 0.6);
}
.el-menu-item-group {
  ::v-deep .el-menu-item-group__title {
    padding: 0;
  }
}
</style>
