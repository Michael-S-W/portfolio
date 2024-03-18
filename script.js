let pages = document.querySelector(".pages");
let inputs = document.querySelectorAll(".portfolio");

// console.log(inputs);

inputs.forEach((e, i) => {
  //   console.log(e, i);
  e.addEventListener("change", () => {
    let y = i * (100 / 3);
    pages.style.transform = `translateX(-${y}%)`;
  });
  //   e.checked ? (pages.style.transform = `translateX(${i * -20}%)`) : "";
});
