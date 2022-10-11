/*let div = document.querySelector('body');
div.addEventListener('click', giveAlert);

function giveAlert () {
    alert('This is an alert');
}*/


const p = document.querySelector('p');
p.addEventListener('mousemove', colorChange);

function colorChange () {
    p.style.color = 'orange';
}


const psize = document.getElementById('psize');
document.addEventListener('click', makeBig);

function makeBig () {
    psize.style.fontSize = '100px';
}