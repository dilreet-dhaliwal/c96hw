const firebaseConfig = {
    apiKey: "AIzaSyAzk8dtFBRjd-L_0126xKXQWfvHYH3N3E8",
    authDomain: "kwitterhw-b5465.firebaseapp.com",
    databaseURL: "https://kwitterhw-b5465-default-rtdb.firebaseio.com",
    projectId: "kwitterhw-b5465",
    storageBucket: "kwitterhw-b5465.appspot.com",
    messagingSenderId: "321847500228",
    appId: "1:321847500228:web:2484300abb9c4bb75a5891",
    measurementId: "G-G38440KVWC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name -"+Room_names);
   row="<div class='room_name'id ="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML +=row;
   //End code
   });});}
getData();
function addRoom(){
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });
   localStorage.setItem("room_name",room_name);
   window.location="kwitter_room.html";
}
function redirectToRoomName(){
   console.log(name);
   localStorage.setItem("room_name",name);
   window.location="kwitter_page.html";
}
function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location.replace("index.html");
}
  
