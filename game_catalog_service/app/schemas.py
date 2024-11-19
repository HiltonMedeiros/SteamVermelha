from enum import Enum
from pydantic import BaseModel, Field, HttpUrl
from typing import List, Optional

class GenreEnum(str, Enum):
    ACTION = "Ação"
    ADVENTURE = "Aventura"
    HORROR = "Terror"
    FIGHTING = "Luta"
    RPG = "RPG"
    SPORTS = "Esportes"
    STRATEGY = "Estratégia"
    PUZZLE = "Quebra-cabeça"
    # Adicione outros gêneros conforme necessário

class PlatformEnum(str, Enum):
    PC = "PC"
    PS4 = "PS4"
    PS5 = "PS5"
    XBOX_ONE = "Xbox One"
    XBOX_SERIES_X = "Xbox Series X"
    NINTENDO_SWITCH = "Nintendo Switch"
    # Adicione outras plataformas conforme necessário

class GameBase(BaseModel):
    title: str
    description: str
    price: float
    image_url: HttpUrl  # Novo campo adicionado
    genres: List[GenreEnum] = Field(default_factory=list)
    platforms: List[PlatformEnum] = Field(default_factory=list)

class GameCreate(GameBase):
    pass

class Game(GameBase):
    id: int

    class Config:
        from_attributes = True

class GameUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    image_url: Optional[HttpUrl] = None
    genres: Optional[List[GenreEnum]] = None
    platforms: Optional[List[PlatformEnum]] = None