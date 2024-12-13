# Fortify - Password Strength Checker

Fortify is a simple web application that helps users generate secure passwords and check their strength. Built with Flask and Docker, this app provides an intuitive interface to ensure that your passwords are strong enough to withstand common brute force attacks.

## Features

- Password generation with customizable settings.
- Strength checker that estimates the time required to crack a password.
- Easy-to-use web interface built with Flask.

## Installation

### Clone the repository
```bash
git clone https://github.com/xaviermontane/fortify.git
cd fortify
```

### Set up the environment
1. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

### Docker Setup (Optional)
For easy development setup, use Docker:
1. Build the Docker image:
    ```bash
    docker-compose build
    ```
2. Run the app:
    ```bash
    docker-compose up
    ```
This will start the app in a Docker container, accessible at `http://localhost:5000`.

## Usage
1. Open the app in your browser (`http://localhost:5000`).
2. Enter a password into the form to check its strength or generate a secure one.

## Contributing
Feel free to fork the project, submit issues, or create pull requests to help improve the app!

## License
This project is licensed under the GPLv3 License - see the [LICENSE](LICENSE) file for details.