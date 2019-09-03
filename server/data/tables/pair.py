from sqlalchemy import Column, String

from server.data.common import Base
from server.data.common.mixin import Mixin


class Pair(Mixin, Base):
    key = Column(String(1033), nullable=False, unique=True)
    value = Column(String(1033))
