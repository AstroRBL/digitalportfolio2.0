const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close-ham");
const navList = document.querySelector(".nav ul");

hamburger.addEventListener("click", () => {
  navList.style.display = "block";
  hamburger.style.display = "none";
  close.style.display = "block";
});
close.addEventListener("click", function () {
  navList.style.display = "none";
  hamburger.style.display = "block";
  close.style.display = "none";
});

document.addEventListener("click", function (e) {
  if (
    e.target.tagName === "A" &&
    e.target.getAttribute("href").startsWith("#")
  ) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetId === "home") {
      // Add this condition for the "Home" link
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }
});
