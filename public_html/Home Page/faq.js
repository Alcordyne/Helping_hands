document.addEventListener("DOMContentLoaded", function () {
    // Get all the elements
    var toggleBtns = document.querySelectorAll(".toggle-btn");

    // Add click event listeners to each toggle button
    toggleBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            // parent element
            var faqItem = this.closest(".faq-item"); // Use closest to find the closest ancestor with the class 'faq-item'
            if (faqItem) {
                faqItem.classList.toggle("active");

                // display the answer by toggling a class
                var answer = faqItem.querySelector(".answer");
                if (answer) {
                    answer.classList.toggle("show");
                }
            }
        });
    });
});
