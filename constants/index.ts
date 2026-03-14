import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

// ✅ Deepgram language codes
function getDeepgramLanguageCode(language: string): string {
  const map: Record<string, string> = {
    English: "en",
    Hindi: "hi",
    Spanish: "es",
    French: "fr",
    German: "de",
    Arabic: "ar",
    Portuguese: "pt",
    Italian: "it",
    Japanese: "ja",
    Korean: "ko",
    Chinese: "zh",
    Russian: "ru",
  };
  return map[language] || "en";
}

// ✅ Cheapest voice config that works for all languages
function getVoiceConfig(language: string) {
  if (language === "English") {
    return {
      provider: "11labs" as const,
      voiceId: "sarah",
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 0.9,
      style: 0.5,
      useSpeakerBoost: true,
    };
  }

  // ✅ OpenAI TTS-1 is cheapest and works for all languages
  return {
    provider: "openai" as const,
    voiceId: "alloy", // cheapest, works in all languages
  };
}

export const getInterviewer = (language: string = "English"): CreateAssistantDTO => ({
  name: "Interviewer",
  firstMessage: language === "English"
    ? `Hello! Welcome to the AI-powered interview session. I am your virtual interviewer developed by the A11 Group under the guidance of Dr. Siddharth Hariharan. This interview is designed to simulate a real hiring process. Please answer naturally as if this were a real interview. Let us begin. Could you please tell me about yourself?`
    : language === "Hindi"
    ? `नमस्ते! AI-powered इंटरव्यू सेशन में आपका स्वागत है। मैं आपका वर्चुअल इंटरव्यूअर हूं। यह इंटरव्यू एक असली हायरिंग प्रोसेस को simulate करने के लिए बनाया गया है। कृपया स्वाभाविक रूप से जवाब दें। चलिए शुरू करते हैं। क्या आप मुझे अपने बारे में बता सकते हैं?`
    : language === "Spanish"
    ? `¡Hola! Bienvenido a la sesión de entrevista. Soy su entrevistador virtual. Esta entrevista está diseñada para simular un proceso de contratación real. Por favor responda naturalmente. Empecemos. ¿Podría hablarme de usted?`
    : language === "French"
    ? `Bonjour! Bienvenue à la session d'entretien. Je suis votre intervieweur virtuel. Cet entretien est conçu pour simuler un vrai processus de recrutement. Commençons. Pourriez-vous me parler de vous?`
    : language === "German"
    ? `Hallo! Willkommen zur KI-gestützten Interviewsitzung. Ich bin Ihr virtueller Interviewer. Fangen wir an. Können Sie mir etwas über sich erzählen?`
    : language === "Arabic"
    ? `مرحباً! أهلاً بك في جلسة المقابلة. أنا المقابل الافتراضي الخاص بك. لنبدأ. هل يمكنك إخباري عن نفسك؟`
    : language === "Japanese"
    ? `こんにちは！面接セッションへようこそ。私はあなたのバーチャル面接官です。始めましょう。自己紹介をお願いできますか？`
    : language === "Korean"
    ? `안녕하세요! 면접 세션에 오신 것을 환영합니다. 저는 가상 면접관입니다. 시작하겠습니다. 자기소개를 해주시겠어요?`
    : language === "Chinese"
    ? `你好！欢迎参加AI面试。我是您的虚拟面试官。让我们开始吧。请您做一下自我介绍好吗？`
    : language === "Russian"
    ? `Здравствуйте! Добро пожаловать на сессию собеседования. Я ваш виртуальный интервьюер. Давайте начнём. Расскажите мне о себе?`
    : language === "Portuguese"
    ? `Olá! Bem-vindo à sessão de entrevista. Sou seu entrevistador virtual. Vamos começar. Você poderia me falar sobre você?`
    : language === "Italian"
    ? `Ciao! Benvenuto alla sessione di colloquio. Sono il tuo intervistatore virtuale. Iniziamo. Potresti parlarmi di te?`
    : `Hello! Welcome to the interview session. Let us begin. Could you please tell me about yourself?`,

  transcriber: {
    provider: "deepgram",
    model: "nova-2-general", // ✅ cheaper than nova-2
    language: getDeepgramLanguageCode(language),
  },
  voice: getVoiceConfig(language),
  model: {
    provider: "openai",
    model: "gpt-4o-mini", // ✅ 10x cheaper than gpt-4, works great
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

🌐 LANGUAGE INSTRUCTION - THIS IS THE MOST IMPORTANT RULE:
You MUST conduct this ENTIRE interview in: ${language}
- Speak ONLY in ${language} from the very first word to the very last.
- ALL your responses, questions, acknowledgements, and conclusions must be in ${language}.
- If the candidate speaks in a different language, politely ask them to respond in ${language}.
- Even if the questions below are in English, ASK them in ${language}.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Ask only {{amount}} questions. Choose the most relevant questions randomly from the list provided.

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming.

Use official yet friendly language (in ${language}).
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing - sound natural and conversational.

Answer the candidate's questions professionally:
If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time (in ${language}).
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.

- Be sure to be professional and polite.
- Keep all your responses short and simple.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
});

export const interviewer = getInterviewer("English");

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];