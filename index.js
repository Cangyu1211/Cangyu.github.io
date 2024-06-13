$(document).ready(function() {
    $('.hamburger-menu').click(function(){
        $('.fullscreen-menu').toggleClass('display_nav');
        $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
        $('.hamburger-menu').toggleClass('move');
    
    });
    $('.fullscreen-menu:not(ul)').click(function(){
        $('.fullscreen-menu').toggleClass('display_nav');
        $('div:not(.fullscreen-menu,.hamburger-menu,.line)').toggleClass('blur');
    });

    $('#main-nav a').on({
        mouseover: function() {
            $(this).css("color", "rgb(143, 202, 202)");
        },
        mouseout: function() {
            $(this).css("color", "rgb(255, 255, 255)");
        }
    }); 
});

document.addEventListener('DOMContentLoaded', (event) => {
    var audio = document.getElementById('background-music');
    audio.volume = 0.1;

    var button = document.getElementById('music-toggle');
    button.addEventListener('click', toggleMusic);
});

function toggleMusic() {
    var audio = document.getElementById('background-music');
    var button = document.getElementById('music-toggle');
    if (audio.paused) {
        audio.play();
        button.textContent = '關閉音樂';
    } else {
        audio.pause();
        button.textContent = '播放音樂';
    }
}
