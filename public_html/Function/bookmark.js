// Bookmark javascript

document.addEventListener('DOMContentLoaded', function () {
    updateBookmarkButton();
});


// Checks if it is bookmarked and saves if not, removes if already saved
function updateBookmarkButton() {
    const resourceElements = document.querySelectorAll('.jrElement');

    resourceElements.forEach(element => {
        const resourceId = element.getAttribute('job-id');
        const bookmarkBtn = element.querySelector('.bookmarkBtn');
        const isBookmarked = getBookmarkStatus(ID);


    if (isBookmarked) {
        bookmarkBtn.innerHTML = '⭐ Bookmarked';
    } else {
        bookmarkBtn.innerHTML = '★ Bookmark';;
    }
    });
}

function toggleBookmark(ID) {
    const isBookmarked = getBookmarkStatus(ID);
    setBookmarkStatus(ID, !isBookmarked);
    updateBookmarkButton();
}

// Retrieve bookmark status from storage
function getBookmarkStatus(ID) {
    const bookmarks = getBookmarks();
    return bookmarks.includes(ID);
}

function setBookmarkStatus(ID, status) {
    let bookmarks = getBookmarks();

    if (status) {
        bookmarks.push(ID);
    } else {
        bookmarks = bookmarks.filter(id => id !== ID);
    }
    saveBookmarks(bookmarks);
}

function getBookmarks() {
    const storedBookmarks = localStorage.getItem('bookmarks');
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
}

function saveBookmarks(bookmarks) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
