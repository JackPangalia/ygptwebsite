// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });
import { Roboto_Mono, Work_Sans } from 'next/font/google'
// import { Analytics } from "@vercel/analytics/react"

const roboto_mono = Work_Sans({
  subsets: ['latin']
})

export const metadata = {
  icons: {
    icon:'/centonislogov2.png',
},
  title: "Centonis - Custom AI Software Solutions for Business Enhancement",
  description: "Discover Centonis, your partner in AI innovation. We specialize in developing custom proprietary software solutions tailored to enhance your business efficiency and growth. Transform your operations with cutting-edge AI technology. Contact us today for bespoke solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NB4J2WX8DB"></Script>
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NB4J2WX8DB');
        `}
      </Script>
      </head>
      <body className={roboto_mono.className}>
        <Navbar />
        {children}
        <SpeedInsights />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
