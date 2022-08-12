(function () {

    //1实现进入来进行切换图片

    let container = document.querySelector('.container'), //主内容框
        centerImgs = container.querySelectorAll('.data-1'),//获取主页面的上的图片
        centerLi = container.querySelectorAll('.nav-barSecond li'),//获取每个标签对应的盒子
        img1 = container.querySelector('.img1');
    let timer = null,
        interval = 1000,
        step = 1,
        count = centerImgs.length
    //每隔一段事件让定时器来进行循环,我们的图片来实现自动轮播
    const loopPicture = function loopPicture() {
        if (step === count + 1) {
            step = 1
        }
        img1.src = `./img/0 (${step}).webp`;
        step++;
        centerLi.forEach((item, index) => {

            //    item.style.font = '-size22px';
            //    item.style.font = '-weight22px';
            //    console.log(  item[index].style.width = '-22px');
        })
    }
    timer = setInterval(loopPicture, interval)
    centerLi.forEach((item, index) => {
        item.addEventListener('mouseenter', function () {
            timer = clearInterval(timer)
            img1.src = `./img/0 (${index}).webp`
        })
    })
    centerLi.forEach((item, index) => {
        item.addEventListener('mouseleave', function () {
            timer = setInterval(loopPicture, interval)
            // img1.src = `./img/0 (${index}).webp`
        })
    })

    //鼠标的点击事件来进行切换视频
    let mod_hd = document.querySelector('.mod_hd'),
        [btnPrev, btnNext] = [...mod_hd.querySelectorAll('.Hotspot_switching i')],
        [list_numA,list_numB,] = [...document.querySelectorAll('.list_sum  .list_num')];
    //获取第一个热点视频
     
    console.log(list_numA);
    console.log(list_numB);
    //点击右边箭头我们发生的事情
    btnNext.addEventListener('click', function () {
        list_numA.style.display = 'none'
    })
})()