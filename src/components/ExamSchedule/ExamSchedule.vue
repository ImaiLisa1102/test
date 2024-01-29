<template>
    <div class="exam-schedule">
      <ExamCard
        v-for="(exam, index) in exams"
        :key="index"
        :exam="exam"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  import ExamCard from './ExamCard/ExamCard.vue'
  
  interface Exam {
    exam_name: string;
    invigilator: string;
    invigilation_time: string;
    invigilation_term: string;
    invigilation_class: string;
    invigilation_speciality: string;
  }
  
  const props = defineProps({
    exams: {
      type: Array as () => Exam[],
      required: true
    }
  })
  </script>

<style scoped>
.exam-schedule {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
  