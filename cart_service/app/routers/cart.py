from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.crud import crud
from app.models import models
from app.schemas import schemas
from ..database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/cart", response_model=List[schemas.CartItem])
def read_cart_items(db: Session = Depends(get_db)):
    return crud.get_cart_items(db)

@router.post("/cart", response_model=schemas.CartItem)
def add_cart_item(cart_item: schemas.CartItemCreate, db: Session = Depends(get_db)):
    return crud.create_cart_item(db, cart_item)

@router.delete("/cart/{cart_item_id}", response_model=schemas.CartItem)
def remove_cart_item(cart_item_id: int, db: Session = Depends(get_db)):
    db_cart_item = crud.delete_cart_item(db, cart_item_id)
    if db_cart_item is None:
        raise HTTPException(status_code=404, detail="Cart item not found")
    return db_cart_item