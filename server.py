from flask import Flask, render_template
from flask.helpers import send_from_directory

app = Flask(__name__)

@app.route("/")
def home():
    return send_from_directory("dist/html", "index.html")

@app.route("/<path:path>")
def html(path):
    return send_from_directory("dist/html", path + ".html")

@app.route("/css/<path:path>")
def css(path):
    return send_from_directory("dist/css", path)

@app.route("/js/<path:path>")
def js(path):
    return send_from_directory("dist/js", path)

@app.route("/media/<path:path>")
def staticpath(path):
    return send_from_directory("dist/media", path)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)