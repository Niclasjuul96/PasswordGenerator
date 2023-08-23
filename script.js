let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


// Showing input slider value 
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 

// Function to generate Password
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    // Calculate the minimum required characters based on the selected options
    let minRequiredChars = 0;
    minRequiredChars += lowercase.checked ? 1 : 0;
    minRequiredChars += uppercase.checked ? 1 : 0;
    minRequiredChars += numbers.checked ? 1 : 0;
    minRequiredChars += symbols.checked ? 1 : 0;

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    let categoryChars = "";

    // Ensure at least one character from each selected category
    if (lowercase.checked) {
        categoryChars += lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
    }
    if (uppercase.checked) {
        categoryChars += upperChars.charAt(Math.floor(Math.random() * upperChars.length));
    }
    if (numbers.checked) {
        categoryChars += allNumbers.charAt(Math.floor(Math.random() * allNumbers.length));
    }
    if (symbols.checked) {
        categoryChars += allSymbols.charAt(Math.floor(Math.random() * allSymbols.length));
    }

    // Append the category characters to the generated password
    genPassword += categoryChars;

    // Generate the remaining characters
    for (let i = minRequiredChars; i < inputSlider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return genPassword;
}


copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});