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
    const lengthMap = {
        trolling: 8,
        weak: 8,
        secure: 32,
        hax0r: 64,
        default: 12
    };
    passwordLengthInput.value = lengthMap[strength] || lengthMap.default;
});