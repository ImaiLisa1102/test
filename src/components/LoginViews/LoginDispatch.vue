<!-- 
    这是分离登录页面 
    用来选择登录角色
-->

<script setup lang="ts">

</script>

<template>
    <div class="dispatch-container">
        <div class="main-title">欢迎使用监考安排管理系统</div>
        <div class="dispatch-area">
            <div class="dispatch-title">请选择你的角色</div>
            <div class="choose-area">
                <el-row>
                    <el-button type="primary" size="large">
                        <router-link to="/LoginManager" style="color: black;">教务人员</router-link>
                    </el-button>
                    <el-button type="success" size="large">
                        <router-link to="/LoginTeacher" style="color: black;">老师</router-link>
                    </el-button>
                    <el-button type="warning" size="large">
                        <router-link to="/LoginStu" style="color: black;">学生</router-link>
                    </el-button>
                </el-row>
            </div>
        </div>
    </div>
</template>


<style scoped>
/* 背景图片 */
.dispatch-container {
    background-image: url("\LoginDispatchBgImg.jpg");
    background-size: 100% 100%;

    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* 标题 */
.main-title {
    color: black;
    height: auto;
    width: auto;
    font-size: 50px;
}

/* 分区样式 */
.dispatch-area {
    width: 40%;
    height: 30%;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    padding: 10px;
}

.dispatch-area .dispatch-title {
    font-size: 35px;
}
.dispatch-area .choose-area{
    justify-content: center;
    align-items: center;
    display: flex;
    height: 50%;
    width: auto;
    padding: 20px;
    color: black;
}
</style>