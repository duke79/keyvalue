from server.data.common import db_session
from server.data.tables.pair import Pair
from server.data.tables.user import User

def get_user_id(user_name):
    filter_args = ((User.name == user_name),)
    res = db_session().query(User).filter(*filter_args).first()
    if res is None:
        res = User()
        res.name = user_name
        res.save()

    return res.id

def get_pair_row(key, user_id):
    filter_args = ((Pair.key == key), (Pair.user_id == user_id),)
    res = db_session().query(Pair).filter(*filter_args).first()
    return res


def get(key, user_id):
    res = get_pair_row(key, user_id)
    if res is None:
        return None
    return res.value


def set(key, value, user_id):
    res = get_pair_row(key, user_id)

    if res is None:
        res = Pair()
        res.key = key
        res.user_id = user_id

    res.value = value
    res.save()
    return res.value
