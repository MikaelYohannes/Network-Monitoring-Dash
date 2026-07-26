Running the frontend:
    Requirements: install latest version of npm

    - Clone the repository and run
        - npm install
        - npm run dev


Running the backend:
    Requirements: install python venv support python3-venv

    In the backend folder, run
        - python -m venv venv
        - source venv/bin/activate
        - pip install -r requirements 
        - uvicorn app.main:app --reload