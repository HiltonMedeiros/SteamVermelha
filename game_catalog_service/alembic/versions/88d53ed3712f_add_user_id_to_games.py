"""add user id to games

Revision ID: 88d53ed3712f
Revises: f24babceb271
Create Date: 2024-11-19 22:12:11.887594

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '88d53ed3712f'
down_revision: Union[str, None] = 'f24babceb271'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    with op.batch_alter_table('games', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(
            'fk_games_user_id_users',  # Nome da constraint
            'users',
            ['user_id'],
            ['id']
        )


def downgrade() -> None:
    with op.batch_alter_table('games', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('user_id')