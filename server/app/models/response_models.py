from pydantic import BaseModel


class GuidanceResponse(BaseModel):
    sloka: str
    meaning: str
    moral: str
    personalized_guidance: str
    reason: str


class VerseGuidanceResponse(BaseModel):
    sloka: str
    meaning: str
    moral: str
    explanation: str
    personalized_guidance: str