# 🚀 InterviewSaathi – Repository Initialization

This repository contains the source code for **InterviewSaathi**, an AI-powered mock interview platform that generates interview questions, evaluates answers using AI, and provides performance analytics.

## 🎯 Project Goal

Build an AI-based interview preparation platform that helps users practice interviews, receive AI feedback, and track their improvement through dashboards.

## 🛠 Tech Stack

* **Frontend:** Next.js, React, TypeScript
* **UI:** TailwindCSS, Radix UI / Shadcn
* **AI Integration:** VAPI AI / Gemini
* **Backend:** Next.js API routes
* **Database:** Firebase
* **Visualization:** Chart.js / Dashboard Analytics
* **Version Control:** Git + GitHub

## 📂 Repository Structure

```
app/            → Next.js app router pages
components/     → Reusable UI components
constants/      → Static configuration data
firebase/       → Firebase configuration
lib/            → Utility functions and AI logic
types/          → TypeScript interfaces
public/         → Static assets
```

## 👥 Team Responsibilities

### Repository Management

* Branch strategy
* Pull request reviews
* Merge conflict resolution

### Dashboard & Analytics

* Interview performance dashboards
* Data visualization using Chart.js

### AI Workflow

* Interview question generation
* AI answer evaluation
* VAPI AI integration

## 🌱 Branching Strategy

* `main` → stable production branch
* `dev` → development branch
* `feature/<feature-name>` → new feature development
* `bugfix/<issue-name>` → bug fixes

Example:

```
feature/dashboard-analytics
feature/ai-interview-flow
```

## 📌 Contribution Workflow

1. Clone the repository
2. Create a new branch from `dev`

```
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```

3. Make your changes and commit

```
git add .
git commit -m "feat: add dashboard visualization"
```

4. Push your branch

```
git push origin feature/your-feature-name
```

5. Create a **Pull Request** to `dev`

## 📋 Commit Message Convention

```
feat: add new feature
fix: bug fix
docs: documentation update
refactor: code improvement
style: UI updates
```

Example:

```
feat: implement interview analytics dashboard
```

## 🚧 Current Development Areas

* AI Interview Question Generation
* AI Feedback System
* Dashboard Analytics
* User Authentication
* Interview History Tracking

---

Maintainer: **Mohsin – GitHub Repository Manager**
