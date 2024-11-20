from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
import requests

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="http://localhost:8001/token")

AUTH_SERVICE_URL = "http://localhost:8001"  # Certifique-se de que este é o URL correto do auth_service

def get_current_user(token: str = Depends(oauth2_scheme)):
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token não fornecido",
            headers={"WWW-Authenticate": "Bearer"},
        )
    response = requests.get(
        f"{AUTH_SERVICE_URL}/verify-token",
        headers={"Authorization": f"Bearer {token}"}
    )
    if response.status_code == 200:
        return response.json()
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido",
            headers={"WWW-Authenticate": "Bearer"},
        )