// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Handle Email-Password Sign-up
function handleEmailSignUp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 8) {
    alert('Please enter a password with more than 7 characters.');
    return;
  }
  // Sign up with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    alert('Sign-up with Email-Password successful');
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
  });
}

// Handle Email-Password Sign-in
function handleEmailSignIn() {
  if (firebase.auth().currentUser) {
   firebase.auth().signOut();
 } else {
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   if (email.length < 4) {
     alert('Please enter an email address.');
     return;
   }
   if (password.length < 8) {
     alert('Please enter a password with more than 7 characters.');
     return;
   }
   // Sign in with email and pass.
   firebase.auth().signInWithEmailAndPassword(email, password)
     .then(() => {
       alert('Sign-in with Email-Password successful');
     })
     .catch((error) => {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       if (errorCode === 'auth/wrong-password') {
         alert('Wrong password.');
       } else {
         alert(errorMessage);
       }
       document.getElementById('sign-in-button').disabled = false;
     });
 }
}
