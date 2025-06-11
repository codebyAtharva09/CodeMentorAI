from fastapi import APIRouter, UploadFile, File
from Analyzer.analyzer import analyze_code
import shutil
import os
import json

analyzer_router = APIRouter()

@analyzer_router.post("/analyze")
async def analyze_file(file: UploadFile = File(...)):
    os.makedirs("data", exist_ok=True)  # Ensure the data directory exists

    # Save uploaded file to temporary location
    temp_path = f"data/{file.filename}"
    with open(temp_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    # Analyze the file (includes metrics + feedback + devscore)
    report = analyze_code(temp_path)

    # Save final report
    output_path = "data/structured_code_report.json"
    with open(output_path, "w") as f:
        json.dump(report, f, indent=2)

    # Return full report to frontend
    return report
