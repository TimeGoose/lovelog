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
  var leadRef = firebase.database().ref('leads_act');


 //FORMS DE ASSINATURA
  //form submit
  document.getElementById('formAssinatura2').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    //get values
    let email = getInputVal('email');
    let name = getInputVal('name');
    let ip = $("#ip").text();
    let date = completeDate();
    let company = getInputVal('company');

    //save message
    saveLead(email, name, ip, date, company);
    console.log(email, name, ip, company);
    
    alert("");

    window.location.href = "http://lovelog.com.br/transportadorasemfrotacont.html";
    }

  //func para pegar os valores
  function getInputVal(id){
      return document.getElementById(id).value;
  }

  //save msg to firebase
  function saveLead(email, name, ip, date, company){
      var newLeadRef = leadRef.push()

      newLeadRef.set({
          email: email,
          name: name,
          ip: ip,
          date: date,
          company: company,
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