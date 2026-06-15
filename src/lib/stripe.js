import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
  seeker_pro: "price_1Tg94WBobJ95YQ8phQiwasxJ",
  seeker_premium: "price_1Tg9r4BobJ95YQ8pdZl7B5Dn",
  recruiter_growth: "price_1TgA3gBobJ95YQ8pZzrFseoW",
  recruiter_enterprise: "price_1TgA4lBobJ95YQ8pHzxSiDpu",
};
