// js原生入口函数
(function (window) {
// 滚动时顶部搜索条背景渐变
window.addEventListener('scroll',function () {
    // 获得滚动上去的高度, 这里做了兼容
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 获得轮播图高度
    var slideHeight = document.querySelector('#slide').offsetHeight;
    if (scrollTop < slideHeight) {
        // 计算透明度的值, 取轮播图高度除以滚动上去的高度
        var opacity = scrollTop / slideHeight;
        // 赋值给顶部搜索条的背景rgba
        document.querySelector('#header').style.backgroundColor = 'rgba(222, 24, 27,'+opacity+')';
    } else {// 超过范围默认为1 就直接写rgb即可
        document.querySelector('#header').style.backgroundColor = 'rgb(222, 24, 27,)';
    }
})

// 初始化轮播图插件
var mySwiper = new Swiper('.swiper-container',{
    direction: 'horizontal', //水平方向轮播
    loop: true, //无限循环模式
    pagination: { //添加分页器小圆点
        el: '.swiper-pagination',
    },
    autoplay: true, //自动切换模式
    autoplay: {
        delay: 2000 //每张停留的时间
    }
})

// 倒计时功能
var spans = document.querySelectorAll('.countdown span');
// 定义总时间变量
var time = 2 * 60 * 60;
// 设置一个每秒自减的定时器
setInterval(function () {
    time--;
    // 自减后的总时间 除以 分 除以 秒, 并向下取整
    var hour = Math.floor(time / 60 / 60);
    // 除以3600除不尽的部分都属于分钟 (不够一个小时都属于分钟就相当于去掉了一小时的秒数) / 60 对应的分钟数 向下取整
    var minute = Math.floor(time % 3600 / 60);
    // 除以60除不尽不够一分钟的都是秒数
    var second = time % 60;
    // 把时分秒十位个位分别放到页面中的span上显示
    spans[0].innerHTML = Math.floor(hour / 10);
    spans[1].innerHTML = Math.floor(hour % 10);
    spans[3].innerHTML = Math.floor(minute / 10);
    spans[4].innerHTML = Math.floor(minute % 10);
    spans[6].innerHTML = Math.floor(second / 10);
    spans[7].innerHTML = Math.floor(second % 10);
},1000)
})(window);