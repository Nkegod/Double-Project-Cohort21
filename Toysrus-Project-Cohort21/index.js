const slideLeft = document.querySelector('.left');
const slideRight = document.querySelector('.right');
const slider = document.querySelector('.slide-one-container');


slideLeft.addEventListener('click', () => {
  slider.scrollLeft -= 300
});

slideRight.addEventListener("click", () => {
  slider.scrollLeft += 300;
});


const leftScroll = document.getElementById('btntn-left');
const rightScroll = document.getElementById('btntn-right');
const scroller = document.querySelector('.scroll-two');

leftScroll.addEventListener('click', () => {
  scroller.scrollLeft -= 1100
});

rightScroll.addEventListener('click', () => {
  scroller.scrollLeft += 1100
});