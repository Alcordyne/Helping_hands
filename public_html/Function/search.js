// Search javascript

var pages = [
  { title: "Student Homelessness Certification Form", content: "Used by multiple agencies to affirm that a homeless youths who are under 25 years of age and can verify their status to obtain a fee waiver for a High School Equivalency Test"},
  { title: "Disability Certification Form (SSF)", content: "Used to affirm that an individual is disabled and is used only for the purpose of qualifying for housing assistance "},
  { title: "Birth Certificate for Homelessness", content: "Individuals are provided with the opportunity for a fee-exempt copy of a birth record"},
  { title: "P.O. Box Form (Form 1093)", content: "Provide the opportunity for individuals who are in need of a P.O. Box (Post Office Box)."},
  { title: "Guides", content: "Frequently asked questions and guides"},
  { title: "Job Assistance", content: "Resume support and the best practices to get a job."},
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
