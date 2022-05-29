import Vue from 'vue'
import VueRouter from 'vue-router'
import Teacher from '../views/HomeTeacher.vue'
import Student from "../views/HomeStudent.vue"
import Main from '../views/MainMenu.vue'
import Math from "../views/Math.vue"
import ChoiseRole from "../views/ChoiseRole"
import Registration from "../views/Registration";
import RegistrationTeach from "../views/RegistrationTeach";
import LoaderHomeStud from "../views/LoaderHomeStud";
import LoaderHomeTeach from "../views/LoaderHomeTeach";
import EditStudents from "../views/EditStudents";
import EditTeachers from "../views/EditTeachers";
import MainMenuTeach from "../views/MainMenuTeach";
import LoaderMath from "../views/LoaderMath";
import StudListS from "../views/StudListS";
import StudListT from "../views/StudListT";
import LoaderEditMainS from "../views/LoaderEditMainS";
import LoaderEditMainT from "../views/LoaderEditMainT";
import ChallengeList from "../views/ChallengeList";
import ChallengeListLoader from "../views/ChallengeListLoader";
import StudOwnCh from "../views/StudOwnCh";
import StudOwnLoad from "../views/StudOwnLoad";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Choise',
    component: ChoiseRole
  },
  {
    path: '/student',
    name: 'Student',
    component: Student
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher
  },
  {
    path: '/math',
    name: 'Math',
    component: Math
  },
  {
    path: '/regstud',
    name: 'Regstud',
    component: Registration
  },
  {
    path: '/regteach',
    name: 'Regteach',
    component: RegistrationTeach
  },
  {
    path: '/lohostu',
    name: 'LoHoStu',
    component: LoaderHomeStud
  },
  {
    path: '/lohotec',
    name: 'LoHoTec',
    component: LoaderHomeTeach
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/mainSMenu',
    name: 'MainStud',
    component: Main
  },
  {
    path: '/mainTMenu',
    name: 'MainTeach',
    component: MainMenuTeach
  },
  {
    path: '/editstud',
    name: 'EditStud',
    component: EditStudents
  },
  {
    path: '/editteach',
    name: 'EditTeach',
    component: EditTeachers
  },
  {
    path:'/mathload',
    name:'MathLoad',
    component: LoaderMath
  },
  {
    path: '/slists',
    name: 'SListS',
    component: StudListS
  },
  {
    path: '/slistt',
    name: 'SListT',
    component: StudListT
  },
  {
    path: '/lomast',
    name: 'LoMaSt',
    component: LoaderEditMainS
  },
  {
    path: '/lomate',
    name: 'LoMaTe',
    component: LoaderEditMainT
  },
  {
    path: '/studcha',
    name: 'StudChal',
    component: ChallengeList
  },
  {
    path: '/studchaload',
    name: 'StudChalLoad',
    component: ChallengeListLoader
  },
  {
    path: '/studowch',
    name: 'StudOwnCh',
    component: StudOwnCh
  },
  {
    path: 'studowlo',
    name: 'StudOwnLo',
    component: StudOwnLoad
  }
]

const router = new VueRouter({
  routes
})

export default router
