import VenturesClient from "./VenturesClient";

export const metadata = {
  title: "Ventures — Centonis",
  description:
    "Alongside client work, Centonis builds and operates its own software products — quiet bets, made with the same standard.",
  openGraph: {
    title: "Ventures — Centonis",
    description:
      "Alongside client work, Centonis builds and operates its own software products — quiet bets, made with the same standard.",
    images: [
      {
        url: "/ventures-hero.png",
        width: 1200,
        height: 630,
        alt: "Centonis Ventures",
      },
    ],
  },
};

export default function VenturesPage() {
  return <VenturesClient />;
}
