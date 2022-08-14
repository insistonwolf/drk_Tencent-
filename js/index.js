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
    /* 第三部分导航栏的书写 */
    //电视剧和电影的
    let main_nav_0 = document.querySelector('.main_nav-0'),
        main_nav_0_top = main_nav_0.querySelector('.main_nav-0-top')
    tyPlay = main_nav_0_top.querySelector('.TV-play'),
        allTVDramasTv = main_nav_0.querySelector('.allTVDramas');
    main_nav_0_bottom = main_nav_0.querySelector('.main_nav-0-bottom'),
        flim = main_nav_0_bottom.querySelector('.TV-play'),
        allTVDramasFilm = main_nav_0_bottom.querySelector('.allTVDramas');

    let main_nav_1 = document.querySelector('.main_nav-1'),
        main_nav_1_top = main_nav_1.querySelector('.main_nav-1-top')
    Variety = main_nav_1_top.querySelector('.TV-play'),
        allTVDramasVariety = main_nav_1_top.querySelector('.allTVDramas');
    main_nav_1_bottom = main_nav_1.querySelector('.main_nav-1-bottom'),
        Comic = main_nav_1_bottom.querySelector('.TV-play'),
        allTVDramasComic = main_nav_1_bottom.querySelector('.allTVDramas');

    let main_nav_2 = document.querySelector('.main_nav-2'),
        main_nav_2_top = main_nav_2.querySelector('.main_nav-2-top')
    juvenile = main_nav_2_top.querySelector('.TV-play'),
        allTVDramasJuvenile = main_nav_2_top.querySelector('.allTVDramas');
    main_nav_2_bottom = main_nav_2.querySelector('.main_nav-2-bottom'),
        Documentary = main_nav_2_bottom.querySelector('.TV-play'),
        allTVDramasDocumentary = main_nav_2_bottom.querySelector('.allTVDramas');

    let main_nav_3 = document.querySelector('.main_nav-3'),
        leftNavigations = main_nav_3.querySelectorAll('.leftNavigation li'),
        music = leftNavigations[2],
        allTVDramasMusic = music.querySelector('.allTVDramas'),
        sports = leftNavigations[3],
        allTVDramasSports = sports.querySelector('.allTVDramas'),
        education = leftNavigations[4],
        allTVDramasEducation = education.querySelector('.allTVDramas'),
        rightNavigations = main_nav_3.querySelectorAll('.rightNavigation li'),
        game = rightNavigations[0],
        allTVDramasGame = game.querySelector('.allTVDramas'),
        knowledge = rightNavigations[1],
        allTVDramasKnowledge = knowledge.querySelector('.allTVDramas'),
        technology = rightNavigations[3],
        allTVDramastechnology = knowledge.querySelector('.allTVDramas'),
        more = rightNavigations[4],
        allTVDramasmore = more.querySelector('.allTVDramas');
    let allTVDramas = document.querySelectorAll('.allTVDramas');

    // console.log(music);
    // console.log(allTVDramas);
    //鼠标移入事件的方法
    // function tvEnter(argu, attr) {
    //     argu.addEventListener('mouseenter', function () {
    //         allTVDramas.forEach(item => {
    //             let{id,className,data_id} = item
    //             console.log(id,className);
    //             console.log(item);
    //             // argu.querySelector()
    //             // console.log(item.data_id);
    //             // let data_id = argu.getElementById()
    //             // console.log(argu.getElementById);
    //             if (argu === item.data_id) {
    //                 item.style.display = 'block';
    //                 console.log(item);
    //             } else {
    //                 item.style.display = 'none';
    //             }hghb
    //         })
    //     })
    // }
    function tvEnter(argu, attr) {
        argu.addEventListener('mouseenter', function () {
            attr.style.display = 'block'
        })
    }
    //事件移除方法
    function tyLeave( attr) {

        // argu.addEventListener('mouseleave', function (e) {
        //     let target = e.target,
        //         targetTag = target.tagName;
        //         if (targetTag === "A") {
        //             attr.style.display = 'none';
        //         }
        // })
        attr.addEventListener('mouseleave', function () {
            attr.style.display = 'none'
        })

    }

    //给电视剧来写入鼠标的移入事件
    tvEnter(tyPlay, allTVDramasTv);
    tyLeave(tyPlay, allTVDramasTv)
    // yLeave(tyPlay,allTVDramasTv)
    //给电视剧来写入鼠标的移入事件
    tvEnter(flim, allTVDramasFilm);
    tyLeave(allTVDramasFilm)
    //综艺来写入事件
    tvEnter(Variety, allTVDramasVariety);
    tyLeave(allTVDramasVariety)
    //来给动漫写入事件
    tvEnter(Comic, allTVDramasComic);
    tyLeave(allTVDramasComic)
    //来给少儿写入事件
    tvEnter(juvenile, allTVDramasJuvenile);
    tyLeave(allTVDramasJuvenile)
    //来给纪录片写入事件
    tvEnter(Documentary, allTVDramasDocumentary);
    tyLeave(allTVDramasDocumentary)
    //来给音乐写入事件
    tvEnter(music, allTVDramasMusic);
    tyLeave(allTVDramasMusic)
    //来给体育写入事件
    tvEnter(sports, allTVDramasSports);
    tyLeave(allTVDramasSports)
    //来给育儿写入事件
    tvEnter(education, allTVDramasEducation);
    tyLeave(allTVDramasEducation)
    //来给游戏写入事件
    tvEnter(game, allTVDramasGame);
    tyLeave(allTVDramasGame)
    //来给知识写入事件
    tvEnter(knowledge, allTVDramasKnowledge);
    tyLeave(allTVDramasKnowledge)
    //来给技术写入事件
    tvEnter(technology, allTVDramastechnology);
    tyLeave(allTVDramastechnology)
    //来给更多写入事件
    tvEnter(more, allTVDramasmore);
    tyLeave(allTVDramasmore)
    //鼠标的点击事件来进行切换视频
    let mod_hd = document.querySelector('.mod_hd'),
        [btnPrev, btnNext] = [...mod_hd.querySelectorAll('.Hotspot_switching i')],
        [list_numA, list_numB,] = [...document.querySelectorAll('.list_sum  .list_num')];
    //获取第一个热点视频

    //点击右边箭头我们发生的事情
    btnNext.addEventListener('click', function () {
        list_numA.style.display = 'none'
    })
})()