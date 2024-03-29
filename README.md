# learn-german-app

This project is a web application designed to help you learn German. It utilizes a powerful combination of frontend and backend technologies:

Frontend: Built with React and Vite for a smooth user experience and efficient development workflow.
Backend: Powered by Flask, a lightweight Python web framework that provides a robust foundation for data handling and API creation.

# Getting Started

## Prerequisites

Ensure you have Node.js (version 14 or later) and npm (Node Package Manager) installed on your system. You can verify this by running node -v and npm -v in your terminal.
Download and install Python from https://www.python.org/downloads/.

## Project Setup

Clone this repository or download the project files.
Open a terminal window and navigate to the root directory of the project (where this README file resides).
Install the required dependencies for both frontend and backend:

```bash
npm install  # Installs React, Vite, and other frontend dependencies
pip install -r backend/requirements.txt  # Installs Flask and other backend dependencies
```

Optional: Create a virtual environment for Python to isolate project dependencies:

```python
python -m venv venv  # Create a virtual environment named 'venv'
source venv/bin/activate  # Activate the virtual environment (adjust for Windows)
```

## Running the Application

### Start the Backend

Open a separate terminal window (or close and reopen the existing one if in a virtual environment).
Navigate to the backend directory:

```bash
cd backend
```

Start the Flask development server:

```bash
flask --app flaskr run --debug
```

This will start the backend server, typically listening on http://127.0.0.1:5000 (check the terminal output for the exact URL).

### Start the Frontend

Navigate back to the project's root directory in the other terminal window:

```bash
cd ..\Frontend\
```

Start the React development server with Vite:

```bash
npm run dev
```

Vite will compile your React code, open your default browser, and navigate to http://localhost:3000 (or the URL specified in vite.config.js) by default.
