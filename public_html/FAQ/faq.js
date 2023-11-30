class FAQItem {
    constructor(element) {
      this.element = element;
    }

    toggle() {
      this.element.classList.toggle("active");
    }
  }

  // Decorator class to add answer toggling functionality
  class AnswerToggleDecorator extends FAQItem {
    constructor(element) {
      super(element);
    }

    toggleAnswer() {
      const answer = this.element.querySelector('.answer');
      answer.classList.toggle('hidden');
    }
  }

  // Initialize FAQ items
  document.addEventListener("DOMContentLoaded", function () {
    var faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {
      const faqItem = new FAQItem(item);

      // Add AnswerToggleDecorator to each FAQ item
      const decoratedFAQItem = new AnswerToggleDecorator(item);

      // Add click event listener to each toggle button
      item.querySelector(".toggle-btn").addEventListener("click", function () {
        faqItem.toggle();
        decoratedFAQItem.toggleAnswer();
      });
    });
  });
