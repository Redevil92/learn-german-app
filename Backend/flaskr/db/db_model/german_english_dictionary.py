from db import db

class GermanEnglishDictionary(db.Model):
    __tablename__ = "german_english_dictionary"

    id = db.Column(db.Integer, primary_key=True)
    word = db.Column(db.String(200), unique=False, nullable=False)
    word_in_detail = db.Column(db.String(400), unique=False, nullable=False)
    translation = db.Column(db.String(400), unique=False, nullable=False)