const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
  document.querySelector(".header-nav").classList.toggle("show-small");
});
