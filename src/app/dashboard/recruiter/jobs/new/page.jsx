import { getLoggedInRecruiterCompany } from "@/lib/api/companies";
import PostJobForm from "./PostJobForm";

export const metadata = {
  title: "Post a New Job",
  description: "Post a new job opening on Hireloop to hire top talent.",
};

const PostJobPage = async () => {
  const company = await getLoggedInRecruiterCompany();
  return (
    <div>
      <PostJobForm company={company} />
    </div>
  );
};

export default PostJobPage;
