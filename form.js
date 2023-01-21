function validateEmail(e) {
    let field = e.target;
    let fieldValue = field.value;

    if (fieldValue.search("@") == -1) {
        displayErro("Email não é válido", field);
    } else {
        clearErro(field);
    }

    checkEnableSubmit();
}
function validateNoEmpty(e) {
    let field = e.target;
    let fieldValue = field.value;

    if (fieldValue == "") {
        displayErro("campo vazio", field);
        } else{
            clearErro(field);
        }

        checkEnableSubmit();
}

function displayErro(message, field) {
    clearErro(field)
   
    let error = document.createElement("small");
    error.style.color='red';
    error.classList.add("error-message");
    error.textContent = message;
    field.parentElement.appendChild( error );
}
function clearErro(field) {
    let container = field.parentElement;
    let error = container.querySelector(".error-message");
    if (error) {
        container.removeChild(error);
    }
        
    }

    function checkEnableSubmit() {
        let form = document.querySelector(".form");
        let notValidated = form.querySelectorAll(".not-validated");
        let error = form.querySelectorAll(".is-invalid");

        if (error.length == 0 && notValidated.length == 0) {
            enableSubmit();
        } else{
            disableSubmit();

        }
    }

    function checkEnableSubmit() {
        let form = document.querySelector("#form");
        let submit = form.querySelector("[type=submit]");

       

    }

    function disableSubmit() {
        let form = document.querySelector("#form");
        let submit = form.querySelector("[type=submit]");

        submit.disabled = true;
    }

    
    document.querySelectorAll("input.email").forEach(el => el.addEventListener
        ("keyup", validateEmail));
        document.querySelectorAll("input:required").forEach(el => el.addEventListener
            ("keyup", validateNoEmpty));