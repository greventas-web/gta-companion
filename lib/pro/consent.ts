/** Shown on Stripe Checkout when payments are turned back on. Not rendered on /pro. */
export const TERMS_ACCEPTANCE_MESSAGE =
  "I want Pro now and agree that the 14-day refund right ends once it unlocks. [Terms](https://www.gta-companion.com/terms)";

export function termsOfServiceAccepted(session: { consent?: { terms_of_service?: string | null } | null }): boolean {
  return session.consent?.terms_of_service === "accepted";
}
