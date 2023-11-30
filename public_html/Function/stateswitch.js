document.addEventListener('DOMContentLoaded', function () {
    const signInButton = document.getElementById('signinButton');
    const MyAccount = document.getElementById('accountButton');

    // Check user login status using a session cookie or other authentication mechanism
    const userLoggedIn = checkUserLoginStatus(); // Implement this function

    if (userLoggedIn) {
        signinButton.style.display = 'none';
        accountButton.style.display = 'block';

        accountButton.addEventListener('click', () => {
            // Redirect to the user account page
            window.location.href = 'myAccount.html';
        });
    } else {
        signinButton.style.display = 'block';
        accountButton.style.display = 'none';

        signinButton.addEventListener('click', () => {
            // Redirect to the login page
            window.location.href = '.html';
        });
    }
});

function checkUserLoginStatus() {
    // Implement logic to check the user's login status, e.g., by checking a session cookie
    // Return true if the user is logged in, false otherwise
    // You may need to adjust this based on your authentication mechanism
    return false;
}
