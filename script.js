let allInputs = [...document.querySelectorAll("input")];
console.log(allInputs)
allInputs.forEach(element => element.addEventListener("focus", e => {e.target.classList.remove("never-focussed")}));

let password = ""
let confirmPassword = ""
let passwordInput = document.querySelector("#password");
passwordInput.setCustomValidity(`Please make sure your password adheres to the rules below`)
let confirmPasswordInput = document.querySelector("#confirm-password");

let lengthMessage = document.querySelector("#length-check");
let lowercaseMessage = document.querySelector("#lowercase-check")
let uppercaseMessage = document.querySelector("#uppercase-check");
let numberMessage = document.querySelector("#number-check");
let specialCharacterMessage = document.querySelector("#special-character-check");
let passwordsMatchMessage = document.querySelector("#passwords-match-check");
let lengthCheck = lowercaseCheck = uppercaseCheck = numberCheck = specialCharacterCheck = passwordsMatchCheck = allChecksPassed = false;

function checkPassword(password) {
    lengthCheck = /.{8,}/.test(password);
    lowercaseCheck = /[a-z]+/.test(password);
    uppercaseCheck = /[A-Z]+/.test(password);
    numberCheck = /[0-9]+/.test(password);
    specialCharacterCheck = /[^a-zA-Z0-9]+/.test(password);
    passwordsMatchCheck = password === confirmPassword;
    allChecksPassed = lengthCheck && lowercaseCheck && uppercaseCheck && numberCheck && specialCharacterCheck && passwordsMatchCheck
};


console.log(lengthCheck)
console.log(password);


passwordInput.addEventListener("input", e => {
    password = e.target.value;
    checkPassword(password);
    lengthCheck? lengthMessage.classList.add("valid") : lengthMessage.classList.remove("valid");
    lowercaseCheck? lowercaseMessage.classList.add("valid") : lowercaseMessage.classList.remove("valid");
    uppercaseCheck? uppercaseMessage.classList.add("valid") : uppercaseMessage.classList.remove("valid");
    numberCheck? numberMessage.classList.add("valid") : numberMessage.classList.remove("valid");
    specialCharacterCheck? specialCharacterMessage.classList.add("valid") : specialCharacterMessage.classList.remove("valid");
    passwordsMatchCheck? passwordsMatchMessage.classList.add("valid") : passwordsMatchMessage.classList.remove("valid");
    if(allChecksPassed) passwordInput.setCustomValidity(''); //marks it as valid in the form
})


confirmPasswordInput.addEventListener("input", e => {
    confirmPassword = e.target.value;
    checkPassword(password);
    passwordsMatchCheck? passwordsMatchMessage.classList.add("valid") : passwordsMatchMessage.classList.remove("valid");
    if(allChecksPassed) passwordInput.setCustomValidity(''); //marks it as valid in the form
})