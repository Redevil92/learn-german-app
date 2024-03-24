from flask import (
    Blueprint, jsonify, render_template, request, url_for
)
from werkzeug.exceptions import abort

from flaskr.auth import login_required
from flaskr.db import get_db

from flaskr.models.wordTranslation import WordTranslation

bp = Blueprint('dictionary', __name__)

@bp.route('/')
def index():
    db = get_db()
    posts = db.execute(
        'SELECT p.id, title, body, created, author_id, username'
        ' FROM post p JOIN user u ON p.author_id = u.id'
        ' ORDER BY created DESC'
    ).fetchall()
    return render_template('blog/index.html', posts=posts)


def create_words(tuples):
    words = []
    for tuple in tuples:
        words.append(WordTranslation(*tuple).to_dict())
    return words

def get_words(word):
    # SELECT *
    # FROM your_table
    # WHERE type IN ('noun', 'verb')  -- Filter by preferred types (noun or verb)
    # ORDER BY 
    # CASE WHEN type IN ('noun', 'verb') THEN 0 ELSE 1 END ASC,  -- Prioritize preferred types
    # LENGTH(description) ASC,  -- Sort by description length (shorter first)
    # your_value_column DESC  -- Sort by value (highest last)
    # LIMIT 10;
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


@bp.route('/dictionary/<string:word>', methods=['GET'])
def get_word(word):
    words = get_words(word)
    if not words:
        # Handle the case where no matching words are found
        return jsonify({"message": "No words found for that definition."}), 404

    # Return the list of words as a JSON response
    return jsonify(words)

