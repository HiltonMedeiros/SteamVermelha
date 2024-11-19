from sqlalchemy import Table, Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

# Tabelas de associação
game_genres = Table(
    'game_genres',
    Base.metadata,
    Column('game_id', Integer, ForeignKey('games.id'), primary_key=True),
    Column('genre_name', String, ForeignKey('genres.name'), primary_key=True)
)

game_platforms = Table(
    'game_platforms',
    Base.metadata,
    Column('game_id', Integer, ForeignKey('games.id'), primary_key=True),
    Column('platform_name', String, ForeignKey('platforms.name'), primary_key=True)
)

# Seus modelos
class Game(Base):
    __tablename__ = 'games'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    price = Column(Float)
    image_url = Column(String)  # Novo campo adicionado

    genres = relationship(
        'Genre',
        secondary=game_genres,
        back_populates='games'
    )
    platforms = relationship(
        'Platform',
        secondary=game_platforms,
        back_populates='games'
    )

class Genre(Base):
    __tablename__ = 'genres'

    name = Column(String, primary_key=True)
    games = relationship(
        'Game',
        secondary=game_genres,
        back_populates='genres'
    )

class Platform(Base):
    __tablename__ = 'platforms'

    name = Column(String, primary_key=True)
    games = relationship(
        'Game',
        secondary=game_platforms,
        back_populates='platforms'
    )