<script setup lang="ts">
import Managerbar from '../NavBar/ManagerBar.vue'

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const currentUser = ref('');

onMounted(async () => {
    try {
        const response = await axios.get('/api/login/currentuser');
        currentUser.value = response.data;
    } catch (error) {
        console.error(error);
    }
});

const logout = async () => {
    try {
        const router = useRouter();
        // await axios.get('/api/manager/quitsystem');
        router.push('/login/manager');
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <div class="user-info">
        <p>当前用户: {{ currentUser }}</p>
    </div>
    <div class="logout">
        <el-button type="danger" @click="logout">退出登录</el-button>
    </div>
    <Managerbar></Managerbar>
</template>


<style scoped>
.user-info {
    position: absolute;
    width: 100px;
    height: 75px;
    top: 0;
    right: 400px;
}

.logout {
    position: absolute;
    top: 15px;
    right: 50px;
}
</style>
