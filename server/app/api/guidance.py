from fastapi import APIRouter
from pydantic import BaseModel

from app.services.guidance_service import GuidanceService

router = APIRouter()


class GuidanceRequest(BaseModel):
    problem: str


@router.post("/guidance")
async def get_guidance(request: GuidanceRequest):

    result = GuidanceService.generate(request.problem)

    return result