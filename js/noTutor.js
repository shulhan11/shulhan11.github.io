
const RW = document.querySelectorAll('.menu ul li')
const navv = document.querySelector('nav');


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  for(loop of RW){

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      loop.classList.add('bga')
      navv.classList.add('cl')
      // document.getElementById("navbar").style.top = "0";
    } else {
      loop.classList.remove('bga')
      navv.classList.remove('cl')
      // document.getElementById("navbar").style.top = "-50px";
    }
  }
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click',() =>{
    nav.classList.toggle('slide');
});