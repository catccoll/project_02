var util = {
    ajax: function (params) {
        var xhr = new XMLHttpRequest()
        if (params.method.toLowerCase() === 'get') {
            if (params.query) {
                params.url += '?'
                for (var i in params.query) {
                    params.url = `${i},${params.query[i]}&`
                }
                params.url.slice(0, -1)

            }
            xhr.open(params.method, params.url)
            xhr.send()
        }

        else {
            if (params.query) {
                var str = ''
                for (var i in params.query) {
                    str += `${i},${params.query[i]}&`
                }
                params.url.slice(0, -1)

            }
            xhr.open(params.method, params.url)
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xhr.send(str)
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var res = params.isJson ? JSON.parse(xhr.responseText) : xhr.responseText//看自己是否想要不是字符串的格式
                    params.callback(res)
                }
            }
        }
    },
    get: function (url, query, callback, isJson) {
        url += '?'
        if (query) {
            for (var k in query) {
                url += `${k}:${query[k]}&`
            }
            url = url.slice(0, -1)//取出最后对于的&
        }
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.send()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var res = isJson ? JSON.parse(xhr.responseText) : xhr.responseText//看自己是否想要不是字符串的格式
                    callback(res)
                }
            }
        }
    },
    post: function (url, query, callback, isJson) {
        var str = ''
        if (query) {
            for (var k in query) {
                str += `${k}:${query[k]}&`
                //         }
                str = str.slice(0, -1)//取出最后对于的&
            }
            var xhr = new XMLHttpRequest()
            xhr.open('POST', url)
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xhr.send(str)
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var res = isJson ? JSON.parse(xhr.responseText) : xhr.responseText//看自己是否想要不是字符串的格式
                        callback(res)
                    }
                }
            }
        }
    },
    promise: function (url, query, isJson) {
        if (query) {
            url += '?'
            for (var i in query) {
                url += `${i}=${query[i]}&`
            }
            url = url.slice(0, -1)
        }
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()
            xhr.open('GET', url)
            xhr.send()
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var res = isJson ? JSON.parse(xhr.responseText) : xhr.responseText
                        resolve(res)
                    } else {
                        reject()
                    }
                }
            }
        })
    },
    promise1: function (url, query, isJson) {
        if (query) {
           var str=''
            for (var i in query) {
                str += `${i}=${query[i]}&`
            }
            str = str.slice(0, -1)
        }
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()
            xhr.open('POST', url)
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
            xhr.send(str)
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var res = isJson ? JSON.parse(xhr.responseText) : xhr.responseText
                        resolve(res)
                    } else {
                        reject()
                    }
                }
            }
        })
    }
}