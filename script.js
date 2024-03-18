let pages = document.querySelector(".pages");
let inputs = document.querySelectorAll(".portfolio");

inputs.forEach((e, i) => {
  e.addEventListener("change", () => {
    let y = i * (100 / 3);
    pages.style.transform = `translateX(-${y}%)`;
  });
});
