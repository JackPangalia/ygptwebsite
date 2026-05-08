import PortfolioClient from "./PortfolioClient";

export const metadata = {
  title: "Portfolio — Centonis",
  description:
    "Selected portfolio work from Centonis: websites, AI assistants, automation, and custom software systems shaped for serious businesses.",
  openGraph: {
    title: "Portfolio — Centonis",
    description:
      "Selected portfolio work from Centonis: websites, AI assistants, automation, and custom software systems shaped for serious businesses.",
    images: [
      {
        url: "/Centonis_Logo_v5.webp",
        width: 1200,
        height: 630,
        alt: "Centonis Portfolio",
      },
    ],
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
