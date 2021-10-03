function animate(object, target, callback) {//object动画目标对象  target目标位置
    clearInterval(object.time)
    object.time = setInterval(fn, 40)
    function fn() {
        if (object.offsetLeft == target) {
            clearInterval(object.time)//这里使用对象的属性来清楚定时器
            if (callback) {
                callback() //这里是回调函数的形式
            }
        } else {
            var left = object.offsetLeft
            var step = (target - object.offsetLeft) / 10
            if (step > 0) {
                step = Math.ceil(step)//正值往上取   负值往下取
            } else {
                step = Math.floor(step)
            }
            //匀速动画  就是  盒子当前的位置+固定的值
            // 缓动动画 就是  盒子当前的位置+(目标值-现在的值)/10  这个数要取整
            object.style.left = object.offsetLeft + step + 'px'
        }
    }
}
