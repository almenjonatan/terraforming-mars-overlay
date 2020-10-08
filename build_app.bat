cd backend
python -m venv venv
.\venv\Scripts\activate.bat && pip install -r requirements.txt && pyinstaller -F app.spec
