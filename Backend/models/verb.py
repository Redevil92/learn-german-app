from db import db


class VerbModel(db.Model):
    __tablename__ = "verbs"

    id = db.Column(db.Integer, primary_key=True)
    infinitive = db.Column(db.String(80), nullable=False)
    praesens_ich = db.Column(db.String(80), nullable=False)
    praesens_du = db.Column(db.String(80), nullable=False)
    praesens_er = db.Column(db.String(80), nullable=False)
    praeteritum_ich = db.Column(db.String(80), nullable=False)
    partizip_II = db.Column(db.String(80), nullable=False)
    konjunktiv_II_ich = db.Column(db.String(80), nullable=False)
    imperativ_singular = db.Column(db.String(80), nullable=False)
    imperativ_plural = db.Column(db.String(80), nullable=False)
    hilfsverb = db.Column(db.String(80), nullable=False)