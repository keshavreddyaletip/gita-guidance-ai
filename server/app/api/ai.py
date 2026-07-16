from fastapi import APIRouter

from app.schemas.ai_schema import AIRequest

from app.services.ai_service import AIService

router = APIRouter(

    prefix="/ai",

    tags=["AI"]

)

service = AIService()


@router.post("/guidance")
def generate_guidance(request: AIRequest):

    return service.generate(

        uid=request.uid,

        chapter=request.chapter,

        verse=request.verse,

        problem=request.problem

    )