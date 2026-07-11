import Link from "next/link";

import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Button,
  Card,
  Container,
  Section,
} from "@/components/ui";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <div className="mx-auto max-w-2xl">

            <Badge>Create Account</Badge>

            <PageTitle
              title="Join GTA Companion"
              description="Create your free account and unlock your personal GTA VI experience."
            />

            <Card className="mt-12 rounded-[40px] border-zinc-800 bg-zinc-900 p-10">

              <div className="space-y-8">

                <div>

                  <label className="mb-3 block font-semibold">
                    Username
                  </label>

                  <input
                    type="text"
                    placeholder="Choose a username"
                    className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 outline-none transition focus:border-pink-500"
                  />

                </div>

                <div>

                  <label className="mb-3 block font-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 outline-none transition focus:border-pink-500"
                  />

                </div>

                <div>

                  <label className="mb-3 block font-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 outline-none transition focus:border-pink-500"
                  />

                </div>

                <div>

                  <label className="mb-3 block font-semibold">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 outline-none transition focus:border-pink-500"
                  />

                </div>

                <Button>
                  Create Account
                </Button>

              </div>

              <p className="mt-8 text-center text-zinc-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-pink-400 hover:underline"
                >
                  Sign in
                </Link>
              </p>

            </Card>

          </div>

        </Container>

      </Section>

    </main>
  );
}