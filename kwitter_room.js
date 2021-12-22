const firebaseConfig = 
{
    apiKey: "AIzaSyCn3dMc6voY0p1OeUJK47a0QrRhfMP2rlk",
    authDomain: "let-s-chat-bd183.firebaseapp.com",
    databaseURL: "https://let-s-chat-bd183-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-bd183",
    storageBucket: "let-s-chat-bd183.appspot.com",
    messagingSenderId: "704804845798",
    appId: "1:704804845798:web:21d5e1b6257cce1d022327"
};

firebase.initializeApp(firebaseConfig);

user_name =localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',

function(snapshot) {document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}