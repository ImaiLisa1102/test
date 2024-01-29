<template>
    <el-container>
        <el-aside width="200px" >
            <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
                active-text-color="#ffd04b" style="height: 100%;">
                <router-link tag="button" to="/manager/student" class="nav-link"><el-menu-item index="1">学生信息</el-menu-item></router-link>
                <router-link to="/manager/teacher" class="nav-link"><el-menu-item index="2">老师信息</el-menu-item></router-link>
                <router-link to="/manager/staff" class="nav-link"><el-menu-item index="3">教务人员信息</el-menu-item></router-link>
                <router-link to="/manager/course" class="nav-link"><el-menu-item index="4">课程信息</el-menu-item></router-link>
                <router-link to="/manager/classroom" class="nav-link"><el-menu-item index="5">教室信息</el-menu-item></router-link>
                <router-link to="/manager/exam" class="nav-link"><el-menu-item index="6">监考安排</el-menu-item></router-link>
                <router-link to="/manager/handle" class="nav-link"><el-menu-item index="7">信息处理</el-menu-item></router-link>
            </el-menu>
        </el-aside>
        
    <el-main>
        <router-view></router-view>
    </el-main>
    </el-container>

    
</template>
  
<script setup lang="ts">

</script>
  
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.header {
    position: absolute;
    top: 0;
    right: 100px;
    border: 1px solid red;
    width: 100px;
}
.nav-link {
    color: white !important;
}
</style>
  