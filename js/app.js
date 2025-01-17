const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let countDate = new Date('jan 1, 2026 00:00:00').getTime();

document.addEventListener('DOMContentLoaded', () => {
    setInterval(createSnow, 100);
    setInterval(countDown, 1000);
})

function createSnow() {
    let container = document.querySelector('.container');
    let span = document.createElement('span');

    span.style.left = Math.random() * innerWidth + 'px';

    container.appendChild(span)

    setTimeout(() =>{
        span.remove();
    }, 5000)
}

function countDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let d = Math.floor(gap / (days));
    let h = Math.floor((gap % (days)) / hours);
    let m = Math.floor((gap % hours) / minutes);
    let s = Math.floor((gap % minutes) / seconds);
    document.getElementById('days').innerHTML = d;
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
}