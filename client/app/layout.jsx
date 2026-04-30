import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { defaultMetadata } from "./seo.config";
import { Inter_Tight, JetBrains_Mono, Instrument_Serif } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0A0A0B" />
        <link rel="apple-touch-icon" href="/centonisicon.png" />
        <link rel="icon" href="/centonisicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="google-site-verification"
          content="YCaSyT7OuzrtAQJR48b9K9fw4LbgwpKAsGIckwE_qVU"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Centonis AI Inc.",
              url: "https://www.centonis.com",
              logo: "https://www.centonis.com/Centonis_Logo_v5.webp",
              description:
                "A Vancouver software studio building clean digital work, useful tools, and practical software for businesses.",
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vancouver",
                addressCountry: "Canada",
              },
              sameAs: [
                "https://twitter.com/centonis",
                "https://linkedin.com/company/centonis",
              ],
            }),
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NB4J2WX8DB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NB4J2WX8DB');
          `}
        </Script>
      </head>
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
