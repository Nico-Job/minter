const firebaseConfig = {
    apiKey: "AIzaSyCN85Gi6KJp-MCzsQykaHzy5dRksfOKw6c",
    authDomain: "minter-999df.firebaseapp.com",
    projectId: "minter-999df",
    storageBucket: "minter-999df.appspot.com",
    messagingSenderId: "115553905929",
    appId: "1:115553905929:web:e73a01f83fe10acd1677d8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
