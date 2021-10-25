$(function () {
    $('.regist').on('click', function () {
        $('.left').hide().siblings('.right').show()
        $('.right .regist').prop('class', 'red')
    })
    $('.login').on('click', function () {
        $('.left').show().siblings('.right').hide()

        $('.left .login').prop('class', 'red')
    })
    // 注册页面
    let mobile = null
    //   发送验证码
    $('.left button').eq(0).on('click', function () {
        const reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        // 获取手机号
        mobile = $('.mobile').val()
        //  校验手机号
        if (!reg.test(mobile)) {//校验失败时
            alert('请输入正确的手机号码')
            console.log(mobile);
            return false
        } else {
            // 校验成功时,填入手机验证码,且按钮设置为60秒不可点击
            $.get(`${baseUrl}/user/sendVerify`, { mobile }, function (res) {
                console.log(res);
            })

            $(this).prop('disabled', true)
            let sum = 60
            let timer = setInterval(fn

                , 1000)

            function fn() {
                if (sum == 1) {
                    clearInterval(timer)
                    $('.left button').eq(0).text('发送验证码')
                    $('.left button').eq(0).prop('disabled', false)
                }
                $('.left button').eq(0).text(`${sum}秒后再次点击`)
                sum--
            }
            fn()
        }

    })
    $('.left button').eq(1).on('click', function () {
        const verifyCode = $('.left .verifyCode').val()
        const password = $('.left .password').val()
        const data = {
            mobile,
            verifyCode,
            password
        }
        $.post(`${baseUrl}/user/register`, data, function (res) {
            if (res.code != 0) {
                alert(res.msg)
                return false
            }
            $('.left').hide().siblings('.right').show()
        })
    })
    // 登录页面
    // 判断是否有cookie，有就使用
    if ($.cookie('userInfo')) {

      
       location.href='http://localhost/%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/%E5%B0%8F%E7%B1%B3/%E5%B0%8F%E7%B1%B3.html'
        }
    //  没有cookie的时候
    $('.right button').on('click', function () {
        let mobile = $('.right input').eq(0).val()
        let password = $('.right input').eq(1).val()
        let data = {
            mobile,
            password
        }
        $.post(`${baseUrl}/user/login`, data, function (res) {
            if (res.code != 0) {
                return false
            }
            if ($('.checkbox').prop('checked')) {

                $.cookie('userInfo', res.data, { expires: 7, path: '/' });
            }
         
             location.href='http://localhost/%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/%E5%B0%8F%E7%B1%B3/%E5%B0%8F%E7%B1%B3.html'
            console.log(11);
        }, "json")


    })



})