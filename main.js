let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rocket');
let text = document.getElementById('text');
let button = document.getElementById('button');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value *0.25 +'px';
    rocket.style.top = value *0.5 +'px';
    text.style.marginBottom = value *1 +'px';
    button.style.marginBottom = value *1 +'px';

});

function scroll(){
    var ClickDisini = document.getElementsByClassName('description');
   ClickDisini.scrollIntoView({behavior: 'smooth'}, false);
  }

  window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector('audio');
    audio.volume = 0.2;
    audio.play();
  });  