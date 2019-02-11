// Initialize Firebase
 
  var config = {
    apiKey: "AIzaSyC-bvrk1HJ3OsBXMn-Xp6jda5CiWIHkCCE",
    authDomain: "lovelog-code.firebaseapp.com",
    databaseURL: "https://lovelog-code.firebaseio.com",
    projectId: "lovelog-code",
    storageBucket: "lovelog-code.appspot.com",
    messagingSenderId: "952561236834"
  };
  firebase.initializeApp(config);



  var LeadRef = firebase.database().ref('Leads');


//Ref form

document.getElementById('formLead').addEventListener('submit', enviaForm);

function enviaForm(e){
	e.preventDefault();
	
	var nome = obterDados('nome');
	var email = obterDados('email');

	salvarLead(email, nome);
}

//Obter dados

function obterDados(id){
	return document.getElementById(id).value;

}

//Persistir no Firebase

function salvarLead(email, nome){

	var newLeadRef = LeadRef.push();
	newLeadRef.set({

		nome: nome,
		email: email,
	});

}