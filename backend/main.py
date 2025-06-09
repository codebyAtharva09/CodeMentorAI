from fastapi import FastAPI, UploadFile, File
from .routes.analyzer_route import analyzer_router
from .routes.coach_route import coach_router

app = FastAPI(title="CodeMentor AI API")

# Register routes
app.include_router(analyzer_router, prefix="/analyzer")
app.include_router(coach_router, prefix="/coach")

@app.get("/")
def read_root():
    return {"message": "CodeMentor AI backend is running "}