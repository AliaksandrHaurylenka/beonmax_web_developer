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


    // Timer 

    let deadline = '2021-06-10';//время до которого будет идти таймер

    /**
     * Функция возвращающая секунды
     * минуты и часы
     * @param {string} endtime 
     */
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),//разница между датой до которой должен быть отсчет и текущей в миллисекундах
            seconds = Math.floor((t/1000) % 60),// получаем секунды округленные до целого числа и берется остаток от деления на 60
            minutes = Math.floor((t/1000/60) % 60),//получаем минуты округленные до целого числа и берется остаток от деления на 60
            hours = Math.floor((t/(1000*60*60)));//получаем часы округленные до целого числа
            //hours = Math.floor((t/(1000/60/60) % 24)),//получаем часы округленные до целого числа
            //days = Math.floor((t/(1000*60*60*24)));//получаем дни округленные до целого числа

        return {//возвращаем объект
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
            //'days' : days
        };
    }

    /**
     * Функция запускающая таймер
     * @param {string} id 
     * @param {string} endtime 
     */
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            //days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);//обновление счетчика каждую секунду
            
        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num){//добавляем 0 к единичным цифрам
                        if(num <= 9) {
                            return '0' + num;
                        } else return num;
                    };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            //days.textContent = addZero(t.days);

            if (t.total <= 0) {//если t = 0 останавливаем счетчик
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                //days.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);


    //Modal
    let more = document.querySelector('.more'),
        descriptionBtn = document.querySelector('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

        // more.addEventListener('click', function(){
        //     overlay.style.display = 'block';
        //     this.classList.add('more-splash');
        //     document.body.style.overflow = 'hidden';
        // });

        function overlayBlock(btn){
            btn.addEventListener('click', function(){
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });
        }

        overlayBlock(more);
        overlayBlock(descriptionBtn);

        close.addEventListener('click', function(){
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
});