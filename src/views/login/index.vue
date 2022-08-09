<template>
  <div class="login_container">
    <div class="login_box" ref="loginBoxRef">
      <!-- form表单 -->
      <el-form
        class="login_form"
        :model="loginform"
        :rules="loginRules"
        ref="loginRefForm"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="loginform.username"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginform.password"
            prefix-icon="el-icon-refresh"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 登录重置 -->
        <el-form-item class="btns">
          <el-button
            type="primary"
            :loading="loading"
            @click.enter.native="login"
            >登录</el-button
          >
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuexDemoIndex",

  data() {
    return {
      loading: false,
      loginform: {
        username: "admin",
        password: "111111",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur" },
          {
            min: 2,
            max: 16,
            message: "用户名的长度为2-16个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, trigger: "blur" },
          {
            min: 6,
            max: 13,
            message: "密码的长度为6-13个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },

  mounted() {},

  methods: {
    // loginRefForm
    login() {
      this.$refs.loginRefForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginform)
            .then(() => {
              this.$router.push({ path: "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  .login_box {
    position: absolute;
    width: 450px;
    height: 350px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .avatar_box {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 130px;
      height: 130px;
      background-color: #fff;
      border: 1px solid #ccc;
      box-shadow: 0 0 10 #ccc;
      border-radius: 50%;
      padding: 5px;
      img {
        width: 100%;
        border-radius: 50%;
        background-color: #ccc;
      }
    }
  }
}
</style>
