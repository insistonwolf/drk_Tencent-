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
    function tvEnter(argu, attr) {
        argu.addEventListener('mouseenter', function (e) {

            let target = e.target,
                data_id = target.getAttribute
            allTVDramas.forEach(item => {
                // console.log(item.data_id);
                // let data_id = argu.getElementById()
                // console.log(argu.getElementById);
                if (argu === item.data_id) {
                    item.style.display = 'block';
                    console.log(item);
                } else {
                    item.style.display = 'none';
                } hghb
            })
        })
    }
    function tvEnter(argu, attr) {
        argu.addEventListener('mouseenter', function () {
            attr.style.display = 'block'
        })
    }
    //事件移除方法
    function tyLeave(attr) {

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
        number,
        [btnPrev, btnNext] = [...mod_hd.querySelectorAll('.Hotspot_switching i')],
        [list_numA, list_numB,] = [...document.querySelectorAll('.list_sum  .list_num')];
    //获取第一个热点视频
     let i = 0;
    //点击右边箭头我们发生的事情
    btnNext.addEventListener('click', function () {

        let list_num = document.querySelector('.list_num');
        list_numA.style.left = `${-1368}px`;
        i++;
            number = document.querySelector('.number');
            number.innerHTML = '2/2';
            btnNext.style.color = '#ccc';
            btnPrev.style.color = 'black';

    })
    btnPrev.addEventListener('click',function(){
        let list_num = document.querySelector('.list_num');
        list_numA.style.left = `${0}px`;
        number.innerHTML = '1/1';
        btnPrev.style.color = '#ccc';
        btnNext.style.color = 'black';
    })

})();

/* 快速导航的的操作 */
(function () {

    let input = document.querySelector('.input'),
        entrance = document.querySelector('.entrance'),
        container = document.querySelector('.container');
    console.log(input);
    console.log(entrance);
    //   开始写注册事件
    input.addEventListener('click', function () {
        entrance.style.display = 'block';
    });
    container.addEventListener('click', function () {
        entrance.style.display = 'none';
    });
    /* 给导航栏中的历史记录我的来做鼠标移入个移除事件 */
    let history = document.querySelector('.history'),
        historyDiv = document.querySelector('.historyDiv');
    history.addEventListener('mouseenter', function () {
        historyDiv.style.display = 'block';
    })
    historyDiv.addEventListener('mouseleave', function () {
        historyDiv.style.display = 'none';
    })
    /* 导航栏中我们中的体验的进入和移除的事件 */
    let platform = document.querySelector('.platform'),
        platformImg = document.querySelector('.platformImg');
    platform.addEventListener('mouseenter', function (e) {

        let target = e.target;
        targetTag = target.className;
        if (targetTag = '.platform') {
            platformImg.style.opacity = '1';
            if (targetTag === '.platformImg') {
                platformImg.style.opacity = '1';
            }
        } else {
            platformImg.style.opacity = 'none';
        }

    })
    platformImg.addEventListener('mouseleave', function () {
        platformImg.style.opacity = '0';
    })

    //
    let experience = document.querySelector('.experience'),
        experienceDiv = document.querySelector('.experienceDiv');
    experience.addEventListener('mouseenter', function (e) {
        console.log(1);
        e.stopPropagation();
        experienceDiv.style.display = 'block';
        platformImg.style.opacity = '0';

    })
    experienceDiv.addEventListener('mouseleave', function () {
        experienceDiv.style.display = 'none';
    })

})();

/* 开始做数据的渲染 */
(function () {
    let data;
    const query = function () {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'data.json', false);
        xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
             data = JSON.parse(xhr.responseText)    
             console.log(data);
            }
        }
       xhr.send(null)
    }
   query();
    
let list_num = document.querySelector('.list_num');
   data.forEach(item => {
    let { id, pic, video, title } = item;
    let str = ``,
        list_item = document.createElement('div');
        list_item.className = 'list_item';
    str += ` <a href=""
          target="scene=%E9%A2%91%E9%81%93%E9%A1%B5&pagename=%E7%B2%BE%E9%80%89%E9%A2%91%E9%81%93&columnname=%E7%B2%BE%E9%80%89_%E4%BB%8A%E6%97%A5%E7%83%AD%E9%97%A8&controlname=new_vs_hot_today&cid=&vid=f33511r9msb&pid=&datatype=1&playertype=1&controlidx=0&columnidx=0&plat_bucketid=9231006&cmd=1">
          <img src="${pic}" alt="" class="firstImg" alt="${title}">
          <div class="videoTime">${video}</div>
          <span class="play"></span>
      </a>`
    str += `<div class="title_text">
         ${title}
     </div> `
     list_item.innerHTML = str; //为什么这个不可以用appendChind来进行插入呢
     list_num.appendChild(list_item);
})
}) ();





