// 课程信息输入组件
<template>
  <div class="handle">
    <div class="course">
      <h2>导入课程信息</h2>
      <el-input v-model="id" placeholder="课程编号"></el-input>
      <el-input v-model="name" placeholder="课程名"></el-input>
      <el-input v-model="term" placeholder="课程学期"></el-input>
      <el-input v-model="grade" placeholder="课程年级"></el-input>
      <el-input v-model="stu_class" placeholder="课程班级"></el-input>
      <el-input v-model="major" placeholder="课程专业"></el-input>
      <el-button type="primary" @click="submitCourse">确认</el-button>
    </div>
    <div class="course">
      <h2>修改课程信息</h2>
      <el-input v-model="id" placeholder="课程编号"></el-input>
      <el-input v-model="name" placeholder="课程名"></el-input>
      <el-input v-model="term" placeholder="课程学期"></el-input>
      <el-input v-model="grade" placeholder="课程年级"></el-input>
      <el-input v-model="stu_class" placeholder="课程班级"></el-input>
      <el-input v-model="major" placeholder="课程专业"></el-input>
      <el-button type="primary" @click="updateCourse">确认</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const id = ref('')
const name = ref('')
const term = ref('')
const grade = ref('')
const stu_class = ref('')
const major = ref('')

const submitCourse = async () => {
  const data = {
    course_name: name.value,
    course_term: term.value,
    course_grade: grade.value,
    course_class: stu_class.value,
    course_speciality: major.value,
    course_id: id.value
  }

  try {
    const response = await axios.post('/api/insert/course', data)
    if (response.status === 200) {
      alert('课程数据成功导入')
    } else {
      alert('导入数据失败')
    }
  } catch (error) {
    alert(`Request error: ${error}`)
  }
}

const updateCourse = ()=>{

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

.course {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.course>* {
  width: 75%;
  margin-bottom: 25px;
}
</style>
