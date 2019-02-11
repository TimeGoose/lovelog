// Initialize Firebase
 // Initialize Firebase
  
  var config = {
    apiKey: "AIzaSyCgxhj1tTQ4HKGpsSmZ-umH-IKTRKEQx8M",
    authDomain: "repoteste-bc0d0.firebaseapp.com",
    databaseURL: "https://repoteste-bc0d0.firebaseio.com",
    projectId: "repoteste-bc0d0",
    storageBucket: "repoteste-bc0d0.appspot.com",
    messagingSenderId: "1086930849101"
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