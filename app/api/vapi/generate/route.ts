import { generateText } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

// Helper to safely parse AI JSON
function safeJsonParse(text: string) {
  const cleaned = text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}

export async function POST(request: Request) {
  // ✅ Added "language" here
  const { type, role, level, techstack, amount, userid, language } =
    await request.json();

  // ✅ Default to English if no language provided
  const interviewLanguage = language || "English";

  try {
    const { text } = await generateText({
      model: google("gemini-2.5-flash"),
      responseFormat: "json",
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 800
      },

      prompt: `
Prepare interview questions.

Role: ${role}
Experience level: ${level}
Tech stack: ${techstack}
Focus: ${type}
Number of questions: ${Math.min(amount, 10)}
Language: ${interviewLanguage}

Rules:
- Return ONLY a JSON array of strings
- Write ALL questions in ${interviewLanguage} language
- No markdown
- No explanations
- No special characters like / or *
`
    });

    let parsedQuestions;
    try {
      parsedQuestions = safeJsonParse(text);
    } catch (err) {
      console.error("Invalid AI JSON:", text);
      return Response.json(
        { success: false, error: "AI returned invalid JSON" },
        { status: 500 }
      );
    }

    if (!Array.isArray(parsedQuestions)) {
      return Response.json(
        { success: false, error: "Questions is not an array" },
        { status: 500 }
      );
    }

    const interview = {
      role,
      type,
      level,
      techstack: techstack.split(","),
      questions: parsedQuestions,
      userId: userid,
      language: interviewLanguage, // ✅ Save language to database
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString()
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error("API ERROR:", error?.message || error);

    if (error?.message?.includes("Quota")) {
      return Response.json(
        { success: false, error: "AI quota exceeded. Try later." },
        { status: 429 }
      );
    }

    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json(
    { success: true, data: "Thank you!" },
    { status: 200 }
  );
}
