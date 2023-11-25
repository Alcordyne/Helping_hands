document.addEventListener("DOMContentLoaded", function () {
    // Get all the elements
    var toggleBtns = document.querySelectorAll(".toggle-btn");

    // Add click event listeners to each toggle button
    toggleBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            // parent element
            var faqItem = this.closest(".faq-item");
            faqItem.classList.toggle("active");

            // display the answer by toggling the .show class
            var answer = faqItem.querySelector(".answer");
            answer.classList.toggle("show");
        });
    });
});
