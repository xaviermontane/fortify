function copyText() {
    let copyText = document.getElementById("password");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}