import { createFileRoute } from "@tanstack/react-router";
import { DynastyApp } from "@/dynasty/app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <DynastyApp />;
}
