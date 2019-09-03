import logging

from gevent import pywsgi, monkey

from multiprocessing import freeze_support

import os

from server.app import app

logging.basicConfig(level=logging.WARNING)  # This has to be called, for unknown reasons
logging.getLogger().setLevel(logging.NOTSET)  # INFO only works once basicConfig is set

icons_directory = os.path.dirname(__file__)
icons_directory = os.path.join(icons_directory, "app\\static\\images")
fav_icon = os.path.join(icons_directory, "favicon.ico")

config = {
    "server": {
        "host": "0.0.0.0",
        "port": "5555"
    }
}


def server_url():
    host = config["server"]["host"]
    port = config["server"]["port"]
    # url = "http://{0}:{1}".format("localhost", "5555")
    url = "http://{0}:{1}".format("localhost", port)
    return url


def start_server():
    freeze_support()

    host = config["server"]["host"]
    port = config["server"]["port"]
    url = "http://" + host + ":" + port
    port = int(port)

    server = pywsgi.WSGIServer((host, port), app)
    server.serve_forever()


if __name__ == '__main__':
    start_server()
