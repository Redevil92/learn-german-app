from db import db


class DictionaryItemModel(db.Model):
    __tablename__ = "dictionary"

    id = db.Column(db.Integer, primary_key=True)
    row_id = db.Column(db.Integer, unique=False, nullable=False)
    word = db.Column(db.String(300), unique=False, nullable=False)
    type = db.Column(db.String(300), unique=False, nullable=False)
    word_in_detail = db.Column(db.String(300), unique=False, nullable=False)
    translation = db.Column(db.String(300), unique=False, nullable=False)


    
