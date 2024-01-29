<script setup lang="ts">
import { ref } from 'vue';

const activeIndex = ref('1');
const handleSelect = (index: string) => {
  activeIndex.value = index;
  // 在这里添加你的路由逻辑
};
</script>

<template>
  <div class="el-menu-demo">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b" @select="handleSelect" style="height: 80px; width: 100%;">
      <el-menu-item index="1" style="width: 90px;">
        <router-link to="/home/mainview">首页</router-link>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>考试安排</template>
        <el-menu-item index="2-1">
          <router-link to="">个人考试安排</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="">班级考试安排</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link to="">专业考试安排</router-link>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">
        <router-link to="">我的考试</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="">个人中心</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="">登出</router-link>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<style scoped>
.el-menu-demo {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid #f2f2f2;
}

.flex-grow {
  flex-grow: 1;
}
</style>