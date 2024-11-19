from pydantic import BaseModel

class CartItemBase(BaseModel):
    game_id: int
    title: str
    price: float
    quantity: int

class CartItemCreate(CartItemBase):
    pass

class CartItem(CartItemBase):
    id: int

    class Config:
        from_attributes = True