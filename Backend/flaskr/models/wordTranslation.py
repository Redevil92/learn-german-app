class WordTranslation:
  def __init__(self,id, word, word_in_detail, translation):
    self.id = id
    self.word = word
    self.word_in_detail = word_in_detail
    self.translation = translation
  
  def to_dict(self):
    return {
        "id": self.id,
        "word": self.word,
        "word_in_detail": self.word_in_detail,
        "translation": self.translation,
    }

  def __repr__(self):
    return f'WordTranslation({self.id}, {self.word}, {self.word_in_detail}, {self.translation})'
  
