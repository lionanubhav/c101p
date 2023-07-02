const firebaseConfig = {
	apiKey: "AIzaSyCOv64t0RTp5etx2swapJ4A9Uq-ssAlOSg",
	authDomain: "c100-828fd.firebaseapp.com",
	projectId: "c100-828fd",
	storageBucket: "c100-828fd.appspot.com",
	messagingSenderId: "844872913244",
	appId: "1:844872913244:web:75ddf1f08d28b234f8b199",
	measurementId: "G-YJJ2T8L50H"
  };
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME"+ user_name +"!";


function addR	oom()
{
	room_name = document.getElementById("room_name").value;

	firebase.database().ref("/").child(room_name).update({
	purpose : "adding room name"
	});
	
	localStorage.setItemItem("room_name",room_name);

	window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
	  console.log("Room name -" + Room_name);
	  row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#"+ room_name +"</div><hr>";
	  document.getElementById("output").innerHTML += row;	
      //End code
      });});}
getData();

function redirectToRoomName(name);
{
	console.log(Name);

	localStorage.setItem("room_nmae" , room_name);

	window.location = "kwitter_page.html";	
}


