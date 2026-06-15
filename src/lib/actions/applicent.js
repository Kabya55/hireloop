"use server";

import { serverMutation } from "../core/server";

export const submitApplication = async (payload) => {
  return serverMutation(`/api/applications`, payload);
};
