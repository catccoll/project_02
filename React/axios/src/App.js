import React, { PureComponent } from "react";
import axios from "axios";

export default class App extends PureComponent {
  render() {
    return <div>11</div>;
  }
  async componentDidMount() {
    // 1.真实开发的逻辑
    // 2.发送网络请求
    // axios({
    //   url: "http://httpbin.org/get",
    //   params: {
    //     name: "why",
    //     age: 18,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // axios({
    //   url: "http://httpbin.org/post",
    //   data: {
    //     name: "kobe",
    //     age: 40,
    //   },
    //   method: "post",
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .then((err) => {
    //     console.log(err);
    //   });

    // 4 .async await
    // try {
    //   const res = await axios.get("http://httpbin.org/get", {
    //     params: {
    //       name: "lilei",
    //       age: 30,
    //     },
    //   });
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
    // axios
    //   .post("http://httpbin.org/post", {
    //     data: {
    //       name: "saigao",
    //       age: 28,
    //     },
    //   })
    //   .then((res) => console.log(res));


    // 5. axios.all
    // const request1=axios({
    //   baseURL:'http://httpbin.org',
    //   url:"/get",
    //   timeout:5000,
    //   params:{
    //     name:'ss',
    //     age:29
    //   }
    // })
    // const request2=axios({
    //   url:"http://httpbin.org/get",
    //   params:{
    //     name:'Sax',
    //     age:35
    //   }
    // })
    //   axios.all([request1,request2]).then(res=>{
    //     console.log(res);
    //   }).catch(err=>{
    //     console.log(err);
    //   })
    // 请求拦截和响应拦截
    axios.interceptors.request.use(config=>{
      // 1.发送网络请求时，在界面的中间位置显示loading的组件
      // 2.某一些请求要求用户必须携带token，如果没有携带，直接跳转登录页面
      // 3.params/data序列化的操作
      console.log(11);
      return config
    },err=>{

    })
    axios.interceptors.response.use(res=>{
    return res.data
     
    },err=>{
            if(err&&err.response){
              switch(err.response.status){
                case 400:
                  console.log('请求错误')
                  break;
                  case 401:
                    console.log('未授权访问');
                    break;
                    default:
                      console.log('其他错误信息');
              }
            }
            return err
    })
    axios.get('http://httpbin.org/get',{
      params:{
        name:'why'
      }
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }
}
