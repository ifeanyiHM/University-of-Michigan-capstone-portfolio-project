
const header = document.getElementById("top");
const nav = document.querySelector("nav");
const navOptions = {
  rootMargin: "-80px 0px 0px 0px"
};
const navScroll = (entries) => {
  const entry= entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add("navigation");
  } else {
    nav.classList.remove("navigation");
  }
}
const navObserver = new IntersectionObserver(navScroll, navOptions);
navObserver.observe(header);


const menu = document.getElementById('1');
const hide = document.getElementById('2');
const exit = document.getElementById('3');

menu.addEventListener('click', function() {
    hide.style.display='block';
});

exit.addEventListener('click', function(){
    hide.style.display='none';
});


const back = document.querySelectorAll('.back');
back.forEach((links) => {
  links.addEventListener('click', function () {
    const mq = window.matchMedia('(max-width: 899px)');
    if (mq.matches) {
      hide.style.display = 'none';
    }
  })
});



let cont = 'Contact me';
let text = "";
for (let x of cont) {
  text += x + "<br>";
}
document.getElementById('cont').innerHTML = text;


let scrol = document.getElementById('scroll');
window.onscroll = function(){
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    scrol.style.display = 'block';
  } else {
    scrol.style.display = 'none';
  }
}


function reveal() {
  var reveals = document.getElementById("tools");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
