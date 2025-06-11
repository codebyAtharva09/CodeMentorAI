import json
import os

def generate_coaching_report(input_file="data/structured_code_report.json"):
    if not os.path.exists(input_file):
        raise FileNotFoundError("Structured report JSON not found.")

    with open(input_file, "r") as f:
        try:
            report = json.load(f)
        except json.JSONDecodeError:
            raise ValueError("Invalid JSON content in structured_code_report.json")

    if "dev_score" not in report or "improvement_areas" not in report:
        raise KeyError("Missing required fields in the structured report.")

    score = report["dev_score"]
    areas = report["improvement_areas"]

    # Summary
    message = f"👋 Based on your recent code analysis ({report.get('file', 'unknown')}), your DevScore is {score}/100.\n"
    message += report.get("summary", "No summary available.") + "\n\n"

    # Generate learning goals
    message += "📌 **Areas for Improvement**:\n"
    for area in areas:
        message += f"- **{area['category']}**: {area['issue']}\n"
        message += f"  👉 _Suggestion_: {area['suggestion']}\n"

    # Personalized challenges
    message += "\n🎯 **Recommended Challenges**:\n"
    challenges = []

    for area in areas:
        if "error handling" in area["issue"].lower():
            challenges.append("Write a function that reads a file and handles missing file errors gracefully.")
        elif "performance" in area["category"].lower():
            challenges.append("Optimize a loop to reduce time complexity.")
        elif "lint" in area["category"].lower():
            challenges.append("Refactor code to pass all Pylint checks.")

    if not challenges:
        challenges.append("Refactor a basic calculator app to improve readability and maintainability.")

    for i, c in enumerate(challenges[:3]):
        message += f"- Challenge {i+1}: {c}\n"

    return message
