# app.py

from flask import Flask
from .db import db
from .models.user import User
from .models.post import Post
from .models.comment import Comment

app = Flask(__name__)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blogging.db'  # Use SQLite for simplicity
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy with Flask app
db.init_app(app)

# Define API endpoints for Users, Posts, and Comments

if __name__ == '__main__':
    app.run(debug=True)

