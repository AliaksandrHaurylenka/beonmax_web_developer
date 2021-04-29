const hamburger = document.querySelector('.hamburger'),
       menu =  document.querySelector('.menu'),
       closeBlock = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeBlock.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__sliders-percentages'),
      lines = document.querySelectorAll('.skills__sliders-line');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});