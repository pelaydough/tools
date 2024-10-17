const dropdownButton = document.getElementById("dropdownButton");
const dropdownCloseButton = document.getElementById("dropdownCloseButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const backdrop = document.getElementById("backdrop");
const techIcons = document.querySelectorAll(".tech-icon");

dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
  dropdownCloseButton.classList.toggle("hidden");
  dropdownButton.classList.add("hidden");
  backdrop.classList.toggle("hidden");
});

addEventListener("click", (e) => {
  if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("hidden");

    if (dropdownButton.classList.contains("hidden")) {
      dropdownButton.classList.remove("hidden");
      dropdownCloseButton.classList.toggle("hidden");
      backdrop.classList.toggle("hidden");
    }
  }
});

techIcons.forEach((icon) => {
  const tooltip = icon.previousElementSibling;

  icon.addEventListener("mouseover", () => {
    tooltip.classList.add("opacity-100");
  });

  icon.addEventListener("mouseout", () => {
    tooltip.classList.remove("opacity-100");
  });
});
