def compute_devscore(report):
    complexity_count = len(report["cyclomatic_complexity"])
    maintainability = report["maintainability_index"]
    pylint_issues = report["pylint"].count("\n")

    score = 100
    score -= min(complexity_count * 2, 30)  # 2 points per complex block
    score -= max(0, 100 - maintainability)  # lose points below 100
    score -= min(pylint_issues, 30)         # up to 30 points lost

    return max(0, int(score))
