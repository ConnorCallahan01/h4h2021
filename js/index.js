
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig =
{
  apiKey: "AIzaSyA_YQT_5NeIamIsf9pO9caKYX2n9ROve70",
  authDomain: "peer2p-d953f.firebaseapp.com",
  projectId: "peer2p-d953f",
  storageBucket: "peer2p-d953f.appspot.com",
  messagingSenderId: "540439183924",
  appId: "1:540439183924:web:a31313c5596d9756460061",
  measurementId: "G-CJ1YBF2SF1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var firstButton = document.getElementbyId("firstButton");
var abstract = document.getElementbyId("abstract");

function submitClick() {
  window.alert("Still working");
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("Text").set("someValue");

}
var project = document.getElementbyId("project");

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
