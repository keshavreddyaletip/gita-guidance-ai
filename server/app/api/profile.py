from fastapi import APIRouter, HTTPException

from app.services.profile_service import ProfileService

router = APIRouter(
    prefix="/profile",
    tags=["Profile"]
)


@router.get("/{uid}")
def get_profile(uid: str):

    profile = ProfileService.get_profile(uid)

    if profile is None:

        raise HTTPException(
            status_code=404,
            detail="Profile not found"
        )

    return profile


@router.put("/{uid}")
def update_profile(uid: str, data: dict):

    ProfileService.update_profile(uid, data)

    return {
        "message": "Profile updated successfully"
    }