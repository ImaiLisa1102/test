<template>
    <div>
        <div class="top-section">
            <el-input v-model="studentId" placeholder="请输入学号"></el-input>
            <el-button type="primary" @click="search">确认</el-button>
        </div>
        <div class="bottom-section">
            <!-- 下半部分的内容 -->
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const studentId = ref('')

const search = async () => {
    try {
    const response = await axios.post(`search/person?studentId=${studentId.value}`)
    if (response.status === 200) {
      alert('数据查询成功')
    } else {
      alert('数据查询失败')
    }
  } catch (error) {
    alert(`Request error: ${error}`)
  }
}
</script>
  
<style scoped>
.top-section {
    position: fixed;
    top: 200px;
    left: 150px;
}

.bottom-section {
    position: fixed;
    top: 300px;
    left: 150px;
}
</style>
  