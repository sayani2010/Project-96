//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyACe1fSOj9fyZQRx8oebaylqzapLrd_Isw",
    authDomain: "kwitter-b1f52.firebaseapp.com",
    databaseURL: "https://kwitter-b1f52-default-rtdb.firebaseio.com",
    projectId: "kwitter-b1f52",
    storageBucket: "kwitter-b1f52.appspot.com",
    messagingSenderId: "690994082640",
    appId: "1:690994082640:web:8ccd25db1fc7f9b6723255"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML =" Welcome " + user_name +"!";
  function add_room() {
        room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose :"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";

}
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
   
    console.log("Room Name -" + Room_names);
    row = "<div class = 'room_name ' id= "+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row;
   
    });
})
;}
getData();

function redirectToRoomName(name) 
{
    console.log(name);
    localStorage.setItem("room_name " , name);
    window.location ="kwitter_page.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}