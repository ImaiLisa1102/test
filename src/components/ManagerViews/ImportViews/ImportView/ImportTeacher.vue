// 老师信息输入组件
<template>
  <div class="handle">
    <div class="teacher">
      <h2>新增教师信息</h2>
      <el-input v-model="import_form.id" placeholder="工号" required></el-input>
      <el-input v-model="import_form.username" placeholder="用户名" required></el-input>
      <el-input v-model="import_form.password" placeholder="密码" show-password required
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"></el-input>
      <el-input v-model="import_form.contact" placeholder="联系方式" required></el-input>
      <el-input v-model="import_form.realname" placeholder="真实姓名" required></el-input>
      <el-button type="primary" @click="submitTeacher">确认</el-button>
    </div>
    <div class="teacher">
      <h2>修改教师信息</h2>
      <el-input v-model="update_form.id" placeholder="根据工号进行修改" required></el-input>
      <el-input v-model="update_form.username" placeholder="用户名" required></el-input>
      <el-input v-model="update_form.password" placeholder="密码" show-password required
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"></el-input>
      <el-input v-model="update_form.contact" placeholder="联系方式" required></el-input>
      <el-input v-model="update_form.realname" placeholder="真实姓名" required></el-input>
      <el-button type="primary" @click="updateTeacher">确认</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const import_form = ref({
  id: '',
  username: '',
  password: '',
  contact: '',
  realname: ''
})
const submitTeacher = async () => {
  const data = {
    tea_username: import_form.value.username,
    tea_password: import_form.value.password,
    tea_num: import_form.value.id,
    tea_email: import_form.value.contact,
    tea_identity: import_form.value.realname
  }

  try {
    const response = await axios.post('/api/insert/teacher', data)
    if (response.status === 200) {
      alert('老师数据成功导入')
    } else {
      alert('导入数据失败')
    }
  } catch (error) {
    alert(`Request error: ${error}`)
  }
}

const update_form = ref({
  id: '',
  username: '',
  password: '',
  contact: '',
  realname: ''
})


const updateTeacher = ()=>{

}
</script>

<style scoped>
.handle{
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.teacher {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.teacher > * {
  width: 70%;
  margin-bottom: 25px;
}
</style>