<template>
  <div class="handle">
    <div class="manager">
      <h2>新增教务人员信息</h2>
      <el-input v-model="import_form.id" placeholder="工号" required></el-input>
      <el-input v-model="import_form.username" placeholder="用户名" required></el-input>
      <el-input v-model="import_form.password" placeholder="密码" show-password required
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"></el-input>
      <el-input v-model="import_form.contact" placeholder="联系方式" required></el-input>
      <el-input v-model="import_form.realname" placeholder="真实姓名" required></el-input>
      <el-button type="primary" @click="submitManager">确认</el-button>
    </div>
    <div class="manager">
      <h2>修改教务人员信息</h2>
      <el-input v-model="update_form.id" placeholder="根据工号进行修改" required></el-input>
      <el-input v-model="update_form.username" placeholder="用户名" required></el-input>
      <el-input v-model="update_form.password" placeholder="密码" show-password required
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"></el-input>
      <el-input v-model="update_form.contact" placeholder="联系方式" required></el-input>
      <el-input v-model="update_form.realname" placeholder="真实姓名" required></el-input>
      <el-button type="primary" @click="updateManager">确认</el-button>
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
const submitManager = async () => {
  const data = {
    man_username: import_form.value.username,
    man_password: import_form.value.password,
    man_num: import_form.value.id,
    man_email: import_form.value.contact,
    man_identity: import_form.value.realname
  }

  try {
    const response = await axios.post('/api/insert/manager', data)
    if (response.status === 200) {
      alert('教务人员数据成功导入')
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

const updateManager = ()=>{

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
.manager {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.manager > * {
  width: 75%;
  margin-bottom: 25px;
}
</style>