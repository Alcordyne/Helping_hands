import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

      import {
        getAuth,
        GoogleAuthProvider,
        signInWithPopup,
        signOut,
        onAuthStateChanged,
      } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

      const firebaseConfig = {
        apiKey: "AIzaSyCMoJgx0q7dHhP4JXyCGGrUM30C0XIjHOU",
        authDomain: "helping-hands-294dd.firebaseapp.com",
        projectId: "helping-hands-294dd",
        storageBucket: "helping-hands-294dd.appspot.com",
        messagingSenderId: "1011622576310",
        appId: "1:1011622576310:web:f71308aeaa2f59c7eca617",
        measurementId: "G-HVKZL5HEHW",
      };

      const app = initializeApp(firebaseConfig);
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      const signInButton = document.getElementById("signInButton");
      const signOutButton = document.getElementById("signOutButton");
      const message = document.getElementById("message");
      const userName = document.getElementById("userName");
      const userEmail = document.getElementById("userEmail");

      signOutButton.style.display = "none";
      message.style.display = "none";

      const userSignIn = async () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      };

      const userSignOut = async () => {
        signOut(auth)
          .then(() => {
            alert("You have signed out.");
          })
          .catch((error) => {});
      };

      onAuthStateChanged(auth, (user) => {
        if (user) {
          signOutButton.style.display = "block";
          signInButton.style.display = "none";
          message.style.display = "block";
          userName.innerHTML = user.displayName;
          userEmail.innerHTML = user.email;
        } else {
          signOutButton.style.display = "none";
          signInButton.style.display = "block";
          message.style.display = "none";
        }
      });

      signInButton.addEventListener("click", userSignIn);
      signOutButton.addEventListener("click", userSignOut);