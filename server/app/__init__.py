from flask import Flask  # 0.12.4
from flask_cors import CORS  # 3.0.3

app = Flask(__name__)
CORS(app)

from .views import *
