<template>
        <div style="position: fixed; top: 300px; left: 200px;">
        <el-space direction="vertical" nowrap>
            <el-card class="box-card" direction="vertical">
                <div slot="header" class="clearfix">
                    <span>老师的考试要求</span>
                </div>
                <div v-for="(item, index) in teacherRequirements" :key="index">
                    {{ index + 1 }}. {{ item }}
                </div>
            </el-card>
            <el-card class="box-card" direction="vertical">
                <div slot="header" class="clearfix">
                    <span>学生的考试要求</span>
                </div>
                <div v-for="(item, index) in studentRequirements" :key="index">
                    {{ index + 1 }}. {{ item }}
                </div>
            </el-card>
        </el-space>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const teacherRequirements = ref([
    '准时到达',
    '监考规则',
    '公平公正',
    '保持秩序',
]);

const studentRequirements = ref([
    '准时到达',
    '遵守规则',
    '带齐用具',
    '尊重老师',
]);
</script>

<style>
.box-card {
    width: 400px;
    font-size: x-large;
    margin: 20px 0;
}
</style>