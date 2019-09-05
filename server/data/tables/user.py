from sqlalchemy import Column, String

from server.data.common import Base
from server.data.common.mixin import Mixin


class User(Mixin, Base):
    name = Column(String(1033), nullable=False, unique=True)
