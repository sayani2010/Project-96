//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyACe1fSOj9fyZQRx8oebaylqzapLrd_Isw",
    authDomain: "kwitter-b1f52.firebaseapp.com",
    databaseURL: "https://kwitter-b1f52-default-rtdb.firebaseio.com",
    projectId: "kwitter-b1f52",
    storageBucket: "kwitter-b1f52.appspot.com",
    messagingSenderId: "690994082640",
    appId: "1:690994082640:web:8ccd25db1fc7f9b6723255"
  };
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send() {
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
name:user_name,
like:0,
message:msg

     });
     document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

