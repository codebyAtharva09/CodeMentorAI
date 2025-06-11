def compute_devscore(report):
    # Handle complexity
    complexity_count = len(report.get("cyclomatic_complexity", []))

    # Handle maintainability safely
    try:
        maintainability = float(report.get("maintainability_index", 100))
    except (TypeError, ValueError):
        maintainability = 100

    # Handle pylint output line count
    pylint_text = report.get("pylint", "")
    if isinstance(pylint_text, str) and "pylint" not in pylint_text.lower():
        pylint_issues = pylint_text.count("\n")
    else:
        pylint_issues = 0

    # Score deductions
    score = 100
    score -= min(complexity_count * 2, 30)            # max 30 pts off
    score -= max(0, 100 - maintainability)            # below 100 loses points
    score -= min(pylint_issues, 30)                   # max 30 pts off

    return max(0, int(score))  # clamp score to 0–100
