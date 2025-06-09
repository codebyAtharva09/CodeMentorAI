import subprocess
from radon.complexity import cc_visit
from radon.metrics import mi_visit
from radon.raw import analyze
import json
import os
import requests
from dotenv import load_dotenv

# Load Gemini API key from .env
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

def get_gemini_feedback(code):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={GEMINI_API_KEY}"
    headers = {
        "Content-Type": "application/json"
    }
    prompt = f"Analyze the following Python code and suggest improvements:\n\n{code}"
    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": prompt
                    }
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

    # Static analysis
    complexity = cc_visit(code)
    mi_score = mi_visit(code, True)
    raw_metrics = analyze(code)

    # Linting
    pylint_output = subprocess.getoutput(f"pylint {file_path} --disable=all --enable=E,W,C,R")

    # Gemini Feedback
    llm_feedback = get_gemini_feedback(code)

    return {
        "file": file_path,
        "cyclomatic_complexity": [str(c) for c in complexity],
        "maintainability_index": mi_score,
        "raw_metrics": raw_metrics._asdict(),
        "pylint": pylint_output,
        "llm_feedback": llm_feedback
    }
