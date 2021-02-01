<template>
  <div>
    <el-steps :active="activeSteps"
              finish-status="success"
              simple
              style="margin-top: 20px">
      <el-step title="录入用户信息"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <!-- 信息录入 -->
    <div class="msgInput">
      <transition name="el-fade-in-linear">
        <div>
          <!-- 设置学校属性 -->
          <div v-show="activeSteps == 1"
               class="schoolMsg">
            <div>
              <span>学校名称: </span>
              <el-input placeholder="请输入学校名称"
                        type="text"
                        v-model="school">
              </el-input>
            </div>
            <div>
              <span>院系名称:</span>
              <el-input placeholder="请输入院系名称"
                        type="text"
                        v-model="department">
              </el-input>
            </div>
            <div>
              <span>专业名称:</span>
              <el-input placeholder="请输入专业名称"
                        type="text">
              </el-input>
            </div>
          </div>
          <!-- 设置综测属性 -->
          <div v-show="activeSteps == 2"
               class="">
            <div class="setTestMsg">
              <span>设置综测属性</span>
              <div class="Box">
                <el-tag :key="tag"
                        v-for="tag in dynamicTags"
                        closable
                        :disable-transitions="false"
                        @close="handleClose(tag)">
                  {{tag}}
                </el-tag>
                <el-input class="input-new-tag"
                          v-if="inputVisible"
                          v-model="inputValue"
                          ref="saveTagInput"
                          size="small"
                          @keyup.enter.native="handleInputConfirm"
                          @blur="handleInputConfirm">
                </el-input>
                <el-button v-else
                           class="button-new-tag"
                           size="small"
                           @click="showInput">+ 点击你要添加的属性</el-button>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <el-button size="small"
                 type="primary"
                 @click="jumpPrev">上一步</el-button>

      <el-button size="small"
                 type="primary"
                 @click="jumpNext">下一步</el-button>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      activeSteps: 1,
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      queryData: {},
      school: '',
      department: '',
      major: ['1']
    }
  },
  methods: {
    jumpPrev () {
      this.activeSteps--
    },
    jumpNext () {
      this.activeSteps++
      this.submitMsg()
    },
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      const inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    async submitMsg () {
      const queryData = JSON.stringify({
        school: this.school,
        department: this.department,
        major: this.major
      })
      try {
        const res = await this.$http.post(
          'initAdminMessage',
          queryData,
          {
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
          }
        )
        console.log(res)
        if (res.data.status === 200) {
          this.$message.success('登录成功！')
          this.$router.push('home')
        } else {
          this.$message.error('登录失败！')
        }
      } catch (err) {
        console.log(err)
        this.$message.error('登录失败')
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.msgInput {
  text-align: center;
}
.schoolMsg {
  text-align: center;
}
.el-input {
  width: 250px;
  margin-left: 10px;
  margin-bottom: 20px;
}

.Box {
  width: 60%;
  height: 200px;
  border: 1px solid #ccc;
  margin: 10px auto;
  text-align: left;
  .el-button {
    margin: 20px;
  }
  .el-tag {
    margin: 10px;
  }
  .el-input {
    width: 100px;
  }
}
</style>
