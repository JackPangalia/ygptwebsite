import "./globals.css";
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import ChatbotToggle from "./components/ChatbotToggle";
import { defaultMetadata } from "./seo.config";
import { Syne, Inter, DM_Sans } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react"

// Syne - For logo only
const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

// DM Sans - Clean, professional font for headlines
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

// Inter - Clean, readable font for body text
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/centonisicon.png" />
        <link rel="icon" href="/centonisicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/vancouverharbour.webm" as="video" type="video/webm" />
        <link rel="preload" href="/fast.jpg" as="image" type="image/jpeg" />
        <meta
          name="google-site-verification"
          content="YCaSyT7OuzrtAQJR48b9K9fw4LbgwpKAsGIckwE_qVU"
        />

        {/* Structured Data for Organization */}
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
                "A venture studio and holding company based in Vancouver. We build high-performance software, scaling human potential through intelligent software.",
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vancouver",
                addressCountry: "Canada"
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
      <body className={`${syne.variable} ${dmSans.variable} ${inter.variable} font-body`}>
        <Navbar />
        {/* <ChatbotToggle /> */}
        {children}
        <SpeedInsights />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
