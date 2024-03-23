class WordTranslation:
  def __init__(self,id, definition, translation, definition_type, extra_info):
    self.id = id
    self.definiton = definition
    self.translation = translation
    self.definition_type = definition_type
    self.extra_info = extra_info
  
  def to_dict(self):
    return {
        "id": self.id,
        "definition": self.definiton,
        "translation": self.translation,
        "definition_type": self.definition_type,
        "extra_info": self.extra_info
    }

  def __repr__(self):
    return f'WordTranslation({self.id}, {self.definition}, {self.translation}, {self.definition_type}, {self.extra_info})'
  
