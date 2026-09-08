BACK TO TOPBack to Top		

# Suruchi's Birthday Card 🌸

A tiny interactive React site (envelope → cake → letter) built with Vite + Framer Motion.
Everything below assumes you're starting from this folder in VS Code, on a machine with
Node.js not yet confirmed installed.

---

## 0. One-time setup checks

Open a terminal in VS Code (``Ctrl+` `` / ``Cmd+` ``) and check you have Node and npm:

```bash
node -v
npm -v
```

If either command fails, install Node.js (which includes npm) from https://nodejs.org
(get the LTS version), then re-run the checks above.

Also make sure Git is installed:

```bash
git --version
```

If missing, install from https://git-scm.com.

---

## 1. Install dependencies

From inside this project folder (`suruchi-birthday/`):

```bash
npm install
```

This reads `package.json` and installs React, Vite, Framer Motion, and `gh-pages`
(used later for deployment) into a `node_modules` folder.

> If you were starting completely from scratch instead of using this folder, the
> equivalent first command would have been `npm create vite@latest suruchi-birthday -- --template react`,
> then `cd suruchi-birthday`, then `npm install framer-motion` and `npm install -D gh-pages`.
> That's already been done for you here — this folder is the result.

---

## 2. Run it locally

```bash
npm run dev
```

Terminal will print a local URL, usually `http://localhost:5173`. Open that in Chrome.
To preview it as it'll look on a phone, open DevTools (`F12`) → toggle device toolbar
(`Ctrl+Shift+M` / `Cmd+Shift+M`) → pick an iPhone/Android preset.

Leave this running while you edit — changes save-and-refresh automatically (hot reload).
Stop it anytime with `Ctrl+C` in the terminal.

---

## 3. Personalize it

Open `src/config.js` — that's the only file you need to touch:

```js
export const CONFIG = {
  name: "Suruchi",
  age: 45,
  from: "Shlok",
  message: [ "...", "...", "..." ],
};
```

Edit the strings, save, and the running dev server updates instantly.

---

## 4. Build the production version

When you're happy with it:

```bash
npm run build
```

This compiles everything into a `dist/` folder — plain static HTML/CSS/JS, no server
needed. You can sanity-check it locally with:

```bash
npm run preview
```

---

## 5. Push the project to GitHub

Create a new empty repository on GitHub first (github.com → New repository →
name it `suruchi-birthday` → don't initialize with a README, since you already have one →
Create repository).

Back in the terminal, from this project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/suruchi-birthday.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username. This pushes your **source
code** (not the build) to the `main` branch — that's normal, the build happens
separately in the next step.

> Note: `vite.config.js` already has `base: "/suruchi-birthday/"` set. If you name
> your GitHub repo something other than `suruchi-birthday`, update that line to match
> exactly, or the deployed site will load with broken CSS/JS.

---

## 6. Deploy to GitHub Pages

The `gh-pages` package (already installed in step 1) automates this. Just run:

```bash
npm run deploy
```

This runs `npm run build` automatically (via `predeploy`), then pushes the contents
of `dist/` to a new branch called `gh-pages` on your GitHub repo.

Then, on github.com (in Chrome):

1. Go to your repo → **Settings** → **Pages** (left sidebar).
2. Under "Build and deployment" → Source: **Deploy from a branch**.
3. Branch: select `gh-pages`, folder `/ (root)` → **Save**.
4. Wait ~1 minute, refresh the page — GitHub will show your live URL:
   `https://YOUR-USERNAME.github.io/suruchi-birthday/`

That link works on any phone, no app needed.

---

## 7. Making changes later

Any time you want to update the card (new message, different colors, etc.):

```bash
# edit files, e.g. src/config.js
npm run dev        # preview locally
git add .
git commit -m "update message"
git push            # updates source on GitHub
npm run deploy      # rebuilds and re-publishes the live site
```

---

## Project structure

```
suruchi-birthday/
├── index.html            # Vite entry point, loads fonts
├── package.json           # scripts + dependencies
├── vite.config.js         # base path for GitHub Pages
├── src/
│   ├── main.jsx            # React root
│   ├── App.jsx              # scene switcher (envelope → cake → letter)
│   ├── config.js            # <- edit this to personalize text
│   ├── index.css            # all styling / color tokens
│   └── components/
│       ├── PetalField.jsx   # ambient floating petals
│       ├── EnvelopeScene.jsx
│       ├── CakeScene.jsx    # tap-to-blow candles
│       ├── LetterScene.jsx  # staggered message reveal
│       └── Confetti.jsx     # burst animation
```
