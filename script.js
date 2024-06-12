document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".claim");
    const inputName = document.querySelector(".first-name");
    const labelName = document.querySelector(".name");
    const inputSurname = document.querySelector(".last");
    const labelSurname = document.querySelector(".lastName");
    const inputEmail = document.querySelector(".email");
    const labelEmail = document.querySelector(".labelEmail");
    const inputPassword = document.querySelector(".password");
    const labelPassword = document.querySelector(".labelPassword");



    function validate() {
        let nothing = "";

        if (inputName.value === nothing) {
            labelName.style.visibility = "visible";
            
        } 
        if (inputSurname.value === nothing) {
            labelSurname.style.visibility = "visible";
        } 
        if (inputEmail.value === nothing || !validateEmail(inputEmail.value)) {
            labelEmail.style.visibility = "visible";
        } 
        if (inputPassword.value === nothing) {
            labelPassword.style.visibility = "visible";
        } 
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    button.addEventListener("click", validate);
});
