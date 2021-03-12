// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBuYgDcBynldjv3TJJC9MEB5HkUz7qU_Bk",
    authDomain: "form-ced49.firebaseapp.com",
    projectId: "form-ced49",
    storageBucket: "form-ced49.appspot.com",
    messagingSenderId: "353292959730",
    appId: "1:353292959730:web:0a286f76a1075a2aa8756b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
		window.open("signout.html");
			
		}else{
			window.open("form.html");
		
		}
		
		
		
	});
	

		
		
	
