from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

app = FastAPI(title="Sonoro API")

# Allow Vite dev server (localhost:5173) to call the API
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/v1/health")
def health():
    return {"status": "ok", "service": "sonoro-api"}

# Example future endpoint


@app.get("/api/v1/sounds")
def list_sounds():
    # temporary stub, replace with real DB later
    return [
        {"id": 1, "name": "Rain", "volume": 0.7},
        {"id": 2, "name": "Waves", "volume": 0.5},
    ]
