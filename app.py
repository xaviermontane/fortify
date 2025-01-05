from flask import Flask, render_template, request, jsonify
from main import generate_password

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def fortify():
    return render_template("fortify.html", title="Password Strength Checker")

@app.route("/generate", methods=["GET", "POST"])
def generate():
    password = None
    if request.method == "POST":
        length = int(request.form.get("length"))
        password = generate_password(length)
    return render_template("generate.html", title="Password Generator", password=password)

@app.route("/generate_password", methods=["POST"])
def generate_route():
    data = request.json
    length = int(data.get("length", 12))
    custom_options = {
        "uppercase": data.get("uppercase", False),
        "lowercase": data.get("lowercase", False),
        "numbers": data.get("numbers", False),
        "symbols": data.get("symbols", False)
    }
    password = generate_password(length, custom_options)
    return jsonify({"password": password})

@app.route("/about")
def about():
    return render_template("about.html", title="About Us")

if __name__ == "__main__":
    app.run(debug=True)