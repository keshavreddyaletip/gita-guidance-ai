from pydantic import BaseModel


class AIRequest(BaseModel):
    uid: str
    chapter: int
    verse: int
    problem: str


class AIResponse(BaseModel):
    story: str
    deepMeaning: str
    guidance: str
    reflection: str
    todayAction: str
    recommendedVerse: dict