import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// ✅ Paste your credentials directly here
initializeApp({
  credential: cert({
    projectId: "interviewsaathi-1",
    clientEmail: "firebase-adminsdk-fbsvc@interviewsaathi-1.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZQug92CnqRMDE\nfQnlhZQVGK/ZL/ivP8oS3m+TRwO3LsGRGzIgmosqDWwM9B04Hcyr35HkQocH5F3J\nOrip1JCnQlg6clUhAOpnVo8AGV8m5TfPUbwPrff2WgdFsgaOz59+ZkW92SmAcEk5\nANbzTRLcW5P38VPDeuQJw3hzRwOZ5Brb6zaB99FgRR2WzHvjsBEwOIQ1vOtgHl9M\nhopbp6vTRQbgC66PMXPAE4slCUR2yAsuo41dzfUOnTga2B8LZIW+PuMRcJhHSkU2\n/nYOIJkebCyfx9HIpAxP5saFXgMQXgFG2o/QdtAFpuBBl09MA44u/kspgEklX36R\nbHYr4MlbAgMBAAECggEAAOX87dyJ99UG8wkNVGyj+x5aA8zl+1uJK2DOF07Q3h4M\nYNw67dWVw7vAeaE8ybGd2gwXn1kDE+5G0QE0KEefvYFRuhQk8/j7/ydlefug4BlM\njMfqvina/6LJqukci9Sh9TTZDvrp6AUO2HR/bwwfite6Gelejk1gygWL5vYhNq6v\n1lg3JO662erJF4KgdkBxIWhi7XG5QpkPnahNtvubE8kCllf6f+k2f65ZAhClcwkD\nsxk0TlWpQAnPE67nCh3ZHpkrXhQ9ujgMQmkj5cSPi1cnPP9l9Pg535EvmzPO9pV1\n+Bf9o+Thcn7FO0/jg/lSOUbf5eXeh5GAzAg6OHrbGQKBgQDwYjWWMJb8JNSprJoF\nZ+CyCZhxBKTyiWBemulm+JK4NRD72+1FV57EkhHJRBeaTBO72PhbdmUYjL+QKfq5\n/nFmv5bg+XtG3gfOmQrOSwFDChyGBtzmwIgNHHE2jVmcevDVZaPeQOvn96OIc+so\n0MbAtJ5+Zz/pSIaYeu/E1Yg11wKBgQDnYCd3juY7lngAY2DG5MHJF/ecU2424cZN\nefSjlrwZCN26Yv5w4O/RSYv4R0rrpgPpNLJevO5y/Y8kK3PbHR1oQXQVsk5MQNoZ\nm69ZcXMdfmXGkqYAaTxDaT+NtnHS2Qpn0D9yYMNDVKf4UN1vWWJm5BUB38FjOlYx\nJ3e7D2zQHQKBgDD8ImVfs3TgYIHPDXfqiixdrjXht2dBPWUp9kQohWWKUtKwJ3LI\n/y6ZgYxdFt43gJH4Dew9fS56iBLtqw0534wLoMhprohreHXOVBhjyncJ2XQqc9uG\nAnOBh0SRm2A64VbrJnCFFE2p9iY5UQN5P/dHF0E08x4rzFnIO5IF3YLzAoGBAK3+\nvS9HoxPEf9Gq6ign9yLGh0pj40oaVwoEYFh1Dla1OCjmMPmp7i6w5DV9R3YWjnJd\nUpWz9o066N4GX0Wzi13PewCl6gOl8V24mhDlI/BWEStXNMayXMNE7qofPVGWLiEL\nlerpoW2MyBQQm7UUvs8pTjLulXuNbyvfxkZBv05xAoGBALYUkPTMPQ8bMg4I2WpG\nb/t8ZVU63HRKR9ShpePgMtJK3riw+OZKzwUdsmdb3uiPLvWaI5Ytgw6+wm0IRq3B\n8Jd39aGHXPw+WhUdMsE3nRrmkTckXDLoE0faDqx+AH2ALlkyjCE6AOnEeutXJ+tL\n4VIeyhiJIstihUGf1jJ7ocR8\n-----END PRIVATE KEY-----\n"
  })
});

const db = getFirestore();

// ✅ Add as many test interviews as you want here
const testInterviews = [
  {
    role: "Frontend Developer",
    type: "Technical",
    level: "Junior",
    language: "Hindi",
    userId: "testuser123",
    finalized: true,
    coverImage: "/covers/reddit.png",
    createdAt: new Date().toISOString(),
    techstack: ["React", "JavaScript", "HTML", "CSS"],
    questions: [
      "Explain the difference between state and props in React.",
      "What is the Virtual DOM in React?",
      "What is the difference between == and === in JavaScript?",
      "What is CSS specificity?",
      "What is a JavaScript Promise?"
    ]
  },
  {
    role: "Frontend Developer- Hindi",
    type: "Technical",
    level: "Junior",
    language: "Hindi",
    userId: "testuser123",
    finalized: true,
    coverImage: "/covers/spotify.png",
    createdAt: new Date().toISOString(),
    techstack: ["React", "JavaScript", "HTML", "CSS"],
    questions: [
      "React में state और props में क्या अंतर है?",
      "Virtual DOM क्या है और यह performance कैसे improve करता है?",
      "JavaScript में == और === में क्या फर्क है?",
      "CSS specificity क्या होती है?",
      "JavaScript Promise क्या है और इसे कैसे use करते हैं?"
    ]
  }
];

async function seed() {
  for (const interview of testInterviews) {
    const ref = await db.collection("interviews").add(interview);
    console.log("✅ Added interview:", ref.id, "| Language:", interview.language);
  }
  console.log("🎉 All done!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});