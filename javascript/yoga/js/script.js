window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    //ПЕРЕКЛЮЧЕНИЕ ТАБОВ
    let tab = document.querySelectorAll('.info-header-tab'),//находим все элементы с классом .info-header-tab
        info = document.querySelector('.info-header'),//находим элемент с классом .info-header
        tabContent = document.querySelectorAll('.info-tabcontent');//находим все элементы с классом .info-tabcontent



    //скрываем все табы, кроме первого. Для этого и служит техническая переменная а
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');//удаляем класс .show
            tabContent[i].classList.add('hide');//дабавляем класс .hide
        }
    }

    hideTabContent(1);


    /**показываем содержимое таба. 
    *Для этого служит техническая переменная,
    *через которую определяем,
    *что элемент содержит класс .hide
    */
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {//определяем, что элемент содержит класс .hide
            tabContent[b].classList.remove('hide');//удаляем класс .hide
            tabContent[b].classList.add('show');//дабавляем класс .show
        }
    }

    
    /**
     * определяем по какому из табов был клик
     * Если целевого элемента target класс .info-header-tab
     * и целевого элемента при переборе в цикле
     * цифры совпадают, то он влючается, а первый выключается
     * и завершается работа командой break
     */
    info.addEventListener('click', function(event) {
        let target = event.target;//целевой элемент
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });
    //КОНЕЦ ПЕРЕКЛЮЧЕНИЕ ТАБОВ
});