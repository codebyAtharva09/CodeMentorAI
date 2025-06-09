from fastapi import APIRouter
from coach.coach_agent import generate_coaching_report

coach_router = APIRouter()

@coach_router.get("/generate")
def get_coaching_report():
    message = generate_coaching_report("data/structured_code_report.json")
    return {"coaching_report": message}
