from fastapi import FastAPI, UploadFile, File
from .routes.analyzer_route import analyzer_router
from .routes.coach_route import coach_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="CodeMentor AI API")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # ONLY your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(analyzer_router, prefix="/analyzer")
app.include_router(coach_router, prefix="/coach")

@app.get("/")
def read_root():
    return {"message": "CodeMentor AI backend is running "}