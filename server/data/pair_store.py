from server.data.common import db_session
from server.data.tables.pair import Pair


def db_row(key):
    filter_args = ((Pair.key == key),)
    res = db_session().query(Pair).filter(*filter_args).first()
    return res


def get(key):
    res = db_row(key)
    if res is None:
        return None
    return res.value


def set(key, value):
    res = db_row(key)

    if res is None:
        res = Pair()
        res.key = key

    res.value = value
    res.save()
    return res.value
