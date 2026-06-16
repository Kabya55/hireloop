import AdminUsersTable from "@/components/dashboard/AdminUsersTable";
import { getUsersList } from "@/lib/api/users";

export const metadata = {
  title: "Manage Users",
  description: "View and manage user accounts, roles, and permissions on Hireloop.",
};

export default async function AdminUsersPage() {
  const data = await getUsersList();
  const users = data?.users || [];

  console.log("Fetched users data:", data);

  return (
    <div className="min-h-screen bg-[#121212] p-8 text-slate-200">
      <div className="max-w-7xl mx-auto space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-100">
          User Management ({users.length})
        </h2>

        <AdminUsersTable users={users} />
      </div>
    </div>
  );
}
