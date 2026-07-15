function validateForm(){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    let message = document.getElementById("message");

    if(name == ""){
        message.innerHTML = "Name is required";
        message.style.color = "red";
        return false;
    }

    if(email == ""){
        message.innerHTML = "Email is required";
        message.style.color = "red";
        return false;
    }

    if(password.length < 6){
        message.innerHTML = "Password must contain at least 6 characters";
        message.style.color = "red";
        return false;
    }

    if(password != confirm){
        message.innerHTML = "Passwords do not match";
        message.style.color = "red";
        return false;
    }

    message.innerHTML = "Registration Successful!";
    message.style.color = "green";

    return false;
}