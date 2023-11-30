document.addEventListener("DOMContentLoaded", function () {
    let tabs = document.querySelectorAll(".tabs .tab");
    let tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove 'active' class from all tabs
            tabs.forEach((t) => {
                t.classList.remove("active");
            });

            // Add 'active' class to the clicked tab
            tab.classList.add("active");

            // Hide all tab contents
            tabContents.forEach((content) => {
                content.classList.remove("active");
            });

            // Show the clicked tab content
            let tabName = tab.getAttribute("onclick").split("'")[1];
            document.getElementById(tabName).classList.add("active");
        });
    });
});

// Initially set the first tab as active
document.querySelector(".tabs .tab").click();
