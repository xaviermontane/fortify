from flask import Flask, render_template, request
from main import generate_password

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html", title="Password Strength Checker")

@app.route("/generate", methods=["GET", "POST"])
def generate():
    password = None
    if request.method == "POST":
        length = int(request.form.get("length"))
        password = generate_password(length)
    return render_template("generate.html", title="Password Generator", password=password)

if __name__ == "__main__":
    app.run(debug=True)