<template>
    <el-card class="exam-card">
      <h2>{{ exam.exam_name }}</h2>
      <p>监考老师: {{ exam.invigilator }}</p>
      <p>监考时间: {{ exam.invigilation_time }}</p>
      <p>监考学期: {{ exam.invigilation_term }}</p>
      <p>班级: {{ exam.invigilation_class }}</p>
      <p>专业: {{ exam.invigilation_speciality }}</p>
    </el-card>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  interface Exam {
    exam_name: string;
    invigilator: string;
    invigilation_time: string;
    invigilation_term: string;
    invigilation_class: string;
    invigilation_speciality: string;
  }
  
  const props = defineProps({
    exam: {
      type: Object as () => Exam,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .exam-card {
  flex-basis: calc(20% - 10px);
  margin-bottom: 20px;
  padding: 5px;
}
  </style>
  