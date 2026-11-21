import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-5xl font-semibold tracking-tight">{site.name}</h1>
    </main>
  );
}
