$(".toggleNav").on("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  $("body").toggleClass("nav-expanded");
});
