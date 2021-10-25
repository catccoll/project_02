$(function () {
 let data=   getParam("categoryId")
 console.log(data);
 $.get(`${baseUrl}/goods/lists`,{categoryId:data},function(res){
     let arr=[]
     $.each(res.data,function(i,ele){
         console.log(res);
         arr.push(`<li><a href='http://localhost/%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5/%E5%B0%8F%E7%B1%B3%E4%B9%B0%E5%8D%96%E9%A1%B5.html?goodsId=${ele.id}'><img src=${ele.goodsImg} ><h5>${ele.goodsName}</h5><h5>${ele.shopPrice}</h5><div></div></a></li>`)
     })
     $('#box3 ul').empty().append(arr.join(''))
 })

})