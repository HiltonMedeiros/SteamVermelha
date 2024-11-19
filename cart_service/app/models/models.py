from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from ..database import Base

class CartItem(Base):
    __tablename__ = "cart_items"

    id = Column(Integer, primary_key=True, index=True)
    game_id = Column(Integer, index=True)
    title = Column(String, index=True)
    price = Column(Float)
    quantity = Column(Integer, default=1)