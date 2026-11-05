import Link from "next/link";

import { Button, Card } from "@/components/ui";

type Props = {
  title: string;
  description: string;
};

export default function AccountPrompt({
  title,
  description,
}: Props) {
  return (
    <Card className="rounded-[36px] border-zinc-800 bg-zinc-900 p-10">
      <h2 className="text-4xl font-black">{title}</h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        {description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/login">Sign In</Button>

        <Button href="/register" variant="secondary">
          Create Account
        </Button>

        <Link
          href="/"
          className="rounded-2xl border border-zinc-700 px-8 py-4 font-bold transition hover:border-pink-500 hover:text-pink-400"
        >
          Return Home
        </Link>
      </div>
    </Card>
  );
}
