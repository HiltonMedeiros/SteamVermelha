from fastapi import APIRouter, Depends, HTTPException
from typing import List, Optional
from sqlalchemy.orm import Session
from .. import schemas, crud, models
from ..database import SessionLocal
from ..dependencies import get_current_user

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/games", response_model=List[schemas.Game])
def read_games(
    skip: int = 0,
    limit: int = 100,
    genre: Optional[str] = None,
    platform: Optional[str] = None,
    search_term: Optional[str] = None,
    db: Session = Depends(get_db)
):
    games = crud.get_games(
        db,
        skip=skip,
        limit=limit,
        genre=genre,
        platform=platform,
        search_term=search_term
    )
    return games

@router.post("/games", response_model=schemas.Game)
def create_game(
    game: schemas.GameCreate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    if not current_user.get("is_admin"):
        raise HTTPException(status_code=403, detail="Permissão negada")
    return crud.create_game(db=db, game=game)

@router.get("/games/{game_id}", response_model=schemas.Game)
def read_game(game_id: int, db: Session = Depends(get_db)):
    db_game = crud.get_game(db, game_id=game_id)
    if db_game is None:
        raise HTTPException(status_code=404, detail="Game not found")
    return db_game

@router.put("/games/{game_id}", response_model=schemas.Game)
def update_game(
    game_id: int,
    game_update: schemas.GameUpdate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    if not current_user.get("is_admin"):
        raise HTTPException(status_code=403, detail="Permissão negada")
    return crud.update_game(db=db, game_id=game_id, game_update=game_update)

@router.delete("/games/{game_id}", response_model=schemas.Game)
def delete_game(
    game_id: int,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    if not current_user.get("is_admin"):
        raise HTTPException(status_code=403, detail="Permissão negada")
    return crud.delete_game(db=db, game_id=game_id)

@router.patch("/games/{game_id}", response_model=schemas.Game)
def patch_game(
    game_id: int,
    game_update: schemas.GameUpdate,
    db: Session = Depends(get_db)
):
    db_game = crud.patch_game(db, game_id=game_id, game_update=game_update)
    if db_game is None:
        raise HTTPException(status_code=404, detail="Game not found")
    return db_game