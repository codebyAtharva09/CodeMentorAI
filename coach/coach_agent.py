import json
import os

def generate_coaching_report(input_file="data/structured_code_report.json"):
    if not os.path.exists(input_file):
        raise FileNotFoundError("❌ structured_code_report.json not found.")

    try:
        with open(input_file, "r") as f:
            report = json.load(f)
    except json.JSONDecodeError as e:
        raise ValueError("❌ Invalid JSON in structured_code_report.json") from e

    score = report.get("dev_score")
    areas = report.get("improvement_areas", [])
    summary = report.get("summary", "⚠️ No summary available.")
    filename = report.get("file", "your code")

    # Basic validation
    if score is None:
        raise KeyError("❌ 'dev_score' missing in report.")

    # Start message
    message = f"👋 Based on your recent code analysis ({filename}), your DevScore is **{score}/100**.\n"
    message += summary + "\n\n"

    # Areas for improvement
    message += "📌 **Areas for Improvement**:\n"
    if areas:
        for area in areas:
            category = area.get("category", "Unknown")
            issue = area.get("issue", "No issue described.")
            suggestion = area.get("suggestion", "No suggestion provided.")
            message += f"- **{category}**: {issue}\n"
            message += f"  👉 _Suggestion_: {suggestion}\n"
    else:
        message += "- No specific issues detected. Great job! 🎉\n"

    # Personalized Challenges
    message += "\n🎯 **Recommended Challenges**:\n"
    challenges = []

    for area in areas:
        issue_text = area.get("issue", "").lower()
        category_text = area.get("category", "").lower()

        if "error handling" in issue_text:
            challenges.append("Write a function that reads a file and handles missing file errors gracefully.")
        elif "performance" in category_text:
            challenges.append("Optimize a loop to reduce time complexity.")
        elif "lint" in category_text:
            challenges.append("Refactor code to pass all Pylint checks.")

    if not challenges:
        challenges.append("Refactor a basic calculator app to improve readability and maintainability.")

    for i, challenge in enumerate(challenges[:3]):
        message += f"- Challenge {i + 1}: {challenge}\n"

    return message
