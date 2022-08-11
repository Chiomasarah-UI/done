const img = document.querySelector('.img');

const move_up = document.querySelector('.move_up');
const move_down = document.querySelector('.move_down');
const move_right = document.querySelector('.move_right');
const move_left = document.querySelector('.move_left');

const beat = document.querySelector('.beat_');
const bounce = document.querySelector('.bounce_');
const fade_in = document.querySelector('.fade_in');
const fade_out = document.querySelector('.fade_out');

const rotate_up = document.querySelector('.rotate_up');
const rotate_down = document.querySelector('.rotate_down');
const rotate_right = document.querySelector('.rotate_right');
const rotate_left = document.querySelector('.rotate_left');

const rubber_band = document.querySelector('.rubber_band');
const surprise = document.querySelector('.surprise_');
const shake = document.querySelector('.shake_');
const wobble = document.querySelector('.wobble_');
const jelly = document.querySelector('.jelly_');
const pulse = document.querySelector('.pulse_');

const hinge = document.querySelector('.hinge_');
const roll_in = document.querySelector('.roll_in');
const roll_out = document.querySelector('.roll_out');
const jackInTheBox = document.querySelector('.jack_in');
const shake_x = document.querySelector('.shake_x');
const shake_y = document.querySelector('.shake_y');
const swing = document.querySelector('.swing_');
const bounce_in = document.querySelector('.bounce_in');
const bounce_out = document.querySelector('.bounce_out');
const flip = document.querySelector('.flip_');
const zoom_out = document.querySelector('.zoom_out');
const zoom_in = document.querySelector('.zoom_in');

move_up.addEventListener("click", ()=>{
      img.classList.toggle('move-up');
});
move_down.addEventListener("click", ()=>{
    img.classList.toggle('move-down');
});
move_right.addEventListener("click", ()=>{
    img.classList.toggle('move-right');
});
move_left.addEventListener("click", ()=>{
    img.classList.toggle('move-left');
});


beat.addEventListener("click", ()=>{
    img.classList.toggle('beat');
});
bounce.addEventListener("click", ()=>{
  img.classList.toggle('bounce');
});
fade_in.addEventListener("click", ()=>{
  img.classList.toggle('fade-in');
});
fade_out.addEventListener("click", ()=>{
  img.classList.toggle('fade-out');
});


rotate_up.addEventListener("click", ()=>{
    img.classList.toggle('rotate-up');
});
rotate_right.addEventListener("click", ()=>{
  img.classList.toggle('rotate-right');
});
rotate_down.addEventListener("click", ()=>{
  img.classList.toggle('rotate-down');
});
rotate_left.addEventListener("click", ()=>{
  img.classList.toggle('rotate-left');
});


rubber_band.addEventListener("click", ()=>{
    img.classList.toggle('rubber-band');
});
surprise.addEventListener("click", ()=>{
  img.classList.toggle('surprise');
});
shake.addEventListener("click", ()=>{
  img.classList.toggle('shake');
});
wobble.addEventListener("click", ()=>{
  img.classList.toggle('wobble');
});
jelly.addEventListener("click", ()=>{
    img.classList.toggle('jelly');
});
pulse.addEventListener("click", ()=>{
  img.classList.toggle('pulse');
});


hinge.addEventListener("click", ()=>{
    img.classList.toggle('hinge');
});
roll_in.addEventListener("click", ()=>{
  img.classList.toggle('roll-in');
});
roll_out.addEventListener("click", ()=>{
  img.classList.toggle('roll-out');
});
jackInTheBox.addEventListener("click", ()=>{
  img.classList.toggle('jackInTheBox');
});
shake_x.addEventListener("click", ()=>{
    img.classList.toggle('shake-x');
});
shake_y.addEventListener("click", ()=>{
  img.classList.toggle('shake-y');
});
swing.addEventListener("click", ()=>{
    img.classList.toggle('swing');
});
bounce_in.addEventListener("click", ()=>{
  img.classList.toggle('bounce-in');
});
bounce_out.addEventListener("click", ()=>{
  img.classList.toggle('bounce-out');
});
flip.addEventListener("click", ()=>{
  img.classList.toggle('flip');
});
zoom_out.addEventListener("click", ()=>{
    img.classList.toggle('zom-out');
});
zoom_in.addEventListener("click", ()=>{
  img.classList.toggle('zom-in');
});

function showNav(){
  document.querySelector('.nav').style.display = 'block';
}