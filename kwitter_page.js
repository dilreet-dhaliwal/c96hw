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
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}