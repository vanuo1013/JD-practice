(function (window) {
    // 初始化左侧分类滑动功能
    var swiperLeft = new Swiper('.category-left .swiper-container', {
        direction: 'vertical', //垂直方向滑动
        slidesPerView: 'auto', //支持内容并排在一起滑动
        freeMode: true //添加滑动惯性
    });

    // 初始化右侧分类滑动功能
    var swiperRight = new Swiper('.category-right .swiper-container', {
        direction: 'vertical', //垂直方向滑动
        slidesPerView: 'auto', //支持内容并排在一起滑动
        freeMode: true, //添加滑动惯性
        scrollbar: { //添加滚动条
            el: '.swiper-scrollbar',
        },
        mousewheel: true //是否支持鼠标滚轮 意义不大手机没鼠标滚轮 点击激活
    });

    // 分类页面的点击置顶功能
    var lis = document.querySelectorAll('.category-left li');
    var swiperWrapper = document.querySelector('.swiper-wrapper');
    var containerH = document.querySelector('.swiper-container').offsetHeight;
    var slideH = document.querySelector('.swiper-slide').offsetHeight;
    // 遍历给每个li添加事件
    for (var i = 0; i < lis.length; i++) {
        // 循环遍历结束i的值已固定, 可以通过给元素添加行内自定义属性的方式存入i的值再取, 也可以通过闭包的方式
        (function (num) { //这里的num相当于通过传参把i的值传了进来
            // 通过addEventListener的方式添加事件
            lis[num].addEventListener('click',function () {
                // 当前点击li要位移的距离 -li的索引*li的高度 (注意是负值)
                var translateY = -num * this.offsetHeight;
                // 如果位移距离超过最小位移距离(父元素高度-子元素高度)则固定为最小位移距离
                var minTranslateY = containerH - slideH;
                if (translateY < minTranslateY) {
                    translateY = minTranslateY;
                }
                // 把位移距离赋值给滑动容器, 并添加动画效果
                swiperWrapper.style.transform = 'translateY('+translateY+'px)';
                swiperWrapper.style.transition = 'all 0.5s';
                // 用排他思想做jq的siblings切换效果
                for (var j = 0; j < lis.length; j++) {
                    // 先遍历删除所有li的active类
                    lis[j].classList.remove('active');
                }
                // 再给当前点击的li添加active类
                this.classList.add('active');
            })
        })(i);
    }
})(window);