var firebaseConfig = {
      apiKey: "AIzaSyCN85Gi6KJp-MCzsQykaHzy5dRksfOKw6c",
      authDomain: "minter-999df.firebaseapp.com",
      databaseURL: "https://minter-999df-default-rtdb.firebaseio.com",
      projectId: "minter-999df",
      storageBucket: "minter-999df.appspot.com",
      messagingSenderId: "115553905929",
      appId: "1:115553905929:web:e73a01f83fe10acd1677d8"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
 function AddRoom() 
  { 
        room_name = document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
          localStorage.setItem("room_name", room_name);
           window.location = "minter_page.html"; 
        }
function getData()
 { 
       firebase.database().ref("/").on('value', 
       function(snapshot) 
       {
              document.getElementById("output").innerHTML = "";
               snapshot.forEach(function(childSnapshot)
                { 
                      childKey = childSnapshot.key;
                       Room_names = childKey;
                        console.log("Room Name - " + Room_names);
                         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                          document.getElementById("output").innerHTML += row;
                     });
                     });
                     } 
                     getData();
function redirectToRoomName(name) 
{ 
      console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "minter_page.html";
   }
   
   function logout()
    { 
          localStorage.removeItem("user_name");
           localStorage.removeItem("room_name");
            window.location = "index.html";
         }