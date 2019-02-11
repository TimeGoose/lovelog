// Initialize Firebase
 
 var LeadRef = firebase.database();


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