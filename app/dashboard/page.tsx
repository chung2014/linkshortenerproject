import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-background via-background to-muted/30">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <p className="text-lg font-semibold tracking-tight">
          LinkShortenerProject
        </p>
        <UserButton />
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Dashboard
        </h1>
      </main>
    </div>
  );
}
