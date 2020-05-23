const navbar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

function getActiveElem() {
  maxSection = sections[0];
  minVal = 1000000;
  for (item of sections) {
    let bounding = item.getBoundingClientRect();
    if ((bounding.top > -300) & (bounding.top < minVal)) {
      minVal = bounding.top;
      maxSection = item;
    }
  }
  return maxSection;
}

function addSections() {
  for (let item of sections) {
    let section = document.createElement("li");
    section.className = "menu__link";
    section.dataset.nav = item.id;
    section.innerText = item.dataset.nav;
    navbar.appendChild(section);
  }
}

function setActive() {
  window.addEventListener("scroll", function (event) {
    let section = getActiveElem();
    section.classList.add("your-active-class");
    for (let item of sections) {
      if (
        (item.id != section.id) &
        item.classList.contains("your-active-class")
      ) {
        item.classList.remove("your-active-class");
      }
    }

    const active = document.querySelector('li[data-nav="' + section.id + '"]');
    active.classList.add("active__link");

    const headers = document.querySelectorAll(".menu__link");
    for (let item of headers) {
      console.log(item);
      if (
        (item.dataset.nav != active.dataset.nav) &
        item.classList.contains("active__link")
      ) {
        item.classList.remove("active__link");
      }
    }
  });
}

function scrollToClick() {
  navbar.addEventListener("click", function (event) {
    const clicked = document.querySelector("#" + event.target.dataset.nav);
    clicked.scrollIntoView();
  });
}

addSections();

scrollToClick();

setActive();

//Collapse Section 3 by Clicking

document.querySelector(".collapse").addEventListener("click", function () {
  document.querySelector(".colsec").classList.toggle("container-slide");
});

//Slide

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

//Top Button
var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
