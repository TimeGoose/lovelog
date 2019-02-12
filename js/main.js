// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDrp9ANTbTmOCk7NcLXAnJdErPw7JIR2II",
    authDomain: "lovelogform.firebaseapp.com",
    databaseURL: "https://lovelogform.firebaseio.com",
    projectId: "lovelogform",
    storageBucket: "lovelogform.appspot.com",
    messagingSenderId: "690036997366"
  };
  firebase.initializeApp(config);

  //reference msg collect
  var messagesRef = firebase.database().ref('messages');


  //form submit
  document.getElementById('formAssinatura').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    //get values
    let name = getInputVal('name');
    let email = getInputVal('email');
    let car = getInputVal('car');
    let ip = $("#ip").text();

    //save message
    saveMessage(name, email, car, ip);
  }

  //func para pegar os valores
  function getInputVal(id){
      return document.getElementById(id).value;
  }

  //save msg to firebase
  function saveMessage(name, email, car){
      var newMessageRef = messagesRef.push()

      newMessageRef.set({
          name: name,
          email: email,
          car: car,
          ip: ip,
      });
  } 