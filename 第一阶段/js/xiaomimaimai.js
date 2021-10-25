$(function () {
    let data = getParam("goodsId")
    console.log(data);
    $.get(`${baseUrl}/goods/detail`, { goodsId: data }, function (res) {
        console.log(res);
        $('#box5 .main .img').prop('src', res.data.goodsImg[0].goodsImg)
        $('#box5 .main  .p3 span').eq(0).text(res.data.shopPrice).siblings().text(res.data.marketPrice)

        $('#box5 .main  .zongji  #qian').text(`${parseInt(res.data.shopPrice).toFixed(0)}元`)
        $('#box5 .main  .zongji  #qian1').text(`${parseInt(res.data.marketPrice).toFixed(0)}元`)
        $('#box5 .main  .zongji .yuan').text(`总计:${res.data.shopPrice} 元`)
    })
    // if($.cookie('userInfo')){
    //  $('#box4').hide()
    // }
})