const strengthButton = document.getElementById("custom-strength");
const passwordLengthInput = document.getElementById("length");
const customCharset = document.getElementsByClassName("custom-checkbox");
const generateButton = document.getElementById("generate");

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

function customGenerate(event) {
    event.preventDefault();

    let customOptions = {};
    Array.from(customCharset).forEach((checkbox) => {
        customOptions[checkbox.name] = checkbox.checked;
    });

    customOptions["length"] = passwordLengthInput.value;
    console.log(customOptions)

    fetch("/generate_password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customOptions)
    })
    .then(response => response.json())
    .then(data => {
        const passwordContainer = document.getElementById("password-container");
        const passwordGen = document.getElementById("password-gen");
        passwordGen.value = data.password;
        passwordContainer.style.display = "block";
    })
    .catch(error => console.error("Error:", error));
}

generateButton.addEventListener("click", customGenerate);