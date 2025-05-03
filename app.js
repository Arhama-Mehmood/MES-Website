var firebaseConfig = {
    apiKey: "AIzaSyB1cOLLG9cBE1p8c_axLsu13eCrA2VphN8",
    authDomain: "mes-website-41bbe.firebaseapp.com",
    databaseURL: "https://mes-website-41bbe-default-rtdb.firebaseio.com",
    projectId: "mes-website-41bbe",
    storageBucket: "mes-website-41bbe.firebasestorage.app",
    messagingSenderId: "885745306930",
    appId: "1:885745306930:web:4213c77dff877e4b649b2b"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

function submitData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var message = document.getElementById("message").value;

    var obj = {
        name: name,
        email: email,
        contact: contact,
        message: message,
    };

    firebase.database().ref("messages").push(obj);

    alert("Message submitted successfully!");
    document.getElementById("contactForm").reset();
}