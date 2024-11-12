from pydantic import BaseModel

class GameBase(BaseModel):
    title: str
    description: str
    price: float
    genre: str
    platform: str

class GameCreate(GameBase):
    pass

class Game(GameBase):
    id: int

    class Config:
        from_attributes = True