"""Simples servidor pra hostear a pagina de devops."""

from flask import Flask
from flask import render_template
from flask import url_for

app = Flask(__name__)

@app.route("/")
def index():
    """Pagina padrão com o site"""
    styles = url_for('static', filename='styles.css')
    js = url_for('static', filename='index.js')
    return render_template('index.html', styles=styles, js=js)
