const strengthButton = document.getElementById("custom-strength");
const passwordLengthInput = document.getElementById("length");
const customCharset = document.getElementsByClassName("custom-checkbox");

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

Array.from(customInputs).forEach((checkbox) => {
    let checkboxData = {
        name: "",
        check: false,
    }
    checkbox.addEventListener("change", (e) => {
        checkboxData.name = checkbox.name;
        checkboxData.check = checkbox.check;
        if (checkboxData.check == false) {
            return checkboxData
        } else {
            
        }
    });
});

function customGenerate() {
    let checkbox = {
        name: checkboxData.name,
        check: checkboxData.check,
    };
};