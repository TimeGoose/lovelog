var config = {
          apiKey: "AIzaSyC-bvrk1HJ3OsBXMn-Xp6jda5CiWIHkCCE",
          authDomain: "lovelog-code.firebaseapp.com",
          databaseURL: "https://lovelog-code.firebaseio.com",
          projectId: "lovelog-code",
          storageBucket: "lovelog-code.appspot.com",
          messagingSenderId: "952561236834"
        };
        
      firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var nome = getInputVal('nome');
  var email = getInputVal('email');
  

  // Save message
  saveMessage(nome, email);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('formLead').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(nome, email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nome: nome,
    email:email,
  });
}