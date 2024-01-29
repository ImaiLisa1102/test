<!-- 这是老师登录页面 -->

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    const response = await axios.post('/api/login/teacher', {
      username: username.value,
      password: password.value
    })
    if (response.status === 200) {
      // 登录成功，跳转到首页
      window.location.href = '/home'
    } else {
      error.value = 'Invalid username or password'
    }
  } catch (err: Error) {
    error.value = err.message
  }
}
// 回车登录
window.onkeydown = ($event) => {
  if($event.key && $event.key == 'Enter'){
    login();
  }
}

// 重置密码方法
const resetPassword = () => {
  // 找回密码逻辑
};
</script>

<template>
    <div class="teacher-container">
        <div class="teacher-area">
            <router-link to="/" class="teacher-back">
                 返回主页面
            </router-link>
            <div class="teacher-form">
                <el-form label-position="left" label-width="80px">
                    <el-form-item label="工号">
                        <el-input v-model="username" placeholder="请输入工号"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login">登录</el-button>
                        <el-button type="danger" @click="resetPassword">找回密码</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.teacher-container {
    background-image: url("\LoginDispatchBgImg.jpg");
    background-size: 100% 100%;

    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.teacher-area {
  width: 50%;
  height: 40%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  position: relative;
  margin: 0 auto;
}

.teacher-back {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 15px;
  color: gray;
}

.teacher-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.teacher-form .el-form-item {
  font-size: 20px;
  color: black;
}
</style>