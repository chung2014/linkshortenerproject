import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-zinc-50 via-white to-zinc-100">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <p className="text-lg font-semibold tracking-tight">LinkShortenerProject</p>
        <div className="flex items-center gap-2">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button variant="outline">Sign in</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>Sign up</Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton afterSignOutUrl="/" />
          </Show>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center">
        <span className="rounded-full border border-zinc-200 bg-white px-4 py-1 text-sm text-zinc-600 shadow-sm">
          Clerk authentication is ready
        </span>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Ship secure links with account-backed access
        </h1>
        <p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
          Create an account to manage short links, track usage, and protect routes with Clerk.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Show when="signed-out">
            <SignUpButton mode="modal">
              <Button size="lg">Create your account</Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button size="lg" variant="secondary">
                I already have an account
              </Button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <p className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm">
              You are signed in. Use the profile button in the top right.
            </p>
          </Show>
        </div>
      </main>
    </div>
  );
}
