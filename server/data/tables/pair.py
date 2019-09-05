from sqlalchemy import Column, String, ForeignKey, Integer

from server.data.common import Base
from server.data.common.mixin import Mixin


class Pair(Mixin, Base):
    key = Column(String(1033), nullable=False)
    value = Column(String(1033))
    user_id = Column(Integer, ForeignKey('user.id'))