import { requireRole } from "@/lib/core/session";

export const metadata = {
  title: "Seeker Dashboard",
  description: "Track your job applications, view matches, and manage your career profile.",
};

const RecruiterLayout = async ({ children }) => {
  await requireRole("seeker");
  return <div>{children}</div>;
};

export default RecruiterLayout;
