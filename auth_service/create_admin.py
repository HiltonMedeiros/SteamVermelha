from app import models, database
from passlib.hash import bcrypt

# Crie uma sessão de banco de dados
db = database.SessionLocal()

# Crie um usuário administrador
admin_user = models.User(
    username="admin",
    hashed_password=bcrypt.hash("adminpassword"),  # Substitua por uma senha segura
    is_admin=True
)

# Adicione o usuário ao banco de dados
db.add(admin_user)
db.commit()
db.close()