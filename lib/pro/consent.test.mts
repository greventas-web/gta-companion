import assert from "node:assert/strict";
import { test } from "node:test";
import { TERMS_ACCEPTANCE_MESSAGE, termsOfServiceAccepted } from "./consent.ts";

test("terms checkbox is accepted only when Stripe says so", () => {
  assert.equal(termsOfServiceAccepted({ consent: { terms_of_service: "accepted" } }), true);
  assert.equal(termsOfServiceAccepted({ consent: { terms_of_service: null } }), false);
  assert.equal(termsOfServiceAccepted({}), false);
});

test("checkout terms message names the 14-day right and the terms page", () => {
  assert.match(TERMS_ACCEPTANCE_MESSAGE, /14-day refund right ends once it unlocks/);
  assert.match(TERMS_ACCEPTANCE_MESSAGE, /\[Terms\]\(https:\/\/www\.gta-companion\.com\/terms\)/);
});
