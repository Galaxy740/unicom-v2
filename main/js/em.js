function getdata(){
    var namel = document.getElementById("name").value;
    var personEmaill = document.getElementById('sender').value;
    var textl = document.getElementById('text').value;
    sendEmail(namel, personEmaill, textl);
    
}




function sendEmail(name, personEmail, text) {



Email.send({
Host : "mail.unicom-technology.com",
Username : "website",
Password : "I}]+IoUXA$o0",
To : 'office@unicom-technology.com',
From : "website@unicom-technology.com",
Subject : personEmail,
Body : "From:"+ personEmail + "\n" + text

})
}