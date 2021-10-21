import Vue from 'vue'
import Vuex from 'vuex'
// 安装插件
Vue.use(Vuex)
// 创建对象
const store = new Vuex.Store({//这里是大写，记住了
    state: {//单一状态树
        count: 100,
        students: [
            { id: 10, name: 'zs', age: 18 },
            { id: 100, name: 'li', age: 19 },
            { id: 1001, name: 'wb', age: 20 },
            { id: 1002, name: 'ch', age: 21 }
        ],
        info:{
            name:'kobe',
            age:40,
            height:1.98
        }
    },
    mutations: {//英文突变的意思
        // 定义方法
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        // incrementCount(state,count){//这里面的用法要学会
        //     state.count+=count
        // },
         incrementCount(state,payload){
             state.count+=payload.count
         },
        incrementStudent(state,obj){
             state.students.push(obj)
        },
        update(state,payload){
                state.info.name=payload.name
                state.info.age=payload.age
        }
    },
    actions: {},
    getters: {//当我们不能直接拿到数据，或者数据过于复杂，可以通过getters操作，写一遍获得数据的过程，后面就可以直接使用这个属性来获取
        powerCount(state) {
            return state.count * state.count
        },
        age(state){
          return  state.students.filter(s=>s.age>19)
        },
        more20length(state,getters){
            return getters.age.length
        },
        moreage(state){
            // 当我们想要的数据不是一个确定值得时候，可以返回一个函数传参，这样就做到拿到一个灵活的数据
            return function(ag){
                  return state.students.filter(s=>s.age>ag)
            }
        }
    },
    modules: {},
})
// 导出store对象
export default store