"use server";
import { serverFetch } from "./../core/server";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getJobs = async (querySearch) => {
  return serverFetch(`/api/jobs?${querySearch}`);
};

export const getJobById = async (id) => {
  return serverFetch(`/api/jobs/${id}`);
};

export async function getCompanyJobs(companyId, status = "active") {
  const res = await fetch(
    `${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`,
  );
  return res.json();
}
