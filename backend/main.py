import sys
import uvicorn


def main():
    # Windows consoles default to a legacy codepage (e.g. cp1252) that can't encode
    # arbitrary Unicode from LLM responses. A failed debug print() inside a service's
    # try/except would otherwise be mistaken for an LLM call failure.
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, "reconfigure"):
            stream.reconfigure(encoding="utf-8", errors="replace")

    # Run from backend/ with: python main.py
    uvicorn.run(
        "app.main:app",
        host="127.0.0.1",
        port=8001,
        reload=False,
        log_level="info",
    )


if __name__ == "__main__":
    main()

