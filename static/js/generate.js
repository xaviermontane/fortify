const passwordLengthInput = document.getElementById("length");
const customCharset = document.getElementsByClassName("custom-checkbox");
const generateButton = document.getElementById("generate");

function copyText() {
    let copyText = document.getElementById("password-gen");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

function customGenerate(event) {
    event.preventDefault();

    let customOptions = {};
    Array.from(customCharset).forEach((checkbox) => {
        customOptions[checkbox.name] = checkbox.checked;
    });

    customOptions["length"] = passwordLengthInput.value;

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