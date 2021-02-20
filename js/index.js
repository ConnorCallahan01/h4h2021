

var firstButton = document.getElementbyId("firstButton");
var abstract = document.getElementbyId("abstract");

function submitClick() {
  var ref = firebase.database().ref();
    ref.on("value", function(snapshot){
    output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
  });
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
