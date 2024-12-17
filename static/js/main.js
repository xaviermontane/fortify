document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const cloakButton = document.getElementById("toggle-view");
    const checkStrengthButton = document.getElementById("check-strength");
    const strengthDetails = document.getElementById('strength-details');

    function evaluatePassword(password) {
        const hasNumber = /\d/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasMixedCase = /[a-z]/.test(password) && /[A-Z]/.test(password);
        const length = password.length;

        let strength = 0;

        if (length >= 12) strength++;
        if (hasNumber) strength++;
        if (hasSymbol) strength++;
        if (hasMixedCase) strength++;

        const crackingTime = calculateCrackingTime(password, hasNumber, hasSymbol, hasMixedCase);

        return {
            strength,
            hasNumber,
            hasSymbol,
            hasMixedCase,
            length,
            crackingTime,
        };
    }

    function calculateCrackingTime(password, hasNumber, hasSymbol, hasMixedCase) {
        const length = password.length;

        // Determine the character set size
        let charsetSize = 26; // Lowercase letters
        if (hasMixedCase) charsetSize += 26; // Add uppercase letters
        if (hasNumber) charsetSize += 10; // Add numbers
        if (hasSymbol) charsetSize += 30; // Add symbols

        // Cracking speed: 1 billion attempts per second
        const attemptsPerSecond = 1e9;
        const totalCombinations = Math.pow(charsetSize, length);
        const timeInSeconds = totalCombinations / attemptsPerSecond;

        return formatCrackingTime(timeInSeconds);
    }

    // Function to format cracking time into human-readable format
    function formatCrackingTime(seconds) {
        const years = Math.floor(seconds / (60 * 60 * 24 * 365));
        const days = Math.floor((seconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24));
        const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);

        if (years > 0) return `${years} years, ${days} days`;
        if (days > 0) return `${days} days, ${hours} hours`;
        if (hours > 0) return `${hours} hours, ${minutes} minutes`;
        if (minutes > 0) return `${minutes} minutes, ${secs} seconds`;
        return `${secs} seconds`;
    }

    function responsiveBackground(password) {
        const maxLength = 64;
        const length = password.length;
        const hue = Math.min((length / maxLength) * 120, 120); // Green to red (0-120 hue)
        document.body.style.backgroundColor = `hsl(${hue}, 70%, 80%)`;
    }

    passwordInput.addEventListener("input", (e) => {
        const password = e.target.value;
        responsiveBackground(password);
    });

    checkStrengthButton.addEventListener("click", () => {
        const password = passwordInput.value;

        if (password.trim() === "") {
            alert("Please enter a password before checking strength!");
            return;
        }

        const evaluation = evaluatePassword(password);
        strengthDetails.innerHTML = `
        <h3>Password Details</h3>
        <p><strong>Cracking Time:</strong> ${evaluation.crackingTime}</p>
        `;
    });

    cloakButton.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            document.getElementById("toggle-image").src = "/static/images/password_hide.svg";
        } else {
            passwordInput.type = "password";
            document.getElementById("toggle-image").src = "/static/images/password_show.svg";
        }
    });
});