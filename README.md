# Dhananjay Sharma – MERN Portfolio

A full-stack personal portfolio built with **React (Vite)** on the front end and **Node.js / Express** with **MongoDB Atlas** on the back end.

- **Projects** are stored in MongoDB and served by `GET /api/projects` (the site falls back to a saved copy if the API is unreachable).
- **Contact form** saves messages to MongoDB through `POST /api/contact` (validated and rate-limited).
- Sections: Hero, About & Education, Technical Skills, Projects, Contact.

## Live Deployment

| Part | URL |
| --- | --- |
| Frontend (Vercel) | `https://YOUR-SITE.vercel.app` ← replace after deploying |
| Backend API (Render) | `https://YOUR-API.onrender.com/api/health` ← replace after deploying |

> The free Render tier sleeps when idle, so the first request can take ~30–60 seconds.

## Tech Stack

React 18 · Vite · Node.js · Express · MongoDB Atlas · Mongoose · Helmet · CORS · express-rate-limit

## Project Structure

```
portfolio/
├── client/                 # React app (Vite)
│   ├── src/components/     # Navbar, Hero, About, Skills, Projects, Contact, Footer
│   ├── src/data/profile.js # Your personal content – edit this
│   ├── src/api.js          # API helper
│   └── .env.example
├── server/                 # Express API
│   ├── config/db.js
│   ├── models/             # Project, Message
│   ├── routes/             # projects, contact
│   ├── seed/               # seed script + project data
│   ├── server.js
│   └── .env.example
├── .gitignore              # excludes node_modules and .env
└── README.md
```

## Local Setup

**Prerequisites:** Node.js 18+, npm, and a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dj1107/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

2. **Set up the server**
   ```bash
   cd server
   npm install
   cp .env.example .env      # Windows: copy .env.example .env
   ```
   Open `server/.env` and set `MONGODB_URI` to your Atlas connection string.

3. **Seed the database** (loads the projects)
   ```bash
   npm run seed
   ```

4. **Start the API** (http://localhost:5000)
   ```bash
   npm run dev
   ```

5. **Set up and start the client** in a second terminal
   ```bash
   cd client
   npm install
   npm run dev
   ```
   Open http://localhost:5173. In development, Vite proxies `/api` to the server, so no client `.env` is needed.

## Environment Variables

**server/.env**

| Variable | Description |
| --- | --- |
| `PORT` | API port (default 5000) |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `CLIENT_URL` | Allowed frontend origin(s) for CORS, comma separated |

**client/.env** (production only)

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Base URL of the deployed API, e.g. `https://your-api.onrender.com` |

Real `.env` files are git-ignored. Only the `.env.example` templates are committed.

## API Endpoints

| Method | Route | Description |
| --- | --- | --- |
| GET | `/api/health` | Server and database status |
| GET | `/api/projects` | List projects |
| POST | `/api/contact` | Save a message `{ name, email, message }` |

## Deployment

- **Backend → Render:** Web Service, root directory `server`, build `npm install`, start `npm start`. Add `MONGODB_URI` and `CLIENT_URL` as environment variables.
- **Frontend → Vercel:** root directory `client`, framework Vite. Add `VITE_API_URL` as an environment variable.
- **MongoDB Atlas:** Network Access must allow Render's IPs (use `0.0.0.0/0` for a student project).

## Author

**Dhananjay Sharma** – B.Tech CSE (AI/ML), JK Lakshmipat University
[GitHub](https://github.com/Dj1107)
