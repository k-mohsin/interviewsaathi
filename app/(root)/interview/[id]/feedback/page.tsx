import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import FeedbackDashboard from "./FeedbackDashboard";

const Feedback = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  if (!feedback) redirect("/");

  return (
    <section className="section-feedback">
      {/* Header */}
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          Feedback on the Interview –{" "}
          <span className="capitalize">{interview.role}</span> Interview
        </h1>
      </div>

      {/* Meta info */}
      <div className="flex flex-row justify-center mt-4">
        <div className="flex flex-row gap-6">
          <div className="flex gap-2 items-center">
            <Image src="/star.svg" width={22} height={22} alt="star" />
            <p>
              Overall Impression:{" "}
              <span className="text-primary-200 font-bold">
                {feedback.totalScore}
              </span>
              /100
            </p>
          </div>

          <div className="flex gap-2">
            <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
            <p>
              {dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")}
            </p>
          </div>
        </div>
      </div>

      <hr className="my-6" />

      {/* 🔥 DASHBOARD VISUALIZATION */}
      <FeedbackDashboard
        totalScore={feedback.totalScore}
        categoryScores={feedback.categoryScores}
      />

      {/* Final Assessment  */}
      <p className="my-6">{feedback.finalAssessment}</p>

      {/* Interview Breakdown */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Breakdown of the Interview</h2>
        {feedback.categoryScores.map((category, index) => (
          <div key={index}>
            <p className="font-bold">
              {index + 1}. {category.name} ({category.score}/100)
            </p>
            <p>{category.comment}</p>
          </div>
        ))}
      </div>

      {/* Strengths */}
      <div className="flex flex-col gap-3 mt-6">
        <h3 className="font-semibold">Strengths</h3>
        <ul className="list-disc ml-6">
          {feedback.strengths.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      {/* Improvements */}
      <div className="flex flex-col gap-3 mt-6">
        <h3 className="font-semibold">Areas for Improvement</h3>
        <ul className="list-disc ml-6">
          {feedback.areasForImprovement.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-10">
        <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200">
              Back to dashboard
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black">
              Retake Interview
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Feedback;
