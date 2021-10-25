$(function () {
    $.get(`${baseUrl}/system/homeSlide`, function (res) {
        let arr = []
        $.each(res.data, function (i, ele) {
            arr.push(`<div class='swiper-slide'><a href='${ele.link}'><img src='${ele.imgUrl}'></img></a></div>`)
        })
        $('.swiper-wrapper').empty().append(arr.join(''))
    })
    $.get(`${baseUrl}/system/category`, function (res) {
        console.log(res);
        let arr = []

        $.each(res.data, function (i, ele) {

            arr.push(`<li class='d${ele.id}'><img src='${ele.icon}'></img><a  href='http://localhost/%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/%E6%B7%BB%E5%8A%A0%E8%B4%AD%E7%89%A9%E8%BD%A6.html?categoryId=2'>${ele.cateName}</a></li>`)

            let arr1 = []
            $.each(ele.children, function (i, ele1) {
                arr1.push(`<div class='d${ele1.parentId}'><img src='${ele1.icon}'></img><a >${ele1.cateName}</a></div>`)
                let arr2 = []
                $.each(ele1.children, function (i, ele) {
                    arr2.push(`<div class='d${ele.parentId}'><img src='${ele.icon}'></img><a >${ele.cateName}</a></div>`)
                    console.log(ele);
                })
                console.log(arr2);
                $('#box3 .main  .lan').append(arr2)
            })
            $('#box3 .main  .lan').append(arr1)

        })


        $('#box3 .nav ul').empty().append(arr.join(' '))
    })
    let index1 = null
    $('#box3 .main .nav ul ').on('mouseenter', 'li', function () {
        $('#box3 .main .lan').show()
        index1 = $(this).prop('class')
        $(`#box3 .main .lan .${index1}`).show()


    })
    $('#box3 .main .nav ul ').on('mouseleave', 'li', function () {
        $('#box3 .main .lan').hide()
        $('#box3 .main .lan div').hide()
    })

})
