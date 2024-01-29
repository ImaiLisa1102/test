import {createRouter, createWebHistory} from 'vue-router';

import LoginDispatch from '../components/LoginViews/LoginDispatch.vue';
import LoginManager from '../components/LoginViews/LoginManager.vue';
import LoginStu from '../components/LoginViews/LoginStu.vue';
import LoginTeacher from '../components/LoginViews/LoginTea.vue';

import MainViews from '../components/MainViews/MainViews.vue';
import ExamAttentionVue from '../components/MainViews/ExamAttention.vue';

import ManagerView from '../components/NavBar/ManagerBar.vue'
import ManagerList from '../components/ManagerViews/UserView/ManagerList.vue';
import StudentList from '../components/ManagerViews/UserView/StudentList.vue';
import TeacherList from '../components/ManagerViews/UserView/TeacherList.vue';
import CourseList from '../components/ManagerViews/CourseView/CourseList.vue';
import ClassRoomList from '../components/ManagerViews/RoomView/ClassRoomList.vue';
import ImportViewVue from '../components/ManagerViews/ImportViews/ImportList.vue';

import ImportManagerVue from '../components/ManagerViews/ImportViews/ImportView/ImportManager.vue';
import ImportTeacherVue from '../components/ManagerViews/ImportViews/ImportView/ImportTeacher.vue';
import ImportStudentVue from '../components/ManagerViews/ImportViews/ImportView/ImportStudent.vue';
import ImportCourseVue from '../components/ManagerViews/ImportViews/ImportView/ImportCourse.vue';
import ImportClassroomVue from '../components/ManagerViews/ImportViews/ImportView/ImportClassroom.vue';
const routers =
[
  { path: '/', component: LoginDispatch },
  { path: '/loginteacher', component: LoginTeacher },
  { path: '/loginstu', component: LoginStu },
  { path: '/loginmanager', component: LoginManager },
    {
      path: '/home',
      component: MainViews,
      children: [
        {
          path: 'mainview',
          component: ExamAttentionVue,
        }
      ]
    
    },
  { 
      path: '/manager', 
      component: ManagerView,
      children: [
          { path: 'student', component: StudentList },
          { path: 'staff', component: ManagerList },
          { path: 'teacher', component: TeacherList },
          { path: 'course', component: CourseList },
        { path: 'classroom', component: ClassRoomList },
        {
          path: 'handle',
          component: ImportViewVue,
          children: [
            { path: 'manager', component: ImportManagerVue },
            { path: 'teacher', component: ImportTeacherVue },
            { path: 'student', component: ImportStudentVue },
            { path: 'course', component: ImportCourseVue },
            { path: 'classroom', component: ImportClassroomVue}
          ]
        },
          // 其他子路由...
      ]
  },
  // 其他路由...
]

    const router = createRouter({
      //注意这里使用花括号
      history: createWebHistory(),
      routes: routers  //注意这里不要写成routers或其他名称
    })

export default router;