<template>
  <div class="import-content">
    <h2>信息处理</h2>
    <el-radio-group v-model="selected" class="import-area" >
      <router-link to="/manager/handle/manager"><el-button type="primary" color="#626aef" :dark="isDark"
          size="large">教务人员信息</el-button></router-link>
      <router-link to="/manager/handle/teacher"><el-button type="primary" color="#626aef" :dark="isDark"
          size="large">老师信息</el-button></router-link>
      <router-link to="/manager/handle/student"><el-button type="primary" color="#626aef" :dark="isDark"
          size="large">学生信息</el-button></router-link>
      <router-link to="/manager/handle/course"><el-button type="primary" color="#626aef" :dark="isDark"
          size="large">课程信息</el-button></router-link>
      <router-link to="/manager/handle/classroom"><el-button type="primary" color="#626aef" :dark="isDark"
          size="large">教室信息</el-button></router-link>
    </el-radio-group>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selected = ref('')

watch(selected, (newVal) => {
  router.push(newVal)
})
</script>

<style scoped>

.import-content {
  position: fixed;
  top: 150px;
  left: 550px;
  width: 750px;
  text-align: center;
}

.import-area > * {
  margin-right: 25px;
}
/* .import-area{
  width: 680px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
} */
</style>