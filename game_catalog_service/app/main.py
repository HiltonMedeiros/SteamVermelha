from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from .routers import games

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()

# Adicione o middleware de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Você pode especificar os domínios permitidos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(games.router)