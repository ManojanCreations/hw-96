const firebaseConfig = {
    apiKey: "AIzaSyCn3dMc6voY0p1OeUJK47a0QrRhfMP2rlk",
    authDomain: "let-s-chat-bd183.firebaseapp.com",
    databaseURL: "https://let-s-chat-bd183-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-bd183",
    storageBucket: "let-s-chat-bd183.appspot.com",
    messagingSenderId: "704804845798",
    appId: "1:704804845798:web:21d5e1b6257cce1d022327"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";

    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

