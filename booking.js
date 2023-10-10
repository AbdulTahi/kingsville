function sendEmail(){Email.send({
  secureToken: "3956a406-03ab-42fd-a20e-f6191021a9bb",
    To : 'kingsvillevisualsgallery@gmail.com',
    From : document.getElementById("Email").value,
    Subject : "New Request",
    Body : "Name: " + document.getElementById("Fname").value + " " + document.getElementById("Lname").value
    +"<br> Email: " + document.getElementById("Email").value
    +"<br> Phone no: " + document.getElementById("Phone").value
    +"<br> Request: " + document.getElementById("message").value
}).then(
  message => alert("Message Sent")
);}