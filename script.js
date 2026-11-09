let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#signupForm");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#successMessage").textContent = "";


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;
    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    if (!emailAns) {
        document.querySelector("#emailError").textContent = "incorrect email ";
        isValid= false;
    }

    if (!passwordAns) {
        document.querySelector("#passwordError").textContent = "incorrect password";
        isValid= false;
    }

    if(isValid){
        document.querySelector("#successMessage").textContent = "sucessful";
    }
})