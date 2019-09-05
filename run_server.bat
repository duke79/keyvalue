@echo off

set PYTHONPATH=%~dp0
pip install -r server\requirements.txt
python server\runserver.py
