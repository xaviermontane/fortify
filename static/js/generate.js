function copyText() {
    let copyText = document.getElementById("password-gen");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}