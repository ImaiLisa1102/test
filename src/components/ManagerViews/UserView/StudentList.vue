<template>
    <div class="list-area"> 
        <el-row :gutter="20">
            <el-col :span="6" class="search-content" >
                <el-input placeholder="请输入学号进行搜索" v-model="input" style="width: 200px;">
                </el-input>
                <el-button :icon="Search" circle @click="handleSearch" />
            </el-col>
        </el-row>
        <el-table :data="tableData" style="width: auto; font-size: 15px;" >
            <el-table-column prop="stu_username" label="用户名" width="145"></el-table-column>
            <el-table-column prop="stu_password" label="密码" width="165"></el-table-column>
            <el-table-column prop="stu_num" label="学号" width="140"></el-table-column>
            <el-table-column prop="stu_email" label="联系方式" width="188"></el-table-column>
            <el-table-column prop="stu_class" label="班级" width="130"></el-table-column>
            <el-table-column prop="stu_identity" label="真实姓名" width="150"></el-table-column>
            <el-table-column label="操作" width="180" v-slot="{ row }">
                <el-button type="danger" plain size="small" @click="handleDelete(row)">删除</el-button>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="[15]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
            :total="totalItems"></el-pagination>
    </div>
</template>
  
<script setup lang="ts">
import {Search} from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';


const input = ref('');
const currentPage = ref(1);
const tableData = ref([]);
const pageSize = ref(15);
let totalItems = ref(0);  // 新增：用于存储总的数据条数

const handleSizeChange = async (val) => {
    console.log(`每页 ${val} 条`);
    pageSize.value = val;  // 更新每页显示的条数
    await loadData();
};
const handleCurrentChange = async (val) => {
    console.log(`当前页: ${val}`);
    currentPage.value = val;  // 更新当前页码
    await loadData();
};

const loadData = async () => {
    try {
        const response = await axios.get(`/api/list/student?page=${currentPage.value}&size=${pageSize.value}`);
        tableData.value = response.data.items;  // Update table data
        totalItems.value = response.data.total;  // Update total items
    } catch (error) {
        console.error(error);
    }
};

const handleDelete = (row) => {
    // 获取man_num
    const stu_num = row.stu_num;

    // 在控制台打印man_num，以便于调试
    console.log(`Deleting student with stu_num: ${stu_num}`);

    // 发送一个DELETE请求到服务器，删除这一行的数据
    axios.delete(`/api/delete/student/${stu_num}`)
        .then(response => {
            // 删除成功后，重新加载数据
            loadData();
        })
        .catch(error => {
            console.error(error);
        });
};

const handleSearch = async () => {
    // 获取输入的学号
    const stu_num = input.value;

    // 在控制台打印学号，以便于调试
    console.log(`Searching student with stu_num: ${stu_num}`);

    // 发送一个GET请求到服务器，根据学号进行搜索
    axios.get(`/api/search/student/${stu_num}`)
        .then(response => {
            // 搜索成功后，更新表格数据
            tableData.value = response.data.items;
        })
        .catch(error => {
            console.error(error);
        });
};



onMounted(loadData);


</script>
  
<style scoped>
.list-area{
    height: 700px;
    position: fixed;
    top: 150px;
    left: 300px;
}
.search-content{
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-table {
    font-size: 18px;
}
</style>