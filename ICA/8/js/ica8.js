/*let div = document.querySelector('body');
div.addEventListener('click', giveAlert);

function giveAlert () {
    alert('This is an alert');
}*/


let p = document.querySelector('p');
p.addEventListener('dblclick', colorUp);
p.addEventListener('click', colorDown);

function colorUp () {
    p.style.color = 'orange';
}

function colorDown () {
    p.style.color = 'blue';
}


const psize = document.getElementById('psize');
document.addEventListener('click', makeBig);

function makeBig () {
    psize.style.fontSize = '100px';
}