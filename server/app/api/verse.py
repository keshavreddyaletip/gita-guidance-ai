from fastapi import APIRouter

from app.models.request_models import VerseGuidanceRequest
from app.services.verse_service import explain_verse

router = APIRouter()


@router.post("/verse-guidance")
def verse_guidance(request: VerseGuidanceRequest):

    return explain_verse(request.chapter, request.verse)