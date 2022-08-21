(function () {
    //音乐的播放
    window.onload = function () {
        setInterval(toggleSound, 10);
    }
    console.time('输出时间')
    function toggleSound() {
        var music = document.getElementById("vd");//获取ID  

        if (music.paused) { //判读是否播放  
            music.paused = false;
            music.play(); //没有就播放 
        }
    }
    console.timeEnd('输出时间')
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
        })
    }
    timer = setInterval(loopPicture, interval)
    centerLi.forEach((item, index) => {
        item.addEventListener('mouseenter', function () {
            timer = clearInterval(timer)
            img1.src = `./img/0 (${index}).webp`
            let recommend = document.querySelector('.recommend');
            recommend.style.color = '#fff';
            pictuer_pic.style.color = '#ff5c38'
        });
    })
    centerLi.forEach((item, index) => {
        item.addEventListener('mouseleave', function () {
            timer = setInterval(loopPicture, interval)
            // img1.src = `./img/0 (${index}).webp`
        })
    })
    //获取事件猜你会追
    var mySwiper = new Swiper('.swiper', {
        direction: 'horizontal', // 垂直切换选项
        //loop: true, // 循环模式选项

        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, on: {
            slideChangeTransitionEnd: function () {
                if (this.isEnd) {
                    this.navigation.$nextEl.css('display', 'none');
                } else {
                    this.navigation.$nextEl.css('display', 'block');
                }
            },
        },
    })
    //猜你会追
    let guess = document.querySelector('.guess'),
        backColor = document.querySelector('.backColor'),
        recommend = document.querySelector('.nav-barSecond');
    guess.addEventListener('mouseenter', function () {

        backColor.style.display = 'block'
        guess.style.color = 'red'
        let recommend = document.querySelector('.recommend');
        recommend.style.color = 'rgba(255,255,255,.7)';
        pictuer_pic.style.color = '#fff'
    })
    recommend.addEventListener('mouseenter', function () {

        backColor.style.display = 'none'
        guess.style.color = '#fff'
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
        allTVDramastechnology = technology.querySelector('.allTVDramas'),
        more = rightNavigations[4],
        allTVDramasmore = more.querySelector('.allTVDramas');
    let allTVDramas = document.querySelectorAll('.allTVDramas');

    function tvEnter(argu, attr) {
        argu.addEventListener('mouseenter', function () {
            attr.style.display = 'block'
        })
    }
    //监听盒子
    function boxEnter(argu, attr) {
        argu.addEventListener('mouseleave', function () {
            attr.style.display = 'none'
        })
    }
    //事件移除方法
    function tyLeave(attr) {
        attr.addEventListener('mouseleave', function () {
            attr.style.display = 'none'
        })

    }

    //给电视剧来写入鼠标的移入事件
    tvEnter(tyPlay, allTVDramasTv);
    boxEnter(main_nav_0_top, allTVDramasTv);
    tyLeave(allTVDramasTv)
    // yLeave(tyPlay,allTVDramasTv)
    //给电视剧来写入鼠标的移入事件
    tvEnter(flim, allTVDramasFilm);
    boxEnter(main_nav_0_bottom, allTVDramasFilm);
    tyLeave(allTVDramasFilm)
    //综艺来写入事件
    tvEnter(Variety, allTVDramasVariety);
    boxEnter(main_nav_1_top, allTVDramasVariety);
    tyLeave(allTVDramasVariety)
    //来给动漫写入事件
    tvEnter(Comic, allTVDramasComic);
    boxEnter(main_nav_1_bottom, allTVDramasComic);
    tyLeave(allTVDramasComic)
    //来给少儿写入事件
    tvEnter(juvenile, allTVDramasJuvenile);
    boxEnter(main_nav_2_top, allTVDramasJuvenile);
    tyLeave(allTVDramasJuvenile)
    //来给纪录片写入事件
    tvEnter(Documentary, allTVDramasDocumentary);
    boxEnter(main_nav_2_bottom, allTVDramasDocumentary);
    tyLeave(allTVDramasDocumentary)
    //来给音乐写入事件
    tvEnter(music, allTVDramasMusic);
    boxEnter(music, allTVDramasMusic);
    tyLeave(allTVDramasMusic)
    //来给体育写入事件
    tvEnter(sports, allTVDramasSports);
    boxEnter(sports, allTVDramasSports);
    tyLeave(allTVDramasSports)
    //来给育儿写入事件
    tvEnter(education, allTVDramasEducation);
    boxEnter(education, allTVDramasEducation);
    tyLeave(allTVDramasEducation)
    //来给游戏写入事件
    tvEnter(game, allTVDramasGame);
    boxEnter(game, allTVDramasGame);
    tyLeave(allTVDramasGame)
    console.log(allTVDramasGame);
    //来给知识写入事件
    tvEnter(knowledge, allTVDramasKnowledge);
    boxEnter(knowledge, allTVDramasKnowledge);
    tyLeave(allTVDramasKnowledge)
    console.log(allTVDramasKnowledge);
    //来给技术写入事件
    tvEnter(technology, allTVDramastechnology);
    boxEnter(technology, allTVDramastechnology);
    tyLeave(allTVDramastechnology)
    console.log(allTVDramastechnology);
    //来给更多写入事件
    tvEnter(more, allTVDramasmore);
    boxEnter(more, allTVDramasmore);
    tyLeave(allTVDramasmore);
    //历史图标

    //鼠标的点击事件来进行切换视频
    let mod_hd = document.querySelector('.mod_hd'),
        number = document.querySelector('.number'),
        [btnPrev, btnNext] = [...mod_hd.querySelectorAll('.Hotspot_switching i')],
        [list_numA, list_numB] = [...document.querySelectorAll('.list_sum  .list_num')];
    //获取第一个热点视频

    //点击右边箭头我们发生的事情
    // btnNext.addEventListener('click', function () {
    //     list_numA.style.left = `${-1368}px`;
    //     number = document.querySelector('.number').innerHTML = '2/2';
    //     btnNext.style.color = '#ccc';
    //     btnPrev.style.color = 'black';

    // })
    // btnPrev.addEventListener('click', function () {
    //     list_numA.style.left = `${0}px`;
    //     number.innerHTML = '1/1';
    //     btnPrev.style.color = '#ccc';
    //     btnNext.style.color = 'black';
    // })

    const nextClick = function nextClick(attr, number, next, prev) {
        next.addEventListener('click', function () {
            attr.style.left = `${-1368}px`;
            number.innerHTML = '2/2';
            next.style.color = 'black';
            prev.style.color = 'black';
        })
    }
    const prevClick = function nextClick(attr, number, next, prev) {
        prev.addEventListener('click', function () {
            attr.style.left = `${0}px`;
            number.innerHTML = '1/2';
            prev.style.color = '#ccc';
            next.style.color = 'black';
        })
    }

    nextClick(list_numA, number, btnNext, btnPrev);
    prevClick(list_numA, number, btnNext, btnPrev);

    //知识区来进行左右切换
    let mod_hd_kn = document.querySelector('.mod_hd_kn'),
        numberKn = document.querySelector('.numberKn'),
        [btnPrevKn, btnNextKn] = [...mod_hd_kn.querySelectorAll('.Hotspot_switching i')],
        [list_numA_kn, list_numB_kn] = [...document.querySelectorAll('.list_sum  .list_numA_kn')];
    nextClick(list_numA_kn, numberKn, btnNextKn, btnPrevKn);
    prevClick(list_numA_kn, numberKn, btnNextKn, btnPrevKn);
    //花絮来进行左右切换
    let mod_edu = document.querySelector('.mod_edu'),
        number_edu = document.querySelector('.number_edu'),
        [btnPrev_edu, btnNext_edu] = [...mod_edu.querySelectorAll('.Hotspot_switching i')],
        [list_numA_edu, list_numB_edu] = [...document.querySelectorAll('.list_sum  .Education_num_num')];
    nextClick(list_numA_edu, number_edu, btnNext_edu, btnPrev_edu);
    prevClick(list_numA_edu, number_edu, btnNext_edu, btnPrev_edu);

    //教育精选来进行左右切换
    let mod_trailer = document.querySelector('.mod_trailer'),
        number_trailer = document.querySelector('.number_trailer'),
        [btnPrev_trailer, btnNext_trailer] = [...mod_trailer.querySelectorAll('.Hotspot_switching i')],
        [list_numA_trailer, list_numB_trailer] = [...document.querySelectorAll('.list_sum  .trailer_num_num')];
    nextClick(list_numA_trailer, number_trailer, btnNext_trailer, btnPrev_trailer);
    prevClick(list_numA_trailer, number_trailer, btnNext_trailer, btnPrev_trailer);
    //时尚精选来进行左右切换
    let mod_hd_fashionPopularity = document.querySelector('.mod_hd_fashionPopularity'),
        number_fashion = document.querySelector('.number_fashion'),
        [btnPrev_fashion, btnNext_fashion] = [...mod_hd_fashionPopularity.querySelectorAll('.Hotspot_switching i')],
        [list_numA_fashion, list_numB_fashion] = [...document.querySelectorAll('.list_sum  .fashion_num_num')];
    nextClick(list_numA_fashion, number_fashion, btnNext_fashion, btnPrev_fashion);
    prevClick(list_numA_fashion, number_fashion, btnNext_fashion, btnPrev_fashion);

    //音乐精选来进行左右切换
    let mod_hd_music = document.querySelector('.mod_hd_music'),
        number_mic = document.querySelector('.number_mic'),
        [btnPrev_mic, btnNext_mic] = [...mod_hd_music.querySelectorAll('.Hotspot_switching i')],
        [list_numA_mic, list_numB_mic] = [...document.querySelectorAll('.list_sum  .music_num_num')];
    nextClick(list_numA_mic, number_mic, btnNext_mic, btnPrev_mic);
    prevClick(list_numA_mic, number_mic, btnNext_mic, btnPrev_mic);

    //娱乐精选来进行左右切换
    let mod_hd_hotspot = document.querySelector('.mod_hd_hotspot'),
        number_hot = document.querySelector('.number_hot'),
        [btnPrev_hot, btnNext_hot] = [...mod_hd_hotspot.querySelectorAll('.Hotspot_switching i')],
        [list_numA_hot, list_numB_hot] = [...document.querySelectorAll('.list_sum  .hotspot_num_num')];
    nextClick(list_numA_hot, number_hot, btnNext_hot, btnPrev_hot);
    prevClick(list_numA_hot, number_hot, btnNext_hot, btnPrev_hot);
    //母婴精选来进行左右切换
    let mod_hd_motherAndBaby = document.querySelector('.mod_hd_motherAndBaby'),
        number_mother = document.querySelector('.number_mother'),
        [btnPrev_mother, btnNext_mother] = [...mod_hd_motherAndBaby.querySelectorAll('.Hotspot_switching i')],
        [list_numA_mother, list_numB_mother] = [...document.querySelectorAll('.list_sum  .motherAndBaby_num_num')];
    nextClick(list_numA_mother, number_mother, btnNext_mother, btnPrev_mother);
    prevClick(list_numA_mother, number_mother, btnNext_mother, btnPrev_mother);
    //星座精选来进行左右切换
    let mod_hd_constellation = document.querySelector('.mod_hd_constellation'),
        number_constellation = document.querySelector('.number_constellation'),
        [btnPrev_constellation, btnNext_constellation] = [...mod_hd_constellation.querySelectorAll('.Hotspot_switching i')],
        [list_numA_constellation, list_numB_constellation] = [...document.querySelectorAll('.list_sum  .constellation_num_num')];
    nextClick(list_numA_constellation, number_constellation, btnNext_constellation, btnPrev_constellation);
    prevClick(list_numA_constellation, number_constellation, btnNext_constellation, btnPrev_constellation);
    //汽车精选来进行左右切换
    let mod_hd_car = document.querySelector('.mod_hd_car'),
        number_car = document.querySelector('.number_car'),
        [btnPrev_car, btnNext_car] = [...mod_hd_car.querySelectorAll('.Hotspot_switching i')],
        [list_numA_car, list_numB_car] = [...document.querySelectorAll('.list_sum  .car_num_num')];
    nextClick(list_numA_car, number_car, btnNext_car, btnPrev_car);
    prevClick(list_numA_car, number_car, btnNext_car, btnPrev_car);

})();

/* 快速导航的的操作 */
(function () {

    let input = document.querySelector('.input'),
        entrance = document.querySelector('.entrance'),
        container = document.querySelector('.container');

    //   开始写注册事件
    input.addEventListener('click', function () {
        entrance.style.display = 'block';
    });
    container.addEventListener('click', function () {
        entrance.style.display = 'none';
    });
    let vip = document.querySelector('.vip');
    vip.addEventListener('mouseenter', function () {
        historyDiv.style.display = 'none';
    })
    /* 给导航栏中的历史记录我的来做鼠标移入个移除事件 */
    let history = document.querySelector('.history'),
        historyDiv = document.querySelector('.historyDiv');

    his_his.addEventListener('mouseenter', function () {
        historyDiv.style.display = 'block';
        platformImg.style.display = 'none';
    });
    historyDiv.addEventListener('mouseleave', function () {
        historyDiv.style.display = 'none';
    })
    /* 导航栏中我们中的体验的进入和移除的事件 */
    let platform = document.querySelector('.platform'),
        platformImg = document.querySelector('.platformImg');
    platform.addEventListener('mouseenter', function () {

        // let target = e.target;
        // targetTag = target.className;
        // if (targetTag = '.platform') {
        //     platformImg.style.opacity = '1';
        //     if (targetTag === '.platformImg') {
        //         platformImg.style.opacity = '1';
        //     }
        // } else {
        //     platformImg.style.opacity = 'none';
        // }
        platformImg.style.display = 'block';
        experienceDiv.style.display = 'none';
        historyDiv.style.display = 'none';
    })
    platformImg.addEventListener('mouseleave', function () {
        platformImg.style.display = 'none';
    })

    //
    let experience = document.querySelector('.experience'),
        experienceDiv = document.querySelector('.experienceDiv');
    experience.addEventListener('mouseenter', function (e) {

        e.stopPropagation();
        experienceDiv.style.display = 'block';
        platformImg.style.display = 'none';
        login.style.display = 'none'


    })
    experienceDiv.addEventListener('mouseleave', function () {
        experienceDiv.style.display = 'none';
    })

    //登录的书写
    let me = document.querySelector('.me'),
        login = document.querySelector('.login');
    me.addEventListener('mouseenter', function () {
        experienceDiv.style.display = 'none';
        login.style.display = 'block'
    })
    login.addEventListener('mouseleave', function () {
        login.style.display = 'none'
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
            }
        }
        xhr.send(null)
    }
    query();

    let list_num = document.querySelector('.list_num'),
        list_sum = document.querySelector('.data_2'),
        list_car = document.querySelector('.car_num_num'),
        list_constellation = document.querySelector('.constellation_num_num'),
        list_mother = document.querySelector('.motherAndBaby_num_num'),
        list_hostpot = document.querySelector('.hotspot_num_num'),
        list_music = document.querySelector('.music_num_num'),
        list_fasion = document.querySelector('.fashion_num_num'),
        list_education = document.querySelector('.Education_num_num'),
        list_Britain = document.querySelector('.Britain_num_num'),
        list_trailer = document.querySelector('.trailer_num_num'),
        list_video = document.querySelector('.video_num_num'),
        list_video2 = document.querySelector('.video2_num_num');


    data.data1.forEach(item => {
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

    data.data2.forEach(item => {
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
        list_sum.appendChild(list_item);
        //   list_itme.classList.add = 'CaoJin';
    });
    //来实现放大的效果
    let caoJin  =document.querySelector('.data_2'),
        caojin = caoJin.querySelectorAll('.list_item');
        title = caoJin.querySelector('.title_text')
        
        for(let i = 3 ; i < caojin.length;i++){
            if (i === 6) {
                i = 9;
            }
            caojin[i].addEventListener('mouseenter',function(){
                caojin[i].style.transform = `scaleY(${1.6})`;
                title.style.display = 'none';
                caojin[i].addEventListener('mouseleave',function(){
                    caojin[i].style.transform = `scaleY(${1})`;
                    title.style.display = 'block';
                   
                })
            })


        }

       

    console.log(title);
    data.data3.forEach(item => {
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
        list_car.appendChild(list_item);
    })
    data.constellation.forEach(item => {
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
        list_constellation.appendChild(list_item);
    })
    data.MotherAndBaby.forEach(item => {
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
        list_mother.appendChild(list_item);
    })
    data.hostpot.forEach(item => {
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
        list_hostpot.appendChild(list_item);
    })
    data.music.forEach(item => {
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
        list_music.appendChild(list_item);
    })
    data.fashion.forEach(item => {
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
        list_fasion.appendChild(list_item);
    })
    data.education.forEach(item => {
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
        list_education.appendChild(list_item);
    })
    data.Britain.forEach(item => {
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
        list_Britain.appendChild(list_item);
    })

    data.trailer.forEach(item => {
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
        list_trailer.appendChild(list_item);
    })
    data.video.forEach(item => {
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
        list_video.appendChild(list_item);
    })
    data.video2.forEach(item => {
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
        list_video2.appendChild(list_item);
    })
})();





