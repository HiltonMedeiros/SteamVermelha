from sqlalchemy.orm import Session
from . import models, schemas

def get_game(db: Session, game_id: int):
    db_game = db.query(models.Game).filter(models.Game.id == game_id).first()
    if db_game:
        return schemas.Game(
            id=db_game.id,
            title=db_game.title,
            description=db_game.description,
            price=db_game.price,
            image_url=db_game.image_url,  # Novo campo adicionado
            genres=[genre.name for genre in db_game.genres],
            platforms=[platform.name for platform in db_game.platforms]
        )
    return None

def get_games(
    db: Session,
    skip: int = 0,
    limit: int = 100,
    genre: str = None,
    platform: str = None,
    search_term: str = None
):
    query = db.query(models.Game)
    
    if genre:
        query = query.join(models.Game.genres).filter(models.Genre.name == genre)
    
    if platform:
        query = query.join(models.Game.platforms).filter(models.Platform.name == platform)
    
    if search_term:
        query = query.filter(models.Game.title.ilike(f"%{search_term}%"))

    db_games = query.offset(skip).limit(limit).all()
    
    return [
        schemas.Game(
            id=game.id,
            title=game.title,
            description=game.description,
            price=game.price,
            image_url=game.image_url,  # Novo campo adicionado
            genres=[genre.name for genre in game.genres],
            platforms=[platform.name for platform in game.platforms]
        )
        for game in db_games
    ]

def create_game(db: Session, game: schemas.GameCreate):
    db_game = models.Game(
        title=game.title,
        description=game.description,
        price=game.price,
        image_url=str(game.image_url)  # Converter para string
    )

    # Adicionar gêneros
    db_genres = []
    for genre_name in game.genres:
        genre = db.query(models.Genre).filter(models.Genre.name == genre_name.value).first()
        if not genre:
            genre = models.Genre(name=genre_name.value)
            db.add(genre)
        db_genres.append(genre)
    db_game.genres = db_genres

    # Adicionar plataformas
    db_platforms = []
    for platform_name in game.platforms:
        platform = db.query(models.Platform).filter(models.Platform.name == platform_name.value).first()
        if not platform:
            platform = models.Platform(name=platform_name.value)
            db.add(platform)
        db_platforms.append(platform)
    db_game.platforms = db_platforms

    db.add(db_game)
    db.commit()
    db.refresh(db_game)

    return schemas.Game(
        id=db_game.id,
        title=db_game.title,
        description=db_game.description,
        price=db_game.price,
        image_url=db_game.image_url,  # Novo campo adicionado
        genres=[genre.name for genre in db_game.genres],
        platforms=[platform.name for platform in db_game.platforms]
    )

def update_game(db: Session, game_id: int, game_update: schemas.GameUpdate):
    db_game = db.query(models.Game).filter(models.Game.id == game_id).first()
    if not db_game:
        return None

    # Atualizar campos simples
    db_game.title = game_update.title or db_game.title
    db_game.description = game_update.description or db_game.description
    db_game.price = game_update.price or db_game.price
    db_game.image_url = str(game_update.image_url) or db_game.image_url

    # Atualizar gêneros
    if game_update.genres is not None:
        db_game.genres.clear()
        for genre_name in game_update.genres:
            genre = db.query(models.Genre).filter(models.Genre.name == genre_name.value).first()
            if not genre:
                genre = models.Genre(name=genre_name.value)
                db.add(genre)
            db_game.genres.append(genre)

    # Atualizar plataformas
    if game_update.platforms is not None:
        db_game.platforms.clear()
        for platform_name in game_update.platforms:
            platform = db.query(models.Platform).filter(models.Platform.name == platform_name.value).first()
            if not platform:
                platform = models.Platform(name=platform_name.value)
                db.add(platform)
            db_game.platforms.append(platform)

    db.commit()
    db.refresh(db_game)

    # Retornar uma instância de schemas.Game
    return schemas.Game(
        id=db_game.id,
        title=db_game.title,
        description=db_game.description,
        price=db_game.price,
        image_url=db_game.image_url,
        genres=[genre.name for genre in db_game.genres],
        platforms=[platform.name for platform in db_game.platforms]
    )

def delete_game(db: Session, game_id: int):
    db_game = db.query(models.Game).filter(models.Game.id == game_id).first()
    if not db_game:
        return None
    db.delete(db_game)
    db.commit()
    return db_game