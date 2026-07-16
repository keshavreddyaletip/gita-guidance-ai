from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.guidance import router as guidance_router
from app.api.verse import router as verse_router

from app.api.chapters import router as chapters_router

from app.api.profile import router as profile_router
from app.api.ai import router as ai_router

app = FastAPI(title="GitaMitra API")
app.include_router(profile_router)
app.include_router(ai_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(guidance_router)
app.include_router(verse_router)
app.include_router(chapters_router)


@app.get("/")
def root():
    return {"message": "GitaMitra Backend Running Successfully 🚀"}