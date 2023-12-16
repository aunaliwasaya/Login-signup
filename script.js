function signup (e){
   e.preventDefault();
    let email=document.querySelector('.useremail').value;
    let password=document.querySelector('.userpassword').value;

    localStorage.setItem("useremail", email);
    localStorage.setItem("userpassword", password);
    window.alert("You have signed up")
}

function login(e) {
    e.preventDefault();
    let userEmail = document.querySelector('.loginemail').value;
    let userPassword = document.querySelector('.loginpassword').value;

    // Retrieve variables
    let storeduseremail = localStorage.getItem("useremail");
    let storeduserpassword = localStorage.getItem("userpassword");

    if (userEmail === storeduseremail && userPassword === storeduserpassword) {
        window.alert("Login Successful! " + storeduseremail);
        window.location.href = "./user.html?username=";
    } else {
        window.alert("Invalid useremail or password. Please try again.");
    }
    
}
