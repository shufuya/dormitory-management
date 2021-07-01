import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('../views/Login.vue')
const Home = () => import('../views/Home.vue')

Vue.use(VueRouter)

const routes = [{
  path: '/',
  require: '/login',
  component: Login
}, {
  path: '/login',
  name: 'Login',
  component: Login
}, {
  path: '/home',
  name: 'Home',
  component: Home,
  children: [{
    path: '/home/student',
    name: 'student',
    component: () => import('../components/Student.vue'),
    beforeRouteEnter (to, form, next) {
      this.axios.get('student/getstudent').then(res => console.log(res))
      next()
    }
  },
  {
    path: '/home/dorm',
    name: 'dorm',
    component: () => import('../components/dorm.vue')
  },
  {
    path: '/home/maintain',
    name: 'maintain',
    component: () => import('../components/maintain.vue')
  },
  {
    path: '/home/class',
    name: 'class',
    component: () => import('../components/class.vue')
  },
  {
    path: '/home/index',
    name: 'index',
    component: () => import('../components/index.vue')
  }
  ]
},
{
  path: '*',
  name: '404',
  component: () => import('../views/404.vue')
}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
