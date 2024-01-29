// 学生信息输入组件
<template>
  <div class="handle">
    <div class="student">
      <h2>新增学生信息</h2>
      <el-input v-model="import_form.id" placeholder="学号" required></el-input>
      <el-input v-model="import_form.username" placeholder="用户名" required></el-input>
      <el-input v-model="import_form.password" placeholder="密码" show-password required
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"></el-input>
      <el-input v-model="import_form.contact" placeholder="联系方式" required></el-input>
      <el-input v-model="import_form.stu_class" placeholder="班级" required></el-input>
      <el-input v-model="import_form.realname" placeholder="真实姓名" required></el-input>
      <el-button type="primary" @click="submitStudent">确认</el-button>
    </div>
    <div class="student">
      <h2>修改学生信息</h2>
      <el-input v-model="update_form.id" placeholder="根据学号进行修改" required></el-input>
      <el-input v-model="update_form.username" placeholder="用户名" required></el-input>
      <el-input v-model="update_form.password" placeholder="密码" show-password required
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"></el-input>
      <el-input v-model="update_form.contact" placeholder="联系方式" required></el-input>
      <el-input v-model="update_form.stu_class" placeholder="班级" required></el-input>
      <el-input v-model="update_form.realname" placeholder="真实姓名" required></el-input>
      <el-button type="primary" @click="updateStudent">确认</el-button>
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
  stu_class: '',
  realname: ''
})
const submitStudent = async () => {
  const data = {
    stu_username: import_form.value.username,
    stu_password: import_form.value.password,
    stu_num: import_form.value.id,
    stu_email: import_form.value.contact,
    stu_class: import_form.value.stu_class,
    stu_identity: import_form.value.realname
  }

  try {
    const response = await axios.post('/api/insert/student', data)
    if (response.status === 200) {
      alert('学生数据成功导入')
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
  stu_class: '',
  realname: ''
})


const updateStudent = ()=>{

}
</script>

<style scoped>
.handle {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.student {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.student>* {
  width: 75%;
  margin-bottom: 25px;
}
</style>