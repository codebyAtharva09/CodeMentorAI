from fastapi import APIRouter, UploadFile, File, HTTPException
from Analyzer.analyzer import analyze_code
import shutil
import os
import json
from datetime import datetime

analyzer_router = APIRouter()

def save_progress(report):
    progress_file = "data/user_progress.json"
    try:
        if os.path.exists(progress_file):
            with open(progress_file, "r") as f:
                progress = json.load(f)
        else:
            progress = []

        # Add new entry with timestamp
        progress.append({
            "timestamp": datetime.now().isoformat(),
            "dev_score": report.get("dev_score", 0),
            "code_quality": report.get("maintainability_index", 0),
            "complexity": len(report.get("cyclomatic_complexity", [])),
        })

        # Save updated progress
        with open(progress_file, "w") as f:
            json.dump(progress, f, indent=2)

    except Exception as e:
        print(f"Error saving progress: {e}")

@analyzer_router.post("/analyze")
async def analyze_file(file: UploadFile = File(...)):
    os.makedirs("data", exist_ok=True)

    temp_path = f"data/{file.filename}"
    with open(temp_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    report = analyze_code(temp_path)
    
    # Save progress for leaderboard
    save_progress(report)

    output_path = "data/structured_code_report.json"
    with open(output_path, "w") as f:
        json.dump(report, f, indent=2)

    return report

@analyzer_router.get("/progress")
async def get_progress():
    progress_file = "data/user_progress.json"
    try:
        if not os.path.exists(progress_file):
            return {"progress": []}
            
        with open(progress_file, "r") as f:
            progress = json.load(f)
        return {"progress": progress}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching progress: {str(e)}")
