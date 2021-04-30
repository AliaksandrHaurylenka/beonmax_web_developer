$(function(){  
    'use strict';
    
    // Scroll Up
    $.scrollUp({
        topDistance: '300',
        animation: 'fade',
        scrollImg: { active: true, type: 'background', src: '/img/top.png' }
    });

    $('.carousel').carousel({interval: 10000});
    
});