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
- Built with React + FastAPI

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
- CSS modules or Tailwind (depends on your choice)

### **Backend**

- FastAPI
- Python 3.10+
- PostgreSQL (prod), SQLite (dev)
- Uvicorn
- CORS configured for local dev

---

## **Project Structure**

```
sonoro/
  frontend/           # React application
  backend/            # FastAPI application
  docs/               # Notes, design docs, API specs
  README.md
  .gitignore
```

---

## **Development Setup**

### **Prerequisites**

- Node.js + pnpm
- Python 3.10+
- Fish or Bash shell
- (Optional) Docker for database

---

## **Running the Frontend**

```bash
cd frontend
pnpm install
pnpm dev
```

The app will be available at:
**[http://localhost:5173](http://localhost:5173)**

---

## **Running the Backend**

```bash
cd backend
python -m venv .venv
source .venv/bin/activate.fish   # or activate for your shell
pip install "fastapi[standard]" uvicorn
uvicorn app.main:app --reload --port 8000
```

API available at:
**[http://localhost:8000](http://localhost:8000)**

Example endpoint:
`GET /api/v1/sounds`

---

## **API Overview**

| Endpoint                           | Method | Description                   |
| ---------------------------------- | ------ | ----------------------------- |
| `/api/v1/health`                   | GET    | API health check              |
| `/api/v1/sounds`                   | GET    | List available ambient sounds |
| `/api/v1/mixes/public`             | GET    | Public preset mixes           |
| _(future)_ `/api/v1/auth/login`    | POST   | User login                    |
| _(future)_ `/api/v1/auth/register` | POST   | User registration             |
| _(future)_ `/api/v1/mixes/me`      | GET    | User’s custom mixes           |

A full OpenAPI schema is available at:
**[http://localhost:8000/docs](http://localhost:8000/docs)**

---

## **Screenshots**

_(Coming soon)_

---

## **Roadmap**

- [ ] Implement sound library UI
- [ ] Add volume controls & global mixer
- [ ] Add preset mixes
- [ ] Add focus timer
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

MIT License — free to use and modify.
