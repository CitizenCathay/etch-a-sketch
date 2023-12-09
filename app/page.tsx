"use client";
import Controls from "@/components/Controls";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative overflow-hidden flex-1">
      <Grid />
      <Controls />
    </main>
  );
}
