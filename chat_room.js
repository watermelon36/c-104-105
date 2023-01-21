var firebaseConfig = {
    apiKey: "AIzaSyAodNOBLq3Bb0DFId7FVEpHggBylHrUFe0",
    authDomain: "social-web-51db4.firebaseapp.com",
    databaseURL: "https://social-web-51db4-default-rtdb.firebaseio.com/",
    projectId: "social-web-51db4",
    storageBucket: "social-web-51db4.appspot.com",
    messagingSenderId: "363199600064",
    appId: "1:363199600064:web:5f44a2dbeaa59d2d2be425",
    measurementId: "G-ZQW05BWRGP"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name +"!";
 function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code

 row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)>#"+ Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

redirectToRoomName(name);{
localStorage.setItem("room_name", name);
window.location="chat_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
  window.location="index.html";
}



