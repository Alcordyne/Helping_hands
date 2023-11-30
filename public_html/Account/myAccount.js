document.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll(".tabs h3");
  let tabContents = document.querySelectorAll(".tab-content div");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Hide all tab contents
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Show the clicked tab content
      tabContents[index].classList.add("active");

      // Remove 'active' class from all tabs
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });

      // Add 'active' class to the clicked tab
      tab.classList.add("active");
    });
  });
});
