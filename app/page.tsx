import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import {
  ArrowRight,
  ChartNoAxesColumn,
  Link2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

const featureHighlights = [
  {
    title: "Create branded short links",
    description:
      "Turn long URLs into clean links that are easier to share across campaigns, docs, and social posts.",
    icon: Link2,
  },
  {
    title: "Track link performance",
    description:
      "Monitor how your links perform so you can quickly spot which destinations and campaigns are working.",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Keep access secure",
    description:
      "Use Clerk-backed accounts and protected routes so link management stays inside your authenticated workspace.",
    icon: ShieldCheck,
  },
] as const;

const workflowSteps = [
  "Create an account with Clerk in a secure modal flow.",
  "Shorten and organize links from one dashboard.",
  "Review performance and keep team access protected.",
] as const;

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-muted/30">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div>
          <p className="text-lg font-semibold tracking-tight">LinkShortenerProject</p>
          <p className="text-sm text-muted-foreground">
            Secure link management for modern teams
          </p>
        </div>
        <div className="flex items-center gap-2">
          <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
            <Button variant="outline">Sign in</Button>
          </SignInButton>
          <SignUpButton mode="modal" fallbackRedirectUrl="/dashboard">
            <Button>Sign up</Button>
          </SignUpButton>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 py-10 sm:py-16">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1 text-sm text-muted-foreground shadow-sm">
              <Sparkles className="size-4" />
              Built for secure, measurable link sharing
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Launch short links your team can manage with confidence.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                LinkShortenerProject helps teams create polished short links,
                review performance, and keep management behind Clerk-protected
                access.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <SignUpButton mode="modal" fallbackRedirectUrl="/dashboard">
                <Button size="lg">
                  Get started
                  <ArrowRight className="size-4" />
                </Button>
              </SignUpButton>
              <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
                <Button size="lg" variant="secondary">
                  I already have an account
                </Button>
              </SignInButton>
            </div>
            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              <li className="rounded-2xl border border-border bg-card px-4 py-3 shadow-sm">
                Faster sharing
              </li>
              <li className="rounded-2xl border border-border bg-card px-4 py-3 shadow-sm">
                Actionable analytics
              </li>
              <li className="rounded-2xl border border-border bg-card px-4 py-3 shadow-sm">
                Protected workspace
              </li>
            </ul>
          </div>

          <aside className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground">
                Why teams choose it
              </p>
              <div className="space-y-3">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-2xl border border-border/80 bg-background/80 p-4"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="space-y-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">
              Built for sharing, measuring, and staying secure
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              From the first visit, teams can see the app&apos;s core workflow:
              shorten links, monitor engagement, and keep management inside an
              authenticated dashboard.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featureHighlights.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-muted text-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
