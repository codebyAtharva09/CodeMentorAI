from analyzer import analyze_code
from devscore import compute_devscore
import json

report = analyze_code("data/example.py")
report["dev_score"] = compute_devscore(report)

with open("data/code_analysis_report.json", "w") as f:
    json.dump(report, f, indent=2)

print("✅ Analysis complete. DevScore:", report["dev_score"])
