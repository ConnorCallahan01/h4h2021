

var firstButton = document.getElementbyId("firstButton");
var abstract = document.getElementbyId("abstract");

function submitClick() {
  window.alert("Working");
  var firebaseRef = firebase.database().ref();

  firebaseRef.child("Text").set("someValue");

}
