$(document).ready(function () {

    // 初始顯示第一個 .bottom 元素
    $('.bottom').first().addClass('active');
    
    // 當點擊 .more-title時切換對應的 .bottom 元素
    $('.more-title').click(function () {
        var $nextBottom = $(this).next('.bottom');
        
        // 隱藏所有 .bottom 元素，除了當前的元素
        $('.bottom').not($nextBottom).removeClass('active');
    
        // 切換當前的 .bottom 元素的顯示狀態
        $nextBottom.toggleClass('active');
    });
    
        // bartxt
        $('#main-nav a').on({
            mouseover: function () {
                $(this).css("color", "#42c5ed");
            },
            mouseout: function () {
                $(this).css("color", "rgb(255, 255, 255)");
            }
        });
        // btn
        $(".btn").hover(
            function () {
                $(this).find("span:nth-child(1)").css({
                    //find事件:尋找前面選擇器的子元素
                    //這裡是(.btn)->(span:nth-child(1))加上css...
                    height: "100%",
                    transition: "height 1.5s ease"
                    // transition:轉場效果
                    // ease:指定一個緩慢開始，然後快速，然後緩慢結束的轉場效果
                });
                $(this).find("span:nth-child(2)").css({
                    width: "100%",
                    transition: "width 1.5s ease"
                });
                $(this).find("span:nth-child(3)").css({
                    height: "100%",
                    transition: "height 1.5s ease"
                });
                $(this).find("span:nth-child(4)").css({
                    width: "100%",
                    transition: "width 1.5s ease"
                });
            },
            function () {
                $(this).find("span:nth-child(1)").css({
                    height: "0",
                    transition: "height 1.5s ease"
                });
                $(this).find("span:nth-child(2)").css({
                    width: "0",
                    transition: "width 1.5s ease"
                });
                $(this).find("span:nth-child(3)").css({
                    height: "0",
                    transition: "height 1.5s ease"
                });
                $(this).find("span:nth-child(4)").css({
                    width: "0",
                    transition: "width 1.5s ease"
                });
            }
        );
    
        $('#fa-btn').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).text($(this).text().replace(': Vivy -Fluorite Eyes Song-', ''));
            } else {
                $(this).addClass('active');
                $(this).append(': Vivy -Fluorite Eyes Song-');
            }});
        $('#fso-btn').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).text($(this).text().replace(': Official髭男dism - Cry Baby', ''));
            } else {
                $(this).addClass('active');
                $(this).append(': Official髭男dism - Cry Baby');
            }
        });
        $('#fms-btn').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).text($(this).text().replace(': 流行搖滾', ''));
            } else {
                $(this).addClass('active');
                $(this).append(': 流行搖滾');
            }
        });
        $('#fama-btn').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).text($(this).text().replace(': Vivy中的配角グレイス(葛蕾絲)', ''));
            } else {
                $(this).addClass('active');
                $(this).append(': Vivy中的配角グレイス(葛蕾絲)');
            }
        });
        $('#fiv-btn').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).text($(this).text().replace(': 玩遊戲', ''));
            } else {
                $(this).addClass('active');
                $(this).append(': 玩遊戲');
            }
        });
        $('#fsp-btn').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).text($(this).text().replace(': 打保齡球', ''));
            } else {
                $(this).addClass('active');
                $(this).append(': 打保齡球');
            }
        });
        $('#fla-btn').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).text($(this).text().replace(': 硬要講是C++,比較好懂', ''));
            } else {
                $(this).addClass('active');
                $(this).append(': 硬要講是C++,比較好懂');
            }
        });
        
    });
    
    $('.hamburger-menu').click(function () {
        $('.fullscreen-menu').toggleClass('display_nav');
        $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
        $('.hamburger-menu').toggleClass('move');
    
    });
    $('.fullscreen-menu:not(ul)').click(function () { //若全屏選單已經開啟且被點擊任一處，則關閉選單(把選單加上display:none的效果)
        $('.fullscreen-menu').toggleClass('display_nav');
        $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
    });
    
    $(document).ready(function () {
        const links = $('.nav-link');
        const pages = $('.page');
    
        function showPage(hash) {
            pages.each(function () {
                if ('#' + $(this).attr('id') === hash) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        }
    
        links.on('click', function (event) {
            event.preventDefault();
            const hash = $(this).attr('href');
            window.location.hash = hash;
            showPage(hash);
        });
    
        // 初始顯示頁面
        const currentHash = window.location.hash || '#home';
        showPage(currentHash);
    });