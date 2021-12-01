import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations-types'
// 安装插件
Vue.use(Vuex)
// 创建对象
const moduleA = {
    state: {
        sex: '男',
        sum: 18
    },
    mutations: {
        update3(state, payload) {
            state.sex = payload
        },
        updatesum(state){
            state.sum=19
        }
    },
    getters: {//在模块里面，他允许有第三个参数
        fullsex(state) {
            return state.sex + '111'
        },
        fullsexlength(state, getters) {
            return getters.fullsex + '5555'
        },
        fullsex2(state, getters, rootState) {
            return getters.fullsexlength + rootState.count
        }
    },
  actions:{
    //   这里的commit只能提交属于自己模块里面的mutations
      aupdatecount(context){
      setTimeout(()=>{
            context.commit('updatesum')
      },1000)
      }
  }
}
const store = new Vuex.Store({//这里是大写，记住了
    state: {//单一状态树
        // 一旦属性在state里面被定义了，就会被加入到响应系统中，响应式系统会监听属性的变化，当属性改变时，会通知所有的界面中用到该属性的地方叫他去做相应的改变，当从其他的地方往state里面添加属性，该属性就不会被监听到，就不会做响应式的改变，界面也就不会刷新
        count: 100,
        students: [
            { id: 10, name: 'zs', age: 18 },
            { id: 100, name: 'li', age: 19 },
            { id: 1001, name: 'wb', age: 20 },
            { id: 1002, name: 'ch', age: 21 }
        ],
        info: {
            name: 'kobe',
            age: 40,
            height: 1.98
        }
    },
    mutations: {//英文突变的意思
        // 定义方法
        [INCREMENT](state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        // incrementCount(state,count){//这里面的用法要学会
        //     state.count+=count
        // },
        incrementCount(state, payload) {
            state.count += payload.count
        },
        incrementStudent(state, palload) {
            state.students.push(palload)
        },
        update(state,payload) {
            // 错误代码，不能在这里进行异步操作
            // setTimeout(()=>{
            //     state.info.name = payload.name
            // state.info.age = payload.age
            // },1000)
            state.info.name = payload
        },
        // 这可以让外面的元素添加进来做到一个响应式原理
        updata2info(state) {
            //   Vue.set(state.info,'sex','男')
            // 这种方法可以删除对象里面的某个属性
            // delete state.info.age
            // 这中删除方法可以做到响应式原理
            Vue.delete(state.info, 'age')
        }
    },
    actions: {
        //定义方法 context 上下文的意思相当于store
        aupdateifo(context, payload) {
            console.log(payload);
          return new Promise((resolve,reject)=>{
            setTimeout(() => {
                context.commit('update',payload)
                
            }, 1000)
            resolve('你好吗')
          })
          
        }
    },
    getters: {//当我们不能直接拿到数据，或者数据过于复杂，可以通过getters操作，写一遍获得数据的过程，后面就可以直接使用这个属性来获取
        powerCount(state) {
            return state.count * state.count
        },
        age(state) {
            return state.students.filter(s => s.age > 19)
        },
        more20length(state, getters) {
            return getters.age.length
        },
        moreage(state) {
            // 当我们想要的数据不是一个确定值得时候，可以返回一个函数传参，这样就做到拿到一个灵活的数据
            // getters默认是不能传递参数的, 如果希望传递参数, 那么只能让getters本身返回另一个函数.

            return function (ag) {
                return state.students.filter(s => s.age > ag)
            }
        }
    },
    modules: {
        a: moduleA
    },
})
// 导出store对象
export default store