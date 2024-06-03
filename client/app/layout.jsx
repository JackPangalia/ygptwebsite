// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// const inter = Inter({ subsets: ["latin"] });
import { Roboto_Mono, Work_Sans } from 'next/font/google'

const roboto_mono = Work_Sans({
  subsets: ['latin']
})

export const metadata = {
  title: "Centonis - Custom AI Software Solutions for Business Enhancement",
  description: "Discover Centonis, your partner in AI innovation. We specialize in developing custom proprietary software solutions tailored to enhance your business efficiency and growth. Transform your operations with cutting-edge AI technology. Contact us today for bespoke solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
