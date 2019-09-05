from server.data import pair_store as store
from ...app import app
from flask import request


@app.route('/get', methods=['GET'])
def get():
    if request.method == 'GET':
        key = request.args.get("key")
        user_name = request.args.get("user")

        user_id = store.get_user_id(user_name)
        value = store.get(key, user_id)

        if value is None:
            return "", 204

        return value


@app.route('/set', methods=['GET'])
def set():
    if request.method == 'GET':
        key = request.args.get("key")
        value = request.args.get("value")
        user_name = request.args.get("user")

        user_id = store.get_user_id(user_name)
        store.set(key, value, user_id)

        return value
