# 🎓 FDV 103 Group Project – Vue.js/Tailwind CSS - CoLab

Welcome to our collaborative Vue.js project for **FDV 103: JavaScript Frameworks** at McMaster University Continuing Education. This is part of our Experiential Learning component and represents a key deliverable in demonstrating our practical understanding of JavaScript, modern frameworks, and core web development skills.

---

## 🧠 Project Objective

We're building a **Vue 3** web application with three main pages. This project will help us apply:

- JavaScript framework fundamentals
- Reactive component-driven design
- Source control with Git & GitHub
- API mocking and data binding
- Collaborative development workflows

---

## 👩‍💻 Team Info

We are a team of 14 students enrolled in the **Spring/Summer 2025** session of FDV 103. Instructor: **Noam Eppel**  
📅 Course runs: **May 5 – July 27, 2025**

---

## 🔧 Tech Stack

- **Vue 3**
- **Vite** – fast dev server and build tool
- **json-server** – for mocking RESTful APIs
- **Git & GitHub** – version control and collaboration
- Optional: ESLint, Prettier, TypeScript (for code quality)

---

## 🗂️ Folder Structure (WIP)

src/
├── assets/
│ └── base.css # Baseline CSS styles
├── components/ # Shared Vue components
├── pages/ # Our three core pages
├── App.vue # Root component
├── main.js # App entry point
├── router.js # Vue Router configuration
db.json # Mock API data

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR-GROUP-REPO/vue-fdv103-project.git
cd vue-fdv103-project
```

### 2. Install dependencies

```bash
bash
Copy
Edit
npm install
```

### 3. Run the dev server and mock API concurrently
```bash
Copy
Edit
npm run dev:all
```

This runs:

```bash
Vite dev server (usually on http://localhost:5173)
json-server for mock API (on http://localhost:8000)
```
```
📄 Scripts
json
Copy
Edit
"scripts": {
  "dev": "vite",
  "api": "json-server --watch db.json --port 8000",
  "dev:all": "run-p dev api",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --fix",
  "format": "prettier --write src/"
}
```

### ✅ Expectations

This project supports the following course learning outcomes:

Practice JavaScript and modern frameworks (Vue.js)
Build interactive, mobile-first designs
Use web development tools (e.g. Git, Vite, npm)
Collaborate effectively on a web application
Document and present your code in a professional manner

### ✍️ Contribution Guidelines

```bash

Use feature branches: git checkout -b feature/your-feature-name
Pull regularly: git pull origin main
Commit often, commit clearly: e.g. git commit -m "Add About page component"
Open a pull request for each major change
Use the Git/GitHub onboarding doc for help

```

### 🧪 Future Work
 
 Add reusable Vue components
 Set up Vue Router for 3 main pages
 Integrate real or mocked data via API
 Write simple unit tests with Vitest
 Deploy to GitHub Pages or Netlify

### 📬 Questions or Support

If you're stuck or unsure how to proceed, reach out to:

Travis, Daniel, or Natalie (group leads)
Use the #group-project discussion board in Avenue to Learn

### 📚 Course Reference
This repository is part of the experiential learning requirement for:

FDV 103 – JavaScript Frameworks
Instructor: Noam Eppel
McMaster Continuing Education | May–July 2025
Group Project Weight: 50% of final grade
