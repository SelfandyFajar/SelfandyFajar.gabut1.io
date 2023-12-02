let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rocket');
let text = document.getElementById('text');
let button = document.getElementById('button');


window.addEventListener('scroll', function() {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  rocket.style.top = value * 0.5 + 'px';
  text.style.marginBottom = value * 1 + 'px';
  button.style.marginBottom = value * 1 + 'px';

});

function scroll() {
  var ClickDisini = document.getElementsByClassName('description');
  ClickDisini.scrollIntoView({ behavior: 'smooth' }, false);
}

function mulai() {
  var audio = document.querySelector(".audio");
  var i = 0;
  var txt = document.getElementById("description");
  var speed = 50;

  audio.play();
  audio.volume = 0.2;
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll;";
  setTimeout(function() {
    document.querySelector(".open").style.display = "none";
    if (i < txt.length) {
      document.getElementById("description").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }, 1000);
}
