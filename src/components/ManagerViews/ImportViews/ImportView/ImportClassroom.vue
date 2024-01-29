// 教室信息输入组件
<template>
  <div class="classroom">
    <h2>教室导入</h2>
    <el-input v-model="import_form.id" placeholder="教室编号" style="width: 50%; margin-bottom: 25px;"></el-input>
    <el-input v-model="import_form.name" placeholder="教室名" style="width: 50%; margin-bottom: 25px;"></el-input>
    <el-input v-model="import_form.capacity" placeholder="容量" style="width: 50%; margin-bottom: 25px;"></el-input>
    <el-button type="primary" @click="submitClassroom">确认</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const import_form = ref({
  id: '',
  name: '',
  capacity: ''
})

const submitClassroom = async () => {
  const data = {
    classroom_id: import_form.value.id,
    classroom_name: import_form.value.name,
    classroom_capacity: import_form.value.capacity
  }

  try {
    const response = await axios.post('/api/insert/classroom', data)
    if (response.status === 200) {
      alert('教室数据成功导入')
    } else {
      alert('导入数据失败')
    }
  } catch (error) {
    alert(`Request error: ${error}`)
  }
}
</script>

<style scoped>
.classroom {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.classroom > * {
  width: 50%;
  margin-bottom: 25px;
}
</style>