from flask_smorest import Blueprint, abort
from sqlalchemy.sql.expression import func
from fuzzywuzzy.fuzz import ratio


from models import DictionaryItemModel
from schemas import DictionaryItemSchema

blp = Blueprint("DictionaryItems", "dictionary_items", description="Operations on items")

@blp.route('/dictionary/<string:word>', methods=['GET'])
@blp.response(200, DictionaryItemSchema(many=True))
def get_words(word:str):
    words = DictionaryItemModel.query \
        .filter(DictionaryItemModel.word.ilike(f'%{word}%')) \
        .order_by(func.length(DictionaryItemModel.word)) \
        .limit(10) \
        .all()
    
    if len(words) == 0:
        abort(404, message="No words found for that definition.")

        
    return (words)


@blp.route('/dictionary/suggestions/<string:word>', methods=['GET'])
@blp.response(200, DictionaryItemSchema(many=True))
def get_words(word:str):
    #threshold = 80

    #.filter(DictionaryItemModel.word.ilike(f'%{word}%')) \
    #.filter(fuzzy.match(func.lower(DictionaryItemModel.word), f"{word.lower()}%", threshold=threshold)) \

    words = DictionaryItemModel.query \
        .filter(DictionaryItemModel.word.ilike(f'%{word}%')) \
        .distinct(DictionaryItemModel.word) \
        .order_by(func.length(DictionaryItemModel.word)) \
        .limit(10) \
        .all()
    
    if len(words) == 0:
        []
        
    return (words)


@blp.route('/dictionary/word_by_id/<string:word_id>', methods=['GET'])
@blp.response(200, DictionaryItemSchema(many=True))
def get_word_by_id(word_id:str):
    word = DictionaryItemModel.query \
        .filter(DictionaryItemModel.id == word_id) \
        .first()

    additional_words = DictionaryItemModel.query \
        .filter(DictionaryItemModel.word == word.word) \
        .limit(9) \
        .all()
    
    word = [word] + additional_words
    
    if word is None:
        abort(404, message="No words found for that definition.")
        
    return (word)