const strengthButton = document.getElementById("custom-strength");
const passwordLengthInput = document.getElementById("length");

function copyText() {
    let copyText = document.getElementById("password-gen");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

passwordLengthInput.addEventListener("input", (e) => {
    passwordLengthInput.value = e.target.value;
});

strengthButton.addEventListener("change", (e) => {
    const strength = e.target.value;
    let newLength;
    switch (strength) {
        case "trolling":
            newLength = 8;
            break;
        case "weak":
            newLength = 8;
            break;
        case "secure":
            newLength = 32;
            break;
        case "hax0r":
            newLength = 64;
            break;
        default:
            newLength = 12;
    }
    passwordLengthInput.value = newLength;
});