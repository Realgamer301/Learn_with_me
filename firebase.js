
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

  import { getAuth, csignInWithEmailAndPasswordPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAjgeDsmIasVUv9nq14TWGU_CJhUtamJWM",
    authDomain: "sharks-community.firebaseapp.com",
    projectId: "sharks-community",
    storageBucket: "sharks-community.appspot.com",
    messagingSenderId: "357673060489",
    appId: "1:357673060489:web:ef28d7f059d5679388de58"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const submit = document.getElementById('submit');
  submit.addEventListener("click", function (event) {
    event.preventDefault(),
    alert(5)
  })
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href = "index.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
