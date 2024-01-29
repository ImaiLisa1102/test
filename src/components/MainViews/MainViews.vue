<script setup lang="ts">
import Navbar from '../NavBar/Navbar.vue'
</script>

<template>
    <Navbar></Navbar>
    <router-view >
    </router-view>
</template>

<style>
.box-card {
    width: 250px;
    margin: 20px 0;
}
</style>