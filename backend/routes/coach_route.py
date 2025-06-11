from fastapi import APIRouter, HTTPException
from coach.coach_agent import generate_coaching_report

coach_router = APIRouter()

@coach_router.get("/generate")
def get_coaching_report():
    try:
        message = generate_coaching_report("data/structured_code_report.json")
        return {"coaching_report": message}
    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except (ValueError, KeyError) as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
