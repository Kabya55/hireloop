import { requireRole } from "@/lib/core/session";

export const metadata = {
  title: "Recruiter Dashboard",
  description: "Manage your job listings, search applicants, and update your company profile.",
};

const RecruiterLayout = async ({ children }) => {
  await requireRole("recruiter");
  return <div>{children}</div>;
};

export default RecruiterLayout;
