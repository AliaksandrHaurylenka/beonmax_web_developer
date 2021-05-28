'use strict';

let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    li = document.createElement('li'),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    relationship = document.querySelector('#prompt');


//1
menu.insertBefore(menuItem[2], menuItem[1]);
li.classList.add('menu-item');
menu.append(li);
li.innerHTML = 'Пятый элемент';

//2
document.body.style.backgroundImage = "url('../img/apple_true.jpg')";

//3
title.innerHTML = 'Мы продаем только подлинную технику Apple';

//4
adv.remove();

let question = prompt('Ваше отношение к технике Apple?', '');
relationship.textContent = question;