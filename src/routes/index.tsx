import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/site/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sunshine Pre School & Academy — Little Steps, Big Dreams!" },
      { name: "description", content: "Premium preschool in Coimbatore offering Day Care, Play Group, Pre KG, LKG & UKG. Admissions Open 2026–2027. Safe, joyful, holistic learning." },
      { property: "og:title", content: "Sunshine Pre School & Academy" },
      { property: "og:description", content: "Little Steps, Big Dreams! Admissions open for 2026–2027." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});
