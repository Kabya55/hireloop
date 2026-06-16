import { getUserSession } from "@/lib/core/session";
import CompanyProfile from "./CompanyProfile";
import { getRecruiterCompany } from "@/lib/api/companies";

export const metadata = {
  title: "Company Profile",
  description: "Manage and update your company details, logo, and website link.",
};

const CompanyPage = async () => {
  const user = await getUserSession();
  const company = await getRecruiterCompany(user?.id);
  return (
    <div>
      <CompanyProfile recruiter={user} recruiterCompany={company} />
    </div>
  );
};

export default CompanyPage;
