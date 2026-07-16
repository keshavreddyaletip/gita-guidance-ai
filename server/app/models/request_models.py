from pydantic import BaseModel


class GuidanceRequest(BaseModel):
    problem: str


class VerseGuidanceRequest(BaseModel):
    chapter: int
    verse: int
    user_context: dict = {}