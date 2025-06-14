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
NOVITA_API_KEY = os.getenv("NOVITA_API_KEY")

if not NOVITA_API_KEY:
    print("❌ NOVITA_API_KEY is not loaded.")
else:
    print("✅ NOVITA_API_KEY loaded successfully.")

def get_novita_feedback(code):
    url = "https://api.novita.ai/v3/openai/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {NOVITA_API_KEY}"
    }
    data = {
        "model": "meta-llama/llama-3.1-8b-instruct", # Using a common model from Novita AI documentation
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant that analyzes code and suggests improvements."
            },
            {
                "role": "user",
                "content": f"Analyze the following Python code and suggest improvements:\n\n{code}"
            }
        ],
        "max_tokens": 512 # Limiting response to avoid excessive length
    }
    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()  # Raise an exception for HTTP errors
        if response.status_code == 200:
            return response.json()["choices"][0]["message"]["content"]
    except Exception as e:
        return f"Error getting feedback: {e}"
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status() # Raise an exception for HTTP errors
        if response.status_code == 200:
            return response.json()["choices"][0]["message"]["content"]
    except requests.exceptions.RequestException as e:
            return f"Error getting feedback: {e}"

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

    # Novita AI feedback
    llm_feedback = get_novita_feedback(code)

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
