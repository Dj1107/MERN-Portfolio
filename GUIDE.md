# Step-by-Step Guide: From This Folder to Submission

Follow these in order. Total time: about 45–60 minutes.
(This file is for you – you can delete it before pushing, or keep it.)

---

## Step 0 – What the assignment requires

Your repo must have:
1. `/client` (React) and `/server` (Node/Express) folders ✅ already done
2. `README.md` with project description, **live deployment link**, and local setup steps ✅ done (you add the live links in Step 7)
3. All dependencies in the `package.json` files ✅ done
4. `.gitignore` excluding `node_modules` and `.env` ✅ done

**Biggest risk:** pushing `.env` or a MongoDB URI = marks deducted. Steps 2 and 5 protect you.

---

## Step 1 – Install the tools

- Node.js 18+ → https://nodejs.org (check: `node -v`)
- Git → https://git-scm.com (check: `git --version`)
- A GitHub account (you have `Dj1107`)

## Step 2 – Personalize the content

1. Unzip the project. Open it in VS Code.
2. Edit **`client/src/data/profile.js`**:
   - Replace `linkedin` with your real LinkedIn URL.
   - Check the text is exactly how you want it. (Your phone number is intentionally left off, since the repo is public.)
3. Repo links are already filled in from your resume.

## Step 3 – Create a free MongoDB Atlas database

1. Go to https://www.mongodb.com/atlas and sign up.
2. Create a **free (M0)** cluster.
3. **Database Access** → Add Database User → choose a username and a password (avoid special characters like `@` or `/`). Save them.
4. **Network Access** → Add IP Address → **Allow access from anywhere** (`0.0.0.0/0`). Needed so Render can connect later.
5. **Database → Connect → Drivers** → copy the connection string. It looks like:
   `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
6. Insert your password and add the database name `portfolio` before the `?`:
   `mongodb+srv://myuser:mypass@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`

## Step 4 – Run it locally

Open a terminal in the project folder:

```bash
cd server
npm install
cp .env.example .env        # Windows CMD: copy .env.example .env
```

Open `server/.env` and paste your connection string into `MONGODB_URI`. Then:

```bash
npm run seed                # should print: Seeded 5 projects.
npm run dev                 # should print: MongoDB connected / Server running on port 5000
```

New terminal:

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173 and check:
- [ ] All sections show; Projects load (5 cards, with highlights = coming from MongoDB)
- [ ] Submit the contact form → green success message
- [ ] In Atlas → Browse Collections → `portfolio.messages` contains your test message

## Step 5 – Create the GitHub repo SAFELY

1. On GitHub: **New repository** → name e.g. `mern-portfolio` → **Public** → do NOT add README/.gitignore (we have them).
2. In the project root (the folder containing `client` and `server`):

```bash
git init
git add .
git status
```

3. **Safety check – read the `git status` list.** You must NOT see `.env` or `node_modules`. You *should* see `.env.example`. Double-check:

```bash
git ls-files | grep -i "\.env"        # should list only .env.example files
```

(Windows PowerShell: `git ls-files | Select-String "\.env"`)

4. Commit and push:

```bash
git commit -m "Initial commit: MERN portfolio"
git branch -M main
git remote add origin https://github.com/Dj1107/mern-portfolio.git
git push -u origin main
```

> **If you ever pushed `.env` by mistake:** deleting it later is not enough. Go to Atlas → Database Access and change that user's password immediately, then remove the file with `git rm --cached server/.env` and push.

## Step 6 – Deploy

### 6a. Backend on Render (do this first)
1. https://render.com → sign in with GitHub → **New → Web Service** → pick your repo.
2. Settings:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Instance type: Free
3. **Environment Variables:**
   - `MONGODB_URI` = your Atlas string
   - `CLIENT_URL` = `http://localhost:5173` for now (we update it in 6c)
4. Deploy. When live, open `https://YOUR-API.onrender.com/api/health` → should show `"database":"connected"`.

### 6b. Frontend on Vercel
1. https://vercel.com → sign in with GitHub → **Add New → Project** → pick the repo.
2. Settings:
   - Root Directory: `client`
   - Framework Preset: Vite (auto-detected)
3. **Environment Variable:** `VITE_API_URL` = `https://YOUR-API.onrender.com` (no trailing slash).
4. Deploy. You get `https://YOUR-SITE.vercel.app`.

### 6c. Connect them (CORS)
Back in Render → Environment → set `CLIENT_URL` to `https://YOUR-SITE.vercel.app` (no trailing slash) → save (it redeploys).

Test the live site: projects load and the contact form works.

## Step 7 – Add live links to the README and finalize

1. Edit `README.md` → replace the two `YOUR-...` URLs in the **Live Deployment** table, and `YOUR-REPO-NAME` in the clone command.
2. Push:

```bash
git add README.md
git commit -m "Add live deployment links"
git push
```

## Step 8 – Final checklist, then submit

- [ ] Repo is **Public**
- [ ] `/client` and `/server` folders at the repo root
- [ ] README has description, live link, local setup steps
- [ ] `package.json` in both folders
- [ ] `.gitignore` present; `.env` NOT visible on GitHub (open `server/` on github.com and look)
- [ ] No MongoDB URI / password anywhere in the code (search GitHub repo for `mongodb+srv` – only placeholder examples such as the one in `.env.example` (and this guide, if you keep it) should match, never your real password)
- [ ] Live site works in an incognito window

**Submit:** paste your GitHub repo link (`https://github.com/Dj1107/mern-portfolio`) in **Google Classroom** before the deadline.

---

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `MongoDB connection failed` / auth error | Wrong password, or special characters in it – reset the DB user's password with letters/numbers only |
| `connection timed out` | Atlas Network Access doesn't allow your IP – add `0.0.0.0/0` |
| Live site shows "Showing saved copy" notice | API asleep (wait 60s and refresh), wrong `VITE_API_URL`, or `CLIENT_URL` mismatch (CORS) |
| Contact form errors on live site only | Same: check `CLIENT_URL` on Render exactly matches the Vercel URL, no trailing slash |
| Changed `VITE_API_URL` but nothing changed | Vite bakes env vars in at build time – redeploy on Vercel |
| Projects not from DB locally | Did you run `npm run seed`? |

## Making it your own (optional, for extra marks)
- Add a profile photo to `client/public/` and show it in `Hero.jsx`.
- Add a resume PDF to `client/public/` and a "Download resume" button.
- Add screenshots of your projects to each card.
- Add live demo links via `liveUrl` in `seed/projects.js`, then re-run `npm run seed`.
