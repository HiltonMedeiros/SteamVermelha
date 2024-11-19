from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import auth
from .database import Base, engine

Base.metadata.create_all(bind=engine)  # Cria as tabelas no banco de dados

app = FastAPI()

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir todas as origens. Ajuste conforme necessário.
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos os métodos HTTP
    allow_headers=["*"],  # Permitir todos os cabeçalhos
)

app.include_router(auth.router)