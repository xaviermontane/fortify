const passwordInput = document.getElementById("password");
const body = document.body;

function calculateColor(password) {
    const length = password.length;

    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMixedCase = /[a-z]/.test(password) && /[A-Z]/.test(password);

    let hue = 0;
    hue += Math.min(length / 64) * 120;

    if (hasNumber) hue += 20; // Increase hue by 20 if the password contains a number
    if (hasSymbol) hue += 30; // Add 30 for symbols
    if (hasMixedCase) hue += 50; // Add 50 for mixed case

    hue = Math.min(hue, 360);
    return `hsl(${hue}, 70%, 80%)`;
}

passwordInput.addEventListener("input", (e) => {
    const password = e.target.value;
    const color = calculateColor(password);

    body.style.backgroundColor = color;
});