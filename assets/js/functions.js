// document.querySelector(".toggleNav").addEventListener("click", function () {
//   const menu = document.querySelector(".menu");
//   const button = this;

//   menu.classList.toggle("expand");
//   button.classList.toggle("active");
// });

// Select the elements
var toggleNavButtons = document.querySelectorAll(".toggleNav");
var menuWrap = document.querySelector(".menuWrap");
var button = document.querySelector(".toggleNav"); // Assuming the button is also the one being toggled

// Add event listeners to each toggleNav button
toggleNavButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action of the event
    event.stopPropagation(); // Stop the event from propagating (bubbling) up the DOM

    // Toggle the 'nav-expanded' class on the menuWrap element
    menuWrap.classList.toggle("nav-expanded");

    // Toggle the 'active' class on the button
    button.classList.toggle("active");
  });
});
