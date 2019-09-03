from server.data import pair_store as store
from ...app import app
from flask import request


@app.route('/get', methods=['GET'])
def get():
    if request.method == 'GET':
        key = request.args.get("key")
        value = store.get(key)

        if value is None:
            return "", 204

        return value


@app.route('/set', methods=['GET'])
def set():
    if request.method == 'GET':
        key = request.args.get("key")
        value = request.args.get("value")

        store.set(key, value)

        return value
