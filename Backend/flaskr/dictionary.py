from flask import (
    Blueprint, jsonify, render_template, request, url_for
)
from werkzeug.exceptions import abort

from flaskr.auth import login_required
from Backend.flaskr.db.db import get_db

from flaskr.models.wordTranslation import WordTranslation

bp = Blueprint('dictionary', __name__, url_prefix='/dictionary')


def create_words(tuples):
    words = []
    for tuple in tuples:
        words.append(WordTranslation(*tuple).to_dict())
    return words

def get_words(word):
    rows = get_db().execute(
        'SELECT *'
        ' FROM german_english_dictionary'
        ' WHERE word LIKE ?'
        ' ORDER BY LENGTH(word) ASC '
        ' LIMIT 10 ',
        (word+'%',)
    ).fetchall()
    tuples = [tuple(row) for row in rows]
    return create_words(tuples)


@bp.route('/<string:word>', methods=['GET'])
def get_word(word):
    words = get_words(word)
    if not words:
        return jsonify({"message": "No words found for that definition."}), 404

    return jsonify(words)

