function sendEmail(){Email.send({
    Host : "smtp.gmail.com",
    Username : "kingsvillevisualsgallery@gmail.com",
    Password : "1234Ismaila",
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
