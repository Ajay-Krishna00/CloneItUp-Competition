//Loading Button
const buttons = document.querySelectorAll('.loadingBtn');// Get all the buttons with the class 'loadingBtn'
buttons.forEach(button => {
  button.addEventListener('click', function() {
    button.classList.add('loading');
    setTimeout(function() {
      button.classList.remove('loading');
    }, 1500);
  });
});

//Sticky Header
const header = document.querySelector("header");
const sticky = header.offsetTop;
function makeSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  }
  else {
    header.classList.remove("sticky");
  }
};

window.onscroll = () => {
  makeSticky();
};

//Animations
const scrollElements = document.querySelectorAll(".js-scroll");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
    else {
      entry.target.classList.remove("animate");
    }
  })
});
scrollElements.forEach((el) => observer.observe(el));