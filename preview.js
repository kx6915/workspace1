const themeButton = document.querySelector("#theme");
themeButton.addEventListener("click", () => {
  document.documentElement.toggleAttribute("data-dark");
});

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach(
      (entry) => entry.isIntersecting && entry.target.classList.add("visible"),
    ),
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));

window.addEventListener(
  "scroll",
  () =>
    document
      .querySelector(".nav")
      .classList.toggle("scrolled", window.scrollY > 40),
  { passive: true },
);
