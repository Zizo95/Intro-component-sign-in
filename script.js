const button = document.querySelector(".claim");
const inputName = document.querySelector(".first-name");
const labelName = document.querySelector(".name");
const inputSurname = document.querySelector(".lastname");
const labelSurname = document.querySelector(".last");
const inputEmail = document.querySelector(".email");
const labelEmail = document.querySelector(".labeEmail");
const inputPassword = document.querySelector(".password");
const labelPassword = document.querySelector(".labelPassword");
let nothing = "";


function validate (){
    if (inputName === nothing){
        labelName.style.display = "inline"
        };
        if (inputSurname === nothing){
            labelSurname.style.display = "block"
            };
            if (inputEmail === nothing){
                labelEmail.style.display = "block"
                };
                if (inputPassword === nothing){
                    labelPassword.style.display = "block"
                    };
                    }
button.addEventListener("click", validate() )
 