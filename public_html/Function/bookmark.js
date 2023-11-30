// Bookmark javascript

document.addEventListener('DOMContentLoaded', function () {
    updateBookmarkButton();
});


// Checks if it is bookmarked and saves if not, removes if already saved
function updateBookmarkButton() {
    const resourceElements = document.querySelectorAll('.jrElement');

    resourceElements.forEach(element => {
        const resourceId = element.getAttribute('data-id');
        const bookmarkBtn = element.querySelector('.bookmarkBtn');
        const isBookmarked = getBookmarkStatus(resourceId);


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
function getBookmarkStatus(resourceId) {
    const bookmarks = getBookmarks();
    return bookmarks.includes(resourceId);
}

function setBookmarkStatus(resourceId, status) {
    let bookmarks = getBookmarks();

    if (status) {
        bookmarks.push(ID);
    } else {
        bookmarks = bookmarks.filter(id => id !== resourceId);
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
