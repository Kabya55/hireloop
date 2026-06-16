// import ApplicationsTable from './ApplicationTable';

import { getApplicationsByApplicent } from "@/lib/api/applications";
import { getUserSession } from "@/lib/core/session";
import ApplicationsTable from "./ApplicationTable";

export const metadata = {
  title: "My Applications",
  description: "Track the status of your submitted job applications on Hireloop.",
};

const ApplicationsPage = async () => {
  const user = await getUserSession();
  const jobs = await getApplicationsByApplicent(user.id);
  return (
    <div>
      <h1>Applications: {jobs.length}</h1>
      <ApplicationsTable jobs={jobs}></ApplicationsTable>
    </div>
  );
};

export default ApplicationsPage;
