<!-- 这是管理员登录页面 -->

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    const response = await axios.post('/api/login/manager', {
      username: username.value,
      password: password.value
    })
    if (response.status === 200) {
      // 登录成功，跳转到首页
      window.location.href = '/manager'
    } else if (response.status === 401) {
      error.value = 'Invalid username or password'
    } else {
      error.value = 'An error occurred'
    }
  } catch (err: Error) {
    error.value = err.message
  }
}

window.onkeydown = ($event) => {
  if($event.key && $event.key == 'Enter'){
    login();
  }
}

</script>

<template>
    <div class="manager-container">
        <div class="manager-area">
            <router-link to="/" class="manager-back">
                 返回主页面
            </router-link>
            <div class="manager-form">
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
.manager-container {
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
.manager-area {
  width: 50%;
  height: 40%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  position: relative;
  margin: 0 auto;
}

.manager-back {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 15px;
  color: gray;
}

.manager-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.manager-form .el-form-item {
  font-size: 20px;
  color: black;
}
</style>