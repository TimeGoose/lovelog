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
  var contactRef = firebase.database().ref('contact');
  var leadRef = firebase.database().ref('leads');

   //FORMS DE CONTATO
  document.getElementById('formContato').addEventListener('submit', submitFormContact);

  function submitFormContact(e){
    e.preventDefault();

    //get values
    let email = getInputVal('email');
    let name = getInputVal('name');
    let ip = $("#ip").text();
    let date = completeDate();
    let car = getInputVal('car');
    let driver = getInputVal('driver');
    let antt = getInputVal('antt');
    let message = getInputVal('message');

    if (document.getElementById('aceitaLead').checked === true) {
    saveLead(email, name, ip, date, car, driver, antt);    
    console.log('oi');

    }
    saveContact(email, name, ip, date, car, driver, antt, message);
    console.log('oi');


    alert("Obrigado pelo contato!");
  }

  //func para pegar os valores
  function getInputVal(id){
      return document.getElementById(id).value;
  }

  //save msg to firebase
  function saveLead(email, name, ip, date, car, driver, antt){
      var newLeadRef = leadRef.push()

      newLeadRef.set({
          email: email,
          name: name,
          ip: ip,
          date: date,
          car: car,
          driver: driver,
          antt: antt
      });
  } 

  function saveContact(email, name, ip, date, car, driver, antt, message){
    var newContactRef = contactRef.push()

    newContactRef.set({
        email: email,
        name: name,
        ip: ip,
        date: date,
        car: car,
        driver: driver,
        antt: antt,
        message: message
    });
} 

  function completeDate () {
    now = new Date();
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
    hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
    minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
    second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  }