import json

def generate_coaching_report(input_file="data/structured_code_report.json"):
    with open(input_file, "r") as f:
        report = json.load(f)

    score = report["dev_score"]
    areas = report["improvement_areas"]

    # Summary
    message = f"👋 Based on your recent code analysis ({report['file']}), your DevScore is {score}/100.\n"
    message += report["summary"] + "\n\n"

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

# Example usage
if __name__ == "__main__":
    report = generate_coaching_report()
    print(report)
