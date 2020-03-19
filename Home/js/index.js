var firebaseConfig =
{   
    apiKey: "AIzaSyB-h0fhhciH-F2z9JUp_bbn4QcDzR2zhSo",
    authDomain: "dames-14e44.firebaseapp.com",
    databaseURL: "https://dames-14e44.firebaseio.com",
    projectId: "dames-14e44",
    storageBucket: "dames-14e44.appspot.com",
    messagingSenderId: "593473240019",
    appId: "1:593473240019:web:8a81b758a93a7e08ce8d26",
    measurementId: "G-HP3VF4RGTK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

  $("#btn_login").click(function()
  {
    var email = $("#email").val();
    var password = $("#password").val();

    if(email!="" && password!="")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message: " + errorMessage );
        });
    }
    else
    {
        window.alert("Please fill out all fields!");
    }
  });

  $("#btn_register").click(function()
  {
    var email = $("#email").val();
    var password = $("#password").val();
    var repassword = $("#re_password").val();

    if(email!="" && password!="" && repassword!="")
    {
        if(password == repassword)
        {
          var result = firebase.auth().createUserWithEmailAndPassword(email,password);

          result.catch(function(error)
          {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message: " + errorMessage );
          });
        }
        else
        {
          window.alert("Passwords do not match");
        }
    }
    else
    {
        window.alert("Please fill out all fields!");
    }
  });

  $("#btn_logout").click(function()
  {
    firebase.auth().signOut();
  });