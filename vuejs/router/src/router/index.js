// 配置路由相关的信息
import VueRouter from 'vue-router'
// 导入vue
import Vue from 'vue'

const About = () => import('../components/About.vue')//推荐这样的写法，虽然也可以写在component当中
const HomeMessages = () => import('../components/HomeMessages.vue')
const HomeNews = () => import('../components/HomeNews.vue')
import User from '../components/User.vue'
const Profile = () => import('../components/Profile.vue')
// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    // redirect重定向,路由的默认路经，可以加/也可以不加 ,特殊的路经放在前面
    redirect: '/home'
  },
  {
    path: '/home',

    // 这就是懒加载的形式  profile “档案”
    component: () => import('../components/Home'),
    meta:{title:'首页'},//描述路由组件的数据meta
    children: [
      // {
      //   path: '',
      //   redirect: 'news',
      // },
      {
        path: 'news/',//子组件的时候不需要加/
        component: HomeNews
      },
      {
        path: 'messages',//子组件的时候不需要加/
        component: HomeMessages
      },
    ]
  },
  {
    path: '/about',
    component: About,
    meta:{title:'关于'},
  }, {
    path: '/user/:id',
    component: User,
    meta:{title:'用户'},
    beforeEnter:(to,from,next)=>{//这个是路由独享守卫
      console.log('路由独享守卫');
      next()
    }
  }, {
    path: '/profile',
    component: Profile,
    meta:{title:'档案'},
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',//改成HTML5history模式
  linkActiveClass: 'active'//修改router-link-active中的类名，自定义
})
// 全局前置守卫(前置回调)
router.beforeEach((to,from,next)=>{
  // from跳转到to,to就相当于活跃的$route,每一个小的组件,matched下面是一个数组，（存在嵌套关系的时候）这，永远取数组为0的

  document.title=to.matched[0].meta.title
 
  next()//记得要放行
})
//全局后置钩子
// router.afterEach((to,from)=>{
// })
// 3.将router对象传入到Vue实例
export default router

