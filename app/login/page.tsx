import Link from "next/link";

import PageTitle from "@/components/PageTitle";

import {
  Badge,
  Button,
  Card,
  Container,
  Section,
} from "@/components/ui";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background text-white">

      <Section>

        <Container>

          <div className="mx-auto max-w-2xl">

            <Badge>Account</Badge>

            <PageTitle
              title="Sign In"
              description="Access your GTA Companion account."
            />

            <Card className="mt-12 rounded-[40px] border-zinc-800 bg-zinc-900 p-10">

              <div className="space-y-8">

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
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 outline-none transition focus:border-pink-500"
                  />

                </div>

                <Button>
                  Sign In
                </Button>

              </div>

              <p className="mt-8 text-center text-zinc-400">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="text-pink-400 hover:underline"
                >
                  Create one
                </Link>
              </p>

            </Card>

          </div>

        </Container>

      </Section>

    </main>
  );
}