import request from './request'
 const recommend= request({
    url:'/banner'
})

   
export function getHotRecommends(){
    return request({
        url:'/personalized?limit=8'
    })
}
export function getNewAlbum(){
    return request({
        url:'/top/album?limit=10'
    })
}




export function getRecommendRanking(idx){
    return  request({
        url:'/top/list',
        params:{
            idx
        }
    })
}
export {recommend}