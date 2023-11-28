// Search javascript

var pages =[
  { page: "Student Homelessness Certification Form", content: "The Student Homelessness Certification Form is used by multiple agencies to affirm that a homeless youths who are under 25 years of age and can verify their status to obtain a fee waiver for a High School Equivalency Test and/or the California High School Proficiency Examination (CHSPE). "}
  { page: "Disability Certification Form (SSF)", content: "The Disability Certification is used to affirm that an individual is disabled and is used only for the purpose of qualifying for housing assistance under a program of the U.S. Department of Housing and Urban Development(HUD). The individual could either include a copu of the client's SSDI or VA Disability income verification or by having a licensed professional affirm that the client has a disability as defined by the HEARTH Act of 2009."}
  { page: "Birth Certificate for Homelessness", content: "Based on the Section 103577 of the Health and Safety Code, individuals are provided with the opportunity for a fee-exempt copy of a birth record may be issued to an eligible homeless person, or homeless child or youth."}
  { page: "P.O. Box Form (Form 1093)", content: "The P.O. Box Form or Form 1093 are provided the opportunity for individuals who are in need of a P.O. Box (Post Office Box). This form is used for only United States Postal Services (USPS)."}
  
]


// Set up Fuse.js
var fuseOptions = {
    keys: ["page", "content"],
    threshold: 0.3,
};

var fuse = new Fuse(pages, fuseOptions);

// Function to search
function performSearch() {
    var searchTerm = document.getElementById("searchInput").value;
    var resultsList = document.getElementById("results");

    // Perform the search
    var results = fuse.search(searchTerm);

    // Clear previous results
    resultsList.innerHTML = "";

    // Display the new results
    results.forEach(function (result) {
        var listItem = document.createElement("li");
        listItem.textContent = result.item.title + " - " + result.item.content;
        resultsList.appendChild(listItem);
    });
}
