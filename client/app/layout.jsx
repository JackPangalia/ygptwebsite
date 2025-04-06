// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import ChatbotToggle from "./components/ChatbotToggle";
import { defaultMetadata } from './seo.config';
import { Roboto_Mono, Work_Sans } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react"

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/Centonis_Logo_v5.webp" />
        <link rel="icon" href="/Centonis_Logo_v5.webp" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="YCaSyT7OuzrtAQJR48b9K9fw4LbgwpKAsGIckwE_qVU" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Centonis",
              "url": "https://www.centonis.com",
              "logo": "https://www.centonis.com/Centonis_Logo_v5.webp",
              "description": "Custom AI software solutions for business enhancement",
              "sameAs": [
                "https://twitter.com/centonis",
                "https://linkedin.com/company/centonis"
              ]
            })
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
      <body className={work_sans.className}>
        <Navbar />
        <ChatbotToggle />
        {children}
        <SpeedInsights />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
