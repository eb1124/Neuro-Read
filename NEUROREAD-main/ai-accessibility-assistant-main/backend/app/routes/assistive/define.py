from fastapi import APIRouter
from pydantic import BaseModel
import json
from app.services.llm_client import get_groq_client

router = APIRouter()

def _client():
    return get_groq_client()


class WordRequest(BaseModel):
    word: str
    level: str = "easy"


@router.post("/define")
async def define_word(req: WordRequest):
    prompt = f"""
    Explain the word in a simple way.

    Return JSON ONLY in this format:
    {{
      "meaning": "...",
      "example": "...",
      "pronunciation": "..."
    }}

    Keep language simple based on level: {req.level}

    Word: {req.word}
    """

    try:
        completion = _client().chat.completions.create(
            model="llama-3.3-70b-versatile",   # ✅ FIXED MODEL
            messages=[{"role": "user", "content": prompt}],
            temperature=0.3,
        )

        text = completion.choices[0].message.content

        try:
            parsed = json.loads(text)
        except Exception:
            parsed = {
                "meaning": text,
                "example": "",
                "pronunciation": ""
            }

        return {
            "success": True,
            "data": parsed
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }


@router.post("/assistive/define")
async def define_word_assistive(req: WordRequest):
    return await define_word(req)