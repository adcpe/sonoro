# **Sonoro**

Sonoro is an ambient sound mixer designed to help users focus, relax, or sleep.
It allows playing multiple ambient tracks at once, adjusting individual volumes, and using a built-in focus timer.
Sonoro aims to be clean, fast, and fully open-source.

---

## **Features**

### **Core**

- Play multiple ambient sounds simultaneously
- Individual volume sliders
- Global play/pause
- Curated preset mixes (e.g., _Rainy Café_, _Deep Focus_)
- Responsive UI for desktop and mobile
- Full-stack app: React frontend + FastAPI backend

### **Planned**

- User accounts & authentication
- Save custom mixes
- Dark mode
- More ambient sounds & categories
- Offline support for cached audio
- Keyboard shortcuts
- Export/import user mixes

---

## **Tech Stack**

### **Frontend**

- React (JavaScript, Hooks)
- Vite + SWC
- Context API for global audio state
- HTML5 Audio / Web Audio API
- CSS modules or Tailwind (TBD)

### **Backend**

- FastAPI
- Python 3.10+
- Uvicorn
- Postgres (via Docker, for development and later production)

### **Dev & Infrastructure**

- Docker + docker-compose (backend + Postgres)
- pnpm for frontend dependency management

---

## **Project Structure**

```txt
sonoro/
  frontend/           # React application
  backend/            # FastAPI application
    app/
    Dockerfile
    requirements.txt
  docs/               # Notes, design docs, API specs
  docker-compose.yml  # Backend + Postgres dev stack
  README.md
  .gitignore
  LICENSE
```

---

## **Prerequisites**

- Node.js + pnpm
- Python 3.10+ (for local backend dev if you don’t use Docker)
- Docker
- docker-compose

You can either:

- Run the backend directly with Python, or
- Use Docker/docker-compose (recommended for development).

---

## **Running the Backend (Docker, recommended)**

From the project root:

```bash
docker-compose up --build
```

This will start:

- `sonoro-backend`: FastAPI app on `http://localhost:8000`
- `sonoro-db`: Postgres database on `localhost:5432` (ready for use)

The backend is available at:

- `http://localhost:8000/api/v1/health`
- `http://localhost:8000/api/v1/sounds`

To stop:

```bash
# same terminal
Ctrl+C

# to remove containers (but keep DB data volume)
docker-compose down
```

Because the backend code is mounted into the container, code changes under `backend/app` are reloaded automatically.

---

## **Running the Backend (without Docker, optional)**

If you prefer to run the backend directly:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # or activate.fish, etc.
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The API will still be available at `http://localhost:8000`.

---

## **Running the Frontend**

In another terminal:

```bash
cd frontend
pnpm install   # first time only
pnpm dev
```

The app will be available at:
**[http://localhost:5173](http://localhost:5173)**

The frontend expects the backend at `http://localhost:8000` (whether via Docker or direct Uvicorn).

---

## **API Overview**

| Endpoint                           | Method | Description         |
| ---------------------------------- | ------ | ------------------- |
| `/api/v1/health`                   | GET    | API health check    |
| `/api/v1/sounds`                   | GET    | List ambient sounds |
| `/api/v1/mixes/public`             | GET    | Public preset mixes |
| _(future)_ `/api/v1/auth/login`    | POST   | User login          |
| _(future)_ `/api/v1/auth/register` | POST   | User registration   |
| _(future)_ `/api/v1/mixes/me`      | GET    | User’s custom mixes |

Interactive API docs (OpenAPI) at:
**[http://localhost:8000/docs](http://localhost:8000/docs)**

---

## **Screenshots**

_(To be added once the UI is implemented.)_

---

## **Roadmap**

- [ ] Implement sound library UI
- [ ] Add volume controls & global mixer
- [ ] Add preset mixes
- [ ] Add focus timer
- [ ] Connect backend to Postgres
- [ ] Add user authentication
- [ ] Add custom mix creation & saving
- [ ] Polish UI & animations
- [ ] Deploy frontend + backend
- [ ] Publish demo video / product page

---

## **Contributing**

Sonoro is a personal/portfolio project, but suggestions and pull requests are welcome.
Feel free to open an issue for ideas or improvements.

---

## **License**

MIT License — see [`LICENSE`](./LICENSE).
