from flask import (
    Blueprint, jsonify, render_template, 
)

from flaskr.auth import login_required
from flaskr.db import get_db

from flaskr.models.wordTranslation import WordTranslation

bp = Blueprint('savedWords', __name__)


# def create_words(tuples):
#     words = []
#     for tuple in tuples:
#         words.append(WordTranslation(*tuple).to_dict())
#     return words

# def get_words(word):
#     rows = get_db().execute(
#         'SELECT *'
#         ' FROM german_english_dictionary'
#         ' WHERE word LIKE ?'
#         ' ORDER BY LENGTH(word) ASC '
#         ' LIMIT 10 ',
#         (word+'%',)
#     ).fetchall()
#     tuples = [tuple(row) for row in rows]
#     return create_words(tuples)


@bp.route('/savedWords/getAll', methods=['GET'])
def get_saved_words():
    rows = get_db().execute(
        'SELECT *'
        ' FROM saved_words'
    ).fetchall()
    tuples = [tuple(row) for row in rows]
    words = []
    for tuple in tuples:
        words.append(WordTranslation(*tuple).to_dict())
    return jsonify(words)


@bp.route('/savedWords/<int:id>', methods=['DELETE'])    
def delete_saved_word(id):
    db = get_db()
    db.execute(
        'DELETE FROM saved_words WHERE id = ?',
        (id,)
    )
    db.commit()
    return jsonify({"message": "Word deleted."})

@bp.route('/savedWords', methods=['POST'])
def update_saved_word(id):
    word = request.json['word']
    word_in_detail = request.json['word_in_detail']
    translation = request.json['translation']
    db = get_db()
    db.execute(
        'UPDATE saved_words SET word = ?, word_in_detail = ?, translation = ? WHERE id = ?',
        (word, translation, word_in_detail, id)
    )
    db.commit()
    return jsonify({"message": "Word updated."})
