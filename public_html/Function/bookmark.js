// Bookmark javascript

document.addEventListener('DOMContentLoaded', function () {
    updateBookmarkButton();
});


// Checks if it is bookmarked and saves if not, removes if already saved
function updateBookmarkButton() {
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    const isBookmarked = getBookmarkStatus();

    if (isBookmarked) {
        bookmarkBtn.classList.add('bookmarked');
    } else {
        bookmarkBtn.classList.remove('bookmarked');
    }
}

function toggleBookmark() {
    const isBookmarked = getBookmarkStatus();
    setBookmarkStatus(!isBookmarked);
    updateBookmarkButton();
}

// Retrieve bookmark status from local storage
function getBookmarkStatus() {
    return JSON.parse(localStorage.getItem('bookmarkStatus')) || false;
}

// Save bookmark status to local storage
function setBookmarkStatus(status) {
    localStorage.setItem('bookmarkStatus', JSON.stringify(status));
}
