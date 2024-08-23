## To run this project locally, clone the repo and follow the steps below.

### Django API (recipes_api) setup (run the following in your CLI after CD-ing to `MyRecipes/recipes_api`:
1. `python3 -m venv venv`. Note: The command might be slightly different depending on your Python installation.
2. `venv\Scripts\activate`
3.  `pip install -r requirements.txt`
4.  `python manage.py runserver`

After following the above steps, the backend will now be running on 127.0.0.1:8000. The following endpoints are available:
* `/api/user`: Returns a user's name, a blurb, and a picture encoded into base64
* `/api/recipes`: Returns a list of dishes and their recipes

### React UI (recipes-ui) setup (run the following in your CLI after CD-ing to `MyRecipes/recipes-ui`:
1. `npm install`
2. `npm start`

The UI will now be running on localhost:3000.

![image](https://github.com/user-attachments/assets/4a8a75b9-03fd-4ec2-853e-dd72d942ca27)
