import string
import secrets
from zxcvbn import zxcvbn

def generate_password(length, custom_options):
    charset = ""
    options = {
        "uppercase": string.ascii_uppercase,
        "lowercase": string.ascii_lowercase,
        "numbers": string.digits,
        "symbols": string.punctuation
    }
    charset = "".join(value for key, value in options.items() if custom_options.get(key))

    if not charset:
        charset = string.ascii_letters + string.digits + string.punctuation

    password = "".join(secrets.choice(charset) for i in range(length))
    return password

def check_password(password):
    strength = zxcvbn(password)
    print(f"Password Strength Score: {strength['score']}")
    print(f"Feedback: {strength['feedback']}")