// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    
}



