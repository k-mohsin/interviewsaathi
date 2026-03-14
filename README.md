# 🎤 InterviewSaathi

An AI-powered mock interview platform that helps you practice job interviews in multiple languages using voice.

Built by Group A11 under the guidance of **Dr. Siddharth Hariharan**.

---

## 🤔 What does it do?

- You talk to an AI interviewer using your voice
- It asks you real interview questions based on your role and tech stack
- After the interview it gives you detailed feedback and score
- Supports multiple languages like Hindi, English, Spanish and more

---

## 🛠️ Tech used

- **Next.js** - for the website
- **Firebase** - to save user data and login
- **Vapi AI** - for the voice calling part
- **Google Gemini** - to generate interview questions
- **Tailwind CSS** - for styling
- **OpenAI GPT-4o-mini** - for the actual interview conversation

---

## ✨ Features

- 🔐 Login and Signup with email/password
- 🎙️ Voice interview with AI
- 🌍 Multiple language support (Hindi, English, Spanish, French and more)
- 📊 Detailed feedback with score after interview
- 📱 Works on mobile too

---

## 🚀 How to run this project

### Step 1 - Clone the repo
```bash
git clone https://github.com/k-mohsin/interviewsaathi.git
cd interviewsaathi
```

### Step 2 - Install dependencies
```bash
npm install
```

### Step 3 - Create `.env.local` file
Create a file called `.env.local` in the root folder and add these:
```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

You need to get these values from:
- [Firebase Console](https://firebase.google.com)
- [Vapi Dashboard](https://dashboard.vapi.ai)
- [Google AI Studio](https://aistudio.google.com)

### Step 4 - Run it
```bash
npx next dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 🌍 Supported Languages

| Language | Voice | Transcription |
|----------|-------|--------------|
| English | ElevenLabs Sarah | ✅ |
| Hindi | OpenAI Alloy | ✅ |
| Spanish | OpenAI Alloy | ✅ |
| French | OpenAI Alloy | ✅ |
| German | OpenAI Alloy | ✅ |
| Arabic | OpenAI Alloy | ✅ |
| Japanese | OpenAI Alloy | ✅ |
| Korean | OpenAI Alloy | ✅ |
| Chinese | OpenAI Alloy | ✅ |
| Russian | OpenAI Alloy | ✅ |

---

## 📁 Project Structure
```
interviewSaathi/
├── app/              # all pages
├── components/       # reusable components
├── constants/        # config and constants
├── firebase/         # firebase setup
├── lib/              # helper functions
├── public/           # images and assets
└── types/            # typescript types
```

---

## 🌿 Branch Structure

This repo has multiple branches, each for a different stage of development:

| Branch | What's in it |
|--------|-------------|
| `main` | Stable production ready code |
| `dev` | Latest development changes |
| `feature/interview` | Basic interview flow implementation |
| `feature/interview-generation-api` | API for generating interview questions |
| `feature/multi-language-interview` | Multilanguage support (Hindi, Spanish etc) |

### How we work
```
main (stable)
  ↑
dev (testing)
  ↑
feature/xxx (new features)
```


---
