from flask_smorest import Blueprint, abort
from sqlalchemy.sql.expression import func

from models import VerbModel
from schemas import VerbSchema

blp = Blueprint("VerbBlueprint", "verbs", description="Operations on verbs")

@blp.route('/verb/<string:verb>', methods=['GET'])
@blp.response(200, VerbSchema)
def get_words(verb:str):
    verb = VerbModel.query \
        .filter(VerbModel.infinitive.ilike(f'%{verb}%')) \
        .order_by(func.length(VerbModel.infinitive)) \
        .first()
    
    if not verb:
        abort(404, message="No verb found for that definition.")
        
    return verb