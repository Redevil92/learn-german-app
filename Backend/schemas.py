from marshmallow import Schema, fields

# used for validation in routes 
#Infinitive,Präsens_ich,Präsens_du,"Präsens_er, sie, es",Präteritum_ich,Partizip II,Konjunktiv II_ich,Imperativ Singular,Imperativ Plural,Hilfsverb
class VerbSchema(Schema):
    id = fields.Int(dump_only=True)
    infinitive = fields.Str(required=True)
    praesens_ich = fields.Str(required=True)
    praesens_du = fields.Str(required=True)
    praesens_er = fields.Str(required=True)
    praeteritum_ich = fields.Str(required=True)
    partizip_II = fields.Str(required=True)
    konjunktiv_II_ich = fields.Str(required=True)
    imperativ_singular = fields.Str(required=True)
    imperativ_plural = fields.Str(required=True)
    hilfsverb = fields.Str(required=True)

class PlainItemSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    price = fields.Float(required=True)


class PlainStoreSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str()


class PlainTagSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str()


class ItemSchema(PlainItemSchema):
    store_id = fields.Int(required=True, load_only=True)
    store = fields.Nested(PlainStoreSchema(), dump_only=True)
    tags = fields.List(fields.Nested(PlainTagSchema()), dump_only=True)


class ItemUpdateSchema(Schema):
    name = fields.Str()
    price = fields.Float()


class StoreSchema(PlainStoreSchema):
    items = fields.List(fields.Nested(PlainItemSchema()), dump_only=True)
    tags = fields.List(fields.Nested(PlainTagSchema()), dump_only=True)


class TagSchema(PlainTagSchema):
    store_id = fields.Int(load_only=True)
    items = fields.List(fields.Nested(PlainItemSchema()), dump_only=True)
    store = fields.Nested(PlainStoreSchema(), dump_only=True)


class TagAndItemSchema(Schema):
    message = fields.Str()
    item = fields.Nested(ItemSchema)
    tag = fields.Nested(TagSchema)


class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    username = fields.Str(required=True)
    password = fields.Str(required=True, load_only=True)

class DictionaryItemSchema(Schema):
    id = fields.Int(required=True)
    row_id = fields.Int(required=True)
    word = fields.Str(required=True)
    type = fields.Str(required=True)
    word_in_detail = fields.Str(required=True)
    translation = fields.Str(required=True)
