from sqlalchemy.orm import Session
from . import models, schemas

def get_game(db: Session, game_id: int):
    return db.query(models.Game).filter(models.Game.id == game_id).first()

def get_games(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Game).offset(skip).limit(limit).all()

def create_game(db: Session, game: schemas.GameCreate):
    db_game = models.Game(
        title=game.title,
        description=game.description,
        price=game.price,
        genre=game.genre,
        platform=game.platform
    )
    db.add(db_game)
    db.commit()
    db.refresh(db_game)
    return db_game