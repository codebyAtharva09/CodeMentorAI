from fastapi import FastAPI, UploadFile, File
from .routes.analyzer_route import analyzer_router
from .routes.coach_route import coach_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="CodeMentor AI API")

# CORS middleware
origins = [
    "https://code-mentor-ai-ten.vercel.app", # Your Vercel frontend URL
    "http://localhost:5173", # For local development if you use Vite's default port
    "http://localhost:3000", # For local development if you use React's default port
    # Add any other origins your frontend might be deployed on
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
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
