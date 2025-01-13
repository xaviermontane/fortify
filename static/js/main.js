const passwordInput = document.getElementById("password");
const cloakButton = document.getElementById("toggle-view");
const checkStrengthButton = document.getElementById("check-strength");
const entropyResult = document.getElementById("entropy-table");
const passwordForm = document.getElementById("password-form");

cloakButton.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    document.getElementById("toggle-image").src = isPassword ? "/static/images/password_hide.svg" : "/static/images/password_show.svg";
});

const checkPasswordStrength = () => {
    const password = passwordInput.value.trim();
        if (!password) {
        alert("Please enter a password before checking strength!");
        return;
    }

    fetch("/fortify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
    })
    .then(response => response.json())
    .then(data => {
        entropyResult.innerHTML = `
        <style>#strength-details{display: block}</style>
        <p id="score">${data.score}</p>
        <p id="feedback">💡  ${data.feedback.suggestions.join(', ')}</p>
        <p><strong>Crack Time (offline fast hashing):</strong> ${data.crack_times_display.offline_fast_hashing_1e10_per_second}</p>
        <p><strong>Crack Time (offline slow hashing):</strong> ${data.crack_times_display.offline_slow_hashing_1e4_per_second}</p>
        <p><strong>Crack Time (online no throttling):</strong> ${data.crack_times_display.online_no_throttling_10_per_second}</p>
        <p><strong>Crack Time (online throttling):</strong> ${data.crack_times_display.online_throttling_100_per_hour}</p>
        `;
    })
    .catch(error => {console.error("Error:", error);});
};

checkStrengthButton.addEventListener("click", checkPasswordStrength);

passwordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkPasswordStrength();
});