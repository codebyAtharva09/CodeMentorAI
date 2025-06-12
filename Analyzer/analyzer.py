import subprocess
from radon.complexity import cc_visit
from radon.metrics import mi_visit
from radon.raw import analyze
import json
import os
import requests
from dotenv import load_dotenv
from .devscore import compute_devscore

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    print("❌ GEMINI_API_KEY is not loaded.")
else:
    print("✅ GEMINI_API_KEY loaded successfully.")

def get_gemini_feedback(code):
    url = f"https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key={GEMINI_API_KEY}"
    headers = { "Content-Type": "application/json" }
    prompt = f"Analyze the following Python code and suggest improvements:\n\n{code}"
    payload = {
        "contents": [
            {
                "parts": [
                    { "text": prompt }
                ]
            }
        ]
    }

    response = requests.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        try:
            return response.json()["candidates"][0]["content"]["parts"][0]["text"]
        except Exception as e:
            return f"Error parsing Gemini response: {e}"
    else:
        return f"Gemini API error: {response.status_code} - {response.text}"

def analyze_code(file_path):
    with open(file_path, "r") as f:
        code = f.read()

    # Metrics
    complexity = cc_visit(code)
    mi_score = mi_visit(code, True)
    raw_metrics = analyze(code)

    # Pylint (Ensure pylint is installed and in PATH)
    try:
        pylint_output = subprocess.getoutput(f"pylint {file_path} --disable=all --enable=E,W,C,R")
    except Exception as e:
        pylint_output = f"Error running pylint: {e}"

    # Gemini feedback
    llm_feedback = get_gemini_feedback(code)

    # DevScore
    report = {
        "file": file_path,
        "cyclomatic_complexity": [str(c) for c in complexity],
        "maintainability_index": mi_score,
        "raw_metrics": raw_metrics._asdict(),
        "pylint": pylint_output,
        "llm_feedback": llm_feedback,
    }

    # Compute DevScore
    dev_score = compute_devscore(report)
    report["dev_score"] = dev_score

    # Add generic summary if none
    report["summary"] = (
        "The code was analyzed based on complexity, style, and maintainability. "
        f"It received a DevScore of {dev_score}. Further recommendations are based on raw metrics and pylint issues."
    )

    # Add basic improvement areas if desired by coach
    report["improvement_areas"] = [
        {
            "category": "Documentation",
            "issue": "No comments or docstrings found.",
            "suggestion": "Add inline comments and docstrings for better clarity."
        }
    ] if dev_score < 95 else []

    # Save the report for coaching agent
    with open("data/structured_code_report.json", "w") as f:
        json.dump(report, f, indent=2)

    return report
