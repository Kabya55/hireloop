import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import { getJobById } from "@/lib/api/jobs";
import JobApply from "./JobApply";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    return {
      title: "Apply for Job",
      description: "Submit your job application on Hireloop.",
    };
  }

  const title = job.jobTitle || job.title || "Job Position";
  const company = job.companyName || job.company || "";

  return {
    title: `Apply for ${title} ${company ? `at ${company}` : ""}`,
    description: `Complete and submit your application for the ${title} role on Hireloop.`,
  };
}
import { getApplicationsByApplicent } from "@/lib/api/applications";
import Link from "next/link";
import { getPlanById } from "@/lib/api/plans";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();

  if (!user) {
    redirect(`/login?redirect=/jobs/${id}/apply`);
  }

  if (user.role !== "seeker") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
        <div className="max-w-md w-full bg-slate-900/70 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
            <span className="text-5xl">🚫</span>
          </div>

          <h1 className="text-3xl font-bold text-white mb-3">Access Denied</h1>

          <p className="text-slate-400 leading-relaxed">
            Only{" "}
            <span className="text-pink-500 font-semibold">Job Seekers</span> can
            apply for jobs.
            <br />
            Please sign in with a seeker account to continue.
          </p>
        </div>
      </div>
    );
  }

  const applications = await getApplicationsByApplicent(user.id);

  const plan = await getPlanById(user?.plan || "seeker_free");
  // const plan = {
  //   name: "Free",
  //   maxApplicationsPerMonth: 3,
  // };

  const job = await getJobById(id);
  const currentCount = applications.length;
  const maxCount = plan.maxApplicationsPerMonth;
  const isLimitReached = currentCount >= maxCount;

  // Calculate percentage for progress bar width safely
  const progressPercentage = Math.min((currentCount / maxCount) * 100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8">
        {/* Header section with job context */}
        <div>
          <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            Application Portal
          </span>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Applying for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              {job?.title || "Position"}
            </span>
          </h1>
          {job?.company && (
            <p className="mt-1 text-sm text-slate-400">{job.company}</p>
          )}
        </div>

        {/* Usage / Plan Tracker Card */}
        <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-5 space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Current Usage ({plan.name} Plan)
              </p>
              <h2 className="text-lg font-semibold text-slate-200 mt-1">
                {currentCount}{" "}
                <span className="text-slate-500 text-sm font-normal">
                  / {maxCount} applications this month
                </span>
              </h2>
            </div>
            {isLimitReached && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                Limit Reached
              </span>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ease-out ${
                isLimitReached
                  ? "bg-gradient-to-r from-red-500 to-pink-500"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500"
              }`}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Upsell text block */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-2 gap-2 text-sm">
            <p className="text-slate-400">
              Need more submissions? Increase your options.
            </p>
            <Link
              href="/plans"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors inline-flex items-center gap-1 group"
            >
              Check out our plans
              <span className="transform group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Application Form Inject / Fallback Message */}
        <div className="pt-2">
          {!isLimitReached ? (
            <JobApply job={job} applicant={user} />
          ) : (
            <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-4 text-center">
              <p className="text-sm text-red-400 font-medium">
                You have maxed out your free tier applications. Please upgrade
                your subscription above to apply for this job.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
