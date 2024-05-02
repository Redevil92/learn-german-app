from flask import (
    Blueprint, jsonify, request, 
)

from Backend.flaskr.db.db import get_db

from flaskr.models.wordTranslation import WordTranslation

bp = Blueprint('savedWords', __name__, url_prefix='/savedWords')

@bp.route('/getAll', methods=['GET'])
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


@bp.route('/<int:id>', methods=['DELETE'])    
def delete_saved_word(id):
    db = get_db()
    db.execute(
        'DELETE FROM saved_words WHERE id = ?',
        (id,)
    )
    db.commit()
    return jsonify({"message": "Word deleted."})

@bp.route('/', methods=['POST'])
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
