"use client";
import {
  Briefcase,
  Persons,
  Thunderbolt,
  CircleCheck,
} from "@gravity-ui/icons";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { useSession } from "@/lib/auth-client";

const RecruiterPage = () => {
  const { data: session, isPending } = useSession();
  if (isPending) return <p>Loading...</p>;
  if (!session) return <p>You must be logged in to view this page.</p>;
  const user = session?.user;

  const recruiterStats = [
    { title: "Total Job Posts", value: "48", icon: Briefcase },
    { title: "Total Applicants", value: "1,284", icon: Persons },
    { title: "Active Jobs", value: "18", icon: Thunderbolt },
    { title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];
  return (
    <div>
      <p>Welcome, {user?.name}!</p>
      <DashboardStats statsData={recruiterStats} />
    </div>
  );
};

export default RecruiterPage;
