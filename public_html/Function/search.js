// Search javascript

var pages = [
  { title: "Student Homelessness Certification Form", content: "Fee waiver for a High School Equivalency Test", link: "../FAQ/HomelessForm.html" },
  { title: "Disability Certification Form (SSF)", content: "Used only for the purpose of qualifying for housing assistance ", link: "../FAQ/DisForm.html" },
  { title: "Birth Certificate for Homelessness", content: "Fee-exempt copy of a birth record", link: "../FAQ/BirthForm.html" },
  { title: "P.O. Box Form (Form 1093)", content: "For individuals who are in need of a P.O. Box (Post Office Box).", link: "../FAQ/POForm.html" },
  { title: "Guides", content: "FAQ / Frequently asked questions and guides", link: "../FAQ/FAQGuides.html" },
  { title: "Job Assistance", content: "Resume support and the best practices to get a job.", link: "../Job/jobAssistance.html" },
];

// Set up Fuse.js
var fuseOptions = {
    keys: ["title", "content"],
    threshold: 0.5,
};

var fuse = new Fuse(pages, fuseOptions);

// Function to perform search
function performSearch() {
    var searchTerm = document.getElementById("searchInput").value;
    var resultsList = document.getElementById("results");

    // Perform the search
    var results = fuse.search(searchTerm);

    // Clear previous results
    resultsList.innerHTML = "";

    // Display the result box
    resultsList.style.display = "block";

    // Display the new results or "No results found" message
    if (results.length === 0) {
        // Display a message for no results
        var noResultsMessage = document.createElement("li");
        noResultsMessage.textContent = "No results found.";
        resultsList.appendChild(noResultsMessage);
    } else {
        // Display the new results
        results.forEach(function (result) {
            var listItem = document.createElement("li");
            var link = document.createElement("a");
            link.href = result.item.link;
            link.textContent = result.item.title + " - " + result.item.content;
            listItem.appendChild(link);
            resultsList.appendChild(listItem);
        });
    }
}

