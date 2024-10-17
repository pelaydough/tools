const dropdownButton = document.getElementById("dropdownButton");
const dropdownCloseButton = document.getElementById("dropdownCloseButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const backdrop = document.getElementById("backdrop");

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
