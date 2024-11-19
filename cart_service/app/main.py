from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import cart
from .database import engine
from .models.models import Base  # Ajuste aqui

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ajuste conforme necessário
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(cart.router)