// const button = document.getElementById("signUpBtn");

// button.addEventListener('click', function () {   // event listener for the button click
//   button.classList.add("loading");
//   setTimeout(function () {
//     button.classList.remove("loading");
//   }, 2000);
// });

// Get all the buttons with the class 'loadingBtn'
const buttons = document.querySelectorAll('.loadingBtn');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    button.classList.add('loading');
    setTimeout(function() {
      button.classList.remove('loading');
    }, 1500);
  });
});

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
