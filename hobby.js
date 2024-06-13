$(document).ready(function () {


    // 漢堡菜單相關
    $('.hamburger-menu').click(function () {
        $('.fullscreen-menu').toggleClass('display_nav');
        $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
        $('.hamburger-menu').toggleClass('move');
    });

    $('.fullscreen-menu:not(ul)').click(function () {
        $('.fullscreen-menu').toggleClass('display_nav');
        $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
    });



    //按下按鈕出現的內容
    const info = [
        { image: 'images/Vivy.jpg', text: 'Vivy -Fluorite Eyes Song-,AI歌姬「Vivy」透過修正歷史來拯救世界的故事'},
        { image: 'images/majohn.png', text: '打麻將,比起台灣麻將更喜歡日本麻將,比較有在動腦子的感覺' },
        { image: 'images/bowling.jpg', text: '我喜歡打保齡球,每局分數都可以達到150分左右,主要打飛碟球' },
        { image: 'images/starrail.png', text: '非常好遊戲,崩壞:星穹鐵道,回合制,最喜歡這種會保底的遊戲了^_^' },
        { image: 'images/singer.jpg', text: '目前喜歡的樂團是日本的髭男,鬍子男,風格是流行搖滾' }
    ];


    //按鈕動畫
    $('.btn').click(function () {
        const index = $(this).index();
        const selectedInfo = info[index];

        $('#info-display').fadeOut(function () {
            $('#info-image').attr('src', selectedInfo.image);
            $('#info-text').text(selectedInfo.text);
            $('#info-display').fadeIn();
        });
    });
});
