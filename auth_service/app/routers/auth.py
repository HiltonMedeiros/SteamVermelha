from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm

from app import models

from .. import schemas, crud, auth
from ..database import get_db
from passlib.hash import bcrypt

router = APIRouter()

@router.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Usuário já existe")
    return crud.create_user(db=db, user=user)

@router.post("/token", response_model=schemas.Token)
def login_for_access_token(
    db: Session = Depends(get_db), 
    form_data: OAuth2PasswordRequestForm = Depends()
):
    user = crud.get_user_by_username(db, username=form_data.username)
    if not user or not bcrypt.verify(form_data.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Credenciais incorretas")
    access_token = auth.create_access_token(data={"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/verify-token")
def verify_token(current_user: models.User = Depends(auth.get_current_user)):
    return {"username": current_user.username, "is_admin": current_user.is_admin}