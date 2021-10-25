
/**
 * 
 * @param {object} options 发送请求的参数配置 {url:地址,methods:请求方式,data:请求参数同时可以支持字符串与对象，dataType：服务端返回数据格式，success：回调}
 */
function ajax(options){
    // 为了只使用约定的配置信息，可以使用默认配置，用户的配置与默认的进行合并
    
    // 1、合并参数信息
    let config = {
        url:'',
        methods:'get',
        data:'',
        dataType:'json',
        success:function(){

        }
    };
    for(let key in config){
        if(options[key]){
            config[key] = options[key];
        }
    }
    // 2、检查参数是否正确
    // 检查url是否指定
    if(!config.url){
        // 抛出异常 代码不会继续执行
        throw 'url地址必须指定';
    }
    // 检查methods参数 只能使用http协议中的请求方式
    if(['get','post','put','delete'].indexOf(config.methods.toLocaleLowerCase()) == -1){
        // 目前不是支持的一种方式
        throw  new Error('请求方式必须指定正确值')
    }
    // 处理data参数，可以支持字符串与对象。最终发送ajax请求时需要的是字符串。所以需要将对象转换为字符串格式
    let data = '';//最终的字符串结果
    if(Object.prototype.toString.call(config.data) == '[object String]'){
        data = config.data;
    }else{
        for(let k in config.data){
            data+=`${k}=${config.data[k]}&`;
        }
        // 由于最后多一个&所以删除
        data = data.slice(0,-1);
    }
    // success必须是一个函数
    if(Object.prototype.toString.call(config.success)  != '[object Function]'){
        throw new Error('success 必须是一个函数');
    }
    
    // 获取对象
    let xhr = new XMLHttpRequest;
    // 打开连接
    let url = config.url;
    // 因为get请求方式需要将参数拼接到地址上
    if(config.methods == 'get' || config.methods=='delete'){
        url+='?'+data;
    }
    xhr.open(config.methods,url);
    // 设置头信息
    if(config.methods == 'post' || config.methods=='put'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    }
    // 发送请求  由于get请求请求参数已经设置到URL地址上，所以不需要设置请求体的内容
    xhr.send((config.methods == 'get' || config.methods=='delete')?'':data);
    // 监听状态变化
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            // 正常接受到服务端的响应
            let data = (config.dataType == 'json')?JSON.parse(xhr.responseText):xhr.responseText;

            // 当得到结果后，只有调用ajax的函数的位置才可以决定对数据应该如何去处理
            // 调用函数 调用函数参数为实参  
            config.success(data);
        }
    }
}


/**
 * 设置cookie
 * @param {string} key cookie的人名称
 * @param {string} value cookie的值
 * @param {int} time cookie的有效时间 时间为秒数
 * @param {string} path cookie的生效路径
 */

 function setCookie(key,value,time,path='/'){
    let d = new Date();
    d.setTime(d.getTime()-8*3600*1000 + time*1000);
    document.cookie = `${key}=${value};path=${path};expires=${d}`;
}


function getParam(key){
    let arr = location.search.substr(1).split('&');
    for(let i=0;i<arr.length;i++ ){
        let keyValue = arr[i].split('=');
        if(keyValue[0].trim() == key){ 
            return keyValue[1];
        }
    } 
}

/**
 * 获取指定名称的cookie值
 * @param {string} key 
 * @returns string
 */
function getCookie(key){
    let arr = document.cookie.split(';');
    for(let i=0;i<arr.length;i++ ){
        let keyValue = arr[i].split('=');
        if(keyValue[0].trim() == key){ 
            return keyValue[1];
        }
    } 
}
function deleteCookie(key){
    // 删除cookie就是将有效时间设置为之前的时间
    setCookie(key,'',-1);
}
/**
 * 获取到ajax对象
 */
function getHttpRequest(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest;
    }else{
        return new ActiveXObject('Microsoft.XMLHTTP')
    }
}


