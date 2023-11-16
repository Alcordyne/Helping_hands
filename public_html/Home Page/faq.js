document.addEventListener("DOMContentLoaded", function () {
    // Get all the elements
    var toggleBtns = document.querySelectorAll(".toggle-btn");

    // Add click event listeners to each toggle button
    toggleBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            // parent element
            var faqItem = this.parentNode;
            faqItem.classList.toggle("active");

            // display the answer
            var answer = faqItem.querySelector(".answer");
            answer.style.display = answer.style.display === "none" ? "block" : "none";
        });
    });
});


