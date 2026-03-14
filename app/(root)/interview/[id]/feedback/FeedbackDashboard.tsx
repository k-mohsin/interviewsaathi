"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { TrendingUp, TrendingDown, Award, Target, BarChart3 } from "lucide-react";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

interface CategoryScore {
  name: string;
  score: number;
}

interface FeedbackDashboardProps {
  totalScore: number;
  categoryScores: CategoryScore[];
}

export default function FeedbackDashboard({
  totalScore,
  categoryScores,
}: FeedbackDashboardProps) {
  /* -------------------- DERIVED ANALYTICS ------------------- */

  const weakestSkill = categoryScores.reduce((a, b) =>
    a.score < b.score ? a : b
  );

  const strongestSkill = categoryScores.reduce((a, b) =>
    a.score > b.score ? a : b
  );

  const averageScore = Math.round(
    categoryScores.reduce((sum, c) => sum + c.score, 0) /
      categoryScores.length
  );

  const readiness =
    totalScore >= 70
      ? "Interview Ready"
      : totalScore >= 50
      ? "Needs Improvement"
      : "Not Ready Yet";

  const readinessColor =
    totalScore >= 70
      ? "text-green-600"
      : totalScore >= 50
      ? "text-yellow-600"
      : "text-red-600";

  const scoreColor =
    totalScore >= 70
      ? "#10b981"
      : totalScore >= 50
      ? "#f59e0b"
      : "#ef4444";

  /* -------------------- CHART DATA -------------------- */

  const doughnutData = {
    labels: ["Score", "Remaining"],
    datasets: [
      {
        data: [totalScore, 100 - totalScore],
        backgroundColor: [scoreColor, "#e5e7eb"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  const doughnutOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: true,
  };

  const barData = {
    labels: categoryScores.map((c) => c.name),
    datasets: [
      {
        label: "Score",
        data: categoryScores.map((c) => c.score),
        backgroundColor: categoryScores.map((c) => {
          if (c.score >= 70) return "#10b981";
          if (c.score >= 50) return "#f59e0b";
          return "#ef4444";
        }),
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1f2937",
        padding: 12,
        cornerRadius: 8,
        titleFont: {
          size: 14,
          weight: "bold" as const,
        },
        bodyFont: {
          size: 13,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            size: 12,
          },
        },
        grid: {
          color: "#e5e7eb",
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  /* -------------------- UI -------------------- */

  return (
    <div className="flex flex-col gap-8 my-8">
      {/* ================= ROW 1: MAIN SCORE CARD ================= */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Overall Score Visualization */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-52 h-52">
              <Doughnut data={doughnutData} options={doughnutOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-5xl font-bold" style={{ color: scoreColor }}>
                  {totalScore}
                </p>
                <p className="text-gray-600 text-sm font-medium">out of 100</p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Readiness Level</p>
                <p className={`text-2xl font-bold ${readinessColor}`}>{readiness}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-green-100 p-3 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Strongest</p>
                  <p className="text-sm font-bold text-gray-800">{strongestSkill.name}</p>
                  <p className="text-green-600 font-bold text-sm">{strongestSkill.score}/100</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-red-100 p-3 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium">Needs Focus</p>
                  <p className="text-sm font-bold text-gray-800">{weakestSkill.name}</p>
                  <p className="text-red-600 font-bold text-sm">{weakestSkill.score}/100</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-purple-100 p-3 rounded-lg">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Average Skill Score</p>
                <p className="text-2xl font-bold text-gray-800">{averageScore}/100</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ROW 2: DETAILED CHARTS ================= */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5 text-indigo-600" />
          <h3 className="font-bold text-lg text-gray-800">Skill Performance</h3>
        </div>
        <Bar data={barData} options={barOptions} />
      </div>

      {/* ================= ROW 3: SCORE LEGEND ================= */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h4 className="font-semibold text-sm text-gray-700 mb-3">Performance Scale</h4>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Excellent (70-100)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <span className="text-sm text-gray-600">Good (50-69)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">Needs Work (0-49)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
