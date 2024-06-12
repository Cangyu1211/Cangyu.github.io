$(document).ready(function () {
    // Initial display of the first .bottom element
    $('.bottom').first().addClass('active');
    
    // Toggle corresponding .bottom element when .more-title is clicked
    $('.more-title').click(function () {
        var $nextBottom = $(this).next('.bottom');
        
        // Hide all .bottom elements except the current one
        $('.bottom').not($nextBottom).removeClass('active');
    
        // Toggle the display state of the current .bottom element
        $nextBottom.toggleClass('active');
    });

    // Navigation bar hover effect
    $('#main-nav a').on({
        mouseover: function () {
            $(this).css("color", "#42c5ed");
        },
        mouseout: function () {
            $(this).css("color", "rgb(255, 255, 255)");
        }
    });

    // Button hover effects
    $(".btn").hover(
        function () {
            $(this).find("span:nth-child(1)").css({
                height: "100%",
                transition: "height 1.5s ease"
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

    // Button click effects
    $('#fa-btn').click(function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': Vivy -Fluorite Eyes Song-', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': Vivy -Fluorite Eyes Song-');
        }
    });

    $('#fso-btn').click(function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': Official髭男dism - Cry Baby', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': Official髭男dism - Cry Baby');
        }
    });

    $('#fms-btn').click(function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': 流行搖滾', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': 流行搖滾');
        }
    });

    $('#fama-btn').click(function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': Vivy中的配角グレイス(葛蕾絲)', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': Vivy中的配角グレイス(葛蕾絲)');
        }
    });

    $('#fiv-btn').click(function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': 玩遊戲', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': 玩遊戲');
        }
    });

    $('#fsp-btn').click(function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': 打保齡球', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': 打保齡球');
        }
    });

    $('#fla-btn').click(function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text($(this).text().replace(': 硬要講是C++,比較好懂', ''));
        } else {
            $(this).addClass('active');
            $(this).append(': 硬要講是C++,比較好懂');
        }
    });

    // Hamburger menu functionality
    $('.hamburger-menu').click(function () {
        $('.fullscreen-menu').toggleClass('display_nav');
        $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
        $('.hamburger-menu').toggleClass('move');
    });

    $('.fullscreen-menu:not(ul)').click(function () {
        $('.fullscreen-menu').toggleClass('display_nav');
        $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
    });

    // Page navigation
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

    // Initial display of the page
    const currentHash = window.location.hash || '#home';
    showPage(currentHash);
});
