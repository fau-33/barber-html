document.querySelector("#btn-menu").onclick = (event) => {
  event.preventDefault();
  document.querySelector("nav").classList.add("active");
};

document.querySelector("#btn-close").onclick = (event) => {
  event.preventDefault();
  document.querySelector("nav").classList.remove("active");
};
