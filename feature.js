const header = document.getElementById("top");
const nav = document.querySelector("nav");
const navOptions = {
  rootMargin: "-80px 0px 0px 0px",
};
const navScroll = (entries) => {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add("navigation");
  } else {
    nav.classList.remove("navigation");
  }
};
const navObserver = new IntersectionObserver(navScroll, navOptions);
navObserver.observe(header);

const menu = document.getElementById("1");
const hide = document.getElementById("2");
const exit = document.getElementById("3");

menu.addEventListener("click", function () {
  hide.style.display = "block";
});

exit.addEventListener("click", function () {
  hide.style.display = "none";
});

const back = document.querySelectorAll(".back");
back.forEach((links) => {
  links.addEventListener("click", function () {
    const mq = window.matchMedia("(max-width: 899px)");
    if (mq.matches) {
      hide.style.display = "none";
    }
  });
});

let cont = "Contact me";
let text = "";
for (let x of cont) {
  text += x + "<br>";
}
document.getElementById("cont").innerHTML = text;

let scrol = document.getElementById("scroll");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    scrol.style.display = "block";
  } else {
    scrol.style.display = "none";
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

function showPage(page) {
  document.querySelector(`#${page}`).style.display = "block";
}

document.querySelectorAll(".display_page").forEach((btnn) => {
  btnn.onclick = function () {
    showPage(this.dataset.page);
    scrollFunction();

    document.querySelectorAll(".hide_page").forEach((item) => {
      item.style.display = "none";
    });
  };
});

function handleClick() {
  //document.getElementById('btn_resume').style.display = 'inline_flex'

  document.querySelectorAll(".hide_page").forEach((item) => {
    if (item.style.display === "none") {
      item.style.display = "block";

      let resume = document.getElementById("btn_resume");
      if (resume.style.display === "block") {
        resume.style.display = "inline-flex";
      }
    }
  });
  document.querySelectorAll(".display_section").forEach((disp) => {
    disp.style.display = "none";
  });
}

function printMe() {
  print();
}

const form = document.querySelector("form");
const post = async (e) => {
  e.preventDefault();

  await fetch(form.action, {
    method: "POST",
    body: new FormData(document.querySelector("form")),
  })
    .then((response) => response.json())
    .then((html) => {
      document.querySelector(".body_alert").style.display = "block";
      let okayBtn = document.querySelector(".okay_btn");
      okayBtn.addEventListener("click", () => {
        window.location.replace("index.html");
      });
    });
};
form.addEventListener("submit", post);
