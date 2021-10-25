const baseUrl = 'http://phpclub.org.cn:8080/api'
$.cookie.json = true;
if ($.cookie('userInfo')) {
    const obj = $.cookie('userInfo')
    console.log(obj);
    $('#box .main .denglu a').text(obj.nickname)
    $('#box .main .denglu').css('color', 'white')
    $('#box .main .zhuce a').text('退出')
}

$('#box .main .zhuce a').on('click', function () {
    location.href = 'http://localhost/%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/%E5%B0%8F%E7%B1%B3%E6%B3%A8%E5%86%8C%E9%A1%B5.html'
    $.removeCookie('userInfo', { path: '/' })
})