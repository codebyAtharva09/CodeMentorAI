from fastapi import APIRouter, UploadFile
from Analyzer.analyzer import analyze_code
from Analyzer.devscore import compute_devscore
import shutil
import os
import json

analyzer_router = APIRouter()

@analyzer_router.post("/analyze")
async def analyze_file(file: UploadFile):
    os.makedirs("data", exist_ok=True)  # Ensure the data directory exists
    temp_path = f"data/{file.filename}"
    with open(temp_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    report = analyze_code(temp_path)
    report["dev_score"] = compute_devscore(report)

    output_path = "data/structured_code_report.json"
    with open(output_path, "w") as f:
        json.dump(report, f, indent=2)

    return {"message": "Analysis complete", "dev_score": report["dev_score"]}
