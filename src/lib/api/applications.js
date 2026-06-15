import { protectedFetch } from "../core/server";

export const getApplicationsByApplicent = async (applicentId) => {
  return protectedFetch(`/api/applications?applicantId=${applicentId}`);
};
