from enum import Enum
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from os.path import expanduser
import os


def db_model():
    app = Flask(__name__)
    db = SQLAlchemy(app)
    db.create_all()
    return db.Model


Base = declarative_base()


# Base = db_model

class DBType(Enum):
    sqlite = 1
    mysql = 2
    postgres = 3


class DBSession():
    def __init__(self):
        self._config = {
            "active": "sqlite",
            "sqlite": {
                "path": os.path.join(expanduser("~"), "sqlite.db")
            },
            "mysql": {
                "db": "dummy_db",
                "user": "dummy_user",
                "host": "localhost",
                "password": "dummy_password"
            },
            "postgres": {
                "db": "vilokanlabs",
                "user": "VilokanLabs",
                "host": "localhost",
                "password": "3WHiTeNeD",
                "port": "5432"
            },
        }

    def uri(self):
        db_uri = None

        if db_type == DBType.sqlite:
            db_uri = "sqlite:///" + self._config["sqlite"]["path"]

        if db_type == DBType.mysql:
            config = self._config["mysql"]
            db_uri = "mysql+pymysql://{0}:{1}@{2}:3306/{3}".format(config["user"], config["password"], config["host"],
                                                                   config["db"])

        if db_type == DBType.postgres:
            config = self._config["postgres"]
            db_uri = "postgresql://{0}:{1}@{2}:{3}/{4}".format(config["user"], config["password"], config["host"],
                                                               config["port"], config["db"])

        return db_uri

    def db_type(self):
        db_type = DBType.sqlite  # Default
        active_db = self._config["active"]
        if "sqlite" == active_db:
            db_type = DBType.sqlite
        if "mysql" == active_db:
            db_type = DBType.mysql
        if "postgres" == active_db:
            db_type = DBType.postgres
        return db_type


_helper = DBSession()
db_type = _helper.db_type()
db_uri = _helper.uri()
# engine = create_engine(_helper.uri(), pool_size=50, max_overflow=0, pool_timeout=300)
engine = create_engine(_helper.uri())


def _session_factory():
    Base.metadata.create_all(engine)

    session = sessionmaker(bind=engine)()
    session._model_changes = {}
    return session


db_session = _session_factory
